 var today = new Date();
 var day = today.getDay();
 var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 console.log ("Today is: " + daylist[day])
 var hour = today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 console.log ("Current time: " + hour + ":" + minute + ":" + second)