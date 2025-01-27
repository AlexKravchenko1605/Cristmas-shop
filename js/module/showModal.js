import { createModalWindow } from "./createModalWindow.js";

export function showModal(elem, place, page) {
  createModalWindow(elem, place, page);
  const modalOverflow = document.querySelector(".modal-overflow");
  const modal = document.querySelector(".modal_window");
  const closeBtn = modal.querySelector("button");

  modalOverflow.style.display = "block";
  place.style.overflow = "hidden";

  closeBtn.addEventListener("click", () => {
    removeModal();
  });

  modalOverflow.addEventListener("click", (e) => {
    if (e.target === modalOverflow) {
      removeModal();
    }
  });

  function removeModal() {
    modalOverflow.style.display = "none";
    place.querySelector(".modal-overflow").remove();
    place.style.overflow = "visible";
  }
}
