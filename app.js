const btn = document.querySelector(".btn__button");
const mario = document.querySelector(".imgMario");

btn.addEventListener("click", () => {
  // removeActiveClasses()
  mario.classList.toggle("active");
});

function removeActiveClasses() {
  btn.addEventListener("click", () => {
    mario.classList.remove("active");
  });
}

// btn.addEventListener("click", () => {
//     remove();
//     mario.classList.add("active");
//   });

// function remove() {

//     mario.classList.remove("active");

//   };
