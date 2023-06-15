const popupWindow = document.querySelector('#success-login-notification');
const closeButton = document.querySelector('#success-login-close');

closeButton.addEventListener('click', () => {
  popupWindow.classList.toggle("hidden");
})
