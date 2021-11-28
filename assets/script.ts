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

	clock_current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

setInterval(scrollToCurrentTime, 1000);
