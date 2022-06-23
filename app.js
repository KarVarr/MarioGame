const btn = document.querySelector(".btn__button");
const mario = document.querySelector(".imgMario");
const mashroom = document.querySelector(".img__mush");


const marioTop = parseInt(
  window.getComputedStyle(mario).getPropertyValue("top")
);
const mushroomLeft = parseInt(
  window.getComputedStyle(mashroom).getPropertyValue("left")
);

function jump () {
    btn.addEventListener("click", () => {
     if(mario.classList != 'active'){
      mario.classList.add("active");
     }
      setTimeout(function(){
         mario.classList.remove("active");
      }, 500)
    });
}
jump ()

 
const check = setInterval(function () {

console.log(marioTop, mushroomLeft);
    if (mushroomLeft < 1641 && mushroomLeft > 0 && marioTop >= 1700) {
      alert(`You'r lose!`);
    }
},10)   