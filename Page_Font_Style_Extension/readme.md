# Note
popup script => runs when the extension is power on
content script => run in the context of the particular page
event script => script that runs in background



Execution Environment of Content Script : 
- Isolated World.
- Can Access DOM.
- No access to variables and functions created by particular webpage
- Also Reverse as before.
- js running on the web page can't access the variables or fun() that is defined on the content script.
- when there is a button with click event which give alerts in both (extension and the web page) is pressed na both the alert is called. 