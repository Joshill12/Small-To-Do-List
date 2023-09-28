let addToDoBtn = document.getElementById("toDoBtn");
let toDoContainer = document.getElementById("toDoContainer");
let input = document.getElementById("toDo");

addToDoBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('list-styling')
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})