chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.toWork == "Show_Action") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.action.show(tabs[0].id);
        });
    }
});