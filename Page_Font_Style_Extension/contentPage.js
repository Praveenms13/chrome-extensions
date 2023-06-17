chrome.runtime.sendMessage({ toWork: "Show_Action" });
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.toWork == "ChangeColour") {
        var addcolor = request.selectedColour;
        $('*').css('color', addcolor);
        //below is the copilot suggestion
        // var color = request.selectedcolor;
        // var elements = document.getElementsByTagName("*");
        // for (var i = 0; i < elements.length; i++) {
        //     elements[i].style.color = color;
        // }
        //$('*').css('color', color); //* means all classes 
    }
});