const mainnav =
document.querySelector('.navigation')
const hambutton = document.querySelector('menu');

hambutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);