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
let messageValue;

function onInputForm(evt) {
  emailValue = evt.target.value;
  localStorage.setItem(EMAIL, emailValue);
}
const savedEmail = localStorage.getItem(EMAIL);
if (savedEmail) {
  refs.inputForm.value = savedEmail;
}

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
  localStorage.setItem(USER_DATA_OBJECT, JSON.stringify({ email: emailValue, message: messageValue }));
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem(EMAIL);
  localStorage.removeItem(MESSAGE);
  evt.currentTarget.reset();
}


console.log(localStorage);











// import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const refs = {
//   inputForm: form.children[0].children[0],
//   textAreaForm: form.children[1].children[0],
// };
// const EMAIL = 'email';
// const MESSAGE = 'message';
// const USER_DATA_OBJECT = 'feedback-form-state';

// form.addEventListener('submit', onSubmitForm);
// refs.inputForm.addEventListener('input', throttle(onInputForm, 500));
// refs.textAreaForm.addEventListener('input', throttle(onTextAreaForm, 500));

// let emailValue;
// function onInputForm(evt) {
//   emailValue = evt.target.value;
//   localStorage.setItem(EMAIL, emailValue);
// }

// const savedEmail = localStorage.getItem(EMAIL);
// if (savedEmail) {
//   refs.inputForm.value = savedEmail;
// }

// let messageValue;
// function onTextAreaForm(evt) {
//   messageValue = evt.target.value;
//   localStorage.setItem(MESSAGE, messageValue);
// }
// const savedMessage = localStorage.getItem(MESSAGE);
// if (savedMessage) {
//   refs.textAreaForm.value = savedMessage;
// }

// function onSubmitForm(evt) {
//   evt.preventDefault();
//   localStorage.removeItem(EMAIL);
//   localStorage.removeItem(MESSAGE);
//   localStorage.setItem(
//     USER_DATA_OBJECT,
//     JSON.stringify({ email: emailValue, message: messageValue })
//   );
//   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//   evt.currentTarget.reset();
// }












// const formData = {};

// form.addEventListener('input', onForms);
// form.addEventListener('submit', onForms);

// function onForms (evt) {
// formData[evt.target.name] = evt.target.value
// console.log(formData);
// //   const parseFormData = localStorage.setItem(USER_DATA_OBJECT, JSON.parse(formData));
// // console.log(parseFormData);

//   localStorage.setItem(USER_DATA_OBJECT, JSON.stringify(formData));
// console.log(localStorage);
// }

// console.log(localStorage);

// // localStorage.clear()