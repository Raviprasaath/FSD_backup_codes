const inputBox = document.getElementById("input");

const searchCallbackFunction = (e) => {
    const value = e.target.value;
    console.log(value);
}

function myDebounce( callback, delay ) {
    let timerNumber;
    return function() {
        const event = arguments[0];       
        
        clearTimeout(timerNumber) // need to on this line

        timerNumber = setTimeout(() => {
            callback(event)
        }, delay)
    }
}

const debouncedSearchCallbackFunction = myDebounce(searchCallbackFunction, 1000)
inputBox.addEventListener("input", debouncedSearchCallbackFunction);

