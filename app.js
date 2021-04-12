import { setUser } from './utils/local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const userName = data.get('username');
    const island = data.get('island');

    const user = {
        name: userName,
        island: island,
        hp: 100,
        bells: 0,
        completed: {}
    };

    setUser(user);

    window.location = './map/index.html';
});