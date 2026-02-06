// ===== QUESTIONS =====
const questions = [
  {
    q: "You wake inside ancient castle ruins. What do you pick up first?",
    a: "My sword",
    b: "The little locket",
    gif: "images/q1.gif",
    wrongText: "You tried to grab the sword, but tripped over a loose stone… and I had to catch you before you landed on your face. Try again!"
  },
  {
    q: "Two roads leave the gates. One safe, one through a dark forest. Which path do you choose?",
    a: "Safe road alone",
    b: "Forest path together",
    gif: "images/q2.gif",
    wrongText: "You took the safe road alone… and promptly got lost in a thicket of bushes. A little guidance (and hand-holding) would have helped!"
  },
  {
    q: "Fog fills the woods and you almost lose sight of me. What do you do?",
    a: "Keep walking",
    b: "Reach for your hand",
    gif: "images/q3.gif",
    wrongText: "You wandered ahead and bumped into a hidden tree trunk. I called out, but you didn’t hear me — maybe hold my hand next time!"
  },
  {
    q: "A witch offers to erase every awkward memory, but you'd forget our moments too. Choose:",
    a: "Forget everything",
    b: "Keep the memories",
    gif: "images/q4.gif",
    wrongText: "You said yes, but the spell backfired — now you’re stuck in a tiny bubble. Don’t worry, I’m here to pop it and let you try again!"
  },
  {
    q: "Rain pours down and there's only one cloak. What happens next?",
    a: "Keep it",
    b: "Share it",
    gif: "images/q5.gif",
    wrongText: "You tried to stay dry… and ended up splashing through a puddle. I’m here to help you try again!"
  },
  {
    q: "A small dragon guards the bridge and asks, 'What gives you courage?'",
    a: "My strength",
    b: "Someone by my side",
    gif: "images/q6.gif",
    wrongText: "You only said ‘strength’… and I had to nudge you to remember who you were protecting. Courage + me = better results!"
  },
  {
    q: "A lake shows two futures: exploring alone or sharing small adventures. Which feels right?",
    a: "Alone",
    b: "Together",
    gif: "images/q7.gif",
    wrongText: "You chose to go it alone, but the reflection startled you and I had to help you up. Maybe exploring together is smarter!"
  },
  {
    q: "A raven drops a note: 'Meet me where the stars shine brightest.' Where do you go?",
    a: "Town square",
    b: "Quiet star hill",
    gif: "images/q8.gif",
    wrongText: "You went to the noisy town square… and I had to shout to get your attention. The quiet hill might be a better idea!"
  },
  {
    q: "A glowing gate asks for a promise to open. What do you say?",
    a: "Chase glory",
    b: "Look out for you",
    gif: "images/q9.gif",
    wrongText: "You promised to chase glory, but the gate stayed closed. I was there cheering you on — maybe protecting me first will open it!"
  },
  {
    q: "The world grows quiet under the stars. I smile and ask one last thing…",
    a: "Head back alone",
    b: "Stay a little longer ❤️",
    gif: "images/q10.gif",
    wrongText: "You tried to leave alone… but I called out, and the path seemed to twist. Staying with me a little longer might be the right choice!"
  }
];


// ===== ELEMENTS =====
const bg = document.getElementById("bg");
const startBtn = document.getElementById("startBtn");
const home = document.getElementById("home");

const questionCard = document.getElementById("questionCard");
const questionText = document.getElementById("questionText");
const choicesWrap = document.getElementById("choices");
const progress = document.getElementById("progress");

const endCard = document.getElementById("endCard");
const messenger = document.getElementById("messenger");

const popCard = document.getElementById("popCard");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const celebrateCard = document.getElementById("celebrateCard");
const restart = document.getElementById("restart");

const deadCard = document.getElementById("deadCard");
const tryAgainBtn = document.getElementById("tryAgainBtn");

let index = 0;
let noCount = 0;


// ===== START =====
startBtn.onclick = () => {
  home.style.display = "none";
  questionCard.style.display = "block";
  showQuestion();
};


// ===== SHOW QUESTION =====
function showQuestion() {
  const q = questions[index];

  questionText.textContent = q.q;
  progress.textContent = `Question ${index + 1}/${questions.length}`;
  bg.style.backgroundImage = `url(${q.gif})`;

  choicesWrap.innerHTML = "";

["a","b"].forEach(letter=>{
  const btn = document.createElement("button");
  btn.className="choice";
  btn.textContent = q[letter];

  btn.onclick = () => {
    if(letter === "a") {
      deadCard.style.display = "block";
      questionCard.style.display = "none";
      document.getElementById("deadText").textContent = q.wrongText; 

    } else {
      nextQuestion();
    }
  };

  choicesWrap.appendChild(btn);
});
}


// ===== NEXT =====
function nextQuestion(){
  index++;

  if(index < questions.length){
    showQuestion();
  } else {
    questionCard.style.display="none";
    endCard.style.display="block";
  }
}


// ===== MESSENGER =====
messenger.onclick = ()=>{
  popCard.style.display="block";
};


// ===== YES =====
yesButton.onclick = ()=>{
  endCard.style.display="none";
  celebrateCard.style.display="flex";
};


// ===== NO BUTTON GROWS YES =====
noButton.onclick = ()=>{
  noCount++;
  const scale = 1 + noCount * 0.3;
  yesButton.style.transform = `scale(${scale})`;
};

tryAgainBtn.onclick = () => {
  deadCard.style.display = "none";
  questionCard.style.display = "block";
  showQuestion();
};


// ===== RESTART =====
restart.onclick = ()=>{
  location.reload();
};
