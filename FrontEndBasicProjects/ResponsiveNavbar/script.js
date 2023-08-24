// javascript code goes here

let navbarLinks = document.getElementsByClassName('navbar-links')[0];

document.getElementsByClassName('navbar-menu-icon')[0].addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active');
})

window.addEventListener('resize', ()=> {
    if (window.innerWidth > 750) {        
        navbarLinks.classList.remove('active');
    } 
})