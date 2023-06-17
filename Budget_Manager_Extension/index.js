$(function () {
    chrome.storage.sync.get('total', function (data) {
        $('#total').text(data.total);
    })

    chrome.storage.sync.get('limit', function (data) {
        $('#limit').text(data.limit);
    })
    $('#spendamount').click(function () {
        chrome.storage.sync.get(['total', 'limit'], function (data) {
            var newTotal = 0;
            if (data.total) {
                newTotal += parseInt(data.total);
            }

            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }
            chrome.storage.sync.set({ 'total': newTotal }, function () {
                if (amount && newTotal >= data.limit) {
                    var notifOptions = {
                        type: 'basic',
                        iconUrl: 'Images/icon48.png',
                        title: 'Limit reached!',
                        message: "Uh oh! Looks like you've reached your limit!"
                    };
                    chrome.notifications.create('limitreached', notifOptions, function () { });
                }
            });

            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});
