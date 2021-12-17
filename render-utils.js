export function renderPoll(poll){
    const currentPollEl = document.createElement('div');
    const currentQuestionEl = document.createElement('p');
    const currentChoiceOneEl = document.createElement('p');
    const currentChoiceTwoEl = document.createElement('p');
    const currentPickOneEl = document.createElement('p');
    const currentPickTwoEl = document.createElement('p');

    currentPollEl.classList.add('poll');
    currentQuestionEl.textContent = poll.question;
    currentChoiceOneEl.textContent = poll.choice_1;
    currentChoiceTwoEl.textContent = poll.choice_2;
    currentPickOneEl.textContent = poll.pick_1;
    currentPickTwoEl.textContent = poll.pick_2;

    currentPollEl.append(
        currentQuestionEl,
        currentChoiceOneEl,
        currentChoiceTwoEl,
        currentPickOneEl,
        currentPickTwoEl,);
    
    return currentPollEl;

}