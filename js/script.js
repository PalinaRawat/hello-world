var $div = $("#star");
var $div1 = $("star1");


function withVelocity() {
  $div1
    .velocity("fadeIn", { duration: 1500, loop: true })
    .velocity("fadeOut", { duration: 1500, loop:true });
 

$div
    .velocity("fadeIn", { duration: 1500, loop: true })
    .velocity("fadeOut", { duration: 1500, loop:true });
 



 
}

window.onload = withVelocity;

$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 500,
            offset: -40,
            easing: 'ease-in-out'
        });
    });
});