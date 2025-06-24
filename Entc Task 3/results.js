const universityNames = {
  USYD: "The University of Sydney",
  UNSW: "UNSW Sydney",
  UTS: "University of Technology Sydney",
  MQ: "Macquarie University"
};

const universityStrengths = {
  USYD: [
    "Top-ranked globally in Arts, Law, and Medicine",
    "Vibrant student life and historic campus",
    "Extensive research opportunities and resources"
  ],
  UNSW: [
    "Strong focus on innovation and entrepreneurship",
    "Highly regarded for Engineering, Business, and Law",
    "Strong industry partnerships and work-integrated learning"
  ],
  UTS: [
    "Industry-connected, tech-forward campus",
    "Outstanding in Design, Media, and Engineering",
    "Collaborative learning with modern facilities"
  ],
  MQ: [
    "Leader in Psychology, Education, and Interdisciplinary research",
    "Flexible learning paths with international options",
    "Supportive, student-focused campus culture"
  ]
};

const courseRecommendations = {
  USYD: [
    { name: "Bachelor of Arts", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-arts.html" },
    { name: "Bachelor of Commerce", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-commerce.html" },
    { name: "Bachelor of Laws", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-laws.html" },
    { name: "Bachelor of Science", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-science.html" },
    { name: "Bachelor of Engineering Honours", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-engineering-honours.html" },
    { name: "Bachelor of Nursing", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-nursing.html" },
    { name: "Bachelor of Design in Architecture", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-design-in-architecture.html" },
    { name: "Bachelor of Music", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-music.html" },
    { name: "Bachelor of Psychology", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-psychology.html" },
    { name: "Bachelor of Advanced Computing", link: "https://www.sydney.edu.au/courses/courses/ug/bachelor-of-advanced-computing.html" }
  ],
  UNSW: [
    { name: "Bachelor of Engineering (Honours)", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-engineering-honours" },
    { name: "Bachelor of Design", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-design" },
    { name: "Bachelor of Commerce", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-commerce" },
    { name: "Bachelor of Science", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-science" },
    { name: "Bachelor of Arts", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-arts" },
    { name: "Bachelor of Laws", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-laws" },
    { name: "Bachelor of Psychology", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-psychology" },
    { name: "Bachelor of Information Systems", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-information-systems" },
    { name: "Bachelor of Media (Communication & Journalism)", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-media-communication-journalism" },
    { name: "Bachelor of International Studies", link: "https://www.unsw.edu.au/study/undergraduate/bachelor-of-international-studies" }
  ],
  UTS: [
    { name: "Bachelor of Communication", link: "https://www.uts.edu.au/future-students/communication" },
    { name: "Bachelor of Design in Visual Communication", link: "https://www.uts.edu.au/future-students/design-architecture/building-and-visual-communication" },
    { name: "Bachelor of Science", link: "https://www.uts.edu.au/future-students/science" },
    { name: "Bachelor of Business", link: "https://www.uts.edu.au/future-students/business" },
    { name: "Bachelor of Engineering (Honours)", link: "https://www.uts.edu.au/future-students/engineering" },
    { name: "Bachelor of Nursing", link: "https://www.uts.edu.au/future-students/health/clinical-and-health-sciences/nursing" },
    { name: "Bachelor of Information Technology", link: "https://www.uts.edu.au/future-students/information-technology" },
    { name: "Bachelor of Laws", link: "https://www.uts.edu.au/future-students/law" },
    { name: "Bachelor of Animation Production", link: "https://www.uts.edu.au/future-students/design-architecture/animation-production" },
    { name: "Bachelor of Creative Intelligence and Innovation", link: "https://www.uts.edu.au/future-students/creative-intelligence-and-innovation" }
  ],
  MQ: [
    { name: "Bachelor of Education", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-education-primary" },
    { name: "Bachelor of Arts", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-arts" },
    { name: "Bachelor of Psychology", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-psychology-honours" },
    { name: "Bachelor of Business", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-business" },
    { name: "Bachelor of Science", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-science" },
    { name: "Bachelor of Laws", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-laws" },
    { name: "Bachelor of Engineering (Honours)", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-engineering-honours" },
    { name: "Bachelor of Media and Communications", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-media-and-communications" },
    { name: "Bachelor of Clinical Science", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-clinical-science" },
    { name: "Bachelor of Human Sciences", link: "https://www.mq.edu.au/study/find-a-course/courses/bachelor-of-human-sciences" }
  ]
};

const fieldKeywords = {
  "Arts": ["arts", "communication", "international studies"],
  "Commerce": ["commerce", "business", "economics"],
  "Social Sciences": ["social science", "international studies", "psychology", "politics"],
  "Education": ["education", "teaching"],
  "Engineering": ["engineering"],
  "Laws": ["law"],
  "Medicine": ["medicine", "clinical science"],
  "Music": ["music"],
  "Science": ["science", "medical", "biology", "chemistry", "physics"],
  "Design": ["design", "architecture", "visual communication", "interaction"]
};

let sortedOutcomes = JSON.parse(localStorage.getItem('quizResults')) || [];
let selectedFields = JSON.parse(localStorage.getItem('selectedFields')) || [];
let currentIndex = 0;

// Helper to check if course matches any selected field
function courseMatchesInterest(courseName, selectedFields) {
  const lowerCourse = courseName.toLowerCase();
  return selectedFields.some(field =>
    (fieldKeywords[field] || []).some(keyword =>
      lowerCourse.includes(keyword)
    )
  );
}

function showResult(index) {
  if (!sortedOutcomes.length || index >= sortedOutcomes.length || index < 0) return;

  const [uniCode] = sortedOutcomes[index];
  const allCourses = courseRecommendations[uniCode] || [];

  const filteredCourses = allCourses.filter(course =>
    courseMatchesInterest(course.name, selectedFields)
  );

  const courses = filteredCourses;

  // Image, name, and title
  document.getElementById("uniImage").src = `images/${uniCode.toLowerCase()}.png`;
  document.getElementById("uniImage").alt = universityNames[uniCode];
  document.getElementById("uniTitle").textContent = universityNames[uniCode];
  document.getElementById("uniName").textContent = universityNames[uniCode];

  // Key strengths as bullet points
  const strengthsList = document.querySelector(".key-strengths");
  strengthsList.innerHTML = "";
  (universityStrengths[uniCode] || ["Key strengths and features"]).forEach(strength => {
    const li = document.createElement("li");
    li.textContent = strength;
    strengthsList.appendChild(li);
  });

  // Courses
  document.getElementById("courseList").innerHTML = courses.map(c => `
    <li class="course-item">
      <a href="${c.link}" target="_blank">${c.name}</a>
      <div class="course-popup">
        <img src="images/mq-bachelor-of-commerce.jpg" />
        <p>Click to learn more about the ${c.name} program.</p>
      </div>
    </li>
  `).join("");

  // Homepage
  document.getElementById("uniHomepage").href = `https://www.${uniCode.toLowerCase()}.edu.au`;
  document.getElementById("uniHomepage").textContent = `Visit ${universityNames[uniCode]} homepage`;

  // Google Calendar Open Day
  const openDayDate = "20250812";
  const eventStart = `${openDayDate}T100000Z`;
  const eventEnd = `${openDayDate}T120000Z`;

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(universityNames[uniCode] + " Open Day")}` +
    `&dates=${eventStart}/${eventEnd}` +
    `&details=${encodeURIComponent("Attend the Open Day for " + universityNames[uniCode] + ". Learn more at: https://www." + uniCode.toLowerCase() + ".edu.au")}` +
    `&location=${encodeURIComponent(universityNames[uniCode])}`;

  document.getElementById("openDayText").textContent = "August 12";
  document.getElementById("calendarLink").href = calendarUrl;

  // Back & Next buttons
  document.getElementById("backBtn").style.display = index > 0 ? "inline-block" : "none";
  document.getElementById("nextBtn").textContent =
    (index === sortedOutcomes.length - 1) ? "Go Home" : "Next";
}

// Button handlers
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < sortedOutcomes.length - 1) {
    currentIndex++;
    showResult(currentIndex);
  } else {
       window.location.href = "index.html";
  }
});

document.getElementById("backBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showResult(currentIndex);
  }
});

document.getElementById("retakeQuizBtn").addEventListener("click", () => {
  localStorage.removeItem("quizResults");
  localStorage.removeItem("selectedFields");
  window.location.href = "quiz.html";
});

// Initial render
showResult(currentIndex);
