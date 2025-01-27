export function isBurgerMenuOpen(place, checkBox) {
  checkBox.checked ? place.classList.toggle("iOverflow") : "";
}
