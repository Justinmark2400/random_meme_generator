"use strict";

const btnMeme = document.querySelector(".btn");
const imgMeme = document.querySelector(".img-meme");
const container = document.querySelector(".meme");
const spinner = document.querySelector(".loader");

// const spinnerToggle = function () {
// spinner.classList.toggle("loader-hidden");
// };
const renderMarkup = function (data) {
  container.innerHTML = "";
  // spinnerToggle();

  console.log(data);
  const markup = `
  <img
        class="img-meme"
        src="${data.url}"
        alt=""
      />
  `;
  container.insertAdjacentHTML("beforeend", markup);
};
// const renderSpinner = function () {
// container.innerHTML = "";
// spinnerToggle();
// };
const generateMemes = async function () {
  // renderSpinner();
  const res = await fetch(`https://meme-api.com/gimme/wholesomememes`);
  const data = await res.json();

  renderMarkup(data);
};

btnMeme.addEventListener("click", function () {
  generateMemes();
});
