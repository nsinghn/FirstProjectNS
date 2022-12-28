
module.exports.getDate = getDate;

function getDate() {
    let d= new Date();
    let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
    let Tday = d.toLocaleDateString("en-US", options);
    return Tday;
}

module.exports.getTime = getTime;

function getTime() {
    var dt = new Date();
    let options = {Hours: "2-digit", Minutes: "2-digit", Seconds: "2-digit"};
    let Ttime = dt.toLocaleTimeString("en-US", options);
    return Ttime;
}