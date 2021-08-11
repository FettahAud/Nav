const menuBut = document.querySelector('.menu-but')
const ul = document.querySelector('.nav')
const menuLine = document.querySelector('.menu-but div')
menuBut.addEventListener('click', () => {
    ul.classList.toggle('nav-side')
    menuLine.classList.toggle('line')
})