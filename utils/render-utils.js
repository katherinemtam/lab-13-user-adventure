import { getUser } from './local-storage-utils.js';

export function renderProfile() {
    const header = document.querySelector('header');
    const user = getUser();

    const userTitles = document.createElement('div');
    userTitles.textContent = `name: ${user.name} item: ${user.class}`;

    const userStats = document.createElement('div');
    userStats.textContent = `HP: ${user.hp}, gold: ${user.gold}`;

    header.append(userTitles, userStats);
}
