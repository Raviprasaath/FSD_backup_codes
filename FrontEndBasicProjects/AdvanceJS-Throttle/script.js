

const inputBox = document.getElementById("input");
inputBox.addEventListener("input", throttleSearchHandler);

let cancall = true;
function throttleSearchHandler(e) {
    if (cancall) {
        console.log(e.target.value)
        cancall = false;
        setTimeout(() => {
            cancall = true;
        }, 2000);
    }
}

// eg.shot gun