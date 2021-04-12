const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function updateUserInfo(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;
    user.gold += choice.gold;
    user.completed[questId] = true;

    setUser(user);
}

export function allQuestsCompleted(quests, user) {
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}