let typedThings = document.getElementById('inputTyping');
let addButton = document.getElementById('buttonAdd');
let list = document.getElementsByClassName('list')[0];


let idNum = 1;
function userTypedValue () {  
    list.innerHTML += 
    `
    <div class="todo-list ${idNum}">
        <div class="user-writing ${idNum}">${typedThings.value}</div>
        <div class="btn-align ${idNum}">
            <button onclick="updateBtn(${idNum})" class="update">Update</button>
            <button onclick="deleteBtn(${idNum})" class="delete">Delete</button>
        </div>
    </div>

    `
    idNum++;
    typedThings.value = ""
}

addButton.addEventListener('click', ()=> {
    userTypedValue();
})

function updateBtn (val) {
    let updation = document.getElementsByClassName(`user-writing ${val}`)[0];
    
    console.log(updation);
}

function deleteBtn (val) {
    let elementToRemove = document.getElementsByClassName(`todo-list ${val}`)[0];
    if (elementToRemove) {
        elementToRemove.remove();
    }
}


