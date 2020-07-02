 function displayDay(){
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getDisplay = document.getElementById("printDay"); 
    getDisplay.innerHTML = "Today is: " + daylist[day];
    console.log("Here");
 }

 function displayTime(){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    // console.log ("Current time: " + hour + ":" + minute + ":" + second)
    let getTime = document.getElementById("printTime");
    getTime.innerHTML = "Current time: " + hour + ":" + minute + ":" + second;
 }
 
