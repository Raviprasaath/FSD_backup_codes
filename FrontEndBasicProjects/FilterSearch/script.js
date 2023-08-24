// javascript code goes here
let searchInput = document.getElementById('searchInput');
let items = document.querySelectorAll("#itemList li");

searchInput.addEventListener('input', ()=> {

    let searchStore = searchInput.value.toLowerCase();
    
    for(let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().includes(searchStore)) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
})