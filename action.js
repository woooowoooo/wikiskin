const port = browser.runtime.connect({name: "events"});
function changeSkin() {
	console.log("Changing skin to " + skin);
	if (searchParams.get("useskin") !== skin) {
	const searchParams = new URLSearchParams(location.search);
		searchParams.set("useskin", skin);
		window.location.replace(window.location.pathname + "?" + searchParams.toString());
	}
}
port.onMessage.addListener(function (m) {
	console.log(m);
	if (m.skin != null) {
		skin = m.skin;
	} else {
		enabled = m.enabled === "true";
	}
	if (enabled) {
		changeSkin();
	}
});