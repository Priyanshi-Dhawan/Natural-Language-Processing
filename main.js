var SpeechRecognition = window.webkitSpeechRecognition;
var reognition = new Speech recognition ();

function start()
{
    document.getElementById("textbox").innerHTML ="";
    recognition.start();
}
recognition.onresults = function(event){
    console.log(event)
}
 var Content = event.results[0][0].transcript;
document.getElementbyId("textbox").innerHTML=content;
console.log(content);
if(Content=="take my selfie")
console.log("taking sefie ---")
speak();


function speak(){
    var synth = window.SpeechSynthesis;
    speak_data="taking youe selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

}
setTimeout function()
{
    take_snapshot();
    Save();
        5000;
    )
}
camera= document.getElementsById("camera");
webcam.set({
    width360
    height:250
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });

})

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
