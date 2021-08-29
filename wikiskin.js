let skin = "timeless";
let enabled = true;
let port;
browser.runtime.onConnect.addListener(function (p) {
	port = p;
	console.log("Port made");
	port.postMessage({skin: localStorage.getItem("useskin")});
	port.postMessage({enabled: localStorage.getItem("enabled")});
});
addEventListener("storage", function () {
	port.postMessage({skin: localStorage.getItem("useskin")});
	port.postMessage({enabled: localStorage.getItem("enabled")});
});