// const totalContent = document.getElementById('main');
// const inputRef = document.getElementById('search-bar');
// const backupContent = totalContent.innerHTML;
// let searchVal;
// const click = () => {
//     searchVal = (inputRef.value);
//     totalContent.innerHTML = backupContent.replaceAll(searchVal, `<mark> ${searchVal} </mark>`)
//     // console.log(searchVal, " search value")
//     // // console.log(totalContent.innerHTML)
//     // console.log(backupContent)
// };
// const markMatches = (currentNode, pattern) => {
// };

// document.getElementById('search-button').addEventListener('click', click)




const contentDivNode = document.getElementsByClassName('content-container')[0];
const inputNode = document.getElementById('search-bar');

const intialContentDivInnerHTML = contentDivNode.innerHTML;

const onSearchButtonClick = () => {
    let searchString = inputNode.value;
    contentDivNode.innerHTML = intialContentDivInnerHTML.replaceAll(searchString, '<mark>' + searchString + '</mark>');
};

document.getElementById('search-button').addEventListener('click', onSearchButtonClick);