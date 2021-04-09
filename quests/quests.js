import quests from '../data.js';
import { findById } from '../utils/utils.js';
import { updateUserInfo } from '../utils/local-storage-utils.js';

const section = document.querySelector('section');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(quests, questId);

const h2 = document.createElement('h2');
h2.textContent = quest.title;
const image = document.createElement('img');
image.src = '../assets/';
const p = document.createElement('p');
p.textContent = quest.description;

const choiceForm = document.createElement('form');
for (let choice of quest.choices) {
    const label = document.createElement('label');
    const description = choice.description;
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.value = choice.id;

    label.append(description, input);
    choiceForm.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';

choiceForm.append(button);
section.append(h2, image, p, choiceForm);

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const selectedChoice = formData.get('option');

    const choice = findById(quest.choices, selectedChoice);

    updateUserInfo(questId, choice);

    choiceForm.classList.add('hidden');
    const resultSection = document.createElement('div');
    resultSection.textContent = choice.result;

    const anchorTag = document.createElement('a');
    anchorTag.textContent = 'Back to Map';
    anchorTag.href = '../map';

    resultSection.append(anchorTag);
    section.append(resultSection);
});

