import quests from '../data.js';
import { getUser, allQuestsCompleted } from '../utils/local-storage-utils.js';
import { renderProfile } from '../utils/render-utils.js';

const user = getUser();

const section = document.querySelector('section');
const island = document.createElement('div');
island.textContent = user.island;

const userDied = user.hp <= 0;
section.append(island);

renderProfile();

if (userDied || allQuestsCompleted(quests, user)) {
    window.location = '../results/index.html';
}

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quests/?id=${quest.id}`;
    section.append(anchorTag);
}

