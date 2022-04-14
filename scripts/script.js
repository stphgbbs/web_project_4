const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__title");
const editButton = document.querySelector(".profile__buttons-edit");
const subtitle = document.querySelector(".profile__subtitle");
const modalWindow = document.querySelector(".popup__form");
const closeButton = document.querySelector(".popup__form-close");
const saveButton = document.querySelector(".popup__form-button");
const name = document.querySelector("#name-input");
const descriptionInputEL = document.querySelector("#description-input");

const popUp = function () {
  name.value = profileName.textContent;
  descriptionInputEL.value = subtitle.textContent;
  popup.classList.add("popup_visible");
};

const closePopup = function () {
  popup.classList.remove("popup_visible");
};

const updateProfile = function (event) {
  event.preventDefault();
  profileName.textContent = name.value;
  subtitle.textContent = descriptionInputEL.value;
  closePopup();
};

editButton.addEventListener("click", popUp);

closeButton.addEventListener("click", closePopup);

modalWindow.addEventListener("submit", updateProfile);
