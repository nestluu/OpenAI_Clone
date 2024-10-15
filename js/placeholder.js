document.addEventListener('DOMContentLoaded', function () {
	const label = document.getElementById('label')
	const placeholders = [
		'Recommended an easy poyluck dish',
		'Help me build a budget',
		'Kritisiere meine Kurzgeschichte',
		'Find gentle lower back stretches',
		'Make this recipe vegetarian',
	]
	let currentIndex = 0
	function changePlaceholder() {
		currentIndex = (currentIndex + 1) % placeholders.length
		label.textContent = placeholders[currentIndex]
	}
	setInterval(changePlaceholder, 1500)
})
