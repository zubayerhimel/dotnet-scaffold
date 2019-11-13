// self called function 

(function init() {
    if (localStorage.getItem("moodShifter")) {
        document.querySelector("html").classList.toggle("dark");
        setDark();
    }
})();

function moodShifter() {
    var tempArr = document.querySelector("html").classList;
    document.querySelector("html").classList.toggle("dark");

    if (Object.values(tempArr).includes("dark")) {
        localStorage.setItem("moodShifter", "1");
        setDark();
    } else {
        localStorage.removeItem("moodShifter");
        setLight();
    }
}

function setLight() {
    document.getElementById("icons").className = "fas fa-moon";
    document.getElementById("icons").innerHTML = " Night";
}

function setDark() {
    document.getElementById("icons").className = "fas fa-sun";
    document.getElementById("icons").innerHTML = " Day";
}