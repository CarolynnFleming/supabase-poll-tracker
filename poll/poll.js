import { savePoll, getPolls, logout, checkLoggedIn } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

checkLoggedIn();

const choiceOneLabelEl = document.querySelector('.choice-1-label');
const choiceTwoLabelEl = document.querySelector('.choice-2-label');

const choiceOnePickEL = document.querySelector('.choice-1-pick');
const choiceTwoPickEL = document.querySelector('.choice-2-pick');

const choiceOneButton = document.querySelector('.choice-1-button');
const choiceTwoButton = document.querySelector('.choice-2-button');
const exitButton = document.querySelector('#logout');
const endPollButton = document.querySelector('.end-button');

const pollFormEl = document.querySelector('#poll-form');
const pastPollsEl = document.querySelector('.past-polls');
const questionEl = document.querySelector('.question');

exitButton.addEventListener('click', async() => {
    await logout();
});

let question = '';
let choiceOneLabel = '';
let choiceTwoLabel = '';
let choiceOnePick = 0;
let choicecTwoPick = 0;

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollFormEl);

    question = data.get('question');
    choiceOneLabel = data.get('choice-1-label');
    choiceTwoLabel = data.get('choice-2-label');
    choiceOnePick = data.get('choice-1-pick');
    questionEl.textContent = question;
    choiceOneLabelEl.textContent = choiceOneLabel;
    choiceOnePickEL.textContent = choiceOnePick;
    choiceTwoLabelEl.textContent = choiceTwoLabel;
    choiceTwoPickEL.textContent = choicecTwoPick;

    pollFormEl.reset();
});

choiceOneButton.addEventListener('click', async() => {
    choiceOnePick++;

    choiceOneLabelEl.textContent = choiceOnePick;
});

choiceTwoButton.addEventListener('click', async() => {
    choicecTwoPick++;

    choiceTwoLabelEl.textContent = choicecTwoPick;
});

endPollButton.addEventListener('click', async() => {
    await savePoll(question, choiceOneLabel, choiceTwoLabel, choiceOnePick, choicecTwoPick);
    displayPolls();
});

async function displayPolls() {
    const polls = await getPolls();

    pastPollsEl.textContent = '';

    for (let poll of polls) {
        const newPollEl = renderPoll(poll);

        pastPollsEl.append(newPollEl);
    }
}

window.addEventListener('click', async() => {
    await displayPolls();
});
