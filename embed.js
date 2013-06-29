/*
Inject script into DOM in a way that it has access to the global object
otherwise this isn't terribly useful
code pilfered from http://stackoverflow.com/questions/9515704#9517879
*/
var s = document.createElement('script');
s.src = chrome.extension.getURL("console.image/console-min.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);