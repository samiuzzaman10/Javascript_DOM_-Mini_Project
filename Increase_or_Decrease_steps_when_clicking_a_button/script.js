const countNumber = document.querySelector(".countNumber");
const buttonPlus = document.querySelector(".btn-add");
const buttonSub = document.querySelector(".btn-sub");

let count = 0;

const updateCounter = (value) => {
  // plus buttton
  count += value;
  countNumber.innerText = count;
  if (count >= 10) {
    buttonPlus.setAttribute("disabled", true);
  } else {
    buttonPlus.removeAttribute("disabled", false);
  }

  // mainus button
  countNumber.innerText = count;
  if (count <= 0) {
    buttonSub.setAttribute("disabled", true);
  } else {
    buttonSub.removeAttribute("disabled", false);
  }
};

buttonPlus.addEventListener("click", () => {
    updateCounter(1)
});

buttonSub.addEventListener("click", () => {
    updateCounter(-1)
});
