import quests from '../data.js';
import { getUser, allQuestsCompleted } from '../utils/local-storage-utils.js';
import { renderProfile } from '../utils/render-utils.js';

const section = document.querySelector('section');
const user = getUser();
const userIsDead = user.hp <= 0;

renderProfile();

if (userIsDead || allQuestsCompleted(quests, user)) {
    window.location = '../results/index.html';
}

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quests/?id=${quest.id}`;
    section.append(anchorTag);
}

