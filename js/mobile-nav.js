let btn = document.querySelector('.mobile-nav-button')
let btn2 = document.querySelector('.mobile-nav-button__icon')
let nav = document.querySelector('.mobile-nav')
const menuItems = document.querySelectorAll('.mobile-nav-btn')
const podlists = document.querySelectorAll('.mobile-nav-podlist')
btn.addEventListener('click', function (event) {
	btn2.classList.toggle('active')
	nav.classList.toggle('active')
	overlay.classList.toggle('modal__overlay--visible')
	document.body.classList.toggle('no-scroll')
	elements.forEach(item => {
		item.classList.toggle('swiper--down')
	})
	if (loop.classList.contains('hide')) {
		loop.classList.add('show')
		loop.classList.remove('hide')
	} else {
		loop.classList.remove('show')
		loop.classList.add('hide')
	}
})

menuItems[0].addEventListener('click', () => {
	const dropdown = menuItems[0].nextElementSibling
	if (!dropdown.id) {
		podlists.forEach(item => {
			if (item !== dropdown) {
				item.removeAttribute('id')
			}
		})
		dropdown.id = 'mobile-nav-podlist-open'
		menuItems[1].classList.add('swiper--down--l')
		menuItems[2].classList.add('swiper--down--l')
		menuItems[3].classList.add('swiper--down--l')
	} else {
		dropdown.removeAttribute('id')
		menuItems[1].classList.remove('swiper--down--l')
		menuItems[2].classList.remove('swiper--down--l')
		menuItems[3].classList.remove('swiper--down--l')
	}
})

menuItems[1].addEventListener('click', () => {
	const dropdown = menuItems[1].nextElementSibling
	if (!dropdown.id) {
		podlists.forEach(item => {
			if (item !== dropdown) {
				item.removeAttribute('id')
			}
		})
		dropdown.id = 'mobile-nav-podlist-open'
		menuItems[2].classList.add('swiper--down--l')
		menuItems[3].classList.add('swiper--down--l')
	} else {
		dropdown.removeAttribute('id')
		menuItems[2].classList.remove('swiper--down--l')
		menuItems[3].classList.remove('swiper--down--l')
	}
})

menuItems[2].addEventListener('click', () => {
	const dropdown = menuItems[2].nextElementSibling
	if (!dropdown.id) {
		podlists.forEach(item => {
			if (item !== dropdown) {
				item.removeAttribute('id')
			}
		})
		dropdown.id = 'mobile-nav-podlist-open'
		menuItems[3].classList.add('swiper--down--l')
	} else {
		dropdown.removeAttribute('id')
		menuItems[3].classList.remove('swiper--down--l')
	}
})

menuItems[3].addEventListener('click', () => {
	const dropdown = menuItems[3].nextElementSibling
	if (!dropdown.id) {
		podlists.forEach(item => {
			if (item !== dropdown) {
				item.removeAttribute('id')
			}
		})
		dropdown.id = 'mobile-nav-podlist-open'
	} else {
		dropdown.removeAttribute('id')
	}
})

document.addEventListener('DOMContentLoaded', () => {
	const btn1 = document.querySelector('.swiper-button-prev')
	console.log(btn1)
})
