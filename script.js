function readMore() {
	const p = document.querySelector("#story-p2");
	if (p.style.display === "none" || p.style.display === "") {
		p.style.display = "block";
	} else {
		p.style.display = "none";
	}
}

