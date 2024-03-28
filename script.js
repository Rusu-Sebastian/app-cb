// acces la camera
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var video = document.getElementById('video');
    video.srcObject = stream;
    video.play();
})
.catch(function(error) {
    console.log('Error accessing the camera: ', error);
});

// captura imaginei si trimitere spre server
function captureImage() {
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.drawImage(video, 0, 0, 640, 480);
var imageData = canvas.toDataURL('image/png');
// Send the imageData to index.js using your preferred method (e.g., AJAX, fetch, etc.)
// Example: fetch('index.js', { method: 'POST', body: imageData });
}