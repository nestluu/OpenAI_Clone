const swiperContainer = document.querySelectorAll('.mySwiper')

function updateSlidesPerView() {
	const maxWidth = 850 // задайте максимальную ширину экрана для изменения
	const slidesPerView = window.innerWidth > maxWidth ? '1.725' : '1.1'
	const spaceBetween = window.innerWidth > maxWidth ? '0' : '10'
	swiperContainer[0].setAttribute('slides-per-view', slidesPerView)
	swiperContainer[0].setAttribute('space-between', spaceBetween)
	swiperContainer[1].setAttribute('slides-per-view', slidesPerView)
	swiperContainer[1].setAttribute('space-between', spaceBetween)
}

window.addEventListener('load', updateSlidesPerView)
window.addEventListener('resize', updateSlidesPerView)
