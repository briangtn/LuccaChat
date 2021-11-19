function generateChat(id) {
    const mainElement = document.createElement('div');
    mainElement.className = 'chat';
    mainElement.setAttribute('data-id', id);

    // Chatbox
    const chatBoxElement = document.createElement('div');
    chatBoxElement.className = 'chatBox';

    const ulElement = document.createElement('ul');
    chatBoxElement.appendChild(ulElement);

    // Form
    const formElement = document.createElement('form');
    formElement.className = 'chatForm';

    const inputElement = document.createElement('input');
    inputElement.className = 'message';
    inputElement.type = 'text';
    inputElement.placeholder = 'Enter a message !';
    inputElement.name = 'message';

    const buttonElement = document.createElement('button');
    buttonElement.className = 'messageSend';
    buttonElement.innerText = 'Send';
    formElement.appendChild(inputElement);
    formElement.appendChild(buttonElement);

    mainElement.appendChild(chatBoxElement);
    mainElement.appendChild(formElement);

    formElement.addEventListener('submit', (e) => {handleSubmit(id, e)});
    return mainElement;
}

function generateMessage(type, message, username) {
    const mainElement = document.createElement('li');
    mainElement.className = type + '-message';

    const spanElement = document.createElement('span');
    spanElement.className = 'username';
    spanElement.innerText = username + ': ';

    mainElement.appendChild(spanElement);
    mainElement.innerHTML += message;
    return mainElement;
}