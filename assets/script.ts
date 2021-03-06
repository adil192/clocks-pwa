let clock_container = document.getElementById("clock-container");
let clock_current = clock_container.querySelector("clock.focus");

let minute_scrolled = -1;

function findNewCurrentTime() {
	let now = new Date();
	let minute_current = now.getMinutes();
	let hour_current = now.getHours() % 12;

	if (minute_current == minute_scrolled) return;
	minute_scrolled = minute_current;

	if (clock_current != null)
		clock_current.classList.remove("focus");

	clock_current = clock_container.querySelector(".minute-"+minute_current+".hour-"+hour_current);
	clock_current.classList.add("focus");
	scrollToCurrentTime();
}

function scrollToCurrentTime() {
	if (clock_current != null)
		clock_current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

setInterval(findNewCurrentTime, 1000);

window.addEventListener("resize", scrollToCurrentTime, {passive: true});

window.addEventListener("focus", scrollToCurrentTime, {passive: true});

window.addEventListener("load", function () {
	// set up PWA service worker
	if('serviceWorker' in navigator){
		navigator.serviceWorker.register("sw.js")
			.then(reg => console.log('service worker registered:', reg))
			.catch(err => console.log('service worker not registered', err));
	}
})
