/*window.addEventListener('resize', function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
export const fitRectIntoContainer = (rectWidth, rectHeight, containerWidth, containerHeight) => {
    const widthRatio = containerWidth / rectWidth; // ratio container width to rect width
    const heightRatio = containerHeight / rectHeight; // ratio container height to rect height
    const ratio = Math.min(widthRatio, heightRatio); // take the smaller ratio
    return {
        width: rectWidth * ratio,
        height: rectHeight * ratio,
    };
};
