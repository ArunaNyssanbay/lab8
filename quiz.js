$(document).ready(function(){
    correct = ["2009", "Astana", "Katsu", "7000","english"];
    questions = [
        "Q1. Which year Nazarbayev University was founded?",
        "Q2. What is the capital of Kazakhstan?",
        "Q3. Who is a president of Nazarbayev University?",
        "Q4. How many students are there at Nazarbayev University?",
        "Q5. What is the language of instruction at Nazarbayev University?",

    ]
    choice_options = [
        ["2009","2010","2011","2012"],
        ["Shymkent", "Astana", "Almaty", "Karaganda"],
        ["Nazarbayev", "Katsu", "Golovkin", "Naruto"],
        ["7000", "10 000", "2000", "20 000"],
        ["kazakh", "russian", "english", "german"]


    ]
    isChecked = false
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 


    for (var i = 0; i < questions.length; i++) {
        $('.question').append ("<p class='d'> " + questions[i] + " </p>")
        for (var j = 0; j < choice_options[i].length; j++) {
            console.log("kirdi")
            console.log(choice_options[i][j])
            $('.question').append ("<label><input type='radio' name='q" + (i+1) + "' value='a'>" + choice_options[i][j] + "</label>")
        }
    }

    if (!isChecked) {
        $("#quiz-box").append ("<h2 name='results'></h2>")
    }


    
    countCorrect = 0;
    reset = false;

    $("button").click (function (event){
             for (var i = 0; i < questions.length; i++) {
                $("input[name=q" + (i+1) + "]").each (function (index){
                    choice = $(this).parent().text(); 
                    if ($( this ).prop("checked") == true && correct [i] == choice){
                         countCorrect += 1;
                         wasTrue = true
                    }
                });
             }
             text = "Result of the quiz is: " + countCorrect + " points"
             isChecked = true
        $("h2[name=results]").text (text);
    }); 
});