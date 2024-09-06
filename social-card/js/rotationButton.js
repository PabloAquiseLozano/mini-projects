const rotationButtonElementFront = document.querySelector("#btn-rotation-card");
const rotationButtonElementBack = document.querySelector(
  "#btn-rotation-card-back"
);

const flipBoxElement = document.querySelector("#flip-box");

const rotateCard = () => {
  flipBoxElement.classList.toggle("rotate");
};

rotationButtonElementFront.addEventListener("click", rotateCard);
rotationButtonElementBack.addEventListener("click", rotateCard);
