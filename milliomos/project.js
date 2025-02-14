$(document).ready(function () {
    let questions = [
        {
            question: "Melyik évben volt az 1848-as forradalom?",
            answers: ["1846", "1847", "1848", "1849"],
            correct: 2
        },
        {
            question: "Mi Magyarország fővárosa?",
            answers: ["Debrecen", "Budapest", "Szeged", "Pécs"],
            correct: 1
        },
        {
            question: "Ki írta a Himnuszt?",
            answers: ["Petőfi Sándor", "Vörösmarty Mihály", "Kölcsey Ferenc", "Arany János"],
            correct: 2
        },
        {
            question: "Melyik bolygó a Naprendszer legnagyobb bolygója?",
            answers: ["Mars", "Vénusz", "Jupiter", "Föld"],
            correct: 2
        }
    ];

    let currentQuestionIndex = 0;

    function loadQuestion() {
        let currentQuestion = questions[currentQuestionIndex];
        $("#question-text").text(currentQuestion.question);
        $(".answer-btn").each(function (index) {
            $(this).text(currentQuestion.answers[index]);
        });
        $("#feedback").text("");
    }

    $(".answer-btn").click(function () {
        let selectedAnswer = $(this).data("index");
        let correctAnswer = questions[currentQuestionIndex].correct;

        if (selectedAnswer === correctAnswer) {
            $("#feedback").text("Helyes válasz! ✅").css("color", "lightgreen");
        } else {
            $("#feedback").text("Rossz válasz! ❌").css("color", "red");
        }
    });

    $("#next-question").click(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            $("#question-text").text("Gratulálunk, vége a játéknak!");
            $("#answers").hide();
            $("#next-question").hide();
        }
    });

    loadQuestion();
});
