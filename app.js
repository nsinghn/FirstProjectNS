const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/teamDB');

/*const peopleSchema = new mongoose.Schema({
name: String,
age: Number,
country: String
});

const People = mongoose.model("People", peopleSchema);

const people = new People ({
name: "Jack",
age: 37,
country: "UK"
});
people.save();*/