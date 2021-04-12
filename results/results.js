import { getUser } from '../utils/local-storage-utils.js';
import { renderProfile } from '../utils/render-utils.js';
import { aliveGoldMessages, deadGoldMessages, hpMessages } from './messages.js';

renderProfile();

const section = document.querySelector('section');
const button = document.querySelector('button');

const user = getUser();

let hpStatus;
if (user.hp <= 0) {
    hpStatus = hpMessages.dead;
} else if (user.hp < 50) {
    hpStatus = hpMessages.frail;
} else {
    hpStatus = hpMessages.healthy;
}

let goldStatus;
if (user.gold <= 0 && user.hp <= 0) {
    goldStatus = deadGoldMessages.poor;
} else if (user.gold <= 1000 && user.hp <= 0) {
    goldStatus = deadGoldMessages.modest;
} else if (user.gold > 1000 && user.hp <= 0) {
    goldStatus = deadGoldMessages.rich;
} else if (user.gold <= 0) {
    goldStatus = aliveGoldMessages.poor;
} else if (user.gold < 1000) {
    goldStatus = aliveGoldMessages.modest;
} else {
    goldStatus = aliveGoldMessages.rich;
}

section.textContent = `${hpStatus} ${goldStatus}`;

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

