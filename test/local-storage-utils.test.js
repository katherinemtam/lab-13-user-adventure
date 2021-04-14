import { getUser, setUser, updateUserInfo } from '../utils/local-storage-utils.js';

const test = QUnit.test;

const USER = 'USER';

// test getUser()
test('getUser should get user information from local storage', (expect) => {

    const user = {
        name: 'user',
        class: 'wizard',
        hp: 35,
        gold: 0,
        comepleted: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const actual = getUser();

    expect.deepEqual(actual, user);
});

// test setUser()
test('setUser should put user information to local storage', (expect) => {

    const user = {
        name: 'user',
        class: 'wizard',
        hp: 35,
        gold: 0,
        comepleted: {}
    };

    setUser(user);

    const expected = JSON.parse(localStorage.getItem(USER));

    expect.deepEqual(user, expected);
});

// test updateUserInfo()
test('updateUserInfo should update hp, bells, and completed properties based on choice', (expect) => {

    const user = {
        name: 'user',
        class: 'wizard',
        hp: 35,
        bells: 0,
        completed: {}
    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);

    const choice = {
        hp: -10,
        bells: 500
    };

    const expected = {
        name: 'user',
        class: 'wizard',
        hp: 25,
        bells: 500,
        completed: {
            dragon: true
        }
    };

    updateUserInfo('dragon', choice);

    const actual = JSON.parse(localStorage.getItem(USER));

    expect.deepEqual(actual, expected);
});
