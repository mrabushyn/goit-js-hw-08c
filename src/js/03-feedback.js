import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const refs = {
  inputForm: form.children[0].children[0],
  textAreaForm: form.children[1].children[0],
};
const EMAIL = 'email';
const MESSAGE = 'message';
const USER_DATA_OBJECT = 'feedback-form-state';

form.addEventListener('submit', onSubmitForm);
refs.inputForm.addEventListener('input', throttle(onInputForm, 500));
refs.textAreaForm.addEventListener('input', throttle(onTextAreaForm, 500));

let emailValue;
function onInputForm(evt) {
  emailValue = evt.target.value;
  localStorage.setItem(EMAIL, emailValue);
}


const savedEmail = localStorage.getItem(EMAIL);
if (savedEmail) {
  refs.inputForm.value = savedEmail;
}

let messageValue;
function onTextAreaForm(evt) {
  messageValue = evt.target.value;
  localStorage.setItem(MESSAGE, messageValue);
}
const savedMessage = localStorage.getItem(MESSAGE);
if (savedMessage) {
  refs.textAreaForm.value = savedMessage;
}

function onSubmitForm(evt) {
  evt.preventDefault();
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(MESSAGE);
  localStorage.setItem(
    USER_DATA_OBJECT,
    JSON.stringify({ email: emailValue, message: messageValue })
  );
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
}
