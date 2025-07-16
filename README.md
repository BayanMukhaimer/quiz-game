# first-project "Quiziverse"



## Introduction

Quiziverse is a fast-paced, browser-based quiz game built as part of my Front-End Web Development learning journey. Inspired by classic trivia formats and modern game UI interactions, the goal is simple: answer questions, beat the timer, and score at least 6 to win!



## Contents

- [Introduction](#introduction)  
- [Contents](#contents)  
- [Project Brief](#project-brief)  
- [Technologies](#technologies)  
- [Game Design](#game-design)  
- [Audio Controls](#audio-controls)  
- [Question Timer](#question-timer)  
- [Scoring System](#scoring-system)  
- [Winning and Losing](#winning-and-losing)  
- [User Instructions](#user-instructions)  
- [Challenges & Learnings](#challenges--learnings)  
- [In Conclusion](#in-conclusion)



## Project Brief

Create an engaging, multi-category quiz game using only HTML, CSS, and JavaScript. The user should:

- Select a category of interest.
- Answer 10 questions.
- Receive real-time feedback with sounds, visuals, and a final score.
- Beat a 15-second timer for each question.
- Win if they answer at least 6 questions correctly.



## Technologies

- HTML5  
- CSS3  
- JavaScript ES6  
- Git & GitHub



## Game Design
<img width="1920" height="909" alt="image" src="https://github.com/user-attachments/assets/bf6f6ba7-aad4-4577-adca-8afb0f0dcfc6" />


The layout is simple and intuitive:
- **Landing Screen:** Lets the player pick from categories like Science, History, Sports, and Movies.
- **Quiz Screen:** Displays a question with possible answers, and a countdown timer.
- **Result Screen:** Pops up at the end, showing the score and win/lose status.

The app uses DOM manipulation to dynamically render questions, update the score, and apply interactivity.



## Audio Controls

Each sound (correct, wrong, timeout, and finish) is manually triggered via buttons instead of auto-playing. This gives the player control over the experience, especially useful for accessibility and user comfort.



## Question Timer

Each question has a 15-second countdown. If time runs out:
- The question is marked as unanswered.
- A timeout sound plays.
- The game proceeds to the next question.

This creates urgency and enhances engagement.
```js
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
```


## Scoring System

- +1 point for every correct answer.
- No penalty for wrong or timed-out answers.
- Final score is calculated out of 10.



## Winning and Losing

- **Win:** Score 6 or more — a congratulatory pop-up appears.
- **Lose:** Score less than 6 — a “try again” message pops up.
 ```js
The game then resets, encouraging replay.
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
```


## User Instructions

1. Choose a category to begin the game.
2. Answer each question before the 15-second timer runs out.
3. Score 6 or more out of 10 to win!



## Challenges & Learnings

- **Timer Management:** Implementing a global countdown for each question required resetting and clearing intervals carefully.
- **Sound Control:** Managing audio so that it doesn’t autoplay needed manual triggers and UI toggles.
- **Scoring Logic:** Ensuring the result box showed the correct win/lose message based on score required conditional logic within the end alert function.


## Next Steps

- Add local score saving with localStorage
- Add multiplayer functionality
- Animate screen transitions
- Make fully responsive for mobile/tablet
- Expand question bank per category


##  In Conclusion

Quiziverse is a polished, modular quiz game project built without any external libraries. I’m proud of how it combines learning with fun. There’s room for future updates such as local score saving, multiplayer support, and animated transitions — but as a foundational piece, it successfully meets all original goals.

Play it, share it, and quiz on!



