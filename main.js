function preload() {

}

function setup() {
    canvas= createCanvas(400, 400)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(400, 250)
    video.hide()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Status: Object Detecting"
}

function draw() {
    image(video, 0, 0, 400, 400)
}

function start() {
    input= document.getElementById("input").innerHTML
}

function modelLoaded() {
    console.log("model loaded")
    modelStatus= true
}