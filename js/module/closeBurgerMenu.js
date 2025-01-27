export function closeBurgerMenu(event, checkbox, place) {
  if (event.target.nodeName != "A") {
    return;
  } else {
    checkbox.checked = false;
    place.classList.toggle("iOverflow");
  }
}
