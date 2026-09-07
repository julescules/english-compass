(function () {
  "use strict";

  const CONTENT = window.ENGLISH_COMPASS_CONTENT;
  const STORAGE_KEY = "english-compass-state-v1";
  const SCHEMA_VERSION = 3;
  const MAX_ATTEMPTS = 1000;
  const MAX_MISTAKES = 500;
  const SpeechRecognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition;

  const SKILLS = {
    vocabulary: { name: "单词", color: "#52b69a", iconClass: "mint" },
    grammar: { name: "语法", color: "#d6a444", iconClass: "gold" },
    translation: { name: "翻译", color: "#f26f55", iconClass: "coral" },
    listening: { name: "听力", color: "#557aa5", iconClass: "blue" },
    speaking: { name: "口语", color: "#8b6ca9", iconClass: "coral" },
    reading: { name: "阅读", color: "#4f9ca8", iconClass: "blue" }
  };
  const SKILL_DASHBOARD_COPY = {
    vocabulary: "词义、拼写与间隔复习",
    grammar: "规则理解与句型判断",
    translation: "中译英与自然表达",
    listening: "主旨、细节与语音辨识",
    speaking: "持续开口与关键词表达",
    reading: "篇章理解与双语复盘"
  };

  const VIEW_COPY = {
    dashboard: ["YOUR DAILY PATH", "今天，向前一点点"],
    vocabulary: ["WORDS IN CONTEXT", "把单词放进真实语境"],
    grammar: ["ONE RULE AT A TIME", "语法，学一条就用一条"],
    translation: ["THINK IN ENGLISH", "把意思说得自然"],
    listening: ["LISTEN WITH PURPOSE", "听见场景，也听见细节"],
    speaking: ["SPEAK WITH CONFIDENCE", "从开口，到表达自信"],
    reading: ["READ WITH CONTEXT", "读懂文章，也读懂细节"],
    review: ["SMART REVIEW", "把薄弱项，练成真正会用"],
    assessment: ["FULL SKILL CHECK", "一次测试，看见六项能力"],
    progress: ["YOUR LEARNING STORY", "看见每一次积累"]
  };

  const VIEW_ORDER = Object.keys(VIEW_COPY);
  const VIEW_PAGE_CONFIG = {
    dashboard: [
      [".hero-card", "今日建议"],
      [".dashboard-grid", "今日路线"],
      [".skills-card", "能力概览"]
    ],
    vocabulary: [
      [".practice-stage", "单词练习"],
      [".module-aside", "角色与复习信息"]
    ],
    grammar: [
      [".grammar-lesson-stage", "语法微课"],
      [".grammar-quiz-stage", "立即练习"],
      [".lesson-list-panel", "课程与角色"]
    ],
    translation: [
      [".practice-stage", "翻译练习"],
      [".module-aside", "表达教练"]
    ],
    listening: [
      [".listening-audio-stage", "听力播放"],
      [".listening-question-stage", "听后选择"],
      [".listening-result-stage", "文字稿与跟读"],
      [".module-aside", "听力伙伴"]
    ],
    speaking: [
      [".practice-stage", "口语练习"],
      [".module-aside", "场景与口语伙伴"]
    ],
    reading: [
      [".reading-passage-stage", "英文原文"],
      [".reading-question-stage", "阅读问题"],
      [".reading-translation-stage", "中文译文"],
      [".reading-answer-stage", "双语答案"]
    ],
    review: [
      [".review-overview", "复习总览"],
      [".review-wordbook", "生词本与词库搜索"],
      [".review-mistakes", "跨模块错题本"]
    ],
    assessment: [
      [".assessment-overview-stage", "测试说明"],
      [".assessment-question-stage", "当前题目"],
      [".assessment-result-stage", "综合报告"],
      [".assessment-aside", "测试伙伴"]
    ],
    progress: [
      [".progress-summary-grid", "学习摘要"],
      [".progress-detail-grid", "详细统计"],
      [".data-card", "学习档案"]
    ]
  };
  const ANIME_V3_CHARACTER_ART = [
    "assets/anime-v3-snowy-whisper.jpg",
    "assets/anime-v3-sakura-station.jpg",
    "assets/anime-v3-sakura-lantern.jpg",
    "assets/anime-v3-midnight-butterfly.jpg",
    "assets/anime-v3-winter-student.jpg",
    "assets/anime-v3-autumn-reader.jpg",
    "assets/anime-v3-monochrome-night.webp"
  ];
  const ANIME_V3_SCENERY_ART = [
    "assets/anime-v3-moon-pavilion.png",
    "assets/anime-v3-moon-pagoda.png",
    "assets/anime-v3-painted-highland.webp"
  ];
  const SOURCED_V191_ART = [
    "assets/key-primadoll-haizakura-portrait.png",
    "assets/key-primadoll-karasuba-cafe.png",
    "assets/minchi-station-evening.jpg",
    "assets/minchi-library-evening.jpg"
  ];
  const SOURCED_V1100_ART = [
    "assets/key-primadoll-otome-office.png",
    "assets/key-primadoll-gekka-kitchen.png",
    "assets/minchi-restaurant-evening.jpg",
    "assets/minchi-classroom-evening.jpg"
  ];
  const ASSESSMENT_PAPER_ART = [
    ...Array.from({ length: 6 }, () => ({
      source: "assets/xinghui-word-sakura-camera.jpg",
      alt: "樱花相机主题二次元测试伙伴"
    })),
    { source: SOURCED_V1100_ART[0], alt: "奥宫乙女正脸全身测试伙伴", position: "50% 18%" },
    { source: SOURCED_V1100_ART[1], alt: "月下正脸全身测试伙伴", position: "50% 20%" },
    { source: SOURCED_V191_ART[0], alt: "灰樱正脸全身测试伙伴", position: "50% 18%" },
    { source: SOURCED_V191_ART[1], alt: "鸦羽咖啡店测试伙伴", position: "50% 20%" }
  ];
  const CARD_ART_LIBRARY = {
    dashboard: [
      "assets/xinghui-dashboard-trio.jpg",
      "assets/xinghui-dashboard-night.jpg",
      "assets/xinghui-word-books.jpg",
      "assets/xinghui-word-album.jpg",
      "assets/xinghui-word-autumn.jpg",
      "assets/xinghui-word-game.jpg",
      "assets/xinghui-word-sakura-camera.jpg",
      "assets/mizuki-anime-character.webp",
      "assets/anime-original-blue-rose.jpg",
      "assets/anime-original-fairy-duo.jpg",
      "assets/anime-original-sunflower-sky.jpg",
      "assets/anime-original-sunflower-breeze.jpg",
      "assets/anime-original-book-garden.jpg",
      "assets/anime-original-white-flower.jpg",
      "assets/anime-original-pastel-sweets.jpg",
      "assets/anime-original-study-room.jpg",
      "assets/anime-original-blue-butterfly.jpg",
      "assets/anime-original-rose-garden.jpg",
      "assets/anime-v2-sakura-smile.jpg",
      "assets/anime-v2-sunflower-summer.png",
      "assets/anime-v2-autumn-garden.jpg",
      ...ANIME_V3_CHARACTER_ART,
      ...SOURCED_V191_ART
    ],
    vocabulary: [
      "assets/xinghui-word-game.jpg",
      "assets/xinghui-word-sakura-camera.jpg",
      "assets/xinghui-word-books.jpg",
      "assets/xinghui-word-album.jpg",
      "assets/xinghui-word-autumn.jpg",
      "assets/companion-vocabulary.webp",
      "assets/companion-grammar.webp",
      "assets/companion-translation.webp",
      "assets/companion-listening.webp",
      "assets/anime-original-blue-rose.jpg",
      "assets/anime-original-fairy-duo.jpg",
      "assets/anime-original-sunflower-sky.jpg",
      "assets/anime-original-sunflower-breeze.jpg",
      "assets/anime-original-white-flower.jpg",
      "assets/anime-original-bamboo-night.jpg",
      "assets/anime-original-pastel-sweets.jpg",
      "assets/anime-original-mystic-book.jpg",
      "assets/anime-original-midnight-flowers.jpg",
      "assets/anime-original-study-room.jpg",
      "assets/anime-original-blue-butterfly.jpg",
      "assets/anime-original-rose-garden.jpg",
      "assets/anime-v2-sakura-smile.jpg",
      "assets/anime-v2-maid-tea.jpg",
      "assets/anime-v2-sunset-flower.png",
      "assets/anime-v2-sweets-cafe.png",
      "assets/anime-v2-sunflower-summer.png",
      "assets/anime-v2-classroom-guitar.jpg",
      "assets/anime-v2-autumn-garden.jpg",
      "assets/anime-v2-blue-summer-hat.png",
      "assets/anime-v2-midnight-street.jpg",
      "assets/anime-v2-wisteria-dream.jpg",
      "assets/anime-v2-fireworks-night.jpg",
      "assets/anime-v2-library-maid.jpg",
      ...ANIME_V3_CHARACTER_ART,
      ...SOURCED_V191_ART
    ],
    grammar: ["assets/anime-v4-sakura-study.png", "assets/companion-grammar.webp", "assets/xinghui-word-books.jpg", "assets/anime-original-book-garden.jpg", "assets/anime-original-fairy-duo.jpg", "assets/anime-original-white-flower.jpg", "assets/anime-original-rose-garden.jpg", "assets/anime-v2-library-maid.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-maid-tea.jpg", ...ANIME_V3_CHARACTER_ART, ...SOURCED_V191_ART],
    translation: ["assets/companion-translation.webp", "assets/xinghui-word-album.jpg", "assets/anime-original-blue-rose.jpg", "assets/anime-original-sunflower-breeze.jpg", "assets/anime-original-bamboo-night.jpg", "assets/anime-original-pastel-sweets.jpg", "assets/anime-v2-sunset-flower.png", "assets/anime-v2-autumn-garden.jpg", ...ANIME_V3_CHARACTER_ART],
    listening: ["assets/companion-listening.webp", "assets/xinghui-word-game.jpg", "assets/anime-original-sunflower-sky.jpg", "assets/anime-original-fairy-duo.jpg", "assets/anime-original-study-room.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/anime-v2-classroom-guitar.jpg", "assets/anime-v2-midnight-street.jpg", "assets/anime-v2-fireworks-night.jpg", ...ANIME_V3_CHARACTER_ART],
    speaking: ["assets/xinghui-word-autumn.jpg", "assets/xinghui-word-sakura-camera.jpg", "assets/anime-original-fairy-duo.jpg", "assets/anime-original-blue-rose.jpg", "assets/anime-original-mystic-book.jpg", "assets/anime-original-midnight-flowers.jpg", "assets/anime-v2-sunset-flower.png", "assets/anime-v2-midnight-street.jpg", "assets/anime-v2-fireworks-night.jpg", ...ANIME_V3_CHARACTER_ART],
    reading: ["assets/key-primadoll-haizakura-portrait.png", "assets/key-primadoll-karasuba-cafe.png", "assets/anime-v3-autumn-reader.jpg", ...ANIME_V3_CHARACTER_ART, ...ANIME_V3_SCENERY_ART, "assets/minchi-station-evening.jpg", "assets/minchi-library-evening.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-library-maid.jpg", "assets/anime-v2-sakura-smile.jpg", "assets/anime-v2-classroom-guitar.jpg", "assets/anime-original-book-garden.jpg", "assets/anime-original-study-room.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/xinghui-word-books.jpg", "assets/xinghui-word-album.jpg"],
    review: ["assets/anime-original-mystic-book.jpg", "assets/anime-original-study-room.jpg", "assets/anime-original-white-flower.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/xinghui-word-books.jpg", "assets/xinghui-word-album.jpg", "assets/anime-v2-library-maid.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-sakura-smile.jpg", "assets/anime-v2-blue-summer-hat.png", ...ANIME_V3_CHARACTER_ART],
    assessment: ["assets/xinghui-word-sakura-camera.jpg", "assets/xinghui-word-album.jpg", "assets/xinghui-word-game.jpg", "assets/anime-original-book-garden.jpg", "assets/anime-original-blue-rose.jpg", "assets/anime-original-sunflower-sky.jpg", "assets/anime-original-white-flower.jpg", "assets/anime-original-mystic-book.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/anime-original-rose-garden.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-blue-summer-hat.png", "assets/anime-v2-sweets-cafe.png", ...ANIME_V3_CHARACTER_ART],
    progress: [
      "assets/companion-progress.webp",
      "assets/xinghui-word-autumn.jpg",
      "assets/xinghui-word-game.jpg",
      "assets/xinghui-word-books.jpg",
      "assets/xinghui-word-album.jpg",
      "assets/xinghui-word-sakura-camera.jpg",
      "assets/xinghui-dashboard-night.jpg",
      "assets/anime-original-fairy-duo.jpg",
      "assets/anime-original-sunflower-breeze.jpg",
      "assets/anime-original-blue-rose.jpg",
      "assets/anime-original-pastel-sweets.jpg",
      "assets/anime-original-study-room.jpg",
      "assets/anime-original-midnight-flowers.jpg",
      "assets/anime-original-rose-garden.jpg",
      "assets/anime-v2-sakura-smile.jpg",
      "assets/anime-v2-sunflower-summer.png",
      "assets/anime-v2-autumn-garden.jpg",
      ...ANIME_V3_CHARACTER_ART,
      ...SOURCED_V191_ART
    ]
  };
  const PAGE_ART_LIBRARY = {
    dashboard: [
      "assets/mizuki-sakura-day.webp",
      "assets/mizuki-sakura-night.webp",
      "assets/mizuki-sakura-day.webp",
      "assets/mizuki-night-fantasy.webp",
      "assets/anime-v2-sakura-smile.jpg",
      "assets/anime-v2-autumn-garden.jpg",
      ...ANIME_V3_SCENERY_ART,
      ...ANIME_V3_CHARACTER_ART
    ],
    vocabulary: ["assets/mizuki-sakura-day.webp", "assets/anime-original-blue-rose.jpg", "assets/anime-original-white-flower.jpg", "assets/anime-original-rose-garden.jpg", "assets/anime-v2-sweets-cafe.png", "assets/anime-v2-library-maid.jpg", ...ANIME_V3_CHARACTER_ART],
    grammar: ["assets/mizuki-sakura-day.webp", "assets/anime-original-book-garden.jpg", "assets/mizuki-sakura-night.webp", "assets/anime-original-bamboo-night.jpg", "assets/anime-original-rose-garden.jpg", "assets/anime-v2-maid-tea.jpg", "assets/anime-v2-library-maid.jpg", ...ANIME_V3_CHARACTER_ART],
    translation: ["assets/mizuki-sakura-night.webp", "assets/anime-original-sunflower-breeze.jpg", "assets/anime-original-study-room.jpg", "assets/anime-original-pastel-sweets.jpg", "assets/anime-v2-sunset-flower.png", "assets/anime-v2-autumn-garden.jpg", ...ANIME_V3_CHARACTER_ART],
    listening: ["assets/mizuki-sakura-day.webp", "assets/anime-original-sunflower-sky.jpg", "assets/mizuki-sakura-night.webp", "assets/anime-original-fairy-duo.jpg", "assets/anime-original-midnight-flowers.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/anime-v2-classroom-guitar.jpg", "assets/anime-v2-midnight-street.jpg", "assets/anime-v2-fireworks-night.jpg", ...ANIME_V3_CHARACTER_ART],
    speaking: ["assets/mizuki-sakura-night.webp", "assets/anime-original-blue-rose.jpg", "assets/anime-original-mystic-book.jpg", "assets/anime-original-bamboo-night.jpg", "assets/anime-v2-sunset-flower.png", "assets/anime-v2-midnight-street.jpg", ...ANIME_V3_CHARACTER_ART],
    reading: ["assets/minchi-station-evening.jpg", "assets/minchi-library-evening.jpg", ...ANIME_V3_SCENERY_ART, ...ANIME_V3_CHARACTER_ART, "assets/key-primadoll-haizakura-portrait.png", "assets/key-primadoll-karasuba-cafe.png", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-library-maid.jpg", "assets/anime-v2-sakura-smile.jpg", "assets/anime-original-book-garden.jpg", "assets/anime-original-study-room.jpg"],
    review: ["assets/anime-original-mystic-book.jpg", "assets/anime-original-study-room.jpg", "assets/mizuki-night-fantasy.webp", "assets/anime-original-white-flower.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-library-maid.jpg"],
    assessment: ["assets/mizuki-sakura-day.webp", "assets/anime-original-blue-rose.jpg", "assets/anime-original-book-garden.jpg", "assets/anime-original-sunflower-sky.jpg", "assets/anime-original-white-flower.jpg", "assets/anime-original-blue-butterfly.jpg", "assets/anime-v2-wisteria-dream.jpg", "assets/anime-v2-fireworks-night.jpg"],
    progress: [
      "assets/mizuki-sakura-day.webp",
      "assets/anime-original-fairy-duo.jpg",
      "assets/mizuki-sakura-night.webp",
      "assets/mizuki-night-fantasy.webp",
      "assets/anime-original-rose-garden.jpg",
      "assets/anime-v2-sakura-smile.jpg",
      "assets/anime-v2-sunflower-summer.png",
      ...SOURCED_V191_ART
    ]
  };
  const FEATURED_CARD_ART = {
    dashboardTasks: [
      { source: "assets/xinghui-word-autumn.jpg", position: "58% 17%" },
      { source: "assets/xinghui-word-game.jpg", position: "42% 15%" },
      { source: "assets/xinghui-word-books.jpg", position: "55% 27%" },
      { source: "assets/xinghui-word-album.jpg", position: "50% 15%" },
      { source: "assets/xinghui-word-sakura-camera.jpg", position: "50% 14%" },
      { source: "assets/anime-v3-sakura-station.jpg", position: "50% 24%" }
    ],
    dashboardFocus: { source: "assets/anime-v2-sakura-smile.jpg", position: "50% 30%" },
    vocabularyDictation: { source: "assets/anime-v2-sweets-cafe.png", position: "50% 30%" },
    grammarQuiz: { source: "assets/anime-v2-library-maid.jpg", position: "58% 25%" },
    translationStage: { source: "assets/anime-v2-sunset-flower.png", position: "50% 22%" },
    listeningQuestion: { source: "assets/anime-v2-classroom-guitar.jpg", position: "60% 30%" },
    listeningPlayer: { source: "assets/anime-v2-midnight-street.jpg", position: "48% 30%" },
    readingQuestion: { source: "assets/anime-v3-autumn-reader.jpg", position: "55% 24%" },
    progressStats: [
      { source: "assets/key-primadoll-haizakura-portrait.png", position: "56% 28%" },
      { source: "assets/anime-v3-sakura-lantern.jpg", position: "50% 16%" }
    ]
  };
  const VOCABULARY_REFRESH_GALLERY = [...CARD_ART_LIBRARY.vocabulary];
  for (let index = VOCABULARY_REFRESH_GALLERY.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [VOCABULARY_REFRESH_GALLERY[index], VOCABULARY_REFRESH_GALLERY[swapIndex]] = [
      VOCABULARY_REFRESH_GALLERY[swapIndex],
      VOCABULARY_REFRESH_GALLERY[index]
    ];
  }
  const CARD_BOX_SELECTOR = [
    ".card",
    ".hero-card",
    ".progress-hero-card",
    ".practice-stage",
    ".lesson-list-panel",
    ".lesson-list-header",
    ".lesson-list",
    ".word-card",
    ".vocab-test-card",
    ".translation-prompt-card",
    ".rule-card",
    ".quiz-card",
    ".audio-player-card",
    ".recording-zone",
    ".speech-transcript-card",
    ".transcript-panel",
    ".translation-feedback",
    ".speech-feedback",
    ".task-item",
    ".skill-mini",
    ".meaning-option",
    ".assessment-option",
    ".option-button",
    ".reading-option",
    ".reading-summary-card",
    ".reading-answer-item",
    ".reading-vocabulary-list > span",
    ".lesson-item",
    ".scenario-button",
    ".method-list li",
    ".dictation-clues > div",
    ".mini-stat-row",
    ".mastery-row",
    ".activity-item",
    ".grammar-example",
    ".speech-score-item",
    ".answer-block",
    ".definition-block",
    ".collocation-block",
    ".example-block",
    ".vocab-mode-tabs button",
    ".rating-grid button",
    ".dictation-listen-zone",
    ".meaning-word-block",
    ".vocab-test-feedback",
    ".feedback-panel",
    ".segmented-control button",
    ".phrase-chips > span",
    ".hint-row > span",
    ".keyword-row > span",
    ".status-chip",
    ".session-counter",
    ".review-stat-grid article",
    ".review-suggestion-card",
    ".review-suggestion-item",
    ".review-list-item",
    ".button-row .button",
    ".hero-actions .button",
    ".route-summary-meta",
    ".composer-footer",
    ".listen-question",
    ".speaking-prompt"
  ].join(",");

  const GLOBAL_CARD_BOX_SELECTOR = [
    ".streak-pill",
    ".topbar .icon-button",
    ".sidebar .nav-item",
    ".profile-card",
    ".mobile-nav button"
  ].join(",");

  const COMPACT_CARD_BOX_SELECTOR = [
    ".task-item", ".skill-mini", ".meaning-option", ".assessment-option", ".option-button", ".reading-option", ".lesson-item",
    ".scenario-button", ".method-list li", ".dictation-clues > div", ".mini-stat-row",
    ".mastery-row", ".activity-item", ".grammar-example", ".speech-score-item",
    ".vocab-mode-tabs button", ".rating-grid button", ".segmented-control button",
    ".phrase-chips > span", ".hint-row > span", ".keyword-row > span", ".status-chip",
    ".session-counter", ".review-stat-grid article", ".review-suggestion-item", ".review-list-item",
    ".button-row .button", ".hero-actions .button", ".route-summary-meta",
    ".streak-pill", ".topbar .icon-button", ".sidebar .nav-item", ".profile-card",
    ".mobile-nav button"
  ].join(",");

  const TASK_DETAILS = {
    vocabulary: {
      title: "到期单词复习",
      reason: "在遗忘前再见一次",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h9A2.5 2.5 0 0 1 16.5 7v13H7a3 3 0 0 1-3-3V5.5a1 1 0 0 1 1-1Z"/><path d="M7 20a3 3 0 0 1 3-3h6.5"/></svg>'
    },
    grammar: {
      title: "一节语法微课",
      reason: "补强最近的薄弱结构",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M7 9h10M6 13h12M9 17h6"/></svg>'
    },
    translation: {
      title: "一句自然翻译",
      reason: "从逐字翻译转向自然表达",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h9M8.5 3v2M6 9c2.8-1.4 4.4-3 5.5-5M13 20l3.5-8 3.5 8M14.4 17h4.2"/></svg>'
    },
    listening: {
      title: "三遍法听力",
      reason: "先抓主旨，再抓关键信息",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v7H5a1 1 0 0 1-1-1v-6Zm16 0h-3v7h2a1 1 0 0 0 1-1v-6Z"/></svg>'
    },
    speaking: {
      title: "一个口语场景",
      reason: "练习面试中最常用的表达",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6"/></svg>'
    },
    reading: {
      title: "一篇双语阅读",
      reason: "练主旨、细节与语境推断",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>'
    }
  };

  const DEFAULT_STATE = {
    schemaVersion: SCHEMA_VERSION,
    contentVersion: CONTENT.version,
    profile: {
      name: "学习者",
      level: "A2",
      goal: "overseas",
      dailyMinutes: 20,
      accent: "en-US",
      theme: "light",
      voiceName: ""
    },
    xp: 0,
    streak: { count: 0, lastStudyDate: null },
    skills: { vocabulary: 34, grammar: 30, translation: 28, listening: 26, speaking: 24, reading: 25 },
    reviews: {},
    favorites: [],
    mistakes: [],
    grammarCompleted: [],
    attempts: [],
    indices: { vocabulary: 0, grammar: 0, translation: 0, listening: 0, speaking: 0, reading: 0 },
    daily: { date: "", nonce: 0, completed: {} }
  };

  let storageAvailable = true;
  let state = loadState();
  let currentView = "dashboard";
  let toastTimer = null;
  let voices = [];
  let vocabularyQueue = [];
  let vocabularySessionIndex = 0;
  const vocabularyReviewedThisSession = new Set();
  let vocabularyMode = "review";
  let vocabularyExerciseAnswered = false;
  let spellingHintUsed = false;
  let grammarAnswered = false;
  let listeningAnswered = false;
  let translationScored = false;
  let readingQuestionIndex = 0;
  let readingAnswers = [];
  let readingSessionRecorded = false;
  let recognition = null;
  let recognitionActive = false;
  let recognitionEngineRunning = false;
  let recognitionStopRequested = false;
  let recognitionRestartTimer = null;
  let recognitionStopFallbackTimer = null;
  let recognitionTimerInterval = null;
  let recognitionStartedAt = 0;
  let recognitionFinalText = "";
  let recognitionSessionId = 0;
  let recognitionStartFailures = 0;
  let assessmentSession = null;
  let selectedAssessmentPaper = 0;
  let assessmentRecognition = null;
  let assessmentRecognitionActive = false;
  let assessmentRecognitionFinalText = "";
  let assessmentRecognitionRestartTimer = null;
  let assessmentRecognitionStopFallbackTimer = null;
  let assessmentRecognitionSessionId = 0;
  let cardArtObserver = null;
  let cardArtRefreshQueued = false;
  let sakuraBurstTimer = null;
  let vocabularySearchQuery = "";
  let wordbookMode = "all";
  let mistakeSkillFilter = "all";
  const viewPagination = new Map();

  function $(selector, root = document) {
    return root.querySelector(selector);
  }

  function $$(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function decorateCardArt(root = document) {
    const pinArtwork = (boxes, entries) => {
      boxes.forEach((box, index) => {
        const entry = entries[index % entries.length];
        const watermark = $(':scope > .card-anime-watermark', box);
        if (!watermark || !entry) return;
        watermark.style.setProperty("--card-art-image", `url("${entry.source}")`);
        watermark.style.backgroundPosition = entry.position;
        box.dataset.cardArtwork = entry.source;
      });
    };

    const decorateBoxes = (boxes, gallery, view = "dashboard") => {
      boxes.forEach((box, index) => {
        if ($(':scope > .card-anime-watermark', box)) return;
        const source = gallery[index % gallery.length];
        const watermark = document.createElement("span");
        watermark.className = "card-anime-watermark";
        watermark.setAttribute("aria-hidden", "true");
        watermark.style.setProperty("--card-art-image", `url("${source}")`);
        box.classList.add("has-anime-watermark");
        if (box.matches(COMPACT_CARD_BOX_SELECTOR)) box.classList.add("has-compact-anime-watermark");
        if (view === "vocabulary") box.classList.add("uses-refresh-artwork");
        box.dataset.cardArtwork = source;
        box.insertBefore(watermark, box.firstChild);
      });
    };

    $$('[data-view-panel]', root).forEach((panel) => {
      const view = panel.dataset.viewPanel;
      const gallery = view === "vocabulary" ? VOCABULARY_REFRESH_GALLERY : (CARD_ART_LIBRARY[view] || []);
      if (!gallery.length) return;
      if (view === "vocabulary") panel.dataset.refreshArtwork = VOCABULARY_REFRESH_GALLERY.join(",");

      decorateBoxes(
        $$(CARD_BOX_SELECTOR, panel).filter((box) => !box.closest(".module-character-card") && !box.classList.contains("anime-character-card")),
        gallery,
        view
      );
    });

    const globalGallery = CARD_ART_LIBRARY.dashboard;
    decorateBoxes($$(GLOBAL_CARD_BOX_SELECTOR, root), globalGallery, "dashboard");

    const dashboardPanel = $('[data-view-panel="dashboard"]', root) || $('[data-view-panel="dashboard"]');
    if (dashboardPanel) {
      pinArtwork($$('.route-board .task-item', dashboardPanel), FEATURED_CARD_ART.dashboardTasks);
      const focusCard = $('.dashboard-grid > .focus-card', dashboardPanel);
      if (focusCard) pinArtwork([focusCard], [FEATURED_CARD_ART.dashboardFocus]);
    }

    const vocabularyPanel = $('[data-view-panel="vocabulary"]', root) || $('[data-view-panel="vocabulary"]');
    const dictationZone = vocabularyPanel && $('.dictation-listen-zone', vocabularyPanel);
    if (dictationZone) pinArtwork([dictationZone], [FEATURED_CARD_ART.vocabularyDictation]);
    if (vocabularyPanel) {
      const vocabularyPracticeCards = ["#word-card", "#spelling-card", "#meaning-card"]
        .map((selector) => $(selector, vocabularyPanel))
        .filter(Boolean);
      const refreshEntries = VOCABULARY_REFRESH_GALLERY.slice(0, vocabularyPracticeCards.length)
        .map((source, index) => ({ source, position: `${42 + index * 8}% 18%` }));
      pinArtwork(vocabularyPracticeCards, refreshEntries);
    }

    const listeningPanel = $('[data-view-panel="listening"]', root) || $('[data-view-panel="listening"]');
    const listeningPlayer = listeningPanel && $('.audio-player-card', listeningPanel);
    if (listeningPlayer) pinArtwork([listeningPlayer], [FEATURED_CARD_ART.listeningPlayer]);
    const listeningQuestionPage = listeningPanel && $('.listening-question-stage', listeningPanel);
    if (listeningQuestionPage) pinArtwork([listeningQuestionPage], [FEATURED_CARD_ART.listeningQuestion]);

    const grammarPanel = $('[data-view-panel="grammar"]', root) || $('[data-view-panel="grammar"]');
    const grammarQuizPage = grammarPanel && $('.grammar-quiz-stage', grammarPanel);
    if (grammarQuizPage) pinArtwork([grammarQuizPage], [FEATURED_CARD_ART.grammarQuiz]);

    const translationPanel = $('[data-view-panel="translation"]', root) || $('[data-view-panel="translation"]');
    const translationStage = translationPanel && $('.translation-stage', translationPanel);
    if (translationStage) pinArtwork([translationStage], [FEATURED_CARD_ART.translationStage]);

    const progressPanel = $('[data-view-panel="progress"]', root) || $('[data-view-panel="progress"]');
    if (progressPanel) {
      pinArtwork($$('.progress-summary-grid .stat-card', progressPanel), FEATURED_CARD_ART.progressStats);
    }

    $$('[data-view-panel] .view-page', root).forEach((page) => {
      const pageView = page.closest('[data-view-panel]')?.dataset.viewPanel;
      const pageIndex = page.dataset.viewPageIndex;
      const isDashboardRoute = pageView === 'dashboard' && pageIndex === '1';
      const isDashboardSkills = pageView === 'dashboard' && pageIndex === '2';
      const isVocabularyPage = pageView === 'vocabulary';
      const isGrammarQuiz = page.matches('.grammar-quiz-stage');
      const isTranslationPractice = page.matches('.translation-stage');
      const isListeningQuestion = page.matches('.listening-question-stage');
      const isAssessmentQuestion = page.matches('.assessment-question-stage');
      const isReadingQuestion = page.matches('.reading-question-stage');
      const primaryCharacterArt = isGrammarQuiz || isTranslationPractice || isListeningQuestion || isReadingQuestion;
      const curatedCardArt = isDashboardRoute || isDashboardSkills || isVocabularyPage
        || isGrammarQuiz || isTranslationPractice || isListeningQuestion || isReadingQuestion || isAssessmentQuestion;
      const dedicatedCharacterElement = page.querySelector('.module-character-card, .progress-character-art, .anime-character-card, .reading-cinematic-art, .reading-question-art, .reading-translation-art');
      const characterBackdrop = Boolean(page.dataset.pageArtwork && !page.dataset.pageArtwork.includes('mizuki-sakura-'));
      const dedicatedCharacter = Boolean(dedicatedCharacterElement || characterBackdrop);
      const hoverCardArtwork = dedicatedCharacter || curatedCardArt;
      page.classList.toggle('has-dedicated-character', dedicatedCharacter);
      page.classList.toggle('has-primary-character-art', primaryCharacterArt);
      page.classList.toggle('has-curated-card-art', curatedCardArt);
      page.classList.toggle('has-hover-card-art', hoverCardArtwork);
      let candidateBoxes;
      if (isVocabularyPage) {
        candidateBoxes = $$('.vocab-mode-tabs button, .meaning-option, .rating-grid button', page);
      } else if (isGrammarQuiz || isListeningQuestion) {
        candidateBoxes = $$('.option-button', page);
      } else if (isReadingQuestion) {
        candidateBoxes = $$('.reading-option', page);
      } else if (isAssessmentQuestion) {
        candidateBoxes = $$('.assessment-option', page);
      } else if (isDashboardRoute || isDashboardSkills || isTranslationPractice) {
        candidateBoxes = [];
      } else if (characterBackdrop || pageView === 'dashboard') {
        candidateBoxes = $$('.task-item, .focus-card, .skill-mini', page);
      } else {
        candidateBoxes = Array.from(page.children).filter((child) =>
          child.classList?.contains('has-anime-watermark')
          && !child.querySelector('.module-character-card, .progress-character-art, .anime-character-card'));
      }
      const directCandidates = new Set(candidateBoxes);
      $$('.has-anime-watermark', page).forEach((box) => {
        const alwaysShowArtwork = box.matches('.progress-summary-grid > .stat-card')
          || (isDashboardRoute && box.matches('.route-board .task-item, .dashboard-grid > .focus-card'))
          || (isDashboardSkills && box.matches('.skill-mini'))
          || (isVocabularyPage && box.matches('.vocabulary-stage > .word-card'));
        const revealOnHover = Boolean(hoverCardArtwork && directCandidates.has(box) && !alwaysShowArtwork);
        box.classList.toggle('always-show-card-art', alwaysShowArtwork);
        box.classList.toggle('hover-reveal-art', revealOnHover);
        box.classList.toggle('suppress-nested-art', Boolean(hoverCardArtwork && !revealOnHover && !alwaysShowArtwork));
        if (!revealOnHover) box.classList.remove('is-art-revealed');
      });
    });
  }

  function createSakuraRain() {
    if ($(".sakura-rain")) return;
    const rain = document.createElement("div");
    rain.className = "sakura-rain";
    rain.setAttribute("aria-hidden", "true");
    for (let index = 0; index < 18; index += 1) {
      const petal = document.createElement("span");
      petal.className = "sakura-petal";
      const sway = 24 + (index % 6) * 11;
      const size = 12 + (index % 5) * 3;
      petal.style.setProperty("--petal-left", `${(index * 47 + 7) % 101}%`);
      petal.style.setProperty("--petal-size", `${size}px`);
      petal.style.setProperty("--petal-height", `${Math.round(size * 0.72)}px`);
      petal.style.setProperty("--petal-duration", `${8.5 + (index % 7) * 1.15}s`);
      petal.style.setProperty("--petal-delay", `${-((index * 1.37) % 12).toFixed(2)}s`);
      petal.style.setProperty("--petal-sway", `${index % 2 ? sway : -sway}px`);
      petal.style.setProperty("--petal-end-sway", `${index % 2 ? -Math.round(sway * 0.45) : Math.round(sway * 0.45)}px`);
      petal.style.setProperty("--petal-opacity", `${0.34 + (index % 4) * 0.08}`);
      petal.style.setProperty("--petal-burst-delay", `${index * 24}ms`);
      rain.appendChild(petal);
    }
    document.body.appendChild(rain);
  }

  function triggerSakuraBurst() {
    const rain = $(".sakura-rain");
    if (!rain) return;
    window.clearTimeout(sakuraBurstTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rain.classList.remove("is-page-burst");
      return;
    }
    rain.classList.remove("is-page-burst");
    void rain.offsetWidth;
    rain.classList.add("is-page-burst");
    sakuraBurstTimer = window.setTimeout(() => {
      rain.classList.remove("is-page-burst");
      sakuraBurstTimer = null;
    }, 1650);
  }

  function setupAnimeDecorations() {
    decorateCardArt();
    createSakuraRain();
    if (cardArtObserver) return;
    cardArtObserver = new MutationObserver(() => {
      if (cardArtRefreshQueued) return;
      cardArtRefreshQueued = true;
      queueMicrotask(() => {
        cardArtRefreshQueued = false;
        decorateCardArt();
      });
    });
    cardArtObserver.observe($("#main-content"), { childList: true, subtree: true });
  }

  function createPagerButton(direction, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `view-pager-button view-pager-${direction}`;
    button.dataset.viewPageTurn = direction;
    button.setAttribute("aria-label", label);
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = direction === "previous" ? "←" : "→";
    const text = document.createElement("span");
    text.textContent = label;
    button.append(arrow, text);
    return button;
  }

  function updateViewPager(view) {
    const pagination = viewPagination.get(view);
    if (!pagination) return;
    const { index, pages, pager } = pagination;
    const [page, label] = pages[index];
    const previousButton = $('[data-view-page-turn="previous"]', pager);
    const nextButton = $('[data-view-page-turn="next"]', pager);
    $(".view-pager-status", pager).textContent = `${index + 1} / ${pages.length} · ${label}`;
    previousButton.disabled = view === VIEW_ORDER[0] && index === 0;
    const lockedQuestionPage = (view === "grammar" && index === 1 && !grammarAnswered)
      || (view === "listening" && index === 1 && !listeningAnswered)
      || (view === "assessment" && (index === 0 || index === 1));
    nextButton.disabled = lockedQuestionPage || (view === VIEW_ORDER[VIEW_ORDER.length - 1] && index === pages.length - 1);
    pager.setAttribute("aria-label", `${VIEW_COPY[view][1]}，第 ${index + 1} 页，共 ${pages.length} 页`);
    page.dataset.pageLabel = label;
  }

  function applyViewPage(view, nextIndex, direction = "forward", animate = true) {
    const pagination = viewPagination.get(view);
    if (!pagination) return false;
    const boundedIndex = clamp(nextIndex, 0, pagination.pages.length - 1);
    const previousIndex = pagination.index;
    const previousPage = pagination.pages[previousIndex][0];
    const nextPage = pagination.pages[boundedIndex][0];

    const commit = () => {
      $$('.hover-reveal-art.is-art-revealed').forEach((card) => card.classList.remove('is-art-revealed'));
      pagination.pages.forEach(([page], index) => {
        const active = index === boundedIndex;
        page.hidden = !active;
        page.inert = !active;
        page.setAttribute("aria-hidden", String(!active));
        page.classList.toggle("is-active-view-page", active);
      });
      pagination.index = boundedIndex;
      nextPage.scrollTop = 0;
      updateViewPager(view);
      syncReadingFocus();
    };

    if (boundedIndex === previousIndex) {
      commit();
      return true;
    }

    document.documentElement.dataset.pageDirection = direction;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    commit();
    if (animate && !reduceMotion) {
      triggerSakuraBurst();
      document.documentElement.classList.add("is-page-transitioning");
      const className = direction === "backward" ? "page-enter-backward" : "page-enter-forward";
      nextPage.classList.remove("page-enter-forward", "page-enter-backward");
      void nextPage.offsetWidth;
      nextPage.classList.add(className);
      window.setTimeout(() => {
        nextPage.classList.remove(className);
        document.documentElement.classList.remove("is-page-transitioning");
      }, 520);
    }
    return true;
  }

  function turnLearningPage(step) {
    if (recognitionActive || recognitionEngineRunning || assessmentRecognitionActive) {
      showToast("请先点击停止录音，再翻到下一页。", 3200);
      return;
    }
    const pagination = viewPagination.get(currentView);
    if (!pagination) return;
    const nextPageIndex = pagination.index + step;
    const direction = step > 0 ? "forward" : "backward";
    if (nextPageIndex >= 0 && nextPageIndex < pagination.pages.length) {
      applyViewPage(currentView, nextPageIndex, direction, true);
      return;
    }

    const viewIndex = VIEW_ORDER.indexOf(currentView);
    const nextViewIndex = viewIndex + step;
    if (nextViewIndex < 0 || nextViewIndex >= VIEW_ORDER.length) return;
    const nextView = VIEW_ORDER[nextViewIndex];
    const targetPagination = viewPagination.get(nextView);
    const targetPageIndex = nextView === "assessment"
      ? (assessmentSession?.finishedAt && assessmentSession.mode !== "sprint" ? 2 : 0)
      : step > 0 ? 0 : targetPagination.pages.length - 1;
    navigate(nextView, { focus: true, direction, pageIndex: targetPageIndex });
  }

  function setupViewPagination() {
    for (const view of VIEW_ORDER) {
      const panel = $(`[data-view-panel="${view}"]`);
      const configuredPages = (VIEW_PAGE_CONFIG[view] || [])
        .map(([selector, label]) => [$(selector, panel), label])
        .filter(([page]) => Boolean(page));
      if (!configuredPages.length) continue;

      panel.classList.add("view-page-host");
      const parent = configuredPages[0][0].parentElement;
      if (configuredPages.every(([page]) => page.parentElement === parent) && parent !== panel) {
        parent.classList.add("view-page-deck");
      } else {
        panel.classList.add("view-page-deck", "view-page-deck-direct");
      }
      configuredPages.forEach(([page], index) => {
        page.classList.add("view-page");
        page.dataset.viewPageIndex = String(index);
        page.style.viewTransitionName = "none";
        const pageArtwork = PAGE_ART_LIBRARY[view]?.[index % PAGE_ART_LIBRARY[view].length];
        if (pageArtwork && !page.classList.contains("hero-card")) {
          const backdrop = document.createElement("span");
          backdrop.className = "page-anime-backdrop";
          backdrop.setAttribute("aria-hidden", "true");
          backdrop.style.setProperty("--page-art-image", `url("${pageArtwork}")`);
          page.classList.add("has-page-anime-backdrop");
          page.dataset.pageArtwork = pageArtwork;
          page.insertBefore(backdrop, page.firstChild);
        }
      });

      const pager = document.createElement("nav");
      pager.className = "view-pager";
      const previousButton = createPagerButton("previous", "上一页");
      const status = document.createElement("span");
      status.className = "view-pager-status";
      status.setAttribute("aria-live", "polite");
      const nextButton = createPagerButton("next", "下一页");
      pager.append(previousButton, status, nextButton);
      panel.appendChild(pager);

      viewPagination.set(view, { index: 0, pages: configuredPages, pager });
      applyViewPage(view, 0, "forward", false);
    }

    document.documentElement.classList.add("pagination-ready");
  }

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addDays(dateKey, days) {
    const [year, month, day] = dateKey.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);
    return localDateKey(date);
  }

  function safeInteger(value, fallback, min, max) {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? clamp(parsed, min, max) : fallback;
  }

  function migrateState(raw) {
    const next = clone(DEFAULT_STATE);
    if (!raw || typeof raw !== "object") return next;

    next.schemaVersion = SCHEMA_VERSION;
    next.contentVersion = CONTENT.version;
    next.profile = { ...next.profile, ...(raw.profile || {}) };
    next.profile.name = String(next.profile.name || "学习者").slice(0, 20);
    next.profile.level = ["A1", "A2", "B1", "B2", "C1"].includes(next.profile.level) ? next.profile.level : "A2";
    next.profile.goal = ["overseas", "work", "daily", "exam"].includes(next.profile.goal) ? next.profile.goal : "overseas";
    next.profile.dailyMinutes = safeInteger(next.profile.dailyMinutes, 20, 10, 45);
    next.profile.accent = ["en-US", "en-GB"].includes(next.profile.accent) ? next.profile.accent : "en-US";
    next.profile.theme = ["light", "dark", "system"].includes(next.profile.theme) ? next.profile.theme : "light";
    next.xp = safeInteger(raw.xp, 0, 0, 10000000);
    next.streak = { ...next.streak, ...(raw.streak || {}) };
    next.streak.count = safeInteger(next.streak.count, 0, 0, 100000);
    next.skills = { ...next.skills, ...(raw.skills || {}) };
    Object.keys(SKILLS).forEach((skill) => {
      next.skills[skill] = safeInteger(next.skills[skill], DEFAULT_STATE.skills[skill], 0, 100);
    });
    const validVocabularyIds = new Set(CONTENT.vocabulary.map((item) => item.id));
    next.reviews = raw.reviews && typeof raw.reviews === "object"
      ? Object.fromEntries(Object.entries(raw.reviews).filter(([itemId]) => validVocabularyIds.has(itemId)))
      : {};
    next.favorites = Array.isArray(raw.favorites)
      ? [...new Set(raw.favorites.filter((itemId) => validVocabularyIds.has(itemId)))].slice(0, CONTENT.vocabulary.length)
      : [];
    const validIdsBySkill = {
      vocabulary: validVocabularyIds,
      grammar: new Set(CONTENT.grammar.map((item) => item.id)),
      translation: new Set(CONTENT.translations.map((item) => item.id)),
      listening: new Set(CONTENT.listening.map((item) => item.id)),
      speaking: new Set(CONTENT.speaking.map((item) => item.id)),
      reading: new Set((CONTENT.reading || []).map((item) => item.id))
    };
    const allowedMistakeTypes = new Set(["meaning", "spelling", "grammar", "translation", "listening", "speaking", "reading"]);
    next.mistakes = Array.isArray(raw.mistakes)
      ? raw.mistakes
        .filter((entry) => entry && validIdsBySkill[entry.skill]?.has(entry.itemId) && allowedMistakeTypes.has(entry.type))
        .map((entry) => ({
          key: `${entry.type}:${entry.itemId}`,
          type: entry.type,
          skill: entry.skill,
          itemId: entry.itemId,
          prompt: String(entry.prompt || "").slice(0, 260),
          answer: String(entry.answer || "").slice(0, 320),
          userAnswer: String(entry.userAnswer || "").slice(0, 260),
          count: safeInteger(entry.count, 1, 1, 9999),
          lastAt: String(entry.lastAt || new Date().toISOString())
        }))
        .filter((entry, index, entries) => entries.findIndex((candidate) => candidate.key === entry.key) === index)
        .slice(0, MAX_MISTAKES)
      : [];
    next.grammarCompleted = Array.isArray(raw.grammarCompleted)
      ? raw.grammarCompleted.filter((id) => CONTENT.grammar.some((item) => item.id === id))
      : [];
    next.attempts = Array.isArray(raw.attempts) ? raw.attempts.slice(-MAX_ATTEMPTS) : [];
    next.indices = { ...next.indices, ...(raw.indices || {}) };
    next.daily = { ...next.daily, ...(raw.daily || {}) };
    next.daily.completed = raw.daily && raw.daily.completed && typeof raw.daily.completed === "object" ? raw.daily.completed : {};
    return next;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_STATE);
      const migrated = migrateState(JSON.parse(raw));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      } catch (error) {
        storageAvailable = false;
        console.warn("Migrated learning state could not be persisted:", error);
      }
      return migrated;
    } catch (error) {
      storageAvailable = false;
      console.warn("Learning state could not be loaded:", error);
      return clone(DEFAULT_STATE);
    }
  }

  function saveState() {
    state.contentVersion = CONTENT.version;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageAvailable = true;
      return true;
    } catch (error) {
      storageAvailable = false;
      console.warn("Learning state could not be saved:", error);
      showToast("浏览器存储不可用，本次进度只在当前页面保留。", 4200);
      return false;
    }
  }

  function ensureDailyState() {
    const today = localDateKey();
    if (state.daily.date !== today) {
      state.daily = { date: today, nonce: 0, completed: {} };
      saveState();
    }
  }

  function showToast(message, duration = 2600) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), duration);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function goalLabel(goal) {
    return {
      overseas: "海外求职",
      work: "职场沟通",
      daily: "生活口语",
      exam: "综合提升"
    }[goal] || "综合提升";
  }

  function updateStreak() {
    const today = localDateKey();
    const yesterday = addDays(today, -1);
    if (state.streak.lastStudyDate === today) return;
    state.streak.count = state.streak.lastStudyDate === yesterday ? state.streak.count + 1 : 1;
    state.streak.lastStudyDate = today;
  }

  function recordActivity(skill, score, xp, title, { masteryWeight = 0.25, completeDaily = true } = {}) {
    ensureDailyState();
    updateStreak();
    const normalizedScore = clamp(Math.round(score), 0, 100);
    const normalizedWeight = clamp(Number(masteryWeight) || 0, 0, 1);
    state.xp += xp;
    state.skills[skill] = clamp(Math.round(state.skills[skill] * (1 - normalizedWeight) + normalizedScore * normalizedWeight), 0, 100);
    if (completeDaily) state.daily.completed[skill] = true;
    state.attempts.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      date: localDateKey(),
      time: new Date().toISOString(),
      skill,
      score: normalizedScore,
      xp,
      title
    });
    state.attempts = state.attempts.slice(-MAX_ATTEMPTS);
    saveState();
    renderSharedState();
  }

  function practiceCollection(skill) {
    return {
      vocabulary: CONTENT.vocabulary,
      grammar: CONTENT.grammar,
      translation: CONTENT.translations,
      listening: CONTENT.listening,
      speaking: CONTENT.speaking,
      reading: CONTENT.reading || []
    }[skill] || [];
  }

  function findPracticeItem(skill, itemId) {
    return practiceCollection(skill).find((item) => item.id === itemId) || null;
  }

  function mistakeTypeLabel(type) {
    return {
      meaning: "词义辨析",
      spelling: "听音默写",
      grammar: "语法选择",
      translation: "中译英",
      listening: "听力理解",
      speaking: "口语表达",
      reading: "阅读理解"
    }[type] || "练习";
  }

  function mistakePromptForItem(type, item) {
    if (!item) return "";
    if (type === "meaning") return item.word;
    if (type === "spelling") return `${item.definition} · ${clozeVocabularyExample(item)}`;
    if (type === "grammar") return item.quiz?.question || item.title;
    if (type === "translation") return item.source;
    if (type === "listening") return item.question;
    if (type === "speaking") return item.prompt;
    if (type === "reading") return item.questions?.[0]?.question || item.title;
    return item.title || item.word || "练习题";
  }

  function mistakeAnswerForItem(type, item) {
    if (!item) return "";
    if (type === "meaning") return `${item.definition} · ${item.collocation}`;
    if (type === "spelling") return item.word;
    if (type === "grammar") return `${item.quiz?.options?.[item.quiz.answer] || ""} · ${item.quiz?.explanation || ""}`;
    if (type === "translation") return item.answer;
    if (type === "listening") return `${item.options?.[item.answer] || ""} · ${item.text}`;
    if (type === "speaking") return item.target;
    if (type === "reading") {
      const question = item.questions?.[0];
      return question ? `${question.options?.[question.answer] || ""} · ${question.optionsZh?.[question.answer] || ""}` : item.summaryZh || "";
    }
    return "";
  }

  function recordMistake({ type, skill, item, prompt, answer, userAnswer = "" }) {
    if (!item?.id || !SKILLS[skill]) return;
    const key = `${type}:${item.id}`;
    const existing = state.mistakes.find((entry) => entry.key === key);
    if (existing) {
      existing.prompt = String(prompt || existing.prompt || "").slice(0, 260);
      existing.answer = String(answer || existing.answer || "").slice(0, 320);
      existing.userAnswer = String(userAnswer || "").slice(0, 260);
      existing.count = safeInteger(existing.count, 1, 1, 9998) + 1;
      existing.lastAt = new Date().toISOString();
    } else {
      state.mistakes.push({
        key,
        type,
        skill,
        itemId: item.id,
        prompt: String(prompt || "").slice(0, 260),
        answer: String(answer || "").slice(0, 320),
        userAnswer: String(userAnswer || "").slice(0, 260),
        count: 1,
        lastAt: new Date().toISOString()
      });
    }
    state.mistakes.sort((left, right) => String(right.lastAt).localeCompare(String(left.lastAt)));
    state.mistakes = state.mistakes.slice(0, MAX_MISTAKES);
    saveState();
    updateReviewBadge();
  }

  function resolveMistake(type, itemId) {
    const key = `${type}:${itemId}`;
    const next = state.mistakes.filter((entry) => entry.key !== key);
    if (next.length === state.mistakes.length) return false;
    state.mistakes = next;
    saveState();
    updateReviewBadge();
    return true;
  }

  function updateFavoriteButton(itemId) {
    const button = $("#toggle-favorite-word");
    if (!button) return;
    const active = state.favorites.includes(itemId);
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.title = active ? "取消收藏当前单词" : "收藏当前单词";
    $("span", button).textContent = active ? "★" : "☆";
    $("strong", button).textContent = active ? "已收藏" : "收藏";
  }

  function toggleFavorite(itemId, announce = true) {
    const item = CONTENT.vocabulary.find((word) => word.id === itemId);
    if (!item) return;
    const active = state.favorites.includes(itemId);
    state.favorites = active ? state.favorites.filter((id) => id !== itemId) : [itemId, ...state.favorites];
    saveState();
    updateFavoriteButton(itemId);
    updateReviewBadge();
    if (currentView === "review") renderReview();
    if (announce) showToast(active ? `已取消收藏 ${item.word}` : `已收藏 ${item.word}，可在复习中心找到。`, 2600);
  }

  function updateReviewBadge() {
    const badge = $("#review-nav-badge");
    if (!badge) return;
    const count = state.mistakes.length;
    badge.textContent = count > 99 ? "99+" : String(count);
    badge.hidden = count === 0;
  }

  function dueVocabularyCount() {
    const today = localDateKey();
    return CONTENT.vocabulary.filter((item) => {
      const review = state.reviews[item.id];
      return Boolean(review && review.lastReviewedAt && (!review.dueAt || review.dueAt <= today));
    }).length;
  }

  function newVocabularyCount() {
    return CONTENT.vocabulary.filter((item) => !state.reviews[item.id]?.lastReviewedAt).length;
  }

  function getDailyPlan() {
    ensureDailyState();
    const durationTotal = Number(state.profile.dailyMinutes) || 20;
    const skillCount = Object.keys(SKILLS).length;
    const baseDuration = Math.max(1, Math.floor(durationTotal / skillCount));
    const remainder = Math.max(0, durationTotal - baseDuration * skillCount);
    const dueCount = dueVocabularyCount();
    const newCount = newVocabularyCount();
    const rankedSkills = Object.keys(SKILLS).sort((a, b) => {
      if (a === "vocabulary" && dueCount > 0) return -1;
      if (b === "vocabulary" && dueCount > 0) return 1;
      const delta = state.skills[a] - state.skills[b];
      if (delta !== 0) return delta;
      return a.localeCompare(b);
    });
    const rotateBy = state.daily.nonce % rankedSkills.length;
    const rotated = rotateBy
      ? [rankedSkills[0], ...rankedSkills.slice(1 + rotateBy), ...rankedSkills.slice(1, 1 + rotateBy)]
      : rankedSkills;

    return rotated.map((skill, index) => {
      const detail = TASK_DETAILS[skill];
      let reason = detail.reason;
      if (skill === "vocabulary") {
        reason = dueCount > 0 ? `${dueCount} 个词已到复习时间` : newCount > 0 ? `${Math.min(newCount, 8)} 个新词等待解锁` : "用新语境巩固已学词汇";
      } else if (state.skills[skill] === Math.min(...Object.values(state.skills))) {
        reason = `当前掌握度最低，优先练习`;
      }
      return {
        skill,
        ...detail,
        reason,
        duration: baseDuration + (index < remainder ? 1 : 0),
        complete: Boolean(state.daily.completed[skill])
      };
    });
  }

  function navigate(view, options = {}) {
    if (!VIEW_COPY[view]) view = "dashboard";
    const previousView = currentView;
    const previousViewIndex = VIEW_ORDER.indexOf(previousView);
    const nextViewIndex = VIEW_ORDER.indexOf(view);
    const direction = options.direction || (nextViewIndex < previousViewIndex ? "backward" : "forward");
    currentView = view;

    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
    if (assessmentRecognitionActive) stopAssessmentRecognition(true);

    $$('[data-view-panel]').forEach((panel) => {
      const active = panel.dataset.viewPanel === view;
      panel.hidden = !active;
      panel.classList.remove("is-active");
      if (active) {
        // Restart the short page reveal whenever the learner changes modules.
        panel.dataset.enterDirection = direction;
        void panel.offsetWidth;
        panel.classList.add("is-active");
      }
    });
    $$('[data-navigation] [data-view]').forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    $("#page-eyebrow").textContent = VIEW_COPY[view][0];
    const pageTitle = $("#page-title");
    pageTitle.classList.remove("is-typing");
    pageTitle.textContent = VIEW_COPY[view][1];
    void pageTitle.offsetWidth;
    pageTitle.classList.add("is-typing");
    document.documentElement.dataset.currentView = view;
    document.documentElement.dataset.pageDirection = direction;
    if (window.location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);

    renderView(view);
    const pagination = viewPagination.get(view);
    if (pagination) {
      const requestedPage = Number.isInteger(options.pageIndex)
        ? options.pageIndex
        : view === "assessment" && assessmentSession?.finishedAt && assessmentSession.mode !== "sprint" ? 2 : 0;
      applyViewPage(view, requestedPage, direction, false);
    }
    if (previousView !== view && options.animate !== false) triggerSakuraBurst();
    if (options.focus) {
      $("#main-content").focus({ preventScroll: true });
      const activePage = $(`[data-view-panel="${view}"] .view-page.is-active-view-page`);
      if (activePage) activePage.scrollTop = 0;
    }
  }

  function renderView(view) {
    if (view === "dashboard") renderDashboard();
    if (view === "vocabulary") renderVocabulary();
    if (view === "grammar") renderGrammar();
    if (view === "translation") renderTranslation();
    if (view === "listening") renderListening();
    if (view === "speaking") renderSpeaking();
    if (view === "reading") renderReading();
    if (view === "review") renderReview();
    if (view === "assessment") renderAssessment();
    if (view === "progress") renderProgress();
  }

  function renderSharedState() {
    ensureDailyState();
    const profile = state.profile;
    const displayName = profile.name.trim() || "学习者";
    $("#profile-name-sidebar").textContent = displayName;
    $("#profile-level-sidebar").textContent = `${profile.level} · ${goalLabel(profile.goal)}`;
    $("#profile-avatar").textContent = displayName.slice(0, 1).toUpperCase();
    $("#streak-count").textContent = state.streak.count;
    const dueWords = dueVocabularyCount();
    $("#due-word-badge").textContent = dueWords > 0 ? (dueWords > 99 ? "99+" : dueWords) : (newVocabularyCount() > 0 ? "新" : "0");
    updateReviewBadge();
    $("#content-version").textContent = CONTENT.version;
    applyTheme();
    if (currentView === "dashboard") renderDashboard();
    if (currentView === "review") renderReview();
    if (currentView === "progress") renderProgress();
  }

  function renderDashboard() {
    ensureDailyState();
    const plan = getDailyPlan();
    const completeCount = plan.filter((item) => item.complete).length;
    const percent = Math.round((completeCount / plan.length) * 100);
    const name = state.profile.name.trim();
    const hour = new Date().getHours();
    const greeting = hour < 11 ? "早上好" : hour < 18 ? "你好" : "晚上好";
    $("#greeting-name").textContent = name && name !== "学习者" ? `${greeting}，${name}` : greeting;
    $("#today-label").textContent = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
    $("#daily-minutes").textContent = state.profile.dailyMinutes;
    $("#daily-task-count").textContent = plan.length;
    $("#daily-route-count").textContent = `${plan.length} 项任务`;
    $("#daily-progress-number").textContent = `${percent}%`;
    $("#daily-progress-orb").style.setProperty("--progress", `${percent * 3.6}deg`);
    const weakest = Object.keys(SKILLS).sort((a, b) => state.skills[a] - state.skills[b])[0];
    $("#hero-reason").textContent = completeCount === plan.length
      ? "今天的闭环已经完成。明天会根据今天的结果安排下一步。"
      : `系统把 ${SKILLS[weakest].name} 放在优先位置，因为它目前最值得加强。计划会在每次练习后更新。`;

    $("#daily-task-list").innerHTML = plan.map((task) => `
      <button class="task-item${task.complete ? " is-complete" : ""}" type="button" data-task-view="${task.skill}">
        <span class="task-icon ${task.iconClass}">${task.complete ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>' : task.icon}</span>
        <span class="task-copy"><span class="task-title">${escapeHtml(task.title)}</span><small>${escapeHtml(task.reason)}</small></span>
        <span class="task-duration">${task.duration} 分钟</span>
        <span class="task-arrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></span>
      </button>`).join("");

    const strongest = Object.keys(SKILLS).sort((a, b) => state.skills[b] - state.skills[a])[0];
    const skillLevel = (score) => score >= 80 ? "稳定发挥" : score >= 60 ? "继续巩固" : score >= 40 ? "正在成长" : "优先加强";
    $("#dashboard-skill-strip").innerHTML = Object.entries(SKILLS).map(([key, meta]) => `
      <button class="skill-mini skill-dashboard-card" type="button" data-go-view="${key}" style="--skill-color:${meta.color}">
        <span class="skill-card-topline"><span class="skill-card-dot"></span><span>${meta.name}</span><span class="skill-card-action">去练习 →</span></span>
        <span class="skill-card-score"><strong>${state.skills[key]}%</strong><small>${skillLevel(state.skills[key])}</small></span>
        <span class="progress-track"><span class="progress-fill" style="--value:${state.skills[key]}%;--color:${meta.color}"></span></span>
        <span class="skill-card-copy">${SKILL_DASHBOARD_COPY[key]}</span>
      </button>`).join("");
    $("#skills-coach-title").textContent = `${SKILLS[weakest].name}是今天的优先训练`;
    $("#skills-coach-copy").textContent = `${SKILLS[strongest].name}目前最稳定；建议先完成一次${SKILLS[weakest].name}练习，再回来查看能力变化。`;
    $("#skills-coach-action").dataset.goView = weakest;
    $("#skills-coach-action").textContent = `开始${SKILLS[weakest].name}训练`;
  }

  function getVocabularyReview(itemId) {
    return state.reviews[itemId] || {
      itemId,
      ease: 2.5,
      intervalDays: 0,
      repetitions: 0,
      lapses: 0,
      dueAt: localDateKey(),
      lastReviewedAt: null,
      lastRating: null
    };
  }

  function buildVocabularyQueue() {
    const today = localDateKey();
    const available = CONTENT.vocabulary.filter((item) => !vocabularyReviewedThisSession.has(item.id));
    const due = available
      .filter((item) => state.reviews[item.id]?.lastReviewedAt && (!state.reviews[item.id].dueAt || state.reviews[item.id].dueAt <= today))
      .sort((left, right) => getVocabularyReview(left.id).dueAt.localeCompare(getVocabularyReview(right.id).dueAt));
    const fresh = available.filter((item) => !state.reviews[item.id]?.lastReviewedAt);
    const future = available
      .filter((item) => state.reviews[item.id]?.lastReviewedAt && state.reviews[item.id].dueAt > today)
      .sort((left, right) => getVocabularyReview(left.id).dueAt.localeCompare(getVocabularyReview(right.id).dueAt));
    const prioritized = [...due, ...fresh, ...future];
    if (!prioritized.length) {
      vocabularyReviewedThisSession.clear();
      return buildVocabularyQueue();
    }
    return prioritized.slice(0, 8);
  }

  function renderVocabulary() {
    if (!vocabularyQueue.length) vocabularyQueue = buildVocabularyQueue();
    vocabularySessionIndex = clamp(vocabularySessionIndex, 0, vocabularyQueue.length - 1);
    const item = vocabularyQueue[vocabularySessionIndex];
    const review = getVocabularyReview(item.id);
    const today = localDateKey();
    const reviewedCount = vocabularyReviewedThisSession.size;
    vocabularyExerciseAnswered = false;
    spellingHintUsed = false;

    $$('[data-vocab-mode]').forEach((button) => {
      const active = button.dataset.vocabMode === vocabularyMode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $("#word-card").hidden = vocabularyMode !== "review";
    $("#spelling-card").hidden = vocabularyMode !== "spelling";
    $("#meaning-card").hidden = vocabularyMode !== "meaning";

    $("#vocab-queue-label").textContent = `到期 ${dueVocabularyCount()} · 新词 ${newVocabularyCount()}`;
    $("#vocab-topic-label").textContent = item.topic;
    $("#vocab-session-counter").textContent = `本轮 ${reviewedCount} / ${vocabularyQueue.length}`;
    $("#vocab-total-count").textContent = CONTENT.vocabulary.length;
    updateFavoriteButton(item.id);
    $("#word-level").textContent = item.level;
    $("#word-pos").textContent = item.partOfSpeech;
    $("#word-text").textContent = item.word;
    $("#word-text").classList.toggle("is-long-word", item.word.length >= 11);
    $("#word-text").classList.toggle("is-extra-long-word", item.word.length >= 15);
    $("#word-phonetic").textContent = item.phonetic;
    $("#word-definition").textContent = item.definition;
    $("#word-definition-en").textContent = item.definitionEn;
    $("#word-collocation").textContent = item.collocation;
    $("#word-example").textContent = item.example;
    $("#word-example-zh").textContent = item.exampleZh;
    $("#word-prompt").hidden = false;
    $("#word-answer").hidden = true;
    $("#reveal-word").hidden = false;
    $("#word-rating-grid").hidden = true;

    if (vocabularyMode === "review") {
      $("#vocab-aside-title").textContent = "为什么现在复习？";
      $("#vocab-reason").textContent = !review.lastReviewedAt
        ? "这是一个新词。完成评级后，它会在你最可能忘记前再次出现。"
        : review.dueAt <= today
          ? `它今天到期；上次选择了“${ratingLabel(review.lastRating)}”。`
          : `它原定于 ${review.dueAt} 复习，本轮作为语境巩固。`;
    } else if (vocabularyMode === "spelling") {
      renderSpellingQuestion(item);
      $("#vocab-aside-title").textContent = "默写如何计入复习？";
      $("#vocab-reason").textContent = "无提示写对会延长复习间隔；使用提示后写对按“模糊”记录；写错则安排次日重练。";
    } else {
      renderMeaningQuestion(item);
      $("#vocab-aside-title").textContent = "辨义如何计入复习？";
      $("#vocab-reason").textContent = "选择正确会提高词义掌握度；选错会显示正确语境，并把这个词提前加入复习。";
    }

    const reviewValues = Object.values(state.reviews);
    $("#vocab-mastered-count").textContent = reviewValues.filter((value) => value.repetitions >= 3 && value.ease >= 2.3).length;
    $("#vocab-learning-count").textContent = reviewValues.filter((value) => value.lastReviewedAt && value.repetitions < 3).length;
    $("#word-bank-count").textContent = `${vocabularyQueue.length} 个`;
    $(".word-bank-card .section-heading h3").textContent = vocabularyMode === "review" ? "本轮词汇" : "本轮进度";
    $("#word-bank").innerHTML = vocabularyMode === "review"
      ? vocabularyQueue.map((word, index) => `
          <button type="button" class="${index === vocabularySessionIndex ? "is-current" : ""}${vocabularyReviewedThisSession.has(word.id) ? " is-reviewed" : ""}" ${vocabularyReviewedThisSession.has(word.id) ? "disabled" : `data-vocab-index="${index}"`}>${escapeHtml(word.word)}</button>
        `).join("")
      : vocabularyQueue.map((word, index) => `
          <span class="word-bank-step${index === vocabularySessionIndex ? " is-current" : ""}${vocabularyReviewedThisSession.has(word.id) ? " is-reviewed" : ""}" aria-label="第 ${index + 1} 题${vocabularyReviewedThisSession.has(word.id) ? "，已完成" : ""}">${index + 1}</span>
        `).join("");
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function clozeVocabularyExample(item) {
    const blank = "_".repeat(Math.max(4, item.word.replace(/[^a-z]/gi, "").length));
    const variants = [item.word];
    if (/e$/i.test(item.word)) variants.push(`${item.word.slice(0, -1)}ing`, `${item.word}d`);
    variants.push(`${item.word}ing`, `${item.word}ed`, `${item.word}s`, `${item.word}es`);
    const pattern = new RegExp(`\\b(?:${variants.sort((left, right) => right.length - left.length).map(escapeRegExp).join("|")})\\b`, "i");
    if (pattern.test(item.example)) return item.example.replace(pattern, blank);
    return `${blank} · ${item.collocation.replace(new RegExp(escapeRegExp(item.word), "i"), blank)}`;
  }

  function normalizeSpelling(value) {
    return String(value || "")
      .normalize("NFKC")
      .toLocaleLowerCase("en-US")
      .replace(/[’‘]/g, "'")
      .replace(/[‐‑‒–—]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
  }

  function stableHash(value) {
    let hash = 2166136261;
    for (const character of String(value)) {
      hash ^= character.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function meaningDefinitionKey(definition) {
    return String(definition).split(/[；;]/)[0].trim();
  }

  function getMeaningOptions(item) {
    const seenDefinitions = new Set([meaningDefinitionKey(item.definition)]);
    const candidates = CONTENT.vocabulary
      .filter((candidate) => candidate.id !== item.id)
      .sort((left, right) => {
        const leftFit = (left.level === item.level ? 0 : 2) + (left.partOfSpeech === item.partOfSpeech ? 0 : 1);
        const rightFit = (right.level === item.level ? 0 : 2) + (right.partOfSpeech === item.partOfSpeech ? 0 : 1);
        if (leftFit !== rightFit) return leftFit - rightFit;
        return stableHash(`${item.id}:${left.id}`) - stableHash(`${item.id}:${right.id}`);
      });
    const distractors = [];
    for (const candidate of candidates) {
      const key = meaningDefinitionKey(candidate.definition);
      if (!key || seenDefinitions.has(key)) continue;
      seenDefinitions.add(key);
      distractors.push(candidate);
      if (distractors.length === 3) break;
    }
    return [item, ...distractors].sort((left, right) => stableHash(`${item.id}:option:${left.id}`) - stableHash(`${item.id}:option:${right.id}`));
  }

  function renderSpellingQuestion(item) {
    $("#spelling-level").textContent = item.level;
    $("#spelling-definition").textContent = item.definition;
    $("#spelling-example").textContent = clozeVocabularyExample(item);
    $("#spelling-length-hint").textContent = `共 ${item.word.replace(/[^a-z]/gi, "").length} 个字母`;
    $("#spelling-input").value = "";
    $("#spelling-input").disabled = false;
    $("#check-spelling").disabled = false;
    $("#show-spelling-hint").disabled = false;
    $("#spelling-feedback").hidden = true;
    $("#spelling-feedback").classList.remove("is-wrong");
    $("#next-spelling").hidden = true;
  }

  function renderMeaningQuestion(item) {
    $("#meaning-level").textContent = item.level;
    $("#meaning-word").textContent = item.word;
    $("#meaning-word").classList.toggle("is-long-word", item.word.length >= 11);
    $("#meaning-word").classList.toggle("is-extra-long-word", item.word.length >= 15);
    $("#meaning-phonetic").textContent = item.phonetic;
    $("#meaning-pos").textContent = item.partOfSpeech;
    const options = getMeaningOptions(item);
    $("#meaning-options").innerHTML = options.map((option, index) => `
      <button class="meaning-option" type="button" data-meaning-item-id="${escapeHtml(option.id)}" aria-keyshortcuts="${String.fromCharCode(65 + index)} ${index + 1}">
        <span class="meaning-option-letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHtml(option.definition)}</span>
      </button>`).join("");
    $("#meaning-feedback").hidden = true;
    $("#meaning-feedback").classList.remove("is-wrong");
    $("#next-meaning").hidden = true;
  }

  function ratingLabel(rating) {
    return { again: "忘记", hard: "模糊", good: "记得", easy: "熟练" }[rating] || "未评级";
  }

  function scheduleVocabularyResult(item, rating, result, title) {
    if (vocabularyReviewedThisSession.has(item.id)) return null;
    const review = getVocabularyReview(item.id);
    const today = localDateKey();

    if (rating === "again") {
      review.ease = clamp(review.ease - 0.2, 1.3, 2.8);
      review.intervalDays = 1;
      review.repetitions = 0;
      review.lapses += 1;
    } else if (rating === "hard") {
      review.ease = clamp(review.ease - 0.08, 1.3, 2.8);
      review.intervalDays = Math.max(2, Math.round((review.intervalDays || 1) * 1.2));
      review.repetitions += 1;
    } else if (rating === "good") {
      review.repetitions += 1;
      review.intervalDays = review.repetitions === 1 ? 1 : review.repetitions === 2 ? 3 : Math.max(4, Math.round(review.intervalDays * review.ease));
    } else if (rating === "easy") {
      review.ease = clamp(review.ease + 0.12, 1.3, 2.8);
      review.repetitions += 1;
      review.intervalDays = review.repetitions === 1 ? 4 : Math.max(7, Math.round((review.intervalDays || 3) * review.ease * 1.3));
    }

    review.dueAt = addDays(today, review.intervalDays);
    review.lastReviewedAt = new Date().toISOString();
    review.lastRating = rating;
    state.reviews[item.id] = review;
    vocabularyReviewedThisSession.add(item.id);
    state.indices.vocabulary = (state.indices.vocabulary + 1) % CONTENT.vocabulary.length;
    recordActivity("vocabulary", result.score, result.xp, title);
    return review;
  }

  function advanceVocabularyIndex() {
    if (vocabularySessionIndex < vocabularyQueue.length - 1) {
      vocabularySessionIndex += 1;
    } else {
      vocabularyQueue = buildVocabularyQueue();
      vocabularySessionIndex = 0;
    }
  }

  function advanceVocabularyQuestion() {
    advanceVocabularyIndex();
    renderVocabulary();
  }

  function reviewVocabulary(rating) {
    const item = vocabularyQueue[vocabularySessionIndex];
    if (vocabularyReviewedThisSession.has(item.id)) {
      showToast("这个词本轮已经计分，正在进入下一题。", 2600);
      advanceVocabularyQuestion();
      return;
    }
    const ratings = {
      again: { score: 28, xp: 4 },
      hard: { score: 58, xp: 6 },
      good: { score: 84, xp: 9 },
      easy: { score: 100, xp: 12 }
    };
    const review = scheduleVocabularyResult(item, rating, ratings[rating], `${item.word} · ${ratingLabel(rating)}`);
    if (rating === "again") {
      recordMistake({ type: "meaning", skill: "vocabulary", item, prompt: item.word, answer: mistakeAnswerForItem("meaning", item), userAnswer: "忘记" });
    } else if (["good", "easy"].includes(rating)) {
      resolveMistake("meaning", item.id);
    }
    showToast(`${item.word} 已安排在 ${review.dueAt} 复习。`);
    advanceVocabularyQuestion();
  }

  function revealSpellingHint() {
    if (vocabularyExerciseAnswered) return;
    const item = vocabularyQueue[vocabularySessionIndex];
    const letters = item.word.replace(/[^a-z]/gi, "");
    spellingHintUsed = true;
    $("#spelling-length-hint").textContent = `${letters[0].toUpperCase()} ${Array.from({ length: Math.max(letters.length - 1, 0) }, () => "_").join(" ")} · ${letters.length} 个字母`;
    $("#spelling-input").focus();
  }

  function checkSpellingAnswer() {
    if (vocabularyExerciseAnswered) return;
    const item = vocabularyQueue[vocabularySessionIndex];
    if (vocabularyReviewedThisSession.has(item.id)) {
      advanceVocabularyQuestion();
      return;
    }
    const answer = $("#spelling-input").value.trim();
    if (!answer) {
      showToast("先输入你听到的单词。", 2800);
      $("#spelling-input").focus();
      return;
    }
    vocabularyExerciseAnswered = true;
    const correct = normalizeSpelling(answer) === normalizeSpelling(item.word);
    const rating = correct ? (spellingHintUsed ? "hard" : "good") : "again";
    const result = correct
      ? (spellingHintUsed ? { score: 72, xp: 8 } : { score: 96, xp: 14 })
      : { score: 24, xp: 5 };
    scheduleVocabularyResult(item, rating, result, `${item.word} · 听音默写${correct ? "正确" : "错误"}`);
    if (correct) resolveMistake("spelling", item.id);
    else recordMistake({ type: "spelling", skill: "vocabulary", item, prompt: mistakePromptForItem("spelling", item), answer: item.word, userAnswer: answer });

    const feedback = $("#spelling-feedback");
    feedback.classList.toggle("is-wrong", !correct);
    feedback.innerHTML = correct
      ? `<strong>拼写正确：${escapeHtml(item.word)}</strong><p>${spellingHintUsed ? "使用了提示，本次按“模糊”安排复习。" : "没有使用提示，已经延长这个词的复习间隔。"} 常用搭配：${escapeHtml(item.collocation)}</p>`
      : `<strong>正确拼写是 ${escapeHtml(item.word)}</strong><p>你输入的是“${escapeHtml(answer)}”。这个词已加入次日复习：${escapeHtml(item.example)}</p>`;
    feedback.hidden = false;
    $("#spelling-input").disabled = true;
    $("#check-spelling").disabled = true;
    $("#show-spelling-hint").disabled = true;
    $("#next-spelling").hidden = false;
    $("#next-spelling").focus();
  }

  function answerMeaningQuestion(selectedId) {
    if (vocabularyExerciseAnswered) return;
    const item = vocabularyQueue[vocabularySessionIndex];
    if (vocabularyReviewedThisSession.has(item.id)) {
      advanceVocabularyQuestion();
      return;
    }
    vocabularyExerciseAnswered = true;
    const correct = selectedId === item.id;
    $$('[data-meaning-item-id]').forEach((button) => {
      button.disabled = true;
      if (button.dataset.meaningItemId === item.id) button.classList.add("is-correct");
      if (button.dataset.meaningItemId === selectedId && !correct) button.classList.add("is-wrong");
    });
    scheduleVocabularyResult(
      item,
      correct ? "good" : "again",
      correct ? { score: 92, xp: 12 } : { score: 28, xp: 5 },
      `${item.word} · 词义测试${correct ? "正确" : "错误"}`
    );
    if (correct) resolveMistake("meaning", item.id);
    else {
      const selected = CONTENT.vocabulary.find((candidate) => candidate.id === selectedId);
      recordMistake({ type: "meaning", skill: "vocabulary", item, prompt: item.word, answer: mistakeAnswerForItem("meaning", item), userAnswer: selected?.definition || "未选择" });
    }
    const feedback = $("#meaning-feedback");
    feedback.classList.toggle("is-wrong", !correct);
    feedback.innerHTML = correct
      ? `<strong>判断正确：${escapeHtml(item.definition)}</strong><p>${escapeHtml(item.example)} · ${escapeHtml(item.exampleZh)}</p>`
      : `<strong>${escapeHtml(item.word)}：${escapeHtml(item.definition)}</strong><p>记住搭配：${escapeHtml(item.collocation)}。这个词已安排次日重练。</p>`;
    feedback.hidden = false;
    $("#next-meaning").hidden = false;
    $("#next-meaning").focus();
  }

  function renderGrammar() {
    state.indices.grammar = state.indices.grammar % CONTENT.grammar.length;
    const item = CONTENT.grammar[state.indices.grammar];
    grammarAnswered = false;
    $("#grammar-lesson-list").innerHTML = CONTENT.grammar.map((lesson, index) => `
      <button class="lesson-item${index === state.indices.grammar ? " is-active" : ""}${state.grammarCompleted.includes(lesson.id) ? " is-complete" : ""}" type="button" data-grammar-index="${index}">
        <span class="lesson-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="lesson-copy"><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.category)}</small></span>
        <span class="lesson-check">✓</span>
      </button>`).join("");
    $("#grammar-category").textContent = item.category;
    $("#grammar-title").textContent = item.title;
    $("#grammar-summary").textContent = item.summary;
    $("#grammar-rule").textContent = item.rule;
    $("#grammar-progress-count").textContent = `${state.grammarCompleted.length}/${CONTENT.grammar.length}`;
    $("#grammar-examples").innerHTML = item.examples.map((example) => `
      <article class="grammar-example ${example.good ? "good" : "bad"}">
        <span class="example-status">${example.good ? "✓ 自然表达" : "× 常见错误"}</span>
        <p>${escapeHtml(example.text)}</p>
        <small>${escapeHtml(example.note)}</small>
      </article>`).join("");
    $("#grammar-question").textContent = item.quiz.question;
    $("#grammar-options").innerHTML = item.quiz.options.map((option, index) => `
      <button class="option-button" type="button" data-grammar-option="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`).join("");
    $(".grammar-quiz-stage > .quiz-card")?.classList.remove("is-answered");
    $("#grammar-feedback").hidden = true;
    $("#next-grammar").hidden = true;
  }

  function answerGrammar(selectedIndex) {
    if (grammarAnswered) return;
    grammarAnswered = true;
    const item = CONTENT.grammar[state.indices.grammar];
    const correct = selectedIndex === item.quiz.answer;
    $$('[data-grammar-option]', $("#grammar-options")).forEach((button) => {
      const index = Number(button.dataset.grammarOption);
      button.disabled = true;
      if (index === item.quiz.answer) button.classList.add("is-correct");
      if (index === selectedIndex && !correct) button.classList.add("is-wrong");
    });
    const feedback = $("#grammar-feedback");
    feedback.innerHTML = `<strong>${correct ? "答对了，这条规则可以进入使用阶段。" : "这次选错了，先看清时间或句型信号。"}</strong><p>${escapeHtml(item.quiz.explanation)}</p>`;
    feedback.hidden = false;
    $(".grammar-quiz-stage > .quiz-card")?.classList.add("is-answered");
    $("#next-grammar").hidden = false;
    if (correct && !state.grammarCompleted.includes(item.id)) state.grammarCompleted.push(item.id);
    if (correct) resolveMistake("grammar", item.id);
    else recordMistake({ type: "grammar", skill: "grammar", item, prompt: item.quiz.question, answer: mistakeAnswerForItem("grammar", item), userAnswer: item.quiz.options[selectedIndex] || "未选择" });
    recordActivity("grammar", correct ? 92 : 42, correct ? 12 : 5, item.title);
    saveState();
    $("#grammar-progress-count").textContent = `${state.grammarCompleted.length}/${CONTENT.grammar.length}`;
    updateViewPager("grammar");
    $("#next-grammar").focus();
  }

  function nextGrammar() {
    state.indices.grammar = (state.indices.grammar + 1) % CONTENT.grammar.length;
    saveState();
    renderGrammar();
    applyViewPage("grammar", 0, "forward", true);
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[“”‘’]/g, "'")
      .replace(/[^a-z0-9'\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    const normalized = normalizeText(value);
    return normalized ? normalized.split(" ") : [];
  }

  function levenshteinTokens(leftTokens, rightTokens) {
    const rows = leftTokens.length + 1;
    const cols = rightTokens.length + 1;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let row = 0; row < rows; row += 1) matrix[row][0] = row;
    for (let col = 0; col < cols; col += 1) matrix[0][col] = col;
    for (let row = 1; row < rows; row += 1) {
      for (let col = 1; col < cols; col += 1) {
        const cost = leftTokens[row - 1] === rightTokens[col - 1] ? 0 : 1;
        matrix[row][col] = Math.min(
          matrix[row - 1][col] + 1,
          matrix[row][col - 1] + 1,
          matrix[row - 1][col - 1] + cost
        );
      }
    }
    return matrix[rows - 1][cols - 1];
  }

  function textSimilarity(left, right) {
    const a = tokenize(left);
    const b = tokenize(right);
    if (!a.length && !b.length) return 1;
    const longest = Math.max(a.length, b.length, 1);
    return clamp(1 - levenshteinTokens(a, b) / longest, 0, 1);
  }

  function keywordCoverage(text, keywords) {
    const normalized = normalizeText(text);
    if (!keywords.length) return 1;
    const hits = keywords.filter((keyword) => normalized.includes(normalizeText(keyword))).length;
    return hits / keywords.length;
  }

  function scoreExpression(text, references, keywords) {
    const ranked = references.map(reference => ({ reference, similarity: textSimilarity(text, reference) })).sort((a,b) => b.similarity-a.similarity);
    const bestSimilarity = ranked[0]?.similarity || 0;
    const reference = ranked[0]?.reference || "";
    const negative = value => /\b(?:not|no|never|cannot|without)\b|n['’]t\b/i.test(value);
    const numbers = value => [...value.matchAll(/\b\d+(?:[.,]\d+)?\b/g)].map(match=>match[0]).sort().join(",");
    const reviewNotes = [];
    // Near-matching text can conceal a reversed claim. Flag for review, not semantic certainty.
    if (bestSimilarity >= 0.55 && negative(text) !== negative(reference)) reviewNotes.push("否定表达与最接近的参考句不同，请核对是否改变了原意。");
    if (bestSimilarity >= 0.55 && numbers(text) !== numbers(reference)) reviewNotes.push("数字与最接近的参考句不同，请核对数量、日期或金额。");
    const coverage = keywordCoverage(text, keywords);
    return {
      similarity: bestSimilarity,
      coverage,
      reviewNotes,
      score: Math.min(reviewNotes.length ? 59 : 100, clamp(Math.round(bestSimilarity * 68 + coverage * 32), 0, 100))
    };
  }

  function renderTranslation() {
    state.indices.translation %= CONTENT.translations.length;
    const item = CONTENT.translations[state.indices.translation];
    const stage = $(".translation-stage");
    const feedback = $("#translation-feedback");
    translationScored = false;
    stage.classList.remove("is-result-mode", "is-reveal-only");
    $("#translation-context").textContent = `${item.context} · ${item.tone}`;
    $("#translation-counter").textContent = `${state.indices.translation + 1} / ${CONTENT.translations.length}`;
    $("#translation-source").textContent = item.source;
    $("#translation-hints").innerHTML = item.hints.map((hint) => `<span>${escapeHtml(hint)}</span>`).join("");
    $("#translation-input").value = "";
    $("#translation-word-count").textContent = "0 个词";
    feedback.hidden = true;
    feedback.innerHTML = "";
    feedback.scrollTop = 0;
    const attempts = state.attempts.filter((attempt) => attempt.skill === "translation");
    $("#translation-attempts").textContent = attempts.filter((attempt) => attempt.date === localDateKey()).length;
    $("#translation-average").textContent = attempts.length
      ? `${Math.round(attempts.reduce((sum, attempt) => sum + attempt.score, 0) / attempts.length)}%`
      : "—";
  }

  function evaluateTranslation(revealOnly = false) {
    if (translationScored) return;
    const item = CONTENT.translations[state.indices.translation];
    const userText = $("#translation-input").value.trim();
    if (!revealOnly && !userText) {
      showToast("先写下你的英文，再检查表达。", 3000);
      $("#translation-input").focus();
      return;
    }
    translationScored = true;
    const result = revealOnly
      ? { score: 0, similarity: 0, coverage: 0 }
      : scoreExpression(userText, [item.answer, item.shortAnswer, ...item.alternatives], item.hints);
    const label = revealOnly
      ? "先理解结构，再用自己的话重写一遍。"
      : result.reviewNotes?.length ? result.reviewNotes.join(" ") : result.score >= 85
        ? "表达很接近自然版本，重点短语也完整。"
        : result.score >= 60
          ? "部分表达与参考句匹配，请再核对原意和搭配。"
          : "与参考表达差异较大，请对照原意和短语块再组织一次。";
    const stage = $(".translation-stage");
    const feedback = $("#translation-feedback");
    const userVersionBlock = revealOnly
      ? ""
      : `<div class="answer-block"><span>你的版本</span><p>${escapeHtml(userText)}</p></div>`;
    feedback.innerHTML = `
      <div class="score-row">
        <span class="score-badge">${revealOnly ? "参考" : `${result.score}%`}</span>
        <div class="score-copy"><strong>${escapeHtml(label)}</strong><span>${revealOnly ? "不计表达匹配分" : `关键词覆盖 ${Math.round(result.coverage * 100)}% · 仅用于练习反馈`}</span></div>
      </div>
      <div class="answer-compare">
        ${userVersionBlock}
        <div class="answer-block"><span>一种自然说法</span><p>${escapeHtml(item.answer)}</p></div>
        ${item.shortAnswer !== item.answer ? `<div class="answer-block"><span>易背短版本</span><p>${escapeHtml(item.shortAnswer)}</p></div>` : ""}
        <div class="answer-block"><span>下一次注意</span><p>${escapeHtml(result.coverage >= 0.75 ? "核对否定、数量与条件，再调整语气。" : `优先用上：${item.hints.join(" · ")}`)}</p></div>
      </div>
      <div class="chunk-list">${item.chunks.map(([source, target]) => `<span title="${escapeHtml(source)}">${escapeHtml(target)}</span>`).join("")}</div>
      <div class="button-row" style="margin-top:14px"><button class="button button-primary" type="button" data-next-translation>再练一句</button></div>`;
    stage.classList.add("is-result-mode");
    stage.classList.toggle("is-reveal-only", revealOnly);
    feedback.hidden = false;
    feedback.scrollTop = 0;
    if (!revealOnly && result.score >= 70) resolveMistake("translation", item.id);
    else recordMistake({ type: "translation", skill: "translation", item, prompt: item.source, answer: item.answer, userAnswer: revealOnly ? "直接查看答案" : userText });
    recordActivity("translation", revealOnly ? 25 : result.score, revealOnly ? 3 : result.score >= 80 ? 14 : 8, item.source.slice(0, 22));
  }

  function nextTranslation() {
    state.indices.translation = (state.indices.translation + 1) % CONTENT.translations.length;
    saveState();
    renderTranslation();
    $("#translation-input").focus();
  }

  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    voices = window.speechSynthesis.getVoices().filter((voice) => /^en[-_]/i.test(voice.lang));
    const select = $("#voice-select");
    if (!select) return;
    const current = state.profile.voiceName;
    select.innerHTML = '<option value="">自动选择英文声音</option>' + voices.map((voice) =>
      `<option value="${escapeHtml(voice.name)}"${voice.name === current ? " selected" : ""}>${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}</option>`
    ).join("");
  }

  function selectVoice() {
    const preferredName = state.profile.voiceName;
    const exact = voices.find((voice) => voice.name === preferredName);
    if (exact) return exact;
    const accentMatch = voices.find((voice) => voice.lang.toLowerCase() === state.profile.accent.toLowerCase());
    return accentMatch || voices[0] || null;
  }

  function speak(text, rate = 0.92, callbacks = {}) {
    if (!("speechSynthesis" in window)) {
      showToast("当前浏览器不支持系统朗读。", 3500);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.profile.accent;
    utterance.rate = rate;
    utterance.pitch = 1;
    const voice = selectVoice();
    if (voice) utterance.voice = voice;
    utterance.onstart = callbacks.onstart || null;
    utterance.onend = callbacks.onend || null;
    utterance.onerror = callbacks.onerror || callbacks.onend || null;
    window.speechSynthesis.speak(utterance);
  }

  function renderListening() {
    state.indices.listening %= CONTENT.listening.length;
    const item = CONTENT.listening[state.indices.listening];
    listeningAnswered = false;
    $("#listening-level").textContent = item.level;
    $("#listening-topic").textContent = item.topic;
    $("#listening-counter").textContent = `${state.indices.listening + 1} / ${CONTENT.listening.length}`;
    $("#listening-question").textContent = item.question;
    $("#listening-options").innerHTML = item.options.map((option, index) => `
      <button class="option-button" type="button" data-listening-option="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`).join("");
    $("#listening-transcript").textContent = item.text;
    $("#listening-keywords").innerHTML = item.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("");
    $("#transcript-panel").hidden = true;
    $("#review-listening-answer").hidden = true;
    $(".audio-player-card").classList.remove("is-playing");
    $$(".method-list li").forEach((itemElement, index) => itemElement.classList.toggle("is-active", index === 0));
  }

  function playCurrentListening() {
    const player = $(".audio-player-card");
    if (player.classList.contains("is-playing")) {
      window.speechSynthesis.cancel();
      player.classList.remove("is-playing");
      return;
    }
    const item = CONTENT.listening[state.indices.listening];
    const rate = Number($("#speech-rate").value);
    speak(item.text, rate, {
      onstart: () => player.classList.add("is-playing"),
      onend: () => player.classList.remove("is-playing")
    });
  }

  function answerListening(selectedIndex) {
    if (listeningAnswered) return;
    listeningAnswered = true;
    window.speechSynthesis.cancel();
    $(".audio-player-card").classList.remove("is-playing");
    const item = CONTENT.listening[state.indices.listening];
    const correct = selectedIndex === item.answer;
    $$('[data-listening-option]', $("#listening-options")).forEach((button) => {
      const index = Number(button.dataset.listeningOption);
      button.disabled = true;
      if (index === item.answer) button.classList.add("is-correct");
      if (index === selectedIndex && !correct) button.classList.add("is-wrong");
    });
    $("#transcript-panel").hidden = false;
    $("#review-listening-answer").hidden = false;
    $$(".method-list li").forEach((itemElement) => itemElement.classList.add("is-active"));
    if (correct) resolveMistake("listening", item.id);
    else recordMistake({ type: "listening", skill: "listening", item, prompt: item.question, answer: mistakeAnswerForItem("listening", item), userAnswer: item.options[selectedIndex] || "未选择" });
    recordActivity("listening", correct ? 90 : 45, correct ? 12 : 6, `${item.topic}听力`);
    updateViewPager("listening");
    showToast(correct ? "主旨判断正确。现在对照关键词再听一遍。" : "先看文字稿定位关键词，再听一遍。", 3400);
  }

  function nextListening() {
    state.indices.listening = (state.indices.listening + 1) % CONTENT.listening.length;
    saveState();
    renderListening();
    applyViewPage("listening", 0, "forward", true);
  }

  function renderSpeaking() {
    state.indices.speaking %= CONTENT.speaking.length;
    const item = CONTENT.speaking[state.indices.speaking];
    $("#speaking-scenario").textContent = item.scenario;
    $("#speaking-counter").textContent = `${state.indices.speaking + 1} / ${CONTENT.speaking.length}`;
    $("#speaking-prompt").textContent = item.prompt;
    $("#speech-transcript-input").value = "";
    $("#speech-feedback").hidden = true;
    $("#scenario-list").innerHTML = CONTENT.speaking.map((scenario, index) => `
      <button class="scenario-button${index === state.indices.speaking ? " is-active" : ""}" type="button" data-speaking-index="${index}">
        <span class="scenario-number">${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(scenario.scenario)}</strong>
      </button>`).join("");
    resetRecognitionUi();
  }

  function formatRecognitionDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function updateRecognitionTimer() {
    if (!recognitionStartedAt) return;
    $("#record-timer").textContent = formatRecognitionDuration(Date.now() - recognitionStartedAt);
  }

  function startRecognitionTimer() {
    window.clearInterval(recognitionTimerInterval);
    recognitionStartedAt = Date.now();
    updateRecognitionTimer();
    recognitionTimerInterval = window.setInterval(updateRecognitionTimer, 250);
  }

  function stopRecognitionTimer(reset = false) {
    window.clearInterval(recognitionTimerInterval);
    recognitionTimerInterval = null;
    if (recognitionStartedAt) updateRecognitionTimer();
    if (reset) {
      recognitionStartedAt = 0;
      $("#record-timer").textContent = "00:00";
    }
  }

  function mergeRecognitionText(existingText, incomingText) {
    const existing = String(existingText || "").trim();
    const incoming = String(incomingText || "").trim();
    if (!existing) return incoming;
    if (!incoming) return existing;
    if (normalizeText(existing).endsWith(normalizeText(incoming))) return existing;

    const existingTokens = existing.split(/\s+/);
    const incomingTokens = incoming.split(/\s+/);
    const normalizedExisting = existingTokens.map(normalizeText);
    const normalizedIncoming = incomingTokens.map(normalizeText);
    let overlap = 0;
    const maximumOverlap = Math.min(10, existingTokens.length, incomingTokens.length);
    for (let size = maximumOverlap; size >= 1; size -= 1) {
      const tail = normalizedExisting.slice(-size).join(" ");
      const head = normalizedIncoming.slice(0, size).join(" ");
      if (tail && tail === head) {
        overlap = size;
        break;
      }
    }
    return [...existingTokens, ...incomingTokens.slice(overlap)].join(" ").trim();
  }

  function updateRecognitionUi(active, options = {}) {
    const zone = $("#recording-zone");
    const button = $("#record-speech");
    const timer = $("#record-timer");
    zone.classList.toggle("is-recording", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-label", active ? "停止录音" : "开始录音");
    button.disabled = Boolean(options.buttonDisabled);
    $("#analyze-speech").disabled = options.analyzeDisabled === undefined ? active : Boolean(options.analyzeDisabled);
    $("#play-speaking-model").disabled = active || Boolean(options.analyzeDisabled);
    $("#speech-transcript-input").readOnly = active || Boolean(options.analyzeDisabled);
    $("#record-label").textContent = options.label || (active ? "正在录音… 点击按钮停止" : "点击开始录音");
    $("#speech-capability-note").textContent = options.note || (active
      ? "可以继续说完整句子；短暂停顿时系统会自动续接，只有你点击停止才结束。"
      : "点击开始后可以完整说完；只有你再次点击停止，录音练习才会结束。");
    timer.hidden = !(active || options.keepTimer);
  }

  function resetRecognitionUi() {
    window.clearTimeout(recognitionRestartTimer);
    window.clearTimeout(recognitionStopFallbackTimer);
    recognitionRestartTimer = null;
    recognitionStopFallbackTimer = null;
    stopRecognitionTimer(true);
    updateRecognitionUi(false, { keepTimer: false, analyzeDisabled: false });
  }

  function finishRecognitionSession(options = {}) {
    window.clearTimeout(recognitionRestartTimer);
    window.clearTimeout(recognitionStopFallbackTimer);
    recognitionRestartTimer = null;
    recognitionStopFallbackTimer = null;
    recognitionEngineRunning = false;
    recognition = null;
    stopRecognitionTimer(Boolean(options.silent));
    if (options.silent) {
      resetRecognitionUi();
      return;
    }
    updateRecognitionUi(false, {
      label: options.label || "录音已停止，可以分析表达",
      note: "识别文本已经保留；你可以修改文字、分析表达，或再次点击开始重新录音。",
      keepTimer: true,
      analyzeDisabled: false
    });
  }

  function failRecognitionSession(errorCode) {
    const messages = {
      "not-allowed": "麦克风权限未开启，可以改用手动输入。",
      "service-not-allowed": "浏览器不允许使用语音识别，可以改用手动输入。",
      "audio-capture": "没有检测到可用麦克风，可以改用手动输入。",
      network: "浏览器语音服务暂时不可用，可以改用手动输入。",
      "language-not-supported": "当前浏览器不支持所选英文口音，可以在设置中切换。"
    };
    recognitionActive = false;
    recognitionStopRequested = true;
    recognitionSessionId += 1;
    window.clearTimeout(recognitionRestartTimer);
    window.clearTimeout(recognitionStopFallbackTimer);
    recognitionRestartTimer = null;
    recognitionStopFallbackTimer = null;
    try {
      recognition?.abort();
    } catch {
      // The engine may already have ended after reporting the error.
    }
    recognitionEngineRunning = false;
    recognition = null;
    stopRecognitionTimer(false);
    updateRecognitionUi(false, {
      label: "录音未能继续",
      note: messages[errorCode] || `语音识别未完成：${errorCode}`,
      keepTimer: Boolean(recognitionStartedAt),
      analyzeDisabled: false
    });
    showToast(messages[errorCode] || `语音识别未完成：${errorCode}`, 4300);
  }

  function startRecognitionSegment(sessionId) {
    if (!recognitionActive || recognitionStopRequested || sessionId !== recognitionSessionId) return;
    const engine = new SpeechRecognitionApi();
    recognition = engine;
    engine.lang = state.profile.accent;
    engine.interimResults = true;
    engine.continuous = true;
    engine.maxAlternatives = 1;
    const segmentFinalResults = new Map();
    let segmentLatestText = "";

    engine.onstart = () => {
      if (sessionId !== recognitionSessionId || !recognitionActive) {
        try {
          engine.abort();
        } catch {
          // A stale recognizer may already be closed.
        }
        return;
      }
      recognitionEngineRunning = true;
      recognitionStartFailures = 0;
      if (!recognitionStartedAt) startRecognitionTimer();
      updateRecognitionUi(true);
    };
    engine.onresult = (event) => {
      if (sessionId !== recognitionSessionId) return;
      let interimText = "";
      for (let index = 0; index < event.results.length; index += 1) {
        const transcript = event.results[index][0].transcript.trim();
        if (event.results[index].isFinal) segmentFinalResults.set(index, transcript);
        else if (index >= event.resultIndex) interimText = mergeRecognitionText(interimText, transcript);
      }
      const segmentFinalText = [...segmentFinalResults.entries()]
        .sort(([left], [right]) => left - right)
        .map(([, transcript]) => transcript)
        .join(" ");
      const committedText = mergeRecognitionText(recognitionFinalText, segmentFinalText);
      segmentLatestText = mergeRecognitionText(segmentFinalText, interimText);
      $("#speech-transcript-input").value = mergeRecognitionText(committedText, interimText);
    };
    engine.onerror = (event) => {
      if (sessionId !== recognitionSessionId) return;
      if (event.error === "aborted" && recognitionStopRequested) return;
      if (event.error === "no-speech") {
        updateRecognitionUi(true, {
          label: "仍在录音… 等你继续说",
          note: "这段停顿不会结束录音；系统会继续等待，直到你点击停止。"
        });
        return;
      }
      failRecognitionSession(event.error);
    };
    engine.onend = () => {
      if (sessionId !== recognitionSessionId) return;
      window.clearTimeout(recognitionStopFallbackTimer);
      recognitionStopFallbackTimer = null;
      recognitionEngineRunning = false;
      const segmentFinalText = [...segmentFinalResults.entries()]
        .sort(([left], [right]) => left - right)
        .map(([, transcript]) => transcript)
        .join(" ");
      recognitionFinalText = mergeRecognitionText(recognitionFinalText, segmentFinalText || segmentLatestText);
      if (recognitionFinalText) $("#speech-transcript-input").value = recognitionFinalText;

      if (recognitionActive && !recognitionStopRequested) {
        updateRecognitionUi(true, {
          label: "短暂停顿，正在自动续接…",
          note: "无需重新点击；系统会继续录音，直到你主动停止。"
        });
        recognitionRestartTimer = window.setTimeout(() => startRecognitionSegment(sessionId), 180);
      } else {
        finishRecognitionSession();
      }
    };

    try {
      recognitionEngineRunning = true;
      engine.start();
    } catch (error) {
      recognitionEngineRunning = false;
      recognitionStartFailures += 1;
      if (recognitionActive && !recognitionStopRequested && recognitionStartFailures <= 3) {
        recognitionRestartTimer = window.setTimeout(() => startRecognitionSegment(sessionId), 250);
      } else {
        failRecognitionSession(error.name || "start-error");
      }
    }
  }

  function startRecognitionSession() {
    if (!SpeechRecognitionApi) {
      showToast("当前浏览器没有语音识别，请在文本框输入你说的内容后分析。", 4500);
      $("#speech-transcript-input").focus();
      return;
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    recognitionSessionId += 1;
    recognitionActive = true;
    recognitionEngineRunning = false;
    recognitionStopRequested = false;
    recognitionStartFailures = 0;
    recognitionFinalText = "";
    $("#speech-transcript-input").value = "";
    $("#speech-feedback").hidden = true;
    stopRecognitionTimer(true);
    updateRecognitionUi(true, {
      label: "正在准备麦克风…",
      note: "准备好后直接说完整句子；再次点击圆形按钮才会停止。"
    });
    startRecognitionSegment(recognitionSessionId);
  }

  function stopRecognitionSession(options = {}) {
    const silent = Boolean(options.silent);
    recognitionActive = false;
    recognitionStopRequested = true;
    window.clearTimeout(recognitionRestartTimer);
    window.clearTimeout(recognitionStopFallbackTimer);
    recognitionRestartTimer = null;
    recognitionStopFallbackTimer = null;

    if (silent) {
      recognitionSessionId += 1;
      try {
        recognition?.abort();
      } catch {
        // Nothing remains to abort.
      }
      recognitionEngineRunning = false;
      recognition = null;
      finishRecognitionSession({ silent: true });
      return;
    }

    updateRecognitionUi(false, {
      label: "正在整理识别结果…",
      note: "已经停止收音，正在保留最后几个单词。",
      keepTimer: true,
      buttonDisabled: true,
      analyzeDisabled: true
    });
    if (recognitionEngineRunning && recognition) {
      try {
        recognition.stop();
      } catch {
        try {
          recognition.abort();
        } catch {
          // The pending engine may already be closed.
        }
        recognitionSessionId += 1;
        finishRecognitionSession();
        return;
      }
      const stoppingSessionId = recognitionSessionId;
      recognitionStopFallbackTimer = window.setTimeout(() => {
        if (stoppingSessionId !== recognitionSessionId || !recognitionStopRequested) return;
        recognitionSessionId += 1;
        try {
          recognition?.abort();
        } catch {
          // Fallback cleanup only runs if the browser omitted onend.
        }
        finishRecognitionSession();
      }, 1600);
    } else {
      finishRecognitionSession();
    }
  }

  function startOrStopRecognition() {
    if (recognitionActive) stopRecognitionSession();
    else if (!recognitionStopRequested || !recognitionEngineRunning) startRecognitionSession();
  }

  function analyzeSpeech() {
    if (recognitionActive || recognitionEngineRunning) {
      showToast("请先点击录音按钮停止，再分析完整表达。", 3600);
      return;
    }
    const item = CONTENT.speaking[state.indices.speaking];
    const transcript = $("#speech-transcript-input").value.trim();
    if (!transcript) {
      showToast("先说一句，或手动输入你刚才的表达。", 3200);
      $("#speech-transcript-input").focus();
      return;
    }
    const result = scoreExpression(transcript, [item.target, item.shortVersion], item.keywords);
    const targetLength = tokenize(item.target).length;
    const lengthRatio = Math.min(tokenize(transcript).length / Math.max(targetLength, 1), 1);
    const completeness = Math.round(lengthRatio * 100);
    const keywordScore = Math.round(result.coverage * 100);
    const goodPoint = keywordScore >= 70
      ? "关键词覆盖较高，请结合原题核对表达含义。"
      : "你已经主动开口并给出了与场景相关的回答。";
    const improvePoint = result.reviewNotes?.length ? result.reviewNotes.join(" ") : result.score >= 82
      ? "下一遍把停顿放在意群之间，让整句更从容。"
      : `下一遍优先加入这些表达：${item.keywords.filter((keyword) => !normalizeText(transcript).includes(normalizeText(keyword))).slice(0, 3).join(" · ") || item.keywords.slice(0, 2).join(" · ")}。`;

    const feedback = $("#speech-feedback");
    feedback.innerHTML = `
      <h3>这次表达的反馈</h3>
      <div class="speech-score-grid">
        <div class="speech-score-item"><strong>${result.score}%</strong><span>表达匹配</span></div>
        <div class="speech-score-item"><strong>${keywordScore}%</strong><span>关键词覆盖</span></div>
        <div class="speech-score-item"><strong>${completeness}%</strong><span>内容完整度</span></div>
      </div>
      <div class="feedback-note"><strong>做得好：</strong> ${escapeHtml(goodPoint)}</div>
      <div class="feedback-note" style="margin-top:8px"><strong>最值得修正：</strong> ${escapeHtml(improvePoint)}</div>
      <div class="answer-compare" style="margin-top:12px">
        <div class="answer-block"><span>自然、面试可用版本</span><p>${escapeHtml(item.target)}</p></div>
        ${item.shortVersion !== item.target ? `<div class="answer-block"><span>更短、方便记忆</span><p>${escapeHtml(item.shortVersion)}</p></div>` : ""}
      </div>
      <div class="button-row" style="margin-top:14px">
        <button class="button button-ghost" type="button" data-repeat-speaking>再说一次</button>
        <button class="button button-primary" type="button" data-next-speaking>下一个场景</button>
      </div>`;
    feedback.hidden = false;
    if (result.score >= 70) resolveMistake("speaking", item.id);
    else recordMistake({ type: "speaking", skill: "speaking", item, prompt: item.prompt, answer: item.target, userAnswer: transcript });
    recordActivity("speaking", result.score, result.score >= 80 ? 15 : 9, item.scenario);
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextSpeaking() {
    if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
    state.indices.speaking = (state.indices.speaking + 1) % CONTENT.speaking.length;
    saveState();
    renderSpeaking();
  }

  function currentReading() {
    const collection = CONTENT.reading || [];
    if (!collection.length) return null;
    state.indices.reading = clamp(safeInteger(state.indices.reading, 0, 0, collection.length - 1), 0, collection.length - 1);
    return collection[state.indices.reading];
  }

  function readingParagraphs(value) {
    const paragraphs = String(value || "").split(/\n{2,}|(?<=\.)\s+(?=[A-Z][a-z]+\s)/).filter(Boolean);
    if (paragraphs.length <= 1) return `<p>${escapeHtml(value || "")}</p>`;
    const targetSize = paragraphs.length > 5 ? Math.ceil(paragraphs.length / 3) : 1;
    const grouped = [];
    for (let index = 0; index < paragraphs.length; index += targetSize) grouped.push(paragraphs.slice(index, index + targetSize).join(" "));
    return grouped.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  function resetReadingSession() {
    readingQuestionIndex = 0;
    readingAnswers = [];
    readingSessionRecorded = false;
  }

  function renderReadingQuestion() {
    const item = currentReading();
    const question = item?.questions?.[readingQuestionIndex];
    if (!item || !question) return;
    const stored = readingAnswers[readingQuestionIndex];
    $("#reading-question-counter").textContent = `问题 ${readingQuestionIndex + 1} / ${item.questions.length}`;
    $("#reading-question-context").textContent = `${item.title} · ${item.level}`;
    $("#reading-question").textContent = question.question;
    $("#reading-question-zh").textContent = question.questionZh;
    $("#reading-options").innerHTML = question.options.map((option, index) => `
      <button class="reading-option hover-reveal-art${stored && index === question.answer ? " is-correct" : ""}${stored && index === stored.selected && !stored.correct ? " is-wrong" : ""}" type="button" data-reading-option="${index}" ${stored ? "disabled" : ""}>
        <span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option)}</strong>
      </button>`).join("");
    const feedback = $("#reading-feedback");
    if (stored) {
      feedback.classList.toggle("is-wrong", !stored.correct);
      feedback.innerHTML = `<strong>${stored.correct ? "回答正确" : "再看一次文章线索"}</strong><p>${escapeHtml(question.explanation)}</p><p>${escapeHtml(question.explanationZh)}</p>`;
      feedback.hidden = false;
    } else {
      feedback.hidden = true;
      feedback.innerHTML = "";
      feedback.classList.remove("is-wrong");
    }
    $("#reading-prev-question").disabled = readingQuestionIndex === 0;
    const nextButton = $("#reading-next-question");
    nextButton.disabled = !stored;
    nextButton.textContent = readingQuestionIndex === item.questions.length - 1 ? "查看中文译文" : "下一题";
    syncReadingFocus();
    window.requestAnimationFrame(() => decorateCardArt());
  }

  function renderReadingAnswers() {
    const item = currentReading();
    if (!item) return;
    const correctCount = readingAnswers.filter((answer) => answer?.correct).length;
    $("#reading-score").textContent = readingAnswers.length ? `答对 ${correctCount} / ${item.questions.length}` : "尚未作答";
    $("#reading-summary").textContent = item.summary || "Article summary";
    $("#reading-summary-zh").textContent = item.summaryZh || "完成题目后在这里核对文章总结。";
    $("#reading-answer-list").innerHTML = item.questions.map((question, index) => {
      const answer = readingAnswers[index];
      const correctIndex = question.answer;
      const selectedText = answer ? question.options[answer.selected] : "Not answered";
      const selectedZh = answer ? question.optionsZh?.[answer.selected] || "" : "未作答";
      return `<article class="reading-answer-item${answer?.correct ? " is-correct" : answer ? " is-wrong" : ""}">
        <header><span>${index + 1}</span><div><strong>${escapeHtml(question.question)}</strong><small>${escapeHtml(question.questionZh)}</small></div></header>
        <div class="reading-answer-columns">
          <p><span>Correct answer</span><strong>${escapeHtml(question.options[correctIndex])}</strong><small>${escapeHtml(question.optionsZh?.[correctIndex] || "")}</small></p>
          <p><span>Your answer</span><strong>${escapeHtml(selectedText)}</strong><small>${escapeHtml(selectedZh)}</small></p>
        </div>
        <div class="reading-explanation"><p>${escapeHtml(question.explanation)}</p><p>${escapeHtml(question.explanationZh)}</p></div>
      </article>`;
    }).join("");
  }

  function renderReading() {
    const collection = CONTENT.reading || [];
    const item = currentReading();
    if (!item) {
      $("#reading-passage").innerHTML = "<p>阅读内容包正在加载。</p>";
      return;
    }
    const selector = $("#reading-selector");
    selector.innerHTML = collection.map((passage, index) => `<option value="${index}">${String(index + 1).padStart(3, "0")} · ${escapeHtml(passage.title)}</option>`).join("");
    selector.value = String(state.indices.reading);
    $("#reading-topic").textContent = item.topic;
    $("#reading-level").textContent = item.level;
    $("#reading-counter").textContent = `${state.indices.reading + 1} / ${collection.length}`;
    $("#reading-title").textContent = item.title;
    $("#reading-title-zh").textContent = item.titleZh;
    $("#reading-passage").innerHTML = readingParagraphs(item.passage);
    $("#reading-word-count").textContent = `约 ${tokenize(item.passage).length} 词`;
    $("#reading-translation-title").textContent = `${item.titleZh} · 中文译文`;
    $("#reading-translation").innerHTML = readingParagraphs(item.translationZh);
    $("#reading-vocabulary").innerHTML = (item.vocabulary || []).map((entry) => `<span><strong>${escapeHtml(entry.word)}</strong><small>${escapeHtml(entry.meaning)}</small></span>`).join("");
    const readingArt = item.art || {};
    const passageArt = readingArt.passage || "assets/key-primadoll-haizakura-portrait.png";
    // The original portrait contains lettering on its book. Keep the source file, display a clean portrait.
    $("#reading-passage-art").src = passageArt === "assets/key-primadoll-haizakura-portrait.png" ? "assets/anime-v3-sakura-lantern.jpg" : passageArt;
    $("#reading-question-art").src = readingArt.question || "assets/key-primadoll-karasuba-cafe.png";
    $("#reading-translation-art").src = readingArt.translation || "assets/anime-v3-autumn-reader.jpg";
    $$("[data-view-panel=\"reading\"] .reading-stage").forEach((stage) => {
      const backdrop = $(":scope > .page-anime-backdrop", stage);
      if (!backdrop) return;
      if (!stage.dataset.defaultPageArtwork) stage.dataset.defaultPageArtwork = stage.dataset.pageArtwork || "";
      const source = readingArt.scene || stage.dataset.defaultPageArtwork;
      if (!source) return;
      backdrop.style.setProperty("--page-art-image", `url("${source}")`);
      stage.dataset.pageArtwork = source;
    });
    renderReadingQuestion();
    renderReadingAnswers();
  }

  function answerReadingQuestion(selectedIndex) {
    const item = currentReading();
    const question = item?.questions?.[readingQuestionIndex];
    if (!question || readingAnswers[readingQuestionIndex]) return;
    const correct = selectedIndex === question.answer;
    readingAnswers[readingQuestionIndex] = { selected: selectedIndex, correct };
    if (!correct) {
      recordMistake({
        type: "reading",
        skill: "reading",
        item,
        prompt: `${question.question} / ${question.questionZh}`,
        answer: `${question.options[question.answer]} / ${question.optionsZh?.[question.answer] || ""}`,
        userAnswer: `${question.options[selectedIndex]} / ${question.optionsZh?.[selectedIndex] || ""}`
      });
    }
    if (readingAnswers.filter(Boolean).length === item.questions.length && !readingSessionRecorded) {
      const correctCount = readingAnswers.filter((answer) => answer.correct).length;
      const score = Math.round(correctCount / item.questions.length * 100);
      if (correctCount === item.questions.length) resolveMistake("reading", item.id);
      recordActivity("reading", score, score === 100 ? 18 : score >= 67 ? 12 : 7, item.title);
      readingSessionRecorded = true;
    }
    renderReadingQuestion();
    renderReadingAnswers();
  }

  function moveReadingQuestion(direction) {
    const item = currentReading();
    if (!item) return;
    if (direction > 0 && !readingAnswers[readingQuestionIndex]) return;
    if (direction > 0 && readingQuestionIndex === item.questions.length - 1) {
      applyViewPage("reading", 2, "forward", true);
      return;
    }
    readingQuestionIndex = clamp(readingQuestionIndex + direction, 0, item.questions.length - 1);
    renderReadingQuestion();
    triggerSakuraBurst();
  }

  function selectReading(index, pageIndex = 0) {
    const collection = CONTENT.reading || [];
    if (!collection.length) return;
    state.indices.reading = clamp(safeInteger(index, 0, 0, collection.length - 1), 0, collection.length - 1);
    resetReadingSession();
    saveState();
    renderReading();
    applyViewPage("reading", pageIndex, "forward", true);
  }

  function nextReading() {
    const collection = CONTENT.reading || [];
    if (!collection.length) return;
    selectReading((state.indices.reading + 1) % collection.length, 0);
    triggerSakuraBurst();
  }

  function pickAssessmentItems(items, count, seed) {
    return [...items]
      .sort((left, right) => stableHash(`${seed}:${left.id}`) - stableHash(`${seed}:${right.id}`))
      .slice(0, count);
  }

  const ASSESSMENT_PAPER_COUNT = 10;
  const ASSESSMENT_QUESTIONS_PER_TYPE = 5;
  const ASSESSMENT_QUESTIONS_PER_PAPER = 35;

  function normalizeAssessmentPaper(index) {
    return Math.max(0, Math.min(ASSESSMENT_PAPER_COUNT - 1, safeInteger(index, 0, 0, ASSESSMENT_PAPER_COUNT - 1)));
  }

  function buildAssessmentQuestions(paperIndex = selectedAssessmentPaper) {
    const normalizedPaper = normalizeAssessmentPaper(paperIndex);
    const seed = `${CONTENT.version}:${state.daily.nonce || "assessment"}`;
    const countPerType = ASSESSMENT_PAPER_COUNT * ASSESSMENT_QUESTIONS_PER_TYPE;
    const meaningItems = pickAssessmentItems(CONTENT.vocabulary, countPerType, `${seed}:meaning`);
    const spellingItems = pickAssessmentItems(
      CONTENT.vocabulary.filter((item) => !meaningItems.some((meaning) => meaning.id === item.id)),
      countPerType,
      `${seed}:spelling`
    );
    const grammarItems = pickAssessmentItems(CONTENT.grammar, countPerType, `${seed}:grammar`);
    const translationItems = pickAssessmentItems(CONTENT.translations, countPerType, `${seed}:translation`);
    const listeningItems = pickAssessmentItems(CONTENT.listening, countPerType, `${seed}:listening`);
    const speakingItems = pickAssessmentItems(CONTENT.speaking, countPerType, `${seed}:speaking`);
    const readingItems = pickAssessmentItems(CONTENT.reading || [], countPerType, `${seed}:reading`);

    const start = normalizedPaper * ASSESSMENT_QUESTIONS_PER_TYPE;
    return Array.from({ length: ASSESSMENT_QUESTIONS_PER_TYPE }, (_, offset) => {
      const index = start + offset;
      return [
        { type: "meaning", skill: "vocabulary", item: meaningItems[index] },
        { type: "grammar", skill: "grammar", item: grammarItems[index] },
        { type: "listening", skill: "listening", item: listeningItems[index] },
        { type: "spelling", skill: "vocabulary", item: spellingItems[index] },
        { type: "translation", skill: "translation", item: translationItems[index] },
        { type: "speaking", skill: "speaking", item: speakingItems[index] },
        { type: "reading", skill: "reading", item: readingItems[index], questionIndex: index % 3 }
      ];
    }).flat();
  }

  function buildAssessmentQuestionBank() {
    return Array.from({ length: ASSESSMENT_PAPER_COUNT }, (_, paperIndex) => buildAssessmentQuestions(paperIndex)).flat();
  }

  function weakSkillPriority(skill) {
    const mistakes = state.mistakes.filter((entry) => entry.skill === skill);
    const mistakeWeight = mistakes.reduce((sum, entry) => sum + safeInteger(entry.count, 1, 1, 9999) * 2, mistakes.length * 4);
    return (100 - state.skills[skill]) + Math.min(30, mistakeWeight);
  }

  function assessmentQuestionSignature(question) {
    const questionIndex = question.type === "reading" ? safeInteger(question.questionIndex, 0, 0, 2) : 0;
    return `${question.type}:${question.item.id}:${questionIndex}`;
  }

  function readingQuestionIndexFromMistake(entry, item) {
    const prompt = normalizeText(entry.prompt || "");
    const matchIndex = (item.questions || []).findIndex((question) => {
      const english = normalizeText(question.question || "");
      const chinese = normalizeText(question.questionZh || "");
      return (english && prompt.includes(english)) || (chinese && prompt.includes(chinese));
    });
    return matchIndex >= 0 ? matchIndex : 0;
  }

  function assessmentQuestionFromMistake(entry) {
    const item = findPracticeItem(entry.skill, entry.itemId);
    if (!item) return null;
    const question = { type: entry.type, skill: entry.skill, item };
    if (entry.type === "reading") question.questionIndex = readingQuestionIndexFromMistake(entry, item);
    return question;
  }

  function buildWeakSprintQuestions() {
    const questionsPerSkill = 4;
    const targetSkills = Object.keys(SKILLS)
      .sort((left, right) => weakSkillPriority(right) - weakSkillPriority(left)
        || state.skills[left] - state.skills[right]
        || left.localeCompare(right))
      .slice(0, 2);
    const assessmentBank = buildAssessmentQuestionBank();
    const queues = targetSkills.map((skill) => {
      const seen = new Set();
      const selected = [];
      const mistakes = state.mistakes
        .filter((entry) => entry.skill === skill)
        .sort((left, right) => right.count - left.count || String(right.lastAt).localeCompare(String(left.lastAt)));
      const candidates = [
        ...mistakes.map(assessmentQuestionFromMistake).filter(Boolean),
        ...assessmentBank.filter((question) => question.skill === skill)
      ];
      for (const question of candidates) {
        const signature = assessmentQuestionSignature(question);
        if (seen.has(signature)) continue;
        seen.add(signature);
        selected.push(question);
        if (selected.length === questionsPerSkill) break;
      }
      return selected;
    });

    return Array.from({ length: questionsPerSkill }, (_, index) => queues.map((queue) => queue[index]))
      .flat()
      .filter(Boolean);
  }

  function assessmentMeta(type) {
    return {
      meaning: ["MEANING CHECK", "选择正确词义"],
      spelling: ["LISTEN & SPELL", "听音默写单词"],
      grammar: ["GRAMMAR CHECK", "选择最自然的表达"],
      translation: ["TRANSLATION CHECK", "把意思自然地译成英文"],
      listening: ["LISTENING CHECK", "听完后选择"],
      speaking: ["SPEAKING CHECK", "完成口语表达"],
      reading: ["READING CHECK", "阅读文章并选择答案"]
    }[type];
  }

  function renderAssessment() {
    const count = assessmentSession?.questions.length || ASSESSMENT_QUESTIONS_PER_PAPER;
    $("#assessment-question-count").textContent = `1 / ${count}`;
    $("#assessment-progress-fill").style.width = "0%";
    renderAssessmentPaperPicker();
    if (assessmentSession?.finishedAt) renderAssessmentResult();
  }

  function renderAssessmentPaperPicker() {
    const paperNumber = selectedAssessmentPaper + 1;
    $$("[data-assessment-paper]").forEach((button) => {
      const selected = Number(button.dataset.assessmentPaper) === selectedAssessmentPaper;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
    $("#assessment-selected-paper").textContent = `第 ${paperNumber} 套 · ${ASSESSMENT_QUESTIONS_PER_PAPER} 题`;
    $("#start-assessment").textContent = `开始第 ${paperNumber} 套`;
    const companions = $$('[data-assessment-companion-art]');
    const companionArt = ASSESSMENT_PAPER_ART[selectedAssessmentPaper] || ASSESSMENT_PAPER_ART[0];
    companions.forEach((companion) => {
      if (!companionArt) return;
      companion.src = companionArt.source;
      companion.alt = companion.closest('.assessment-overview-companion') ? "" : companionArt.alt;
      if (companionArt.position) companion.style.objectPosition = companionArt.position;
      else companion.style.removeProperty("object-position");
    });
  }

  function renderAssessmentQuestion() {
    stopAssessmentRecognition(true);
    const question = assessmentSession?.questions[assessmentSession.index];
    if (!question) return;
    const [typeLabel, title] = assessmentMeta(question.type);
    const body = $("#assessment-question-body");
    $("#assessment-skill-label").textContent = SKILLS[question.skill].name;
    $("#assessment-question-count").textContent = `${assessmentSession.index + 1} / ${assessmentSession.questions.length}`;
    $("#assessment-progress-fill").style.width = `${Math.round(((assessmentSession.index + 1) / assessmentSession.questions.length) * 100)}%`;
    $("#assessment-question-type").textContent = typeLabel;
    $("#assessment-question-title").textContent = title;
    $("#assessment-feedback").hidden = true;
    $("#assessment-feedback").innerHTML = "";
    $(".assessment-question-card")?.classList.remove("is-answered");
    $("#assessment-next-question").hidden = true;
    $("#assessment-next-question").textContent = assessmentSession.index === assessmentSession.questions.length - 1
      ? (assessmentSession.mode === "sprint" ? "查看弱项报告" : "查看综合报告")
      : "下一题";

    if (question.type === "meaning") {
      body.innerHTML = `
        <div class="assessment-word-prompt"><strong>${escapeHtml(question.item.word)}</strong><span>${escapeHtml(question.item.phonetic)} · ${escapeHtml(question.item.partOfSpeech)}</span></div>
        <div class="assessment-option-grid">${getMeaningOptions(question.item).map((option, index) => `
          <button class="assessment-option" type="button" data-assessment-choice="${escapeHtml(option.id)}"><span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option.definition)}</strong></button>`).join("")}</div>`;
    }

    if (question.type === "spelling") {
      body.innerHTML = `
        <div class="assessment-audio-prompt">
          <button class="assessment-audio-button" type="button" data-assessment-audio aria-label="播放要默写的单词">▶</button>
          <div><strong>点击播放单词</strong><span>${escapeHtml(question.item.definition)} · ${escapeHtml(clozeVocabularyExample(question.item))}</span></div>
        </div>
        <label class="field-label" for="assessment-text-answer">输入完整英文单词</label>
        <div class="assessment-input-row"><input id="assessment-text-answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" /><button class="button button-primary" type="button" data-assessment-submit>检查拼写</button></div>`;
    }

    if (question.type === "grammar") {
      body.innerHTML = `
        <div class="assessment-context-line"><span>${escapeHtml(question.item.category)}</span><strong>${escapeHtml(question.item.quiz.question)}</strong></div>
        <div class="assessment-option-grid">${question.item.quiz.options.map((option, index) => `
          <button class="assessment-option" type="button" data-assessment-choice="${index}"><span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option)}</strong></button>`).join("")}</div>`;
    }

    if (question.type === "translation") {
      body.innerHTML = `
        <div class="assessment-context-line"><span>${escapeHtml(question.item.context)} · ${escapeHtml(question.item.tone)}</span><strong>${escapeHtml(question.item.source)}</strong></div>
        <div class="hint-row">${question.item.hints.map((hint) => `<span>${escapeHtml(hint)}</span>`).join("")}</div>
        <label class="field-label" for="assessment-text-answer">你的英文</label>
        <textarea id="assessment-text-answer" rows="5" spellcheck="true" placeholder="写出自然完整的英文表达…"></textarea>
        <button class="button button-primary" type="button" data-assessment-submit>提交翻译</button>`;
    }

    if (question.type === "listening") {
      body.innerHTML = `
        <div class="assessment-audio-prompt">
          <button class="assessment-audio-button" type="button" data-assessment-audio aria-label="播放综合测试听力">▶</button>
          <div><strong>${escapeHtml(question.item.topic)} · ${escapeHtml(question.item.level)}</strong><span>先听完整句子，再选择最准确的一项。</span></div>
        </div>
        <div class="assessment-context-line"><strong>${escapeHtml(question.item.question)}</strong></div>
        <div class="assessment-option-grid">${question.item.options.map((option, index) => `
          <button class="assessment-option" type="button" data-assessment-choice="${index}"><span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option)}</strong></button>`).join("")}</div>`;
    }

    if (question.type === "speaking") {
      body.innerHTML = `
        <div class="assessment-context-line"><span>${escapeHtml(question.item.scenario)}</span><strong>${escapeHtml(question.item.prompt)}</strong></div>
        <div class="assessment-speaking-controls">
          <button class="assessment-record-button" type="button" data-assessment-record aria-pressed="false">开始录音</button>
          <button class="text-button" type="button" data-assessment-audio>朗读题目</button>
          <span>说完后再次点击停止；也可以手动输入。</span>
        </div>
        <label class="field-label" for="assessment-text-answer">识别结果 / 手动输入</label>
        <textarea id="assessment-text-answer" rows="5" placeholder="在这里保留你的完整回答…"></textarea>
        <button class="button button-primary" type="button" data-assessment-submit>提交口语表达</button>`;
    }

    if (question.type === "reading") {
      const readingQuestion = question.item.questions[question.questionIndex];
      body.innerHTML = `
        <div class="assessment-reading-passage">
          <span>${escapeHtml(question.item.title)} · ${escapeHtml(question.item.level)}</span>
          <p>${escapeHtml(question.item.passage)}</p>
        </div>
        <div class="assessment-context-line assessment-reading-question"><small>${escapeHtml(readingQuestion.questionZh)}</small><strong>${escapeHtml(readingQuestion.question)}</strong></div>
        <div class="assessment-option-grid">${readingQuestion.options.map((option, index) => `
          <button class="assessment-option" type="button" data-assessment-choice="${index}"><span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option)}</strong></button>`).join("")}</div>`;
    }
  }

  function applyAssessmentModeCopy(mode) {
    const sprint = mode === "sprint";
    $("#page-eyebrow").textContent = sprint ? "ADAPTIVE WEAKNESS SPRINT" : VIEW_COPY.assessment[0];
    $("#page-title").textContent = sprint ? "8题冲刺，把弱项练扎实" : VIEW_COPY.assessment[1];
  }

  function startAssessmentSession(mode, questions, paperIndex = null) {
    stopAssessmentRecognition(true);
    assessmentSession = {
      id: `${mode === "sprint" ? "weak-sprint" : "assessment"}-${Date.now()}`,
      mode,
      paperIndex: mode === "full" ? normalizeAssessmentPaper(paperIndex) : null,
      index: 0,
      questions,
      answers: [],
      startedAt: new Date().toISOString(),
      finishedAt: null
    };
    if (currentView === "assessment") applyViewPage("assessment", 1, "forward", true);
    else navigate("assessment", { focus: true, direction: "forward", pageIndex: 1 });
    applyAssessmentModeCopy(mode);
    renderAssessmentQuestion();
  }

  function startAssessment() {
    startAssessmentSession("full", buildAssessmentQuestions(selectedAssessmentPaper), selectedAssessmentPaper);
  }

  function startWeakSprint() {
    const questions = buildWeakSprintQuestions();
    if (questions.length !== 8) {
      showToast("弱项冲刺题库暂未准备完整，请稍后重试。", 3600);
      return;
    }
    startAssessmentSession("sprint", questions);
  }

  function restartAssessmentSession() {
    if (assessmentSession?.mode === "sprint") startWeakSprint();
    else {
      selectedAssessmentPaper = normalizeAssessmentPaper(assessmentSession?.paperIndex ?? selectedAssessmentPaper);
      startAssessment();
    }
  }

  function completeAssessmentQuestion(result) {
    const question = assessmentSession.questions[assessmentSession.index];
    const readingQuestion = question.type === "reading" ? question.item.questions[question.questionIndex] : null;
    if (result.correct) {
      resolveMistake(question.type, question.item.id);
    } else {
      recordMistake({
        type: question.type,
        skill: question.skill,
        item: question.item,
        prompt: readingQuestion ? `${readingQuestion.question} / ${readingQuestion.questionZh}` : mistakePromptForItem(question.type, question.item),
        answer: readingQuestion ? `${readingQuestion.options[readingQuestion.answer]} / ${readingQuestion.optionsZh?.[readingQuestion.answer] || ""}` : mistakeAnswerForItem(question.type, question.item),
        userAnswer: result.userAnswer || ""
      });
    }
    assessmentSession.answers.push({
      type: question.type,
      skill: question.skill,
      itemId: question.item.id,
      title: result.title,
      score: clamp(Math.round(result.score), 0, 100),
      correct: Boolean(result.correct),
      objective: Boolean(result.objective)
    });
    const feedback = $("#assessment-feedback");
    feedback.classList.toggle("is-wrong", result.score < 60);
    feedback.innerHTML = result.feedback;
    feedback.hidden = false;
    $(".assessment-question-card")?.classList.add("is-answered");
    $("#assessment-next-question").hidden = false;
    $$("button, input, textarea", $("#assessment-question-body")).forEach((control) => { control.disabled = true; });
    $("#assessment-next-question").focus();
  }

  function answerAssessmentChoice(value) {
    if (!assessmentSession || assessmentSession.answers.length > assessmentSession.index) return;
    const question = assessmentSession.questions[assessmentSession.index];
    let correctValue;
    let explanation;
    if (question.type === "meaning") {
      correctValue = question.item.id;
      explanation = `${question.item.word}：${question.item.definition}。${question.item.example}`;
    } else if (question.type === "grammar") {
      correctValue = String(question.item.quiz.answer);
      explanation = question.item.quiz.explanation;
    } else if (question.type === "listening") {
      correctValue = String(question.item.answer);
      explanation = `${question.item.text} · 关键词：${question.item.keywords.join(" · ")}`;
    } else if (question.type === "reading") {
      const readingQuestion = question.item.questions[question.questionIndex];
      correctValue = String(readingQuestion.answer);
      explanation = `${readingQuestion.explanation} / ${readingQuestion.explanationZh}`;
    } else {
      return;
    }
    const correct = String(value) === String(correctValue);
    let selectedAnswer = "未选择";
    if (question.type === "meaning") selectedAnswer = CONTENT.vocabulary.find((item) => item.id === String(value))?.definition || "未选择";
    if (question.type === "grammar") selectedAnswer = question.item.quiz.options[Number(value)] || "未选择";
    if (question.type === "listening") selectedAnswer = question.item.options[Number(value)] || "未选择";
    if (question.type === "reading") {
      const readingQuestion = question.item.questions[question.questionIndex];
      selectedAnswer = `${readingQuestion.options[Number(value)] || "未选择"} / ${readingQuestion.optionsZh?.[Number(value)] || ""}`;
    }
    $$('[data-assessment-choice]', $("#assessment-question-body")).forEach((button) => {
      button.disabled = true;
      if (button.dataset.assessmentChoice === String(correctValue)) button.classList.add("is-correct");
      if (button.dataset.assessmentChoice === String(value) && !correct) button.classList.add("is-wrong");
    });
    completeAssessmentQuestion({
      score: correct ? (question.type === "reading" ? 94 : question.type === "listening" ? 90 : 92) : (question.type === "reading" ? 34 : question.type === "grammar" ? 42 : question.type === "listening" ? 45 : 28),
      correct,
      objective: true,
      userAnswer: selectedAnswer,
      title: `${assessmentMeta(question.type)[1]} · ${correct ? "正确" : "错误"}`,
      feedback: `<strong>${correct ? "回答正确" : "再看一次关键线索"}</strong><p>${escapeHtml(explanation)}</p>`
    });
  }

  function submitAssessmentText() {
    if (!assessmentSession || assessmentSession.answers.length > assessmentSession.index) return;
    const question = assessmentSession.questions[assessmentSession.index];
    const input = $("#assessment-text-answer");
    const value = input?.value.trim() || "";
    if (!value) {
      showToast(question.type === "speaking" ? "先完成一段口语表达，再提交。" : "先写下你的答案，再提交。", 3000);
      input?.focus();
      return;
    }
    stopAssessmentRecognition(true);
    if (question.type === "spelling") {
      const correct = normalizeSpelling(value) === normalizeSpelling(question.item.word);
      completeAssessmentQuestion({
        score: correct ? 96 : 24,
        correct,
        objective: true,
        userAnswer: value,
        title: `默写 ${question.item.word} · ${correct ? "正确" : "错误"}`,
        feedback: `<strong>${correct ? "拼写正确" : `正确答案：${escapeHtml(question.item.word)}`}</strong><p>${escapeHtml(question.item.collocation)} · ${escapeHtml(question.item.example)}</p>`
      });
      return;
    }
    if (question.type === "translation") {
      const result = scoreExpression(value, [question.item.answer, question.item.shortAnswer, ...question.item.alternatives], question.item.hints);
      completeAssessmentQuestion({
        score: result.score,
        correct: result.score >= 70,
        objective: false,
        userAnswer: value,
        title: `翻译表达 · ${result.score}%`,
        feedback: `<strong>表达匹配 ${result.score}% · 关键词覆盖 ${Math.round(result.coverage * 100)}%</strong><p>参考：${escapeHtml(question.item.answer)}</p>`
      });
      return;
    }
    if (question.type === "speaking") {
      const result = scoreExpression(value, [question.item.target, question.item.shortVersion], question.item.keywords);
      completeAssessmentQuestion({
        score: result.score,
        correct: result.score >= 70,
        objective: false,
        userAnswer: value,
        title: `口语表达 · ${result.score}%`,
        feedback: `<strong>表达匹配 ${result.score}% · 关键词覆盖 ${Math.round(result.coverage * 100)}%</strong><p>易背版本：${escapeHtml(question.item.shortVersion)}</p>`
      });
    }
  }

  function playAssessmentAudio() {
    const question = assessmentSession?.questions[assessmentSession.index];
    if (!question) return;
    if (question.type === "spelling") speak(question.item.word, 0.78);
    if (question.type === "listening") speak(question.item.text, 0.9);
    if (question.type === "speaking") speak(question.item.prompt, 0.86);
  }

  function updateAssessmentRecordingUi() {
    const button = $('[data-assessment-record]');
    if (!button) return;
    button.classList.toggle('is-recording', assessmentRecognitionActive);
    button.setAttribute('aria-pressed', String(assessmentRecognitionActive));
    button.textContent = assessmentRecognitionActive ? '停止录音' : '开始录音';
  }

  function startAssessmentRecognitionEngine(sessionId = assessmentRecognitionSessionId) {
    if (!assessmentRecognitionActive || !SpeechRecognitionApi || sessionId !== assessmentRecognitionSessionId) return;
    const input = $("#assessment-text-answer");
    if (!input) return;
    const engine = new SpeechRecognitionApi();
    assessmentRecognition = engine;
    engine.lang = state.profile.accent;
    engine.continuous = true;
    engine.interimResults = true;
    const segmentFinalResults = new Map();
    let segmentLatestText = "";
    engine.onresult = (event) => {
      if (sessionId !== assessmentRecognitionSessionId) return;
      let interim = "";
      for (let index = 0; index < event.results.length; index += 1) {
        const transcript = event.results[index][0].transcript.trim();
        if (event.results[index].isFinal) segmentFinalResults.set(index, transcript);
        else if (index >= event.resultIndex) interim = mergeRecognitionText(interim, transcript);
      }
      const segmentFinalText = [...segmentFinalResults.entries()]
        .sort(([left], [right]) => left - right)
        .map(([, transcript]) => transcript)
        .join(" ");
      segmentLatestText = mergeRecognitionText(segmentFinalText, interim);
      input.value = mergeRecognitionText(assessmentRecognitionFinalText, segmentLatestText);
    };
    engine.onerror = (event) => {
      if (sessionId !== assessmentRecognitionSessionId) return;
      if (event.error === "no-speech") return;
      if (["not-allowed", "service-not-allowed", "audio-capture"].includes(event.error)) {
        assessmentRecognitionActive = false;
        updateAssessmentRecordingUi();
        showToast(`${assessmentSession?.mode === "sprint" ? "弱项冲刺" : "综合测试"}录音不可用，可以直接手动输入回答。`, 3500);
      }
    };
    engine.onend = () => {
      if (sessionId !== assessmentRecognitionSessionId) return;
      window.clearTimeout(assessmentRecognitionStopFallbackTimer);
      assessmentRecognitionStopFallbackTimer = null;
      const segmentFinalText = [...segmentFinalResults.entries()]
        .sort(([left], [right]) => left - right)
        .map(([, transcript]) => transcript)
        .join(" ");
      assessmentRecognitionFinalText = mergeRecognitionText(assessmentRecognitionFinalText, segmentFinalText || segmentLatestText);
      if (assessmentRecognitionFinalText && input.isConnected) input.value = assessmentRecognitionFinalText;
      if (assessmentRecognition === engine) assessmentRecognition = null;
      if (!assessmentRecognitionActive) {
        updateAssessmentRecordingUi();
        return;
      }
      window.clearTimeout(assessmentRecognitionRestartTimer);
      assessmentRecognitionRestartTimer = window.setTimeout(() => startAssessmentRecognitionEngine(sessionId), 240);
    };
    try {
      engine.start();
    } catch {
      if (sessionId !== assessmentRecognitionSessionId) return;
      assessmentRecognitionActive = false;
      updateAssessmentRecordingUi();
      showToast("录音启动失败，可以手动输入回答。", 3200);
    }
  }

  function toggleAssessmentRecognition() {
    if (!SpeechRecognitionApi) {
      showToast("当前浏览器不支持语音识别，可以手动输入回答。", 3500);
      return;
    }
    if (assessmentRecognitionActive) {
      stopAssessmentRecognition();
      return;
    }
    const input = $("#assessment-text-answer");
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    assessmentRecognitionSessionId += 1;
    assessmentRecognitionFinalText = input?.value.trim() || "";
    assessmentRecognitionActive = true;
    updateAssessmentRecordingUi();
    startAssessmentRecognitionEngine(assessmentRecognitionSessionId);
  }

  function stopAssessmentRecognition(silent = false) {
    window.clearTimeout(assessmentRecognitionRestartTimer);
    window.clearTimeout(assessmentRecognitionStopFallbackTimer);
    assessmentRecognitionRestartTimer = null;
    assessmentRecognitionStopFallbackTimer = null;
    const wasActive = assessmentRecognitionActive;
    assessmentRecognitionActive = false;
    const engine = assessmentRecognition;
    if (silent) {
      assessmentRecognitionSessionId += 1;
      try { engine?.abort(); } catch {}
      assessmentRecognition = null;
    } else if (engine) {
      try { engine.stop(); } catch {
        try { engine.abort(); } catch {}
        assessmentRecognition = null;
      }
      const stoppingSessionId = assessmentRecognitionSessionId;
      assessmentRecognitionStopFallbackTimer = window.setTimeout(() => {
        if (stoppingSessionId !== assessmentRecognitionSessionId) return;
        assessmentRecognitionSessionId += 1;
        try { engine.abort(); } catch {}
        if (assessmentRecognition === engine) assessmentRecognition = null;
        updateAssessmentRecordingUi();
      }, 1600);
    }
    updateAssessmentRecordingUi();
    if (wasActive && !silent) showToast(`已停止${assessmentSession?.mode === "sprint" ? "弱项冲刺" : "综合测试"}录音。`, 1800);
  }

  function advanceAssessmentQuestion() {
    if (!assessmentSession || assessmentSession.answers.length <= assessmentSession.index) return;
    if (assessmentSession.index >= assessmentSession.questions.length - 1) {
      finishAssessment();
      return;
    }
    assessmentSession.index += 1;
    renderAssessmentQuestion();
    triggerSakuraBurst();
  }

  function finishAssessment() {
    stopAssessmentRecognition(true);
    if (assessmentSession?.finishedAt) {
      renderAssessmentResult();
      applyViewPage("assessment", 2, "forward", true);
      return;
    }
    assessmentSession.finishedAt = new Date().toISOString();
    const testedSkills = assessmentSession.mode === "sprint"
      ? [...new Set(assessmentSession.questions.map((question) => question.skill))]
      : Object.keys(SKILLS);
    assessmentSession.skillScores = testedSkills.reduce((result, skill) => {
      const answers = assessmentSession.answers.filter((answer) => answer.skill === skill);
      result[skill] = answers.length ? Math.round(answers.reduce((sum, answer) => sum + answer.score, 0) / answers.length) : 0;
      return result;
    }, {});
    assessmentSession.totalScore = Math.round(
      Object.values(assessmentSession.skillScores).reduce((sum, score) => sum + score, 0)
      / Math.max(Object.keys(assessmentSession.skillScores).length, 1)
    );
    assessmentSession.objectiveAccuracy = Math.round(
      assessmentSession.answers.filter((answer) => answer.objective && answer.correct).length
      / Math.max(assessmentSession.answers.filter((answer) => answer.objective).length, 1) * 100
    );
    Object.entries(assessmentSession.skillScores).forEach(([skill, score]) => {
      if (assessmentSession.mode === "sprint") {
        recordActivity(skill, score, score >= 80 ? 8 : score >= 60 ? 6 : 4, `弱项冲刺 · ${SKILLS[skill].name}`, { masteryWeight: 0.12 });
      } else {
        recordActivity(skill, score, score >= 80 ? 14 : score >= 60 ? 9 : 5, `综合测试第 ${assessmentSession.paperIndex + 1} 套 · ${SKILLS[skill].name}`);
      }
    });
    renderAssessmentResult();
    applyViewPage("assessment", 2, "forward", true);
  }

  function renderAssessmentResult() {
    if (!assessmentSession?.finishedAt) return;
    const sprint = assessmentSession.mode === "sprint";
    $("#assessment-report-eyebrow").textContent = sprint ? "YOUR SPRINT REPORT" : "YOUR FULL REPORT";
    $("#assessment-result-title").textContent = sprint ? "弱项冲刺完成" : `第 ${assessmentSession.paperIndex + 1} 套完成`;
    $("#restart-assessment").textContent = sprint ? "再冲刺一次" : `重做第 ${assessmentSession.paperIndex + 1} 套`;
    $("#assessment-total-score").textContent = assessmentSession.totalScore;
    $("#assessment-skill-results").innerHTML = Object.entries(assessmentSession.skillScores).map(([skill, score]) => `
      <div><span>${SKILLS[skill].name}</span><strong>${score}</strong><i><b style="width:${score}%;--skill-color:${SKILLS[skill].color}"></b></i></div>`).join("");
    const weakest = Object.entries(assessmentSession.skillScores).sort((left, right) => left[1] - right[1])[0];
    const testedSkillNames = Object.keys(assessmentSession.skillScores).map((skill) => SKILLS[skill].name).join("、");
    $("#assessment-result-note").textContent = sprint
      ? `本轮聚焦 ${testedSkillNames}，平均 ${assessmentSession.totalScore} 分。下一轮优先练习：${SKILLS[weakest[0]].name}（${weakest[1]} 分）。`
      : `客观题正确率 ${assessmentSession.objectiveAccuracy}%。下一轮优先练习：${SKILLS[weakest[0]].name}（${weakest[1]} 分）。`;
  }

  function renderReviewSuggestions() {
    const host = $("#review-suggestion-list");
    if (!host) return;
    const counts = Object.keys(SKILLS).map((skill) => ({
      skill,
      count: state.mistakes.filter((entry) => entry.skill === skill).length,
      first: state.mistakes.find((entry) => entry.skill === skill)
    })).filter((entry) => entry.count > 0).sort((left, right) => right.count - left.count);

    if (!counts.length) {
      const favorite = state.favorites.map((itemId) => CONTENT.vocabulary.find((item) => item.id === itemId)).find(Boolean);
      host.innerHTML = favorite
        ? `<button class="review-suggestion-item" type="button" data-review-open data-review-skill="vocabulary" data-review-type="meaning" data-review-item-id="${escapeHtml(favorite.id)}"><span>收藏巩固</span><strong>${escapeHtml(favorite.word)}</strong><small>${escapeHtml(favorite.definition)}</small></button>`
        : '<div class="empty-state">还没有错题或收藏；仍可按当前掌握度开始 8 题弱项冲刺。</div>';
      return;
    }

    host.innerHTML = counts.slice(0, 3).map((entry) => `
      <button class="review-suggestion-item" type="button" data-review-open data-review-skill="${entry.skill}" data-review-type="${entry.first.type}" data-review-item-id="${escapeHtml(entry.first.itemId)}">
        <span>${escapeHtml(SKILLS[entry.skill].name)}</span>
        <strong>${entry.count} 个待纠正</strong>
        <small>${escapeHtml(entry.first.prompt || mistakeTypeLabel(entry.first.type))}</small>
      </button>`).join("");
  }

  function renderWordbookResults() {
    const host = $("#wordbook-results");
    if (!host) return;
    const query = vocabularySearchQuery.trim().toLocaleLowerCase("zh-CN");
    const favoriteSet = new Set(state.favorites);
    const source = wordbookMode === "favorites"
      ? state.favorites.map((itemId) => CONTENT.vocabulary.find((item) => item.id === itemId)).filter(Boolean)
      : CONTENT.vocabulary;
    const matching = query
      ? source.filter((item) => [item.word, item.definition, item.definitionEn, item.collocation, item.example, item.exampleZh, item.topic, item.level]
        .join(" ").toLocaleLowerCase("zh-CN").includes(query))
      : source;
    const visible = matching.slice(0, 40);
    $("#wordbook-result-count").textContent = String(matching.length);
    host.innerHTML = visible.length ? visible.map((item) => `
      <article class="review-list-item wordbook-item">
        <div class="review-item-copy"><span>${escapeHtml(item.level)} · ${escapeHtml(item.topic)} · ${escapeHtml(item.partOfSpeech)}</span><strong>${escapeHtml(item.word)}</strong><p>${escapeHtml(item.definition)} · ${escapeHtml(item.collocation)}</p></div>
        <div class="review-item-actions">
          <button class="review-icon-button" type="button" data-review-speak="${escapeHtml(item.id)}" aria-label="朗读 ${escapeHtml(item.word)}">♪</button>
          <button class="button button-ghost button-compact" type="button" data-review-toggle-favorite="${escapeHtml(item.id)}">${favoriteSet.has(item.id) ? "取消收藏" : "收藏"}</button>
          <button class="button button-primary button-compact" type="button" data-review-open data-review-skill="vocabulary" data-review-type="meaning" data-review-item-id="${escapeHtml(item.id)}">去练习</button>
        </div>
      </article>`).join("") + (matching.length > visible.length ? `<p class="review-list-note">结果较多，当前显示前 ${visible.length} 个；继续输入关键词可缩小范围。</p>` : "")
      : `<div class="empty-state">${wordbookMode === "favorites" ? "还没有收藏单词。可在单词页点击“收藏”。" : "没有找到匹配词条，请换一个英文、中文或主题关键词。"}</div>`;
  }

  function renderMistakeResults() {
    const host = $("#mistake-results");
    if (!host) return;
    const mistakes = state.mistakes.filter((entry) => mistakeSkillFilter === "all" || entry.skill === mistakeSkillFilter);
    host.innerHTML = mistakes.length ? mistakes.map((entry) => {
      const item = findPracticeItem(entry.skill, entry.itemId);
      if (!item) return "";
      const date = Number.isNaN(Date.parse(entry.lastAt)) ? "最近" : new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric" }).format(new Date(entry.lastAt));
      return `<article class="review-list-item mistake-item">
        <div class="mistake-type-mark" style="--review-color:${SKILLS[entry.skill].color}"><span>${escapeHtml(SKILLS[entry.skill].name)}</span><small>${escapeHtml(mistakeTypeLabel(entry.type))}</small></div>
        <div class="review-item-copy"><span>${escapeHtml(date)} · 累计错 ${entry.count} 次</span><strong>${escapeHtml(entry.prompt || mistakePromptForItem(entry.type, item))}</strong><p>正确参考：${escapeHtml(entry.answer || mistakeAnswerForItem(entry.type, item))}</p>${entry.userAnswer ? `<small>上次回答：${escapeHtml(entry.userAnswer)}</small>` : ""}</div>
        <div class="review-item-actions">
          <button class="button button-ghost button-compact" type="button" data-review-remove="${escapeHtml(entry.key)}">标记已掌握</button>
          <button class="button button-primary button-compact" type="button" data-review-open data-review-skill="${entry.skill}" data-review-type="${entry.type}" data-review-item-id="${escapeHtml(entry.itemId)}">重新练习</button>
        </div>
      </article>`;
    }).join("") : '<div class="empty-state">当前筛选下没有错题。答对重练题后，它也会自动从这里移除。</div>';
  }

  function renderReview() {
    $("#review-favorite-count").textContent = state.favorites.length;
    $("#review-mistake-count").textContent = state.mistakes.length;
    $("#review-due-count").textContent = dueVocabularyCount();
    $("#review-total-vocab").textContent = CONTENT.vocabulary.length;
    $("#vocabulary-search-input").value = vocabularySearchQuery;
    $("#wordbook-mode").value = wordbookMode;
    $("#mistake-skill-filter").value = mistakeSkillFilter;
    renderReviewSuggestions();
    renderWordbookResults();
    renderMistakeResults();
  }

  function openReviewTarget(skill, itemId, type) {
    const item = findPracticeItem(skill, itemId);
    if (!item) {
      showToast("这道题已经不在当前内容包中。", 3000);
      return;
    }
    if (skill === "vocabulary") {
      vocabularyReviewedThisSession.delete(item.id);
      const remaining = buildVocabularyQueue().filter((candidate) => candidate.id !== item.id);
      vocabularyQueue = [item, ...remaining].slice(0, 8);
      vocabularySessionIndex = 0;
      vocabularyMode = type === "spelling" ? "spelling" : type === "meaning" ? "meaning" : "review";
    } else {
      const index = practiceCollection(skill).findIndex((candidate) => candidate.id === itemId);
      if (index >= 0) state.indices[skill] = index;
      if (skill === "reading") resetReadingSession();
    }
    saveState();
    navigate(skill, { focus: true, pageIndex: skill === "grammar" || skill === "reading" ? 1 : 0 });
  }

  function startSmartReview() {
    startWeakSprint();
  }

  function clearAllMistakes() {
    if (!state.mistakes.length) {
      showToast("错题本已经是空的。", 2400);
      return;
    }
    if (!window.confirm(`确定清空 ${state.mistakes.length} 道错题吗？收藏单词和学习进度不会删除。`)) return;
    state.mistakes = [];
    saveState();
    updateReviewBadge();
    renderReview();
    showToast("错题本已清空。", 2600);
  }

  function renderProgress() {
    $("#progress-total-sessions").textContent = state.attempts.length;
    $("#progress-level").textContent = state.profile.level;
    $("#progress-xp").textContent = state.xp;
    $("#progress-streak").textContent = state.streak.count;
    $("#progress-mastery-list").innerHTML = Object.entries(SKILLS).map(([key, meta]) => `
      <div class="mastery-row"><span>${meta.name}</span><div class="progress-track"><div class="progress-fill" style="--value:${state.skills[key]}%;--color:${meta.color}"></div></div><strong>${state.skills[key]}%</strong></div>
    `).join("");

    const dayCounts = {};
    state.attempts.forEach((attempt) => {
      dayCounts[attempt.date] = (dayCounts[attempt.date] || 0) + 1;
    });
    const days = [];
    for (let offset = 13; offset >= 0; offset -= 1) {
      const date = addDays(localDateKey(), -offset);
      const count = dayCounts[date] || 0;
      const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : 3;
      days.push({ date, count, level });
    }
    $("#activity-heatmap").innerHTML = days.map((day) => `<span class="heat-cell level-${day.level}" title="${day.date}：${day.count} 次练习"></span>`).join("");

    const recent = [...state.attempts].reverse().slice(0, 4);
    $("#recent-activity-list").innerHTML = recent.length
      ? recent.map((attempt) => `<div class="activity-item"><strong>${escapeHtml(SKILLS[attempt.skill]?.name || attempt.skill)} · ${escapeHtml(attempt.title)}</strong><span>${attempt.date} · +${attempt.xp} XP</span></div>`).join("")
      : '<div class="empty-state">完成第一次练习后，这里会出现你的学习记录。</div>';
  }

  function applyTheme() {
    const requested = state.profile.theme;
    const dark = requested === "dark" || (requested === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }

  function openSettings() {
    if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
    if (assessmentRecognitionActive || assessmentRecognition) stopAssessmentRecognition(true);
    const dialog = $("#settings-dialog");
    const form = $("#settings-form");
    form.elements.name.value = state.profile.name;
    form.elements.level.value = state.profile.level;
    form.elements.goal.value = state.profile.goal;
    form.elements.dailyMinutes.value = String(state.profile.dailyMinutes);
    form.elements.accent.value = state.profile.accent;
    form.elements.theme.value = state.profile.theme;
    renderCapabilities();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeSettings() {
    const dialog = $("#settings-dialog");
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function renderCapabilities() {
    const capabilities = [
      ["系统英文朗读", "speechSynthesis" in window],
      ["语音识别", Boolean(SpeechRecognitionApi)],
      ["本地进度保存", storageAvailable]
    ];
    $("#capability-summary").innerHTML = capabilities.map(([label, available]) => `
      <span class="capability-item${available ? " is-available" : ""}"><i></i>${label} · ${available ? "可用" : "降级可用"}</span>
    `).join("");
  }

  function saveSettings(event) {
    event.preventDefault();
    if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
    if (assessmentRecognitionActive || assessmentRecognition) stopAssessmentRecognition(true);
    const form = event.currentTarget;
    state.profile.name = form.elements.name.value.trim() || "学习者";
    state.profile.level = form.elements.level.value;
    state.profile.goal = form.elements.goal.value;
    state.profile.dailyMinutes = Number(form.elements.dailyMinutes.value);
    state.profile.accent = form.elements.accent.value;
    state.profile.theme = form.elements.theme.value;
    state.daily.nonce += 1;
    saveState();
    closeSettings();
    renderSharedState();
    renderView(currentView);
    showToast("设置已保存，今日计划已重新安排。", 3200);
  }

  function resetProgress() {
    const confirmed = window.confirm("确定清除所有学习进度吗？你的个人设置会保留。建议先导出档案备份。此操作无法撤销。");
    if (!confirmed) return;
    const profile = clone(state.profile);
    state = clone(DEFAULT_STATE);
    state.profile = profile;
    state.daily.date = localDateKey();
    vocabularyQueue = [];
    vocabularySessionIndex = 0;
    vocabularyReviewedThisSession.clear();
    saveState();
    closeSettings();
    renderSharedState();
    renderView(currentView);
    showToast("学习进度已清除，个人设置已保留。", 3500);
  }

  async function exportProgress() {
    const payload = {
      app: "English Compass",
      schemaVersion: SCHEMA_VERSION,
      contentVersion: CONTENT.version,
      exportedAt: new Date().toISOString(),
      state
    };
    const text = JSON.stringify(payload, null, 2);
    const suggestedName = `english-compass-${localDateKey()}.json`;

    if ("showSaveFilePicker" in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName,
          types: [{ description: "JSON 学习档案", accept: { "application/json": [".json"] } }]
        });
        const writable = await handle.createWritable();
        await writable.write(text);
        await writable.close();
        showToast("学习档案已导出。", 3000);
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = suggestedName;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    showToast("学习档案已导出；请保存在 D 盘项目目录。", 4000);
  }

  function importProgressFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result));
        if (!payload || payload.app !== "English Compass" || !payload.state) throw new Error("档案标识不正确");
        if (Number(payload.schemaVersion) > SCHEMA_VERSION) throw new Error("档案来自更高版本，当前网站无法安全导入");
        const imported = migrateState(payload.state);
        if (!imported.profile || !imported.skills || !Array.isArray(imported.attempts)) throw new Error("档案结构不完整");
        state = imported;
        vocabularyQueue = [];
        vocabularyReviewedThisSession.clear();
        saveState();
        renderSharedState();
        renderView(currentView);
        showToast("学习档案导入成功。", 3500);
      } catch (error) {
        showToast(`未导入：${error.message || "档案格式无效"}`, 5000);
      } finally {
        $("#import-progress-file").value = "";
      }
    };
    reader.onerror = () => showToast("无法读取所选档案。", 3500);
    reader.readAsText(file, "UTF-8");
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("Service worker registration failed:", error));
      });
    }
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const pageTurnButton = event.target.closest("[data-view-page-turn]");
      if (pageTurnButton) {
        turnLearningPage(pageTurnButton.dataset.viewPageTurn === "next" ? 1 : -1);
      }

      const navButton = event.target.closest('[data-navigation] [data-view]');
      if (navButton) navigate(navButton.dataset.view, { focus: true });

      const goView = event.target.closest("[data-go-view]");
      if (goView) navigate(goView.dataset.goView, { focus: true });

      const task = event.target.closest("[data-task-view]");
      if (task) navigate(task.dataset.taskView, { focus: true });

      const reviewPageButton = event.target.closest("[data-review-page]");
      if (reviewPageButton) applyViewPage("review", Number(reviewPageButton.dataset.reviewPage), "forward", true);

      const reviewOpenButton = event.target.closest("[data-review-open]");
      if (reviewOpenButton) openReviewTarget(reviewOpenButton.dataset.reviewSkill, reviewOpenButton.dataset.reviewItemId, reviewOpenButton.dataset.reviewType);

      const reviewFavoriteButton = event.target.closest("[data-review-toggle-favorite]");
      if (reviewFavoriteButton) toggleFavorite(reviewFavoriteButton.dataset.reviewToggleFavorite);

      const reviewSpeakButton = event.target.closest("[data-review-speak]");
      if (reviewSpeakButton) {
        const item = CONTENT.vocabulary.find((word) => word.id === reviewSpeakButton.dataset.reviewSpeak);
        if (item) speak(item.word, 0.82);
      }

      const reviewRemoveButton = event.target.closest("[data-review-remove]");
      if (reviewRemoveButton) {
        state.mistakes = state.mistakes.filter((entry) => entry.key !== reviewRemoveButton.dataset.reviewRemove);
        saveState();
        updateReviewBadge();
        renderReview();
        showToast("已从错题本移除。", 2200);
      }

      const vocabularyModeButton = event.target.closest("[data-vocab-mode]");
      if (vocabularyModeButton) {
        if (vocabularyExerciseAnswered) advanceVocabularyIndex();
        vocabularyMode = vocabularyModeButton.dataset.vocabMode;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        renderVocabulary();
      }

      const vocabButton = event.target.closest("[data-vocab-index]");
      if (vocabButton) {
        vocabularySessionIndex = Number(vocabButton.dataset.vocabIndex);
        renderVocabulary();
        applyViewPage("vocabulary", 0, "backward", true);
      }

      const ratingButton = event.target.closest("[data-word-rating]");
      if (ratingButton) reviewVocabulary(ratingButton.dataset.wordRating);

      const meaningOption = event.target.closest("[data-meaning-item-id]");
      if (meaningOption) answerMeaningQuestion(meaningOption.dataset.meaningItemId);

      const grammarLesson = event.target.closest("[data-grammar-index]");
      if (grammarLesson) {
        state.indices.grammar = Number(grammarLesson.dataset.grammarIndex);
        saveState();
        renderGrammar();
        applyViewPage("grammar", 0, "backward", true);
      }

      const grammarOption = event.target.closest("[data-grammar-option]");
      if (grammarOption) answerGrammar(Number(grammarOption.dataset.grammarOption));

      const listeningOption = event.target.closest("[data-listening-option]");
      if (listeningOption) answerListening(Number(listeningOption.dataset.listeningOption));

      const readingOption = event.target.closest("[data-reading-option]");
      if (readingOption) answerReadingQuestion(Number(readingOption.dataset.readingOption));

      const readingPageButton = event.target.closest("[data-reading-page]");
      if (readingPageButton) applyViewPage("reading", Number(readingPageButton.dataset.readingPage), "forward", true);

      const assessmentChoice = event.target.closest("[data-assessment-choice]");
      if (assessmentChoice) answerAssessmentChoice(assessmentChoice.dataset.assessmentChoice);
      if (event.target.closest("[data-assessment-submit]")) submitAssessmentText();
      if (event.target.closest("[data-assessment-audio]")) playAssessmentAudio();
      if (event.target.closest("[data-assessment-record]")) toggleAssessmentRecognition();

      const speakingScenario = event.target.closest("[data-speaking-index]");
      if (speakingScenario) {
        if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
        state.indices.speaking = Number(speakingScenario.dataset.speakingIndex);
        saveState();
        renderSpeaking();
        applyViewPage("speaking", 0, "backward", true);
      }

      if (event.target.closest("[data-next-translation]")) nextTranslation();
      if (event.target.closest("[data-next-speaking]")) nextSpeaking();
      if (event.target.closest("[data-repeat-speaking]")) {
        if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
        $("#speech-feedback").hidden = true;
        $("#speech-transcript-input").value = "";
        $("#record-speech").focus();
      }
    });

    const revealHoverArtwork = (card, pointerType = "") => {
      if (!card || window.innerWidth <= 680 || (pointerType && pointerType !== "mouse")) return;
      const page = card.closest(".has-hover-card-art");
      if (!page) return;
      $$(".hover-reveal-art.is-art-revealed").forEach((item) => item.classList.remove("is-art-revealed"));
      card.classList.add("is-art-revealed");
    };
    const concealHoverArtwork = (card) => card?.classList.remove("is-art-revealed");
    document.addEventListener("pointerover", (event) => revealHoverArtwork(event.target.closest(".hover-reveal-art"), event.pointerType));
    document.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".hover-reveal-art");
      if (card && !card.contains(event.relatedTarget)) concealHoverArtwork(card);
    });
    document.addEventListener("focusin", (event) => revealHoverArtwork(event.target.closest(".hover-reveal-art")));
    document.addEventListener("focusout", (event) => {
      const card = event.target.closest(".hover-reveal-art");
      if (!card) return;
      window.setTimeout(() => {
        if (!card.contains(document.activeElement)) concealHoverArtwork(card);
      }, 0);
    });

    const concealSidebarArtwork = (item) => {
      item?.classList.remove("is-nav-art-revealed");
      const sidebar = item?.closest(".sidebar");
      if (sidebar && !sidebar.querySelector(".nav-item.is-nav-art-revealed")) sidebar.classList.remove("is-nav-art-active");
    };
    const revealSidebarArtwork = (item, pointerType = "") => {
      if (!item || window.innerWidth <= 680 || (pointerType && pointerType !== "mouse")) return;
      const sidebar = item.closest(".sidebar");
      if (!sidebar) return;
      $$(".nav-item.is-nav-art-revealed", sidebar).forEach((navItem) => navItem.classList.remove("is-nav-art-revealed"));
      item.classList.add("is-nav-art-revealed");
      sidebar.classList.add("is-nav-art-active");
    };
    document.addEventListener("pointerover", (event) => revealSidebarArtwork(event.target.closest(".sidebar .nav-item"), event.pointerType));
    document.addEventListener("pointerout", (event) => {
      const item = event.target.closest(".sidebar .nav-item");
      if (item && !item.contains(event.relatedTarget)) concealSidebarArtwork(item);
    });
    document.addEventListener("focusin", (event) => revealSidebarArtwork(event.target.closest(".sidebar .nav-item")));
    document.addEventListener("focusout", (event) => {
      const item = event.target.closest(".sidebar .nav-item");
      if (!item) return;
      window.setTimeout(() => {
        if (!item.contains(document.activeElement)) concealSidebarArtwork(item);
      }, 0);
    });

    $$('[data-open-settings]').forEach((button) => button.addEventListener("click", openSettings));
    $("#close-settings").addEventListener("click", closeSettings);
    $("#cancel-settings").addEventListener("click", closeSettings);
    $("#settings-form").addEventListener("submit", saveSettings);
    $("#reset-progress").addEventListener("click", resetProgress);

    $("#start-daily-plan").addEventListener("click", () => {
      const next = getDailyPlan().find((item) => !item.complete) || getDailyPlan()[0];
      navigate(next.skill, { focus: true });
    });
    $("#refresh-plan").addEventListener("click", () => {
      state.daily.nonce += 1;
      saveState();
      renderDashboard();
      $("#plan-updated-label").textContent = "刚刚重新安排";
      showToast("计划已按当前薄弱项重新安排。", 2800);
    });

    $("#speak-focus-phrase").addEventListener("click", () => speak("I am eager to learn and ready to take on new responsibilities.", 0.88));
    $("#speak-word").addEventListener("click", () => speak(vocabularyQueue[vocabularySessionIndex]?.word || "adapt", 0.82));
    $("#play-spelling-word").addEventListener("click", () => speak(vocabularyQueue[vocabularySessionIndex]?.word || "adapt", 0.78));
    $("#play-meaning-word").addEventListener("click", () => speak(vocabularyQueue[vocabularySessionIndex]?.word || "adapt", 0.82));
    $("#reveal-word").addEventListener("click", () => {
      $("#word-prompt").hidden = true;
      $("#word-answer").hidden = false;
      $("#reveal-word").hidden = true;
      $("#word-rating-grid").hidden = false;
      $('[data-word-rating="good"]').focus();
    });
    $("#toggle-favorite-word").addEventListener("click", () => {
      const item = vocabularyQueue[vocabularySessionIndex];
      if (item) toggleFavorite(item.id);
    });
    $("#check-spelling").addEventListener("click", checkSpellingAnswer);
    $("#show-spelling-hint").addEventListener("click", revealSpellingHint);
    $("#next-spelling").addEventListener("click", advanceVocabularyQuestion);
    $("#next-meaning").addEventListener("click", advanceVocabularyQuestion);
    $("#spelling-input").addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.isComposing) {
        event.preventDefault();
        checkSpellingAnswer();
      }
    });
    $$('[data-vocab-mode]').forEach((tab, tabIndex, tabs) => {
      tab.addEventListener("keydown", (event) => {
        const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        let nextIndex = tabIndex;
        if (event.key === "ArrowLeft") nextIndex = (tabIndex - 1 + tabs.length) % tabs.length;
        if (event.key === "ArrowRight") nextIndex = (tabIndex + 1) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        tabs[nextIndex].click();
        tabs[nextIndex].focus();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (currentView !== "vocabulary" || vocabularyMode !== "meaning" || vocabularyExerciseAnswered || event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
      if (event.target.closest("input, textarea, select, [contenteditable='true'], dialog")) return;
      const index = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 }[event.key.toLowerCase()];
      if (index === undefined) return;
      const option = $$('[data-meaning-item-id]')[index];
      if (option) {
        event.preventDefault();
        option.click();
      }
    });

    $("#next-grammar").addEventListener("click", nextGrammar);
    $("#translation-input").addEventListener("input", (event) => {
      $("#translation-word-count").textContent = `${tokenize(event.target.value).length} 个词`;
    });
    $("#check-translation").addEventListener("click", () => evaluateTranslation(false));
    $("#show-translation-answer").addEventListener("click", () => evaluateTranslation(true));

    $("#play-listening").addEventListener("click", playCurrentListening);
    $("#speak-listening-again").addEventListener("click", playCurrentListening);
    $("#next-listening").addEventListener("click", nextListening);
    $("#go-listening-question").addEventListener("click", () => applyViewPage("listening", 1, "forward", true));
    $("#review-listening-answer").addEventListener("click", () => applyViewPage("listening", 2, "forward", true));
    $("#speech-rate").addEventListener("input", (event) => {
      $("#speech-rate-label").textContent = `${Number(event.target.value).toFixed(2)}×`;
    });
    $("#voice-select").addEventListener("change", (event) => {
      state.profile.voiceName = event.target.value;
      saveState();
    });

    $("#play-speaking-model").addEventListener("click", () => speak(CONTENT.speaking[state.indices.speaking].target, 0.86));
    $("#record-speech").addEventListener("click", startOrStopRecognition);
    $("#analyze-speech").addEventListener("click", analyzeSpeech);
    $("#show-speaking-tip").addEventListener("click", () => showToast(CONTENT.speaking[state.indices.speaking].tip, 5000));

    $("#reading-selector").addEventListener("change", (event) => selectReading(Number(event.target.value), 0));
    $("#reading-prev-question").addEventListener("click", () => moveReadingQuestion(-1));
    $("#reading-next-question").addEventListener("click", () => moveReadingQuestion(1));
    $("#reading-next-passage").addEventListener("click", nextReading);

    $("#start-assessment").addEventListener("click", startAssessment);
    $$("[data-assessment-paper]").forEach((button) => button.addEventListener("click", () => {
      selectedAssessmentPaper = normalizeAssessmentPaper(button.dataset.assessmentPaper);
      renderAssessmentPaperPicker();
    }));
    $("#assessment-next-question").addEventListener("click", advanceAssessmentQuestion);
    $("#restart-assessment").addEventListener("click", restartAssessmentSession);

    $("#start-smart-review").addEventListener("click", startSmartReview);
    $("#clear-mistakes").addEventListener("click", clearAllMistakes);
    $("#vocabulary-search-input").addEventListener("input", (event) => {
      vocabularySearchQuery = event.target.value;
      renderWordbookResults();
    });
    $("#wordbook-mode").addEventListener("change", (event) => {
      wordbookMode = event.target.value === "favorites" ? "favorites" : "all";
      renderWordbookResults();
    });
    $("#mistake-skill-filter").addEventListener("change", (event) => {
      mistakeSkillFilter = SKILLS[event.target.value] ? event.target.value : "all";
      renderMistakeResults();
    });

    $("#export-progress").addEventListener("click", exportProgress);
    $("#import-progress").addEventListener("click", () => $("#import-progress-file").click());
    $("#import-progress-file").addEventListener("change", (event) => importProgressFile(event.target.files[0]));

    window.addEventListener("hashchange", () => navigate(window.location.hash.slice(1) || "dashboard"));
    window.addEventListener("pagehide", () => {
      if (recognitionActive || recognitionEngineRunning) stopRecognitionSession({ silent: true });
      stopAssessmentRecognition(true);
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => {
      if (state.profile.theme === "system") applyTheme();
    });
  }

  // One searchable entry point for every collection; stable IDs keep review history intact.
  const libraryState = { skill: "all", level: "all", query: "", page: 0 };
  let libraryReturnFocus = null;
  function libraryEntries() {
    return Object.keys(SKILLS).flatMap((skill) => practiceCollection(skill).map((item) => ({ skill, item })));
  }
  function renderLibrary() {
    const query = libraryState.query.trim().toLocaleLowerCase();
    const rows = libraryEntries().filter(({skill,item}) =>
      (libraryState.skill === "all" || skill === libraryState.skill)
      && (libraryState.level === "all" || (item.level || "unrated") === libraryState.level)
      && (!query || [item.id,item.word,item.definition,item.title,item.titleZh,item.topic,item.category,item.context,item.scenario,item.source,item.prompt].filter(Boolean).join(" ").toLocaleLowerCase().includes(query)));
    const size = window.matchMedia("(max-width: 680px)").matches ? 4 : 6;
    const pages = Math.max(1, Math.ceil(rows.length / size));
    libraryState.page = clamp(libraryState.page, 0, pages - 1);
    $("#library-count").textContent = `${rows.length} 项 · 第 ${libraryState.page + 1} / ${pages} 页`;
    $("#library-previous").disabled = libraryState.page === 0;
    $("#library-next").disabled = libraryState.page === pages - 1;
    $("#library-results").innerHTML = rows.slice(libraryState.page * size, (libraryState.page + 1) * size).map(({skill,item}) => {
      const title = item.word || item.titleZh || item.title || item.source || item.scenario || item.topic;
      const detail = item.definition || item.summary || item.prompt || item.context || item.question || "阅读原文、练习与解析";
      return `<button type="button" class="library-card" data-library-id="${escapeHtml(item.id)}" data-library-skill="${skill}"><span class="library-card-meta">${SKILLS[skill].name} · ${escapeHtml(item.level || "未分级")}</span><strong>${escapeHtml(title)}</strong><span class="library-card-detail">${escapeHtml(detail)}</span><span class="library-card-open">开始学习 <span aria-hidden="true">↗</span></span></button>`;
    }).join("") || '<div class="library-empty"><strong>没有找到匹配内容</strong><p>试试更短的中英文关键词，或重置筛选。</p><button type="button" class="button button-primary" id="library-reset">重置筛选</button></div>';
    $("#library-reset")?.addEventListener("click", () => {
      Object.assign(libraryState,{skill:"all",level:"all",query:"",page:0});
      $("#library-skill").value="all";$("#library-level").value="all";$("#library-search").value="";renderLibrary();$("#library-search").focus();
    });
  }
  function setupLibrary() {
    const dialog = $("#learning-library");
    const open = () => {
      if (dialog.open) return;
      libraryReturnFocus = document.activeElement;
      renderLibrary(); dialog.showModal(); $("#library-search").focus();
    };
    $("#open-library").addEventListener("click", open);
    $("#close-library").addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => libraryReturnFocus?.focus({preventScroll:true}));
    $("#library-search").addEventListener("input", event => {libraryState.query=event.target.value;libraryState.page=0;renderLibrary();});
    for (const key of ["skill","level"]) $("#library-"+key).addEventListener("change",event=>{libraryState[key]=event.target.value;libraryState.page=0;renderLibrary();});
    $("#library-previous").addEventListener("click",()=>{libraryState.page--;renderLibrary();});
    $("#library-next").addEventListener("click",()=>{libraryState.page++;renderLibrary();});
    $("#library-results").addEventListener("click",event=>{
      const button=event.target.closest("[data-library-id]");if(!button)return;
      if(recognitionActive || recognitionEngineRunning || assessmentRecognitionActive){showToast("请先停止录音，再选择新的练习。");return;}
      if (currentView === "translation" && !translationScored && $("#translation-input").value.trim()
        && !window.confirm("翻译还未提交，切换题目会清空这次输入。继续切换吗？")) return;
      dialog.close();
      openReviewTarget(button.dataset.librarySkill,button.dataset.libraryId,"review");
      applyViewPage(button.dataset.librarySkill,0,"forward",true);
    });
    document.addEventListener("keydown",event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){event.preventDefault();open();}});
    window.addEventListener("resize",()=>{if(dialog.open)renderLibrary();});
  }

  function syncReadingFocus() {
    const dialog=$("#reading-focus"); if(!dialog)return;
    const item=currentReading(), question=item?.questions?.[readingQuestionIndex];
    const needed=currentView==="reading" && viewPagination.get("reading")?.index===1
      && window.matchMedia("(max-width:680px)").matches && question
      && (question.options.join(" ").length>400 || Math.max(...question.options.map(s=>s.length))>175);
    if(!needed){if(dialog.open)dialog.close();return;}
    $("#reading-focus-question").textContent=question.question;
    $("#reading-focus-zh").textContent=question.questionZh;
    $("#reading-focus-progress").textContent=`阅读专注 · ${readingQuestionIndex+1} / ${item.questions.length}`;
    const stored=readingAnswers[readingQuestionIndex];
    $("#reading-focus-options").innerHTML=question.options.map((option,index)=>`<button type="button" class="focus-reading-option${stored && index===question.answer ? " is-correct" : ""}${stored && index===stored.selected && !stored.correct ? " is-wrong" : ""}" data-focus-answer="${index}" ${stored ? "disabled" : ""}><span>${String.fromCharCode(65+index)}</span><strong>${escapeHtml(option)}</strong></button>`).join("");
    $("#reading-focus-status").textContent=stored ? (stored.correct ? "回答正确" : "已标出正确答案，请对照解析") : "请独立选择一项";
    $("#reading-focus-next").disabled=!stored;
    $("#reading-focus-explain").hidden=!stored;
    $("#reading-focus-options").hidden=false;
    $("#reading-focus-explanation").hidden=true;
    $("#reading-focus-explain").textContent="查看解析";
    $("#reading-focus-explanation").textContent=`${question.explanation}\n\n${question.explanationZh}`;
    if(!dialog.open)dialog.showModal();
  }
  function setupReadingFocus() {
    const dialog=$("#reading-focus");
    const leave=()=>{applyViewPage("reading",0,"backward",true);};
    $("#reading-focus-close").addEventListener("click",leave);
    dialog.addEventListener("cancel",event=>{event.preventDefault();leave();});
    $("#reading-focus-options").addEventListener("click",event=>{const button=event.target.closest('[data-focus-answer]');if(button)answerReadingQuestion(Number(button.dataset.focusAnswer));});
    $("#reading-focus-next").addEventListener("click",()=>moveReadingQuestion(1));
    $("#reading-focus-explain").addEventListener("click",()=>{const explanation=$("#reading-focus-explanation");explanation.hidden=!explanation.hidden;$("#reading-focus-options").hidden=!explanation.hidden;$("#reading-focus-explain").textContent=explanation.hidden?"查看解析":"返回选项";});
    window.addEventListener("resize",syncReadingFocus);
  }

  function init() {
    ensureDailyState();
    applyTheme();
    setupViewPagination();
    setupAnimeDecorations();
    bindEvents();
    setupLibrary();
    setupReadingFocus();
    if ("speechSynthesis" in window) {
      loadVoices();
      window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
    }
    renderSharedState();
    renderCapabilities();
    navigate(window.location.hash.slice(1) || "dashboard", { animate: false });
    registerServiceWorker();
  }

  init();
})();
