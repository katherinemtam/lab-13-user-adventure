
export function allQuestsCompleted(quests, user) {
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export function comepletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

export function pendingQuest(quest) {
    const questLink = document.createElement('a');
    questLink.classList.add('quest');
    questLink.href = `../quests/?id=${quest.id}`;

    questLink.style.top = quest.map.top;
    questLink.style.left = quest.map.left;
    questLink.textContent = quest.title;

    return questLink;
}