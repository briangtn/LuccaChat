const container = document.getElementById('container');

let id = 1;
container.appendChild(generateChat(id++));
container.appendChild(generateChat(id++));

document.getElementById('addChatButton').addEventListener('click', () => {
    container.appendChild(generateChat(id++));
})