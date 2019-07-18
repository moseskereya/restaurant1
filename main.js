const navDisplay = document.querySelector('.nav-responsive');
const menuIccon = document.querySelector('.menu')


let navStatus = 1

menuIccon.addEventListener('click', function(){
    if(navStatus === 1){
    navDisplay.style.display = "block";
           navStatus = 0
    }else{
        navDisplay.style.display = 'none';
        navStatus = 1;
    }
})



let slideStatus = 0;

function showSlides() {
  var moses= document.getElementsByClassName("mySlides");
  for (i = 0; i < moses.length; i++) {
    moses[i].style.display = "none"; 
  }
 
  slideStatus++;
  if (slideStatus > moses.length) {slideStatus= 1} 
  moses[slideStatus-1].style.display = "block"; 
  setTimeout(showSlides, 6000); 
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
showSlides();