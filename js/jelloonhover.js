/*Adding Jello animation on hover on Parallax Section*/
$(function() {
    var animationName = "animated jello";
    var animationEnd =
      "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

    $("#hoverMe").mouseover(function() {
      $("#hoverMe")
        .addClass(animationName)
        .one(
          animationEnd,

          function() {
            $(this).removeClass(animationName);
          }
        );
    });
  });