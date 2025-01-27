import { data } from "./module/data.js";
import { createGiftCard } from "./module/createGiftCard.js";
import { isBurgerMenuOpen } from "./module/isBurgerMenuOpen.js";
import { closeBurgerMenu } from "./module/closeBurgerMenu.js";

const body = document.querySelector("body");
const burger = document.querySelector(".burger-menu");
const burgerCheckbox = document.querySelector(".burger-checkbox");
const burgerMenuList = document.querySelector(".burger-menu-list");
const giftsContainer = document.querySelector(".gifts__container");
const all = document.querySelector(".all");
const forWork = document.querySelector(".for-work");
const forHealth = document.querySelector(".for-health");
const forHarmony = document.querySelector(".for-harmony");
const giftsCategory = document.querySelectorAll(".gifts__category ");
const giftsLink = document.getElementById("gifts__link");
const giftsPage = ".";

// special numbers

const scrollY = 300;
const viewportWidth = 768;

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 768) {
    burgerCheckbox.checked = false;
  }
});

giftsLink.addEventListener("click", () => {
  burgerCheckbox.checked = false;
});

burger.addEventListener("click", () => {
  isBurgerMenuOpen(body, burgerCheckbox);
});
burgerMenuList.addEventListener("click", (event) => {
  closeBurgerMenu(event, burgerCheckbox, body);
});

function filterByCategory(event) {
  event.preventDefault();
  if (!event.target.dataset.category) {
    return;
  }
  if (event.target.dataset.category === "All") {
    giftsContainer.innerHTML = "";
    data.forEach((item) =>
      createGiftCard(data, item, giftsContainer, giftsPage)
    );
    return;
  }

  let categoryArr = data.filter(
    (item) => item.category === event.target.dataset.category
  );
  giftsContainer.innerHTML = "";
  categoryArr.forEach((item) => {
    createGiftCard(data, item, giftsContainer, giftsPage);
  });
}
function setALLActiveCategory() {
  all.classList.add("active_category");
  all.classList.add("disabled");
  data.forEach((item) => createGiftCard(data, item, giftsContainer, giftsPage));
}

function removeActiveCategory() {
  giftsCategory.forEach((item) => {
    item.classList.remove("active_category"), item.classList.remove("disabled");
  });
}

function setActiveCategory(e) {
  e.preventDefault();
  e.target.classList.add("active_category");
  e.target.classList.add("disabled");
}

setALLActiveCategory();

[forWork, forHarmony, forHealth, all].forEach((item) =>
  item.addEventListener("click", (e) => {
    removeActiveCategory(), filterByCategory(e), setActiveCategory(e);
  })
);

document.addEventListener("DOMContentLoaded", () => {
  const toTop = document.getElementById("to_top");
  toTop.style.display = "none";
  window.addEventListener("scroll", function () {
    if (
      window.scrollY > scrollY &&
      document.documentElement.clientWidth < viewportWidth
    ) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  });

  toTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
