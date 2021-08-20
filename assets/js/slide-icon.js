
let icons = document.querySelectorAll('.slider-icon .section--icons i')
let add = 1
setInterval(() => {
	add++
	const icon = document.querySelector(' .section--icons .slide-icon')
	icon.classList.remove('slide-icon')
	if (add > icons.length) {
		icons[0].classList.add('slide-icon')
		add = 1
	} else {
		icon.nextElementSibling.classList.add('slide-icon')
	}
}, 4000)
