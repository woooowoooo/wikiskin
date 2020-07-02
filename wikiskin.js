console.log("Wikiskin test");
if (enabled) {
	let searchParams = new URLSearchParams(window.location.search);
	if (searchParams.get("useskin") != "timeless") {
		searchParams.set("useskin", "timeless");
		window.location.replace(window.location.pathname + "?" + searchParams.toString());
	}
}