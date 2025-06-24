const universityNames = {
  USYD: "The University of Sydney",
  UNSW: "UNSW Sydney",
  UTS: "University of Technology Sydney",
  MQ: "Macquarie University"
};

let selectedUniversity;

const manualSelection = JSON.parse(localStorage.getItem('selectedUniversityManual'));
const quizResults = JSON.parse(localStorage.getItem('quizResults'));

if (manualSelection) {
  selectedUniversity = manualSelection;
  localStorage.removeItem('selectedUniversityManual');
} else if (quizResults && quizResults.length) {
  selectedUniversity = quizResults[0][0];
} else {
  window.location.href = 'university-select.html';
}

const container = document.getElementById("costQuestionContainer");
const nextBtn = document.getElementById("costNextButton");
const resultBox = document.getElementById("costResults");

const costQuestionsPerUni = {
  USYD: [
    { question: "Do you plan to live on campus at USYD?", options: { a: { label: "Yes", cost: 18000 }, b: { label: "No", cost: 0 } } },
    { question: "Will you be renting a private apartment near the university?", options: { a: { label: "Yes", cost: 20000 }, b: { label: "No", cost: 0 } } },
    { question: "Are utilities like electricity and internet included in your housing?", options: { a: { label: "Yes", cost: 0 }, b: { label: "No", cost: 2400 } } },
    { question: "How often do you cook meals at home versus eating out?", options: { a: { label: "Mostly cook", cost: 5000 }, b: { label: "Often eat out", cost: 10000 } } },
    { question: "Will you use public transport to travel to campus regularly?", options: { a: { label: "Yes", cost: 1600 }, b: { label: "No", cost: 0 } } },
    { question: "Do you plan to sign up for a gym or sports membership?", options: { a: { label: "Yes", cost: 800 }, b: { label: "No", cost: 0 } } },
    { question: "What’s your expected cost for textbooks and study materials?", options: { a: { label: "Standard", cost: 800 }, b: { label: "Extensive", cost: 1500 } } },
    { question: "Do you need to buy a new laptop or computer for your studies?", options: { a: { label: "Yes", cost: 2000 }, b: { label: "No", cost: 0 } } },
    { question: "Are you required to pay for health insurance (e.g., OSHC)?", options: { a: { label: "Yes", cost: 600 }, b: { label: "No", cost: 0 } } },
    { question: "How much do you expect to spend on entertainment and social events?", options: { a: { label: "Low", cost: 2000 }, b: { label: "Moderate", cost: 4000 }, c: { label: "High", cost: 6000 } } }
  ],
  UNSW: [
    { question: "Do you plan to live in a residential college at UNSW?", options: { a: { label: "Yes", cost: 20000 }, b: { label: "No", cost: 0 } } },
    { question: "Will you be renting a shared apartment or house nearby?", options: { a: { label: "Yes", cost: 15000 }, b: { label: "No", cost: 0 } } },
    { question: "Are utility costs included in your rent, or paid separately?", options: { a: { label: "Included", cost: 0 }, b: { label: "Separate", cost: 2400 } } },
    { question: "How do you plan to manage meals—on a plan, home-cooked, or takeaway?", options: { a: { label: "Meal plan", cost: 6000 }, b: { label: "Self-cook", cost: 4000 }, c: { label: "Mostly takeaway", cost: 9000 } } },
    { question: "Will you use public transport on a regular basis?", options: { a: { label: "Yes", cost: 1600 }, b: { label: "No", cost: 0 } } },
    { question: "Will your course require expensive lab materials or equipment?", options: { a: { label: "Minimal", cost: 500 }, b: { label: "Extensive", cost: 1200 } } },
    { question: "Do you already own a suitable laptop or desktop for study?", options: { a: { label: "Yes", cost: 0 }, b: { label: "No", cost: 2000 } } },
    { question: "Do you need to purchase health insurance during your study?", options: { a: { label: "Yes", cost: 600 }, b: { label: "No", cost: 0 } } },
    { question: "What’s your expected monthly budget for social outings?", options: { a: { label: "Low", cost: 1500 }, b: { label: "Moderate", cost: 3000 }, c: { label: "High", cost: 5000 } } },
    { question: "Are you planning to join any paid student clubs or societies?", options: { a: { label: "Multiple", cost: 300 }, b: { label: "One", cost: 150 }, c: { label: "None", cost: 0 } } }
  ],
  UTS: [
    { question: "Will you be renting a private unit close to UTS?", options: { a: { label: "Yes", cost: 15000 }, b: { label: "No", cost: 0 } } },
    { question: "Are you considering UTS-provided student accommodation?", options: { a: { label: "Yes", cost: 14000 }, b: { label: "No", cost: 0 } } },
    { question: "Will you need to pay separately for utilities like internet and power?", options: { a: { label: "Yes", cost: 2400 }, b: { label: "No", cost: 0 } } },
    { question: "How often do you plan to eat meals on campus?", options: { a: { label: "Everyday", cost: 2500 }, b: { label: "Occasionally", cost: 1000 }, c: { label: "Never", cost: 0 } } },
    { question: "Will you be commuting via public transport most days?", options: { a: { label: "Yes", cost: 1600 }, b: { label: "No", cost: 0 } } },
    { question: "How much will you spend on printing and study supplies each semester?", options: { a: { label: "Basic", cost: 300 }, b: { label: "Heavy", cost: 800 } } },
    { question: "Do you need to buy a new computer for university use?", options: { a: { label: "Yes", cost: 2000 }, b: { label: "No", cost: 0 } } },
    { question: "Do you intend to get a gym or recreation center membership?", options: { a: { label: "Yes", cost: 500 }, b: { label: "No", cost: 0 } } },
    { question: "Will you require OSHC or another form of health insurance?", options: { a: { label: "Yes", cost: 600 }, b: { label: "No", cost: 0 } } },
    { question: "How much are you budgeting for leisure and entertainment?", options: { a: { label: "Low", cost: 2000 }, b: { label: "Medium", cost: 3500 }, c: { label: "High", cost: 5000 } } }
  ],
  MQ: [
    { question: "Will you rent a private apartment or house off-campus?", options: { a: { label: "Yes", cost: 14000 }, b: { label: "No", cost: 0 } } },
    { question: "Are you applying for Macquarie’s on-campus apartments?", options: { a: { label: "Yes", cost: 13000 }, b: { label: "No", cost: 0 } } },
    { question: "Will utilities like gas and electricity be an extra cost for you?", options: { a: { label: "Yes", cost: 2400 }, b: { label: "No", cost: 0 } } },
    { question: "What’s your plan for meals—cooking, mixed, or dining out often?", options: { a: { label: "Mostly cook", cost: 5000 }, b: { label: "Sometimes eat out", cost: 8000 }, c: { label: "Mostly eat out", cost: 12000 } } },
    { question: "Do you expect to use public transport most days?", options: { a: { label: "Yes", cost: 1600 }, b: { label: "No", cost: 0 } } },
    { question: "Are you planning to participate in a study abroad exchange program?", options: { a: { label: "Yes", cost: 3000 }, b: { label: "No", cost: 0 } } },
    { question: "Do you need childcare services while studying?", options: { a: { label: "Yes", cost: 5000 }, b: { label: "No", cost: 0 } } },
    { question: "Are you required to purchase health insurance while enrolled?", options: { a: { label: "Yes", cost: 600 }, b: { label: "No", cost: 0 } } },
    { question: "Will you need a new computer or laptop for coursework?", options: { a: { label: "Yes", cost: 2000 }, b: { label: "No", cost: 0 } } },
    { question: "What’s your expected annual spend on social and lifestyle activities?", options: { a: { label: "Low", cost: 2000 }, b: { label: "Medium", cost: 4000 }, c: { label: "High", cost: 6000 } } }
  ]
};

let costQuestions = costQuestionsPerUni[selectedUniversity];
let currentCostQuestion = 0;
let totalCost = 0;

function renderCostQuestion() {
  const q = costQuestions[currentCostQuestion];
  container.innerHTML = `
    <p><strong>${universityNames[selectedUniversity]} Cost Q${currentCostQuestion + 1}:</strong> ${q.question}</p>
    <div class="options">
      ${Object.entries(q.options).map(([key, { label }]) => `
        <div class="optionBox" data-key="${key}">${label}</div>
      `).join("")}
    </div>
  `;
  document.querySelectorAll('.optionBox').forEach(box => {
    box.onclick = () => {
      document.querySelectorAll('.optionBox').forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
      nextBtn.disabled = false;
    };
  });
  nextBtn.disabled = true;
}

nextBtn.addEventListener('click', () => {
  const sel = document.querySelector('.optionBox.selected');
  if (!sel) return;
  const key = sel.dataset.key;
  totalCost += costQuestions[currentCostQuestion].options[key].cost;
  currentCostQuestion++;
  if (currentCostQuestion < costQuestions.length) renderCostQuestion();
  else displayCostResult();
});

function displayCostResult() {
  container.style.display = 'none';
  nextBtn.style.display = 'none';
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <h2>Estimated Annual Cost at ${universityNames[selectedUniversity]}</h2>
    <p>Total Estimated Cost: <strong>$${totalCost.toLocaleString()}</strong></p>
    <button onclick="window.location.href='index.html'">Back to Home</button>
  `;
}

renderCostQuestion();