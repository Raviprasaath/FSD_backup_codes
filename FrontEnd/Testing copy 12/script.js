const openButton = document.getElementById('openButton');
const sideNav = document.getElementById('sideNav');

openButton.addEventListener('click', () => {
  sideNav.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!sideNav.contains(event.target) && event.target !== openButton) {
    sideNav.classList.remove('open');
  }
});