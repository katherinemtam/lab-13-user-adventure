import { getUser } from './local-storage-utils.js';

export function renderProfile() {
    const header = document.querySelector('header');
    const user = getUser();

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = '../assets/logo.png';

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const userTitles = document.createElement('div');
    userTitles.textContent = `Name: ${user.name}, Island: ${user.island}`;

    const userStats = document.createElement('div');
    userStats.textContent = `HP: ${user.hp}, Bells: ${user.bells}`;

    profile.append(userTitles, userStats);
    header.append(logo, profile);
}
