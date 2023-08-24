let inputText = document.getElementById('inputText');
let upperCaseBtn = document.getElementById('upperCaseBtn');
let lowerCaseBtn = document.getElementById('lowerCaseBtn');
let result = document.getElementById('result');

function transformText(callback) {
   const inputs = inputText.value;
   const transfromText = callback(inputs);
   result.innerText = transfromText; 
}

upperCaseBtn.addEventListener('click', function() {
    transformText(function(e) {
        return e.toUpperCase();
    });
});

lowerCaseBtn.addEventListener('click', function() {
    transformText(function(e) {
        return e.toLowerCase();
    });
});