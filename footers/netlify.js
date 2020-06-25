const emailInput = document.querySelector('.newsletter__form #email');
const emailLabel = document.querySelector('.newsletter__form #email_label');
function handleFocus(e) {
  emailLabel.classList.add('focused');
}
function handleFocusOut(e) {
  emailLabel.classList.remove('focused');
}

emailInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('blur', handleFocusOut);
