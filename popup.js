let buttons = document.getElementsByTagName("button");
let skinNames = ["vector", "timeless", "mobile", "monobook", "modern", "cologneblue"];
let channel = new BroadcastChannel("test");
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", changeSkin);
	if (localStorage.getItem("useskin") == buttons[i].name) {
		buttons[i].classList.add("selected");
	} else {
		buttons[i].classList.remove("selected");
	}
	buttons[i].name = skinNames[i];
};
function changeSkin() {
	localStorage.setItem("useskin", this.name);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("selected");
	}
	this.classList.add("selected");
	channel.postMessage(localStorage);
};
//Switch
let enable = document.getElementById("enable");
let enabled = document.getElementById("enabled");
let disabled = document.getElementById("disabled");
if (!localStorage.getItem("enabled")) {
	enable.checked = false;
	disabled.classList.add("hidden");
	enabled.classList.remove("hidden");
}
enable.addEventListener("click", toggleEnable);
function toggleEnable() {
	if (localStorage.getItem("enabled")) {
		localStorage.setItem("enabled", false);
		disabled.classList.remove("hidden");
		enabled.classList.add("hidden");
	} else {
		localStorage.setItem("enabled", true);
		disabled.classList.add("hidden");
		enabled.classList.remove("hidden");
	}
	channel.postMessage(localStorage);
}