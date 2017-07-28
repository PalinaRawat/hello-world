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

