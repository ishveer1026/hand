Webcam.set({
    width:300,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}
console.log("ml5version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DNY6VjGJw/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
prediction_1="";
prediction_2="";
function speak(){
    var synth= window.speechSynthesis;
    speakdata1="The First Prediction Is "+prediction_1;
    speakdata2="And The Second Prediction Is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speackdata2);
    synth.speak(utterthis)
}