console.log("Hello");
chrome.runtime.sendMessage({ toWork: "showPageAction" });

console.log("Hii");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.toWork);
    console.log(request.changeColour);
    if (request.toWork == "ChangeColour") {
        // var colour = request.selectedColour;
        // var elements = document.getElementsByTagName("*");
        // for (var i = 0; i < elements.length; i++) {
        //     elements[i].style.color = colour;
        // }
        //above is copilot's suggestion

        //below is my suggestion
        var colour = '#' + request.selectedColour;
        console.log(colour);
        $('.stack').css('color', colour);
        //$('*').css('color', colour); //* means all classes 
    }
});