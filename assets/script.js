
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

var $img1= document.querySelector('#img1');
var $img2= document.querySelector('#img2');
var $img3= document.querySelector('#img3');
var $img4= document.querySelector('#img4');

function clickToFullImage1 (){
  $img1.classList.toggle("imgbackFull")
  $img1.classList.toggle("imglPlus")

}
$img1.addEventListener('click', clickToFullImage1)


function clickToFullImage2 (){
  $img2.classList.toggle("imgbackFull")
}
$img2.addEventListener('click', clickToFullImage2)


function clickToFullImage3 (){
  $img3.classList.toggle("imgbackFull")
}
$img3.addEventListener('click', clickToFullImage3)


function clickToFullImage4 (){
  $img4.classList.toggle("imgbackFull")
}
$img4.addEventListener('click', clickToFullImage4)

