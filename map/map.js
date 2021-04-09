import quests from '../data.js';

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    anchorTag.textContent = quest.title;
    anchorTag.href = `../quests/?id=${quest.id}`;
    section.append(anchorTag);
}