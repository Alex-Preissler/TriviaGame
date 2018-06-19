var Trivia = {

    0: {question: "what is your name",
        
        answers: ["bob", "fred", "betty", "boop"], 
        
        correct: "bob"},

    
    1: {question: "what is your name 2",
        
        answers: ["sam", "i", "am", "bob"], 
    
        correct: "bob"},
        
    
    2: {question: "what is your name 3",
        
        answers: ["roger", "betsy", "tina", "bob"], 
    
        correct: "bob"},

}

var questionNumber = 0;
var listLength = Object.keys(Trivia).length;
var timer;
var seconds = 30;
var numberCorrect = 0;
var numberWrong = 0;

function setQuestion() {

    $("#currentQuestion").text(Trivia[questionNumber].question);

}

function setButtons() {


    for(var i=0; i<4; i++) {

        var answer = Trivia[questionNumber].answers[i];

        var button = "<li><button class='btn btn-lrg' value='" + answer + "'>" + answer + "</button></li>";
        
        $("ul").append(button);
        

    }



}

function checkAnswer(answer) {

    if(answer == Trivia[questionNumber].correct) {

        return true;

    }else{

        return false;

    }

}

function startTimer() {

    timer = setInterval(timeTracker, 1000);

}

function timeTracker() {

    seconds--;
    
    displayTime(seconds);

    if(seconds == 0){

        stopTimer();
        $("ul").empty();
        timeout();
    
    }else{}

}

function displayTime(seconds) {

    $("#timeLeft").text("Time Remaining: " + seconds);


}

function stopTimer() { 

    clearInterval(timer);

}

function resetTimer() {

    seconds = 30;
    displayTime(seconds);


}

function correctAnswer() {

    var correctImage = {

        1: {image: null},

        2: {image: null},

        3: {image: null}

    }

    numberCorrect++;
    questionNumber++;

    $("#correct-wrong").text("Correct!");
    $("ul").html("<img src='" + correctImage + "'/>");

    setTimeout(function(){
    
        if(questionNumber == listLength){
    
            gameComplete();
    
        }else{
    
            newQuestion();
    
        }
        
        }, 5000);


}

function wrongAnswer() {

    var wrongImage = {

        1: {image: null},

        2: {image: null},

        3: {image: null}

    }

    var rightAnswer = Trivia[questionNumber].correct;

    numberWrong++;
    questionNumber++;

    $("#correct-wrong").text("Wrong!");
    $("#correctAnswer").text("Correct Answer: " + rightAnswer);
    $("ul").html("<img src='" + wrongImage + "'/>");

    setTimeout(function(){
    
    if(questionNumber == listLength){

        gameComplete();

    }else{

        newQuestion();

    }
    
    }, 5000);

}

function timeout() { 

    var timesup = {

        1: {image: null},

        2: {image: null},

        3: {image: null}

    }

    numberWrong++;
    questionNumber++;
    
    $("#correct-wrong").text("Time's Up!");
    $("#correctAnswer").text("Correct Answer: " + Trivia[questionNumber].correct);
    $("ul").html("<img src='" + timesup + "'/>");

    setTimeout(newQuestion, 5000);
}

function newQuestion() {

    $("#correct-wrong").empty();
    $("#correctAnswer").empty();
    $("ul").empty();
    resetTimer();
    setQuestion();
    setButtons();
    startTimer();
    main();

}

function gameComplete() {


    


}


$( document ).ready(function() {


setQuestion();
setButtons();
displayTime(seconds);
startTimer();
main();

});


function main() {

    $("button").on("click", function(){

        stopTimer();

        var userAnswer = this.value;

        var solution = checkAnswer(userAnswer);

        if(solution == true && questionNumber < listLength) {

            $("ul").empty();
            correctAnswer();

        }else if(solution == false && questionNumber < listLength) {

            $("ul").empty();
            wrongAnswer();

        }else{

            $("ul").empty();
            
            if(solution == true){

                correctAnswer();

            }else{

                wrongAnswer();

            }


            }

        });

}