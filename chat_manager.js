let messages = [

];

function handleSubmit(id, e) {
    e.preventDefault();

    const inputElement = e.target.elements["message"];
    addMessage(id, inputElement.value);
    inputElement.value = '';
}

function addMessage(from, message) {
    messages.push({from, message});
    const chatElements = document.getElementsByClassName('chat');

    for(let element of chatElements) {
        const chatBoxElement = element.querySelector('.chatBox > ul');

        const messageElement = generateMessage(element.dataset.id == from ? 'my' : 'other', message, `Chat ${from}`);
        chatBoxElement.appendChild(messageElement);
    }
}