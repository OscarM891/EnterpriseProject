const questions = [
  {
    question: "What type of class activities do you prefer?",
    options: {
      a: { label: "Reading, writing, and essays", scores: { englishAdvanced: 18, englishStandard: 16, englishExtension: 19, legalStudies: 14, societyCulture: 15, modernHistory: 14, businessStudies: 10 } },
      b: { label: "Problem-solving and calculations", scores: { mathsStandard: 18, mathsAdvanced: 20, mathsExtension: 20, physics: 16, chemistry: 16, biology: 14, businessStudies: 6 } },
      c: { label: "Lab work and practical tests", scores: { biology: 18, chemistry: 18, physics: 18, pdhpe: 8, visualArts: 5 } },
      d: { label: "Presentations and debates", scores: { legalStudies: 18, businessStudies: 15, societyCulture: 16, modernHistory: 15, drama: 14, englishAdvanced: 14 } },
      e: { label: "Creative projects and performances", scores: { visualArts: 18, drama: 18, pdhpe: 16, englishAdvanced: 12 } },
      f: { label: "Research essays and social studies", scores: { englishAdvanced: 16, legalStudies: 16, societyCulture: 18, modernHistory: 17, businessStudies: 12 } },
    },
  },
  {
    question: "What topics interest you the most?",
    options: {
      a: { label: "Literature and language", scores: { englishAdvanced: 20, englishStandard: 18, englishExtension: 20, drama: 15, visualArts: 14, modernHistory: 14 } },
      b: { label: "Mathematics and logical reasoning", scores: { mathsStandard: 19, mathsAdvanced: 20, mathsExtension: 20, physics: 17, chemistry: 16, biology: 14 } },
      c: { label: "Science and natural phenomena", scores: { biology: 20, chemistry: 20, physics: 20, pdhpe: 10 } },
      d: { label: "Law, business and economics", scores: { legalStudies: 20, businessStudies: 20, societyCulture: 16, modernHistory: 15 } },
      e: { label: "Arts, drama and physical education", scores: { visualArts: 20, drama: 20, pdhpe: 20 } },
      f: { label: "History and society", scores: { societyCulture: 20, modernHistory: 20, legalStudies: 16, businessStudies: 12 } },
    },
  },
  {
    question: "How do you prefer to work on assignments?",
    options: {
      a: { label: "Individually with focus", scores: { englishAdvanced: 17, englishExtension: 18, legalStudies: 14, societyCulture: 15, modernHistory: 15 } },
      b: { label: "Collaboratively in groups", scores: { legalStudies: 16, businessStudies: 16, pdhpe: 14, visualArts: 15, drama: 16, societyCulture: 18, modernHistory: 16 } },
      c: { label: "Hands-on and practical", scores: { biology: 18, chemistry: 18, physics: 18, pdhpe: 18, visualArts: 16, drama: 16 } },
      d: { label: "Research-focused and independent", scores: { englishAdvanced: 18, englishExtension: 19, legalStudies: 18, societyCulture: 19, modernHistory: 19, businessStudies: 14 } },
    },
  },
  {
    question: "Which describes your preferred pace when learning new material?",
    options: {
      a: { label: "I like to master fundamentals before moving on", scores: { mathsStandard: 18, biology: 16, chemistry: 16, englishStandard: 15 } },
      b: { label: "I enjoy challenging myself with advanced content", scores: { mathsAdvanced: 20, mathsExtension: 20, englishAdvanced: 18, englishExtension: 20, physics: 18, legalStudies: 16 } },
      c: { label: "I prefer creative, flexible learning at my own pace", scores: { visualArts: 20, drama: 18, pdhpe: 16, societyCulture: 15 } },
      d: { label: "I like a mix of challenge and support", scores: { businessStudies: 16, modernHistory: 16, englishStandard: 16, mathsStandard: 16 } },
    },
  },
  {
    question: "What environment do you prefer for learning?",
    options: {
      a: { label: "Classroom with structured lessons", scores: { mathsStandard: 18, englishStandard: 17, biology: 16, legalStudies: 15 } },
      b: { label: "Labs, workshops, or practical settings", scores: { biology: 20, chemistry: 20, physics: 20, pdhpe: 18, visualArts: 14 } },
      c: { label: "Group projects and discussion-based learning", scores: { legalStudies: 18, societyCulture: 18, businessStudies: 16, drama: 16, modernHistory: 16 } },
      d: { label: "Independent study and research", scores: { englishAdvanced: 18, englishExtension: 19, modernHistory: 18, legalStudies: 18, societyCulture: 18 } },
    },
  },
  {
    question: "Which skills do you enjoy using most?",
    options: {
      a: { label: "Analytical thinking and problem solving", scores: { mathsAdvanced: 20, mathsExtension: 20, physics: 18, chemistry: 18, businessStudies: 14 } },
      b: { label: "Creativity and artistic expression", scores: { visualArts: 20, drama: 20, englishAdvanced: 14, pdhpe: 12 } },
      c: { label: "Communication and debating", scores: { legalStudies: 18, societyCulture: 16, businessStudies: 16, englishAdvanced: 16, modernHistory: 15 } },
      d: { label: "Research and writing", scores: { englishAdvanced: 20, englishExtension: 20, modernHistory: 18, societyCulture: 18, legalStudies: 16 } },
    },
  },
  {
    question: "How do you feel about group work?",
    options: {
      a: { label: "I love collaborating and sharing ideas", scores: { drama: 18, pdhpe: 16, businessStudies: 16, societyCulture: 16, legalStudies: 15, modernHistory: 15 } },
      b: { label: "I prefer working alone but will contribute in groups", scores: { englishAdvanced: 16, englishExtension: 16, mathsAdvanced: 16, biology: 14, chemistry: 14 } },
      c: { label: "I prefer to work independently", scores: { mathsExtension: 18, englishExtension: 18, modernHistory: 17, legalStudies: 16, societyCulture: 16 } },
    },
  },
  {
    question: "What do you enjoy doing in your free time?",
    options: {
      a: { label: "Reading books or writing stories", scores: { englishAdvanced: 20, englishStandard: 18, englishExtension: 20, modernHistory: 16, societyCulture: 15 } },
      b: { label: "Playing or watching sports", scores: { pdhpe: 20, biology: 14, drama: 12 } },
      c: { label: "Creative arts like painting or acting", scores: { visualArts: 20, drama: 20, englishAdvanced: 14 } },
      d: { label: "Solving puzzles or maths games", scores: { mathsAdvanced: 20, mathsExtension: 20, physics: 16, chemistry: 15 } },
      e: { label: "Learning about history and cultures", scores: { modernHistory: 20, societyCulture: 20, legalStudies: 16, businessStudies: 12 } },
      f: { label: "Running a business or organising events", scores: { businessStudies: 20, legalStudies: 15, societyCulture: 14 } },
    },
  },
  {
    question: "Which statement best describes your future plans?",
    options: {
      a: { label: "I want to pursue a career in science or medicine", scores: { biology: 20, chemistry: 20, physics: 20, pdhpe: 12, mathsAdvanced: 18 } },
      b: { label: "I see myself working in law, business, or social sciences", scores: { legalStudies: 20, businessStudies: 20, societyCulture: 18, modernHistory: 16, englishAdvanced: 14 } },
      c: { label: "I want a creative or performing arts career", scores: { visualArts: 20, drama: 20, englishAdvanced: 14, pdhpe: 10 } },
      d: { label: "I'm still exploring and open to many options", scores: { englishStandard: 12, mathsStandard: 12, societyCulture: 12, businessStudies: 12, biology: 12, visualArts: 12 } },
    },
  },
  {
    question: "What kind of assessment do you prefer?",
    options: {
      a: { label: "Essays and extended writing tasks", scores: { englishAdvanced: 20, englishExtension: 20, legalStudies: 18, societyCulture: 18, modernHistory: 17 } },
      b: { label: "Problem-solving and calculations", scores: { mathsAdvanced: 20, mathsExtension: 20, physics: 18, chemistry: 18, biology: 16 } },
      c: { label: "Practical and performance-based assessments", scores: { visualArts: 20, drama: 20, pdhpe: 18, biology: 14 } },
      d: { label: "Research projects and presentations", scores: { legalStudies: 18, businessStudies: 16, societyCulture: 16, modernHistory: 16, englishAdvanced: 14 } },
    },
  },
];


let currentQuestionIndex = 0;
let subjectScores = {};
const container = document.getElementById("questionContainer");
const nextBtn = document.getElementById("nextButton");

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  const isMulti = q.multiSelect;

  container.innerHTML = `
    <p><strong>Q${currentQuestionIndex + 1}:</strong> ${q.question}</p>
    <div class="options">
      ${Object.entries(q.options).map(([key, opt]) => `
        <div class="optionBox" data-key="${key}">${opt.label}</div>
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

  selectedBoxes.forEach(box => {
    const scores = q.options[box.dataset.key].scores;
    Object.entries(scores).forEach(([subject, points]) => {
      subjectScores[subject] = (subjectScores[subject] || 0) + points;
    });
  });

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    localStorage.setItem("subjectResults", JSON.stringify(subjectScores));
    window.location.href =  "year-11results.html";
  }
});

renderQuestion();
