// variables for keeping time
var time; var timeLeft = 60;

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
        if(timeLeft == 0){clearInterval(time);}
    },1000);
});

// find every submit button in the html and assing it to submitButtons
for (let submitButtons of document.getElementsByClassName("submit")){
    // if the submit button is clicked fire this event
    submitButtons.addEventListener("click", function(event){
        // prevent default
        event.preventDefault();

        // check which submit button is clicked and if the correct answer is also 
        // selected at the same time go to the next question or the end
        if(submitButtons.getAttribute("id") == "submit1" && document.getElementById("correct1").checked == true){
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "block";
        }
        if(submitButtons.getAttribute("id") == "submit2" && document.getElementById("correct2").checked == true){
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "block";
        }
        if(submitButtons.getAttribute("id") == "submit3" && document.getElementById("correct3").checked == true){
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "block";
        }
        if(submitButtons.getAttribute("id") == "submit4" && document.getElementById("correct4").checked == true){
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "block";
        }
        if(submitButtons.getAttribute("id") == "submit5" && document.getElementById("correct5").checked == true){
            document.getElementById("question5").style.display = "none";
            document.getElementById("end").style.display = "block";
            // end the timer
            clearInterval(time);
        }

        // if none of the corret answers were choosen decrease the time by 4
        timeLeft -= 4;

    }); 
}