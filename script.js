let input = document.querySelector("input");
let label = document.querySelector("label");

input.addEventListener("change", (e) => {
  let blob = e.target.files[0];
  let fileReader = new FileReader();
  fileReader.readAsDataURL(blob);

  fileReader.addEventListener("load", function load() {
    document.querySelector(
      "div"
    ).innerHTML = `<img src="${fileReader.result}"></img>`;
  });
});

input.addEventListener("dragover", (e) => {
  e.preventDefault;
});

input.addEventListener("drop", (e) => {
  e.preventDefault;
  let blob = e.dataTransfer.files;
  let fileReader = new FileReader();
  fileReader.readAsDataURL(blob);

  fileReader.addEventListener("load", function load() {
    document.querySelector(
      "div"
    ).innerHTML = `<img src="${fileReader.result}"></img>`;
  });
});
