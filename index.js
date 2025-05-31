const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector('.navlist');
const track = document.querySelector('.carousel_track');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}