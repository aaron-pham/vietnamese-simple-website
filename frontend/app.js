const CATEGORIES = [
  { id: "all", label: "All Phrases", icon: "grid" },
  { id: "greetings", label: "Greetings", icon: "smile" },
  { id: "essentials", label: "Essentials", icon: "compass" },
  { id: "dining", label: "Food & Dining", icon: "utensils" },
  { id: "allergies", label: "Allergies", icon: "shield-alert" },
  { id: "directions", label: "Directions", icon: "map" },
  { id: "shopping", label: "Shopping", icon: "shopping-bag" },
  { id: "numbers", label: "Numbers & Money", icon: "banknote" },
  { id: "emergency", label: "Emergency", icon: "alert-triangle" }
];

const PHRASES = [
  // Greetings & Basics
  {
    id: "greet-hello",
    english: "Hello",
    vietnamese: "Xin chào",
    phonetic: "seen chow",
    category: "greetings",
    icon: "smile"
  },
  {
    id: "greet-thankyou",
    english: "Thank you",
    vietnamese: "Cảm ơn",
    phonetic: "gahm uhn",
    category: "greetings",
    icon: "heart"
  },
  {
    id: "greet-sorry",
    english: "Sorry / Excuse me",
    vietnamese: "Xin lỗi",
    phonetic: "seen loy",
    category: "greetings",
    icon: "alert-circle"
  },
  {
    id: "greet-yes",
    english: "Yes (polite / southern)",
    vietnamese: "Dạ / Vâng",
    phonetic: "yah / vuhng",
    category: "greetings",
    icon: "check-circle"
  },
  {
    id: "greet-no",
    english: "No",
    vietnamese: "Không",
    phonetic: "khom",
    category: "greetings",
    icon: "x-circle"
  },
  {
    id: "greet-goodbye",
    english: "Goodbye",
    vietnamese: "Tạm biệt",
    phonetic: "tahm bee-et",
    category: "greetings",
    icon: "log-out"
  },
  {
    id: "greet-howareyou",
    english: "How are you?",
    vietnamese: "Bạn khỏe không?",
    phonetic: "bahn khweh khom",
    category: "greetings",
    icon: "help-circle"
  },

  // Food & Dining
  {
    id: "dining-delicious",
    english: "Delicious",
    vietnamese: "Ngon",
    phonetic: "ngon",
    category: "dining",
    icon: "thumbs-up"
  },
  {
    id: "dining-pho",
    english: "I want to eat Pho",
    vietnamese: "Tôi muốn ăn phở",
    phonetic: "toy mwan ahn fuh",
    category: "dining",
    icon: "utensils"
  },
  {
    id: "dining-bill",
    english: "The bill, please",
    vietnamese: "Tính tiền",
    phonetic: "teen tee-en",
    category: "dining",
    icon: "receipt"
  },
  {
    id: "dining-water",
    english: "Water",
    vietnamese: "Nước",
    phonetic: "nawk",
    category: "dining",
    icon: "droplet"
  },
  {
    id: "dining-nospicy",
    english: "Not spicy / No chili",
    vietnamese: "Không cay",
    phonetic: "khom kai",
    category: "dining",
    icon: "flame"
  },
  {
    id: "dining-vegetarian",
    english: "Vegetarian food",
    vietnamese: "Đồ ăn chay",
    phonetic: "doh ahn chay",
    category: "dining",
    icon: "leaf"
  },
  {
    id: "dining-icedcoffee",
    english: "Iced milk coffee (Traditional)",
    vietnamese: "Cà phê sữa đá",
    phonetic: "ca feh sua dah",
    category: "dining",
    icon: "coffee"
  },
  {
    id: "dining-blackcoffee",
    english: "Iced black coffee",
    vietnamese: "Cà phê đá",
    phonetic: "ca feh dah",
    category: "dining",
    icon: "coffee"
  },
  {
    id: "dining-lesssugar",
    english: "Less sweet / Less condensed milk",
    vietnamese: "Ít sữa / Ít đường",
    phonetic: "eet sua / eet du-uhng",
    category: "dining",
    icon: "sliders"
  },
  {
    id: "dining-nocilantro",
    english: "No coriander / No cilantro",
    vietnamese: "Không ăn ngò",
    phonetic: "khom ahn ngoh",
    category: "dining",
    icon: "scissors"
  },
  {
    id: "dining-nocucumber",
    english: "No cucumber",
    vietnamese: "Không lấy dưa leo",
    phonetic: "khom lay zua leh-oh",
    category: "dining",
    icon: "ban"
  },
  {
    id: "dining-sauceside",
    english: "Sauce on the side",
    vietnamese: "Để nước sốt riêng",
    phonetic: "deh nawk sot zee-uhng",
    category: "dining",
    icon: "container"
  },

  // Allergies & Food Safety
  {
    id: "allergy-question-blank",
    english: "Is there [blank] in this?",
    vietnamese: "Cái này có ___ không?",
    phonetic: "kai nay co ___ khom",
    category: "allergies",
    icon: "help-circle"
  },
  {
    id: "allergy-allergic-blank",
    english: "I am allergic to [blank]",
    vietnamese: "Tôi bị dị ứng ___",
    phonetic: "toy bee zee oong ___",
    category: "allergies",
    icon: "shield-alert"
  },
  {
    id: "allergy-word-fish",
    english: "Fish",
    vietnamese: "Cá",
    phonetic: "ca",
    category: "allergies",
    icon: "fish"
  },
  {
    id: "allergy-word-shrimp",
    english: "Shrimp",
    vietnamese: "Tôm",
    phonetic: "tom",
    category: "allergies",
    icon: "shell"
  },
  {
    id: "allergy-word-cilantro",
    english: "Cilantro / Coriander",
    vietnamese: "Rau ngò",
    phonetic: "zow ngoh",
    category: "allergies",
    icon: "leaf"
  },

  // Directions & Transport
  {
    id: "dir-restroom",
    english: "Where is the restroom?",
    vietnamese: "Nhà vệ sinh ở đâu?",
    phonetic: "nyah vay seen uh daw",
    category: "directions",
    icon: "map-pin"
  },
  {
    id: "dir-left",
    english: "Turn left",
    vietnamese: "Rẽ trái",
    phonetic: "ree-ah try",
    category: "directions",
    icon: "arrow-up-left"
  },
  {
    id: "dir-right",
    english: "Turn right",
    vietnamese: "Rẽ phải",
    phonetic: "ree-ah fy",
    category: "directions",
    icon: "arrow-up-right"
  },
  {
    id: "dir-stop",
    english: "Stop here",
    vietnamese: "Dừng lại ở đây",
    phonetic: "zuhng ly uh day",
    category: "directions",
    icon: "navigation-off"
  },
  {
    id: "dir-airport",
    english: "Go to the airport",
    vietnamese: "Đi đến sân bay",
    phonetic: "dee den suhn by",
    category: "directions",
    icon: "plane"
  },
  {
    id: "dir-coming",
    english: "I am coming / Wait a minute",
    vietnamese: "Tôi đang đến, chờ tí",
    phonetic: "toy dahng den, chuh tee",
    category: "directions",
    icon: "clock"
  },
  {
    id: "dir-whereareyou",
    english: "Where are you?",
    vietnamese: "Bạn ở đâu?",
    phonetic: "bahn uh daw",
    category: "directions",
    icon: "help-circle"
  },
  {
    id: "dir-crossstreet",
    english: "Across the street",
    vietnamese: "Đối diện đường",
    phonetic: "doy zee-en du-uhng",
    category: "directions",
    icon: "shuffle"
  },

  // Shopping & Bargaining
  {
    id: "shop-howmuch",
    english: "How much is this?",
    vietnamese: "Cái này bao nhiêu tiền?",
    phonetic: "kai nay bao nyew tee-en",
    category: "shopping",
    icon: "dollar-sign"
  },
  {
    id: "shop-expensive",
    english: "Too expensive",
    vietnamese: "Mắc quá",
    phonetic: "mahk kwah",
    category: "shopping",
    icon: "trending-up"
  },
  {
    id: "shop-discount",
    english: "Can you discount?",
    vietnamese: "Giảm giá được không?",
    phonetic: "zahm zah du-uhk khom",
    category: "shopping",
    icon: "percent"
  },
  {
    id: "shop-looking",
    english: "Just looking, thank you",
    vietnamese: "Tôi xem thôi, cảm ơn",
    phonetic: "toy sem thoy, gahm uhn",
    category: "shopping",
    icon: "eye"
  },
  {
    id: "shop-opening",
    english: "Open the market price! (Good luck)",
    vietnamese: "Mở hàng đi!",
    phonetic: "muh hahng dee",
    category: "shopping",
    icon: "sparkles"
  },

  // Emergency
  {
    id: "emer-help",
    english: "Help me!",
    vietnamese: "Cứu tôi với!",
    phonetic: "kew toy voy",
    category: "emergency",
    icon: "shield-alert"
  },
  {
    id: "emer-lost",
    english: "I am lost",
    vietnamese: "Tôi bị lạc",
    phonetic: "toy bee lahk",
    category: "emergency",
    icon: "compass"
  },
  {
    id: "emer-doctor",
    english: "Call a doctor",
    vietnamese: "Gọi bác sĩ",
    phonetic: "goy bahk see",
    category: "emergency",
    icon: "activity"
  },
  {
    id: "emer-police",
    english: "Call the police",
    vietnamese: "Gọi cảnh sát",
    phonetic: "goy kahnh saht",
    category: "emergency",
    icon: "phone-call"
  },

  // Travel Essentials
  {
    id: "ess-english",
    english: "Do you speak English?",
    vietnamese: "Bạn nói tiếng Anh được không?",
    phonetic: "bahn noy tee-ng ahnh du-uhk khom",
    category: "essentials",
    icon: "languages"
  },
  {
    id: "ess-understand",
    english: "I don't understand",
    vietnamese: "Tôi không hiểu",
    phonetic: "toy khom heew",
    category: "essentials",
    icon: "help-circle"
  },
  {
    id: "ess-help",
    english: "Can you help me?",
    vietnamese: "Bạn giúp tôi được không?",
    phonetic: "bahn zoop toy du-uhk khom",
    category: "essentials",
    icon: "help-circle"
  },
  {
    id: "ess-passport",
    english: "Passport",
    vietnamese: "Hộ chiếu",
    phonetic: "hoh chiew",
    category: "essentials",
    icon: "file-text"
  },
  {
    id: "ess-hotel",
    english: "Hotel",
    vietnamese: "Khách sạn",
    phonetic: "khahk sahn",
    category: "essentials",
    icon: "home"
  },
  {
    id: "ess-taxi",
    english: "Taxi / Car",
    vietnamese: "Xe hơi / Taxi",
    phonetic: "seh huy / taxi",
    category: "essentials",
    icon: "car"
  },
  {
    id: "ess-sim",
    english: "SIM card",
    vietnamese: "Thẻ SIM",
    phonetic: "theh seem",
    category: "essentials",
    icon: "cpu"
  },
  {
    id: "ess-id",
    english: "ID / Document",
    vietnamese: "Căn cước / Giấy tờ",
    phonetic: "kahn kawk / zay tuh",
    category: "essentials",
    icon: "contact"
  },
  {
    id: "ess-wifi",
    english: "Wifi password",
    vietnamese: "Mật khẩu wifi",
    phonetic: "maht khaw wifi",
    category: "essentials",
    icon: "wifi"
  },
  {
    id: "ess-luggage",
    english: "Luggage",
    vietnamese: "Hành lý",
    phonetic: "hahnh lee",
    category: "essentials",
    icon: "briefcase"
  },

  // Numbers & Money
  {
    id: "num-1",
    english: "One",
    vietnamese: "Một",
    phonetic: "moht",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-2",
    english: "Two",
    vietnamese: "Hai",
    phonetic: "high",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-3",
    english: "Three",
    vietnamese: "Ba",
    phonetic: "bah",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-4",
    english: "Four",
    vietnamese: "Bốn",
    phonetic: "bohn",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-5",
    english: "Five",
    vietnamese: "Năm",
    phonetic: "nahm",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-10",
    english: "Ten",
    vietnamese: "Mười",
    phonetic: "mu-uhy",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-100",
    english: "One hundred",
    vietnamese: "Một trăm",
    phonetic: "moht chahm",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-1000",
    english: "One thousand",
    vietnamese: "Một ngàn",
    phonetic: "moht ngahn",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-1m",
    english: "One million",
    vietnamese: "Một triệu",
    phonetic: "moht triew",
    category: "numbers",
    icon: "hash"
  },
  {
    id: "num-atm",
    english: "Where is the ATM?",
    vietnamese: "Máy rút tiền (ATM) ở đâu?",
    phonetic: "may zoot tee-en uh daw",
    category: "numbers",
    icon: "credit-card"
  },
  {
    id: "num-card",
    english: "Credit card",
    vietnamese: "Thẻ tín dụng",
    phonetic: "theh teen zoong",
    category: "numbers",
    icon: "credit-card"
  },
  {
    id: "num-cash",
    english: "Cash",
    vietnamese: "Tiền mặt",
    phonetic: "tee-en maht",
    category: "numbers",
    icon: "banknote"
  }
];
// ==========================================================================
// Application State
// ==========================================================================
let currentFilter = "all";
let searchQuery = "";
let playingPhraseId = null;
let audioInstance = null;
let isPlayingSequence = false;
let sequenceQueue = [];
let sequenceIndex = 0;
let safetyTimeout = null;

// ==========================================================================
// DOM Element Cache
// ==========================================================================
const searchInput = document.getElementById("phrase-search");
const clearSearchBtn = document.getElementById("clear-search-btn");
const categoriesNav = document.getElementById("categories-nav");
const phrasesGrid = document.getElementById("phrases-grid");
const resultsCount = document.getElementById("results-count");
const playAllBtn = document.getElementById("play-all-btn");
const audioHud = document.getElementById("audio-hud");
const hudViText = document.getElementById("hud-vi-text");
const hudEnText = document.getElementById("hud-en-text");
const hudReplayBtn = document.getElementById("hud-replay-btn");
const hudStopBtn = document.getElementById("hud-stop-btn");

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderPhrases();
  setupEventListeners();

  // Initialize Lucide icons
  lucide.createIcons();
});

// ==========================================================================
// Rendering Functions
// ==========================================================================
function renderCategories() {
  categoriesNav.innerHTML = CATEGORIES.map(cat => `
    <button 
      class="category-tab ${cat.id === currentFilter ? 'active' : ''}" 
      data-category="${cat.id}"
      id="cat-tab-${cat.id}"
      aria-label="Filter by ${cat.label}"
    >
      <i data-lucide="${cat.icon}" class="tab-icon"></i>
      <span>${cat.label}</span>
    </button>
  `).join("");
}

function renderPhrases() {
  const filteredPhrases = PHRASES.filter(phrase => {
    const matchesCategory = currentFilter === "all" || phrase.category === currentFilter;
    const matchesSearch =
      phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.vietnamese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.phonetic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredPhrases.length === 0) {
    phrasesGrid.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-code"></i>
        <h3>No Phrases Found</h3>
        <p>Try refining your search terms or choosing a different category filter.</p>
      </div>
    `;
    resultsCount.textContent = "0 phrases found";
    playAllBtn.style.display = "none";
    lucide.createIcons();
    return;
  }

  playAllBtn.style.display = "flex";
  resultsCount.textContent = `Showing ${filteredPhrases.length} phrase${filteredPhrases.length > 1 ? 's' : ''}`;

  phrasesGrid.innerHTML = filteredPhrases.map(phrase => {
    const isPlaying = phrase.id === playingPhraseId;
    return `
      <article 
        class="phrase-card ${isPlaying ? 'playing' : ''}" 
        data-id="${phrase.id}" 
        data-category="${phrase.category}"
        role="button"
        tabindex="0"
        aria-label="${phrase.english} in Vietnamese is ${phrase.vietnamese}"
      >
        <div class="card-header-details">
          <span class="category-tag">${phrase.category}</span>
          <div class="play-indicator">
            <i data-lucide="${isPlaying ? 'square' : 'volume-2'}"></i>
          </div>
        </div>
        <div class="phrase-body">
          <h2 class="vietnamese-text">${phrase.vietnamese}</h2>
          <p class="phonetic-text">[ ${phrase.phonetic} ]</p>
          <p class="english-text">${phrase.english}</p>
        </div>
        <div class="card-wave">
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
        </div>
      </article>
    `;
  }).join("");

  lucide.createIcons();
}

// ==========================================================================
// Event Handler Setups
// ==========================================================================
function setupEventListeners() {
  // Category Filtering
  categoriesNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-tab");
    if (!btn) return;

    currentFilter = btn.dataset.category;
    document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));
    btn.classList.add("active");

    // Stop playing when switching categories to avoid confusion
    stopAudio();
    renderPhrases();
  });

  // Search input interaction
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? "flex" : "none";
    renderPhrases();
  });

  // Clear search field
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderPhrases();
  });

  // Phrase click interaction
  phrasesGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".phrase-card");
    if (!card) return;

    const phraseId = card.dataset.id;
    handlePhraseClick(phraseId);
  });

  // Phrase keyboard interaction for accessibility
  phrasesGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".phrase-card");
      if (!card) return;
      e.preventDefault();
      handlePhraseClick(card.dataset.id);
    }
  });

  // HUD buttons
  hudStopBtn.addEventListener("click", () => {
    stopAudio();
  });

  hudReplayBtn.addEventListener("click", () => {
    if (playingPhraseId) {
      playPhraseAudio(playingPhraseId);
    }
  });

  // Play All Sequence Trigger
  playAllBtn.addEventListener("click", () => {
    if (isPlayingSequence) {
      stopAudio();
    } else {
      startPlaySequence();
    }
  });

  // Global Hotkey setup
  window.addEventListener("keydown", (e) => {
    if (e.key === " " && document.activeElement !== searchInput) {
      // Spacebar stops playback
      if (playingPhraseId) {
        e.preventDefault();
        stopAudio();
      }
    }
  });
}

// ==========================================================================
// Sound & Playback Controller Engine
// ==========================================================================
function handlePhraseClick(phraseId) {
  // If clicked the phrase that is currently playing, stop it
  if (playingPhraseId === phraseId) {
    stopAudio();
  } else {
    // If playing a sequence, break it when a user manually clicks a card
    if (isPlayingSequence) {
      isPlayingSequence = false;
      playAllBtn.classList.remove("playing-sequence");
      playAllBtn.innerHTML = `<i data-lucide="play-circle"></i> Play All Sequence`;
      lucide.createIcons();
    }
    playPhraseAudio(phraseId);
  }
}

function playPhraseAudio(phraseId, useAlternateGoogle = false) {
  // If starting a fresh playback, stop existing playback and set safety timeout
  if (!useAlternateGoogle) {
    stopAudioInternal();

    const phrase = PHRASES.find(p => p.id === phraseId);
    if (!phrase) return;

    playingPhraseId = phraseId;
    updateVisualPlaybackState(phrase, true);

    // Set a failsafe safety timeout (e.g. 6 seconds) to prevent visual lockups if browser speech events fail
    safetyTimeout = setTimeout(() => {
      console.warn("Failsafe safety timeout triggered. Force-stopping audio visual state.");
      stopAudio();
    }, 6000);
  }

  const phrase = PHRASES.find(p => p.id === phraseId);
  if (!phrase) return;

  // Replace blanks (___) with a pause-inducing comma for natural speech playback
  const speakText = phrase.vietnamese.replace(/___/g, ',');

  // Select client endpoint based on attempt
  const clientParam = useAlternateGoogle ? 'gtx' : 'tw-ob';
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=${clientParam}&q=${encodeURIComponent(speakText)}`;

  // Clear previous audio instance if switching to alternate
  if (audioInstance) {
    audioInstance.pause();
  }

  audioInstance = new Audio(ttsUrl);

  // Set playback rate to slightly slower (e.g. 0.9) to make it easier for language learners
  audioInstance.playbackRate = 0.92;

  let fallbackTimeout = setTimeout(() => {
    if (!useAlternateGoogle) {
      console.warn("Google TTS tw-ob timeout. Trying alternate gtx endpoint...");
      playPhraseAudio(phraseId, true);
    } else {
      console.warn("Alternate Google TTS timeout. Falling back to SpeechSynthesis.");
      triggerSpeechSynthesisFallback(speakText);
    }
  }, 2500);

  audioInstance.addEventListener("canplaythrough", () => {
    clearTimeout(fallbackTimeout);
  });

  audioInstance.addEventListener("ended", () => {
    handleAudioFinished();
  });

  audioInstance.addEventListener("error", (e) => {
    clearTimeout(fallbackTimeout);
    if (!useAlternateGoogle) {
      console.warn("Google TTS tw-ob failed. Trying alternate gtx endpoint...", e);
      playPhraseAudio(phraseId, true);
    } else {
      console.error("Alternate Google TTS failed. Invoking SpeechSynthesis fallback.", e);
      triggerSpeechSynthesisFallback(speakText);
    }
  });

  // Play audio
  audioInstance.play().catch(err => {
    clearTimeout(fallbackTimeout);
    if (!useAlternateGoogle) {
      console.warn("Google TTS tw-ob play catch. Trying alternate gtx endpoint...", err);
      playPhraseAudio(phraseId, true);
    } else {
      console.warn("Alternate Google TTS play catch. Falling back to SpeechSynthesis.", err);
      triggerSpeechSynthesisFallback(speakText);
    }
  });
}

function triggerSpeechSynthesisFallback(text, isRetry = false) {
  stopAudioInternal(); // Ensure everything is clear

  // Check if browser supports Web Speech API
  if (!('speechSynthesis' in window)) {
    console.error("Speech Synthesis not supported in this browser.");
    handleAudioFinished();
    return;
  }

  // Cancel any ongoing speaking
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (!isRetry) {
    utterance.lang = 'vi-VN';
  }
  utterance.rate = 0.85; // Slow down a bit for learner friendliness

  // Try to find a native Vietnamese voice
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang.toLowerCase().includes('vi') || v.lang.toLowerCase().includes('vn'));
  if (viVoice && !isRetry) {
    utterance.voice = viVoice;
  }

  utterance.onend = () => {
    handleAudioFinished();
  };

  utterance.onerror = (e) => {
    console.error("SpeechSynthesis error:", e);
    // If the Vietnamese voice pack isn't installed locally, retry without the language restriction
    if (!isRetry && (e.error === 'language-unavailable' || e.error === 'voice-unavailable')) {
      console.warn("Vietnamese voice unavailable. Retrying with default system voice...");
      triggerSpeechSynthesisFallback(text, true);
    } else {
      handleAudioFinished();
    }
  };

  window.speechSynthesis.speak(utterance);
}

function stopAudioInternal() {
  // Clear safety timeout if active
  if (safetyTimeout) {
    clearTimeout(safetyTimeout);
    safetyTimeout = null;
  }

  // Clear HTML5 Audio instance
  if (audioInstance) {
    audioInstance.pause();
    audioInstance = null;
  }

  // Clear SpeechSynthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function stopAudio() {
  stopAudioInternal();

  if (isPlayingSequence) {
    isPlayingSequence = false;
    playAllBtn.classList.remove("playing-sequence");
    playAllBtn.innerHTML = `<i data-lucide="play-circle"></i> Play All Sequence`;
    lucide.createIcons();
  }

  const prevPlayingId = playingPhraseId;
  playingPhraseId = null;

  if (prevPlayingId) {
    const phrase = PHRASES.find(p => p.id === prevPlayingId);
    if (phrase) {
      updateVisualPlaybackState(phrase, false);
    }
  }
}

function handleAudioFinished() {
  if (isPlayingSequence) {
    sequenceIndex++;
    if (sequenceIndex < sequenceQueue.length) {
      // Pause slightly between phrases in sequence
      setTimeout(() => {
        if (isPlayingSequence) {
          playPhraseAudio(sequenceQueue[sequenceIndex].id);
        }
      }, 1200);
    } else {
      // Finished all phrases
      stopAudio();
    }
  } else {
    // Normal single play finish
    stopAudio();
  }
}

function updateVisualPlaybackState(phrase, isPlaying) {
  // Update card elements visually
  document.querySelectorAll(".phrase-card").forEach(card => {
    if (card.dataset.id === phrase.id) {
      if (isPlaying) {
        card.classList.add("playing");
        const playIcon = card.querySelector(".play-indicator i");
        if (playIcon) {
          playIcon.setAttribute("data-lucide", "square");
        }
      } else {
        card.classList.remove("playing");
        const playIcon = card.querySelector(".play-indicator i");
        if (playIcon) {
          playIcon.setAttribute("data-lucide", "volume-2");
        }
      }
    }
  });

  // Re-run lucide icons to display square or volume icon
  lucide.createIcons();

  // Bottom HUD updates
  if (isPlaying) {
    hudViText.textContent = phrase.vietnamese;
    hudEnText.textContent = phrase.english;
    audioHud.style.display = "block";
    // Minor delay to trigger the CSS sliding transition
    setTimeout(() => {
      audioHud.classList.add("visible");
    }, 20);
  } else {
    audioHud.classList.remove("visible");
    // Wait for transition to complete before setting display none
    setTimeout(() => {
      if (!playingPhraseId) {
        audioHud.style.display = "none";
      }
    }, 400);
  }
}

// ==========================================================================
// Sequence Player ("Play All") Logic
// ==========================================================================
function startPlaySequence() {
  stopAudioInternal();

  // Gather all currently visible phrase cards
  const visibleCards = Array.from(document.querySelectorAll(".phrase-card"));
  if (visibleCards.length === 0) return;

  sequenceQueue = visibleCards.map(card => {
    return PHRASES.find(p => p.id === card.dataset.id);
  }).filter(Boolean);

  if (sequenceQueue.length === 0) return;

  isPlayingSequence = true;
  sequenceIndex = 0;

  playAllBtn.classList.add("playing-sequence");
  playAllBtn.innerHTML = `<i data-lucide="square"></i> Stop Sequence`;
  lucide.createIcons();

  playPhraseAudio(sequenceQueue[sequenceIndex].id);
}

// Ensure voices are loaded for SpeechSynthesis
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
}
