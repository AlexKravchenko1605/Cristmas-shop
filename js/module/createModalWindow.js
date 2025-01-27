export function createModalWindow(item, place, page) {
  const modal = document.createElement("div");
  modal.classList.add("modal-overflow");

  const activeSnowFlake = `<img src="${page}./images/icons/snowflake.png" alt="snowflake"/>`;
  const noActiveSnowFlake = `<img src="${page}./images/icons/snowflake_no_active.png" alt="no-active_snowflake"/>`;

  const content = `
                <div class="modal_window">
                  <button >
                    <img src="${page}./images/icons/close.png" alt="close" />
                  </button>
                  <div class="modal__window-img">
                    <img
                      src="${page}${item.img}"
                      alt="gift ${item.category}"
                    />
                  </div>
                  <div class="modal__window-info">
                    <h4 class="${item.className} montserrat-action-h4">${item.category}</h4>
                    <h3 class="dark-color montserrat-action-h3">
                      ${item.name}
                    </h3>
                    <p class="montserrat-action-paragraph mb-20">
                      ${item.description}
                    </p>
                    <h4 class="${item.className} montserrat-action-h4">
                      Adds superpowers to:
                    </h4>
                    <div class="superpowers_wrapper">
                      <p class="montserrat-action-paragraph">Live</p>
                      <p class="montserrat-action-paragraph">${item.superpowers.live}</p>
                      <div id="live" class="snowflake_wrapper"></div>
                      <p class="montserrat-action-paragraph">Create</p>
                      <p class="montserrat-action-paragraph">${item.superpowers.create}</p>
                      <div id="create" class="snowflake_wrapper"></div>
                      <p class="montserrat-action-paragraph">Love</p>
                      <p class="montserrat-action-paragraph">${item.superpowers.love}</p>
                      <div id="love" class="snowflake_wrapper"></div>
                      <p class="montserrat-action-paragraph">Dream</p>
                      <p class="montserrat-action-paragraph">${item.superpowers.dream}</p>
                      <div id="dream" class="snowflake_wrapper"></div>
                    </div>
                  </div>
                </div>
                `;

  modal.innerHTML += content;

  for (const key in item.superpowers) {
    switch (item.superpowers[key]) {
      case "+500":
        modal.querySelector(
          `#${key}`
        ).innerHTML = `${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}`;
        break;
      case "+400":
        modal.querySelector(
          `#${key}`
        ).innerHTML = `${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}${noActiveSnowFlake}`;
        break;
      case "+300":
        modal.querySelector(
          `#${key}`
        ).innerHTML = `${activeSnowFlake}${activeSnowFlake}${activeSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}`;
        break;
      case "+200":
        modal.querySelector(
          `#${key}`
        ).innerHTML = `${activeSnowFlake}${activeSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}`;
        break;
      case "+100":
        modal.querySelector(
          `#${key}`
        ).innerHTML = `${activeSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}${noActiveSnowFlake}`;
        break;
    }
  }

  place.append(modal);
}
