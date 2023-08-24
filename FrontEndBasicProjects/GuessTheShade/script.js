let colourValue = document.getElementById('colourValue');
let colourButtons = document.querySelectorAll('.colourButton');
let ans = document.getElementById('answer');

function randomValues(limit = 255) {
    return Math.floor(Math.random()*limit);
}

function randomColor() {
    let r = randomValues();
    let g = randomValues();
    let b = randomValues();
    return (`rgb(${r}, ${g}, ${b})`);
}

let array = [];
let randomArr;
function colorfunc() {
    colourButtons.forEach((elem)=> {
        let randomColor1 = randomColor();
        elem.style.backgroundColor = randomColor1;

        array.push(randomColor1);
        randomArr = randomValues(6);
        let showingQ = array[randomArr];
        colourValue.innerHTML = showingQ.substr(3);
        // colourValue.innerHTML = showingQ;

        console.log(randomColor1)
    })
}

let count = 0;

function clikcingBtn() {
    for (let btn of colourButtons) {
        btn.addEventListener('click', currentListener);
        function currentListener() {
            let clickBtd = btn;
            let clickBtdId = clickBtd.id;
            let store = (clickBtdId.charAt(1))
            console.log(randomArr)
            console.log(store)

            if (store == randomArr) {
                ans.innerHTML = 'Correct';
            } else {
                ans.innerHTML = 'Wrong';
            }
        }
    }
}
clikcingBtn();

let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', ()=> {
    colorfunc();
    ans.innerHTML=""
});
colorfunc()