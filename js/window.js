window.onload = function() {
    var iframe = document.getElementById("yourIframeId");
    var canvas = iframe.contentWindow.document.getElementById("yourCanvasId");
    canvas.width = iframe.offsetWidth;
    canvas.height = iframe.offsetHeight;
}
