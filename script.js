// variables for keeping time
var time; var timeLeft = 30;

// array for the high scores
var arr = [];

// show the time on the webpage
document.getElementById("timer").textContent = "Time: " + timeLeft + "sec";

// create an event that fires if the start quiz button has been clicked
document.getElementById("start").addEventListener("click", function(){
    // hide the intro
    document.getElementById("intro").style.display = "none";
    // load up the first question
    document.getElementById("question1").style.display = "block";

    time = setInterval(function(){
        // decrement the time by one second
        timeLeft--;
        // show the time on the webpage
        document.getElementById("timer").textContent = "Time: " + timeLeft + "sec";
        // if there is no time left stop the timer
        if(timeLeft < 1){clearInterval(time);}
    },1000);
});

// find every answer in the html and assing it to answer
for (let answer of document.getElementsByClassName("answer")){
    // if one of the answers have been clicked
    answer.addEventListener("click", function(event){
        // prevent default
        event.preventDefault();

        // if ther is more than one second left in the timer
        if(timeLeft >= 1)
        {
            // if the current answer clicked is the correct answer
            if(answer.getAttribute("id"))
            {
                // grab the dataset from (current) that is in the current element and use it to hide the current question
                document.getElementById(answer.dataset.current).style.display = "none";
                // grab the dataset from (after) that is in the current element and use it to show the next question
                document.getElementById(answer.dataset.after).style.display = "block";
                // if the current question is the last one, end the timer, put the score in local storage
                if(answer.dataset.current == "question5") {clearInterval(time); document.getElementById("score").textContent = timeLeft; window.localStorage.setItem("hs1",timeLeft);}
            }
            // if the corret answer was not clicked
            else{
                // grab the dataset from (current) that is in the current element and use it to hide the current question
                document.getElementById(answer.dataset.current).style.display = "none";
                // grab the dataset from (after) that is in the current element and use it to show the next question
                document.getElementById(answer.dataset.after).style.display = "block";
                // if the current question is the last one, end the timer, show the user their score, put the score in local storage
                if(answer.dataset.current == "question5") {clearInterval(time); document.getElementById("score").textContent = timeLeft; window.localStorage.setItem("hs2",timeLeft);}
                // decrement by 4 seconds
                timeLeft -= 4;
            }
        }
        // else if there is no time left on the clock jump to the end
        else{
            // grab the dataset from (current) that is in the current element and use it to hide the current question
            document.getElementById(answer.dataset.current).style.display = "none";
            // show the high score page
            document.getElementById("end").style.display = "block";
            // show the user their score
            document.getElementById("score").textContent = timeLeft; 
            // stop the timer
            clearInterval(time);
            // show the user their score
            document.getElementById("score").textContent = timeLeft; 
            // put the score in local storage
            window.localStorage.setItem("hs3",timeLeft);
        }

    });
}

// and event that would fire if the user clicked the submit score button
document.getElementById("submitScore").addEventListener("click", function(event){
    // prevent default
    event.preventDefault();
    
    // stop showing the end of the quiz
    document.getElementById("end").style.display = "none";
    // show the high scores list 
    document.getElementById("highScoresList").style.display = "block";

    arr.push(window.localStorage.getItem("hs1"));
    arr.push(window.localStorage.getItem("hs2"));
    arr.push(window.localStorage.getItem("hs3"));

});
