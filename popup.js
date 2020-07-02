let buttons = document.getElementsByTagName("button");
let skinNames = ["vector", "timeless", "", "monobook", "modern", "cologneblue"];
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", changeSkin);
};
function changeSkin() {
	localStorage.setItem("useskin", skinNames[i]);
};
let enable = document.getElementById("enable");
enable.addEventListener("click", toggleEnable);
let enabled = document.getElementById("enabled");
let disabled = document.getElementById("disabled");
function toggleEnable() {
	if (enable.checked == false) {
		disabled.classList.remove("hidden");
		enabled.classList.add("hidden");
	} else {
		disabled.classList.add("hidden");
		enabled.classList.remove("hidden");
	}
}