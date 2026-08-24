/**
 * ============================================================================
 * ROMANTIC INTERACTIVE BIRTHDAY EXPERIENCE
 * ============================================================================
 * Easily personalize your girlfriend's surprise below.
 */

const CONFIG = {
  // Girlfriend's Details
  girlfriendName: "Megha",
  senderName: "Yours Forever",
  
  // Important Dates (YYYY-MM-DD format)
  birthdayDate: "2026-08-27 ",
  relationshipStartDate: "2021-02-27",

  // Music Settings (Provide your own audio file inside ./assets/music/)
  songTitle: "Our Romantic Song",
  songFile: "./assets/music/birthday-song.mp3", // Fallbacks gracefully to Web Audio synth if not present

  // Secret Easter Egg Message (5 clicks on intro heart)
  secretEasterEggMessage: "You noticed the little heart pulse! You have this uncanny superpower of noticing every tiny thing I do. I love you to pieces.",

  // Personal Love Letter
  loveLetter: `From the very first conversation we had, I knew there was something profoundly different about you. You bring this effortless warmth, grace, and light into every single day.

Thank you for laughing at my terrible jokes, for holding my hand when things get overwhelming, and for being my safest sanctuary in this busy world.

On your birthday, I want to remind you how deeply treasured, admired, and loved you are. I hope this year brings you all the dreams you hold closest to your heart.

Happy Birthday, my love. Today and every tomorrow, I'm right beside you.`,

  // 12 Reasons Why I Love You (Expandable)
  reasons: [
    "The way your eyes light up when you're genuinely excited.",
    "How safe and completely at home I feel whenever I hold you.",
    "Your sweet, infectious laugh that turns my worst days around.",
    "How deeply and thoughtfully you care about people.",
    "The cute little habits you do when you think nobody is watching.",
    "Because ordinary days feel like extraordinary adventures with you.",
    "How you inspire me every single day to be a better person.",
    "The warmth of your hand inside mine when we walk.",
    "Because you are both my greatest love and my closest best friend.",
    "The way you look at me when you think I don't notice.",
    "Your incredible patience, kindness, and boundless empathy.",
    "Simply because you are unconditionally you."
  ],

  qualities: [
    "You make every room feel warmer just by being in it.",
    "Your kindness is quiet, genuine, and impossible to forget.",
    "You notice the little things that everyone else misses.",
    "You are strong enough to face hard days and gentle enough to keep your heart soft.",
    "Your honesty makes me feel safe to be completely myself.",
    "You turn ordinary moments into memories I want to keep forever."
  ],

  // Date-wise Relationship Journey Timeline
  journey: [
    {
      date: "2021-05-28",
      title: "The Day Our Paths Crossed",
      category: "beginning",
      icon: "✨",
      shortText: "The day destiny quietly changed my entire world forever.",
      story: "We had no idea that a casual hello would turn into the most meaningful chapter of our lives.",
      location: "Instagram",
      highlight: false
    },
    {
      date: "2021-06-16",
      title: "Our First Late-Night Call",
      category: "memory",
      icon: "📞",
      shortText: "We talked until 1 AM and neither of us wanted to hang up.",
      story: "Time completely disappeared as we shared our favorite childhood memories, random secrets, and listened to each other laugh.",
      location: "On Mute Video Call",
      highlight: false
    },
    {
      date: "2022-02-27",
      title: "The Day We Became Us",
      category: "relationship",
      icon: "💑",
      shortText: "The official start of our beautiful forever.",
      story: "Looking into your eyes, everything felt clear and effortless. Asking you to be mine was the easiest and best decision I ever made.",
      location: "Krishna Cafe",
      highlight: true
    },
    {
      date: "2022-06-11",
      title: "Our First Spontaneous Meet",
      category: "travel",
      icon: "✈️",
      shortText: "Exploring new horizons with my favorite love partner.",
      story: "Getting lost together, sharing roadside pizza, giving you the ring, and meeting after 1 year.",
      location: "Sawai Madhopur",
      highlight: false
    },
    {
      date: "2023-02-12",
      title: "The Impossible Meeting Fit",
      category: "funny",
      icon: "😂",
      shortText: "When we meet hiding in mall.",
      story: "We couldn't stop hiding over the mall little thing and your didi caught you but you escape.",
      location: "Bhopal",
      highlight: false
    }
  ],

  // 12 Interactive Gifts Definitions
  gifts: [
    { id: 1, title: "A Thousand Reasons", subtitle: "Tap the glowing heart", icon: "💖", type: "reasons" },
    { id: 2, title: "Our Memory Reel", subtitle: "Our candid captures", icon: "📸", type: "gallery_shortcut" },
    { id: 3, title: "Things I Love", subtitle: "Interactive flip cards", icon: "✨", type: "flipcards" },
    { id: 4, title: "If You Were A…", subtitle: "Romantic comparisons", icon: "🌸", type: "metaphors" },
    { id: 5, title: "Open When…", subtitle: "Letters for every mood", icon: "💌", type: "open_when" },
    { id: 6, title: "Favorite Moments", subtitle: "Special highlights", icon: "⭐", type: "fav_photos" },
    { id: 7, title: "Our Timeline", subtitle: "Every milestone we crossed", icon: "⏳", type: "timeline_shortcut" },
    { id: 8, title: "What Makes You Special", subtitle: "Your unique qualities", icon: "💎", type: "qualities" },
    { id: 9, title: "Our Future Adventures", subtitle: "Dreams yet to come", icon: "🗺️", type: "future_shortcut" },
    { id: 10, title: "My Handwritten Letter", subtitle: "Everything in my heart", icon: "📜", type: "letter_shortcut" },
    { id: 11, title: "My Birthday Wish For You", subtitle: "From the depths of my heart", icon: "🎂", type: "bday_wish" },
    { id: 12, title: "The Grand Surprise", subtitle: "Your final gift", icon: "🎁", type: "finale_trigger" }
  ],

  // "Open When..." Messages
  openWhenMessages: [
    { mood: "Open when you're missing me 🥺", text: "Close your eyes, place your hand on your heart, and remember I'm always only a phone call away. I miss you even more." },
    { mood: "Open when you're feeling sad 🌧️", text: "You are stronger, braver, and more loved than you know. Whatever is heavy today will pass. I'm right here with you." },
    { mood: "Open when you need a smile 😊", text: "Remember the time we laughed so hard we couldn't breathe? You have the world's most radiant smile. Don't hide it!" },
    { mood: "Open when you're angry with me 🙈", text: "I'm sorry for being silly or annoying. I love you more than any disagreement. Can I make it up to you with food?" }
  ],

  // Future Bucket List
  futurePlans: [
    { icon: "🌅", title: "Watch a Sunrise from a Mountain Peak", desc: "Wrap in warm blankets with hot cocoa and watch dawn break." },
    { icon: "🍕", title: "Late Night 2 AM Pizza & Stargazing", desc: "No phones, just good food, cozy music, and counting shooting stars." },
    { icon: "✈️", title: "Travel to an Unexplored Country", desc: "Get lost in historic streets and taste everything together." },
    { icon: "🏠", title: "Build Our Dream Cozy Space", desc: "Fill a place with fairy lights, books, our photos, and endless warmth." }
  ],

  // High-Resolution Default Photos (Replace with your own in /assets/images/)
  photos: [
    { url: "./assets/images/1.jpg", caption: "The smile that stole my heart ❤️" },
    { url: "./assets/images/4.jpg", caption: "Every moment is magic with you ✨" },
    { url: "./assets/images/2.jpg", caption: "Forever my favorite adventure partner ✈️" },
    { url: "./assets/images/5.jpg", caption: "Radiant, stunning, and all mine ❤️" },
    { url: "./assets/images/3.jpg", caption: "Just us against the world 🌙" },
    { url: "./assets/images/6.jpg", caption: "To a lifetime of more memories 🥂" }
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

// Romantic Web Audio Synthesizer fallback melody
function playRomanticSynthMelody() {
  if (synthPlaying) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();
    synthPlaying = true;

    // Soft pentatonic romantic arpeggio notes (Hz)
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
  initNavigation();
  initScrollAnimations();
});

function applyPersonalization() {
  document.querySelectorAll(".girlfriend-name-text").forEach(el => {
    el.textContent = CONFIG.girlfriendName;
  });
  document.getElementById("senderSignature").textContent = `${CONFIG.senderName} ❤️`;
  document.getElementById("letterBody").textContent = CONFIG.loveLetter;
  document.getElementById("playerSongTitle").textContent = CONFIG.songTitle;
}

function initNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("primaryLinks");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
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
    // If local mp3 is not yet supplied by user, synthesize romantic melody
    playRomanticSynthMelody();
    equalizer.classList.remove("paused");
  });
}

/**
 * Countdown & Relationship Duration Calculator
 */
function initCountdownAndStats() {
  function updateTimer() {
    const now = new Date();
    const bday = new Date(CONFIG.birthdayDate);
    
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

    // Relationship Stats
    const relStart = new Date(CONFIG.relationshipStartDate);
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
        <div class="timeline-node">${item.icon || "❤️"}</div>
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
          <span class="gold-badge">REASONS I LOVE YOU</span>
          <div class="reason-display-box">
            <span class="reason-number">Reason #${String(currentReasonIndex + 1).padStart(2, '0')}</span>
            <p class="reason-text" id="liveReasonText">"${CONFIG.reasons[currentReasonIndex]}"</p>
          </div>
          <div class="interactive-big-heart" id="tapHeartBtn">💖</div>
          <p class="sub-help">Tap the heart for another reason ❤️</p>
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
          ${["Your Smile ❤️", "Your Kindness 🌸", "Your Laugh 😂", "Your Heart 💖", "Your Voice 🎶", "Your Warmth ✨"].map((trait, i) => `
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
          <li>🎵 <strong>A Song:</strong> You'd be my favorite melody on infinite repeat.</li>
          <li>🏡 <strong>A Place:</strong> You'd be the safe home I always long to return to.</li>
          <li>📱 <strong>A Notification:</strong> You'd be the only message that makes me instantly smile.</li>
          <li>⭐ <strong>A Wish:</strong> You'd be the one that actually came true.</li>
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
          <p style="font-size: 1.15rem; line-height: 1.7;">May your days be filled with effortless joy, peace, safety, and radiant adventures. May all your dreams unfold beautifully, and may you never doubt how deeply cherished you are.</p>
        </div>
      `;
      break;

    case "qualities":
      content.innerHTML = `
        <h3>What Makes You Special</h3>
        <p class="sub-help">The beautiful qualities I see in you every day.</p>
        <ul class="qualities-list">
          ${CONFIG.qualities.map(quality => `<li>${quality}</li>`).join("")}
        </ul>
      `;
      break;

    case "gallery_shortcut":
    case "fav_photos":
      openSectionShortcut("gallery", "Open Our Favorite Memories", "Take a look at the moments that make our story sparkle.");
      break;

    case "timeline_shortcut":
      openSectionShortcut("journey", "Open Our Timeline", "Visit every milestone and memory in our journey together.");
      break;

    case "future_shortcut":
      openSectionShortcut("future", "Open Our Future Adventures", "See all the beautiful plans still waiting for us.");
      break;

    case "letter_shortcut":
      openSectionShortcut("letter", "Open My Handwritten Letter", "A quieter place for everything I carry in my heart.");
      break;

    case "finale_trigger":
      triggerGrandFinale();
      return;

    default:
      content.innerHTML = `<h3>${gift.title}</h3><p style="margin-top:15px;">${gift.subtitle}</p>`;
  }

  modal.classList.remove("hidden");
}

function openSectionShortcut(sectionId, title, description) {
  const content = document.getElementById("giftModalContent");
  content.innerHTML = `
    <div class="section-shortcut">
      <span class="gold-badge">A LITTLE SHORTCUT</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <button class="btn-primary" id="openShortcutSection">Open This Gift</button>
    </div>
  `;
  document.getElementById("openShortcutSection").addEventListener("click", () => {
    document.getElementById("giftModal").classList.add("hidden");
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth", block: "start" });
  });
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
    document.getElementById("custName").value = CONFIG.girlfriendName;
    document.getElementById("custRelDate").value = CONFIG.relationshipStartDate;
    document.getElementById("custBdayDate").value = CONFIG.birthdayDate;
    custModal.classList.remove("hidden");
  });
  document.getElementById("closeCustomizer").addEventListener("click", () => custModal.classList.add("hidden"));

  // Customizer Live Form Submission
  document.getElementById("customizerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    CONFIG.girlfriendName = document.getElementById("custName").value || CONFIG.girlfriendName;
    CONFIG.relationshipStartDate = document.getElementById("custRelDate").value || CONFIG.relationshipStartDate;
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
        caption: `Special Memory #${i+1} ❤️`
      }));
      initGallery();
    }

    applyPersonalization();
    initCountdownAndStats();
    saveDataLocally();
    custModal.classList.add("hidden");
  });

  document.getElementById("resetCustomizerBtn").addEventListener("click", () => {
    localStorage.removeItem("romantic_birthday_cfg");
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
      girlfriendName: CONFIG.girlfriendName,
      birthdayDate: CONFIG.birthdayDate,
      relationshipStartDate: CONFIG.relationshipStartDate
    };
    localStorage.setItem("romantic_birthday_cfg", JSON.stringify(dataToSave));
  } catch(e) {
    console.warn("Storage not available:", e);
  }
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem("romantic_birthday_cfg");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.girlfriendName) CONFIG.girlfriendName = parsed.girlfriendName;
      if (parsed.birthdayDate) CONFIG.birthdayDate = parsed.birthdayDate;
      if (parsed.relationshipStartDate) CONFIG.relationshipStartDate = parsed.relationshipStartDate;
    }
  } catch(e) {
    console.warn("Could not load local storage data:", e);
  }
}