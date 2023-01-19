$(function () {
  chrome.storage.sync.get("limit", function (data) {
    $("#limit").val(data.limit);
  });
  $("#saveLimit").click(function () {
    var limit = $("#limit").val();
    if (limit) {
      chrome.storage.sync.set({ limit: limit }, function () {
        close();
      });
    }
  });
  $("#resetTotal").click(function () {
    chrome.storage.sync.set({ total: 0 }, function () {
      var notifOptions = {
        type: "basic",
        iconUrl: "Images/icon48.png",
        title: "Total reseted!",
        message: "Your Total spend was reset..",
      };
      chrome.notifications.create("limitreached", notifOptions, function () { });
    });
    //close();
  });
});
