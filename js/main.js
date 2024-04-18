let slideIndex = 1;

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slider = [...document.querySelector(".slides").children];
  slider.map((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}

setInterval(() => {
  slideIndex += 1;
  if (slideIndex == 4) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 4000);
