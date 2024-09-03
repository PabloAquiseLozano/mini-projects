const videoElement = document.querySelector("#video");
const buttonElement = document.querySelector("#play");
const iconElement = document.querySelector("#icon-video");
const btnTextElement = document.querySelector("#btnText");

const playVideo = () => {
  if (videoElement.paused) {
    videoElement.play();
    btnTextElement.innerHTML = "PAUSAR";
    iconElement.classList = "fa-solid fa-pause";
  } else {
    videoElement.pause();
    btnTextElement.innerHTML = "REPRODUCIR";
    iconElement.classList = "fa-solid fa-play";
  }
};

buttonElement.addEventListener("click", playVideo);
