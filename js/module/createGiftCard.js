import { showModal } from "./showModal.js";

const body = document.querySelector("body");

export function createGiftCard(data, item, place, page) {
  const card = document.createElement("div");
  card.classList = "best_gifts__item";
  card.setAttribute("data-id", item.id);

  const content = `
                    <div class="best_gifts__item-img">
                      <img
                        src="${page}${item.img}"
                        alt="gift ${item.category}"
                      />
                    </div>
                    <div class="best_gifts__item-info">
                      <h4 class="${item.className} montserrat-action-h4">
                        ${item.category}
                      </h4>
                      <h3 class="dark-color montserrat-action-h3">
                        ${item.name}
                      </h3>
                    </div>
                  `;

  card.innerHTML += content;
  place.append(card);

  card.addEventListener("click", (e) => {
    let elem = "";
    let idCard = Number(e.target.closest(".best_gifts__item").dataset.id);
    elem = data.find((item) => item.id === idCard);
    showModal(elem, body, page);
  });
}
