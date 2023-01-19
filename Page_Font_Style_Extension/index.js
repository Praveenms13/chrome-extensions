$(function () {
    var colour = $('#fontcolour').val();
    $('#fontcolour').on("change paste keyup", function () {
        colour = $(this).val();
    });
    $('#btnChange').click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { toWork: "ChangeColour", selectedColour: colour })
        });
    });
});