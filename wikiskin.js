console.log("Wikiskin test");
let channel = new BroadcastChannel("test");
channel.onMessage = function(e) {
	console.log(e);
}
if (enabled) {
	let searchParams = new URLSearchParams(window.location.search);
	if (searchParams.get("useskin") != "timeless") {
		searchParams.set("useskin", "timeless");
		window.location.replace(window.location.pathname + "?" + searchParams.toString());
	}
}