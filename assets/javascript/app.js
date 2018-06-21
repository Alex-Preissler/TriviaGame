var Trivia = {

    0: {question: "Who has a famous acid-green Quik-Quotes Quill?",
        
        answers: ["Rita Skeeter", "Harry Potter", "Prof. Snape", "Prof. Mcgonagall"], 
        
        correct: "Rita Skeeter"},

    
    1: {question: "Who are the two half-giants?",
        
        answers: ["Rubeus Hagrid/Madame Maxime", "Lord Voldemort/Luna Lovegood", "Remus Lupin/James Potter ", "Dobby/Neville Longbottom"], 
    
        correct: "Rubeus Hagrid/Madame Maxime"},
        
    
    2: {question: "What is the name of the vicious tree that Harry and Ron drove into in 'Harry Potter and the Chamber of Secrets'?",
        
        answers: ["The Smashing Shrub", "The Mad Magnolia", "The Outraged Oak", "The Whomping Willow"], 
    
        correct: "The Whomping Willow"},

    
    3: {question: "Who was the Whomping Willow planted for?",
        
        answers: ["James Potter", "Rubeus Hagrid", "Remus Lupin", "Prof. Dumbledore"], 
    
        correct: "Remus Lupin"},

    
    4: {question: "Who has famous Rock Cakes?",
        
        answers: ["Dobby", "Rubeus Hagrid", "Prof. Dumbledore", "Prof. Snape"], 
    
        correct: "Rubeus Hagrid"},
    
    
    5: {question: "What item in the House of Black is infamous from Tonks tripping over it?",
        
        answers: ["Troll leg umbrella stand", "House elf tool box", "Box of Bertie Botts Jelly Beans", "Necklace Horcrux"], 
    
        correct: "Troll leg umbrella stand"},

    
    6: {question: "What is Hermione's middle name?",
        
        answers: ["Sam", "Jean", "Alexandria", "Rosemary"], 
    
        correct: "Jean"},
        
    
    7: {question: "Fill in the blank: 'Percy wouldn't know a joke if it danced naked in front of him wearing____________'",
        
        answers: ["Troll underwear", "Prof. Dumbledore's hat", "A tea cozy", "A Voldemort mask"], 
    
        correct: "A tea cozy"},
        
    
    8: {question: "What is Dumbledore's full name?",
        
        answers: ["Albus Percival Lupin Dumbledore","Albus Percival Wulfric Brian Dumbledore", "Albus Wulfric Dumbledore", "Albus Percival Wulfric Ronald Dumbledore"], 
    
        correct: "Albus Percival Wulfric Brian Dumbledore"},
        
        
    9: {question: "How much was Dobby paid a month in the Hogwarts kitchen?",
        
        answers: ["One Galleon", "One Dollar", "One Pound", "One Euro"], 
    
        correct: "One Galleon"},
}

var questionNumber = 0;
var listLength = Object.keys(Trivia).length;
var timer;
var seconds = 30;
var numberCorrect = 0;
var numberWrong = 0;
var unAnswered = 0;

function setQuestion() {

    $("#currentQuestion").text(Trivia[questionNumber].question);

}

function setButtons() {


    for(var i=0; i<4; i++) {

        var answer = Trivia[questionNumber].answers[i];
        
        console.log(answer);

        var button = "<li><button class='btn btn-lrg' value='" + answer + "'>" + answer + "</button></li>";
        
        $("ul").append(button);
        

    }



}

function checkAnswer(answer) {

    console.log(answer);
    console.log(Trivia[questionNumber].correct);

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

        1: {image: '<iframe src="https://giphy.com/embed/ujrOut8qvJxYI" width="480" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harrypotter-harrypottergif-fredandgeorge-ujrOut8qvJxYI">via GIPHY</a></p>'},

        2: {image: '<iframe src="https://giphy.com/embed/shOGAGjomDSdq" width="480" height="319" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-ron-weasley-gif-shOGAGjomDSdq">via GIPHY</a></p>'},

        3: {image : '<iframe src="https://giphy.com/embed/5tlq0pRndGu8U" width="480" height="287" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/party-birthday-dancing-5tlq0pRndGu8U">via GIPHY</a></p>'},

        4: {image: '<iframe src="https://giphy.com/embed/2sxmHWOma3L44" width="480" height="321" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-hogwarts-draco-malfoy-2sxmHWOma3L44">via GIPHY</a></p>'},

        5: {image: '<iframe src="https://giphy.com/embed/IIJpyNVX37NAI" width="480" height="199" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-gof-IIJpyNVX37NAI">via GIPHY</a></p> '},

        6: {image: '<iframe src="https://giphy.com/embed/7xl0Ok77o5QVG" width="480" height="277" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-snape-gif-7xl0Ok77o5QVG">via GIPHY</a></p>'},

        7: {image: '<iframe src="https://giphy.com/embed/12TPnF37sliyJi" width="480" height="342" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-swag-swagger-12TPnF37sliyJi">via GIPHY</a></p>'},

        8: {image: '<iframe src="https://giphy.com/embed/10PptCqDkZIkZW" width="480" height="306" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-man-nice-10PptCqDkZIkZW">via GIPHY</a></p>'},

        9: {image: '<iframe src="https://giphy.com/embed/UXKy7mHAZ5Mqc" width="470" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hermione-granger-UXKy7mHAZ5Mqc">via GIPHY</a></p>'},
        10: {image: '<iframe src="https://giphy.com/embed/26BRzozg4TCBXv6QU" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/inpulsedm-26BRzozg4TCBXv6QU">via GIPHY</a></p>'},


    }

    numberCorrect++;
    questionNumber++;
   
    var i = Math.floor(Math.random() * 10) + 1;
    var image = correctImage[i].image;
   
    $("#correct-wrong").text("Correct!");
    $("ul").html(image);



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

        1: {image: '<iframe src="https://giphy.com/embed/720g7C1jz13wI" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-idk-shrug-720g7C1jz13wI">via GIPHY</a></p>'},

        2: {image: '<iframe src="https://giphy.com/embed/BJmTtZL4hova8" width="480" height="235" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-hermione-granger-ron-BJmTtZL4hova8">via GIPHY</a></p>'},
        
        3: {image: '<iframe src="https://giphy.com/embed/yoJC2PM3UL4FPMkNB6" width="480" height="241" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheezburger-harry-potter-magic-neville-longbottom-yoJC2PM3UL4FPMkNB6">via GIPHY</a></p>'},

        4: {image: '<iframe src="https://giphy.com/embed/IWvuFVQICQIr6" width="480" height="284" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-hermione-granger-the-sorcerers-stone-IWvuFVQICQIr6">via GIPHY</a></p>'},

        5: {image: '<iframe src="https://giphy.com/embed/AisOYaOZdrS1i" width="480" height="312" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-slapping-AisOYaOZdrS1i">via GIPHY</a></p>'},

        6: {image: '<iframe src="https://giphy.com/embed/AisOYaOZdrS1i" width="480" height="312" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-slapping-AisOYaOZdrS1i">via GIPHY</a></p>'},

        7: {image: '<iframe src="https://giphy.com/embed/l0HlAIIwxcTSuibDi" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/emibob-harry-potter-idk-l0HlAIIwxcTSuibDi">via GIPHY</a></p>'},

        8: {image: '<iframe src="https://giphy.com/embed/GD8ypYfe6WnBu" width="480" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-fml-GD8ypYfe6WnBu">via GIPHY</a></p>'},
        
        9: {image: '<iframe src="https://giphy.com/embed/hP8xenrzdIhqw" width="480" height="342" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-annoyed-ron-hP8xenrzdIhqw">via GIPHY</a></p>'},
        
        10: {image: '<iframe src="https://giphy.com/embed/13gE2P0Q9LGwBa" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-hermione-idiot-13gE2P0Q9LGwBa">via GIPHY</a></p>'},

    }

    var rightAnswer = Trivia[questionNumber].correct;

    numberWrong++;
    questionNumber++;

     
    var i = Math.floor(Math.random() * 10) + 1;
    var image = wrongImage[i].image;

    $("#correct-wrong").text("Wrong!");
    $("#correctAnswer").text("Correct Answer: " + rightAnswer);
    $("ul").html(image);


    setTimeout(function(){
    
        if(questionNumber == listLength){

            gameComplete();

        }else{

            newQuestion();

        }
        
    }, 5000);

}

function timeout() { 

    var timesUp = {

        1: {image: '<iframe src="https://giphy.com/embed/LgJ9EkqxEXS4E" width="480" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-pottermore-wat-is-this-LgJ9EkqxEXS4E">via GIPHY</a></p>'},

        2: {image: '<iframe src="https://giphy.com/embed/12nfFCZA0vyrSw" width="392" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-head-turn-12nfFCZA0vyrSw">via GIPHY</a></p>'},

        3: {image: '<iframe src="https://giphy.com/embed/Cipj5jNsyTcxG" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-sorcerers-stone-the-dursleys-Cipj5jNsyTcxG">via GIPHY</a></p>'},

        4: {image: '<iframe src="https://giphy.com/embed/xBcBAQnWxpWX6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/funny-harry-potter-xBcBAQnWxpWX6">via GIPHY</a></p>'},

        5: {image: '<iframe src="https://giphy.com/embed/FYenMRUx3LGy4" width="480" height="192" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-no-unimpressed-FYenMRUx3LGy4">via GIPHY</a></p>'},

        6: {image: '<iframe src="https://giphy.com/embed/FYenMRUx3LGy4" width="480" height="192" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-no-unimpressed-FYenMRUx3LGy4">via GIPHY</a></p>'},

        7: {image: '<iframe src="https://giphy.com/embed/1hzy0PmkUI4yk" width="480" height="427" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-bellatrix-lestrange-1hzy0PmkUI4yk">via GIPHY</a></p>'},

        8: {image: '<iframe src="https://giphy.com/embed/tpwwhv1BLd31e" width="480" height="378" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vote-tpwwhv1BLd31e">via GIPHY</a></p>'},

        9: {image: '<iframe src="https://giphy.com/embed/SzfZvULQXkduU" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/harry-potter-voldemort-SzfZvULQXkduU">via GIPHY</a></p>'},
        
        10: {image: '<iframe src="https://giphy.com/embed/g5kErFK2oISu4" width="480" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yogopanda-g5kErFK2oISu4">via GIPHY</a></p>'},
    }

    var rightAnswer = Trivia[questionNumber].correct;

    unAnswered++;
    questionNumber++;

     
    var i = Math.floor(Math.random() * 10) + 1;
    var image = timesUp[i].image;
    
    $("#correct-wrong").text("Time's Up!");
    $("#correctAnswer").text("Correct Answer: " + rightAnswer);
    $("ul").html(image);

    setTimeout(function(){
    
        if(questionNumber == listLength){
    
            gameComplete();
    
        }else{
    
            newQuestion();
    
        }
        
        }, 5000);
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

$("#currentQuestion").text("All done! Here's how you did:");
$("#correct-wrong").empty();
$("#correctAnswer").empty();
$("ul").empty();

var correctDisplay = "<li id='finalScore'>Correct Answers: " + numberCorrect + "</li>";
var inCorrectDisplay = "<li id='finalScore'>Incorrect Answers: " + numberWrong + "</li>";
var noAnswerDisplay = "<li id='finalScore'>Unanswered: " + unAnswered + "</li>";
var newGameButton = "<li><button class='btn btn-lrg' id='newGame'>Play Again?</button></li>";

$("ul").append(correctDisplay);
$("ul").append(inCorrectDisplay);
$("ul").append(noAnswerDisplay);  
$("ul").append(newGameButton);

$("#newGame").on("click", function() {

    $("ul").empty();
    newGame();

});

}

function newGame() {


questionNumber = 0;
seconds = 30;
numberCorrect = 0;
numberWrong = 0;
unAnswered = 0;

setQuestion();
setButtons();
displayTime(seconds);
startTimer();
main();


}


$( document ).ready(function() {


    $("#startGame").on("click", function(){

        $("ul").empty();
        setQuestion();
        setButtons();
        displayTime(seconds);
        startTimer();
        main();


    });


});


function main() {

    $("button").on("click", function(){

        stopTimer();

        var userAnswer = this.value;

        var solution = checkAnswer(userAnswer);

        console.log(userAnswer);

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