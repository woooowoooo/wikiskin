document.body.style.border = "5px solid red";
if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set("useskin", "timeless");
    var newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
}