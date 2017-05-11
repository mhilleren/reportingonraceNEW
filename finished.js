<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var slidesArray=["Images/Cornfield.jpg", "Images/Historic.jpg", "Images/Landscape.jpg"]
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>

// <script>
// var myImage=document.getElementsByClassName("mySlides");
// var imageArray=["Images/Cornfield.jpg", "Images/Historic.jpg", "Images/Landscape.jpg"];
// var imageIndex=0;
// function changeImage(){
//   myPhoto.setAttribute("src", imageArray[imageIndex]);
//   imageIndex++;
//   if (imageIndex >= imageArray.length){
//     imageIndex=0;
//   }
// }
// var intervalHandle = setInterval(changeImage, 2000);
// myPhoto.onclick=function(){
//   clearInterval(intervalHandle);
// }
//
// </script>
// <script>
// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }
// </script>
