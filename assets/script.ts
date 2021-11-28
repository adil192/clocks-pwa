let clock_container = document.getElementById("clock-container");

let minute_scrolled = -1;

function scrollToCurrentTime() {
	let now = new Date();
	let minute_current = now.getMinutes();
	let hour_current = now.getHours() % 12;

	if (minute_current == minute_scrolled) return;
	minute_scrolled = minute_current;

	let clock_current = clock_container.querySelector(".minute-"+minute_current+".hour-"+hour_current);

	clock_container.querySelector("clock.focus").classList.remove("focus");
	clock_current.classList.add("focus");

	let x = clock_current.offsetLeft + clock_current.scrollWidth / 2 - window.innerWidth / 2;
	let y = clock_current.offsetTop + clock_current.scrollHeight / 2 - window.innerHeight / 2;
	console.log("x", x, "y", y);

	window.scrollTo(x, y);
}

setInterval(scrollToCurrentTime, 1000);
