(function() {
	// Ваша логіка для відстеження користувацької активності
	function trackPageView() {
		console.log("Page view tracked!");
		// Додайте іншу логіку для відстеження
	}
	
	// Виклик функції під час завантаження сторінки
	window.addEventListener('load', trackPageView);
	
	// Додайте інші методи відстеження, наприклад, кліки
	window.trackClick = function(element) {
		console.log("Element clicked:", element);
		// Додайте логіку для обробки кліків
	};
})();


// https://cdn.jsdelivr.net/gh/artemats/analytics/scripts/analytics-1.0.0.js