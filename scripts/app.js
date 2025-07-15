const questions = {
  Science: [
    {
      question: "What gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "What planet is known as the Red Planet?",
      choices: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
        image:"assest/Cell-structure.jpg",
      question: "Which part of the cell contains genetic material?",
      choices: ["Plasma membrane", "Nucleus", "Chloroplast", "Mitochondria"],
      answer: "Nucleus"
    },
    {
      question: "Which of the following is not a vector quantity?",
      choices: ["Velocity", "Force", "Temperature", "Acceleration"],
      answer: "Temperature"
    },
    {
        sound: "assest/volcano_d4RRnaNI.wav",
      question: "What natural phenomenon is producing this sound?",
      choices: ["Earthquake", "Thunderstorm", "Volcano", "Waterfall"],
      answer: "Volcano"
    },
    {
      question: "What is the pH of a neutral solution?",
      choices: ["4", "7", "14", "0"],
      answer: "7"
    },
    {
      question: "What is the SI unit of force?",
      choices: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Newton"
    },
    {
        image: "assest/Human_skeleton_front_en.svg.png",
      question: "What is the longest bone in the human body?",
      choices: ["Humerus", "Femur", "Tibia", "Radius"],
      answer: "Femur"
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
        image: "assest/earthLayers.jpg",
      question: "What is the outermost layer of the Earth called?",
      choices: ["Mantle", "Core", "Crust", "Lithosphere"],
      answer: "Crust"
    }
  ],
   History: [
    {
      question: "Who was the first President of the USA?",
      choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
      answer: "George Washington"
    },
    {
      question: "In which year did World War II end?",
      choices: ["1940", "1945", "1939", "1950"],
      answer: "1945"
    },
    {
      question: "Who was the British Prime Minister during most of World War II?",
      choices: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Margaret Thatcher"],
      answer: "Winston Churchill"
    },
    {
      question: "The Great Wall of China was primarily built to:",
      choices: ["Control flooding", "Mark territory boundaries", "Protect against invasions", "Improve trade routes"],
      answer: "Protect against invasions"
    },
    {
      question: "Who discovered America in 1492?",
      choices: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
      answer: "Christopher Columbus"
    },
    {
        image: "assest/hiroshima.jpg",
      question: "What event is depicted in this image?",
      choices: ["The Battle of Britain", "The bombing of Pearl Harbor", "The dropping of the atomic bomb on Hiroshima", "The D-Day landings "],
      answer: "The dropping of the atomic bomb on Hiroshima"
    },
    {
      question: "What event is considered the start of the French Revolution?",
      choices: ["Execution of King Louis XVI", "Declaration of the Rights of Man", "Storming of the Bastille", "Reign of Terror"],
      answer: "Storming of the Bastille"
    },
    {
      question: "Who was the famous queen of ancient Egypt known for her beauty and alliance with Rome?",
      choices: ["Nefertiti", "Hatshepsut", "Isis", "Cleopatra"],
      answer: "Cleopatra"
    },
    {
        image: "assest/Hadrians-Wal.jpg",
      question: "Which historical structure is shown in the image?",
      choices: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
      answer: "Hadrian's Wall"
    },
    {
      question: "Which civilization is considered the oldest in the world? ",
      choices: ["Egyptian Civilization", "Mesopotamian Civilization", "Chinese Civilization", "Indus Valley Civilization"],
      answer: "Mesopotamian Civilization"
    }
    
  ],
   Sports: [
    {
      question: "In which city were the first modern Olympic Games held?",
      choices: ["Paris", "London", "Athens", "Rome"],
      answer: "Athens"
    },
    {
      question: "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
      choices: ["The Stanley Cup", "The Lombardi Trophy", "The Jules Rimet Trophy", "The Web Ellis Cup"],
      answer: "The Jules Rimet Trophy"
    },
    {
        image: "assest/Simone_Biles.jpg",
      question: "Identify the athlete in the image.",
      choices: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Nadia Comăneci"],
      answer: "Simone Biles"
    },
    {
        sound: "assest/Official NBA Whistle SFX.mp3",
      question: "Which sport typically begins with a whistle?",
      choices: ["Golf", "Basketball", "Chess", "Snooker"],
      answer: "Basketball"
    },
    {
      question: "Which Olympic athlete has won the most medals?",
      choices: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Nadia Comăneci"],
      answer: "Michael Phelps"
    },
    {
        image: "assest/Italy_Circuit.avif",
      question: 'Which circuit is known as the "Temple of Speed" due to its high average lap speeds?',
      choices: ["Silverstone", "Monza", "Spa-Francorchamps", "Suzuka"],
      answer: "Monza"
    },
      {
        sound: "assest/tennis-sound.mp3",
          question: "Which sport does this sound resemble (grunts and racket hit)?",
          choices: ["Badminton", "Baseball", "Tennis", "Hockey"],
          answer: "Tennis"
        },
        {
            question: "Who has won the most Grand Slam titles in men’s tennis (as of 2024)?",
            choices: ["Berlin Wall", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
            answer: "Novak Djokovic"
        },
        {
            question: "What is the national sport of Japan?",
            choices: ["Baseball", "Karate", "Judo", "Sumo wrestling"],
            answer: "Sumo wrestling"
        },
        {
        image: "assest/Belgium_Circuit.avif",
        question: 'Which of these circuits is known for its challenging "Eau Rouge" corner?',
        choices: ["Silverstone", "Monza", "Spa-Francorchamps", "Suzuka"],
        answer: "Spa-Francorchamps"
        }
    
  ],

    Movies: [
    {
        question: 'Which movie is set in the fictional city of Metroville?',
        choices: ["The Incredibles", "Cars", "Toy Story", "Finding Nemo"],
        answer: "The Incredibles"
        },
    {
        sound: "assest/woody.mp3",
        question: 'Who voiced the character of Woody in Toy Story?',
        choices: ["Tim Allen", "Tom Hanks", "Robin Williams", "Johnny Depp"],
        answer: "Tom Hanks"
        },
    {
        question: 'Which Marvel Cinematic Universe movie would be first if you watched them in chronological order?',
        choices: ["Captain America", "Iron Man", "Thor", "The Incredible Hulk"],
        answer: "Captain America"
        },
    {
        question: 'Who has the ability to calm the Hulk down in the Marvel Cinematic Universe?',
        choices: ["Captain America", "Black Widow", "Spaider Man", "Iron Man"],
        answer: "Black Widow"
        },
    {
        question: 'Which capital city appears in the title of the 3rd movie The Fast and Furious franchise?',
        choices: ["Rome", "Miami", "Rio", "Tokyo"],
        answer: "Tokyo"
        },
    {
        image: "assest/goblin.jpg",
        question: 'This character is from which movie series?',
        choices: ["Star Wars", "Marvel", "Harry Potter", "Lord of the Rings"],
        answer: "Harry Potter"
        },
    {
        question: 'What is the highest-grossing film of all time?',
        choices: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
        answer: "Avatar"
        },
    {
        sound: "assest/mission-impossible.mp3",
        question: 'Which movie franchise uses this music?',
        choices: ["James Bond", "Fast & Furious", "Jason Bourne", "Mission: Impossible"],
        answer: "Mission: Impossible"
        },
        {
            question: 'What is the name of the wizarding school in Harry Potter?',
            choices: ["Durmstrang", "Beauxbatons", "Hogwarts", "Ilvermorny"],
            answer: "Hogwarts"
        },
    {
    sound: "assest/pirates-of-the-caribbean.mp3",
    question: 'This music is from which movie series?',
    choices: ["The Chronicles of Narnia", "Fantastic Beasts", "Pirates of The Caribbian", "Twilight"],
    answer: "Pirates of The Caribbian"
    }
    ]
};


let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let selected = false;
let timerInterval;
let timeLeft = 15;

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const finishSound = document.getElementById("finishSound");
const timeoutSound = document.getElementById("timeoutSound");


const model = document.getElementById("instructions");
  const img = document.getElementById("gameImage");
  const span = document.querySelector(".close");

  img.onclick = function() {
    model.style.display = "block";
  }

  span.onclick = function() {
    model.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == model) {
      model.style.display = "none";
    }
  }
  

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("category-select").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentCategory][currentQuestionIndex];
  const questionTextEl = document.getElementById("question-text");
  const choicesContainer = document.getElementById("choices");
  const imageEl = document.getElementById("question-image"); 
  const audioEl = document.getElementById("question-sound");
  const playBtn = document.getElementById("play-sound-btn");
  selected = false;

  questionTextEl.innerText = questionObj.question;
  choicesContainer.innerHTML = "";

  if (questionObj.image) {
    imageEl.src = questionObj.image;
    imageEl.style.display = "block";
  } else {
    imageEl.style.display = "none";
  }


  if (questionObj.sound) {
  audioEl.src = questionObj.sound;
  playBtn.style.display = "inline-block";
    } else {
  audioEl.src = "";
  playBtn.style.display = "none";
    }

  questionObj.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => checkAnswer(button, choice);
    choicesContainer.appendChild(button);
  });

  document.getElementById("score").innerText = `Score: ${score}`;
  startTimer();
}

function playQuestionSound() {
  const audioEl = document.getElementById("question-sound");
  audioEl.play();
}


function checkAnswer(button, selectedChoice) {
  if (selected) return;
  selected = true;
  clearInterval(timerInterval);

  const questionObj = questions[currentCategory][currentQuestionIndex];
  const buttons = document.querySelectorAll("#choices button");

  if (selectedChoice === questionObj.answer) {
    button.style.backgroundColor = "green";
    correctSound.play();
    score++;
  } else {
    button.style.backgroundColor = "red";
    wrongSound.play();
    buttons.forEach(btn => {
      if (btn.innerText === questionObj.answer) {
        btn.style.backgroundColor = "green";
      }
    });
  }
    document.getElementById("score").innerText = `Score: ${score}`;

}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentCategory].length) {
    showQuestion();
  } else {
    finishSound.play();
    setTimeout(() => {
      showResultPopup();
    }, 500);
  }
}


function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  document.getElementById("time").innerText = timeLeft;
  document.getElementById("times-up").classList.add("hidden");

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeoutSound.play();
      document.getElementById("times-up").classList.remove("hidden");

      setTimeout(() => {
        document.getElementById("times-up").classList.add("hidden");
        nextQuestion();
      }, 2000);
    }
  }, 1000);
}


function showResultPopup() {
  const popup = document.getElementById("result-popup");
  const finalScore = document.getElementById("final-score");
  const resultTitle = document.getElementById("result-title");

  const total = questions[currentCategory].length;

  if (score >= 6) {
    resultTitle.innerText = "🎉 You Win!";
  } else {
    resultTitle.innerText = "❌ You Lose!";
  }

  finalScore.innerText = `Your final score: ${score} / ${total}`;
  popup.classList.remove("hidden");
}


function closePopup() {
  location.reload(); 
}

