let buttons = document.getElementsByTagName("button");
let skinNames = ["vector", "timeless", "", "monobook", "modern", "cologneblue"];
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
};
//Switch
let enable = document.getElementById("enable");
let enabled = document.getElementById("enabled");
let disabled = document.getElementById("disabled");
enable.addEventListener("click", toggleEnable);
function toggleEnable() {
	if (enable.checked == false) {
		disabled.classList.remove("hidden");
		enabled.classList.add("hidden");
	} else {
		disabled.classList.add("hidden");
		enabled.classList.remove("hidden");
	}
}