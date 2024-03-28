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

// captura imaginei
function captureImage() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return context;
}
// citirea culorii din centrul imaginei
function centerColor() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var pixelData = context.getImageData(centerX, centerY, 1, 1).data;
    var color = 'rgb(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ')';
    console.log('Color of the center pixel:', color);//afisarea culorii in consola este temporara
    return color;
}
// afisarea culorii in HTML care nu merge acum ns
document.getElementById("culoareaPozei").innerHTML = "Culoarea centrului imaginii este: " + centerColor();
