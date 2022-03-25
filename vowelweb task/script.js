const sliderImg = document.querySelectorAll(".slider-img")
const burger = document.getElementById('burger')
console.log(burger)

function setSlideToLeft(){
  sliderImg.forEach(function (slide,index) {
      slide.style.left = `${index * 100}%`;
  })
}
setSlideToLeft()

let counter = 0;
function carousel() {

  //   working with slides
    if (counter === sliderImg.length) {
      counter = 0;
      // sliderImg.forEach(function (slide) {
      //   slide.style.transform = `translateX(-${counter * 100}%)`;
      // });
    }
    if (counter < 0) {
      counter = sliderImg.length - 1;
    }
    // working with buttons
  
    if (counter < sliderImg.length - 1 || counter > 0 ) {
      setSlideToLeft()
    
    } 
    sliderImg.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
 
setInterval(() => {
  counter++
  carousel()
}, 2000);

burger.addEventListener('click',()=>{
    console.log('clicked')
})