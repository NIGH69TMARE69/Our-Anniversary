
const questions = [
  {
    q: "What’s your ideal vibe today?",
    a: ["Walk in a nearby park 🌳", "Window shopping and momos 🥟", "Cycle ride to nowhere 🚲", "Just chill and talk ☕"]
  },
  {
    q: "Pick a food mood:",
    a: ["Street pani puri 🥵", "Shared Momos at a stall 🍜", "Ice cream from local shop 🍦", "Homemade snacks together 🍪"]
  },
  {
    q: "Which sounds the most fun?",
    a: ["Sitting on the terrace watching sky 🌇", "Drawing something silly Together🎨", "Exploring local Mela 🎡", "Browsing Movies in Theater 📚"]
  },
  {
    q: "What's your current energy level?",
    a: ["Let’s lie down and talk 🛏️", "Medium adventure mood 🧃", "Let’s walk all over the city 🏃"]
  },
  {
    q: "Who’s the bigger chaos goblin?",
    a: ["Me 🙃", "You 😈", "Both of us 💥"]
  }
];

let answers = [];

function nextStep(stepId) {
  document.querySelectorAll('.question').forEach(el => el.classList.remove('active'));
  if (stepId.startsWith('quiz')) {
    loadQuestion(0);
  } else {
    const step = document.getElementById(stepId);
    if (step) step.classList.add('active');
    if (stepId === 'step2') document.getElementById('bgMusic').play();
  }
}

function loadQuestion(index) {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';
  const questionBlock = document.createElement('div');
  questionBlock.id = `quiz${index}`;
  questionBlock.className = 'question active';

  const gif = document.createElement('div');
  gif.className = 'gif';
  const gifUrls = [
    "https://media1.tenor.com/m/g-0kpbTXs6IAAAAC/couple.gif",
    "https://media.tenor.com/f0hc7ZusCv4AAAAM/lily-and-marigold.gif",
    "https://media.tenor.com/d-lz7Nu6X2oAAAAM/bocchi-the-rock-bocchi.gif",
    "https://media.tenor.com/r8iIbf4ZJeUAAAAm/couple-bed.webp",
    "https://media.tenor.com/0LTcorhYku8AAAAm/anime-love.webp"
  ];
  const gifIndex = index % gifUrls.length;
  gif.innerHTML = `<img src="${gifUrls[gifIndex]}" alt="cute gif" width="75%" />`;
  questionBlock.appendChild(gif);

  const q = questions[index];
  const qEl = document.createElement('h2');
  qEl.textContent = q.q;
  questionBlock.appendChild(qEl);

  q.a.forEach(ans => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.onclick = () => {
      answers[index] = ans;
      if (index + 1 < questions.length) {
        loadQuestion(index + 1);
      } else {
        showResult();
      }
    };
    questionBlock.appendChild(btn);
  });

  container.appendChild(questionBlock);
}

function showResult() {
  const suggestions = [
    "an ice cream walk in the evening 🍦🚶",
    "shared Maggi under the stars 🍜✨",
    "just lying on the terrace stargazing 🌌",
    "a cozy bookstore date 📚💕",
    "a pani puri battle near college 🥵🔥",
    "a silly drawing challenge at home 🎨💖"
  ];
  const pick = suggestions[Math.floor(Math.random() * suggestions.length)];
  const dateText = `You deserve ${pick} ❤️<br><br><em>You light up my life in ways I never imagined. Thank you for being you and being in my life.</em>`;
  const selectedAnswers = answers.map(ans => `<li>${ans}</li>`).join('');
  document.getElementById('dateIdea').innerHTML = `${dateText}<br><br><strong>Our Date Plan:</strong><ul style="text-align:left">${selectedAnswers}</ul>`;
  nextStep('result');
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('quizContainer');
  const firstQ = document.createElement('div');
  firstQ.id = 'quiz0';
  container.appendChild(firstQ);
});
