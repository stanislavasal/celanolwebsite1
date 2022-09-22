$(document).ready(function(){
  $(".img40").addClass("yes");
  $(".img40").click(function() {
    if ($(".img40").hasClass("yes")){
      $(".img40").css("transform", "rotate(45deg)");
      $(".img40").removeClass("yes");
    }
    else {
      $(".img40").css("transform", "rotate(90deg)");
      $(".img40").addClass("yes");
    }
  });
});
