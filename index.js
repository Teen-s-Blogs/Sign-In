
function onSignIn(googleUser) {
  // Get the user's ID token and basic profile information
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();
  
  // Send the ID token and profile information to your server
  // for server-side verification and processing
  // (replace YOUR_SERVER_URL with the URL of your server-side script)
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'YOUR_SERVER_URL');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
  };
  xhr.send('idtoken=' + id_token + '&name=' + encodeURIComponent(profile.getName()));
}

function onSignOut() {
  // sign out user from Google
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });

  // send sign out signal to your server
  // (replace YOUR_SERVER_URL with the URL of your server-side script)
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'YOUR_SERVER_URL?signout=true');
  xhr.onload = function() {
    console.log(xhr.responseText);
  };
  xhr.send();
}
