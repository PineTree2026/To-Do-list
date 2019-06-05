// Create delete button
const li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
    const deleteButton = document.createElement('span');
    const text =  document.createTextNode('×');
    deleteButton.appendChild(text);
    deleteButton.classList.add('delete');
    li[i].appendChild(deleteButton);
}

// Delete 'li' elemtent
const deleteList = document.getElementsByClassName('delete');
for (let i = 0; i < deleteList.length; i ++) {
    deleteList[i].addEventListener('click', () => {
        const targetTag = deleteList[i].parentElement;
        targetTag.parentElement.removeChild(targetTag);
    }, false);
}

// Toggle check
const unorderedList = document.getElementById('to-do-ul');
unorderedList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

// Create and add new "li" element
function newElement() {
    const li = document.createElement('li');
    const inputText = document.getElementById('to-do-input').value;
    const t = document.createTextNode(inputText);
    li.appendChild(t);
    if (inputText === '') {
        alert('Write something!')
    } else {
        document.getElementById('to-do-ul').appendChild(li);
    }
    document.getElementById('to-do-input').value = '';

    const deleteButton = document.createElement('span');
    const text =  document.createTextNode('×');
    deleteButton.appendChild(text);
    deleteButton.classList.add('delete');
    li.appendChild(deleteButton);
}