Webcam.set(
    {
        width: 300,
        height: 300,
        image_format :"png",
        png_quality : 100
    }
);

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function TakePic()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="capturedImg" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nMM7FPq8_/model.json", modelLoaded);
console.log("ml5 version : ", ml5.version);

function modelLoaded() { console.log(modelLoaded); }

function Indentify()
{
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
        console.error(error);
    else
    {
        console.log(results);
        document.getElementById("parent").innerHTML = results[0].label;
        document.getElementById("c").innerHTML = results[0].confidence;
    }
}
