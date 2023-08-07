setInterval(() => {
    const myTime = document.querySelector(".timer");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = "AM";

    //using a conditional statement on your digital clock 

    //if hours is greater than 12,the clock should return the rest numbers i.e current hours - 12 = your answer;
    if( hours > 12 ) {
        dayNight = "PM"
        hours = hours - 12;
    };

    if( hours < 10 ) {
        hours = "0" + hours
    }

    //if minuyes is less than 10 it shuold be written as shown below
    if( minutes < 10 ) {
        minutes = "0" + minutes;
    };

    //exact same thing that happen in min apply here
    if( seconds < 10 ) {
        seconds = "0" + seconds
    }

    myTime.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight

})