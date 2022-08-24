// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const refs = {
  inputForm: form.children[0].children[0],
  textAreaForm: form.children[1].children[0],
};

refs.inputForm.addEventListener('input', onInputForm);
refs.textAreaForm.addEventListener('input', onInputForm);
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
}

function onInputForm(evt) {
  console.log('test@test.test');
  // evt.target;
}
