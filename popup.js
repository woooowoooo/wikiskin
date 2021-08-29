let buttons = document.getElementsByTagName("button");
let skinNames = {
	vr: "vector",
	tl: "timeless",
	mn: "mobile",
	mb: "monobook",
	md: "modern",
	cb: "cologneblue"
};
for (let button of buttons) {
	button.name = skinNames[button.id];
	button.addEventListener("click", changeSkin);
	if (localStorage.getItem("useskin") === button.name) {
		button.classList.add("selected");
	}
};
function changeSkin() {
	localStorage.setItem("useskin", this.name);
	for (let button of buttons) {
		button.classList.remove("selected");
	}
	this.classList.add("selected");
}
// Switch
let enable = document.getElementById("enable");
let enabled = document.getElementById("enabled");
let disabled = document.getElementById("disabled");
if (localStorage.getItem("enabled") === "false") {
	enable.checked = false;
	enabled.classList.add("hidden");
	disabled.classList.remove("hidden");
}
enable.addEventListener("click", function () {
	if (localStorage.getItem("enabled") !== "false") {
		localStorage.setItem("enabled", "false");
		enabled.classList.add("hidden");
		disabled.classList.remove("hidden");
	} else {
		localStorage.setItem("enabled", "true");
		enabled.classList.remove("hidden");
		disabled.classList.add("hidden");
	}
});