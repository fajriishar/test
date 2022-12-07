const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', alert('oke'))

// document.querySelector("#tes").addEventListener('click', () => {
//     document.querySelector('#navbar nav ul').classList.toggle('slide');
//     console.log(document.querySelector('#navbar nav ul'))
// })
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});