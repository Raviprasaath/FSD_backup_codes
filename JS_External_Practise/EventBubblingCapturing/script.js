// bubbling -> bottom to top

document.getElementById('grandparent').addEventListener('click', (event)=> {
    console.log("Grand parent clicked");
}, false)

document.getElementById('parent').addEventListener('click',(event)=> {
    // event.stopPropagation();
    console.log("Parent clicked");
}, false)

document.getElementById('child').addEventListener('click',(event)=> {
    // event.stopPropagation();
    console.log("Child clicked");
}, false)



// capturing -> top to bottom

// document.getElementById('grandparent').addEventListener('click', (event)=> {
//     console.log("Grand parent clicked");
//     event.stopPropagation();
// }, true)

// document.getElementById('parent').addEventListener('click',(event)=> {
//     console.log("Parent clicked");
// }, true)

// document.getElementById('child').addEventListener('click',(event)=> {
//     console.log("Child clicked");
// }, true)



// Advance

// document.getElementById('grandparent').addEventListener('click', (event)=> {
//     console.log("Grand parent clicked");
// }, true)

// document.getElementById('parent').addEventListener('click',(event)=> {
//     console.log("Parent clicked");
// }, false)

// document.getElementById('child').addEventListener('click',(event)=> {
//     console.log("Child clicked");
// }, true)



// document.getElementById('grandparent').addEventListener('click', (event)=> {
//     console.log("Grand parent clicked");
// }, true) // capturing

// document.getElementById('parent').addEventListener('click',(event)=> {
//     console.log("Parent clicked");
// }, false) // bubbling

// document.getElementById('child').addEventListener('click',(event)=> {
//     console.log("Child clicked");
// }, false) // bubbling