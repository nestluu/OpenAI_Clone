function updateSlidesPerView() {
	const top = function setTop() {
		if (window.innerWidth > 1700) {
			return '-60px'
		}
		if (window.innerWidth > 1600) {
			return '-20px'
		}
		if (window.innerWidth > 1200) {
			return '14px'
		}

		if (window.innerWidth < 1200) {
			return '40px'
		}
	}

	document
		.querySelector('body > div:nth-child(8) > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	document
		.querySelector('body > div:nth-child(10) > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	const prev = document
		.querySelector('body > div:nth-child(10) > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-prev')
	let svg1 = prev.querySelector('svg')
	svg1.style.width = '8px'
	svg1.style.height = '14px'

	prev.style.top = `${top()}`
	prev.style.left = '43%'
	prev.style.color = 'var(--text-color)'

	const next = document
		.querySelector('body > div:nth-child(10) > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')

	let svg2 = next.querySelector('svg')
	svg2.style.width = '8px'
	svg2.style.height = '14px'

	next.style.top = `${top()}`
	next.style.right = '43%'
	next.style.color = 'var(--text-color)'

	const prev2 = document
		.querySelector('body > div:nth-child(8) > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-prev')
	let svg3 = prev2.querySelector('svg')
	svg3.style.width = '8px'
	svg3.style.height = '14px'

	prev2.style.top = `${top()}`
	prev2.style.left = '43%'
	prev2.style.color = 'var(--text-color)'

	console.log(prev)

	const next2 = document
		.querySelector('body > div:nth-child(8) > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')

	let svg4 = next2.querySelector('svg')
	svg4.style.width = '8px'
	svg4.style.height = '14px'

	next2.style.top = `${top()}`
	next2.style.right = '43%'
	next2.style.color = 'var(--text-color)'
}

window.addEventListener('load', updateSlidesPerView)
window.addEventListener('resize', updateSlidesPerView)
