let skin = "timeless";
let enabled = true;
console.log("Test console.log()");
let channel = new BroadcastChannel("debug");
channel.onMessage = function (e) {
	console.log(e);
};
channel.postMessage("Test channel.postMessage()");
if (enabled) {
	console.log("Enabled");
	let searchParams = new URLSearchParams(window.location.search);
	if (searchParams.get("useskin") !== skin) {
		searchParams.set("useskin", skin);
		window.location.replace(window.location.pathname + "?" + searchParams.toString());
	}
}