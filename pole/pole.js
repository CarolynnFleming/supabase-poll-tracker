import { savePoll, getPolls, logout, checkLoggedIn, checkedLoggedIn } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

checkedLoggedIn();

const choiceOneLabelEl = document.querySelector('.choice-1-label');
const choiceTwoLabelEl = document.querySelector('.choice-2-label');

const choiceOnePickEL= document.querySelector('.choice-1-pick');
const choiceTwoPickEL = document.querySelector('.choice-2-pick');

const choiceOneButton = document.querySelector('.choice-1-button');
const choiceTwoButton = document.querySelector('.choice-2-button');
const exitButton = document.querySelector('#exit');
const endPollButton = document.querySelector('.end-button');

const pollFormEl = document.querySelector('#poll-form');
const pastPollsEl = document.querySelector('.past-polls');
const questionEl = document.querySelector('.question');

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
});