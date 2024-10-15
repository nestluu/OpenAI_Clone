const loop = document.querySelector('.header__find--loop')
const modal = document.querySelectorAll('.modal')
const cmp = document.getElementById('cmp')
const saf = document.getElementById('saf')
const prod = document.getElementById('prod')
const res = document.getElementById('res')
const overlay = document.querySelector('.modal__overlay')
const modalNav = document.querySelectorAll('.modal-nav')
const modalImg = document.querySelectorAll('.modal-img')
const input = document.querySelector('.modal__input')
const elements = document.querySelectorAll('body > *:not(header):not(.modals)')
let path

loop.addEventListener('click', e => {
	path = e.currentTarget.getAttribute('data-path')
	console.log(path)
	if (!overlay.classList.contains('modal__overlay--visible')) {
		modalNav.forEach(item => {
			item.classList.remove('modal-nav--open')
			item.classList.add('modal-nav--close')
		})
		document.body.classList.add('no-scroll')
		overlay.classList.add('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.add('modal--visible')
		elements.forEach(item => {
			item.classList.add('swiper--down')
		})
		input.classList.add('op')
		header.classList.add('transparent')
	} else {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.remove('modal--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		input.classList.remove('op')
		header.classList.remove('transparent')
	}
})

cmp.addEventListener('click', e => {
	path = e.currentTarget.getAttribute('data-path')
	if (!overlay.classList.contains('modal__overlay--visible')) {
		document.body.classList.add('no-scroll')
		input.classList.remove('op')
		overlay.classList.add('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.add('modal--visible')
		elements.forEach(item => {
			item.classList.add('swiper--down')
		})
		modalNav[0].classList.add('modal-nav--open')
		modalNav[0].classList.remove('modal-nav--close')
		modalImg[0].classList.add('show')
		modalImg[0].classList.remove('hide')
		header.classList.add('transparent')
	} else {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.remove('modal--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modalNav[0].classList.remove('modal-nav--open')
		modalNav[0].classList.add('modal-nav--close')
		modalImg[0].classList.remove('show')
		modalImg[0].classList.add('hide')
		header.classList.remove('transparent')
	}
})

cmp.addEventListener('mouseover', e => {
	modal.forEach(item => {
		item.classList.remove('modal--visible')
	})

	input.classList.remove('op')

	path = e.currentTarget.getAttribute('data-path')

	document.body.classList.add('no-scroll')
	overlay.classList.add('modal__overlay--visible')
	document
		.querySelector(`[data-target=${path}]`)
		.classList.add('modal--visible')
	elements.forEach(item => {
		item.classList.add('swiper--down')
	})
	modalNav[0].classList.add('modal-nav--open')
	modalNav[0].classList.remove('modal-nav--close')
	modalImg[0].classList.add('show')
	modalImg[0].classList.remove('hide')
	header.classList.add('transparent')
})

saf.addEventListener('click', e => {
	path = e.currentTarget.getAttribute('data-path')
	if (!overlay.classList.contains('modal__overlay--visible')) {
		input.classList.remove('op')
		document.body.classList.add('no-scroll')
		overlay.classList.add('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.add('modal--visible')
		elements.forEach(item => {
			item.classList.add('swiper--down')
		})
		modalNav[1].classList.add('modal-nav--open')
		modalNav[1].classList.remove('modal-nav--close')
		modalImg[0].classList.add('show')
		modalImg[0].classList.remove('hide')
		header.classList.add('transparent')
	} else {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.remove('modal--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modalNav[1].classList.remove('modal-nav--open')
		modalNav[1].classList.add('modal-nav--close')
		modalImg[0].classList.remove('show')
		modalImg[0].classList.add('hide')
		header.classList.remove('transparent')
	}
})

saf.addEventListener('mouseover', e => {
	modal.forEach(item => {
		item.classList.remove('modal--visible')
	})
	input.classList.remove('op')

	path = e.currentTarget.getAttribute('data-path')

	document.body.classList.add('no-scroll')
	overlay.classList.add('modal__overlay--visible')
	document
		.querySelector(`[data-target=${path}]`)
		.classList.add('modal--visible')
	elements.forEach(item => {
		item.classList.add('swiper--down')
	})
	modalNav[1].classList.add('modal-nav--open')
	modalNav[1].classList.remove('modal-nav--close')
	modalImg[0].classList.add('show')
	modalImg[0].classList.remove('hide')
	header.classList.add('transparent')
})

prod.addEventListener('click', e => {
	path = e.currentTarget.getAttribute('data-path')
	if (!overlay.classList.contains('modal__overlay--visible')) {
		input.classList.remove('op')
		document.body.classList.add('no-scroll')
		overlay.classList.add('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.add('modal--visible')
		elements.forEach(item => {
			item.classList.add('swiper--down')
		})
		modalNav[2].classList.add('modal-nav--open')
		modalNav[2].classList.remove('modal-nav--close')
		modalImg[0].classList.add('show')
		modalImg[0].classList.remove('hide')
	} else {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.remove('modal--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modalNav[2].classList.remove('modal-nav--open')
		modalNav[2].classList.add('modal-nav--close')
		modalImg[0].classList.remove('show')
		modalImg[0].classList.add('hide')
		header.classList.remove('transparent')
	}
})

prod.addEventListener('mouseover', e => {
	modal.forEach(item => {
		item.classList.remove('modal--visible')
	})
	input.classList.remove('op')

	path = e.currentTarget.getAttribute('data-path')

	document.body.classList.add('no-scroll')
	overlay.classList.add('modal__overlay--visible')
	document
		.querySelector(`[data-target=${path}]`)
		.classList.add('modal--visible')
	elements.forEach(item => {
		item.classList.add('swiper--down')
	})
	modalNav[2].classList.add('modal-nav--open')
	modalNav[2].classList.remove('modal-nav--close')
	modalImg[0].classList.add('show')
	modalImg[0].classList.remove('hide')
	header.classList.add('transparent')
})

res.addEventListener('click', e => {
	path = e.currentTarget.getAttribute('data-path')
	if (!overlay.classList.contains('modal__overlay--visible')) {
		input.classList.remove('op')
		document.body.classList.add('no-scroll')
		overlay.classList.add('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.add('modal--visible')
		elements.forEach(item => {
			item.classList.add('swiper--down')
		})
		modalNav[3].classList.add('modal-nav--open')
		modalNav[3].classList.remove('modal-nav--close')
		modalImg[1].classList.add('show')
		modalImg[1].classList.remove('hide')
		header.classList.add('transparent')
	} else {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		document
			.querySelector(`[data-target=${path}]`)
			.classList.remove('modal--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modalNav[3].classList.remove('modal-nav--open')
		modalNav[3].classList.add('modal-nav--close')
		modalImg[1].classList.remove('show')
		modalImg[1].classList.add('hide')
		header.classList.remove('transparent')
	}
})

res.addEventListener('mouseover', e => {
	modal.forEach(item => {
		item.classList.remove('modal--visible')
	})
	input.classList.remove('op')

	path = e.currentTarget.getAttribute('data-path')

	document.body.classList.add('no-scroll')
	overlay.classList.add('modal__overlay--visible')
	document
		.querySelector(`[data-target=${path}]`)
		.classList.add('modal--visible')
	elements.forEach(item => {
		item.classList.add('swiper--down')
	})
	modalNav[3].classList.add('modal-nav--open')
	modalNav[3].classList.remove('modal-nav--close')
	modalImg[1].classList.add('show')
	modalImg[1].classList.remove('hide')
	header.classList.add('transparent')
})

overlay.addEventListener('mouseover', function (e) {
	if (e.target === overlay) {
		if (path !== 'five') {
			document.body.classList.remove('no-scroll')
			overlay.classList.remove('modal__overlay--visible')
			elements.forEach(item => {
				item.classList.remove('swiper--down')
			})
			modal.forEach(item => {
				item.classList.remove('modal--visible')
			})
			modalNav.forEach(item => {
				item.classList.remove('modal-nav--open')
				item.classList.add('modal-nav--close')
			})
			modalImg[0].classList.remove('show')
			modalImg[0].classList.add('hide')
			input.classList.remove('op')
			header.classList.remove('transparent')
		}
	}
})

overlay.addEventListener('click', e => {
	if (e.target === overlay) {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modal.forEach(item => {
			item.classList.remove('modal--visible')
		})
		input.classList.remove('op')
		header.classList.remove('transparent')
	}
})

document.addEventListener('mouseleave', event => {
	if (event.clientY < 0) {
		document.body.classList.remove('no-scroll')
		overlay.classList.remove('modal__overlay--visible')
		elements.forEach(item => {
			item.classList.remove('swiper--down')
		})
		modal.forEach(item => {
			item.classList.remove('modal--visible')
		})
		input.classList.remove('op')
		header.classList.remove('transparent')
	}
})
