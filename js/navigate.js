const links = document.querySelectorAll('#popup a')
const links2 = document.querySelectorAll('#popup-mobile a')
const mobilePopup = document.getElementById('mobile_popup')

document.addEventListener('scroll', () => {
	const popup = document.getElementById('popup')
	const popupMobile = document.getElementById('popup-mobile')
	const scrollY = window.scrollY

	console.log(scrollY)

	if (scrollY >= 742 && scrollY < 1362) {
		links[0].style.color = 'var(--text-color)'
		links[1].style.color = ''
		links[2].style.color = ''
		links[3].style.color = ''
		links[4].style.color = ''
		links[5].style.color = ''
	}
	if (scrollY >= 1362 && scrollY < 2018) {
		links[1].style.color = 'var(--text-color)'
		links[0].style.color = ''
		links[2].style.color = ''
		links[3].style.color = ''
		links[4].style.color = ''
		links[5].style.color = ''
	}
	if (scrollY >= 2018 && scrollY < 3073) {
		links[2].style.color = 'var(--text-color)'
		links[1].style.color = ''
		links[0].style.color = ''
		links[3].style.color = ''
		links[4].style.color = ''
		links[5].style.color = ''
	}
	if (scrollY >= 3073 && scrollY < 3340) {
		links[3].style.color = 'var(--text-color)'
		links[1].style.color = ''
		links[2].style.color = ''
		links[0].style.color = ''
		links[4].style.color = ''
		links[5].style.color = ''
	}
	if (scrollY >= 3340 && scrollY < 4377) {
		links[4].style.color = 'var(--text-color)'
		links[1].style.color = ''
		links[2].style.color = ''
		links[3].style.color = ''
		links[0].style.color = ''
		links[5].style.color = ''
	}
	if (scrollY >= 4377) {
		links[5].style.color = 'var(--text-color)'
		links[1].style.color = ''
		links[2].style.color = ''
		links[3].style.color = ''
		links[4].style.color = ''
		links[0].style.color = ''
	}

	if (scrollY >= 870 && scrollY < 1770) {
		mobilePopup.innerHTML = 'How it works'
		links2[0].style.color = 'var(--text-color)'
		links2[1].style.color = ''
		links2[2].style.color = ''
		links2[3].style.color = ''
		links2[4].style.color = ''
		links2[5].style.color = ''
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 1770 && scrollY < 2870) {
		mobilePopup.innerHTML = 'Safety'
		links2[0].style.color = ''
		links2[1].style.color = 'var(--text-color)'
		links2[2].style.color = ''
		links2[3].style.color = ''
		links2[4].style.color = ''
		links2[5].style.color = ''
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 2870 && scrollY < 3950) {
		mobilePopup.innerHTML = 'Whom it’s for'
		links2[0].style.color = ''
		links2[1].style.color = ''
		links2[2].style.color = 'var(--text-color)'
		links2[3].style.color = ''
		links2[4].style.color = ''
		links2[5].style.color = ''
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 3950 && scrollY < 4290) {
		mobilePopup.innerHTML = 'OpenAI o1-mini'
		links2[0].style.color = ''
		links2[1].style.color = ''
		links2[2].style.color = ''
		links2[3].style.color = 'var(--text-color)'
		links2[4].style.color = ''
		links2[5].style.color = ''
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 4290 && scrollY < 5360) {
		mobilePopup.innerHTML = 'How to use OpenAI o1'
		links2[0].style.color = ''
		links2[1].style.color = ''
		links2[2].style.color = ''
		links2[3].style.color = ''
		links2[4].style.color = 'var(--text-color)'
		links2[5].style.color = ''
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 5360) {
		mobilePopup.innerHTML = 'What’s next'
		links2[0].style.color = ''
		links2[1].style.color = ''
		links2[2].style.color = ''
		links2[3].style.color = ''
		links2[4].style.color = ''
		links2[5].style.color = 'var(--text-color)'
		popupMobile.classList.remove('fg')
	}
	if (scrollY >= 7100) {
		popupMobile.classList.add('fg')
	}

	if (scrollY > 300) {
		popup.classList.add('popup-op')
		popup.classList.remove('popup-off')
	} else {
		popup.classList.add('popup-off')
		popup.classList.remove('popup-op')
	}
	if (scrollY > 300) {
		popupMobile.classList.add('popup-op')
		popupMobile.classList.remove('popup-off')
	} else {
		popupMobile.classList.add('popup-off')
		popupMobile.classList.remove('popup-op')
	}
})

links.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()

		const targetId = link.getAttribute('href')
		const targetElement = document.querySelector(targetId)
		const targetTop = targetElement.offsetTop - 50

		window.scrollTo({ top: targetTop, behavior: 'smooth' })
	})
})

popupMobile.addEventListener('click', () => {
	const list = document.querySelector('.popup__list-mobile')
	list.classList.toggle('popup__list-mobile--on')
})

links2.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault()

		const targetId = link.getAttribute('href')
		const targetElement = document.querySelector(targetId)
		const targetTop = targetElement.offsetTop - 120

		window.scrollTo({ top: targetTop, behavior: 'smooth' })
	})
})
