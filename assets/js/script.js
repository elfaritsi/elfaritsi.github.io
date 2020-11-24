const menu = document.getElementById('menu');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
	menu.classList.toggle('animation');
	nav.classList.toggle('slide');
});


