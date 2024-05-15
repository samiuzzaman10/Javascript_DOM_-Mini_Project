const extractText = () => {
  const fileInput = document.querySelector("#imageInput");
  const output = document.querySelector("#output");

  const imagesFile = fileInput.files[0];
  if(!imagesFile){
    output.textContent = "Please select an images file!";
    return;
  }
  Tesseract.recognize(
    imagesFile,
    "eng"
  ).then(({data})=>{
    output.textContent = data.text;
  }).catch((error)=>{
    console.error(error);
  })
}
