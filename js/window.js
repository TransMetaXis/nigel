window.onload = function() {
    var iframe = document.getElementById("games");
    var canvas = iframe.contentWindow.document.getElementById("gamecanvas");
    canvas.width = iframe.offsetWidth;
    canvas.height = iframe.offsetHeight;
}
