const questions = [
      {
        question: "What fields of study interest you? Pick all that apply",
        multiSelect: true,
        options: {
          a: { label: "Arts", scores: { USYD: 15, UNSW: 15.62, UTS: 13.46, MQ: 12 } },
          b: { label: "Commerce", scores: { USYD: 15.28, UNSW: 15.86, UTS: 12.88, MQ: 12.24 } },
          c: { label: "Social Sciences", scores: { USYD: 16.3, UNSW: 15.84, UTS: 13.72, MQ: 13.94 } },
          d: { label: "Education", scores: { USYD: 16.68, UNSW: 15.48, UTS: 12.94, MQ: 12.68 } },
          e: { label: "Engineering", scores: { USYD: 15.7, UNSW: 16.52, UTS: 14.88, MQ: 12.8 } },
          f: { label: "Laws", scores: { USYD: 16.6, UNSW: 17.72, UTS: 14.46, MQ: 12.46 } },
          g: { label: "Medicine", scores: { USYD: 16.4, UNSW: 15.32, UTS: 12.58, MQ: 11.62 } },
          h: { label: "Music", scores: { USYD: 18, UNSW: 16, UTS: 14, MQ: 14 } },
          i: { label: "Science", scores: { USYD: 15.28, UNSW: 15.56, UTS: 12.32, MQ: 11.12 } },
          j: { label: "Design", scores: { USYD: 15, UNSW: 15.62, UTS: 13.46, MQ: 0 } }
        }
      },
      {
        question: "What is your Estimated ATAR/Selection score?",
        options: {
          a: { label: "95-100", scores: { USYD: 15, UNSW: 15, UTS: 10, MQ: 10 } },
          b: { label: "85-95", scores: { USYD: 9, UNSW: 9, UTS: 7, MQ: 7 } },
          c: { label: "75-85", scores: { USYD: 8, UNSW: 8, UTS: 12, MQ: 12 } },
          d: { label: "<75", scores: { USYD: 5, UNSW: 6, UTS: 15, MQ: 15 } },
          e: { label: "Not sure", scores: { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 } },
        }
      },
      {
        question: "Do you prefer the city life or a big open campus?",
        options: {
          a: { label: "Don't like the city", scores: { USYD: 10, UNSW: 8, UTS: 2, MQ: 9 } },
          b: { label: "Enjoy having some space to walk around", scores: { USYD: 8, UNSW: 8, UTS: 6, MQ: 8 } },
          c: { label: "Don't mind how the campus looks/feels", scores: { USYD: 5, UNSW: 5, UTS: 5, MQ: 5 } },
          d: { label: "Love city life", scores: { USYD: 6, UNSW: 5, UTS: 9, MQ: 5 } }
        }
      },
      {
        question: "Do you plan on joining lots of clubs and societies at uni?",
        options: {
          a: { label: "As many as possible!", scores: { USYD: 4, UNSW: 5, UTS: 3, MQ: 2 } },
          b: { label: "I'll definitely join the ones I’m really into", scores: { USYD: 4, UNSW: 4, UTS: 3, MQ: 3 } },
          c: { label: "I might, depends if I have friends with me", scores: { USYD: 3.5, UNSW: 3.5, UTS: 3, MQ: 3 } },
          d: { label: "Not really my jam", scores: { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 } }
        }
      },
      {
        question: "Do you wish to do an exchange overseas with your uni at some point?",
        options: {
          a: { label: "For sure! I love to see the world", scores: { USYD: 7, UNSW: 7, UTS: 5, MQ: 5 } },
          b: { label: "It's not really a deal breaker but it would be nice", scores: { USYD: 6, UNSW: 6, UTS: 4, MQ: 4 } },
          c: { label: "I don't wish to go overseas", scores: { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 } }
        }
      },
      {
        question: "Do you plan on participating in university sport programs?",
        options: {
          a: { label: "It's important to me that the uni has a great sports program", scores: { USYD: 10, UNSW: 8, UTS: 6, MQ: 7 } },
          b: { label: "I'd love to use the facilities but joining teams isn't my thing", scores: { USYD: 7, UNSW: 7, UTS: 5, MQ: 6 } },
          c: { label: "I'd use the facilities from time to time", scores: { USYD: 6, UNSW: 6, UTS: 5, MQ: 6 } },
          d: { label: "It doesn't make a difference either way", scores: { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 } }
        }
      },
      {
        question: "Do you plan on living on campus, or at home?",
        options: {
          a: { label: "Definitely want to get the full uni campus experience", scores: { USYD: 7, UNSW: 7, UTS: 6, MQ: 7 } },
          b: { label: "I'd like to stay on campus if it's not too expensive", scores: { USYD: 5, UNSW: 5, UTS: 4, MQ: 7 } },
          c: { label: "I'd probably stay at home unless I got a scholarship", scores: { USYD: 5, UNSW: 5, UTS: 5, MQ: 6 } },
          d: { label: "I'll stay home", scores: { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 } }
        }
      }
    ];

    let currentQuestionIndex = 0;
let outcomeScores = { USYD: 0, UNSW: 0, UTS: 0, MQ: 0 };
const container = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextButton");
const resultBox = document.getElementById("results");

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  const isMulti = q.multiSelect;

  container.innerHTML = `
    <p><strong>Q${currentQuestionIndex + 1}:</strong> ${q.question}</p>
    <div class="options">
      ${Object.entries(q.options).map(([key, { label }]) => `
        <div class="optionBox" data-key="${key}">${label}</div>
      `).join("")}
    </div>
  `;

  const optionBoxes = document.querySelectorAll('.optionBox');
  optionBoxes.forEach(box => {
    box.addEventListener('click', () => {
      if (isMulti) {
        box.classList.toggle('selected');
      } else {
        optionBoxes.forEach(b => b.classList.remove('selected'));
        box.classList.add('selected');
      }
      nextBtn.disabled = !document.querySelector('.optionBox.selected');
    });
  });

  updateProgress();
  nextBtn.disabled = true;
}

function updateProgress() {
  const percent = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById("progressFill").style.width = percent + "%";
}

nextBtn.addEventListener('click', () => {
  const q = questions[currentQuestionIndex];
  const selectedBoxes = Array.from(document.querySelectorAll('.optionBox.selected'));
  if (selectedBoxes.length === 0) return;

  if (currentQuestionIndex === 0) {
    const selectedFields = selectedBoxes.map(box => q.options[box.dataset.key].label);
    localStorage.setItem('selectedFields', JSON.stringify(selectedFields));
  }

  selectedBoxes.forEach(box => {
    const key = box.dataset.key;
    const scores = q.options[key].scores;
    Object.entries(scores).forEach(([uni, points]) => {
      outcomeScores[uni] += points;
    });
  });

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    displayResults();
  }
});

let sortedOutcomes = [];

function displayResults() {
  container.style.display = 'none';
  nextBtn.style.display = 'none';
  document.getElementById("progressFill").style.width = "100%";

  sortedOutcomes = Object.entries(outcomeScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  localStorage.setItem('quizResults', JSON.stringify(sortedOutcomes));
  window.location.href = "results.html";
}

renderQuestion();