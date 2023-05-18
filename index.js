let menu = document.querySelector('.hamburger');
let header = document.getElementById('header');

menu.addEventListener('click', () => {
    header.classList.toggle('active')
    menu.classList.add('hamburger-position')
})
