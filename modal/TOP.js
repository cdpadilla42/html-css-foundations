const modal = document.querySelector('.modal');
const hi = document.querySelector('.body__text');
const closeBtn = document.querySelector('.modal span');

const toggleModal = () => {
  modal.classList.toggle('hide');
};

const openModal = () => {
  let modalBackdrop = document.querySelector('.modal__backdrop');
  modalBackdrop.classList.remove('hide');
  toggleModal();
};

const closeModal = () => {
  removeBackdrop();
  toggleModal();
  console.log('close');
};

const removeBackdrop = () => {
  let modalBackdrop = document.querySelector('.modal__backdrop');
  modalBackdrop.classList.add('hide');
};

hi.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('click', (e) => {
  if (e.target == document.querySelector('.modal__backdrop')) {
    closeModal();
  }
});
