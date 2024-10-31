(function() {
	// Визначаємо ID адміна, куди будемо передавати дані
	console.log(document.currentScript.src);
	const ID = document.currentScript.src.split('id=')[1] || null;
	
	/* Visit */
	// Формуємр дані першого відвідування, коли користувач завантажив сторінку
	async function visitData() {
		return {
			projectId: ID,
			userAgent: navigator.userAgent,
			ip: await getIPFromAmazon(),
			href: window.location.href,
			screenSize: `${window.screen.width}x${window.screen.height}`,
			timestamp: new Date().toLocaleString(),
			number: 1,
		}
	}
	
	// Відправляємо дані відвідування
	visitData().then(data => {
		fetch('http://localhost:3000/api/analytics/visits', {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(data)
		}).then((response) => {
			console.log('visit, response ', response)
		})
	})
	
	// Формуємо стек даних про відвідувача сайту
	async function userData() {
    return  {
	    projectId: ID,
	    timestamp: new Date().toLocaleString(),
	    userAgent: navigator.userAgent,
	    screenSize: `${window.screen.width}x${window.screen.height}`,
	    language: navigator.language,
	    platform: navigator.platform,
	    appVersion: navigator.appVersion,
	    history: history.length,
	    ip: await getIPFromAmazon(),
	    href: window.location.href,
    }
  }
	
	userData().then(data => {
		// console.log('user data ', data)
	});
	
	
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

async function getIPFromAmazon() {
	const res =  await fetch('https://checkip.amazonaws.com/');
	return (await res.text()).replace(/(\r\n|\n|\r)/gm, "");
}