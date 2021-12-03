
Webcam.set({ 
 height:200,
 width:300,
 image_format:"png",
 png_quality:90})

 camera=document.getElementById("camera");
    Webcam.attach(camera);
    function submit(){
 Webcam.snap(function(data_uri){
document.getElementById("hi").innerHTML="<img src='"+data_uri+"' id='image'>";   
}
)
}
console.log("ml5version",ml5.version);
yo=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IAG2qh3eC/model.json",modelloaded);
function modelloaded(){
console.log("modal is loaded you can fire over and out");
alert("modal is loaded you can fire over and out");
}