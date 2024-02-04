const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let words = document.getElementById('words');
    const array = words.value.split(',').map((word) => word.trim());
    console.log(array);

    const textBox = document.getElementById('textAreaContent');
    let foundIndex = -1;
    console.log(textBox);
    const containsWord = array.some((word) => {
        let temp = word.toLowerCase();
        let textCont = textBox.value.toLowerCase()
        const indexx= textCont.indexOf(temp)
        if (textCont.substring(indexx, ))
        console.log(indexx);
        
    });

    if (containsWord) {
        const matchedWord = array[foundIndex];
        console.log(`CONTAINS: ${matchedWord}`);
    } else {
        console.log("NOT");
    }
});










// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     let words = document.getElementById('words');
//     const array = words.value.split(',').map((word) => word.trim());
//     console.log(array);

//     const textBox = document.getElementById('textAreaContent');
//     let foundIndex = -1;

//     const containsWord = array.some((word, index) => {
//         let temp = word.toLowerCase();
//         const regex = new RegExp(`\\b${temp}\\b`, 'i');
//         const match = textBox.value.match(regex);
//         if (match) {
//             foundIndex = index;
//             return true;
//         }
//         return false;
//     });

//     if (containsWord) {
//         const matchedWord = array[foundIndex];
//         console.log(`CONTAINS: ${matchedWord}`);
//     } else {
//         console.log("NOT");
//     }
// });
