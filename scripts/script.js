const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__title");
const editButton = document.querySelector(".profile__buttons-edit");
const aboutMe = document.querySelector(".profile__subtitle");
const modalWindow = document.querySelector(".popup__form");
const closeButton = document.querySelector(".popup__form-close");
const saveButton = document.querySelector(".popup__form-button");
const heartIcons = document.querySelectorAll(".card__heart-icon");
const name = document.querySelector(".popup__input-name");
const aboutInfo = document.querySelector(".popup__input-description");

const heartIconsUpdate = function () {
  this.classList.toggle("card__heart-icon_active");
  console.log("hi");
};

heartIcons.forEach(function (button) {
  button.addEventListener("click", function onClick() {
    button.classList.toggle("card__heart-icon_active");
    button.classList.toggle("card__heart-icon");
  });

  const popUp = function () {
    name.value = profileName.textContent;
    aboutInfo.value = aboutMe.textContent;
    popup.style.visibility = "visible";
  };

  const closePopup = function () {
    popup.style.visibility = "hidden";
  };

  const updateProfile = function () {
    event.preventDefault();
    profileName.textContent = name.value;
    aboutMe.textContent = aboutInfo.value;
    closePopup();
  };

  editButton.addEventListener("click", popUp);

  closeButton.addEventListener("click", closePopup);

  modalWindow.addEventListener("submit", updateProfile);
});
