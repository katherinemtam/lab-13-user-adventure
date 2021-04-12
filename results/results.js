import { getUser } from '../utils/local-storage-utils.js';
import { renderProfile } from '../utils/render-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './messages.js';

renderProfile();

const section = document.querySelector('section');
const button = document.createElement('button');

const user = getUser();

let hpStatus;
if (user.hp <= 0) {
    hpStatus = hpMessages.dead;
} else if (user.hp < 10) {
    hpStatus = hpMessages.frail;
} else {
    hpStatus = hpMessages.healthy;
}

let goldStatus;
if (user.gold <= 0) {
    goldStatus = deadGoldMessages.poor;
} else if (user.gold < 20) {
    goldStatus = aliveGoldMessages.modest;
} else {
    goldStatus = aliveGoldMessages.rich;
}

button.textContent = 'Play Again!';
section.textContent = `${hpStatus}. ${goldStatus}`;

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

section.append(button);
