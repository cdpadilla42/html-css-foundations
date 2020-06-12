const modal = document.querySelector('.modal');

const toggleModal = () => {
  modal.classList.toggle('hide');
};

const hi = document.querySelector('.body__text');
hi.addEventListener('click', toggleModal);

const closeBtn = document.querySelector('.modal span');
closeBtn.addEventListener('click', toggleModal);
