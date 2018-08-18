$(document).ready(function () {


    // Hide the main container till the game starts
    $("#quiz").hide();
    $("#resultsJumbo").hide();

    // Click on the start game button and begin the game
    $("#start").on("click", function () {
        startGame();
        console.log("Game Started");
    });

    // Global Variables
    var timer = 60;
    var incorrect = 0;
    var unanswered = 0;
    var correct = 0;

    // Start Game Function
    function startGame() {
        // Show the questions and submit button
        $("#quiz").show();
        // Take away the start game button
        $("#start").remove();
        $("#resultsJumbo").hide();
        // Reduce the timer by 1 second
        time = setInterval(counter, 1000);
    };
    var time;
    // function to show, start, and reduce the timer
    function counter() {
        $("#timer").text(timer + " Seconds Left");
        // if timer gets to 0 -- check the answers
        if (timer === 0) {
            checkAnswers();
            clearInterval(time);
        }
        else {
            timer--;
        }
    };

    // On submit answesr click run the checkAnswers function
    $("#submit").on("click", function (event) {
        event.preventDefault();
        checkAnswers();
        console.log("Submit Answers Clicked")
    });

    // Function to check answers and show results
    function checkAnswers() {
        console.log("checkAnswers Fired")
        clearInterval(time);
        $("#quiz").hide();
        var a1 = document.quiz.q1.value;
        var a2 = document.quiz.q2.value;
        var a3 = document.quiz.q3.value;
        var a4 = document.quiz.q4.value;
        var a5 = document.quiz.q5.value;
        var a6 = document.quiz.q6.value;
        var a7 = document.quiz.q7.value;
        var a8 = document.quiz.q8.value;
        var a9 = document.quiz.q9.value;
        var a10 = document.quiz.q10.value;
        if (a1 === "correct") {
            correct++;
        } else if (a1 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a2 === "correct") {
            correct++;
        } else if (a2 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a3 === "correct") {
            correct++;
        } else if (a3 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a4 === "correct") {
            correct++;
        } else if (a4 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a5 === "correct") {
            correct++;
        } else if (a5 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a6 === "correct") {
            correct++;
        } else if (a6 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a7 === "correct") {
            correct++;
        } else if (a7 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a8 === "correct") {
            correct++;
        } else if (a8 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a9 === "correct") {
            correct++;
        } else if (a9 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        }
        if (a10 === "correct") {
            correct++;
        } else if (a10 === "incorrect") {
            incorrect++;
        } else {
            unanswered++;
        };
        console.log("Correct " + correct);
        console.log("Incorrect " + incorrect);
        console.log("Unanswered " + unanswered);
        // Put results in the modal
        $("#resultsJumbo").show();
        $("#correctAnswers").text("You got " + correct + " right");
        $("#incorrectAnswers").text("You got " + incorrect + " wrong");
        $("#unansweredAnswers").text("You didn't answer " + unanswered + " questions");
    };

    // Function to start the game over
    $("#startOver").on("click", function () {
            resetGame();
    });

    //Function reset the timer
    function resetGame() {
        timer = 60;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $("#quest").attr('checked',false);
        startGame();
    }
});