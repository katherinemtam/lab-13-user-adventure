import { setUser } from './utils/local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const userName = data.get('username');
    const userItem = data.get('item');

    const user = {
        name: userName,
        item: userItem,
        hp: 35,
        gold: 0,
        completed: {}
    };

    setUser(user);

    window.location = './map/index.html';
});