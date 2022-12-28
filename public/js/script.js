document.getElementById("yes-button").onclick = function() {
   document.getElementById("question-block").style.display = "block";
   document.getElementById("quiz-block").style.display = "none";
    }
/*
document.getElementById("loc-address").onclick = function() {
    alert(
    "Name   : Hotel Arista" + '\n' +
    "Address: Sunny Enclave, Near Gopal sweets" + '\n' +
    "City: Kharar" + '\n' +
    "State: Punjab" + '\n' +
    "Pincode: 160095"
  );
}



var hb = document.getElementsByClassName("hamburger");
hb[0].onclick = function() {
var hbMenu = document.getElementsByClassName("hb-menu");
hbMenu[0].style.display = "Inline-block";
}

var cross1 = document.getElementsByClassName("cross");
cross1[0].onclick = function() {
var hbMenu1 = document.getElementsByClassName("hb-menu");
hbMenu1[0].style.display = "none";
}

document.getElementById("loc-address1").onclick = function() {
alert(
"Name   : Hotel Arista" + '\n' +
"Address: Sunny Enclave, Near Gopal sweets" + '\n' +
"City: Kharar" + '\n' +
"State: Punjab" + '\n' +
"Pincode: 160095"
);
}
var contents = {
"sister": "<li>Balwant Kaur</li>, <li>Manakwal</li>, <li>Ludhiana</li>",
"brother1": "<li>Darshan Singh</li>, <li>Phase 1</li>, <li>Dugri Road</li>, <li>Ludhiana</li>",
"brother2": "<li>Surinder Singh</li>, <li>Sector-40D</li>, <li>Chandigarh</li>",
"brother3": "<li>Sarabjeet Singh</li>, <li>Coopertino</li>, <li>California</li>, <li>USA</li>",
}
var pics = {
"sister": "Images/Sister.JPG",
"brother1": "Images/Brother1.JPG",
"brother2": "Images/Brother2.JPG",
"brother3": "Images/Brother3.jpg",
}
var familycontents = [
"<li>Prabhjot Kaur</li>, <li>DOB: 19 Oct</li>, <li>Sector 71</li>, <li>Mohali</li>",
"<li>Tarandeep Singh</li>, <li>DOB: 20 Apr</li>, <li>Erdington</li>, <li>Birmingham, UK</li>",
"<li>Mandeep Kaur</li>, <li>DOB: 12 Aug</li>, <li>Erdington</li>, <li>Birmingham, UK</li>",
"<li>Anantdeep Singh</li>, <li>DOB: 12 Jun</li>, <li>Sector 71</li>, <li>Mohali</li>",
"<li>Anmol</li>, <li>DOB: 30 Oct</li>, <li>Sector 71</li>, <li>Mohali</li>",
]
var familypics = [
"Images/pk.JPG",
"Images/td.JPG",
"Images/md.JPG",
"Images/ad.JPG",
"Images/ag.JPG",

]

document.getElementById("sister").style.backgroundColor = "azure";
document.getElementById("contents").innerHTML=contents["sister"];
document.getElementById("pics").querySelector('img').src= pics["sister"];

document.getElementById("sister").onclick = function() {
var sibling = this.innerHTML;
document.getElementById("sister").style.backgroundColor = "pink";
document.getElementById("brother1").style.backgroundColor = "pink";
document.getElementById("brother2").style.backgroundColor = "pink";
document.getElementById("brother3").style.backgroundColor = "pink";
document.getElementById("sister").style.backgroundColor = "azure";
document.getElementById("contents").innerHTML=contents["sister"];
document.getElementById("pics").querySelector('img').src= pics["sister"];
}
document.getElementById("brother1").onclick = function() {
var sibling = this.innerHTML;
document.getElementById("sister").style.backgroundColor = "pink";
document.getElementById("brother1").style.backgroundColor = "pink";
document.getElementById("brother2").style.backgroundColor = "pink";
document.getElementById("brother3").style.backgroundColor = "pink";
document.getElementById("brother1").style.backgroundColor = "azure";
document.getElementById("contents").innerHTML=contents["brother1"];
document.getElementById("pics").querySelector('img').src= pics["brother1"];
}
document.getElementById("brother2").onclick = function() {
var sibling = this.innerHTML;
document.getElementById("sister").style.backgroundColor = "pink";
document.getElementById("brother1").style.backgroundColor = "pink";
document.getElementById("brother2").style.backgroundColor = "pink";
document.getElementById("brother3").style.backgroundColor = "pink";
document.getElementById("brother2").style.backgroundColor = "azure";
document.getElementById("contents").innerHTML=contents["brother2"];
document.getElementById("pics").querySelector('img').src= pics["brother2"];
}
document.getElementById("brother3").onclick = function() {
var sibling = this.innerHTML;
document.getElementById("sister").style.backgroundColor = "pink";
document.getElementById("brother1").style.backgroundColor = "pink";
document.getElementById("brother2").style.backgroundColor = "pink";
document.getElementById("brother3").style.backgroundColor = "pink";
document.getElementById("brother3").style.backgroundColor = "azure";
document.getElementById("contents").innerHTML=contents["brother3"];
document.getElementById("pics").querySelector('img').src= pics["brother3"];
}

/*document.getElementById("familycontentsid").innerHTML = familycontents[counter];
var counter = 0;
document.getElementById("next").onclick = function() {

counter++;
if (counter == 5) {
counter = 0;
}

document.getElementById("familycontentsid").innerHTML = familycontents[counter];
document.getElementById("familypicsid").querySelector('img').src= familypics[counter];
}
document.getElementById("prev").onclick = function() {
counter--;
if (counter == -1) {
counter = 4;
}
document.getElementById("familycontentsid").innerHTML = familycontents[counter];
document.getElementById("familypicsid").querySelector('img').src= familypics[counter];
}

document.getElementById("expand").onclick = function() {
if (document.getElementById("parentdetails").style.display == "block"){

document.getElementById("parentdetails").style.display = "none";
document.getElementById("expand").innerHTML = "+";
} 
else {
document.getElementById("parentdetails").style.display = "block";
document.getElementById("expand").innerHTML = "<h2>-</h2>";
}
}*/


