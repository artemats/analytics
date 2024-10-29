(function() {
	console.log(document.currentScript.src)
	const ID = document.currentScript.src.split('id=')[1]
	console.log("ID:", ID)
	
	// Логіка для відстеження перегляду сторінки
	function trackPageView() {
		console.log("Page view tracked!");
	}
	
	// Функція для відстеження кліків на кнопках
	function trackClick(event) {
		const element = event.target;
		if (element.tagName === 'BUTTON') {
			console.log("Button clicked:", element);
			// Додайте логіку для обробки кліка
		}
	}
	
	// Додаємо обробник подій при завантаженні сторінки
	window.addEventListener('load', () => {
		trackPageView();
		
		// Додаємо обробник подій на document для відстеження кліків на кнопках
		document.addEventListener('click', trackClick);
	});
})();
