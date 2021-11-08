const mobile = location.hostname.split(".")[1] === "m";
const port = browser.runtime.connect({name: "events"});
port.onMessage.addListener(({skin}) => {
	// TODO: Replace with loading CSS files directly
	const searchParams = new URLSearchParams(location.search);
	if (mobile && skin === "mobile" || !mobile && searchParams.get("useskin") === skin) {
		return;
	}
	console.log("Changing skin to " + skin);
	if (mobile !== (skin === "mobile")) { // If user has switched to/from Minerva Neue
		mobile ? searchParams.set("useskin", skin) : searchParams.delete("useskin");
		let hostParts = location.host.split(".");
		hostParts.splice(1, ...(mobile ? [1] : [0, "m"])); // Remove/add m
		location.replace(`${location.protocol}//${hostParts.join(".")}${location.pathname}${searchParams.toString() === "" ? "" : "?" + searchParams.toString()}${location.hash}`);
	} else {
		searchParams.set("useskin", skin);
		location.replace(`${location.origin}${location.pathname}?${searchParams.toString()}${location.hash}`);
	}
});