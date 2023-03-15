let questions =[{
    question:"Who is the best player in Football ?",
    choices: ["Ronaldo", "Messi", "Neymar", "Suarez"],
    correctAnswer:1
},{
    question:"Who conceded 7 goals in a Single match ?",
    choices: ["Liverpool", "PSG", "AL Nassar", "United"],
    correctAnswer:4
},{
    question:"Which player scored the fastest hat-trick in the Premier League?",
    choices: ["Rashford", "Mane", "Salah", "letdy"],
    correctAnswer:2
},{
    question:"Which team won the first Premier League title?",
    choices: ["ManCity", "Arsenal", "Westham", "United"],
    correctAnswer:4
},{
    question:"How many clubs competed in the inaugural Premier League season?",
    choices: ["26", "22", "18", "21"],
    correctAnswer:2
},{
    question:"Which country won the first ever World Cup in 1930?",
    choices: ["Brazil", "France", "Uruguay", "Italy"],
    correctAnswer:2
},{
    question:"Which Portuguese team did Ronaldo play for before signing for Manchester United?",
    choices: ["Benfica", "Boavista", "Sporting", "Chaves"],
    correctAnswer:3
},{
    question:"Which player, with 653 games, has made the most Premier League appearances?",
    choices: ["Giggs", "Gareth Barry", "Rooney", "Petr Cech"],
    correctAnswer:2
},{
    question:"In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
    choices: ["Brazil", "France", "Mexico", "Italy"],
    correctAnswer:3
},{
    question:"Which country has appeared in three World Cup finals, but never won the competition?",
    choices: ["USA", "Nepal", "Croatia", "Netherlands"],
    correctAnswer:4
}]; 

let currentQuestion =0;
let correctAnswers =0;
let quizOver = false;
console.log("hgffhj")
$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click",function () {
        if(!quizOver) {
            value=$("input[type='radio']:checked").val();
            if(value ==undefined){
                $(document).find(".quizMessage").text("please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value== questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else{
                    displayScore();
                    $(document).find(".nextQuestion").text("Play Again?"); 
                    quizOver= true;
                }
            }
        }else{
            quizOver = false; 
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

    function displayCurrentQuestion(){

        let question =questions[currentQuestion].question;
        let questionClass = $(document).find(".quizContainer >.question");
        let choicelist= $(document).find(".quizContainer >.choiceList");
        let numChoices = questions[currentQuestion].choices.length;
    
        //Set the questionClass text to the current question
        $(questionClass).text(question);

        //Remove all current <li> elements (if any)
        $(choicelist).find("li").remove();
    
        let choice;
        for (let i = 0; i < questionObj.answers.length; i++) {
            const choiceEl = document.createElement("button");
            choiceEl.textContent = questionObj.answers[i];
            choiceEl.addEventListener("click", function() {
              checkAnswer(questionObj, questionObj.answers[i]);
            });
            choicesEl.appendChild(choiceEl);
              
        // let choice;
        // for(i = 0; i < numChoices; i++) {
        //     choice= questions[currentQuestion].choices[i];
        //     $('<li><input type="radio" value='+i+' name="dynradio" />' + choice + '</li>' ).appendTo(choicelist);
             
        }
    
        function resetQuiz() {
            currentQuestion = 0;
            correctAnswers = 0;
            hideScore();
        }

        function displayScore() {
            $(document).find(".quizContainer > . result").text("You scored: " + correctAnswers + "out of: "+ questions.length);
            $(document).find(".quizContainer >.result").show(); 

        }
        function hideScore() {
            $(document).find(".result").hide();
        }
    }