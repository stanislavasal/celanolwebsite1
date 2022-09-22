$(document).ready(function(){
  $(".content").addClass("yes");
  $(".image").addClass("no");
  $(".img18").click(function() {
      if ($(".content").hasClass("yes")){
        $(".content").removeClass("yes");
        $(".image").removeClass("yes");
        $(".content").addClass("no");
        $(".image").addClass("no");
        $(".content1").removeClass("no");
        $(".image1").removeClass("no");
        $(".content1").addClass("yes");
        $(".image1").addClass("yes");
      }
      else if ($(".content1").hasClass("yes")){
        $(".content1").removeClass("yes");
        $(".image1").removeClass("yes");
        $(".content1").addClass("no");
        $(".image1").addClass("no");
        $(".content2").removeClass("no");
        $(".image2").removeClass("no");
        $(".content2").addClass("yes");
        $(".image2").addClass("yes");
      }
      else if ($(".content2").hasClass("yes")){
        $(".content2").removeClass("yes");
        $(".image2").removeClass("yes");
        $(".content2").addClass("no");
        $(".image2").addClass("no");
        $(".content3").removeClass("no");
        $(".image3").removeClass("no");
        $(".content3").addClass("yes");
        $(".image3").addClass("yes");
      }
      else if ($(".content3").hasClass("yes")){
        $(".content3").removeClass("yes");
        $(".image3").removeClass("yes");
        $(".content3").addClass("no");
        $(".image3").addClass("no");
        $(".content4").removeClass("no");
        $(".image4").removeClass("no");
        $(".content4").addClass("yes");
        $(".image4").addClass("yes");
      }
      else {
        $(".content4").removeClass("yes");
        $(".image4").removeClass("yes");
        $(".content4").addClass("no");
        $(".image4").addClass("no");
        $(".content").removeClass("no");
        $(".image").removeClass("no");
        $(".content").addClass("yes");
        $(".image").addClass("yes");
      }
  });
  $(".img4").click(function() {
    if ($(".image").hasClass("yes")){
      $(".content").removeClass("no");
      $(".content").addClass("yes");
      $(".image").removeClass("yes");
      $(".image").addClass("no");
    }
    else if ($(".image1").hasClass("yes")){
      $(".content1").removeClass("no");
      $(".content1").addClass("yes");
      $(".image1").removeClass("yes");
      $(".image1").addClass("no");
    }
    else if ($(".image2").hasClass("yes")){
      $(".content2").removeClass("no");
      $(".content2").addClass("yes");
      $(".image2").removeClass("yes");
      $(".image2").addClass("no");
    }
    else if ($(".image3").hasClass("yes")){
      $(".content3").removeClass("no");
      $(".content3").addClass("yes");
      $(".image3").removeClass("yes");
      $(".image3").addClass("no");
    }
    else {
      $(".content4").removeClass("no");
      $(".content4").addClass("yes");
      $(".image4").removeClass("yes");
      $(".image4").addClass("no");
    }
  });

  $(".img20").click(function() {
    if ($(".content").hasClass("yes")){
      $(".content").removeClass("yes");
      $(".content").addClass("no");
      $(".image").removeClass("no");
      $(".image").addClass("yes");
    }
    else if ($(".content1").hasClass("yes")){
      $(".content1").removeClass("yes");
      $(".content1").addClass("no");
      $(".image1").removeClass("no");
      $(".image1").addClass("yes");
    }
    else if ($(".content2").hasClass("yes")){
      $(".content2").removeClass("yes");
      $(".content2").addClass("no");
      $(".image2").removeClass("no");
      $(".image2").addClass("yes");
    }
    else if ($(".content3").hasClass("yes")){
      $(".content3").removeClass("yes");
      $(".content3").addClass("no");
      $(".image3").removeClass("no");
      $(".image3").addClass("yes");
    }
    else {
      $(".content4").removeClass("yes");
      $(".content4").addClass("no");
      $(".image4").removeClass("no");
      $(".image4").addClass("yes");
    }
  });
  $(".img19").click(function() {
      if ($(".content").hasClass("yes")){
        $(".content").removeClass("yes");
        $(".image").removeClass("yes");
        $(".content").addClass("no");
        $(".image").addClass("no");
        $(".content4").removeClass("no");
        $(".image4").removeClass("no");
        $(".content4").addClass("yes");
        $(".image4").addClass("yes");
      }
      else if ($(".content4").hasClass("yes")){
        $(".content4").removeClass("yes");
        $(".image4").removeClass("yes");
        $(".content4").addClass("no");
        $(".image4").addClass("no");
        $(".content3").removeClass("no");
        $(".image3").removeClass("no");
        $(".content3").addClass("yes");
        $(".image3").addClass("yes");
      }
      else if ($(".content3").hasClass("yes")){
        $(".content3").removeClass("yes");
        $(".image3").removeClass("yes");
        $(".content3").addClass("no");
        $(".image3").addClass("no");
        $(".content2").removeClass("no");
        $(".image2").removeClass("no");
        $(".content2").addClass("yes");
        $(".image2").addClass("yes");
      }
      else if ($(".content2").hasClass("yes")){
        $(".content2").removeClass("yes");
        $(".image2").removeClass("yes");
        $(".content2").addClass("no");
        $(".image2").addClass("no");
        $(".content1").removeClass("no");
        $(".image1").removeClass("no");
        $(".content1").addClass("yes");
        $(".image1").addClass("yes");
      }
      else {
        $(".content1").removeClass("yes");
        $(".image1").removeClass("yes");
        $(".content1").addClass("no");
        $(".image1").addClass("no");
        $(".content").removeClass("no");
        $(".image").removeClass("no");
        $(".content").addClass("yes");
        $(".image").addClass("yes");
      }
  });
});
