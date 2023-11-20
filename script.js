const questions = [ 
        {
          "question": "Quelle est la bonne orthographe de ce mot : éxemple, exemple, exanple, ou exèmple ?",
          "answers": ["éxemple", "exemple", "exanple", "exèmple"],
          "correctAnswer": 1
        },
        {
          "question": "Identifiez la faute d'orthographe dans la phrase suivante : 'Il faut que tu finisse ton devoir avant ce soir.'",
          "answers": ["finisse", "finit", "finir", "finie"],
          "correctAnswer": 0
        },
        {
          "question": "Choisissez le mot correctement orthographié parmi les options suivantes : a) éffectuer b) effectuer c) efféctuer d) efektuer",
          "answers": ["éffectuer", "effectuer", "efféctuer", "efektuer"],
          "correctAnswer": 1
        },
        {
          "question": "Quel est le pluriel correct de 'animal' : animaux, animaus, animalx, ou animales ?",
          "answers": ["animaux", "animaus", "animalx", "animales"],
          "correctAnswer": 0
        },
        {
            "question": "Quel est le mot correctement orthographié ?",
            "answers": ["Accéptation", "Acceptation", "Accèptation", "Acceptation"],
            "correctAnswer": 1
          },
          {
            "question": "Identifiez la faute d'orthographe dans la phrase suivante : 'Il est important de bien manger pour rester en bonne santé.'",
            "answers": ["important", "manger", "santé", "bien"],
            "correctAnswer": 0
          },
          {
            "question": "Quelle est la bonne orthographe de ce mot : 'Réussir' ou 'Réussir' ?",
            "answers": ["Réussir", "Reussir", "Rèussir", "Rréussir"],
            "correctAnswer": 0
          },
          {
            "question": "Quelle est la bonne orthographe de ce mot : chataigne, châtaigne, chatagne, ou châtagne ?",
            "answers": ["chataigne", "châtaigne", "chatagne", "châtagne"],
            "correctAnswer": 1
          },
          {
            "question": "Identifiez la faute d'orthographe dans la phrase suivante : 'Il est important d'avoire une bonne orthographe.'",
            "answers": ["avoire", "avoir", "avoiir", "avoiree"],
            "correctAnswer": 1
          },
          {
            "question": "Choisissez le mot correctement orthographié parmi les options suivantes : a) écrire b) ecrire c) écire d) ecrir",
            "answers": ["écrire", "ecrire", "écire", "ecrir"],
            "correctAnswer": 0
          },
          {
            "question": "Quel est le pluriel correct de 'oasis' : oasis, oasie, oasises, ou oases ?",
            "answers": ["oasis", "oasie", "oasises", "oases"],
            "correctAnswer": 3
          }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionContainer = document.getElementById("quiz-container");
        questionContainer.innerHTML = "";

        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.textContent = questions[currentQuestionIndex].question;
        questionContainer.appendChild(questionElement);

        const answersContainer = document.createElement("div");
        answersContainer.className = "answers";

        for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
            const answerButton = document.createElement("button");
            answerButton.textContent = questions[currentQuestionIndex].answers[i];
            answerButton.addEventListener("click", function () {
                if (i === questions[currentQuestionIndex].correctAnswer) {
                    score++;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    displayQuestion();
                } else {
                    displayScore();
                }
            });
            answersContainer.appendChild(answerButton);
        }
        questionContainer.appendChild(answersContainer);
    }
}

function displayScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.textContent = `Your score is: ${score} out of ${questions.length}`;
}

displayQuestion();