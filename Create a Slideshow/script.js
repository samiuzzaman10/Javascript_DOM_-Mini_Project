const slidshowElements = document.querySelectorAll(".slidshow-element");

let countElements = 1;

setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  if (countElements > slidshowElements.length) {
    slidshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);

console.log(slidshowElements);
