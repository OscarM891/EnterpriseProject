let subjectScores = JSON.parse(localStorage.getItem("subjectResults")) || {};

// Convert to sorted array of [subject, score]
let sortedOutcomes = Object.entries(subjectScores).sort((a, b) => b[1] - a[1]);

// Extract subjects only
const includedSubjects = sortedOutcomes.map(([subject]) => subject);

// Ensure English Advanced is included
if (!includedSubjects.includes('englishAdvanced')) {
  sortedOutcomes.push(['englishAdvanced', 0]); // Add with neutral score if missing
}

// Ensure at least one Maths subject is included
const mathsSubjects = ['mathsStandard', 'mathsAdvanced', 'mathsExtension'];
const hasMath = includedSubjects.some(sub => mathsSubjects.includes(sub));
if (!hasMath) {
  sortedOutcomes.push(['mathsStandard', 0]); // Add lowest level if none included
}

// Re-sort with additions
sortedOutcomes = sortedOutcomes.sort((a, b) => b[1] - a[1]);

// Build final top 6 list (force include required subjects if not in top 6)
let finalSubjects = [];
let addedSubjects = new Set();

// Always include English Advanced
if (!addedSubjects.has('englishAdvanced')) {
  const eng = sortedOutcomes.find(([sub]) => sub === 'englishAdvanced');
  finalSubjects.push(eng);
  addedSubjects.add('englishAdvanced');
}

// Always include at least one maths
const mathSubject = sortedOutcomes.find(([sub]) => mathsSubjects.includes(sub) && !addedSubjects.has(sub));
if (mathSubject) {
  finalSubjects.push(mathSubject);
  addedSubjects.add(mathSubject[0]);
}

// Fill up remaining spots to make 6 unique subjects
for (const [subject, score] of sortedOutcomes) {
  if (finalSubjects.length >= 6) break;
  if (!addedSubjects.has(subject)) {
    finalSubjects.push([subject, score]);
    addedSubjects.add(subject);
  }
}

// Display
const list = document.getElementById("subjectResultsList");
list.innerHTML = ""; // Clear existing items if rerunning
finalSubjects.forEach(([subject, score]) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${subject}</strong> — Score: ${score}`;
  list.appendChild(li);
});
