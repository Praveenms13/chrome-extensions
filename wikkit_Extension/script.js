chrome.contextMenus.create({
    "id": "Wikkit",
    "title": "Wikkit",
    "contexts": ["selection"]
});
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "Wikkit" && clickData.selectionText) {
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        chrome.windows.create(
            {
                "url": wikiUrl,
                "type": "panel",
                top: 10,
                left: 10,
                width: 800,
                height: 600,
            },
            function () { });
    }
});