const menu = document.getElementById('menu');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
	menu.classList.toggle('animation');
	nav.classList.toggle('slide');
});


// // assign function to onclick property of checkbox
// document.querySelector('#customSwitch').onclick = function() {
//     // access properties using this keyword
//     if ( this.checked ) {
//         alert("Ok");
//     } else {
//         alert("not Ok");
//     }
// };


