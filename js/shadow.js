const box = document.querySelectorAll('swiper-slide')

box[0].addEventListener('mouseenter', () => {
	box[0].classList.add('slide1')
})

box[0].addEventListener('mouseleave', () => {
	box[0].classList.remove('slide1')
})

box[1].addEventListener('mouseenter', () => {
	box[1].classList.add('slide2')
})

box[1].addEventListener('mouseleave', () => {
	box[1].classList.remove('slide2')
})

box[2].addEventListener('mouseenter', () => {
	box[2].classList.add('slide3')
})

box[2].addEventListener('mouseleave', () => {
	box[2].classList.remove('slide3')
})

box[3].addEventListener('mouseenter', () => {
	box[3].classList.add('slide4')
})

box[3].addEventListener('mouseleave', () => {
	box[3].classList.remove('slide4')
})

box[4].addEventListener('mouseenter', () => {
	box[4].classList.add('slide5')
})

box[4].addEventListener('mouseleave', () => {
	box[4].classList.remove('slide5')
})
