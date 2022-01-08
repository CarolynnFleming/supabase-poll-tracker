// import functions and grab DOM elements
import { signUp } from './fetch-utils.js';

const signUpForm = document.querySelector('#sign-up');

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');

    await signUp(email, password);

    window.location.href = './polls';
});
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
