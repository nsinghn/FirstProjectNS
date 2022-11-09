const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
});


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    console.log("Post request received")

    var city = "Mohali";
    /*const myappid = 8f4c09ba581705f32e032de0855ca6b6;*/

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=8f4c09ba581705f32e032de0855ca6b6";
    https.get(url,function(response){
    console.log(response.statusCode, response.statusMessage)
    response.on("data", function(data){
        const weatherdata = JSON.parse(data)
        const temp = weatherdata.main.temp
        const city = weatherdata.name
        const country = weatherdata.sys.country
        const weatherDescp = weatherdata.weather[0].description
        const icon = weatherdata.weather[0].icon
        const iconURL = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"
        res.write("<h1>Temp in your city " + city + " in country " + country + " is " + temp + " Deg C</h1>");
        res.write("<h2>Weather Description is " + weatherDescp + "</h2>");
        res.write("<img src="+ iconURL +">");
        res.send();
    });  
});
});

    


  

