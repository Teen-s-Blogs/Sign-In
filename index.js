function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").text(profile.getImgUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
  }