let lastScrollTop = 0
const header = document.querySelector('.header')
const popupMobile = document.getElementById('popup-mobile')

window.addEventListener('scroll', () => {
	const scrollTop = window.scrollY || document.documentElement.scrollTop

	if (scrollTop > 50) {
		if (scrollTop > lastScrollTop) {
			header.style.transform = 'translateY(-100%)'
			popupMobile.style.transform = 'translateY(0)'
		} else {
			header.style.transform = 'translateY(0)'
			popupMobile.style.transform = 'translateY(50px)'
		}
		lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
	}
})
