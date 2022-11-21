const buttonClick = document.querySelector('button');
const circle = document.querySelector('.circle');

buttonClick.addEventListener('click', click);

function click () {
	const clickSound = document.getElementById('beep');
	clickSound.play();
	circle.classList.toggle("animation");
	buttonClick.classList.toggle("button_color")
}


