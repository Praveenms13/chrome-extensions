chrome.contextMenus.create({
  "title": "Manager",
  "contexts": ["selection"],
  "id": "Manager"
});






//-----------function to check if the selection is integer----------------------------------------------------------------------------------------
function isInt(value) {
  return !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10));
}
//-------------------------------------------------------------------------------------------------------------------------------------------------

//-----------function to check if the selection is integer------------------------------------------------------------------------------------------
chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "Manager" && clickData.selectionText) {
    console.log(clickData.selectionText);
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(['total', 'limit'], function (data) {
        var newTotal = 0;
        if (data.total) {
          newTotal += parseInt(data.total);
        }
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ 'total': newTotal }, function () {
          chrome.storage.sync.get('total', function (data) {
            $('#total').text(data.total);
          })
          if (newTotal >= data.limit) {
            var notifOptions = {
              type: 'basic',
              iconUrl: 'Images/icon48.png',
              title: 'Total exceeded the Limit!',
              message: "Uh oh! Looks like you've crossed your limit!"
            };
            chrome.notifications.create('limitreached', notifOptions, function () { });
          }
        });
      });
    }
  }
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------

chrome.storage.onChanged.addListener(function (changes, storageName) {
  chrome.action.setBadgeText({ "text": changes.total.newValue.toString() });
});