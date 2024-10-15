function updateSlidesPerView() {
	const top = function setTop() {
		if (window.innerWidth < 550) {
			document.querySelector('body > div.swiper').style.position = 'unset'
			document.querySelector(
				'body > div.swiper > swiper-container'
			).style.position = 'unset'
			document
				.querySelector('body > div.swiper > swiper-container')
				.shadowRoot.querySelector('div').style.position = 'unset'

			return '590px'
		} else {
			document.querySelector('body > div.swiper').style.position = 'relative'
			document.querySelector(
				'body > div.swiper > swiper-container'
			).style.position = 'relative'
			document
				.querySelector('body > div.swiper > swiper-container')
				.shadowRoot.querySelector('div').style.position = 'relative'
			return '774px'
		}
	}

	const h = function setTop() {
		if (window.innerWidth < 550) {
			return '20px'
		}
	}

	const top2 = function setTop() {
		if (window.innerWidth > 550) {
			return '-50px'
		} else {
			return '-30px'
		}
	}

	const pag = document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal'
		)

	pag.style.top = `${top()}`
	pag.style.height = `${h()}`

	document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal > span:nth-child(2)'
		).style.background = 'var(--text-color)'

	document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal > span:nth-child(3)'
		).style.background = 'var(--text-color)'

	document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal > span:nth-child(4)'
		).style.background = 'var(--text-color)'

	document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal > span:nth-child(5)'
		).style.background = 'var(--text-color)'

	const ba = document
		.querySelector('body > div.swiper > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal > span.swiper-pagination-bullet.swiper-pagination-bullet-active'
		)

	ba.style.background = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(4) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left1 = document
		.querySelector('body > div:nth-child(4) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv1 = left1.querySelector('svg')
	sv1.style.width = '8px'
	sv1.style.height = '14px'

	left1.style.top = `${top2()}`
	left1.style.left = '70%'
	left1.style.color = 'var(--text-color)'
	let right1 = document
		.querySelector('body > div:nth-child(4) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv2 = right1.querySelector('svg')
	sv2.style.width = '8px'
	sv2.style.height = '14px'
	right1.style.top = `${top2()}`
	right1.style.right = '10%'
	right1.style.color = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(5) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left2 = document
		.querySelector('body > div:nth-child(5) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv3 = left2.querySelector('svg')
	sv3.style.width = '8px'
	sv3.style.height = '14px'

	left2.style.top = `${top2()}`
	left2.style.left = '70%'
	left2.style.color = 'var(--text-color)'
	let right2 = document
		.querySelector('body > div:nth-child(5) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv4 = right2.querySelector('svg')
	sv4.style.width = '8px'
	sv4.style.height = '14px'
	right2.style.top = `${top2()}`
	right2.style.right = '10%'
	right2.style.color = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(6) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left3 = document
		.querySelector('body > div:nth-child(6) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv5 = left3.querySelector('svg')
	sv5.style.width = '8px'
	sv5.style.height = '14px'

	left3.style.top = `${top2()}`
	left3.style.left = '70%'
	left3.style.color = 'var(--text-color)'
	let right3 = document
		.querySelector('body > div:nth-child(6) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv6 = right3.querySelector('svg')
	sv6.style.width = '8px'
	sv6.style.height = '14px'
	right3.style.top = `${top2()}`
	right3.style.right = '10%'
	right3.style.color = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(7) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left4 = document
		.querySelector('body > div:nth-child(7) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv7 = left4.querySelector('svg')
	sv7.style.width = '8px'
	sv7.style.height = '14px'

	left4.style.top = `${top2()}`
	left4.style.left = '70%'
	left4.style.color = 'var(--text-color)'
	let right4 = document
		.querySelector('body > div:nth-child(7) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv8 = right4.querySelector('svg')
	sv8.style.width = '8px'
	sv8.style.height = '14px'
	right4.style.top = `${top2()}`
	right4.style.right = '10%'
	right4.style.color = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(8) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left5 = document
		.querySelector('body > div:nth-child(8) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv9 = left5.querySelector('svg')
	sv9.style.width = '8px'
	sv9.style.height = '14px'

	left5.style.top = `${top2()}`
	left5.style.left = '70%'
	left5.style.color = 'var(--text-color)'
	let right5 = document
		.querySelector('body > div:nth-child(8) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv10 = right5.querySelector('svg')
	sv10.style.width = '8px'
	sv10.style.height = '14px'
	right5.style.top = `${top2()}`
	right5.style.right = '10%'
	right5.style.color = 'var(--text-color)'

	document
		.querySelector('body > div:nth-child(9) > div > swiper-container')
		.shadowRoot.querySelector('div').style.position = 'unset'

	let left6 = document
		.querySelector('body > div:nth-child(9) > div > swiper-container')
		.shadowRoot.querySelector(
			'div > div.swiper-button-prev.swiper-button-disabled'
		)
	let sv11 = left6.querySelector('svg')
	sv11.style.width = '8px'
	sv11.style.height = '14px'

	left6.style.top = `${top2()}`
	left6.style.left = '70%'
	left6.style.color = 'var(--text-color)'
	let right6 = document
		.querySelector('body > div:nth-child(9) > div > swiper-container')
		.shadowRoot.querySelector('div > div.swiper-button-next')
	let sv12 = right6.querySelector('svg')
	sv12.style.width = '8px'
	sv12.style.height = '14px'
	right6.style.top = `${top2()}`
	right6.style.right = '10%'
	right6.style.color = 'var(--text-color)'
}

window.addEventListener('load', updateSlidesPerView)
window.addEventListener('resize', updateSlidesPerView)
