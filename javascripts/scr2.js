$(document).ready(function(){
  $(".content").addClass("yes");
  $(".img18").click(function() {
      if ($(".content").hasClass("yes")){
        $(".content").removeClass("yes");
        $(".content").addClass("no");
        $(".content1").removeClass("no");
        $(".content1").addClass("yes");
      }
      else if ($(".content1").hasClass("yes")){
        $(".content1").removeClass("yes");
        $(".content1").addClass("no");
        $(".content2").removeClass("no");
        $(".content2").addClass("yes");
      }
      else {
        $(".content2").removeClass("yes");
        $(".content2").addClass("no");
        $(".content").removeClass("no");
        $(".content").addClass("yes");
      }
    });
  $(".img19").click(function() {
      if ($(".content").hasClass("yes")){
        $(".content").removeClass("yes");
        $(".content").addClass("no");
        $(".content2").removeClass("no");
        $(".content2").addClass("yes");
      }
      else if ($(".content2").hasClass("yes")){
        $(".content2").removeClass("yes");
        $(".content2").addClass("no");
        $(".content1").removeClass("no");
        $(".content1").addClass("yes");
      }
      else {
        $(".content1").removeClass("yes");
        $(".content1").addClass("no");
        $(".content").removeClass("no");
        $(".content").addClass("yes");
      }
    });
});
