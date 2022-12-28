const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const todaydate = require(__dirname + "/Tdate.js");
const { stringify } = require("querystring");
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nsinghn:A%40ch01s7463@cluster0.oc5ysln.mongodb.net/questionDB");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.listen(process.env.PORT || 3000, function(){
    console.log("server is running on port 3000");
});
const questionSchema = new mongoose.Schema ({
    number: Number,
    question: {type: String, required: [true, "Please enter a valid question"]},
    option1: {type: String, required: [true, "Please enter a valid option"]},
    option2: {type: String, required: [true, "Please enter a valid option"]},
    option3: {type: String, required: [true, "Please enter a valid option"]},
    option4: {type: String, required: [true, "Please enter a valid option"]},
    answer: {type: String, required: [true, "Please enter a valid option"], enum: ['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd']},
});
const Question = mongoose.model("Question", questionSchema);

app.post("/check-answer", function(req, res){
    var output = req.body;
    console.log("Choice & Answer :", output);
if (output.Answer[0].toUpperCase()==output.Answer[1].toUpperCase()){
    result = "CORRECT";
    console.log(result)
} else {
    result = "INCORRECT";
    console.log(result)
}
x = output.Answer[2];
Question.find({number:x}, function(err,questions){
    if(err){
        console.log(err)
    }else{
        console.log("Random x in Submit:", x);
            questions.forEach(function(question){
            quizQuestion=question.question;
            quizOptionA=question.option1;
            quizOptionB=question.option2;
            quizOptionC=question.option3;
            quizOptionD=question.option4;
            quizAnswer=question.answer;
            res.render("quizResult", {quiz1:quizQuestion, quiz2:quizOptionA, quiz3:quizOptionB, quiz4:quizOptionC, quiz5:quizOptionD, quiz6:quizAnswer, quiz7:result, quiz8:x});
        })
        
    }
   
});

});



var count = 0;
var status = "ADD YOUR QUESTION";
var i = 0;
app.post("/question-add", function(req, res){
    Question.countDocuments(function (err, count){
        if (err){
            console.log(err);
            
        }else{
           
            console.log("Count :", count)
            const question = new Question ({
                number: count+1,
                question: req.body.question,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                option4: req.body.option4,
                answer: req.body.answer
                });
                question.save();
                console.log("Count increamented :", count)
        } 
    });
    
    status = "Thanks your Question is added, ADD MORE QUESTION"
    i = 1;
    console.log("Question Post request received")
    //mongoose.connection.close();
    res.redirect("/");
});

var result = "";
var x = 0;
app.get("/quiz-start", function(req, res){
   x = 0;
   console.log("Random x at entry:", x);
   Question.countDocuments(function (err, count){
    if (err){
        console.log(err)
    }else{
       
        console.log("Count :", count)
 

x = Math.floor(Math.random() * count) + 1;
    console.log("Random x in after count function:", x);
    Question.find({number:x}, function(err,questions){
        if(err){
            console.log(err)
        }else{
            console.log("Random x in Next question:", x);
                questions.forEach(function(question){
                quizQuestion=question.question;
                quizOptionA=question.option1;
                quizOptionB=question.option2;
                quizOptionC=question.option3;
                quizOptionD=question.option4;
                quizAnswer=question.answer;
                res.render("quiz", {quiz1:quizQuestion, quiz2:quizOptionA, quiz3:quizOptionB, quiz4:quizOptionC, quiz5:quizOptionD, quiz6:quizAnswer, quiz7:result, quiz8:x});
                console.log("Random x in Next question after res.render:", x);
            });
            
        };
       
});
    }
});
});

var aboutChd = "Chandigarh, also called 'The Beautiful City', is a city in India. It is a union territory, because it is the capital of two states: Punjab and Haryana. As a territory it does not belong to either state. Before 1 November,1966 it was capital of Punjab, but after formation of Haryana on 1 November, 1966 it become a union territory.There are many tourism places in Chandigarh like Rock garden, Rose garden and Sukhna lake.";
const chd = aboutChd.substring(0, 80);

app.get("/", function(req, res){
    if (i = 0) {
        status = "ADD YOUR QUESTION";
    };
    var cityName = "Chandigarh";
    var yrcity = "";
    var yrtemp = 0;
    var yrweatherDescp = "";
    var yriconURL = "";
    /*const myappid = 8f4c09ba581705f32e032de0855ca6b6;*/
    var today = todaydate.getDate();
    var todaytime = todaydate.getTime();
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=8f4c09ba581705f32e032de0855ca6b6";
    https.get(url,function(response){
    console.log(response.statusCode, response.statusMessage)
    response.on("data", function(data){
        const weatherdata = JSON.parse(data)
        var temp = weatherdata.main.temp
        var city = weatherdata.name
        var ec = weatherdata.cod
        var country = weatherdata.sys.country
        var weatherDescp = weatherdata.weather[0].description
        var icon = weatherdata.weather[0].icon
        const iconURL = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"

        /*res.render("weather", {cityTime:todaytime, citydate:today, cityEC:ec, cityName:city, cityTemp:temp, cityweatherDescp:weatherDescp, cityiconURL:iconURL, QuestionStatus:status});*/
        /*var x = 0;
        setInterval(function(){
        todaytime = todaydate.getTime();
        document.getElementById("currentTime").innerHTML = todaytime;
        /*console.log(x);
        console.log(todaytime);
        x++;
        
        }, 1000);
        console.log("setInterval exited");*/
        res.render("weather", {cityChd:chd, cityTime:todaytime, citydate:today, cityEC:ec, cityName:city, cityTemp:temp, cityweatherDescp:weatherDescp, cityiconURL:iconURL, QuestionStatus:status, yrcityName:yrcity, yrcityTemp:yrtemp, yrcityWeatherDescp:yrweatherDescp, yrcityIconURL:yriconURL});
        /*res.render("tindog");*/
    }); 

});
});

app.get("/chd", function(req, res){
    res.render("chd");
});



app.post("/", function(req, res){
    console.log("Post request received")
    if (i = 0) {
        status = "ADD YOUR QUESTION";
    };
    var cityName = req.body.city;
    /*const myappid = 8f4c09ba581705f32e032de0855ca6b6;*/
    var today = todaydate.getDate();
    var todaytime = todaydate.getTime();
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=8f4c09ba581705f32e032de0855ca6b6";
    https.get(url,function(response){
    console.log(response.statusCode, response.statusMessage)
    response.on("data", function(data){
        const weatherdata = JSON.parse(data)
        ec = weatherdata.cod
        if (ec===200) {

        yrtemp = weatherdata.main.temp
        yrcity = weatherdata.name
        yrcountry = weatherdata.sys.country
        yrweatherDescp = weatherdata.weather[0].description
        yricon = weatherdata.weather[0].icon
        yriconURL = "http://openweathermap.org/img/wn/" +yricon+ "@2x.png"
        var cityName = "Chandigarh";
        const url1 = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=8f4c09ba581705f32e032de0855ca6b6";
        https.get(url1,function(response){
        console.log(response.statusCode, response.statusMessage)
        response.on("data", function(data){
            const weatherdata1 = JSON.parse(data)
            var temp = weatherdata1.main.temp
            var city = weatherdata1.name
            var ec = weatherdata1.cod
            var country = weatherdata1.sys.country
            var weatherDescp = weatherdata1.weather[0].description
            var icon = weatherdata1.weather[0].icon
            yrstatus= ""
            const iconURL = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"
            res.render("weather1", {cityChd:chd, cityTime:todaytime, citydate:today, cityEC:ec, cityName:city, cityTemp:temp, cityweatherDescp:weatherDescp, cityiconURL:iconURL, QuestionStatus:status, yrcityName:yrcity, yrcityTemp:yrtemp, yrcityWeatherDescp:yrweatherDescp, yrcityIconURL:yriconURL, yrcityStatus:yrstatus});
        });
        });
        }
        else {
            console.log("Incorrect City-Name")
            yrstatus="  Invalid City Name. Please enter correct name."
            yrtemp = 0
            yrcity = ""
            yrcountry = ""
            yrweatherDescp = ""
            yricon = ""
            yriconURL = ""
            var cityName = "Chandigarh";
    const url1 = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=8f4c09ba581705f32e032de0855ca6b6";
    https.get(url1,function(response){
    console.log(response.statusCode, response.statusMessage)
    response.on("data", function(data){
        const weatherdata1 = JSON.parse(data)
        var temp = weatherdata1.main.temp
        var city = weatherdata1.name
        var ec = weatherdata1.cod
        var country = weatherdata1.sys.country
        var weatherDescp = weatherdata1.weather[0].description
        var icon = weatherdata1.weather[0].icon
        const iconURL = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"
        res.render("weather2", {cityChd:chd, cityTime:todaytime, citydate:today, cityEC:ec, cityName:city, cityTemp:temp, cityweatherDescp:weatherDescp, cityiconURL:iconURL, QuestionStatus:status, yrcityName:yrcity, yrcityTemp:yrtemp, yrcityWeatherDescp:yrweatherDescp, yrcityIconURL:yriconURL, yrcityStatus:yrstatus});
    });
    });
    }
    
    });
});

});

