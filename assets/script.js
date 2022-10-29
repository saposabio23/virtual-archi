
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
// TITLE ON SCROLL
// -------------------------------------- */
// window.onscroll = function() {
//   scrollTitle()
// };

// function scrollTitle() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     $h1.classList.add("mejorsize1")
//     $h2.classList.add("mejorsize2")
//     $title.classList.add("mejorsizetitle")
//   } else {
//     $h1.classList.remove("mejorsize1")
//     $h2.classList.remove("mejorsize2")
//     $title.classList.remove("mejorsizetitle")
//   }
// }


// /* -----------------------------------
// SECTIONS
// -------------------------------------- */

var $close1 = document.querySelector('#close1');
var $close2 = document.querySelector('#close2');
var $close3 = document.querySelector('#close3');
var $videoCard = document.querySelector('#videoCard');
var $videoSection = document.querySelector('#videoSection');
var $parcoursCard = document.querySelector('#parcoursCard');
var $parcoursSection = document.querySelector('#parcoursSection');
var $imagesCard = document.querySelector('#imagesCard');
var $imagesSection = document.querySelector('#imagesSection');

function closeVideo() {
  $videoSection.classList.add("hidden");
  $parcoursSection.classList.add("hidden");
  $imagesSection.classList.add("hidden");
}
$close1.addEventListener('click', closeVideo);

function openVideo() {
  $videoSection.classList.remove("hidden");
}
$videoCard.addEventListener('click', openVideo);



function closeParcours() {
  $videoSection.classList.add("hidden");
  $parcoursSection.classList.add("hidden");
  $imagesSection.classList.add("hidden");
}
$close2.addEventListener('click', closeParcours);

function openParcours() {
  $parcoursSection.classList.remove("hidden");
}
$parcoursCard.addEventListener('click', openParcours);




function closeImages() {
  $videoSection.classList.add("hidden");
  $parcoursSection.classList.add("hidden");
  $imagesSection.classList.add("hidden");

}
$close3.addEventListener('click', closeImages);

function openImages() {
  $imagesSection.classList.remove("hidden");
}
$imagesCard.addEventListener('click', openImages);


window.onkeydown = function( event ) {
  if ( event.keyCode == 27 ) {
    $videoSection.classList.add("hidden");
    $parcoursSection.classList.add("hidden");
    $imagesSection.classList.add("hidden");
  }
};