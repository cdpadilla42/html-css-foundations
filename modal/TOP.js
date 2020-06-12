const modal = document.querySelector('.modal');
const hi = document.querySelector('.body__text');
const closeBtn = document.querySelector('.modal span');
const modalBackdrop = document.createElement('div');
modalBackdrop.classList.add('modal__backdrop');

const toggleModal = () => {
  modal.classList.toggle('hide');
};

const openModal = () => {
  hi.appendChild(modalBackdrop);
  modalBackdrop.addEventListener('click', closeModal);
  toggleModal();
};

const closeModal = () => {
  let modalBackdrop = document.querySelector('.modal__backdrop');
  hi.removeChild(modalBackdrop);
  toggleModal();
};

hi.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
