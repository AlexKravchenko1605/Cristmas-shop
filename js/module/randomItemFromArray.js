export function randomItemFromArray(arr) {
  let randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
}
