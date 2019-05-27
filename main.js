const list = document.getElementsByTagName("li");
console.log(list);
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        alert();
    }, false);
}

// Create and add new "li" element
function newElement() {
    const li = document.createElement("li");
    const inputText = document.getElementById("to-do-input").value;
    const t = document.createTextNode(inputText);
    li.appendChild(t);
    if (inputText === '') {
        alert('Write something!')
    } else {
        document.getElementById("to-do-ul").appendChild(li);
    }
    document.getElementById("to-do-input").value = '';
}