const generateRGBColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
};

const updateColor = () => {
  const color = generateRGBColor();
  const colorBox = document.getElementById("color-box");
  const colorCode = document.getElementById("color-code");
  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};

const copyColorCode = () => {
  const colorCode = document.getElementById("color-code");
  const inputTag = document.createElement("input");
  document.body.appendChild(inputTag);
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand("copy");
  document.body.removeChild(inputTag);
  alert("Color Copied to clipboard");
};

document.getElementById("copy-btn").addEventListener("click", () => {
  copyColorCode();
});

function generateNewColorBtn() {
  updateColor();
}
