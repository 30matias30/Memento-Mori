let toggle = document.getElementById('toggle-container');
let toggleLogo = document.querySelector('.toggle');

let body = document.querySelector('body');

let blackSquare = document.querySelectorAll('.black-square');

toggle.onclick = function() {
    toggle.classList.toggle('dark');
    toggleLogo.classList.toggle('dark');
    body.classList.toggle('dark');
    blackSquare.classList.toggle('dark');
}
