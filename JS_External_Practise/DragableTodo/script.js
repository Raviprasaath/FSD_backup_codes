let table1 = document.getElementById('table1');
let typedValue = "";
let inputValue = document.getElementById('inputValue');

const handlerTodoAdd = (e) => {
    typedValue = e;
}
function allowDrop(ev) {
    ev.preventDefault();
}

let draggedValue = "";
  
function drag(ev) {
    draggedValue = ev;
}

function drop(ev) {
    ev.preventDefault();
    ev.target.innerHTML += `<p>${draggedValue}</p>`;
}

const handlerBtnClick = () => {
    table1.innerHTML += 
    `<p  draggable="true" ondragstart="drag(event.target.innerText)" >
        ${typedValue}
    </p>`
    typedValue = "";
    inputValue.value = "";
}

