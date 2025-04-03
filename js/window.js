// Selecting the iframe element
var frame = document.getElementById("yourIframeId");

// Adjusting the iframe height onload event
frame.onload = function() {
    // Set the height of the iframe as the height of the iframe content
    frame.style.height = frame.contentWindow.document.body.scrollHeight + 'px';
    // Set the width of the iframe as the width of the iframe content
    frame.style.width = frame.contentWindow.document.body.scrollWidth + 'px';
}
