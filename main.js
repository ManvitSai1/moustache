mouthX=0
mouthY=0
function preload() {
    
}
function setup(){

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Intialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("mouthx="+results[0].pose.mouth.x-30);
        console.log("mouthy="+results[0].pose.mouth.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(download.png, mouthX, mouthY, 30, 30)

}
function take_snapshot(){
    save('mypic.png');
    
}
function gotPoses(results){
    if(results.length > 0)
    console.log(results);
    mouthX= results[0].pose.mouth.X;
    mouthY=results[0].pose.mouth.Y;
    console.log("mouth x = " +mouthX);
    console.log("nose y = " + mouthY);

}
function draw(){
    image(video,0,0,300,300);
    image(download.png, mouthX, mouthY, 30, 30)

}