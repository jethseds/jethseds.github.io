$(function() {
        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });
    });

const button = document.querySelector(".mm-btn")
const svg = document.querySelector(".mm-btn svg")
const main_menu = document.querySelector(".main-menu")
const arrow_show_hide = document.querySelector(".arrow-show-hide")

button.addEventListener('click',function(){
	main_menu.classList.toggle("mm-active")
	main_menu.classList.toggle("before","mm-shadow")
	arrow_show_hide.classList.toggle("mm-arrow")
	svg.classList.toggle("svg-active")
	button.classList.toggle("mm-btn-active")
})




// cursor
const cursor2 = document.querySelector('.cursor2')
const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e) => {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
	cursor2.style.left = e.clientX + 'px';
	cursor2.style.top = e.clientY + 'px';
})