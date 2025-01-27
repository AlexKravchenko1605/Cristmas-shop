import { data } from "./module/data.js";
import { createGiftCard } from "./module/createGiftCard.js";
import { updateTimer } from "./module/updateTimer.js";
import { randomItemFromArray } from "./module/randomItemFromArray.js";
import { isBurgerMenuOpen } from "./module/isBurgerMenuOpen.js";
import { closeBurgerMenu } from "./module/closeBurgerMenu.js";

// html elements
const body = document.querySelector("body");
const burger = document.querySelector(".burger-menu");
const burgerCheckbox = document.querySelector(".burger-checkbox");
const burgerMenuList = document.querySelector(".burger-menu-list");
const visibleArea = document.querySelector(".slider__row");
const bestGiftsWrapper = document.querySelector(".best_gifts__wrapper");
const nextSliderBtn = document.querySelector(".next");
const prevSliderBtn = document.querySelector(".prev");

const mainPage = "";

// special numbers

const numberOfClicksAbove__768 = 3;
const numberOfClicksBelow__768 = 6;
const paddingLeftAbove__768 = 82;
const paddingLeftBelow__768 = 8;
const gapCount = 3;
const gapBetweenSliderItem = 23;
const gapWidth = gapBetweenSliderItem * gapCount;
const viewportWidth = 767;

// variables
let sliderWidth = 0;
let visibleAreaWidth = 0;
let moveByOneClick = 0;
let position = 0;

let items = document.querySelectorAll(".slider__item");

checkAreaWidth();

burger.addEventListener("click", () => {
  isBurgerMenuOpen(body, burgerCheckbox);
});
burgerMenuList.addEventListener("click", (event) => {
  closeBurgerMenu(event, burgerCheckbox, body);
});

nextSliderBtn.addEventListener("click", () =>
  moveForwardSlider(moveByOneClick)
);
prevSliderBtn.addEventListener("click", () =>
  moveBackwardSlider(moveByOneClick)
);

window.addEventListener("resize", () => {
  visibleAreaWidth = visibleArea.offsetWidth;
  if (visibleAreaWidth > 768) {
    burgerCheckbox.checked = false;
  }
});

function checkAreaWidth() {
  document.addEventListener("DOMContentLoaded", () => {
    visibleAreaWidth = visibleArea.offsetWidth;
  });

  for (const item of items) {
    sliderWidth += item.getBoundingClientRect().width;
  }
  sliderWidth = Number(sliderWidth.toFixed(0));
  visibleAreaWidth = visibleArea.offsetWidth;

  if (visibleAreaWidth < viewportWidth) {
    sliderWidth = sliderWidth + gapWidth + paddingLeftBelow__768;
    moveByOneClick = Number(
      ((sliderWidth - visibleAreaWidth) / numberOfClicksBelow__768).toFixed(0)
    );
  } else {
    sliderWidth = sliderWidth + gapWidth + paddingLeftAbove__768;

    moveByOneClick = Number(
      ((sliderWidth - visibleAreaWidth) / numberOfClicksAbove__768).toFixed(0)
    );
  }
}

function moveForwardSlider(moveByOneClick) {
  position += -moveByOneClick;
  prevSliderBtn.disabled = false;
  prevSliderBtn.classList.remove("dsbl");

  visibleArea.style = `transform: translateX(${position}px);transition: transform 0.5s`;

  if (
    visibleAreaWidth < viewportWidth &&
    Math.abs(position) === Math.abs(numberOfClicksBelow__768 * moveByOneClick)
  ) {
    nextSliderBtn.disabled = true;
    nextSliderBtn.classList.add("dsbl");
  }

  if (
    visibleAreaWidth > viewportWidth &&
    Math.abs(position) === Math.abs(numberOfClicksAbove__768 * moveByOneClick)
  ) {
    nextSliderBtn.disabled = true;
    nextSliderBtn.classList.add("dsbl");
  }
}

function moveBackwardSlider(moveByOneClick) {
  position += +moveByOneClick;
  nextSliderBtn.disabled = false;
  nextSliderBtn.classList.remove("dsbl");

  visibleArea.style = `transform: translateX(${position}px);transition: transform 0.5s`;
  prevSliderBtn.disabled = false;
  prevSliderBtn.classList.remove("dsbl");

  if (position === 0) {
    prevSliderBtn.disabled = true;
    prevSliderBtn.classList.add("dsbl");
  }
}

setInterval(updateTimer, 1000);

function createGiftsItems() {
  let giftsItemsArr = [];
  for (let i = 0; i < 4; i++) {
    let item = randomItemFromArray(data);
    giftsItemsArr.push(item);
  }
  return giftsItemsArr;
}

function fillGiftsSection() {
  const gifts = createGiftsItems();

  gifts.forEach((item) =>
    createGiftCard(data, item, bestGiftsWrapper, mainPage)
  );
}

fillGiftsSection();
