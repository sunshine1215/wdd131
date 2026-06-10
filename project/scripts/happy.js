// ── Happy Pets - happy.js ──

// ── DATA ──
const careCards = [
  { icon: "🍗", title: "Feeding",      text: "Learn the right portions and safe foods for dogs and cats at every life stage." },
  { icon: "✂️", title: "Grooming",     text: "Keep your pet clean with brushing, bathing, and nail trimming routines." },
  { icon: "🏃", title: "Exercise",     text: "Discover how much activity your pet needs to stay healthy and happy." },
  { icon: "🩺", title: "Health",       text: "Recognize early signs of illness and know when to visit your vet." },
  { icon: "🏠", title: "Safety",       text: "Pet-proof your home by identifying hazards and dangerous foods." },
  { icon: "💊", title: "Vaccinations", text: "Stay on top of your pet's vaccine schedule to prevent serious diseases." }
];

const tips = [
  { title: "🥤 Fresh Water Daily",   text: "Always provide clean water. Dehydration causes serious health issues." },
  { title: "🦷 Dental Care Matters", text: "Brush your pet's teeth or give dental treats to prevent gum disease." },
  { title: "🚫 Foods to Avoid",      text: "Never feed chocolate, grapes, onions, garlic, or xylitol to pets." },
  { title: "🌡️ Watch for Lethargy",  text: "A sudden drop in energy can signal illness. Call your vet if it lasts 24 hours." },
  { title: "🐾 Regular Vet Visits",  text: "Schedule a check-up at least once a year, twice for senior pets." },
  { title: "🧸 Mental Stimulation",  text: "Puzzle toys and playtime keep your pet's mind sharp and reduce anxiety." }
];

const guideCards = [
  {
    type: "dog",
    title: "Feeding Your Dog",
    text: "Adult dogs should be fed twice a day with a balanced diet appropriate for their size and age.",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop"
  },
  {
    type: "cat",
    title: "Feeding Your Cat",
    text: "Cats are obligate carnivores and thrive on high-protein diets. Avoid overfeeding to prevent obesity.",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop"
  },
  {
    type: "dog",
    title: "Grooming Your Dog",
    text: "Brush your dog weekly, bathe monthly, and trim nails every 3-4 weeks to keep them comfortable.",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop"
  },
  {
    type: "cat",
    title: "Grooming Your Cat",
    text: "Most cats self-groom, but long-haired breeds need regular brushing to prevent matting.",
    img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop"
  },
  {
    type: "dog",
    title: "Exercising Your Dog",
    text: "Dogs need 30-60 minutes of exercise daily. Walks, fetch, and swimming are great options.",
    img: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=500&auto=format&fit=crop"
  },
  {
    type: "cat",
    title: "Keeping Cats Active",
    text: "Use interactive toys, laser pointers, and climbing trees to keep indoor cats mentally stimulated.",
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&auto=format&fit=crop"
  }
];

const quizQuestions = [
  {
    question: "How many times a day should an adult dog be fed?",
    options: ["Once a day", "Twice a day", "Four times a day", "Only when hungry"],
    answer: 1,
    explanation: "Most adult dogs do best with two meals a day — morning and evening."
  },
  {
    question: "Which food is TOXIC to dogs and cats?",
    options: ["Carrots", "Plain chicken", "Grapes", "Plain rice"],
    answer: 2,
    explanation: "Grapes and raisins are toxic to both cats and dogs and can cause kidney failure."
  },
  {
    question: "How much daily exercise does an average adult dog need?",
    options: ["5 minutes", "15 minutes", "30-60 minutes", "3+ hours"],
    answer: 2,
    explanation: "Most adult dogs need at least 30-60 minutes of exercise per day."
  },
  {
    question: "What is a key sign that your cat might be sick?",
    options: ["Sleeping more than usual", "Eating normally", "Playing with toys", "Grooming itself"],
    answer: 0,
    explanation: "Sudden increase in sleep or lethargy can be an early warning sign of illness."
  },
  {
    question: "How often should you take your pet to the vet?",
    options: ["Every 5 years", "Only when sick", "At least once a year", "Every month"],
    answer: 2,
    explanation: "Pets should have a check-up at least once a year, twice for senior pets."
  },

  // New questions
  {
    question: "Which human food is TOXIC to dogs and cats?",
    options: ["Chicken", "Carrots", "Chocolate", "Rice"],
    answer: 2,
    explanation: "Chocolate contains theobromine which is poisonous to pets. Even small amounts can be dangerous."
  },
  {
    question: "How often should you brush a long-haired cat?",
    options: ["Once a year", "Once a week", "Daily", "Never"],
    answer: 2,
    explanation: "Daily brushing prevents matting and reduces hairballs in long-haired breeds."
  },
  {
    question: "What does a wagging tail ALWAYS mean?",
    options: ["The dog is happy", "The dog wants food", "The dog could be alert or anxious", "The dog is sleepy"],
    answer: 2,
    explanation: "Tail wagging shows arousal, not just happiness. Look at body language too."
  },
  {
    question: "How much water should a 10kg dog drink per day?",
    options: ["50ml", "500ml - 1 liter", "5 liters", "Only when thirsty"],
    answer: 1,
    explanation: "Dogs need about 50-60ml per kg daily. So 10kg dog = 500-600ml water."
  },
  {
    question: "At what age can kittens eat solid food?",
    options: ["2 weeks", "4-6 weeks", "3 months", "6 months"],
    answer: 1,
    explanation: "Kittens start weaning at 4-6 weeks and can eat soft kitten food."
  },
  {
    question: "Which is a sign of a healthy dog?",
    options: ["Dry nose always", "Clear eyes, clean ears", "Sneezing constantly", "Sleeping 23 hours"],
    answer: 1,
    explanation: "Clear eyes, clean ears, shiny coat, and normal energy = healthy pet."
  },
  {
    question: "How often should you trim a dog's nails?",
    options: ["Every day", "Every 3-4 weeks", "Once a year", "Never"],
    answer: 1,
    explanation: "Most dogs need nail trims every 3-4 weeks to prevent pain and joint issues."
  },
  {
    question: "What's the best way to introduce a new pet to your current pet?",
    options: ["Let them fight it out", "Slow, supervised introductions", "Keep them in same cage", "Yell at them"],
    answer: 1,
    explanation: "Slow introductions with scent swapping reduces stress and fights."
  },
  {
    question: "How many hours do adult cats sleep per day?",
    options: ["4-6 hours", "8-10 hours", "12-16 hours", "20 hours"],
    answer: 2,
    explanation: "Cats are natural sleepers! 12-16 hours daily is normal for adults."
  },
  {
    question: "Which vaccine is REQUIRED by law for dogs in most countries?",
    options: ["Bordetella", "Rabies", "Lyme", "Flea vaccine"],
    answer: 1,
    explanation: "Rabies vaccine is legally required in most countries to protect humans too."
  },
  {
    question: "What should you do if your pet eats something poisonous?",
    options: ["Wait and see", "Make them vomit", "Call vet/poison control immediately", "Give milk"],
    answer: 2,
    explanation: "Call your vet or pet poison hotline ASAP. Don't induce vomiting without advice."
  },
  {
    question: "How often should you clean a litter box?",
    options: ["Once a month", "Once a week", "Scoop daily, full change weekly", "Never"],
    answer: 2,
    explanation: "Scoop daily and do a full litter change weekly to keep cats happy and healthy."
  }
];

// ── QUIZ STATE ──
let currentQuestion = 0;
let score = 0;
let answered = false;

// ── FUNCTIONS ──

// Render care cards on homepage
function renderCareCards() {
  const grid = document.getElementById("cards-grid");
  if (!grid) return;
  grid.innerHTML = careCards.map(card => 
    `
    <div class="care-card">
      <div class="icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </div>
    `
  ).join("");
}

// Render tips on homepage
function renderTips() {
  const grid = document.getElementById("tips-grid");
  if (!grid) return;
  grid.innerHTML = tips.map(tip => 
    `
    <div class="tip-item">
      <h4>${tip.title}</h4>
      <p>${tip.text}</p>
    </div>
    `
  ).join("");
}

// Render guide cards on care page
function renderGuideCards(filter = "all") {
  const grid = document.getElementById("guide-grid");
  if (!grid) return;
  const filtered = filter === "all"
    ? guideCards
    : guideCards.filter(card => card.type === filter);

  grid.innerHTML = filtered.map(card => 
    `
    <div class="guide-card">
      <img src="${card.img}" alt="${card.title}" loading="lazy" />
      <div class="guide-card-body">
        <span class="pet-tag tag-${card.type}">${card.type === "dog" ? "🐶 Dog" : "🐱 Cat"}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    </div>
    `
  ).join("");
}

// Filter buttons on care page
function setupFilterButtons() {
  const buttons = document.querySelectorAll(".btn-filter");
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGuideCards(btn.dataset.filter);
    });
  });
}

// Load quiz question
function loadQuestion() {
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const progressEl = document.getElementById("quiz-progress");
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("quiz-next");
  if (!questionEl) return;

  answered = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "quiz-feedback";
  nextBtn.style.display = "none";

  const q = quizQuestions[currentQuestion];
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  questionEl.textContent = q.question;

  optionsEl.innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" data-index="${i}">${opt}</button>`
  ).join("");

  optionsEl.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => selectAnswer(parseInt(btn.dataset.index)));
  });
}

// Handle answer selection
function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestion];
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("quiz-next");
  const buttons = document.querySelectorAll(".quiz-option");

  buttons.forEach(btn => btn.disabled = true);

  if (index === q.answer) {
    buttons[index].classList.add("correct");

    feedbackEl.textContent = `✅ Correct! ${q.explanation}`;
    feedbackEl.className = "quiz-feedback correct";
    score++;
  } else {
    buttons[index].classList.add("incorrect");
    buttons[q.answer].classList.add("correct");
    feedbackEl.textContent = `❌ Not quite. ${q.explanation}`;
    feedbackEl.className = "quiz-feedback incorrect";
  }

  if (currentQuestion < quizQuestions.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    setTimeout(showResult, 1000);
  }
}

// Show quiz result
function showResult() {
  document.getElementById("quiz-question-wrap").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";
  document.getElementById("quiz-score").textContent = `${score} out of ${quizQuestions.length}`;

  const msg = score === quizQuestions.length
    ? "Perfect score! You're a pet care expert! 🏆"
    : score >= 3
    ? "Great job! Your pets are lucky to have you. 🐾"
    : "Keep learning — your pets will thank you! 💚";

  document.getElementById("quiz-message").textContent = msg;
  localStorage.setItem("lastQuizScore", score);
}

// Setup quiz
function setupQuiz() {
  const nextBtn = document.getElementById("quiz-next");
  const restartBtn = document.getElementById("quiz-restart");
  if (!document.getElementById("quiz-question")) return;

  loadQuestion();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      loadQuestion();
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      answered = false;
      document.getElementById("quiz-result").style.display = "none";
      document.getElementById("quiz-question-wrap").style.display = "block";
      loadQuestion();
    });
  }
}

// Visit counter using localStorage on care page
function trackVisits() {
  const msgEl = document.getElementById("visit-message");
  if (!msgEl) return;
  let visits = localStorage.getItem("carePageVisits");
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem("carePageVisits", visits);

  if (visits === 1) {
    msgEl.textContent = "Welcome! This is your first visit to our Care Guide. 🐾";
  } else {
    msgEl.textContent = `Welcome back! You have visited this page ${visits} times.`;
  }
}

// Contact form submission
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("form-confirmation");
  const confirmMsg = document.getElementById("confirmation-message");
  const resetBtn = document.getElementById("reset-btn");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("owner-name").value;
    const pet = document.getElementById("pet-type").value;
    confirmMsg.textContent = `Thank you, ${name}! We received your message about your ${pet}. We'll get back to you soon. 🐾`;
    form.style.display = "none";
    confirmation.style.display = "block";
    localStorage.setItem("lastContact", name);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      form.style.display = "block";
      confirmation.style.display = "none";
    });
  }
}

// Hamburger menu toggle
function setupHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

// Footer year
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

// Last Modified
function setLastModified() {
  const el = document.getElementById("last-modified");
  if (!el) return;
  const now = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  el.textContent = now.toLocaleString("en-US", options);
}

// ── RUN ALL ──
renderCareCards();
renderTips();
renderGuideCards();
setupFilterButtons();
setupQuiz();
trackVisits();
setupContactForm();
setupHamburger();
setFooterYear();
setLastModified();