console.log("Wikiskin test!");
if ("URLSearchParams" in window) {
	var searchParams = new URLSearchParams(window.location.search);
	if (searchParams.get("useskin") != "timeless") {
		searchParams.set("useskin", "timeless");
		window.location.replace(window.location.pathname + "?" + searchParams.toString());
	}
} else {
	console.log("Wow, you are on an old browser.");
}