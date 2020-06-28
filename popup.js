var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", changeSkin);
};
function changeSkin() {
	
};
var enable = document.getElementById("enable");
enable.addEventListener("click", toggleEnable);
var enabled = document.getElementById("enabled");
var disabled = document.getElementById("disabled");
function toggleEnable() {
	if (enable.checked == false) {
		disabled.classList.remove("hidden");
		enabled.classList.add("hidden");
	} else {
		disabled.classList.add("hidden");
		enabled.classList.remove("hidden");
	}
}