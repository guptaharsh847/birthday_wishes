/**
 * ============================================================================
 * BEST SISTER EVER — INTERACTIVE BIRTHDAY EXPERIENCE
 * ============================================================================
 * Easily personalize your sister's surprise below.
 */

const CONFIG = {
  // Sister's Details
  sisterName: "Behna",
  senderName: "Your Bhai",

  // Important Dates (YYYY-MM-DD format)
  birthdayDate: "2026-11-25",
  metDate: "2019-06-25",

  // Music Settings (Provide your own audio file inside ./assets/music/)
  songTitle: "Happy Birthday, Behna",
  songFile: "./assets/music/birthday-song.mp3", // Falls back gracefully to Web Audio synth if not present

  // Secret Easter Egg Message (5 clicks on intro heart)
  secretEasterEggMessage: "Of course you found it. Nothing ever escapes you — not my secrets, not my excuses, not the last piece of chocolate. Best sister ever, officially certified. 🏆",

  // Personal Letter
  loveLetter: `Ever since we met on 25th June 2019, life has had a lot more laughter, a lot more fights over silly things, and one more person always looking out for me.

Thank you for listening to my nonsense, for scolding me when I needed it, for defending me when I didn't deserve it, and for always being on my side no matter what.

You are not just my sister — you are my best friend, my partner in crime, and the one person I can always count on.

On your birthday, I just want you to know how proud I am of you and how lucky I feel to have you. I hope this year brings you everything you've been wishing for, and a little extra.

Happy Birthday, Behna. Whatever happens, your Bhai is always right here.`,

  // 12 Reasons Why You're The Best Sister Ever
  reasons: [
    "You always know when something is wrong, even before I say a word.",
    "You defend me in front of everyone — and then scold me in private.",
    "Your laugh can fix even my worst day.",
    "You give the best advice (even if I pretend not to listen).",
    "You keep all my secrets safe. Mostly. 😏",
    "Because every ordinary day becomes a story with you around.",
    "You push me to become a better version of myself.",
    "You share your food with me… sometimes.",
    "You are my sister and my best friend, both at once.",
    "You never let me feel alone, no matter how far we are.",
    "Your patience with me deserves an award.",
    "Simply because you are you — and nobody else could do this job."
  ],

  // Date-wise Journey Timeline
  journey: [
    {
      date: "2019-06-25",
      title: "The Day We Met",
      category: "beginning",
      icon: "✨",
      shortText: "The day I found the sister I never knew I needed.",
      story: "25th June 2019 — the day it all started. Neither of us knew then that this would turn into one of the most special bonds of my life.",
      location: "",
      highlight: true
    },
    {
      date: "2021-01-01",
      title: "Endless Chats & Gossip",
      category: "memory",
      icon: "💬",
      shortText: "Hours of talking about everything and nothing.",
      story: "Random calls, late-night gossip sessions, and voice notes that were way too long. Every single one of them is a memory I treasure.",
      location: "",
      highlight: false
    },
    {
      date: "2023-01-01",
      title: "The Fights That Made Us Closer",
      category: "funny",
      icon: "😂",
      shortText: "We fight like cats, and make up in five minutes.",
      story: "Silly arguments, dramatic silent treatments, and then instantly laughing about it. That's what siblings do best.",
      location: "",
      highlight: false
    },
    {
      date: "2026-11-25",
      title: "Your Birthday, Today!",
      category: "bond",
      icon: "🎂",
      shortText: "Seven years of us — and many more to go.",
      story: "Another year of you being the best sister ever. Here's to every memory we've made since 2019, and all the ones still waiting for us.",
      location: "",
      highlight: true
    }
  ],

  // 12 Interactive Gifts Definitions
  gifts: [
    { id: 1, title: "Reasons You're The Best", subtitle: "Tap the glowing heart", icon: "💖", type: "reasons" },
    { id: 2, title: "Our Memory Reel", subtitle: "Our candid captures", icon: "📸", type: "gallery_shortcut" },
    { id: 3, title: "Things I Love About You", subtitle: "Interactive flip cards", icon: "✨", type: "flipcards" },
    { id: 4, title: "If You Were A…", subtitle: "Sister comparisons", icon: "🌸", type: "metaphors" },
    { id: 5, title: "Open When…", subtitle: "Notes for every mood", icon: "💌", type: "open_when" },
    { id: 6, title: "Favorite Moments", subtitle: "Special highlights", icon: "⭐", type: "fav_photos" },
    { id: 7, title: "Our Timeline", subtitle: "Every moment since 2019", icon: "⏳", type: "timeline_shortcut" },
    { id: 8, title: "What Makes You Special", subtitle: "Your unique qualities", icon: "💎", type: "qualities" },
    { id: 9, title: "Things To Do Together", subtitle: "Plans yet to come", icon: "🗺️", type: "future_shortcut" },
    { id: 10, title: "A Letter From Bhai", subtitle: "Everything I never say", icon: "📜", type: "letter_shortcut" },
    { id: 11, title: "My Birthday Wish For You", subtitle: "From the bottom of my heart", icon: "🎂", type: "bday_wish" },
    { id: 12, title: "The Grand Surprise", subtitle: "Your final gift", icon: "🎁", type: "finale_trigger" }
  ],

  // "Open When..." Messages
  openWhenMessages: [
    { mood: "Open when you miss your Bhai 🥺", text: "I'm only one call away. Call me — I'll even let you win the argument this time." },
    { mood: "Open when you're feeling sad 🌧️", text: "You are stronger than you think, and you never have to face anything alone. Your Bhai has your back, always." },
    { mood: "Open when you need a smile 😊", text: "Remember all the times we laughed until our stomachs hurt? There are a lot more of those coming. Smile, Behna!" },
    { mood: "Open when you're angry with me 🙈", text: "Okay, okay, I'm sorry. Whatever it was, it was probably my fault. Can I fix it with your favourite food?" }
  ],

  // Future Plans
  futurePlans: [
    { icon: "✈️", title: "A Sibling Trip Together", desc: "Just us, a long road, loud music and way too many snacks." },
    { icon: "🍕", title: "Midnight Food Runs", desc: "Street food, ice cream and gossip until 2 AM." },
    { icon: "🎉", title: "Celebrate Every Win Together", desc: "Your success, my success — we celebrate everything loudly." },
    { icon: "🤝", title: "Always Being There", desc: "Every birthday, every milestone, every bad day — I'll be there." }
  ],

  // Photos (Replace with your own in /assets/images/)
  photos: [
    { url: "./assets/images/1.jpg", caption: "Best sister ever 💖" },
    { url: "./assets/images/4.jpg", caption: "Partners in crime 😎" },
    { url: "./assets/images/2.jpg", caption: "Memories I'll never forget ✨" },
    { url: "./assets/images/5.jpg", caption: "That smile 😊" },
    { url: "./assets/images/3.jpg", caption: "Siblings against the world 🌙" },
    { url: "./assets/images/6.jpg", caption: "To many more memories 🥂" }
  ]
};

/**
 * ============================================================================
 * STATE & WEB AUDIO SYNTHESIZER
 * ============================================================================
 */
let synthPlaying = false;
let audioCtx = null;
let currentReasonIndex = 0;
let easterEggClicks = 0;
let currentLightboxIndex = 0;

// Web Audio Synthesizer fallback melody
function playBirthdaySynthMelody() {
  if (synthPlaying) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();
    synthPlaying = true;

    // Soft pentatonic arpeggio notes (Hz)
    const melody = [261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63];
    let noteIdx = 0;

    const interval = setInterval(() => {
      if (!synthPlaying || !audioCtx) {
        clearInterval(interval);
        return;
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(melody[noteIdx % melody.length], audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.9);

      noteIdx++;
    }, 1400);
  } catch (e) {
    console.warn("Audio synthesis restricted:", e);
  }
}

/**
 * ============================================================================
 * CORE INITIALIZATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  loadSavedData();
  applyPersonalization();
  initAmbientParticles();
  initIntroSequence();
  initCountdownAndStats();
  initJourneyTimeline();
  initGiftsGrid();
  initGallery();
  initFutureList();
  initMusicSystem();
  initModals();
  initScrollAnimations();
});

function applyPersonalization() {
  document.querySelectorAll(".sister-name-text").forEach(el => {
    el.textContent = CONFIG.sisterName;
  });
  document.getElementById("senderSignature").textContent = `${CONFIG.senderName} 💖`;
  document.getElementById("letterBody").textContent = CONFIG.loveLetter;
  document.getElementById("playerSongTitle").textContent = CONFIG.songTitle;
}

/**
 * Ambient Glowing Particle Background
 */
function initAmbientParticles() {
  const canvas = document.getElementById("ambientCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedY = Math.random() * -0.4 - 0.1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.isHeart = Math.random() > 0.85;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < 0) this.reset();
    }
    draw() {
      ctx.fillStyle = `rgba(244, 166, 183, ${this.opacity})`;
      if (this.isHeart) {
        ctx.font = `${this.size * 5}px serif`;
        ctx.fillText("❤️", this.x, this.y);
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  for (let i = 0; i < 40; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/**
 * Opening Sequence & Easter Egg
 */
function initIntroSequence() {
  const introOverlay = document.getElementById("introOverlay");
  const enterBtn = document.getElementById("enterSurpriseBtn");
  const easterEggHeart = document.getElementById("easterEggHeart");

  setTimeout(() => {
    introOverlay.classList.add("active");
  }, 150);

  enterBtn.addEventListener("click", () => {
    introOverlay.classList.add("fade-out");
    document.body.classList.remove("is-locked");
    document.getElementById("mainNav").classList.remove("hidden");
    document.getElementById("musicPlayer").classList.remove("hidden");
    startAudio();

    if (window.confetti) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  });

  easterEggHeart.addEventListener("click", () => {
    easterEggClicks++;
    if (easterEggClicks >= 5) {
      easterEggClicks = 0;
      document.getElementById("secretModalText").textContent = CONFIG.secretEasterEggMessage;
      document.getElementById("easterEggModal").classList.remove("hidden");
    }
  });
}

/**
 * Music System
 */
function initMusicSystem() {
  const audio = document.getElementById("bgAudio");
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const equalizer = document.getElementById("equalizer");
  const volumeSlider = document.getElementById("volumeSlider");

  audio.src = CONFIG.songFile;
  audio.volume = 0.7;

  musicToggleBtn.addEventListener("click", () => {
    if (audio.paused && !synthPlaying) {
      startAudio();
      equalizer.classList.remove("paused");
    } else {
      audio.pause();
      synthPlaying = false;
      equalizer.classList.add("paused");
    }
  });

  volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
  });
}

function startAudio() {
  const audio = document.getElementById("bgAudio");
  const equalizer = document.getElementById("equalizer");

  audio.play().then(() => {
    equalizer.classList.remove("paused");
  }).catch(() => {
    // If local mp3 is not yet supplied, synthesize a soft melody
    playBirthdaySynthMelody();
    equalizer.classList.remove("paused");
  });
}

/**
 * Countdown & Days-Since-We-Met Calculator
 */
function initCountdownAndStats() {
  function updateTimer() {
    const now = new Date();
    const bday = new Date(CONFIG.birthdayDate.trim() + "T00:00:00");
    
    // Set to current year
    bday.setFullYear(now.getFullYear());
    if (now > bday && (now.getDate() !== bday.getDate() || now.getMonth() !== bday.getMonth())) {
      bday.setFullYear(now.getFullYear() + 1);
    }

    const diffMs = bday - now;
    const isToday = now.getDate() === bday.getDate() && now.getMonth() === bday.getMonth();

    if (isToday) {
      document.getElementById("countdownGrid").classList.add("hidden");
      document.getElementById("bdayTodayNotice").classList.remove("hidden");
      document.getElementById("countdownHeader").textContent = "TODAY IS THE DAY! 🎂";
    } else {
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      document.getElementById("cdDays").textContent = String(days).padStart(2, "0");
      document.getElementById("cdHours").textContent = String(hours).padStart(2, "0");
      document.getElementById("cdMinutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("cdSeconds").textContent = String(seconds).padStart(2, "0");
    }

    // Since-We-Met Stats
    const relStart = new Date(CONFIG.metDate);
    const relDiff = Math.max(0, now - relStart);
    const totalDays = Math.floor(relDiff / (1000 * 60 * 60 * 24));
    const totalMonths = Math.floor(totalDays / 30.4375);
    const totalHours = totalDays * 24;

    document.getElementById("cntDays").textContent = totalDays.toLocaleString();
    document.getElementById("cntMonths").textContent = totalMonths.toLocaleString();
    document.getElementById("cntHours").textContent = totalHours.toLocaleString();
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * Timeline Rendering & Filtering
 */
function initJourneyTimeline() {
  const container = document.getElementById("timelineContainer");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function render(filter = "all") {
    container.innerHTML = "";
    const filtered = filter === "all" ? CONFIG.journey : CONFIG.journey.filter(j => j.category === filter);

    filtered.forEach((item, index) => {
      const isLeft = index % 2 === 0;
      const el = document.createElement("div");
      el.className = `timeline-event ${isLeft ? "left" : "right"} ${item.highlight ? "highlight" : ""}`;

      const dateObj = new Date(item.date);
      const formattedDate = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      const durationStr = calculateRelativeTime(item.date);

      el.innerHTML = `
        <div class="timeline-node">${item.icon || "💖"}</div>
        <div class="timeline-card">
          <div class="event-date-row">
            <span>📅 ${formattedDate}</span>
            <span class="event-duration">(${durationStr})</span>
          </div>
          <h3 class="event-title">${item.title}</h3>
          <p class="event-short">${item.shortText}</p>
          <div class="event-meta">
            ${item.location ? `<span>📍 ${item.location}</span>` : ""}
            <span>✨ Tap to read story</span>
          </div>
        </div>
      `;

      el.querySelector(".timeline-card").addEventListener("click", () => {
        openStoryModal(item, formattedDate, durationStr);
      });

      container.appendChild(el);
    });

    initScrollAnimations();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  render("all");
}

function calculateRelativeTime(dateStr) {
  const target = new Date(dateStr);
  const now = new Date();
  if (target > now) return "Coming soon…";
  const diffDays = Math.floor((now - target) / (1000 * 60 * 60 * 24));
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30.43);
  if (diffMonths < 12) return `${diffMonths} months ago`;
  const diffYears = (diffDays / 365.25).toFixed(1);
  return `${diffYears} years ago`;
}

/**
 * 12 Interactive Gifts Logic
 */
function initGiftsGrid() {
  const grid = document.getElementById("giftsGrid");
  grid.innerHTML = "";

  CONFIG.gifts.forEach(gift => {
    const card = document.createElement("div");
    card.className = "gift-card";
    card.innerHTML = `
      <span class="gift-number-badge">#${String(gift.id).padStart(2, "0")}</span>
      <div class="gift-icon">${gift.icon}</div>
      <h3 class="gift-title">${gift.title}</h3>
      <p class="gift-subtitle">${gift.subtitle}</p>
      <span class="gift-action-hint">Tap to Open</span>
    `;

    card.addEventListener("click", () => handleGiftClick(gift));
    grid.appendChild(card);
  });
}

function handleGiftClick(gift) {
  const modal = document.getElementById("giftModal");
  const content = document.getElementById("giftModalContent");

  switch(gift.type) {
    case "reasons":
      content.innerHTML = `
        <div class="reason-tap-area">
          <span class="gold-badge">REASONS YOU'RE THE BEST</span>
          <div class="reason-display-box">
            <span class="reason-number">Reason #${String(currentReasonIndex + 1).padStart(2, '0')}</span>
            <p class="reason-text" id="liveReasonText">"${CONFIG.reasons[currentReasonIndex]}"</p>
          </div>
          <div class="interactive-big-heart" id="tapHeartBtn">💖</div>
          <p class="sub-help">Tap the heart for another reason 💖</p>
        </div>
      `;
      document.getElementById("tapHeartBtn").addEventListener("click", () => {
        currentReasonIndex = (currentReasonIndex + 1) % CONFIG.reasons.length;
        document.getElementById("liveReasonText").textContent = `"${CONFIG.reasons[currentReasonIndex]}"`;
        document.querySelector(".reason-number").textContent = `Reason #${String(currentReasonIndex + 1).padStart(2, '0')}`;
        if (window.confetti) confetti({ particleCount: 20, spread: 40, origin: { y: 0.7 } });
      });
      break;

    case "flipcards":
      content.innerHTML = `
        <h3>Things I Love About You</h3>
        <p class="sub-help">Tap each card to flip and discover.</p>
        <div class="flip-cards-grid">
          ${["Your Smile 😊", "Your Care 🌸", "Your Laugh 😂", "Your Big Heart 💖", "Your Advice 🧠", "Your Drama 🎭"].map((trait, i) => `
            <div class="flip-card" onclick="this.classList.toggle('is-flipped')">
              <div class="flip-card-inner">
                <div class="flip-front">Card #${i+1} 🎁</div>
                <div class="flip-back">${trait}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
      break;

    case "metaphors":
      content.innerHTML = `
        <h3>If You Were A…</h3>
        <ul style="list-style: none; margin-top: 15px; display:flex; flex-direction:column; gap:12px;">
          <li>🎵 <strong>A Song:</strong> You'd be the one I can never skip.</li>
          <li>🏡 <strong>A Place:</strong> You'd be home — loud, chaotic and the safest place ever.</li>
          <li>📱 <strong>A Notification:</strong> You'd be the 47 missed calls I'm always happy to see.</li>
          <li>🛡️ <strong>A Superhero:</strong> You'd be the one who saves me and then roasts me for it.</li>
        </ul>
      `;
      break;

    case "open_when":
      content.innerHTML = `
        <h3>Open When Letters</h3>
        <p class="sub-help">Whenever your heart needs a little reminder.</p>
        <div class="envelope-list">
          ${CONFIG.openWhenMessages.map((msg, i) => `
            <div class="envelope-btn" onclick="alert('${msg.text.replace(/'/g, "\\'")}')">
              <span>${msg.mood}</span>
              <span>✉️ Read</span>
            </div>
          `).join("")}
        </div>
      `;
      break;

    case "bday_wish":
      content.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <span style="font-size: 3.5rem;">🎂</span>
          <h2 style="color: var(--gold); margin: 15px 0;">My Birthday Wish For You</h2>
          <p style="font-size: 1.15rem; line-height: 1.7;">May this year bring you endless happiness, good health, big wins and even bigger smiles. May every dream you have come true — and may you never forget that your Bhai is always cheering for you, loudest of all.</p>
        </div>
      `;
      break;

    case "gallery_shortcut":
    case "fav_photos":
      document.querySelector("#gallery").scrollIntoView({ behavior: "smooth" });
      return;

    case "timeline_shortcut":
      document.querySelector("#journey").scrollIntoView({ behavior: "smooth" });
      return;

    case "future_shortcut":
      document.querySelector("#future").scrollIntoView({ behavior: "smooth" });
      return;

    case "letter_shortcut":
      document.querySelector("#letter").scrollIntoView({ behavior: "smooth" });
      return;

    case "finale_trigger":
      triggerGrandFinale();
      return;

    default:
      content.innerHTML = `<h3>${gift.title}</h3><p style="margin-top:15px;">${gift.subtitle}</p>`;
  }

  modal.classList.remove("hidden");
}

/**
 * Gallery Lightbox
 */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  CONFIG.photos.forEach((photo, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    const rotation = (idx % 2 === 0 ? 1 : -1) * (Math.random() * 3 + 1);
    card.style.setProperty("--rot", `${rotation}deg`);

    card.innerHTML = `
      <img src="${photo.url}" alt="Memory photo" loading="lazy" />
      <div class="polaroid-caption">${photo.caption}</div>
    `;

    card.addEventListener("click", () => openLightbox(idx));
    grid.appendChild(card);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  img.src = CONFIG.photos[index].url;
  caption.textContent = CONFIG.photos[index].caption;
  modal.classList.remove("hidden");
}

/**
 * Future Bucket List
 */
function initFutureList() {
  const grid = document.getElementById("futureGrid");
  grid.innerHTML = "";

  CONFIG.futurePlans.forEach(plan => {
    const item = document.createElement("div");
    item.className = "future-item";
    item.innerHTML = `
      <div class="future-item-icon">${plan.icon}</div>
      <div>
        <h4 class="future-item-title">${plan.title}</h4>
        <p class="future-item-desc">${plan.desc}</p>
      </div>
    `;
    grid.appendChild(item);
  });
}

/**
 * Grand Finale Cinematic Reveal
 */
function triggerGrandFinale() {
  const overlay = document.getElementById("finaleOverlay");
  overlay.classList.remove("hidden");

  // Start Fireworks Canvas
  initFireworks();

  // Slide Show
  let slideIndex = 0;
  const slideImg = document.getElementById("finaleSlideImg");
  const slideCaption = document.getElementById("finaleSlideCaption");

  function nextSlide() {
    if (CONFIG.photos.length === 0) return;
    slideImg.style.opacity = "0";
    setTimeout(() => {
      slideImg.src = CONFIG.photos[slideIndex].url;
      slideCaption.textContent = CONFIG.photos[slideIndex].caption;
      slideImg.style.opacity = "1";
      slideIndex = (slideIndex + 1) % CONFIG.photos.length;
    }, 400);
  }
  nextSlide();
  setInterval(nextSlide, 3500);

  // Sequenced Text Reveal
  setTimeout(() => { document.getElementById("finLine1").style.opacity = "1"; }, 800);
  setTimeout(() => { document.getElementById("finLine2").style.opacity = "1"; }, 2500);
  setTimeout(() => { document.getElementById("finLine3").style.opacity = "1"; }, 4500);

  if (window.confetti) {
    const end = Date.now() + 6 * 1000;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({ startVelocity: 30, spread: 360, ticks: 60, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 400);
  }
}

function initFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let sparks = [];

  class Spark {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 5 + 1;
      this.friction = 0.96;
      this.gravity = 0.04;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.01;
    }
    update() {
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function launchFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.6);
    const colors = ["#dfb15b", "#b83350", "#f4a6b7", "#ffffff", "#ffd700"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 35; i++) {
      sparks.push(new Spark(x, y, color));
    }
  }

  setInterval(launchFirework, 700);

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks = sparks.filter(s => s.alpha > 0);
    sparks.forEach(s => {
      s.update();
      s.draw();
    });
    requestAnimationFrame(render);
  }
  render();
}

/**
 * Modals & Interaction Listeners
 */
function initModals() {
  // Story Milestone Modal
  document.getElementById("closeStoryModal").addEventListener("click", () => {
    document.getElementById("storyModal").classList.add("hidden");
  });

  // Gift Modal
  document.getElementById("closeGiftModal").addEventListener("click", () => {
    document.getElementById("giftModal").classList.add("hidden");
  });

  // Lightbox Navigation
  document.getElementById("closeLightbox").addEventListener("click", () => {
    document.getElementById("lightboxModal").classList.add("hidden");
  });
  document.getElementById("lbPrevBtn").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
    openLightbox(currentLightboxIndex);
  });
  document.getElementById("lbNextBtn").addEventListener("click", () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.photos.length;
    openLightbox(currentLightboxIndex);
  });

  // Easter Egg Modal
  document.getElementById("closeEasterEgg").addEventListener("click", () => {
    document.getElementById("easterEggModal").classList.add("hidden");
  });

  // Finale Triggers
  document.getElementById("triggerFinaleBtn").addEventListener("click", triggerGrandFinale);
  document.getElementById("closeFinaleBtn").addEventListener("click", () => {
    document.getElementById("finaleOverlay").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Customizer Trigger
  const custModal = document.getElementById("customizerModal");
  document.getElementById("openCustomizerBtn").addEventListener("click", () => {
    document.getElementById("custName").value = CONFIG.sisterName;
    document.getElementById("custRelDate").value = CONFIG.metDate;
    document.getElementById("custBdayDate").value = CONFIG.birthdayDate;
    custModal.classList.remove("hidden");
  });
  document.getElementById("closeCustomizer").addEventListener("click", () => custModal.classList.add("hidden"));

  // Customizer Live Form Submission
  document.getElementById("customizerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    CONFIG.sisterName = document.getElementById("custName").value || CONFIG.sisterName;
    CONFIG.metDate = document.getElementById("custRelDate").value || CONFIG.metDate;
    CONFIG.birthdayDate = document.getElementById("custBdayDate").value || CONFIG.birthdayDate;

    // Handle local song upload preview
    const songFile = document.getElementById("custSongFile").files[0];
    if (songFile) {
      const url = URL.createObjectURL(songFile);
      document.getElementById("bgAudio").src = url;
      document.getElementById("playerSongTitle").textContent = songFile.name.replace(/\.[^/.]+$/, "");
    }

    // Handle local photo files preview
    const photoFiles = document.getElementById("custPhotos").files;
    if (photoFiles && photoFiles.length > 0) {
      CONFIG.photos = Array.from(photoFiles).map((file, i) => ({
        url: URL.createObjectURL(file),
        caption: `Special Memory #${i+1} 💖`
      }));
      initGallery();
    }

    applyPersonalization();
    initCountdownAndStats();
    saveDataLocally();
    custModal.classList.add("hidden");
  });

  document.getElementById("resetCustomizerBtn").addEventListener("click", () => {
    localStorage.removeItem("sister_birthday_cfg");
    location.reload();
  });
}

function openStoryModal(item, formattedDate, durationStr) {
  const content = document.getElementById("storyModalContent");
  content.innerHTML = `
    <span class="gold-badge">${item.category.toUpperCase()}</span>
    <h2 style="font-size: 2rem; color: var(--gold); margin: 8px 0;">${item.title}</h2>
    <p style="font-size: 0.9rem; color: var(--blush); margin-bottom: 15px;">📅 ${formattedDate} (${durationStr}) ${item.location ? `• 📍 ${item.location}` : ""}</p>
    <div style="font-size: 1.15rem; line-height: 1.8; color: var(--ivory);">${item.story}</div>
  `;
  document.getElementById("storyModal").classList.remove("hidden");
}

/**
 * Scroll Trigger Animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".timeline-event").forEach(el => observer.observe(el));
}

/**
 * Local Storage Persistence (Optional Browser-Side Feature)
 */
function saveDataLocally() {
  try {
    const dataToSave = {
      sisterName: CONFIG.sisterName,
      birthdayDate: CONFIG.birthdayDate,
      metDate: CONFIG.metDate
    };
    localStorage.setItem("sister_birthday_cfg", JSON.stringify(dataToSave));
  } catch(e) {
    console.warn("Storage not available:", e);
  }
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem("sister_birthday_cfg");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.sisterName) CONFIG.sisterName = parsed.sisterName;
      if (parsed.birthdayDate) CONFIG.birthdayDate = parsed.birthdayDate;
      if (parsed.metDate) CONFIG.metDate = parsed.metDate;
    }
  } catch(e) {
    console.warn("Could not load local storage data:", e);
  }
}