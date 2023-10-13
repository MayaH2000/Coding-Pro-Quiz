var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 90;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["Strings","Booleans","Alerts", "Numbers"],
        answer : "Alerts"    
    },
    {
        title: "The condition in an if/else statement is enclosed within:",
        choices: ["Quotes","Curly brackets","Parentheses", "Square Brackets"],
        answer : "Parentheses"    
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings","Other Arrays","Booleans", "All of the Above"],
        answer : "All of the Above"    
    },
    {
        title: "String values must be enclosed within '?' when being assigned to variables: ",
        choices: ["Commas","Curly Brackets","Quotes","Parentheses"],
        answer : "Quotes"    
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is?",
        choices: ["JavaScript","Terminal","Alerts", "console.log"],
        answer : "console.log"    
    },
]
btnStart.addEventListener("click", startQuiz);
function startQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    // questionanswers.innerHTML=""
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Correct!"
        console.log("Correct!")
    }else {
        alert.innerText="Incorrect!"
        count = count -15
        timer.innerHTML = count
        console.log("Incorrect!")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }
