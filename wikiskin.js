localStorage.setItem("useskin", "timeless");
localStorage.setItem("enabled", "true");
function postSkin() {
	if (localStorage.getItem("enabled") === "true") {
		port.postMessage({skin: localStorage.getItem("useskin")});
	}
}
let port;
browser.runtime.onConnect.addListener(function (p) {
	port = p;
	console.log("action.js ⇄ wikiskin.js port created");
	postSkin();
});
addEventListener("storage", postSkin);