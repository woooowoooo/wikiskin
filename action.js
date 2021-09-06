const mobile = location.hostname.split(".")[1] === "m";
const port = browser.runtime.connect({name: "events"});
function changeSkin() {
	console.log("Changing skin to " + skin);
	const searchParams = new URLSearchParams(location.search);
	if (mobile && skin === "mobile" || !mobile && searchParams.get("useskin") === skin) {
		return;
	}
	if (!mobile && skin === "mobile") {
		searchParams.delete("useskin");
		let hostParts = location.host.split(".");
		hostParts.splice(1, 0, "m");
		location.replace(`${location.protocol}//${hostParts.join(".")}${location.pathname}?${searchParams.toString()}${location.hash}`);
	} else if (mobile && skin !== "mobile") {
		searchParams.set("useskin", skin);
		let hostParts = location.host.split(".");
		hostParts.splice(1, 1);
		location.replace(`${location.protocol}//${hostParts.join(".")}${location.pathname}?${searchParams.toString()}${location.hash}`);
	} else {
		searchParams.set("useskin", skin);
		location.replace(`${location.origin}${location.pathname}?${searchParams.toString()}${location.hash}`);
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