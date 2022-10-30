
// /* -----------------------------------
// IPHONE HEIGHT
// -------------------------------------- */
// window.onload = mobileWindow();

// function mobileWindow() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
//   console.log("VH on mobiles", vh);
// }

// window.addEventListener("resize", mobileWindow, false);
// window.addEventListener("orientationchange", mobileWindow, false);


// /* -----------------------------------
// SCROLLERS
// -------------------------------------- */

var $close0 = document.querySelector('#close0');

function close0() {
  document.querySelector('.contenu2').scrollIntoView({
    behavior: 'smooth'
  });
}
$close0.addEventListener('click', close0);

var $top = document.querySelector('#top');

function toTop() {
  window.scrollTo(0, 0);({
    behavior: 'smooth'
  });
}
$top.addEventListener('click', toTop);


// /* -----------------------------------
// SECTIONS
// -------------------------------------- */

var $close1 = document.querySelector('#close1');
var $close2 = document.querySelector('#close2');
var $close3 = document.querySelector('#close3');
var $close4 = document.querySelector('#close4');
var $close5 = document.querySelector('#close5');
var $close6 = document.querySelector('#close6');
var $close7 = document.querySelector('#close7');

var $card1 = document.querySelector('#card1');
var $section1 = document.querySelector('#section1');

var $card2 = document.querySelector('#card2');
var $section2 = document.querySelector('#section2');

var $card3 = document.querySelector('#card3');
var $section3 = document.querySelector('#section3');

var $card4 = document.querySelector('#card4');
var $section4 = document.querySelector('#section4');

var $card5 = document.querySelector('#card5');
var $section5 = document.querySelector('#section5');

var $card6 = document.querySelector('#card6');
var $section6 = document.querySelector('#section6');

var $card7 = document.querySelector('#card7');
var $section7 = document.querySelector('#section7');


function close1() {
  $section1.classList.add("hidden");
  $section2.classList.add("hidden");
  $section3.classList.add("hidden");
  $section4.classList.add("hidden");
  $section5.classList.add("hidden");
  $section6.classList.add("hidden");
  $section7.classList.add("hidden");
}
$close1.addEventListener('click', close1);
$close2.addEventListener('click', close1);
$close3.addEventListener('click', close1);
$close4.addEventListener('click', close1);
$close5.addEventListener('click', close1);
$close6.addEventListener('click', close1);
$close7.addEventListener('click', close1);

$section1.addEventListener('click', close1);
$section2.addEventListener('click', close1);
$section3.addEventListener('click', close1);
$section4.addEventListener('click', close1);
$section5.addEventListener('click', close1);
$section6.addEventListener('click', close1);
$section7.addEventListener('click', close1);


function open1() {
  $section1.classList.remove("hidden");
}
$card1.addEventListener('click', open1);

function open2() {
  $section2.classList.remove("hidden");
}
$card2.addEventListener('click', open2);

function open3() {
  $section3.classList.remove("hidden");
}
$card3.addEventListener('click', open3);

function open4() {
  $section4.classList.remove("hidden");
}
$card4.addEventListener('click', open4);

function open5() {
  $section5.classList.remove("hidden");
}
$card5.addEventListener('click', open5);

function open6() {
  $section6.classList.remove("hidden");
}
$card6.addEventListener('click', open6);

function open7() {
  $section7.classList.remove("hidden");
}
$card7.addEventListener('click', open7);

window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    $section1.classList.add("hidden");
    $section2.classList.add("hidden");
    $section3.classList.add("hidden");
    $section4.classList.add("hidden");
    $section5.classList.add("hidden");
    $section6.classList.add("hidden");
    $section7.classList.add("hidden");
  }
}


