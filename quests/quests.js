import quests from '../data.js';
import { findById } from '../utils/utils.js';
import { updateUserInfo } from '../utils/local-storage-utils.js';
import { renderProfile } from '../utils/render-utils.js';

renderProfile();

const section = document.querySelector('section');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(quests, questId);

const h2 = document.createElement('h2');
h2.textContent = quest.title;
const image = document.createElement('img');
image.src = '../assets/' + quest.image;
const pDescription = document.createElement('p');
pDescription.textContent = quest.description;

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
section.append(h2, image, pDescription, choiceForm);

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const selectedChoice = formData.get('option');

    const choice = findById(quest.choices, selectedChoice);

    updateUserInfo(questId, choice);

    image.classList.add('hidden');
    const resultImage = document.createElement('img');
    resultImage.src = '../assets/' + choice.image;

    pDescription.classList.add('hidden');
    const pDescriptionReload = document.createElement('p');
    pDescriptionReload.textContent = quest.description;

    choiceForm.classList.add('hidden');
    const resultSection = document.createElement('div');
    resultSection.classList.add('result-section');

    const quote = document.createElement('p');
    quote.textContent = choice.quote;
    quote.style.backgroundColor = 'rgba(129, 241, 247, 0.75)';
    quote.style.border = '3px solid rgb(129, 241, 247)';
    quote.style.borderRadius = '50px';
    quote.style.padding = '20px';
    quote.style.margin = '10px';
    quote.style.fontSize = 'large';
    quote.style.fontWeight = 'bold';

    const result = document.createElement('p');
    result.textContent = choice.result;
    result.style.backgroundColor = 'rgba(255, 255, 250, 0.75)';
    result.style.border = '3px solid rgb(57, 255, 176)';
    result.style.borderRadius = '50px';
    result.style.padding = '20px';
    result.style.margin = '10px';
    result.style.fontSize = 'large';
    result.style.fontWeight = 'bold';

    const anchorTag = document.createElement('a');
    anchorTag.textContent = 'Back to Map';
    anchorTag.style.backgroundColor = 'rgba(75, 37, 26, 0.808)';
    anchorTag.style.color = 'rgba(199, 123, 63, 0.808)';
    anchorTag.style.border = 'rgba(75, 37, 26)';
    anchorTag.style.borderRadius = '50px';
    anchorTag.style.padding = '20px';


    anchorTag.href = '../map';

    resultSection.append(quote, result, anchorTag);
    section.append(resultImage, pDescriptionReload, resultSection);
});

