localStorage.setItem("useskin", "timeless");
localStorage.setItem("enabled", "true");
function postStorage() {
	port.postMessage({skin: localStorage.getItem("useskin")});
	port.postMessage({enabled: localStorage.getItem("enabled")});
}
let port;
browser.runtime.onConnect.addListener(function (p) {
	port = p;
	console.log("Port made");
	postStorage();
});
addEventListener("storage", postStorage);