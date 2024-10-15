let lastScrollTop = 0
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
	const scrollTop = window.scrollY || document.documentElement.scrollTop

	if (scrollTop > 50) {
		if (scrollTop > lastScrollTop) {
			header.style.transform = 'translateY(-100%)'
		} else {
			header.style.transform = 'translateY(0)'
		}
		lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
	}
})
