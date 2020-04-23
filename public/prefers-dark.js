const moonButton = document.getElementById('moon-btn');
const sunButton = document.getElementById('sun-btn');

function checkDarkMode() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return true;
	}
	return false;
}

if (checkDarkMode()) {
	document.documentElement.classList.add('mode-dark');
	moonButton.classList.toggle('hidden');
	sunButton.classList.toggle('hidden');
} else {
	document.documentElement.classList.remove('mode-dark');
}

document.addEventListener('DOMContentLoaded', (event) => {
	const toggleButton = document.getElementById('toggle-dark-mode');

	toggleButton.addEventListener('click', () => {
		document.documentElement.classList.toggle('mode-dark');
		moonButton.classList.toggle('hidden');
		sunButton.classList.toggle('hidden');
	});
});
