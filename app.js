/* ===================================================================
   CARNET DE SAVOIRS — Cœur de l'application
   ===================================================================
   Single-file vanilla JS. Aucune dépendance externe. Aucun build step.
   Architecture : registry-based (chaque sujet = un fichier .js qui
   appelle CarnetDeSavoirs.register({...}))
   =================================================================== */

(function () {
  'use strict';

  const CDS = (window.CarnetDeSavoirs = {});

  // Version de l'application, bumpée automatiquement par Snapshot.bat
  // (cf. Update-Cache-Version.ps1, section APP_VERSION). Affichée en bas
  // de la sidebar pour signaler chaque mise à jour à l'utilisateur.
  const APP_VERSION = 'v1.11';

  // =================================================================
  // STATE
  // =================================================================

  const state = {
    sujets: {},                   // id -> sujet data
    sujetsOrder: [],              // ordre d'enregistrement
    parcours: {},                 // id -> parcours data (chemin thématique)
    parcoursOrder: [],            // ordre d'enregistrement des parcours
    user: null,                   // chargé depuis localStorage
    quizSession: null             // état temporaire du quiz en cours
  };

  // =================================================================
  // CONSTANTES
  // =================================================================

  const DOMAIN_KEY = (d) => d.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '');

  const DOMAIN_VAR = (d) => `--d-${DOMAIN_KEY(d)}`;

  function domainColor(d) {
    const cssVar = DOMAIN_VAR(d);
    const v = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    if (v) return v;
    // Pas de variable CSS définie pour ce domaine : on génère une couleur
    // stable (reproductible) à partir du nom plutôt que retomber sur le gris.
    return autoDomainColor(d);
  }

  // Hash simple FNV-like → teinte HSL stable. Saturation et luminosité
  // choisies pour rester lisibles sur fond sombre et cohérentes avec la
  // palette existante. On peut toujours surcharger en définissant
  // une variable --d-{slug} dans styles.css pour une couleur précise.
  function autoDomainColor(name) {
    let h = 2166136261;
    const s = String(name);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    const hue = h % 360;
    return `hsl(${hue}, 62%, 65%)`;
  }

  const ICONS = {
    library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="6" y1="8" x2="6" y2="16"/><line x1="18" y1="8" x2="18" y2="16"/><line x1="8" y1="18" x2="16" y2="18"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><polygon points="12 2 15.1 8.7 22 9.7 17 14.6 18.2 21.5 12 18.2 5.8 21.5 7 14.6 2 9.7 8.9 8.7 12 2"/></svg>',
    starOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><polygon points="12 2 15.1 8.7 22 9.7 17 14.6 18.2 21.5 12 18.2 5.8 21.5 7 14.6 2 9.7 8.9 8.7 12 2"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    parcours: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 9 6 12 12 15 18 21 18"/><circle cx="3" cy="6" r="1.5" fill="currentColor"/><circle cx="9" cy="6" r="1.5" fill="currentColor"/><circle cx="15" cy="18" r="1.5" fill="currentColor"/><circle cx="21" cy="18" r="1.5" fill="currentColor"/></svg>',
    timeline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="18" cy="12" r="2" fill="currentColor"/></svg>',
    vocab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="13" y2="13"/></svg>',
    champion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l3 5 6-7 6 7 3-5v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/><line x1="4" y1="20" x2="20" y2="20"/></svg>'
  };

  // =================================================================
  // STORAGE (localStorage)
  // =================================================================

  const STORAGE_KEY = 'carnetdesavoirs_v1';

  function loadUserState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultUserState();
      const parsed = JSON.parse(raw);
      // Migration AVANT le merge avec les defaults : sinon les champs
      // injectés par defaultUserState() (quizCounters, dailyQuizDates…)
      // masquent leur absence et les migrations ne s'exécutent jamais.
      if (parsed && typeof parsed === 'object') migrateUserState(parsed);
      // Assainissement champ par champ (types attendus = defaultUserState) :
      // un localStorage altéré ou un vieil import ne peut plus casser le rendu.
      return sanitizeUserState(parsed);
    } catch (e) {
      console.warn('Erreur lecture localStorage', e);
      return defaultUserState();
    }
  }

  // Assainit un état utilisateur venu de l'extérieur (localStorage, import
  // JSON) : chaque champ n'est conservé que s'il a le type attendu par
  // defaultUserState() (objet vs tableau vs chaîne vs nombre vs booléen) ;
  // sinon il retombe sur la valeur par défaut. Les objets « plats » de
  // réglages (filters, quizCounters, quizStreak, goals, champion.*) sont
  // fusionnés clé par clé avec la même règle. Retourne toujours un état
  // complet et utilisable — même pour `[]`, `null` ou `{ progress: null }`.
  function sanitizeUserState(input) {
    const def = defaultUserState();
    if (!input || typeof input !== 'object' || Array.isArray(input)) return def;
    const kind = (v) => Array.isArray(v) ? 'array' : (v === null ? 'null' : typeof v);
    const mergeFlat = (d, src) => {
      if (!src || typeof src !== 'object' || Array.isArray(src)) return d;
      Object.keys(d).forEach(k => {
        if (!(k in src)) return;
        // Une valeur par défaut `null` signifie « scalaire optionnel »
        // (filters.domain, filters.tag…) : on accepte chaîne / nombre / booléen / null.
        if (d[k] === null) { if (src[k] === null || ['string', 'number', 'boolean'].indexOf(typeof src[k]) >= 0) d[k] = src[k]; return; }
        if (kind(src[k]) === kind(d[k])) d[k] = src[k];
      });
      return d;
    };
    const out = {};
    Object.keys(def).forEach(k => {
      const dv = def[k], sv = input[k];
      if (!(k in input)) { out[k] = dv; return; }
      // Champs nullables
      if (k === 'activeParcours') { out[k] = (sv && typeof sv === 'object' && !Array.isArray(sv)) ? sv : null; return; }
      if (kind(sv) !== kind(dv)) { out[k] = dv; return; }
      if (['filters', 'quizCounters', 'quizStreak', 'goals'].indexOf(k) >= 0) { out[k] = mergeFlat(dv, sv); return; }
      if (k === 'champion') {
        out[k] = {
          quatreSuite: (sv.quatreSuite && typeof sv.quatreSuite === 'object' && !Array.isArray(sv.quatreSuite)) ? sv.quatreSuite : {},
          finale:      (sv.finale && typeof sv.finale === 'object' && !Array.isArray(sv.finale)) ? sv.finale : {},
          neufPoints:  mergeFlat(dv.neufPoints, sv.neufPoints),
          faceAFace:   (sv.faceAFace && typeof sv.faceAFace === 'object' && !Array.isArray(sv.faceAFace)) ? sv.faceAFace : {}
        };
        return;
      }
      out[k] = sv;
    });
    // Tableaux de scalaires : on filtre les entrées manifestement corrompues
    out.favorites = out.favorites.filter(x => typeof x === 'string');
    out.achievements = out.achievements.filter(x => typeof x === 'string');
    out.dailyQuizDates = out.dailyQuizDates.filter(x => typeof x === 'string');
    out.vocabReviewed = out.vocabReviewed.filter(x => typeof x === 'string');
    out.quizLog = out.quizLog.filter(x => x && typeof x === 'object');
    // Scores de quiz : entrées cohérentes uniquement (total > 0, best numérique)
    Object.keys(out.quizScores).forEach(k => {
      const q = out.quizScores[k];
      if (!q || typeof q !== 'object' || !(q.total > 0) || typeof q.best !== 'number') delete out.quizScores[k];
      else if (!Array.isArray(q.attempts)) q.attempts = [];
    });
    // Progression : objets uniquement
    Object.keys(out.progress).forEach(k => { const v = out.progress[k]; if (!v || typeof v !== 'object' || Array.isArray(v)) delete out.progress[k]; });
    // Notes : uniquement des chaînes non vides
    Object.keys(out.notes).forEach(k => { if (typeof out.notes[k] !== 'string' || !out.notes[k].trim()) delete out.notes[k]; });
    // Bornes des objectifs
    const freshGoals = defaultUserState().goals;   // (def.goals a pu être muté par mergeFlat)
    if (!(out.goals.timeMs > 0)) out.goals.timeMs = freshGoals.timeMs;
    if (!(out.goals.intensity > 0)) out.goals.intensity = freshGoals.intensity;
    return out;
  }

  // Migrations one-shot pour les comptes existants. Idempotent : peut
  // être rejoué sans dommage.
  function migrateUserState(u) {
    // 1. Initialise quizCounters depuis quizLog si jamais quelqu'un avait
    //    déjà joué avant l'introduction des compteurs cumulatifs.
    if (!u.quizCounters || typeof u.quizCounters.totalAnswered !== 'number') {
      u.quizCounters = { totalAnswered: 0, totalCorrect: 0, fastCorrect: 0,
                         revisionCorrect: 0, defiBestStreakInRow: 0 };
      const log = Array.isArray(u.quizLog) ? u.quizLog : [];
      let defiCur = 0;
      log.forEach(e => {
        u.quizCounters.totalAnswered++;
        if (e.correct) u.quizCounters.totalCorrect++;
        if (e.correct && e.durationMs > 0 && e.durationMs < 5000) u.quizCounters.fastCorrect++;
        if (e.correct && e.mode === 'revision') u.quizCounters.revisionCorrect++;
        if (e.mode === 'defi') {
          if (e.correct) {
            defiCur++;
            if (defiCur > u.quizCounters.defiBestStreakInRow) u.quizCounters.defiBestStreakInRow = defiCur;
          } else defiCur = 0;
        }
      });
    }
    // 2. Initialise dailyQuizDates depuis le log + dailyQuiz courant si absent
    if (!Array.isArray(u.dailyQuizDates)) {
      const set = new Set();
      (u.quizLog || []).forEach(e => {
        if (e.mode === 'quotidien' && e.date) set.add(e.date.slice(0, 10));
      });
      if (u.dailyQuiz && u.dailyQuiz.completed && u.dailyQuiz.date) set.add(u.dailyQuiz.date);
      u.dailyQuizDates = Array.from(set);
    }
    // 3. Initialise les structures du Mode Champion si absentes (comptes
    //    pré-existants n'ayant jamais touché le champion).
    if (!u.champion || typeof u.champion !== 'object') u.champion = {};
    if (!u.champion.quatreSuite || typeof u.champion.quatreSuite !== 'object') u.champion.quatreSuite = {};
    if (!u.champion.finale || typeof u.champion.finale !== 'object') u.champion.finale = {};
    if (!u.champion.neufPoints || typeof u.champion.neufPoints !== 'object') {
      u.champion.neufPoints = { wins: 0, played: 0, bestStreak: 0 };
    }
    if (!u.champion.faceAFace || typeof u.champion.faceAFace !== 'object') u.champion.faceAFace = {};
    // 4. Initialise passageHighlights si absent
    if (!u.passageHighlights || typeof u.passageHighlights !== 'object') u.passageHighlights = {};
  }

  function defaultUserState() {
    return {
      progress: {},      // sujetId -> { lastTab, courseProgress (0-100), visited: bool, lastVisit: iso }
      quizScores: {},    // sujetId -> { best: int, total: int, attempts: [{ score, date }] }
      // Suivi par-question : pour chaque sujet, pour chaque index de question,
      // historique succinct. Permet le mode Révision et les stats fines.
      quizAnswers: {},   // sujetId -> qIdx -> { ok, ko, lastCorrect, lastAttempt }
      // Log chronologique de toutes les réponses (capé) pour stats récentes.
      quizLog: [],       // [{ date, sujetId, qIdx, type, correct, durationMs, mode }] (max 500)
      // Compteurs cumulatifs, jamais capés : servent aux achievements de
      // volume (quiz-cent, quiz-millier, etc.) sans dépendre du quizLog
      // tronqué à 500 entrées.
      quizCounters: {
        totalAnswered: 0,       // toutes les réponses, justes ou non
        totalCorrect: 0,        // bonnes réponses cumulées
        fastCorrect: 0,         // bonnes réponses en < 5s
        revisionCorrect: 0,     // bonnes réponses en mode Révision
        defiBestStreakInRow: 0  // record de bonnes consécutives en mode Défi
      },
      // Dates distinctes où le quiz quotidien a été terminé (YYYY-MM-DD).
      dailyQuizDates: [],
      // Streak de bonnes réponses consécutives toutes sources confondues.
      quizStreak: { current: 0, best: 0 },
      // Quiz quotidien : date du dernier complété, score, total.
      dailyQuiz: {},     // { date: 'YYYY-MM-DD', score, total, completed: bool }
      favorites: [],     // sujetIds
      notes: {},         // sujetId -> markdown text
      filters: { domain: null, search: '', state: null, tag: null, difficulty: null, duration: null, sort: 'alpha' },
      highlights: {},    // sujetId -> array of block indices marqués comme importants
      passageHighlights: {}, // sujetId -> [{ blockIdx, text, ts }] passages surlignés dans un bloc cours
      champion: {
        quatreSuite: {},  // sujetId -> { wins, lastSuccessTs }
        finale: {},       // domain -> { bestScore }
        neufPoints: { wins: 0, played: 0, bestStreak: 0 },
        faceAFace: {}     // sujetId -> { bestScore }
      },
      globalNotes: '',   // cahier libre transverse
      achievements: [],  // ids d'achievements débloqués
      goals: { timeMs: 30 * 60 * 1000, intensity: 10 }, // objectifs quotidiens
      spacedRep: {},     // sujetId -> { nextReview, interval, easeFactor, repetitions, lastReview }
      readingMode: false,// vrai = sidebar masquée + colonne élargie sur l'onglet Cours
      dailyActivity: {}, // 'YYYY-MM-DD' -> { visits, blocs, quiz } pour la heatmap
      activeParcours: null, // { slug, etape } | null — parcours thématique en cours
      vocabReviewed: [],  // termes de vocabulaire retournés au moins une fois en flashcards (succès Cartographe)
      lastView: '/'
    };
  }

  function saveUserState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user));
    } catch (e) {
      console.warn('Erreur écriture localStorage', e);
    }
  }

  // =================================================================
  // ENREGISTREMENT DES SUJETS
  // =================================================================

  CDS.register = function (sujetData) {
    if (!sujetData || !sujetData.meta || !sujetData.meta.id) {
      console.error('[CarnetDeSavoirs] Sujet invalide : meta.id manquant', sujetData);
      return;
    }
    const id = sujetData.meta.id;

    // Détection de doublon (sinon le 2e écrasait silencieusement le 1er)
    if (state.sujets[id]) {
      console.warn(
        `[CarnetDeSavoirs] Doublon d'id "${id}" : le sujet précédent sera écrasé. ` +
        `Renomme l'un des deux fichiers et son meta.id.`
      );
    }

    // Validation de schéma — n'empêche pas l'enregistrement, mais
    // signale les problèmes courants pour aider à debugger un sujet.
    const warnings = validateSujet(sujetData);
    if (warnings.length > 0) {
      console.group(`[CarnetDeSavoirs] Sujet "${id}" — ${warnings.length} avertissement(s) de schéma`);
      warnings.forEach(w => console.warn(w));
      console.groupEnd();
    }

    state.sujets[id] = sujetData;
    if (!state.sujetsOrder.includes(id)) {
      state.sujetsOrder.push(id);
    }
  };

  function validateSujet(s) {
    const w = [];
    const meta = s.meta || {};

    // ---- meta ----
    if (typeof meta.titre !== 'string' || !meta.titre.trim()) w.push('meta.titre vide ou absent');
    if (meta.difficulte != null && ![1, 2, 3].includes(meta.difficulte)) {
      w.push(`meta.difficulte="${meta.difficulte}" (attendu : 1, 2 ou 3)`);
    }
    if (meta.duree_estimee_min != null && (typeof meta.duree_estimee_min !== 'number' || meta.duree_estimee_min <= 0)) {
      w.push(`meta.duree_estimee_min invalide : ${meta.duree_estimee_min}`);
    }
    ['domaines', 'tags', 'prerequis', 'lie_a'].forEach(k => {
      if (meta[k] != null && !Array.isArray(meta[k])) w.push(`meta.${k} doit être un tableau`);
    });

    // ---- cours ----
    const VALID_BLOCK_TYPES = ['texte', 'encadre', 'widget', 'html_libre', 'mini-quiz'];
    const VALID_WIDGETS = Object.keys(WIDGETS);
    if (s.cours != null) {
      if (!Array.isArray(s.cours)) {
        w.push('cours doit être un tableau');
      } else {
        s.cours.forEach((b, i) => {
          if (!b || !b.type) { w.push(`cours[${i}] sans "type"`); return; }
          if (!VALID_BLOCK_TYPES.includes(b.type)) {
            w.push(`cours[${i}].type="${b.type}" inconnu (attendu : ${VALID_BLOCK_TYPES.join(', ')})`);
          }
          if (b.type === 'widget') {
            if (!b.composant) w.push(`cours[${i}] (widget) sans "composant"`);
            else if (!VALID_WIDGETS.includes(b.composant)) {
              w.push(`cours[${i}].composant="${b.composant}" inconnu (attendu : ${VALID_WIDGETS.join(', ')})`);
            }
          }
        });
      }
    }

    // ---- quiz ----
    if (s.quiz != null) {
      if (!Array.isArray(s.quiz)) {
        w.push('quiz doit être un tableau');
      } else {
        s.quiz.forEach((q, i) => {
          if (!q || typeof q.q !== 'string' || !q.q.trim()) w.push(`quiz[${i}].q vide ou absent`);
          const type = (q && q.type) || 'qcm';
          if (type === 'qcm') {
            if (!Array.isArray(q.options) || q.options.length < 2) {
              w.push(`quiz[${i}].options doit être un tableau d'au moins 2 propositions`);
            } else if (!Number.isInteger(q.correcte) || q.correcte < 0 || q.correcte >= q.options.length) {
              w.push(`quiz[${i}].correcte=${q.correcte} hors plage [0..${q.options.length - 1}]`);
            }
          } else if (type === 'vrai-faux') {
            if (typeof q.reponse !== 'boolean') w.push(`quiz[${i}].reponse (vrai-faux) doit être true ou false`);
          } else if (type === 'ordre-chrono') {
            if (!Array.isArray(q.items) || q.items.length < 2) {
              w.push(`quiz[${i}].items (ordre-chrono) doit avoir au moins 2 éléments`);
            }
          } else if (type === 'texte-a-trou') {
            if (typeof q.texte !== 'string' || !/\{[^}]+\}/.test(q.texte)) {
              w.push(`quiz[${i}].texte (texte-a-trou) doit contenir au moins un trou {motif}`);
            }
          } else if (type === 'associer') {
            if (!Array.isArray(q.paires) || q.paires.length < 2) {
              w.push(`quiz[${i}].paires (associer) doit avoir au moins 2 paires`);
            }
          } else {
            w.push(`quiz[${i}].type="${type}" inconnu (attendu : qcm, vrai-faux, ordre-chrono, texte-a-trou, associer)`);
          }
        });
      }
    }

    // ---- carte mentale ----
    if (s.carte_mentale) {
      const cm = s.carte_mentale;
      if (!Array.isArray(cm.noeuds)) {
        w.push('carte_mentale.noeuds doit être un tableau');
      } else {
        const ids = new Set(cm.noeuds.map(n => n && n.id).filter(Boolean));
        cm.noeuds.forEach((n, i) => {
          if (!n || !n.id) w.push(`carte_mentale.noeuds[${i}] sans id`);
          if (!n || !n.label) w.push(`carte_mentale.noeuds[${i}] sans label`);
          // Champ parent optionnel : doit pointer vers un id existant
          if (n && n.parent && !ids.has(n.parent)) {
            w.push(`carte_mentale.noeuds[${i}].parent="${n.parent}" inconnu — sera rattaché au central`);
          }
          // Détection de cycle de référence trivial (parent = soi-même)
          if (n && n.parent && n.parent === n.id) {
            w.push(`carte_mentale.noeuds[${i}].parent="${n.parent}" — un nœud ne peut pas être son propre parent`);
          }
        });
        if (cm.central && !ids.has(cm.central)) {
          w.push(`carte_mentale.central="${cm.central}" ne correspond à aucun noeud`);
        }
        if (Array.isArray(cm.liens)) {
          cm.liens.forEach((l, i) => {
            if (!l || !ids.has(l.de)) w.push(`carte_mentale.liens[${i}].de="${l && l.de}" inconnu`);
            if (!l || !ids.has(l.vers)) w.push(`carte_mentale.liens[${i}].vers="${l && l.vers}" inconnu`);
          });
        }
      }
    }

    // ---- vocabulaire (optionnel) ----
    if (s.vocabulaire != null) {
      if (!Array.isArray(s.vocabulaire)) {
        w.push('vocabulaire doit être un tableau');
      } else {
        s.vocabulaire.forEach((v, i) => {
          if (!v || typeof v !== 'object') {
            w.push(`vocabulaire[${i}] doit être un objet { terme, definition }`);
            return;
          }
          if (typeof v.terme !== 'string' || !v.terme.trim()) {
            w.push(`vocabulaire[${i}].terme vide ou absent`);
          }
          if (typeof v.definition !== 'string' || !v.definition.trim()) {
            w.push(`vocabulaire[${i}].definition vide ou absente`);
          }
        });
      }
    }

    return w;
  }

  // =================================================================
  // ROUTAGE (hash-based)
  // =================================================================

  // decodeURIComponent lève URIError sur une séquence % invalide (ex.
  // #/sujet/%E0) → page blanche définitive. On retombe sur la chaîne brute.
  function safeDecode(str) {
    try { return decodeURIComponent(str); } catch (e) { return str; }
  }

  function parseHash() {
    const h = (window.location.hash || '#/').replace(/^#/, '') || '/';
    const parts = h.split('/').filter(Boolean);
    if (parts.length === 0) return { view: 'bibliotheque' };
    if (parts[0] === 'sujet' && parts[1]) {
      const route = { view: 'sujet', id: safeDecode(parts[1]), tab: parts[2] || 'resume' };
      // Cible de bloc optionnelle : #/sujet/{id}/cours/bloc-{N}
      if (parts[3] && parts[3].indexOf('bloc-') === 0) {
        const idx = parseInt(parts[3].slice(5), 10);
        if (Number.isInteger(idx) && idx >= 0) route.blockTarget = idx;
      }
      return route;
    }
    if (parts[0] === 'carte') return { view: 'carte' };
    if (parts[0] === 'profil') return { view: 'profil' };
    // 'glossaire' a été remplacé par 'vocabulaire' — on redirige les anciens
    // bookmarks/historiques pour ne pas casser les vieux liens.
    if (parts[0] === 'glossaire') return { view: 'vocabulaire' };
    if (parts[0] === 'quiz-mixte') return { view: 'quiz-mixte' };
    if (parts[0] === 'notes') return { view: 'notes' };
    if (parts[0] === 'parcours') {
      if (parts[1]) return { view: 'parcours-detail', id: safeDecode(parts[1]) };
      return { view: 'parcours-liste' };
    }
    if (parts[0] === 'timeline') return { view: 'timeline' };
    if (parts[0] === 'vocabulaire') return { view: 'vocabulaire' };
    if (parts[0] === 'champion') {
      // #/champion              -> hub
      // #/champion/{manche}     -> manche en cours (sélection ou jeu)
      // {manche} : '4-a-la-suite' | 'finale' | '9-points' | 'face-a-face'
      return { view: 'champion', manche: parts[1] || null };
    }
    return { view: 'bibliotheque' };
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  // =================================================================
  // HELPERS DOM
  // =================================================================

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === 'class') node.className = v;
        else if (k === 'style' && typeof v === 'object') {
          // Gère les CSS custom properties (--*) via setProperty,
          // que Object.assign(node.style, ...) n'applique pas correctement.
          for (const [sk, sv] of Object.entries(v)) {
            if (sv == null || sv === false) continue;
            if (sk.startsWith('--')) node.style.setProperty(sk, String(sv));
            else node.style[sk] = sv;
          }
        }
        else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'html') node.innerHTML = v;
        else node.setAttribute(k, v === true ? '' : v);
      }
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  // =================================================================
  // MARKDOWN LITE
  // =================================================================
  // Supporte :  **gras**, *italique*, `code`, [terme]{accent},
  //             paragraphes (lignes vides), retours à la ligne simples
  // =================================================================

  function md(text) {
    if (!text) return '';
    // Échappe HTML d'abord
    let s = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Inline transformations
    // [[slug]] -> lien vers une fiche (si le sujet existe) ou marqueur grisé.
    // [[slug|alias]] -> idem, mais le texte affiché est l'alias plutôt que
    // le titre de la fiche cible. Permet d'écrire des phrases fluides du
    // type "voir [[epopee|épiques]]".
    s = s.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, slug, alias) => {
      const target = state.sujets[slug];
      // Échappe l'alias contre l'injection HTML (le slug est déjà restreint
      // au pattern [a-z0-9-]+ donc safe par construction).
      const escAlias = alias
        ? alias.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        : null;
      if (target && target.meta) {
        const baseLabel = String(target.meta.titre || slug).replace(/<[^>]+>/g, '');
        const label = escAlias || baseLabel;
        return `<a class="sujet-link" href="#/sujet/${encodeURIComponent(slug)}">${label}</a>`;
      }
      return `<span class="sujet-link sujet-link-broken" title="Sujet « ${slug} » non encore disponible dans le carnet">${escAlias || slug}</span>`;
    });
    s = s.replace(/\[([^\]]+)\]\{accent\}/g, '<em class="term">$1</em>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Sans lookbehind (non supporté par Safari/iOS < 16.4) : on capture le
    // caractère précédent et on le réinjecte.
    s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Parsing ligne par ligne pour gérer les titres (# h2) et sous-titres
    // (## h3) en plus des paragraphes séparés par lignes vides. Les titres
    // brisent la séquence de paragraphe et constituent leur propre bloc.
    // Une ligne `- foo` initie une puce ; les puces consécutives sont
    // regroupées dans un même <ul>.
    const lines = s.split('\n');
    const blocks = [];
    let paraBuf = [];
    let listBuf = [];
    function flushPara() {
      if (paraBuf.length) {
        const para = paraBuf.join('<br>').trim();
        if (para) blocks.push('<p>' + para + '</p>');
        paraBuf = [];
      }
    }
    function flushList() {
      if (listBuf.length) {
        blocks.push('<ul class="md-list">' +
          listBuf.map(item => '<li>' + item + '</li>').join('') + '</ul>');
        listBuf = [];
      }
    }
    function flushAll() { flushPara(); flushList(); }
    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      const t = ln.trim();
      const mH2 = /^##\s+(.+)$/.exec(t);
      const mH1 = /^#\s+(.+)$/.exec(t);
      const mLi = /^[-*]\s+(.+)$/.exec(t);
      if (mH2) {
        flushAll();
        blocks.push('<h3 class="md-h3">' + mH2[1] + '</h3>');
      } else if (mH1) {
        flushAll();
        blocks.push('<h2 class="md-h2">' + mH1[1] + '</h2>');
      } else if (mLi) {
        flushPara();
        listBuf.push(mLi[1]);
      } else if (t === '') {
        flushAll();
      } else {
        flushList();
        paraBuf.push(ln);
      }
    }
    flushAll();
    return blocks.join('');
  }

  // =================================================================
  // FORMATAGE NUMÉRIQUE FR (partagé par les widgets)
  // =================================================================
  // - milliers séparés par une espace fine insécable, décimale en virgule
  // - `decimals` : nombre max de décimales (par défaut : celles de la valeur,
  //   plafonné à 6, et on arrondit pour éliminer le bruit flottant 0,3999…)
  function formatNumberFr(v, decimals) {
    if (typeof v !== 'number' || !isFinite(v)) return String(v);
    const maxDec = (decimals != null) ? decimals : 6;
    const rounded = Math.round(v * Math.pow(10, maxDec)) / Math.pow(10, maxDec);
    try {
      return rounded.toLocaleString('fr-FR', { maximumFractionDigits: maxDec });
    } catch (e) {
      return String(rounded).replace('.', ',');
    }
  }
  // Nombre de décimales d'un pas de slider (0.05 → 2, 0.5 → 1, 1 → 0)
  function decimalsOfStep(step) {
    const str = String(step);
    if (str.indexOf('e-') >= 0) return parseInt(str.split('e-')[1], 10) || 0;
    const frac = str.split('.')[1];
    return frac ? frac.length : 0;
  }

  // =================================================================
  // RENDERING — SHELL
  // =================================================================

  function setAccent(domain) {
    const root = document.documentElement;
    if (domain) {
      const color = domainColor(domain);
      root.style.setProperty('--accent', color);
      root.style.setProperty('--accent-soft', `color-mix(in oklab, ${color} 14%, transparent)`);
    } else {
      root.style.removeProperty('--accent');
      root.style.removeProperty('--accent-soft');
    }
  }

  function renderShell(activeView) {
    const sidebar = el('aside', { class: 'sidebar' },
      el('div', { class: 'brand', onclick: () => navigate('/') },
        el('span', { class: 'brand-mark' }, 'Mon atelier'),
        el('span', { class: 'brand-name', html: 'Carnet de <em>Savoirs</em>' })
      ),
      el('nav', { class: 'nav' },
        // Bouton recherche en tête : ouvre la palette Ctrl+K
        el('button', {
          class: 'nav-item nav-search-btn',
          title: 'Rechercher dans tout le carnet (Ctrl+K)',
          onclick: openSearchPalette
        },
          el('span', { class: 'nav-icon', html: ICONS.search }),
          el('span', null, 'Rechercher'),
          el('span', { class: 'nav-kbd' }, 'Ctrl+K')
        ),
        navLink('bibliotheque', activeView, 'Bibliothèque', ICONS.library, '/'),
        navLink('carte', activeView, 'Carte globale', ICONS.map, '/carte'),
        navLink('timeline', activeView, 'Timeline', ICONS.timeline, '/timeline'),
        navLink('parcours-liste', activeView, 'Parcours', ICONS.parcours, '/parcours'),
        navLink('vocabulaire', activeView, 'Vocabulaire', ICONS.vocab, '/vocabulaire'),
        navLink('quiz-mixte', activeView, 'Quiz mixte', ICONS.quiz, '/quiz-mixte'),
        navLink('champion', activeView, 'Champion', ICONS.champion, '/champion'),
        navLink('notes', activeView, 'Mes notes', ICONS.notes, '/notes'),
        navLink('profil', activeView, 'Mon profil', ICONS.profile, '/profil')
      ),
      el('div', { class: 'sidebar-footer', html: APP_VERSION + ' — construit avec ✦ et Claude' })
    );

    const main = el('main', { class: 'main', id: 'main-content' });

    const root = document.getElementById('app');
    clear(root);
    root.appendChild(sidebar);
    root.appendChild(main);

    return main;
  }

  function navLink(viewId, activeView, label, iconHtml, path) {
    const isActive = (viewId === 'sujet' && activeView === 'sujet')
      || (viewId === 'parcours-liste' && (activeView === 'parcours-liste' || activeView === 'parcours-detail'))
      || viewId === activeView;
    return el('button', {
      class: 'nav-item' + (isActive ? ' active' : ''),
      onclick: () => navigate(path)
    },
      el('span', { class: 'nav-icon', html: iconHtml }),
      el('span', null, label)
    );
  }

  // =================================================================
  // VIEW: BIBLIOTHÈQUE
  // =================================================================

  // ---- Découverte du jour : pioche pondérée par "jamais ouvert" + "cité
  //      par des sujets que tu as ouverts". Excluding le pick précédent
  //      pour que "Une autre" donne effectivement quelque chose de nouveau.
  let _lastDiscoveryPick = null;
  function pickDiscoverySujet() {
    if (state.sujetsOrder.length < 5) return null;
    const opened = new Set();
    state.sujetsOrder.forEach(id => {
      const p = state.user.progress[id];
      if (p && p.visited) opened.add(id);
    });
    const scores = [];
    state.sujetsOrder.forEach(id => {
      const s = state.sujets[id];
      if (!s) return;
      if (id === _lastDiscoveryPick) return; // évite de re-piocher le même
      let score = 1;
      if (!opened.has(id)) score += 10;
      opened.forEach(openedId => {
        const o = state.sujets[openedId];
        if (!o) return;
        if (Array.isArray(o.meta.lie_a) && o.meta.lie_a.includes(id)) score += 3;
      });
      // Jitter pour briser les égalités sans en faire un tirage trop chaotique
      score += Math.random() * 1.5;
      scores.push({ id, score });
    });
    if (scores.length === 0) return null;
    scores.sort((a, b) => b.score - a.score);
    const top = scores.slice(0, Math.min(5, scores.length));
    const picked = top[Math.floor(Math.random() * top.length)];
    _lastDiscoveryPick = picked.id;
    return picked.id;
  }

  function renderDiscoveryWidget(main, sujets) {
    if (sujets.length < 5) return;
    const pickedId = pickDiscoverySujet();
    if (!pickedId) return;
    const s = state.sujets[pickedId];
    if (!s) return;
    const dom = (s.meta.domaines || ['Autre'])[0];
    const c = domainColor(dom);
    const opened = !!(state.user.progress[pickedId] && state.user.progress[pickedId].visited);
    const wrap = el('div', { class: 'discovery-widget', style: { '--card-accent': c } });
    wrap.appendChild(el('span', { class: 'discovery-eyebrow' },
      (opened ? 'Replonger dans · ' : 'Sujet à découvrir · ') + dom));
    wrap.appendChild(el('a', {
      class: 'discovery-title',
      href: '#/sujet/' + encodeURIComponent(pickedId),
      html: htmlEscapeButKeepEm(s.meta.titre)
    }));
    if (s.resume) {
      wrap.appendChild(el('p', {
        class: 'discovery-resume',
        html: md(s.resume).replace(/^<p>|<\/p>$/g, '')
      }));
    }
    const btnRow = el('div', { class: 'discovery-btn-row' });
    btnRow.appendChild(el('a', {
      class: 'btn primary',
      href: '#/sujet/' + encodeURIComponent(pickedId)
    }, 'Ouvrir cette fiche →'));
    btnRow.appendChild(el('button', {
      class: 'btn-ghost',
      title: 'Pioche un autre sujet',
      onclick: () => { rerender(); }
    }, 'Surprends-moi encore'));
    wrap.appendChild(btnRow);
    main.appendChild(wrap);
  }

  function renderBibliotheque(main) {
    const sujets = state.sujetsOrder.map(id => state.sujets[id]);

    // Domaines uniques pour les filtres
    const allDomains = [...new Set(sujets.flatMap(s => s.meta.domaines || []))].sort();

    // Filtres actuels
    const f = state.user.filters;

    main.appendChild(el('span', { class: 'eyebrow' }, 'Bibliothèque'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Tous les <em>sujets</em>' }));
    // Sous-titre dynamique : remplacé par compteur quand des filtres sont actifs.
    const subtitle = el('p', { class: 'page-subtitle' });
    main.appendChild(subtitle);
    function setSubtitle(visibleCount) {
      if (sujets.length === 0) {
        subtitle.textContent = 'Aucun sujet pour l\'instant. Discutez avec Claude pour créer votre premier !';
        return;
      }
      if (visibleCount != null && visibleCount !== sujets.length) {
        subtitle.textContent = `${visibleCount} sujet${visibleCount > 1 ? 's' : ''} sur ${sujets.length} (filtrés) — sélectionnez-en un pour reprendre l'apprentissage.`;
      } else {
        subtitle.textContent = `${sujets.length} sujet${sujets.length > 1 ? 's' : ''} dans votre carnet — sélectionnez-en un pour reprendre l'apprentissage.`;
      }
    }
    setSubtitle(null);

    // ---- Banner d'absence ----
    // Si la dernière activité date de 3 jours ou plus, on propose
    // explicitement de reprendre le dernier sujet visité.
    const daysSince = daysSinceLastActivity();
    if (daysSince !== null && daysSince >= 3 && sujets.length > 0) {
      // Trouve le dernier sujet visité (lastVisit le plus récent)
      const recents = sujets
        .filter(s => state.user.progress[s.meta.id] && state.user.progress[s.meta.id].lastVisit)
        .sort((a, b) => new Date(state.user.progress[b.meta.id].lastVisit) - new Date(state.user.progress[a.meta.id].lastVisit));
      const last = recents[0];
      const message = daysSince >= 7
        ? `Ça fait ${daysSince} jours sans apprentissage.`
        : `Ça fait ${daysSince} jours, ne lâche pas le rythme.`;
      const banner = el('div', { class: 'inactivity-banner' },
        el('span', { class: 'inactivity-banner-msg' }, message)
      );
      if (last) {
        const titre = String(last.meta.titre).replace(/<[^>]+>/g, '');
        banner.appendChild(el('a', {
          class: 'btn',
          href: '#/sujet/' + encodeURIComponent(last.meta.id)
        }, 'Reprendre ' + titre + ' →'));
      }
      main.appendChild(banner);
    }

    // ---- Découverte du jour ----
    // N'apparaît que si on a au moins 5 sujets et que l'utilisateur a ouvert
    // au moins 1 fiche (sinon, pas grand-chose à exploiter pour pondérer).
    renderDiscoveryWidget(main, sujets);

    // Recherche
    const searchInput = el('input', {
      class: 'search-input',
      type: 'text',
      placeholder: 'Rechercher un sujet…',
      value: f.search || ''
    });
    searchInput.addEventListener('input', (e) => {
      state.user.filters.search = e.target.value;
      saveUserState();
      refresh();
    });
    main.appendChild(el('div', { class: 'biblio-controls' }, searchInput));

    // Bandeau de filtres avancés et tri : difficulté, durée, sort.
    // En selects compacts pour ne pas multiplier les chips à côté des 20+
    // domaines (les domaines étant déjà nombreux, on évite la saturation
    // visuelle d'une 3ᵉ et 4ᵉ rangée de chips).
    const advWrap = el('div', { class: 'biblio-advanced' });

    const diffSel = el('select', { class: 'biblio-adv-select', title: 'Filtrer par difficulté' });
    [
      ['',  'Toutes les difficultés'],
      ['1', 'Initiation (★)'],
      ['2', 'Intermédiaire (★★)'],
      ['3', 'Avancé (★★★)']
    ].forEach(([v, l]) => diffSel.appendChild(el('option', { value: v }, l)));
    diffSel.value = (f.difficulty != null ? String(f.difficulty) : '');
    diffSel.addEventListener('change', () => {
      const v = diffSel.value;
      state.user.filters.difficulty = v ? parseInt(v, 10) : null;
      saveUserState();
      refresh();
    });
    advWrap.appendChild(diffSel);

    const durSel = el('select', { class: 'biblio-adv-select', title: 'Filtrer par durée estimée' });
    [
      ['',     'Toutes les durées'],
      ['short','Court (≤ 20 min)'],
      ['medium','Moyen (20–40 min)'],
      ['long', 'Long (> 40 min)']
    ].forEach(([v, l]) => durSel.appendChild(el('option', { value: v }, l)));
    durSel.value = f.duration || '';
    durSel.addEventListener('change', () => {
      state.user.filters.duration = durSel.value || null;
      saveUserState();
      refresh();
    });
    advWrap.appendChild(durSel);

    const sortSel = el('select', { class: 'biblio-adv-select', title: 'Trier les sujets' });
    [
      ['alpha',     'Tri : A → Z'],
      ['recent',    'Tri : récents en premier'],
      ['old',       'Tri : anciens en premier'],
      ['duration-asc', 'Tri : durée ↑'],
      ['duration-desc','Tri : durée ↓'],
      ['difficulty-asc','Tri : difficulté ↑'],
      ['difficulty-desc','Tri : difficulté ↓'],
      ['popular',   'Tri : plus consultés']
    ].forEach(([v, l]) => sortSel.appendChild(el('option', { value: v }, l)));
    sortSel.value = f.sort || 'alpha';
    sortSel.addEventListener('change', () => {
      state.user.filters.sort = sortSel.value;
      saveUserState();
      refresh();
    });
    advWrap.appendChild(sortSel);

    main.appendChild(advWrap);

    // Conteneur stable pour les filtres ; reconstruit à chaque changement
    // pour que les classes `.active` migrent visuellement.
    const chipsContainer = el('div');
    main.appendChild(chipsContainer);

    const gridContainer = el('div', { id: 'biblio-grid' });
    main.appendChild(gridContainer);

    const STATES = [
      { id: null,       label: 'Tous les états' },
      { id: 'non-lu',   label: 'Non lus' },
      { id: 'en-cours', label: 'En cours' },
      { id: 'termine',  label: 'Terminés' },
      { id: 'favoris',  label: 'Favoris' }
    ];

    function buildChips() {
      const cur = state.user.filters;
      const wrap = el('div', { class: 'filter-section' });

      // Si un tag est actif, on le montre comme un filtre épinglé tout en haut
      if (cur.tag) {
        wrap.appendChild(el('div', { class: 'active-tag-banner' },
          el('span', { class: 'active-tag-label' }, 'Tag : '),
          el('button', {
            class: 'chip chip-active-tag',
            title: 'Retirer ce filtre',
            onclick: () => { state.user.filters.tag = null; saveUserState(); refresh(); }
          }, cur.tag + '  ✕')
        ));
      }

      // Domaines
      if (allDomains.length > 0) {
        wrap.appendChild(el('div', { class: 'filter-chips' },
          el('button', {
            class: 'chip' + (!cur.domain ? ' active' : ''),
            onclick: () => { state.user.filters.domain = null; saveUserState(); refresh(); }
          }, 'Tous les domaines'),
          ...allDomains.map(d => {
            const isActive = cur.domain === d;
            const c = domainColor(d);
            return el('button', {
              class: 'chip' + (isActive ? ' active' : ''),
              style: isActive ? { '--accent': c, '--accent-soft': `color-mix(in oklab, ${c} 14%, transparent)` } : null,
              onclick: () => { state.user.filters.domain = d; saveUserState(); refresh(); }
            }, d);
          })
        ));
      }

      // États
      wrap.appendChild(el('div', { class: 'filter-chips' },
        ...STATES.map(s => el('button', {
          class: 'chip' + (((cur.state || null) === s.id) ? ' active' : ''),
          onclick: () => { state.user.filters.state = s.id; saveUserState(); refresh(); }
        }, s.label))
      ));

      return wrap;
    }

    function refresh() {
      clear(chipsContainer);
      chipsContainer.appendChild(buildChips());
      clear(gridContainer);
      gridContainer.appendChild(buildGrid());
    }

    function buildGrid() {
      const f = state.user.filters;
      let filtered = sujets;
      if (f.domain) {
        filtered = filtered.filter(s => (s.meta.domaines || []).includes(f.domain));
      }
      if (f.tag) {
        filtered = filtered.filter(s => (s.meta.tags || []).includes(f.tag));
      }
      if (f.state) {
        if (f.state === 'favoris') {
          filtered = filtered.filter(s => state.user.favorites.includes(s.meta.id));
        } else {
          filtered = filtered.filter(s => getSujetState(s) === f.state);
        }
      }
      if (f.difficulty) {
        filtered = filtered.filter(s => (s.meta.difficulte || 0) === f.difficulty);
      }
      if (f.duration) {
        filtered = filtered.filter(s => {
          const d = s.meta.duree_estimee_min;
          if (!d || typeof d !== 'number') return false;
          if (f.duration === 'short')  return d <= 20;
          if (f.duration === 'medium') return d > 20 && d <= 40;
          if (f.duration === 'long')   return d > 40;
          return true;
        });
      }
      if (f.search && f.search.trim()) {
        const q = normalizeForSearch(f.search.trim());
        // Recherche plein texte : titre, résumé, tags, points-clés, contenu
        // des blocs de cours, paramètres de widgets, carte mentale, quiz.
        // Insensible à la casse ET aux accents.
        filtered = filtered.filter(s => searchableText(s).includes(q));
      }

      // Tri : alphabétique par défaut (ordre du carnet), sinon selon le mode
      // choisi. On clone le tableau pour ne pas muter la liste-source.
      const sortMode = f.sort || 'alpha';
      if (sortMode === 'alpha') {
        filtered = filtered.slice().sort((a, b) => {
          const ta = String(a.meta.titre).replace(/<[^>]+>/g, '');
          const tb = String(b.meta.titre).replace(/<[^>]+>/g, '');
          return ta.localeCompare(tb, 'fr', { sensitivity: 'base' });
        });
      } else if (sortMode === 'recent' || sortMode === 'old') {
        const dir = sortMode === 'recent' ? -1 : 1;
        filtered = filtered.slice().sort((a, b) => {
          const da = a.meta.date_maj || a.meta.date_creation || '';
          const db = b.meta.date_maj || b.meta.date_creation || '';
          return dir * da.localeCompare(db);
        });
      } else if (sortMode === 'duration-asc' || sortMode === 'duration-desc') {
        const dir = sortMode === 'duration-asc' ? 1 : -1;
        filtered = filtered.slice().sort((a, b) => {
          const da = a.meta.duree_estimee_min || 9999;
          const db = b.meta.duree_estimee_min || 9999;
          return dir * (da - db);
        });
      } else if (sortMode === 'difficulty-asc' || sortMode === 'difficulty-desc') {
        const dir = sortMode === 'difficulty-asc' ? 1 : -1;
        filtered = filtered.slice().sort((a, b) => {
          const da = a.meta.difficulte || 0;
          const db = b.meta.difficulte || 0;
          return dir * (da - db);
        });
      } else if (sortMode === 'popular') {
        // Pondéré par temps passé (timeMs depuis dailyActivity). Sujets jamais
        // ouverts en dernier (~0 ms).
        const top = computeTopSujets(state.user.dailyActivity);
        const timeById = {};
        top.forEach(t => { timeById[t.id] = t.timeMs; });
        filtered = filtered.slice().sort((a, b) =>
          (timeById[b.meta.id] || 0) - (timeById[a.meta.id] || 0));
      }

      setSubtitle(filtered.length);

      if (filtered.length === 0) {
        return el('div', { class: 'empty-state' },
          el('div', { class: 'empty-state-icon' }, '✦'),
          el('p', null, 'Aucun sujet ne correspond à vos filtres.')
        );
      }

      return el('div', { class: 'sujet-grid' },
        ...filtered.map(s => sujetCard(s))
      );
    }

    refresh();
  }

  function sujetCard(sujet) {
    const meta = sujet.meta;
    const primaryDomain = (meta.domaines || [])[0];
    const accent = primaryDomain ? domainColor(primaryDomain) : 'var(--d-default)';
    const isFav = state.user.favorites.includes(meta.id);
    const progress = state.user.progress[meta.id];

    const card = el('a', {
      class: 'sujet-card',
      href: '#/sujet/' + encodeURIComponent(meta.id),
      style: { '--card-accent': accent }
    },
      // Domaines en haut
      el('div', { class: 'sujet-card-domains' },
        ...(meta.domaines || []).map(d => {
          const c = domainColor(d);
          return el('span', {
            class: 'domain-badge',
            style: {
              '--badge-color': c,
              '--badge-bg': `color-mix(in oklab, ${c} 12%, transparent)`
            }
          }, d);
        })
      ),
      // Étoile favori
      el('button', {
        class: 'fav-star' + (isFav ? ' on' : ''),
        title: isFav ? 'Retirer des favoris' : 'Ajouter aux favoris',
        style: { '--card-accent': accent },
        onclick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(meta.id);
          rerender();
        },
        html: isFav ? ICONS.star : ICONS.starOutline
      }),
      // Titre
      el('h3', { class: 'sujet-card-title', html: htmlEscapeButKeepEm(meta.titre) }),
      // Résumé — passé par md() pour rendre **gras**, [terme]{accent},
      // [[slug]] etc. md() entoure d'un <p> qu'on supprime (le <p> wrapper
      // est déjà fourni par el()).
      el('p', { class: 'sujet-card-summary', html: md(sujet.resume || '').replace(/^<p>|<\/p>$/g, '') }),
      // Méta
      el('div', { class: 'sujet-card-meta' },
        el('span', { class: 'difficulty' },
          ...[1, 2, 3].map(i => el('span', {
            class: 'diff-dot' + (i <= (meta.difficulte || 1) ? ' on' : ''),
            style: { '--card-accent': accent }
          }))
        ),
        el('div', { class: 'progress-mini' },
          el('div', {
            class: 'progress-mini-fill',
            style: {
              width: ((progress && progress.courseProgress) || 0) + '%',
              '--card-accent': accent
            }
          })
        ),
        el('span', null, (meta.duree_estimee_min ? meta.duree_estimee_min + ' min' : ''))
      )
    );

    // Badge "maîtrise quiz" : visible si l'utilisateur a déjà tenté le quiz
    const quizScore = (state.user.quizScores || {})[meta.id];
    if (quizScore && quizScore.total > 0) {
      const pct = quizScore.best / quizScore.total;
      const cls = pct === 1 ? 'sujet-card-quiz perfect'
                : pct >= 0.75 ? 'sujet-card-quiz great'
                : pct >= 0.5 ? 'sujet-card-quiz good'
                : 'sujet-card-quiz poor';
      card.appendChild(el('div', { class: cls, title: 'Meilleur score du quiz' },
        pct === 1 ? '★' : '✓',
        ' ' + quizScore.best + '/' + quizScore.total
      ));
    }

    return card;
  }

  function toggleFavorite(id) {
    const idx = state.user.favorites.indexOf(id);
    if (idx >= 0) state.user.favorites.splice(idx, 1);
    else state.user.favorites.push(id);
    saveUserState();
  }

  // =================================================================
  // VIEW: SUJET
  // =================================================================

  function renderSujet(main, id, tabId, blockTarget) {
    const sujet = state.sujets[id];
    if (!sujet) {
      main.appendChild(el('p', null, 'Sujet introuvable.'));
      main.appendChild(el('a', { class: 'btn', href: '#/' }, '← Retour à la bibliothèque'));
      return;
    }

    const meta = sujet.meta;
    const primaryDomain = (meta.domaines || [])[0];
    setAccent(primaryDomain);

    // Bandeau de parcours actif — affiché si l'utilisateur a un parcours
    // en cours dont l'une des étapes correspond à ce sujet.
    renderParcoursBanner(main, id);

    // Mémorise progression
    const _prevProg = state.user.progress[meta.id];
    const _prevVisitISO = _prevProg && _prevProg.lastVisit;
    state.user.progress[meta.id] = _prevProg || { courseProgress: 0, visited: false };
    state.user.progress[meta.id].visited = true;
    state.user.progress[meta.id].lastTab = tabId;
    state.user.progress[meta.id].lastVisit = new Date().toISOString();
    saveUserState();

    // Heatmap : on ne compte qu'une visite par sujet et par jour (calendrier
    // local — la slice() de l'ISO donnait l'UTC et causait des décalages
    // ±1 jour selon l'heure et le fuseau).
    const _todayKey = dateKey(new Date());
    const _prevKey  = _prevVisitISO ? dateKey(new Date(_prevVisitISO)) : null;
    if (_prevKey !== _todayKey) {
      recordActivity('visits', meta.id);
    }

    // ---- Header
    const header = el('header', { class: 'sujet-header' },
      el('button', { class: 'back-link', onclick: () => navigate('/') },
        el('span', { class: 'nav-icon', html: ICONS.arrowLeft }),
        ' Bibliothèque'
      ),
      el('div', { class: 'sujet-card-domains', style: { marginBottom: '0.6rem' } },
        ...(meta.domaines || []).map(d => {
          const c = domainColor(d);
          return el('span', {
            class: 'domain-badge',
            style: {
              '--badge-color': c,
              '--badge-bg': `color-mix(in oklab, ${c} 12%, transparent)`
            }
          }, d);
        })
      ),
      el('h1', { class: 'sujet-title', html: htmlEscapeButKeepEm(meta.titre) }),
      el('p', { class: 'page-subtitle', style: { marginBottom: '0' }, html: md(sujet.resume || '').replace(/^<p>|<\/p>$/g, '') }),
      el('div', { class: 'sujet-meta-row' },
        el('span', { class: 'difficulty' },
          ...[1, 2, 3].map(i => el('span', { class: 'diff-dot' + (i <= (meta.difficulte || 1) ? ' on' : '') }))
        ),
        el('span', null, '· ' + (meta.difficulte === 1 ? 'Niveau initiation' : meta.difficulte === 2 ? 'Niveau intermédiaire' : 'Niveau avancé')),
        meta.duree_estimee_min && el('span', null, '· ' + meta.duree_estimee_min + ' min'),
        meta.date_maj && el('span', null, '· maj ' + formatDate(meta.date_maj)),
        // Bouton imprimer / exporter PDF : déclenche la dialogue native du
        // navigateur. Le rendu papier est piloté par la feuille @media print.
        el('button', {
          class: 'print-btn',
          title: 'Imprimer ou exporter ce sujet en PDF (Ctrl+P)',
          onclick: () => { window.print(); }
        }, '⎙ Imprimer / PDF')
      )
    );
    // Tags cliquables (filtrent la bibliothèque par ce tag)
    if (Array.isArray(meta.tags) && meta.tags.length > 0) {
      header.appendChild(el('div', { class: 'sujet-tags' },
        ...meta.tags.map(t => el('button', {
          class: 'tag-chip',
          title: 'Filtrer la bibliothèque par « ' + t + ' »',
          onclick: () => {
            state.user.filters.tag = t;
            // On efface les autres filtres pour mettre le focus sur ce tag
            state.user.filters.state = null;
            state.user.filters.domain = null;
            state.user.filters.search = '';
            saveUserState();
            navigate('/');
          }
        }, '#' + t))
      ));
    }
    main.appendChild(header);

    // ---- Tabs
    const TABS = [
      { id: 'resume', label: 'Résumé' },
      { id: 'cours', label: 'Cours' },
      { id: 'quiz', label: 'Quiz' },
      { id: 'carte', label: 'Carte mentale' }
    ];
    const tabBar = el('div', { class: 'tabs' },
      ...TABS.map(t => el('button', {
        class: 'tab' + (t.id === tabId ? ' active' : ''),
        onclick: () => navigate('/sujet/' + encodeURIComponent(meta.id) + '/' + t.id)
      }, t.label))
    );
    main.appendChild(tabBar);

    // ---- Tab content
    const tabContent = el('div', { class: 'tab-content' });
    main.appendChild(tabContent);

    if (tabId === 'resume') renderTabResume(tabContent, sujet);
    else if (tabId === 'cours') renderTabCours(tabContent, sujet, blockTarget);
    else if (tabId === 'quiz') renderTabQuiz(tabContent, sujet);
    else if (tabId === 'carte') renderTabCarte(tabContent, sujet);

    // ---- Footer "Tu pourrais aussi aimer"
    // Calcule une liste de sujets reliés au sujet courant à partir de :
    //   - lie_a (lien éditorial fort, poids 100)
    //   - tags partagés (poids 5 par tag commun)
    //   - même domaine principal (poids 2)
    // Affiche les 5 meilleurs scores. Visible sur tous les onglets.
    renderSujetFooterRecommendations(main, sujet);
  }

  function renderSujetFooterRecommendations(container, sujet) {
    const myId = sujet.meta.id;
    const myTags = new Set(sujet.meta.tags || []);
    const myDomain = (sujet.meta.domaines || [])[0];
    const liea = new Set(sujet.meta.lie_a || []);

    const scores = [];
    state.sujetsOrder.forEach(id => {
      if (id === myId) return;
      const s = state.sujets[id];
      if (!s) return;
      let score = 0;
      if (liea.has(id)) score += 100;
      const otherTags = s.meta.tags || [];
      const shared = otherTags.filter(t => myTags.has(t));
      score += shared.length * 5;
      const otherDom = (s.meta.domaines || [])[0];
      if (otherDom && otherDom === myDomain) score += 2;
      if (score > 0) scores.push({ id, score, sujet: s, shared, lieA: liea.has(id) });
    });
    if (scores.length === 0) return;
    scores.sort((a, b) => b.score - a.score);
    const top = scores.slice(0, 5);

    const footer = el('div', { class: 'sujet-related' });
    footer.appendChild(el('h3', { class: 'sujet-related-title' }, 'Tu pourrais aussi aimer'));
    const list = el('div', { class: 'sujet-related-list' });
    top.forEach(({ id, sujet: s, shared, lieA }) => {
      const dom = (s.meta.domaines || ['Autre'])[0];
      const c = domainColor(dom);
      const card = el('a', {
        class: 'sujet-related-card',
        href: '#/sujet/' + encodeURIComponent(id),
        style: { '--card-accent': c },
        onclick: (e) => { e.preventDefault(); navigate('/sujet/' + encodeURIComponent(id)); }
      });
      // Raison du lien (court)
      let reason;
      if (lieA) reason = 'Lien direct';
      else if (shared.length > 0) reason = shared.length === 1
        ? 'Tag : #' + shared[0]
        : shared.length + ' tags partagés';
      else reason = 'Même domaine';
      card.appendChild(el('span', { class: 'sujet-related-reason' }, reason));
      card.appendChild(el('span', {
        class: 'sujet-related-name',
        html: htmlEscapeButKeepEm(s.meta.titre)
      }));
      card.appendChild(el('span', { class: 'sujet-related-domain' }, dom));
      list.appendChild(card);
    });
    footer.appendChild(list);
    container.appendChild(footer);
  }

  function htmlEscapeButKeepEm(s) {
    // Permet <em> dans les titres pour la mise en italique
    let out = String(s).replace(/&/g, '&amp;');
    out = out.replace(/<(?!\/?em>)/g, '&lt;');
    return out;
  }

  // ---- Helpers surlignage des blocs ----
  function isBlockHighlighted(sujetId, blockIdx) {
    const arr = (state.user.highlights || {})[sujetId];
    return Array.isArray(arr) && arr.indexOf(blockIdx) >= 0;
  }
  function toggleBlockHighlight(sujetId, blockIdx) {
    if (!state.user.highlights) state.user.highlights = {};
    const arr = state.user.highlights[sujetId] || [];
    const i = arr.indexOf(blockIdx);
    if (i >= 0) arr.splice(i, 1);
    else arr.push(blockIdx);
    state.user.highlights[sujetId] = arr;
    saveUserState();
    return arr.indexOf(blockIdx) >= 0;
  }

  // ---- Helpers surlignage de passages (extraits dans un bloc cours) ----
  // Stockage : state.user.passageHighlights[sujetId] = [{ blockIdx, text, ts }]
  // Le texte est normalisé (espaces collapsed, trim) pour permettre la recherche
  // dans les textNodes même si la sélection inclut des retours à la ligne.
  function normalizePassage(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }
  function getPassageHighlights(sujetId) {
    const arr = (state.user.passageHighlights || {})[sujetId];
    return Array.isArray(arr) ? arr : [];
  }
  function addPassageHighlight(sujetId, blockIdx, text) {
    const cleaned = normalizePassage(text);
    if (!cleaned || cleaned.length < 2) return false;
    if (!state.user.passageHighlights) state.user.passageHighlights = {};
    const arr = state.user.passageHighlights[sujetId] || [];
    // Dédoublonnage strict
    if (arr.some(h => h.blockIdx === blockIdx && h.text === cleaned)) return false;
    arr.push({ blockIdx: blockIdx, text: cleaned, ts: Date.now() });
    state.user.passageHighlights[sujetId] = arr;
    saveUserState();
    return true;
  }
  function removePassageHighlight(sujetId, blockIdx, text) {
    const arr = getPassageHighlights(sujetId);
    const cleaned = normalizePassage(text);
    const i = arr.findIndex(h => h.blockIdx === blockIdx && h.text === cleaned);
    if (i < 0) return false;
    arr.splice(i, 1);
    state.user.passageHighlights[sujetId] = arr;
    saveUserState();
    return true;
  }
  // Applique les surlignages sur un noeud DOM en parcourant ses textNodes.
  // Wrappe chaque occurrence dans <mark class="passage-mark"> ; tri par
  // longueur décroissante pour matcher d'abord les longs passages (sinon
  // un fragment court fragmenterait un long passage).
  function applyPassageHighlights(node, sujetId, blockIdx) {
    const highlights = getPassageHighlights(sujetId).filter(h => h.blockIdx === blockIdx);
    if (highlights.length === 0) return;
    highlights.sort((a, b) => b.text.length - a.text.length);
    highlights.forEach(h => wrapTextInNode(node, h.text));
  }
  // Crée (à la demande) le popup global réutilisé entre toutes les sélections.
  let _passagePopup = null;
  function ensurePassagePopup() {
    if (_passagePopup) return _passagePopup;
    _passagePopup = document.createElement('div');
    _passagePopup.className = 'passage-popup';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'passage-popup-btn';
    btn.innerHTML = '<span class="passage-popup-icon">✎</span> Surligner';
    _passagePopup.appendChild(btn);
    document.body.appendChild(_passagePopup);
    return _passagePopup;
  }
  function hidePassagePopup() {
    if (_passagePopup) _passagePopup.classList.remove('is-visible');
  }
  // Configure un conteneur de cours pour détecter les sélections et proposer
  // un bouton "Surligner" flottant. Une seule fonction de cleanup est gardée
  // par sujet (cleanup automatique au prochain rerender via DOM replacement).
  function setupPassageSelection(container, sujetId) {
    const popup = ensurePassagePopup();
    const btn = popup.querySelector('.passage-popup-btn');

    let currentSelection = null; // { blockIdx, text }

    function placePopupNearRect(rect) {
      const popH = 36;
      const top = window.scrollY + rect.top - popH - 8;
      const left = window.scrollX + rect.left + (rect.width / 2);
      popup.style.top = Math.max(8, top) + 'px';
      popup.style.left = left + 'px';
      popup.style.transform = 'translateX(-50%)';
    }

    function onSelectionEnd() {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) { hidePassagePopup(); return; }
      const text = sel.toString();
      if (!text || text.trim().length < 2) { hidePassagePopup(); return; }
      const range = sel.getRangeAt(0);
      // Vérifie que la sélection est entièrement dans un seul .course-block du container
      const startNode = range.startContainer.nodeType === 3 ? range.startContainer.parentNode : range.startContainer;
      const endNode = range.endContainer.nodeType === 3 ? range.endContainer.parentNode : range.endContainer;
      const startBlock = startNode && startNode.closest ? startNode.closest('[data-block-idx]') : null;
      const endBlock = endNode && endNode.closest ? endNode.closest('[data-block-idx]') : null;
      if (!startBlock || startBlock !== endBlock) { hidePassagePopup(); return; }
      if (!container.contains(startBlock)) { hidePassagePopup(); return; }
      const blockIdx = parseInt(startBlock.dataset.blockIdx, 10);
      currentSelection = { blockIdx: blockIdx, text: text };
      const rect = range.getBoundingClientRect();
      if (!rect || (rect.width === 0 && rect.height === 0)) { hidePassagePopup(); return; }
      placePopupNearRect(rect);
      popup.classList.add('is-visible');
    }

    // mouseup couvre la sélection souris ; selectionchange est secondaire
    // (utile clavier mais on évite le bruit en attendant un petit délai)
    container.addEventListener('mouseup', () => setTimeout(onSelectionEnd, 10));
    container.addEventListener('keyup', (e) => {
      if (e.shiftKey || ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].indexOf(e.key) >= 0) {
        setTimeout(onSelectionEnd, 10);
      }
    });

    // Click ailleurs = ferme le popup — écouteur global posé UNE seule fois
    // (setupPassageSelection est rappelé à chaque rendu du cours : avant, un
    // nouvel écouteur document.mousedown s'empilait à chaque fois).
    if (!setupPassageSelection._docListenerInstalled) {
      setupPassageSelection._docListenerInstalled = true;
      document.addEventListener('mousedown', (e) => {
        const pop = document.querySelector('.passage-popup');
        if (pop && pop.contains(e.target)) return;
        hidePassagePopup();
      });
    }

    // Clic sur le bouton = enregistre le surlignage
    btn.onclick = (e) => {
      e.preventDefault();
      if (!currentSelection) { hidePassagePopup(); return; }
      const ok = addPassageHighlight(sujetId, currentSelection.blockIdx, currentSelection.text);
      hidePassagePopup();
      // Désélectionne pour éviter de re-déclencher au prochain mouseup
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
      if (ok) rerender();
    };
  }

  function wrapTextInNode(root, needle) {
    if (!needle || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        // Skip si déjà à l'intérieur d'un mark.passage-mark ou d'un bouton
        let p = n.parentNode;
        while (p && p !== root) {
          if (p.classList && (p.classList.contains('passage-mark') || p.tagName === 'BUTTON' || p.classList.contains('block-highlight-btn'))) {
            return NodeFilter.FILTER_REJECT;
          }
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const toProcess = [];
    let n;
    while ((n = walker.nextNode())) toProcess.push(n);
    let found = false;
    toProcess.forEach(textNode => {
      const txt = textNode.nodeValue;
      // Recherche tolérante : on normalise les whitespaces dans le textNode
      // pour matcher même si l'utilisateur a sélectionné à travers un \n.
      const normalizedTxt = txt.replace(/\s+/g, ' ');
      const idx = normalizedTxt.indexOf(needle);
      if (idx === -1) return;
      // Trouve les bornes correspondantes dans le texte brut original
      // (les longueurs peuvent différer si \n ont été collapsed)
      let realStart = -1, realEnd = -1, normPos = 0;
      for (let i = 0; i < txt.length; i++) {
        if (normPos === idx && realStart === -1) realStart = i;
        if (normPos === idx + needle.length) { realEnd = i; break; }
        // chaque run de whitespace compte pour 1 dans normalizedTxt
        if (/\s/.test(txt[i])) {
          // si début de run ou char isolé : avance normPos
          if (i === 0 || !/\s/.test(txt[i - 1])) normPos++;
        } else {
          normPos++;
        }
      }
      if (realStart === -1) return;
      if (realEnd === -1) realEnd = txt.length;
      const before = txt.slice(0, realStart);
      const middle = txt.slice(realStart, realEnd);
      const after = txt.slice(realEnd);
      const mark = document.createElement('mark');
      mark.className = 'passage-mark';
      mark.title = 'Cliquer pour retirer ce surlignage';
      mark.dataset.phText = needle;
      mark.textContent = middle;
      const parent = textNode.parentNode;
      if (before) parent.insertBefore(document.createTextNode(before), textNode);
      parent.insertBefore(mark, textNode);
      if (after) parent.insertBefore(document.createTextNode(after), textNode);
      parent.removeChild(textNode);
      found = true;
    });
    if (found) return;
    // ---- Repli multi-nœuds ----
    // Le passage traverse un élément inline (**gras**, `code`, [terme]{accent},
    // lien) : il n'existe dans aucun textNode isolé. On concatène les
    // textNodes (normalisés), on cherche le passage dans la chaîne globale et
    // on entoure chaque portion concernée d'un <mark> distinct.
    // (Avant, ces surlignages étaient enregistrés mais jamais affichés.)
    const map = [];   // index normalisé global → { node, offset } (offset réel dans le node)
    let joined = '';
    let prevWasSpace = true;   // évite les doubles espaces à la jonction de nœuds
    toProcess.forEach(textNode => {
      const txt = textNode.nodeValue;
      for (let i = 0; i < txt.length; i++) {
        const ch = txt[i];
        if (/\s/.test(ch)) {
          if (prevWasSpace) continue;
          joined += ' '; map.push({ node: textNode, offset: i }); prevWasSpace = true;
        } else {
          joined += ch; map.push({ node: textNode, offset: i }); prevWasSpace = false;
        }
      }
    });
    const gIdx = joined.indexOf(needle);
    if (gIdx === -1) return;
    // Regroupe les positions par nœud → [start, end] réels
    const perNode = new Map();
    for (let k = gIdx; k < gIdx + needle.length; k++) {
      const m = map[k];
      if (!m) break;
      const r = perNode.get(m.node) || { start: m.offset, end: m.offset + 1 };
      r.start = Math.min(r.start, m.offset); r.end = Math.max(r.end, m.offset + 1);
      perNode.set(m.node, r);
    }
    perNode.forEach((r, textNode) => {
      const txt = textNode.nodeValue;
      const before = txt.slice(0, r.start), middle = txt.slice(r.start, r.end), after = txt.slice(r.end);
      if (!middle) return;
      const mark = document.createElement('mark');
      mark.className = 'passage-mark';
      mark.title = 'Cliquer pour retirer ce surlignage';
      mark.dataset.phText = needle;
      mark.textContent = middle;
      const parent = textNode.parentNode;
      if (!parent) return;
      if (before) parent.insertBefore(document.createTextNode(before), textNode);
      parent.insertBefore(mark, textNode);
      if (after) parent.insertBefore(document.createTextNode(after), textNode);
      parent.removeChild(textNode);
    });
  }

  // État de lecture d'un sujet pour le filtre par état :
  //   'non-lu'   = jamais ouvert
  //   'en-cours' = ouvert, mais courseProgress < 100
  //   'termine'  = courseProgress >= 100
  // (« favoris » est traité séparément dans le filtre car non exclusif.)
  function getSujetState(sujet) {
    const p = state.user.progress[sujet.meta.id];
    if (!p || !p.visited) return 'non-lu';
    if ((p.courseProgress || 0) >= 100) return 'termine';
    return 'en-cours';
  }

  // ---------------------------------------------------------------
  // INDEX DE RECHERCHE PLEIN TEXTE
  // ---------------------------------------------------------------
  // Concatène tout le contenu rédactionnel d'un sujet (titre, résumé,
  // points-clés, blocs de cours, paramètres de widgets, carte mentale,
  // questions de quiz et leurs explications) pour permettre une recherche
  // par sous-chaîne dans la bibliothèque. Mémoïsé sur l'objet sujet pour
  // ne pas recalculer à chaque frappe.
  function searchableText(sujet) {
    if (sujet.__searchText != null) return sujet.__searchText;
    return (sujet.__searchText = collectSearchableText(sujet));
  }

  function collectSearchableText(sujet) {
    const parts = [];
    const m = sujet.meta || {};
    if (m.titre)     parts.push(m.titre);
    if (Array.isArray(m.tags))     parts.push(...m.tags);
    if (Array.isArray(m.domaines)) parts.push(...m.domaines);
    if (sujet.resume) parts.push(sujet.resume);
    if (Array.isArray(sujet.points_cles)) parts.push(...sujet.points_cles);

    const cm = sujet.carte_mentale;
    if (cm && Array.isArray(cm.noeuds)) {
      cm.noeuds.forEach(n => {
        if (n && n.label)       parts.push(n.label);
        if (n && n.description) parts.push(n.description);
      });
    }

    if (Array.isArray(sujet.cours)) {
      sujet.cours.forEach(b => {
        if (!b) return;
        if (b.titre)      parts.push(b.titre);
        if (b.label)      parts.push(b.label);
        if (b.contenu_md) parts.push(b.contenu_md);
        if (b.contenu)    parts.push(b.contenu);
        const p = b.params;
        if (p) {
          if (p.label) parts.push(p.label);
          (p.options || []).forEach(o => {
            if (o && o.label)       parts.push(o.label);
            if (o && o.description) parts.push(o.description);
          });
          (p.seuils || []).forEach(s => {
            if (s && s.titre)       parts.push(s.titre);
            if (s && s.description) parts.push(s.description);
          });
          (p.cartes || []).forEach(c => {
            if (c && c.tag)         parts.push(c.tag);
            if (c && c.titre)       parts.push(c.titre);
            if (c && c.description) parts.push(c.description);
          });
          (p.methodes || []).forEach(me => {
            if (me && me.titre)       parts.push(me.titre);
            if (me && me.description) parts.push(me.description);
          });
        }
      });
    }

    if (Array.isArray(sujet.quiz)) {
      sujet.quiz.forEach(q => {
        if (!q) return;
        if (q.q) parts.push(q.q);
        if (Array.isArray(q.options)) parts.push(...q.options);
        if (q.explication) parts.push(q.explication);
      });
    }

    // Strip HTML tags pour ne pas matcher "em" ou autres balises,
    // puis normaliser (lowercase + retrait des accents) pour que
    // "accretion" matche "accrétion", "etoile" matche "étoile", etc.
    return normalizeForSearch(parts.join(' \n ').replace(/<[^>]+>/g, ' '));
  }

  // Normalise une chaîne pour comparaison : minuscule + suppression des
  // diacritiques. Utilisé symétriquement sur l'index et sur la requête.
  // Range U+0300 .. U+036F = "Combining Diacritical Marks" (accents,
  // cédilles, tildes...). Après une normalisation NFD, on les retire.
  // RegExp construite à partir d'une string ASCII pour rester
  // indépendant de l'encodage avec lequel le navigateur lit ce fichier.
  var DIACRITICS_RE = new RegExp('[\\u0300-\\u036f]', 'g');
  function normalizeForSearch(s) {
    return String(s).normalize('NFD').replace(DIACRITICS_RE, '').toLowerCase();
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) { return iso; }
  }

  // ---------------------------------------------------------------
  // SUIVI DAILY (heatmap d'activité)
  // ---------------------------------------------------------------
  // Enregistre un événement d'apprentissage dans state.user.dailyActivity
  // sous la clé "YYYY-MM-DD" du jour. Trois types : 'visits' (sujet ouvert
  // dans la journée — au plus 1 par sujet/jour), 'blocs' (bloc de cours
  // marqué comme lu pour la première fois), 'quiz' (quiz terminé).
  function dateKey(d) {
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }
  // Inverse de dateKey : 'YYYY-MM-DD' → Date locale à minuit. Ne PAS utiliser
  // `new Date('YYYY-MM-DD')` : ce format est interprété en UTC, ce qui décale
  // d'un jour selon le fuseau (bannière « 3 jours sans activité » à J+2, etc.).
  function parseDateKey(key) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(key || ''));
    if (!m) { const d = new Date(key); return isNaN(d) ? new Date(0) : d; }
    return new Date(+m[1], +m[2] - 1, +m[3]);
  }

  // Enregistre une action d'apprentissage. Si sujetId est fourni, le compteur
  // est incrémenté à la fois au global du jour et dans le sous-objet par-sujet
  // (utilisé pour le détail au survol heatmap, les top sujets, la distribution
  // par domaine, etc.).
  function recordActivity(type, sujetId, amount) {
    if (!state.user) return;
    const key = dateKey(new Date());
    const da = state.user.dailyActivity || (state.user.dailyActivity = {});
    if (!da[key]) da[key] = { visits: 0, blocs: 0, quiz: 0, sujets: {} };
    if (!da[key].sujets) da[key].sujets = {};
    da[key][type] = (da[key][type] || 0) + (amount || 1);
    if (sujetId) {
      if (!da[key].sujets[sujetId]) da[key].sujets[sujetId] = { visits: 0, blocs: 0, quiz: 0, timeMs: 0 };
      da[key].sujets[sujetId][type] = (da[key].sujets[sujetId][type] || 0) + (amount || 1);
    }
    saveUserState();
    checkAchievements();
  }

  // Enregistre du temps passé sur un sujet (millisecondes).
  function recordTime(sujetId, ms) {
    if (!state.user || !sujetId || !ms || ms < 1000) return;
    const key = dateKey(new Date());
    const da = state.user.dailyActivity || (state.user.dailyActivity = {});
    if (!da[key]) da[key] = { visits: 0, blocs: 0, quiz: 0, sujets: {} };
    if (!da[key].sujets) da[key].sujets = {};
    if (!da[key].sujets[sujetId]) da[key].sujets[sujetId] = { visits: 0, blocs: 0, quiz: 0, timeMs: 0 };
    da[key].sujets[sujetId].timeMs = (da[key].sujets[sujetId].timeMs || 0) + ms;
    saveUserState();
  }

  // ---- Timer de session sur la fiche d'un sujet ----
  // Démarre quand on entre sur une fiche, met en pause quand l'onglet
  // navigateur perd le focus (visibilitychange), commit au changement de
  // sujet ou à la fermeture de l'onglet. Cap de 90 min par période visible
  // pour éviter de comptabiliser un onglet laissé ouvert toute la nuit.
  let activeTimer = null;
  const TIMER_CAP_MS = 90 * 60 * 1000;
  const TIMER_MIN_MS = 5000;

  function startSujetTimer(sujetId) {
    if (activeTimer && activeTimer.sujetId === sujetId) return;
    stopSujetTimer();
    activeTimer = {
      sujetId,
      periodStart: document.hidden ? null : Date.now()
    };
  }

  function stopSujetTimer() {
    if (!activeTimer) return;
    if (activeTimer.periodStart) {
      const elapsed = Math.min(Date.now() - activeTimer.periodStart, TIMER_CAP_MS);
      if (elapsed >= TIMER_MIN_MS) recordTime(activeTimer.sujetId, elapsed);
    }
    activeTimer = null;
  }

  function setupTimerListeners() {
    document.addEventListener('visibilitychange', () => {
      if (!activeTimer) return;
      if (document.hidden) {
        // Pause : commit la période en cours
        if (activeTimer.periodStart) {
          const elapsed = Math.min(Date.now() - activeTimer.periodStart, TIMER_CAP_MS);
          if (elapsed >= TIMER_MIN_MS) recordTime(activeTimer.sujetId, elapsed);
          activeTimer.periodStart = null;
        }
      } else {
        // Reprise : nouvelle période
        if (!activeTimer.periodStart) activeTimer.periodStart = Date.now();
      }
    });
    window.addEventListener('beforeunload', stopSujetTimer);
    // pagehide est plus fiable que beforeunload sur mobile / Safari
    window.addEventListener('pagehide', stopSujetTimer);
    // Flush des sauvegardes différées (notes) : sans ça, les 600 dernières
    // ms de saisie étaient perdues en fermant l'onglet.
    const flushPending = () => { if (_pendingSave) { _pendingSave = false; saveUserState(); } };
    window.addEventListener('pagehide', flushPending);
    window.addEventListener('beforeunload', flushPending);
  }
  let _pendingSave = false;

  // Pondération pour calculer l'intensité d'une journée :
  //   1 visite = 1, 1 bloc lu = 1, 1 quiz = 3 (action plus profonde).
  function dailyIntensity(d) {
    return (d.visits || 0) + (d.blocs || 0) + (d.quiz || 0) * 3;
  }

  function intensityBucket(i) {
    if (i === 0)  return 0;
    if (i < 3)    return 1;
    if (i < 6)    return 2;
    if (i < 12)   return 3;
    return 4;
  }

  function heatmapTooltip(date, data, intensity) {
    const dateStr = date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    if (!data || intensity === 0) return dateStr + " — pas d'activité";

    // Si on a la décomposition par sujet, on liste chaque sujet sur sa
    // propre ligne. Sinon on retombe sur l'agrégat (rétro-compat).
    if (data.sujets && Object.keys(data.sujets).length > 0) {
      const lines = [dateStr];
      Object.entries(data.sujets).forEach(([id, s]) => {
        const sujet = state.sujets[id];
        const label = sujet ? String(sujet.meta.titre).replace(/<[^>]+>/g, '') : id;
        const parts = [];
        if (s.timeMs) parts.push(formatDuration(s.timeMs));
        if (s.blocs)  parts.push(s.blocs + ' bloc' + (s.blocs > 1 ? 's' : ''));
        if (s.quiz)   parts.push(s.quiz + ' quiz');
        lines.push('• ' + label + (parts.length ? ' — ' + parts.join(', ') : ''));
      });
      return lines.join('\n');
    }
    const parts = [];
    if (data.visits) parts.push(data.visits + ' sujet' + (data.visits > 1 ? 's' : '') + ' ouvert' + (data.visits > 1 ? 's' : ''));
    if (data.blocs)  parts.push(data.blocs  + ' bloc'  + (data.blocs  > 1 ? 's' : '') + ' lu' + (data.blocs > 1 ? 's' : ''));
    if (data.quiz)   parts.push(data.quiz   + ' quiz');
    return dateStr + ' — ' + parts.join(' · ');
  }

  function formatDuration(ms) {
    const minutes = Math.round(ms / 60000);
    if (minutes < 1) return '< 1 min';
    if (minutes < 60) return minutes + ' min';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m === 0 ? h + ' h' : h + ' h ' + String(m).padStart(2, '0');
  }

  function formatDateShort(iso) {
    try {
      return new Date(iso).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    } catch (e) { return iso; }
  }

  // ---------------------------------------------------------------
  // STATISTIQUES DÉRIVÉES (heatmap, profil)
  // ---------------------------------------------------------------

  // Streak : nombre de jours consécutifs d'activité se terminant
  // aujourd'hui ou hier (on tolère 1 jour de gap pour le confort).
  function computeStreak(da) {
    da = da || {};
    const dates = Object.keys(da).filter(k => dailyIntensity(da[k]) > 0).sort();
    if (dates.length === 0) return { current: 0, best: 0 };

    const today = dateKey(new Date());
    const yesterday = dateKey(new Date(Date.now() - 86400000));

    // Streak courant : remonte depuis aujourd'hui ou hier
    let current = 0;
    let cursor = null;
    if (dates[dates.length - 1] === today) cursor = today;
    else if (dates[dates.length - 1] === yesterday) cursor = yesterday;

    if (cursor) {
      let i = dates.length - 1;
      let prev = parseDateKey(dates[i]);
      current = 1; i--;
      while (i >= 0) {
        const d = parseDateKey(dates[i]);
        const diff = Math.round((prev - d) / 86400000);
        if (diff === 1) { current++; prev = d; i--; }
        else break;
      }
    }

    // Meilleur streak historique
    let best = 0, run = 1;
    for (let i = 1; i < dates.length; i++) {
      const diff = Math.round((parseDateKey(dates[i]) - parseDateKey(dates[i - 1])) / 86400000);
      if (diff === 1) run++;
      else { best = Math.max(best, run); run = 1; }
    }
    best = Math.max(best, run);
    return { current, best };
  }

  // Meilleur jour : journée d'intensité maximale
  function computeBestDay(da) {
    da = da || {};
    let bestKey = null, bestI = 0;
    Object.entries(da).forEach(([k, v]) => {
      const i = dailyIntensity(v);
      if (i > bestI) { bestI = i; bestKey = k; }
    });
    if (!bestKey) return null;
    return { date: bestKey, data: da[bestKey], intensity: bestI };
  }

  // Tendance hebdomadaire : intensité 7 derniers jours vs 7 jours précédents
  function computeWeekTrend(da) {
    da = da || {};
    const now = new Date();
    let thisWeek = 0, lastWeek = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      const v = da[dateKey(d)];
      if (v) thisWeek += dailyIntensity(v);
    }
    for (let i = 7; i < 14; i++) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      const v = da[dateKey(d)];
      if (v) lastWeek += dailyIntensity(v);
    }
    let pct = null;
    if (lastWeek > 0) pct = Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
    return { thisWeek, lastWeek, pct };
  }

  // Top sujets : trie tous les sujets visités par temps cumulé
  function computeTopSujets(da) {
    da = da || {};
    const totals = {};
    Object.values(da).forEach(day => {
      if (!day.sujets) return;
      Object.entries(day.sujets).forEach(([id, s]) => {
        if (!totals[id]) totals[id] = { timeMs: 0, visits: 0, blocs: 0, quiz: 0 };
        totals[id].timeMs += s.timeMs || 0;
        totals[id].visits += s.visits || 0;
        totals[id].blocs  += s.blocs  || 0;
        totals[id].quiz   += s.quiz   || 0;
      });
    });
    return Object.entries(totals)
      .map(([id, t]) => Object.assign({ id }, t))
      .sort((a, b) => (b.timeMs - a.timeMs) || (b.blocs - a.blocs));
  }

  // Distribution par domaine : temps cumulé par domaine principal du sujet.
  // Si un sujet a plusieurs domaines, on attribue au premier (primaire).
  function computeDomainDistribution(da) {
    da = da || {};
    const totals = {};
    Object.values(da).forEach(day => {
      if (!day.sujets) return;
      Object.entries(day.sujets).forEach(([id, s]) => {
        const sujet = state.sujets[id];
        if (!sujet) return;
        const primary = (sujet.meta.domaines || ['Autre'])[0];
        const ms = s.timeMs || 0;
        if (ms > 0) totals[primary] = (totals[primary] || 0) + ms;
      });
    });
    const total = Object.values(totals).reduce((a, b) => a + b, 0);
    return Object.entries(totals)
      .map(([d, ms]) => ({ domain: d, ms, pct: total ? ms / total : 0 }))
      .sort((a, b) => b.ms - a.ms);
  }

  // ---------------------------------------------------------------
  // ACHIEVEMENTS
  // ---------------------------------------------------------------
  // Liste prédéfinie de succès. Chaque achievement a un check() qui
  // évalue l'état courant et renvoie true s'il est débloqué.
  // Vérifié à chaque action significative (recordActivity), avec une
  // toast en haut à droite pour chaque nouveau déblocage.

  const ACHIEVEMENTS = [
    { id: 'premier-pas',   label: 'Premier pas',        desc: 'Tu as ouvert ton premier sujet.',
      check: () => Object.keys(state.user.progress || {}).length >= 1 },
    { id: 'premier-quiz',  label: 'Premier quiz',       desc: 'Tu as terminé un quiz.',
      check: () => Object.keys(state.user.quizScores || {}).length >= 1 },
    { id: 'score-parfait', label: 'Sans faute',         desc: 'Premier quiz à 100 %.',
      check: () => Object.values(state.user.quizScores || {}).some(s => s.best === s.total) },
    { id: 'parfait-x5',    label: 'Maître quizzeur',    desc: '5 quiz à 100 %.',
      check: () => Object.values(state.user.quizScores || {}).filter(s => s.best === s.total).length >= 5 },
    { id: 'cours-fini',    label: 'Lecture intégrale',  desc: 'Premier cours parcouru de bout en bout.',
      check: () => Object.values(state.user.progress || {}).some(p => (p.courseProgress || 0) >= 100) },
    { id: 'cours-x5',      label: 'Étudiant assidu',    desc: '5 cours parcourus intégralement.',
      check: () => Object.values(state.user.progress || {}).filter(p => (p.courseProgress || 0) >= 100).length >= 5 },
    { id: 'serie-7',       label: 'Série de 7',         desc: '7 jours consécutifs d\'activité.',
      check: () => {
        const s = computeStreak(state.user.dailyActivity);
        return s.current >= 7 || s.best >= 7;
      } },
    { id: 'serie-30',      label: 'Série de 30',        desc: '30 jours consécutifs d\'activité.',
      check: () => computeStreak(state.user.dailyActivity).best >= 30 },
    { id: 'plongee',       label: 'Plongée profonde',   desc: '1 h cumulée sur un même sujet.',
      check: () => computeTopSujets(state.user.dailyActivity).some(t => t.timeMs >= 3600000) },
    { id: 'marathon',      label: 'Marathon',           desc: '5 h cumulées tous sujets confondus.',
      check: () => {
        const top = computeTopSujets(state.user.dailyActivity);
        return top.reduce((s, t) => s + (t.timeMs || 0), 0) >= 5 * 3600000;
      } },
    { id: 'eclectique',    label: 'Éclectique',         desc: '5 domaines différents explorés.',
      check: () => {
        const visited = Object.keys(state.user.progress || {}).filter(id => state.user.progress[id].visited);
        const domains = new Set();
        visited.forEach(id => {
          const s = state.sujets[id];
          if (s) (s.meta.domaines || []).forEach(d => domains.add(d));
        });
        return domains.size >= 5;
      } },
    { id: 'cartographe',   label: 'Cartographe',        desc: '30 termes de vocabulaire révisés en flashcards.',
      // Lié à une ACTION (cartes retournées), pas au simple contenu du carnet
      // (avant : décerné au premier démarrage dès 30 termes indexés).
      check: () => (state.user.vocabReviewed || []).length >= 30 },
    // ----- Quiz dédiés -----
    // Les compteurs cumulatifs (state.user.quizCounters) sont la source de
    // vérité pour les achievements de volume — le quizLog est capé à 500
    // entrées et serait donc une mauvaise base pour "1000 questions".
    { id: 'quiz-cent',     label: 'Cent questions',     desc: '100 questions répondues, tous quiz confondus.',
      check: () => ((state.user.quizCounters || {}).totalAnswered || 0) >= 100 },
    { id: 'quiz-millier',  label: 'Millier',            desc: '1000 questions répondues, tous quiz confondus.',
      check: () => ((state.user.quizCounters || {}).totalAnswered || 0) >= 1000 },
    { id: 'streak-10',     label: 'Tireur d\'élite',    desc: '10 bonnes réponses d\'affilée.',
      check: () => ((state.user.quizStreak || {}).best || 0) >= 10 },
    { id: 'streak-25',     label: 'Tireur d\'or',       desc: '25 bonnes réponses d\'affilée.',
      check: () => ((state.user.quizStreak || {}).best || 0) >= 25 },
    { id: 'quiz-rapide',   label: 'Vif d\'esprit',      desc: 'Répondre juste en moins de 5 secondes 10 fois.',
      check: () => ((state.user.quizCounters || {}).fastCorrect || 0) >= 10 },
    { id: 'revision-pro',  label: 'Réviseur',           desc: '20 questions rattrapées en mode Révision.',
      check: () => ((state.user.quizCounters || {}).revisionCorrect || 0) >= 20 },
    { id: 'quotidien-7',   label: 'Habitué du jour',    desc: '7 quiz du jour complétés.',
      check: () => {
        // Jours distincts où le quiz du jour a été terminé. La liste
        // dailyQuizDates est maintenue par renderDailyQuizFinal, donc
        // jamais perdue par le capping du quizLog.
        const dates = Array.isArray(state.user.dailyQuizDates) ? state.user.dailyQuizDates : [];
        return new Set(dates).size >= 7;
      } },
    { id: 'defi-sans-faute', label: 'Sang-froid',       desc: 'Sans-faute sur un Mode Défi complet (10 questions).',
      check: () => ((state.user.quizCounters || {}).defiBestStreakInRow || 0) >= 10 },
    { id: 'maitre-domaine', label: 'Maître d\'un domaine', desc: 'Tous les quiz d\'un même domaine répondus parfaitement.',
      check: () => {
        const qs = state.user.quizScores || {};
        const perfectByDomain = {};
        const totalByDomain = {};
        state.sujetsOrder.forEach(id => {
          const s = state.sujets[id];
          if (!s || !Array.isArray(s.quiz) || s.quiz.length === 0) return;
          const doms = s.meta.domaines || [];
          doms.forEach(d => {
            totalByDomain[d] = (totalByDomain[d] || 0) + 1;
            const sc = qs[id];
            if (sc && sc.total && sc.best === sc.total) {
              perfectByDomain[d] = (perfectByDomain[d] || 0) + 1;
            }
          });
        });
        return Object.keys(totalByDomain).some(d => totalByDomain[d] >= 2 && perfectByDomain[d] === totalByDomain[d]);
      } },
    // ----- Nouveaux succès -----
    // Récompensent des facettes encore non couvertes : volume de sujets
    // visités, longueur de cours, prise de notes, surlignage et fidélité.
    { id: 'bibliothecaire', label: 'Bibliothécaire',     desc: '30 sujets différents ouverts au moins une fois.',
      check: () => Object.values(state.user.progress || {}).filter(p => p && p.visited).length >= 30 },
    { id: 'polyhistor',     label: 'Polyhistor',          desc: '10 domaines différents explorés.',
      check: () => {
        const visited = Object.keys(state.user.progress || {}).filter(id => state.user.progress[id].visited);
        const domains = new Set();
        visited.forEach(id => {
          const s = state.sujets[id];
          if (s) (s.meta.domaines || []).forEach(d => domains.add(d));
        });
        return domains.size >= 10;
      } },
    { id: 'longue-traite',  label: 'Longue traite',       desc: 'Lire intégralement un cours de 12 blocs ou plus.',
      check: () => {
        const prog = state.user.progress || {};
        return Object.keys(prog).some(id => {
          const s = state.sujets[id];
          return s && Array.isArray(s.cours) && s.cours.length >= 12
            && (prog[id].courseProgress || 0) >= 100;
        });
      } },
    { id: 'cahier-rempli',  label: 'Cahier bien rempli',  desc: '500 mots écrits dans le cahier libre transverse.',
      check: () => {
        const n = state.user.globalNotes || '';
        const words = n.trim() === '' ? 0 : n.trim().split(/\s+/).length;
        return words >= 500;
      } },
    { id: 'annotateur',     label: 'Annotateur',          desc: '10 blocs surlignés à travers le carnet.',
      check: () => {
        const h = state.user.highlights || {};
        let n = 0;
        Object.values(h).forEach(arr => { if (Array.isArray(arr)) n += arr.length; });
        return n >= 10;
      } },
    { id: 'centenaire',     label: 'Cent jours',          desc: '100 jours d\'activité distincts dans le carnet.',
      check: () => Object.keys(state.user.dailyActivity || {}).length >= 100 },
    // ---- Achievements Mode Champion ----
    { id: 'champion-4',     label: 'Premier sacre',       desc: 'Gagner ta première manche "4 à la suite".',
      check: () => {
        const q = ((state.user.champion || {}).quatreSuite) || {};
        return Object.values(q).some(x => (x && x.wins) > 0);
      } },
    { id: 'champion-finale', label: 'Finaliste',          desc: 'Atteindre 10 pts en "Finale 1 minute" sur n\'importe quel domaine.',
      check: () => {
        const f = ((state.user.champion || {}).finale) || {};
        return Object.values(f).some(x => (x && x.bestScore) >= 10);
      } },
    { id: 'champion-9pts',  label: '9 points gagnants',   desc: 'Gagner une partie "9 points gagnants".',
      check: () => (((state.user.champion || {}).neufPoints) || {}).wins >= 1 },
    { id: 'champion-face',  label: 'Doublé',              desc: 'Battre ton propre record sur un face-à-face (12/12 ou n\'importe quel score > précédent).',
      check: () => {
        const f = ((state.user.champion || {}).faceAFace) || {};
        return Object.values(f).some(x => (x && x.bestScore) >= 8);
      } },
    { id: 'champion-grand-chelem', label: 'Grand chelem', desc: 'Avoir gagné au moins une fois dans chacune des 4 manches du Mode Champion.',
      check: () => {
        const c = state.user.champion || {};
        const hasQ = Object.values(c.quatreSuite || {}).some(x => (x && x.wins) > 0);
        const hasF = Object.values(c.finale || {}).some(x => (x && x.bestScore) >= 5);
        const has9 = ((c.neufPoints || {}).wins || 0) >= 1;
        const hasFace = Object.values(c.faceAFace || {}).some(x => (x && x.bestScore) >= 6);
        return hasQ && hasF && has9 && hasFace;
      } },
    // ---- Achievement Surlignages ----
    { id: 'surligneur',     label: 'Surligneur',          desc: 'Surligner 10 passages de cours.',
      check: () => {
        const ph = state.user.passageHighlights || {};
        let n = 0;
        Object.values(ph).forEach(arr => { if (Array.isArray(arr)) n += arr.length; });
        return n >= 10;
      } }
  ];

  function checkAchievements() {
    if (!state.user) return;
    if (!Array.isArray(state.user.achievements)) state.user.achievements = [];
    const unlocked = state.user.achievements;
    const newly = [];
    ACHIEVEMENTS.forEach(a => {
      if (unlocked.indexOf(a.id) >= 0) return;
      try {
        if (a.check()) {
          unlocked.push(a.id);
          newly.push(a);
        }
      } catch (e) { /* ignore */ }
    });
    if (newly.length > 0) {
      saveUserState();
      newly.forEach((a, i) => setTimeout(() => showAchievementToast(a), i * 600));
    }
  }

  function showAchievementToast(achievement) {
    const toast = el('div', { class: 'achievement-toast' },
      el('div', { class: 'achievement-toast-eyebrow' }, 'Succès débloqué'),
      el('div', { class: 'achievement-toast-label' }, '✦ ' + achievement.label),
      el('div', { class: 'achievement-toast-desc' }, achievement.desc)
    );
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
    }, 4500);
  }

  // ---------------------------------------------------------------
  // TRACKING FIN DES RÉPONSES (par-question, log chronologique, streak)
  // ---------------------------------------------------------------
  // Centralise l'enregistrement de chaque réponse, peu importe le type
  // de question et le mode (quiz d'un sujet / mixte / révision / défi).
  // C'est ça qui nourrit les stats par domaine, le mode Révision, les
  // achievements quiz et le streak temps réel.

  function recordQuizAnswer(opts) {
    if (!state.user) return;
    const sujetId = opts.sujetId || null;
    const qIdx = (typeof opts.qIdx === 'number') ? opts.qIdx : -1;
    const correct = !!opts.correct;
    const type = opts.type || 'qcm';
    const durationMs = (typeof opts.durationMs === 'number') ? opts.durationMs : null;
    const mode = opts.mode || 'sujet';
    const nowIso = new Date().toISOString();

    // 1. Aggregé par-question pour le sujet
    if (sujetId && qIdx >= 0) {
      if (!state.user.quizAnswers) state.user.quizAnswers = {};
      if (!state.user.quizAnswers[sujetId]) state.user.quizAnswers[sujetId] = {};
      const cell = state.user.quizAnswers[sujetId][qIdx] ||
        { ok: 0, ko: 0, lastCorrect: false, lastAttempt: null };
      if (correct) cell.ok++; else cell.ko++;
      cell.lastCorrect = correct;
      cell.lastAttempt = nowIso;
      state.user.quizAnswers[sujetId][qIdx] = cell;
    }

    // 2. Log chronologique capé
    if (!Array.isArray(state.user.quizLog)) state.user.quizLog = [];
    state.user.quizLog.push({
      date: nowIso,
      sujetId: sujetId,
      qIdx: qIdx,
      type: type,
      correct: correct,
      durationMs: durationMs,
      mode: mode
    });
    if (state.user.quizLog.length > 500) {
      state.user.quizLog = state.user.quizLog.slice(-500);
    }

    // 3. Streak temps réel
    if (!state.user.quizStreak || typeof state.user.quizStreak.current !== 'number') {
      state.user.quizStreak = { current: 0, best: 0 };
    }
    if (correct) {
      state.user.quizStreak.current++;
      if (state.user.quizStreak.current > state.user.quizStreak.best) {
        state.user.quizStreak.best = state.user.quizStreak.current;
      }
    } else {
      state.user.quizStreak.current = 0;
    }

    // 4. Compteurs cumulatifs jamais capés : nourrissent les achievements
    //    de volume sans dépendre du quizLog tronqué à 500 entrées.
    if (!state.user.quizCounters || typeof state.user.quizCounters.totalAnswered !== 'number') {
      state.user.quizCounters = {
        totalAnswered: 0, totalCorrect: 0, fastCorrect: 0,
        revisionCorrect: 0, defiBestStreakInRow: 0
      };
    }
    const ctr = state.user.quizCounters;
    ctr.totalAnswered++;
    if (correct) ctr.totalCorrect++;
    if (correct && durationMs && durationMs > 0 && durationMs < 5000) ctr.fastCorrect++;
    if (correct && mode === 'revision') ctr.revisionCorrect++;
    // Streak interne au mode Défi : on track le record de bonnes consécutives
    // strictement entre questions de mode defi (réinitialisé sur erreur).
    if (mode === 'defi') {
      if (correct) {
        ctr._defiCurrent = (ctr._defiCurrent || 0) + 1;
        if (ctr._defiCurrent > ctr.defiBestStreakInRow) {
          ctr.defiBestStreakInRow = ctr._defiCurrent;
        }
      } else {
        ctr._defiCurrent = 0;
      }
    }

    saveUserState();
    // Vérifie les achievements quiz (streak, nb questions, etc.) à chaque réponse
    checkAchievements();
  }

  // Helper : retourne la liste des questions ratées au moins une fois et
  // jamais résolues correctement depuis (utile pour le mode Révision).
  function getQuestionsToReview() {
    const out = [];
    const qa = state.user.quizAnswers || {};
    Object.keys(qa).forEach(sujetId => {
      const sujet = state.sujets[sujetId];
      if (!sujet || !Array.isArray(sujet.quiz)) return;
      Object.keys(qa[sujetId]).forEach(qIdxStr => {
        const qIdx = parseInt(qIdxStr, 10);
        const cell = qa[sujetId][qIdxStr];
        // À réviser si on a déjà raté ET la dernière tentative n'a pas été correcte
        if (cell.ko > 0 && !cell.lastCorrect) {
          const q = sujet.quiz[qIdx];
          if (q) out.push({ sujet: sujet, q: q, qIdx: qIdx });
        }
      });
    });
    return out;
  }

  // Stats globales du quiz
  function computeQuizStats() {
    const log = Array.isArray(state.user.quizLog) ? state.user.quizLog : [];
    const totalAnswered = log.length;
    const totalCorrect = log.filter(e => e.correct).length;
    const successRate = totalAnswered ? totalCorrect / totalAnswered : 0;
    // Sujets complétés (≥1 réponse) et nombre à 100% sur best
    const quizScores = state.user.quizScores || {};
    const sujetsAttempted = Object.keys(quizScores).length;
    const sujetsPerfect = Object.values(quizScores).filter(s => s.total && s.best === s.total).length;
    // Stats par domaine
    const byDomain = {}; // domain -> { ok, total }
    log.forEach(e => {
      if (!e.sujetId) return;
      const sujet = state.sujets[e.sujetId];
      if (!sujet) return;
      (sujet.meta.domaines || ['Autre']).forEach(d => {
        if (!byDomain[d]) byDomain[d] = { ok: 0, total: 0 };
        byDomain[d].total++;
        if (e.correct) byDomain[d].ok++;
      });
    });
    return {
      totalAnswered: totalAnswered,
      totalCorrect: totalCorrect,
      successRate: successRate,
      sujetsAttempted: sujetsAttempted,
      sujetsPerfect: sujetsPerfect,
      streakCurrent: (state.user.quizStreak || {}).current || 0,
      streakBest: (state.user.quizStreak || {}).best || 0,
      byDomain: byDomain,
      toReview: getQuestionsToReview().length
    };
  }

  // ---------------------------------------------------------------
  // SPACED REPETITION (par quiz entier, algorithme SM-2 simplifié)
  // ---------------------------------------------------------------

  function updateSpacedRepetition(sujetId, score, total) {
    if (!state.user.spacedRep) state.user.spacedRep = {};
    const sr = state.user.spacedRep[sujetId] || { interval: 0, easeFactor: 2.5, repetitions: 0 };
    const successRate = total > 0 ? score / total : 0;
    const quality = Math.round(successRate * 5); // 0..5

    if (quality < 3) {
      sr.repetitions = 0;
      sr.interval = 1;
    } else {
      sr.repetitions = (sr.repetitions || 0) + 1;
      if (sr.repetitions === 1)      sr.interval = 1;
      else if (sr.repetitions === 2) sr.interval = 6;
      else                           sr.interval = Math.round(sr.interval * (sr.easeFactor || 2.5));
      sr.easeFactor = Math.max(1.3,
        (sr.easeFactor || 2.5) + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
      );
    }

    const next = new Date();
    next.setDate(next.getDate() + sr.interval);
    sr.nextReview = dateKey(next);
    sr.lastReview = dateKey(new Date());

    state.user.spacedRep[sujetId] = sr;
    saveUserState();
  }

  function getDueQuizzes() {
    const today = dateKey(new Date());
    const due = [];
    Object.entries(state.user.spacedRep || {}).forEach(([id, sr]) => {
      if (!state.sujets[id]) return;
      if (sr.nextReview && sr.nextReview <= today) {
        due.push({ id, sr });
      }
    });
    return due;
  }

  // Jours depuis la dernière activité (pour le banner d'absence)
  function daysSinceLastActivity() {
    const da = (state.user && state.user.dailyActivity) || {};
    const dates = Object.keys(da).filter(k => dailyIntensity(da[k]) > 0).sort().reverse();
    if (dates.length === 0) return null;
    const last = parseDateKey(dates[0]);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((today - last) / 86400000);
  }

  // =================================================================
  // TAB: RÉSUMÉ
  // =================================================================

  function renderTabResume(container, sujet) {
    container.appendChild(el('p', { class: 'lead', html: md(sujet.resume || '').replace(/^<p>|<\/p>$/g, '') }));

    if (sujet.points_cles && sujet.points_cles.length > 0) {
      container.appendChild(el('h3', null, 'Points-clés'));
      const list = el('ul', { class: 'keypoint-list' });
      sujet.points_cles.forEach(pt => {
        list.appendChild(el('li', {
          class: 'keypoint-item',
          html: '<span class="keypoint-bullet">✦</span>' + md(pt).replace(/^<p>|<\/p>$/g, '')
        }));
      });
      container.appendChild(list);
    }

    // Bouton flashcards : sourcé depuis carte_mentale.noeuds (chaque nœud
    // a déjà un label = terme et une description = définition). N'apparaît
    // que si le sujet a des nœuds avec une description.
    const flashCards = ((sujet.carte_mentale && sujet.carte_mentale.noeuds) || [])
      .filter(n => n && n.label && n.description);
    if (flashCards.length > 0) {
      container.appendChild(el('button', {
        class: 'btn btn-secondary',
        style: { marginTop: '1.5rem' },
        onclick: () => openFlashcardsMode(sujet)
      }, 'Réviser les concepts en flashcards →'));
    }

    // Notes personnelles
    container.appendChild(el('h3', { style: { marginTop: '3rem' } }, 'Mes notes personnelles'));
    const notes = state.user.notes[sujet.meta.id] || '';
    const status = el('div', { class: 'notes-status' }, notes ? 'Sauvegardé' : 'Vos notes seront sauvegardées automatiquement.');
    const textarea = el('textarea', {
      class: 'notes-area',
      placeholder: 'Écris ici tes propres réflexions, questions à creuser, liens avec d\'autres sujets…'
    });
    textarea.value = notes;
    let saveTimer = null;
    textarea.addEventListener('input', () => {
      // Une note vide n'est pas stockée (évite les clés fantômes)
      if (textarea.value.trim()) state.user.notes[sujet.meta.id] = textarea.value;
      else delete state.user.notes[sujet.meta.id];
      status.textContent = 'Saisie en cours…';
      _pendingSave = true;
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        _pendingSave = false;
        saveUserState();
        status.textContent = 'Sauvegardé · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      }, 600);
    });
    textarea.addEventListener('blur', () => { if (_pendingSave) { clearTimeout(saveTimer); _pendingSave = false; saveUserState(); status.textContent = 'Sauvegardé'; } });
    container.appendChild(textarea);
    container.appendChild(status);

    // Sujets liés
    if (sujet.meta.lie_a && sujet.meta.lie_a.length > 0) {
      const linked = sujet.meta.lie_a.map(id => state.sujets[id]).filter(Boolean);
      if (linked.length > 0) {
        container.appendChild(el('h3', { style: { marginTop: '3rem' } }, 'Sujets liés'));
        const grid = el('div', { class: 'sujet-grid' }, ...linked.map(s => sujetCard(s)));
        container.appendChild(grid);
      }
    }

    // ---- Backlinks : qui cite ce sujet ? ----
    // Lecture du maillage à l'envers : utile pour repérer les sujets-hubs
    // et remonter le fil d'une notion d'un sujet à l'autre.
    renderBacklinksPanel(container, sujet.meta.id);
  }

  // Panneau "Qui cite ce sujet ?" — affiché en bas de l'onglet Résumé.
  // Agrège les sources par sujet, montre les snippets cliquables.
  function renderBacklinksPanel(container, targetSlug) {
    const entries = getBacklinksFor(targetSlug);
    if (!entries.length) return;
    // Groupe par source
    const bySource = {};
    entries.forEach(e => {
      if (!bySource[e.sourceId]) bySource[e.sourceId] = { lie_a: false, citations: [] };
      if (e.via === 'lie_a') bySource[e.sourceId].lie_a = true;
      else bySource[e.sourceId].citations.push(e);
    });
    const sources = Object.keys(bySource);
    if (!sources.length) return;

    const sec = el('section', { class: 'backlinks-panel' });
    sec.appendChild(el('h3', { class: 'backlinks-title' },
      'Qui cite ce sujet'));
    sec.appendChild(el('p', { class: 'backlinks-sub' },
      sources.length + ' sujet' + (sources.length > 1 ? 's' : '') + ' du carnet pointe' + (sources.length > 1 ? 'nt' : '') + ' vers cette fiche.'));

    const list = el('div', { class: 'backlinks-list' });
    sources.forEach(srcId => {
      const src = state.sujets[srcId];
      if (!src) return;
      const dom = (src.meta.domaines || ['Autre'])[0];
      const dotColor = domainColor(dom);
      const info = bySource[srcId];
      const item = el('div', { class: 'backlinks-item', style: { '--bl-color': dotColor } });
      const head = el('div', { class: 'backlinks-item-head' });
      head.appendChild(el('span', { class: 'backlinks-dot' }));
      head.appendChild(el('a', {
        class: 'backlinks-sujet-link',
        href: '#/sujet/' + encodeURIComponent(srcId),
        onclick: (e) => { e.preventDefault(); navigate('/sujet/' + encodeURIComponent(srcId)); },
        html: htmlEscapeButKeepEm(src.meta.titre)
      }));
      const tags = [];
      if (info.lie_a) tags.push('lien direct');
      if (info.citations.length) tags.push(info.citations.length + ' citation' + (info.citations.length > 1 ? 's' : ''));
      if (tags.length) head.appendChild(el('span', { class: 'backlinks-tag' }, tags.join(' · ')));
      item.appendChild(head);

      // Snippets : on en montre jusqu'à 3, le reste est replié
      const cites = info.citations;
      if (cites.length) {
        const snippetsWrap = el('div', { class: 'backlinks-snippets' });
        cites.slice(0, 3).forEach(c => {
          if (!c.snippet) return;
          let path = '/sujet/' + encodeURIComponent(srcId);
          if (c.blockIdx >= 0) path += '/cours/bloc-' + c.blockIdx;
          else if (c.blockIdx === -2) path += '/carte';
          else path += '/resume';
          const sn = el('a', {
            class: 'backlinks-snippet',
            href: '#' + path,
            title: 'Ouvrir ce passage dans « ' + String(src.meta.titre).replace(/<[^>]+>/g, '') + ' »',
            onclick: (e) => { e.preventDefault(); navigate(path); }
          },
            el('span', { class: 'backlinks-snippet-loc' }, c.blockTitle || 'Cité'),
            el('span', { class: 'backlinks-snippet-text' }, c.snippet)
          );
          snippetsWrap.appendChild(sn);
        });
        if (cites.length > 3) {
          snippetsWrap.appendChild(el('span', { class: 'backlinks-more' },
            '+ ' + (cites.length - 3) + ' autre' + (cites.length - 3 > 1 ? 's' : '') + ' citation' + (cites.length - 3 > 1 ? 's' : '')));
        }
        item.appendChild(snippetsWrap);
      }
      list.appendChild(item);
    });
    sec.appendChild(list);
    container.appendChild(sec);
  }

  // =================================================================
  // MODE PRÉSENTATION (overlay plein écran qui parcourt les blocs)
  // =================================================================

  function openPresentationMode(sujet) {
    if (!sujet.cours || sujet.cours.length === 0) return;

    let idx = 0;
    const total = sujet.cours.length;

    const overlay = el('div', { class: 'presentation-overlay' });
    const closeBtn = el('button', { class: 'presentation-close', title: 'Quitter (Esc)' }, '✕');
    const counter = el('div', { class: 'presentation-counter' });
    const slide = el('div', { class: 'presentation-slide' });
    const slideContent = el('div', { class: 'presentation-content' });
    slide.appendChild(slideContent);
    const prevBtn = el('button', { class: 'presentation-nav presentation-prev', title: 'Précédent (←)' }, '‹');
    const nextBtn = el('button', { class: 'presentation-nav presentation-next', title: 'Suivant (→)' }, '›');

    overlay.appendChild(closeBtn);
    overlay.appendChild(counter);
    overlay.appendChild(prevBtn);
    overlay.appendChild(slide);
    overlay.appendChild(nextBtn);

    function update() {
      const block = sujet.cours[idx];
      counter.textContent = (idx + 1) + ' / ' + total;
      clear(slideContent);
      try {
        const node = renderBlock(block, sujet);
        if (node) slideContent.appendChild(node);
        else slideContent.appendChild(el('p', null, '(bloc vide)'));
      } catch (e) {
        slideContent.appendChild(el('p', { class: 'block-error' }, 'Bloc non affichable.'));
      }
      slide.scrollTop = 0;
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === total - 1;
    }

    function next() { if (idx < total - 1) { idx++; update(); } }
    function prev() { if (idx > 0) { idx--; update(); } }
    function close() { unmountOverlay(overlay); }

    function onKey(e) {
      if (e.key === 'Escape') { close(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { next(); e.preventDefault(); }
      else if (e.key === 'PageUp') { prev(); e.preventDefault(); }
    }

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    if (!mountOverlay(overlay, close, onKey)) return;
    update();
  }

  // =================================================================
  // MODE FLASHCARDS (overlay plein écran sur les points-clés)
  // =================================================================
  // Présente les points-clés un par un. La face avant invite à se
  // remémorer le point ; clic / espace / Entrée révèle la face arrière
  // (le contenu réel). Flèches gauche/droite pour naviguer, Esc pour
  // quitter. Pas de scoring, juste une mécanique de rappel actif.

  function openFlashcardsMode(sujet) {
    // Source : nœuds de la carte mentale qui ont une description.
    // label → recto (terme à reconnaître), description → verso (définition).
    const noeuds = (sujet.carte_mentale && sujet.carte_mentale.noeuds) || [];
    const cards = noeuds.filter(n => n && n.label && n.description);
    if (cards.length === 0) return;

    let idx = 0;
    let revealed = false;

    const overlay = el('div', { class: 'flashcards-overlay' });

    const closeBtn = el('button', { class: 'flashcard-close', title: 'Quitter (Esc)' }, '✕');
    const counter = el('div', { class: 'flashcard-counter' });
    const card = el('div', { class: 'flashcard', title: 'Cliquer pour révéler la définition' });
    const cardInner = el('div', { class: 'flashcard-inner' });
    const cardFront = el('div', { class: 'flashcard-face flashcard-front' });
    const cardBack = el('div', { class: 'flashcard-face flashcard-back' });
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    const prevBtn = el('button', { class: 'btn btn-secondary' }, '← Précédent');
    const flipBtn = el('button', { class: 'btn' }, 'Voir la définition');
    const nextBtn = el('button', { class: 'btn btn-secondary' }, 'Suivant →');
    const controls = el('div', { class: 'flashcard-controls' }, prevBtn, flipBtn, nextBtn);

    const hint = el('div', { class: 'flashcard-hint' },
      'Espace ou Entrée pour retourner la carte · ← → pour naviguer · Esc pour quitter');

    overlay.appendChild(closeBtn);
    overlay.appendChild(counter);
    overlay.appendChild(card);
    overlay.appendChild(controls);
    overlay.appendChild(hint);

    function escapeHtml(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function update() {
      const titre = String(sujet.meta.titre).replace(/<[^>]+>/g, '');
      const node = cards[idx];
      counter.textContent = 'Carte ' + (idx + 1) + ' / ' + cards.length + ' — ' + titre;
      cardFront.innerHTML = '<span class="flashcard-term">' + escapeHtml(node.label) + '</span>' +
        '<span class="flashcard-prompt-sub">(souviens-toi de la définition, puis retourne la carte)</span>';
      cardBack.innerHTML = md(node.description).replace(/^<p>|<\/p>$/g, '');
      card.classList.toggle('is-flipped', revealed);
      flipBtn.textContent = revealed ? 'Cacher la définition' : 'Voir la définition';
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === cards.length - 1;
    }

    function flip() { revealed = !revealed; update(); }
    function next() { if (idx < cards.length - 1) { idx++; revealed = false; update(); } }
    function prev() { if (idx > 0) { idx--; revealed = false; update(); } }
    function close() { unmountOverlay(overlay); }

    function onKey(e) {
      if (e.key === 'Escape')      { close(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft')  { prev(); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
      else if (e.key === ' ' || e.key === 'Enter') { flip(); e.preventDefault(); }
    }

    closeBtn.addEventListener('click', close);
    flipBtn.addEventListener('click', flip);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    card.addEventListener('click', flip);
    if (!mountOverlay(overlay, close, onKey)) return;
    update();
  }

  // =================================================================
  // TAB: COURS
  // =================================================================

  function renderTabCours(container, sujet, blockTarget) {
    if (!sujet.cours || sujet.cours.length === 0) {
      container.appendChild(el('p', { class: 'lead' }, 'Le cours de ce sujet n\'est pas encore rédigé.'));
      return;
    }

    // Bouton "Mode lecture" en haut à droite — masque la sidebar et élargit
    // la colonne pour les longues sessions de lecture. Le toggle ne fait
    // pas un rerender (pour préserver la position de scroll), juste une
    // bascule de classe sur <body>.
    const topbar = el('div', { class: 'cours-topbar' });
    const readingBtn = el('button', { class: 'reading-toggle' });
    function syncReadingBtn() {
      const on = !!state.user.readingMode;
      readingBtn.classList.toggle('on', on);
      readingBtn.textContent = on ? '← Quitter le mode lecture' : 'Mode lecture →';
      readingBtn.title = on ? 'Revenir à la vue normale' : 'Masquer la sidebar et élargir la colonne de lecture';
    }
    readingBtn.addEventListener('click', () => {
      state.user.readingMode = !state.user.readingMode;
      saveUserState();
      document.body.classList.toggle('reading-mode', state.user.readingMode);
      syncReadingBtn();
    });
    syncReadingBtn();
    topbar.appendChild(readingBtn);

    // Bouton mode présentation : ouvre un overlay plein écran qui parcourt
    // les blocs un par un avec navigation clavier (← → / Esc).
    const presentBtn = el('button', {
      class: 'reading-toggle',
      title: 'Voir les blocs un par un en plein écran',
      onclick: () => openPresentationMode(sujet)
    }, 'Présentation →');
    topbar.appendChild(presentBtn);

    // Bouton Pomodoro : panneau flottant 25/5 min
    const pomoBtn = el('button', {
      class: 'reading-toggle',
      title: 'Timer pomodoro 25 min de travail / 5 min de pause',
      onclick: togglePomodoro
    }, 'Pomodoro');
    topbar.appendChild(pomoBtn);

    container.appendChild(topbar);

    // Bandeau "Reprendre" : affiche où on en était à la dernière session.
    // Visible seulement si on a déjà lu au moins un bloc.
    const _curProg = state.user.progress[sujet.meta.id];
    const _prevSeen = (_curProg && Array.isArray(_curProg.seenBlocks))
      ? _curProg.seenBlocks.filter(i => Number.isInteger(i) && i >= 0 && i < sujet.cours.length)
      : [];
    if (_prevSeen.length > 0) {
      const totalBlocks = sujet.cours.length;
      const lastSeenIdx = Math.max.apply(null, _prevSeen);
      const completed = _prevSeen.length === totalBlocks;
      const banner = el('div', { class: 'resume-banner' });

      // Action commune : efface la progression de lecture (utilisée à la
      // fois pour le bouton "Recommencer le cours" quand c'est fini, et
      // pour le lien discret "réinitialiser" en cours de lecture.
      function resetProgress() {
        const titre = String(sujet.meta.titre || sujet.meta.id).replace(/<[^>]+>/g, '');
        const ok = confirm(
          'Effacer ta progression de lecture sur « ' + titre + ' » ?\n\n' +
          'Les ✓ disparaîtront et le bandeau repartira à zéro.\n' +
          'Tes notes, favoris, scores quiz et heatmap ne sont pas touchés.'
        );
        if (!ok) return;
        const cur = state.user.progress[sujet.meta.id];
        if (cur) { delete cur.seenBlocks; cur.courseProgress = 0; }
        saveUserState();
        rerender();
      }

      if (completed) {
        // Cours terminé : on n'incite plus à "reprendre" (ça n'a pas de
        // sens, tout est lu) mais on garde la possibilité explicite de
        // tout recommencer à zéro.
        banner.appendChild(el('span', { class: 'resume-banner-msg' },
          'Tu as parcouru tous les blocs de ce cours.'));
        banner.appendChild(el('button', {
          class: 'btn',
          title: 'Effacer ta progression et revenir au tout début du cours',
          onclick: () => {
            resetProgress();
            // rerender va recréer la vue ; on n'a pas besoin de scroller
            // manuellement, le cours repart en haut naturellement.
          }
        }, 'Recommencer le cours'));
      } else {
        // Lecture en cours : on propose de reprendre + un lien discret
        // pour tout réinitialiser si l'utilisateur veut repartir.
        const resetLink = el('button', {
          class: 'resume-banner-reset',
          title: 'Effacer ta progression de lecture sur ce sujet',
          onclick: resetProgress
        }, 'réinitialiser');

        let resumeIdx = lastSeenIdx + 1;
        while (resumeIdx < totalBlocks && _prevSeen.indexOf(resumeIdx) >= 0) resumeIdx++;
        if (resumeIdx >= totalBlocks) resumeIdx = lastSeenIdx;
        banner.appendChild(el('span', { class: 'resume-banner-msg' },
          `Tu en étais au bloc ${lastSeenIdx + 1} sur ${totalBlocks}. Reprendre la lecture ?`));
        banner.appendChild(resetLink);
        banner.appendChild(el('button', {
          class: 'btn',
          onclick: () => {
            const target = container.querySelector('[data-block-idx="' + resumeIdx + '"]');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 'Reprendre →'));
      }
      container.appendChild(banner);
    }

    // Mini table des matières — listée à gauche en sticky.
    // Construite depuis les blocs du cours qui ont un titre. Si moins de
    // 2 blocs titrés, on n'affiche pas de TOC (overkill pour un cours court).
    const tocEntries = [];
    const titledBlocks = sujet.cours
      .map((b, i) => ({ b, i }))
      .filter(({ b }) => b && b.titre);

    let tocNode = null;
    let tocCounter = null;
    if (titledBlocks.length >= 2) {
      tocNode = el('nav', { class: 'cours-toc', 'aria-label': 'Plan du cours' });
      tocNode.appendChild(el('h4', { class: 'cours-toc-heading' }, 'Plan'));
      tocCounter = el('div', { class: 'cours-toc-counter' });
      tocNode.appendChild(tocCounter);
      titledBlocks.forEach(({ b, i }) => {
        const cleanTitre = String(b.titre).replace(/<[^>]+>/g, '');
        const entry = el('a', {
          class: 'cours-toc-entry',
          'data-cours-target': String(i),
          href: '#',
          onclick: (e) => {
            e.preventDefault();
            const target = container.querySelector('.course-block[data-block-idx="' + i + '"], .block-error[data-block-idx="' + i + '"]');
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, cleanTitre);
        tocNode.appendChild(entry);
        tocEntries.push(entry);
      });
    }

    // Rendu de chaque bloc, isolé par try/catch pour qu'un bloc défectueux
    // ne casse pas l'affichage du reste du cours. Si la TOC existe, on
    // structure en 2 colonnes (TOC à gauche, contenu à droite).
    let blocksHost = container;
    if (tocNode) {
      const layout = el('div', { class: 'cours-layout' });
      layout.appendChild(tocNode);
      const contentCol = el('div', { class: 'cours-content' });
      layout.appendChild(contentCol);
      container.appendChild(layout);
      blocksHost = contentCol;
    }

    const blockNodes = [];
    sujet.cours.forEach((block, i) => {
      let node = null;
      try {
        node = renderBlock(block, sujet);
      } catch (e) {
        console.error(`[CarnetDeSavoirs] Erreur de rendu cours[${i}]`, e, block);
        node = el('div', { class: 'block-error course-block' },
          `⚠ Bloc n°${i + 1} non affichable (${block && block.type ? `type "${block.type}"` : 'type inconnu'}` +
          (e && e.message ? ` — ${e.message}` : '') + ').'
        );
      }
      if (node) {
        node.dataset.blockIdx = String(i);
        node.id = 'bloc-' + i; // Permet aux liens #bloc-N (depuis la page Notes) de scroller au bon endroit
        // Bouton de surlignage (étoile) — visible au survol ou si déjà actif
        const isHl = isBlockHighlighted(sujet.meta.id, i);
        if (isHl) node.classList.add('block-highlighted');
        const hlBtn = el('button', {
          class: 'block-highlight-btn' + (isHl ? ' is-on' : ''),
          title: isHl ? 'Retirer le surlignage' : 'Marquer ce bloc comme important',
          onclick: (e) => {
            e.stopPropagation();
            const newState = toggleBlockHighlight(sujet.meta.id, i);
            node.classList.toggle('block-highlighted', newState);
            hlBtn.classList.toggle('is-on', newState);
            hlBtn.title = newState ? 'Retirer le surlignage' : 'Marquer ce bloc comme important';
          }
        }, '★');
        node.appendChild(hlBtn);
        blocksHost.appendChild(node);
        blockNodes.push(node);
        // Restitution des passages déjà surlignés (granularité texte)
        try { applyPassageHighlights(node, sujet.meta.id, i); } catch (e) { console.warn('passage highlight', e); }
      }
    });

    // --- Surlignage de passages : sélection → popup "Surligner" ---
    // Écoute la sélection à l'intérieur de blocksHost. Quand l'utilisateur
    // sélectionne du texte qui touche un .course-block, on affiche un mini
    // bouton flottant près de la sélection. Le clic enregistre le passage.
    setupPassageSelection(blocksHost, sujet.meta.id);
    // Toggle au clic sur un passage déjà surligné
    blocksHost.addEventListener('click', (e) => {
      const mk = e.target.closest('.passage-mark');
      if (!mk) return;
      // Si l'utilisateur est en train de sélectionner du texte, ne pas toggler
      const sel = window.getSelection();
      if (sel && sel.toString().length > 0) return;
      const block = mk.closest('[data-block-idx]');
      if (!block) return;
      const blockIdx = parseInt(block.dataset.blockIdx, 10);
      const txt = mk.dataset.phText;
      if (removePassageHighlight(sujet.meta.id, blockIdx, txt)) {
        rerender();
      }
    });

    // CTA de fin de cours : raccourci vers le quiz du sujet pour celles et
    // ceux qui ont fini de lire et veulent vérifier tout de suite. Apparaît
    // uniquement si le sujet a un quiz (la plupart en ont, mais pas tous).
    if (Array.isArray(sujet.quiz) && sujet.quiz.length > 0) {
      const endCta = el('div', { class: 'cours-end-cta' });
      endCta.appendChild(el('span', { class: 'cours-end-cta-label' },
        'Tu as fini le cours ?'));
      endCta.appendChild(el('button', {
        class: 'btn primary',
        onclick: () => navigate('/sujet/' + encodeURIComponent(sujet.meta.id) + '/quiz')
      }, 'Tester avec le quiz (' + sujet.quiz.length + ' questions) →'));
      blocksHost.appendChild(endCta);
    }

    // Suivi de progression réelle : un bloc compte comme "lu" lorsqu'il
    // a été à au moins 50 % visible dans le viewport (ou entièrement
    // pour les petits blocs). courseProgress = nb de blocs vus / total.
    function updateTocCounter(seenCount, total) {
      if (!tocCounter) return;
      tocCounter.textContent = seenCount + ' / ' + total + ' parties lues';
      tocCounter.classList.toggle('is-complete', seenCount === total && total > 0);
    }
    setupCourseProgressTracking(sujet, blockNodes, tocEntries, updateTocCounter);

    // Scrollspy : met à jour l'entrée active de la TOC selon le scroll.
    if (tocNode && blockNodes.length > 0) {
      setupTocScrollspy(blockNodes, tocEntries, container);
    }

    // Cible de bloc passée par la route : scroll + flash transitoire
    // pour montrer où la citation [[slug]] se trouve.
    if (Number.isInteger(blockTarget) && blockTarget >= 0 && blockTarget < blockNodes.length) {
      requestAnimationFrame(() => {
        const target = blockNodes[blockTarget];
        if (!target) return;
        target.scrollIntoView({ behavior: 'auto', block: 'center' });
        target.classList.add('block-flash');
        setTimeout(() => target.classList.remove('block-flash'), 2400);
      });
    }
  }

  function setupTocScrollspy(blockNodes, tocEntries, container) {
    let rafId = null;

    function update() {
      rafId = null;
      if (!container.isConnected) return; // tab démonté

      // On considère "actif" le dernier bloc dont le top est passé au-dessus
      // d'un petit offset depuis le haut du viewport (évite les flickers).
      const offset = 120;
      const scrollTop = window.scrollY;
      let activeBlockIdx = -1;
      for (const block of blockNodes) {
        const top = block.getBoundingClientRect().top + scrollTop;
        if (top - offset <= scrollTop) {
          activeBlockIdx = parseInt(block.dataset.blockIdx, 10);
        } else {
          break;
        }
      }

      // Trouve la dernière entrée TOC dont la cible est <= activeBlockIdx
      let active = null;
      for (const entry of tocEntries) {
        const i = parseInt(entry.dataset.coursTarget, 10);
        if (i <= activeBlockIdx) active = entry;
        else break;
      }
      tocEntries.forEach(e => e.classList.toggle('active', e === active));
    }

    // Annule le scrollspy précédent (autre cours / autre onglet) pour ne
    // pas accumuler de listeners au fil des navigations.
    if (window._coursScrollAbort) window._coursScrollAbort.abort();
    const ctrl = new AbortController();
    window._coursScrollAbort = ctrl;

    window.addEventListener('scroll', () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    }, { passive: true, signal: ctrl.signal });

    // Calcul initial — décalé d'un frame pour laisser le layout s'établir
    requestAnimationFrame(update);
  }

  function setupCourseProgressTracking(sujet, blockNodes, tocEntries, onProgressChange) {
    const total = blockNodes.length;
    if (!total || typeof IntersectionObserver === 'undefined') return;

    const sujetId = sujet.meta.id;
    const cur = state.user.progress[sujetId];

    // Restaure le set des blocs déjà vus depuis localStorage
    const restored = (cur && Array.isArray(cur.seenBlocks)) ? cur.seenBlocks : [];
    const seen = new Set(restored.filter(i => Number.isInteger(i) && i >= 0 && i < total));

    // Helper : reflète l'état "vu" d'un bloc dans son entrée TOC correspondante
    function syncTocSeen(idx) {
      if (!tocEntries) return;
      const entry = tocEntries.find(e => parseInt(e.dataset.coursTarget, 10) === idx);
      if (entry) entry.classList.add('seen');
    }

    // Marqueur visuel "déjà lu" pour les blocs en provenance d'une session
    // précédente. Pré-coche au rendu (blocs et entrées TOC).
    blockNodes.forEach(n => {
      const idx = parseInt(n.dataset.blockIdx, 10);
      if (seen.has(idx)) {
        n.classList.add('block-seen');
        syncTocSeen(idx);
      }
    });
    if (typeof onProgressChange === 'function') onProgressChange(seen.size, total);

    function commit() {
      if (!cur) return;
      const pct = Math.round((seen.size / total) * 100);
      // On ne fait que monter (jamais redescendre la progression)
      if (pct > (cur.courseProgress || 0)) {
        cur.courseProgress = pct;
      }
      cur.seenBlocks = Array.from(seen).sort((a, b) => a - b);
      saveUserState();
      if (typeof onProgressChange === 'function') onProgressChange(seen.size, total);
    }

    // Debounce par bloc : un coup d'œil ne compte pas, il faut être resté
    // au moins DWELL_MS sur le bloc (visible >50% / >95% si petit). Évite
    // qu'un scroll rapide ou un repaint initial coche tous les blocs d'un coup.
    //
    // Cas spécial des blocs PLUS HAUTS QUE LE VIEWPORT (typiquement certains
    // widgets : Frise longue, GrilleCartes touffue, SchemaAnnote grand, carte
    // mentale en zoom élevé) : leur intersectionRatio plafonne mécaniquement
    // sous 0.5 (on ne peut jamais voir plus que le viewport / hauteur-bloc).
    // Pour ces blocs, on bascule sur un critère "viewport-relatif" :
    // visible dès que le bloc remplit au moins 60 % du viewport vertical.
    const DWELL_MS = 600;
    const dwellTimers = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const block = entry.target;
        const idx = parseInt(block.dataset.blockIdx, 10);
        if (seen.has(idx)) return;

        const vh = (entry.rootBounds && entry.rootBounds.height) || window.innerHeight;
        const small = block.offsetHeight < vh * 0.5;
        const tall  = block.offsetHeight > vh; // ne pourra jamais atteindre 0.5 d'intersectionRatio
        // Ratio "à quel point le bloc remplit-il l'écran" — utile pour les
        // grands widgets (en complément du ratio bloc-relatif standard).
        const viewportFill = entry.intersectionRect ? (entry.intersectionRect.height / vh) : 0;

        const visibleEnough = entry.isIntersecting && (
          small ? entry.intersectionRatio >= 0.95 :
          tall  ? viewportFill >= 0.6 :
                  entry.intersectionRatio >= 0.5
        );

        if (visibleEnough) {
          if (!dwellTimers.has(idx)) {
            const t = setTimeout(() => {
              dwellTimers.delete(idx);
              if (seen.has(idx)) return;
              seen.add(idx);
              block.classList.add('block-seen');
              syncTocSeen(idx);
              recordActivity('blocs', sujetId);
              commit();
            }, DWELL_MS);
            dwellTimers.set(idx, t);
          }
        } else {
          // Plus assez visible : on annule la mise au compteur en attente
          const t = dwellTimers.get(idx);
          if (t) { clearTimeout(t); dwellTimers.delete(idx); }
        }
      });
    // Seuils granulaires : les blocs très hauts ne déclenchent jamais 0.5,
    // il faut donc observer aussi des ratios plus bas (0.1, 0.25, 0.4) pour
    // que la callback se déclenche pendant que l'utilisateur scrolle.
    }, { threshold: [0.1, 0.25, 0.4, 0.5, 0.75, 0.95] });

    blockNodes.forEach(n => observer.observe(n));
    // Nettoyage au prochain rendu : sinon l'observer et les timers de dwell
    // survivent au DOM qu'ils observent (un bloc pouvait être coché « vu »
    // 600 ms après avoir quitté la page).
    onRerender(() => {
      observer.disconnect();
      dwellTimers.forEach(t => clearTimeout(t));
      dwellTimers.clear();
    });
  }

  // =================================================================
  // BLOCK / WIDGET RENDERING
  // =================================================================

  function renderBlock(block, sujet) {
    if (!block || !block.type) return null;
    switch (block.type) {
      case 'texte':
        return renderTexteBlock(block);
      case 'encadre':
        return renderEncadreBlock(block);
      case 'widget':
        return renderWidget(block);
      case 'html_libre':
        return renderHtmlLibre(block);
      case 'mini-quiz':
        return renderMiniQuizBlock(block);
      default:
        console.warn('Type de bloc inconnu:', block.type);
        return null;
    }
  }

  // Mini-quiz inline : une question simple en plein milieu du cours, sans
  // tracking ni score. L'utilisateur clique pour révéler la réponse. Idéal
  // pour ponctuer un passage dense d'une vérif rapide de compréhension.
  // Schéma : { type:'mini-quiz', q, reponse, indice? }
  function renderMiniQuizBlock(block) {
    const wrap = el('div', { class: 'mini-quiz course-block' });
    wrap.appendChild(el('span', { class: 'mini-quiz-label' }, 'Vérification'));
    if (block.q) {
      wrap.appendChild(el('div', { class: 'mini-quiz-q', html: md(block.q).replace(/^<p>|<\/p>$/g, '') }));
    }
    if (block.indice) {
      const indiceWrap = el('div', { class: 'mini-quiz-indice', html: '<em>Indice :</em> ' + md(block.indice).replace(/^<p>|<\/p>$/g, '') });
      wrap.appendChild(indiceWrap);
    }
    const answerWrap = el('div', { class: 'mini-quiz-answer' });
    if (block.reponse) {
      answerWrap.innerHTML = md(block.reponse).replace(/^<p>|<\/p>$/g, '');
    }
    answerWrap.style.display = 'none';
    const revealBtn = el('button', {
      class: 'mini-quiz-reveal',
      onclick: () => {
        if (answerWrap.style.display === 'none') {
          answerWrap.style.display = '';
          revealBtn.textContent = 'Masquer la réponse';
        } else {
          answerWrap.style.display = 'none';
          revealBtn.textContent = 'Révéler la réponse';
        }
      }
    }, 'Révéler la réponse');
    wrap.appendChild(revealBtn);
    wrap.appendChild(answerWrap);
    return wrap;
  }

  function renderTexteBlock(block) {
    const wrap = el('section', { class: 'course-block' });
    if (block.titre) wrap.appendChild(el('h2', { html: htmlEscapeButKeepEm(block.titre) }));
    if (block.contenu_md) {
      const div = el('div');
      div.innerHTML = md(block.contenu_md);
      wrap.appendChild(div);
    }
    return wrap;
  }

  function renderEncadreBlock(block) {
    const wrap = el('div', { class: 'keybox course-block' });
    if (block.label) wrap.appendChild(el('span', { class: 'keybox-label' }, block.label));
    const div = el('div');
    div.innerHTML = md(block.contenu_md || '');
    wrap.appendChild(div);
    return wrap;
  }

  function renderHtmlLibre(block) {
    const wrap = el('div', { class: 'course-block' });
    wrap.innerHTML = block.contenu || '';

    // Ré-active les <script> que innerHTML désactive
    wrap.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

    return wrap;
  }

  function renderWidget(block) {
    const wrap = el('section', { class: 'widget course-block' });
    if (block.titre) wrap.appendChild(el('div', { class: 'widget-title', html: '— ' + htmlEscapeButKeepEm(block.titre) }));
    const renderer = WIDGETS[block.composant];
    if (!renderer) {
      wrap.appendChild(el('p', { class: 'block-error' },
        `Widget inconnu : « ${block.composant} ». Composants disponibles : ${Object.keys(WIDGETS).join(', ')}.`));
      return wrap;
    }
    try {
      const inner = renderer(block.params || {});
      if (inner) wrap.appendChild(inner);
    } catch (e) {
      console.error(`[CarnetDeSavoirs] Erreur dans le widget "${block.composant}"`, e, block.params);
      wrap.appendChild(el('p', { class: 'block-error' },
        `Le widget « ${block.composant} » n'a pas pu être affiché` +
        (e && e.message ? ` (${e.message})` : '') + '.'));
    }
    return wrap;
  }

  // =================================================================
  // WIDGET LIBRARY
  // =================================================================

  const WIDGETS = {

    /* ----- SelecteurValeurs -----
       params = {
         options: [{ label, valeur, description }, ...],
         unite: "km/s",
         indexInitial: 0
       }
       Clic simple = sélection primaire. Maj+clic = ajoute une option
       en comparaison. Quand deux options sont sélectionnées, l'affichage
       passe en mode comparateur : deux cartes côte à côte avec le delta
       et le ratio (si numérique). Backward-compatible : tant qu'aucune
       option n'est ajoutée en comparaison, le rendu est identique à
       l'ancienne version.
    */
    SelecteurValeurs(params) {
      const opts = params.options || [];
      let primary = params.indexInitial || 0;
      let secondary = -1;
      // Le comparateur n'a de sens que pour des valeurs numériques (où
      // l'écart et le ratio se calculent). Pour des valeurs textuelles,
      // on se replie sur l'ancien comportement mono-sélection.
      const isComparable = opts.length > 1
        && opts.every(o => typeof o.valeur === 'number' && isFinite(o.valeur));

      const buttons = el('div', { class: 'w-selector-buttons' });
      const single = el('div', { class: 'w-selector-output' });
      const singleValue = el('span', { class: 'w-value' });
      const singleDesc = el('span', { class: 'w-desc' });
      single.appendChild(singleValue);
      single.appendChild(singleDesc);
      const compareWrap = el('div', { class: 'w-selector-compare' });
      const hint = isComparable
        ? el('div', { class: 'w-selector-hint' },
            'Maj + clic pour comparer avec une autre option')
        : null;

      // Markdown-lite interprété pour la description (gras, italique,
      // [[slug]] vers fiche, etc.). On retire l'enveloppe <p> initiale
      // pour rester sur une seule ligne en mode simple.
      function renderInline(text) {
        return md(text || '').replace(/^<p>|<\/p>$/g, '');
      }
      function formatVal(v) {
        if (typeof v === 'number') return formatNumberFr(v);
        return v;
      }
      function withUnit(v) {
        return formatVal(v) + (params.unite ? ' ' + params.unite : '');
      }
      function update() {
        Array.from(buttons.children).forEach((b, j) => {
          b.classList.toggle('is-primary', j === primary);
          b.classList.toggle('active', j === primary); // compat ancienne classe
          b.classList.toggle('is-secondary', j === secondary);
        });
        const pa = opts[primary];
        if (secondary < 0) {
          single.style.display = '';
          compareWrap.style.display = 'none';
          singleValue.textContent = withUnit(pa.valeur);
          singleDesc.innerHTML = renderInline(pa.description);
        } else {
          const pb = opts[secondary];
          single.style.display = 'none';
          compareWrap.style.display = '';
          clear(compareWrap);
          const cardA = el('div', { class: 'w-compare-card w-compare-card-a' },
            el('div', { class: 'w-compare-label' }, pa.label),
            el('div', { class: 'w-compare-value' }, withUnit(pa.valeur)),
            pa.description ? el('div', { class: 'w-compare-desc', html: renderInline(pa.description) }) : null
          );
          const cardB = el('div', { class: 'w-compare-card w-compare-card-b' },
            el('div', { class: 'w-compare-label' }, pb.label),
            el('div', { class: 'w-compare-value' }, withUnit(pb.valeur)),
            pb.description ? el('div', { class: 'w-compare-desc', html: renderInline(pb.description) }) : null
          );
          const d = pb.valeur - pa.valeur;
          const ratio = pa.valeur !== 0 ? pb.valeur / pa.valeur : null;
          const sign = d > 0 ? '+ ' : d < 0 ? '− ' : '';
          const deltaText = sign + formatVal(Math.abs(d)) + (params.unite ? ' ' + params.unite : '');
          const ratioText = (ratio !== null && isFinite(ratio) && ratio > 0)
            ? '× ' + (ratio >= 100 ? ratio.toFixed(0) : ratio >= 10 ? ratio.toFixed(1) : ratio.toFixed(2)).replace('.', ',')
            : '';
          const deltaNode = el('div', { class: 'w-compare-delta' },
            el('div', { class: 'w-compare-delta-label' }, 'écart'),
            el('div', { class: 'w-compare-delta-val' }, deltaText),
            ratioText ? el('div', { class: 'w-compare-delta-ratio' }, ratioText) : null
          );
          compareWrap.appendChild(cardA);
          compareWrap.appendChild(deltaNode);
          compareWrap.appendChild(cardB);
        }
      }
      opts.forEach((o, i) => {
        const b = el('button', { type: 'button' }, o.label);
        b.addEventListener('click', (e) => {
          // Maj+clic ne s'active que pour des valeurs numériques.
          if (isComparable && e.shiftKey && i !== primary) {
            secondary = (secondary === i) ? -1 : i;
          } else {
            primary = i;
            secondary = -1;
          }
          update();
        });
        buttons.appendChild(b);
      });
      const wrap = el('div', { class: 'w-selector' },
        buttons, single, compareWrap,
        hint
      );
      update();
      return wrap;
    },

    /* ----- CurseurParametrique -----
       params = {
         label: "Masse de l'étoile",
         min, max, step, valeurInitiale,
         unite: "M☉",
         seuils: [
           { jusqua: 8, titre: "...", description: "...", couleur: "#5b8def" },
           ...
         ],
         presets: [                    // optionnel : valeurs préréglées
           { label: 'Soleil', valeur: 1 },
           { label: 'Géante bleue', valeur: 30 }
         ],
         degradePiste: "linear-gradient(...)"  // optionnel
       }
       Marqueurs visibles sur la piste aux positions des seuils + presets
       cliquables qui repositionnent le curseur instantanément.
    */
    CurseurParametrique(params) {
      const min = params.min ?? 0;
      const max = params.max ?? 100;
      const step = params.step ?? 1;
      const init = params.valeurInitiale ?? min;
      const seuils = params.seuils || [];
      const presets = params.presets || [];
      const span = max - min || 1;

      const slider = el('input', {
        type: 'range', class: 'w-range',
        min, max, step, value: init,
        style: params.degradePiste ? { '--track-grad': params.degradePiste } : {}
      });

      const valueLabel = el('span', { class: 'w-slider-value' });
      const labelRow = el('div', { class: 'w-slider-label' },
        el('span', null, params.label || ''),
        valueLabel
      );

      // Piste + marqueurs aux positions des seuils. Le slider est posé
      // par-dessus la piste graphique. La piste sert uniquement de canevas
      // pour afficher les marqueurs visuels (pas d'interaction propre).
      const track = el('div', { class: 'w-slider-track' });
      seuils.forEach((s) => {
        if (s.jusqua == null || !isFinite(s.jusqua)) return;
        if (s.jusqua < min || s.jusqua > max) return;
        const pct = ((s.jusqua - min) / span) * 100;
        const marker = el('div', {
          class: 'w-slider-marker',
          style: {
            left: pct + '%',
            '--marker-color': s.couleur || 'currentColor'
          },
          title: s.titre || ''
        });
        if (s.titre) {
          marker.appendChild(el('span', { class: 'w-slider-marker-label' }, s.titre));
        }
        track.appendChild(marker);
      });
      const sliderWrap = el('div', { class: 'w-slider-wrap' }, track, slider);

      const resultTitle = el('h4');
      const resultDesc = el('p');
      const result = el('div', { class: 'w-slider-result' }, resultTitle, resultDesc);

      // Boutons presets — clics rapides sur des valeurs nommées.
      let presetRow = null;
      if (presets.length > 0) {
        presetRow = el('div', { class: 'w-slider-presets' });
        presetRow.appendChild(el('span', { class: 'w-slider-presets-label' }, 'Repères :'));
        presets.forEach(p => {
          const b = el('button', { class: 'w-slider-preset', type: 'button' }, p.label);
          b.addEventListener('click', () => {
            const clamped = Math.max(min, Math.min(max, p.valeur));
            slider.value = clamped;
            update();
          });
          presetRow.appendChild(b);
        });
      }

      function update() {
        const v = parseFloat(slider.value);
        const formatted = formatNumberFr(v, decimalsOfStep(step));
        valueLabel.textContent = formatted + (params.unite ? ' ' + params.unite : '');
        const seuil = seuils.find(s => v < s.jusqua) || seuils[seuils.length - 1];
        if (seuil) {
          resultTitle.textContent = seuil.titre || '';
          // Markdown-lite (gras, italique, [terme]{accent}…) comme le promet
          // TEMPLATE_SUJET.md ; md() échappe le HTML.
          resultDesc.innerHTML = md(seuil.description || '').replace(/^<p>|<\/p>$/g, '');
          if (seuil.couleur) {
            result.style.setProperty('--w-result-color', seuil.couleur);
          }
        }
        // Surlignage du preset le plus proche, le cas échéant
        if (presetRow) {
          Array.from(presetRow.querySelectorAll('.w-slider-preset')).forEach((btn, i) => {
            btn.classList.toggle('is-active', Math.abs(presets[i].valeur - v) < (step || 1) * 0.5);
          });
        }
      }

      slider.addEventListener('input', update);
      update();

      const children = [labelRow, sliderWrap];
      if (presetRow) children.push(presetRow);
      children.push(result);
      return el('div', null, ...children);
    },

    /* ----- GrilleCartes -----
       params = {
         cartes: [{ tag, titre, description }, ...]
       }
       Les cartes munies d'une `description` deviennent **retournables** :
       face avant = tag + titre + invite à révéler, face arrière = la
       description. Clic pour retourner. Sans description la carte reste
       statique (compatibilité ascendante).
    */
    GrilleCartes(params) {
      const cartes = params.cartes || [];
      const grid = el('div', { class: 'w-grid' });
      cartes.forEach(c => {
        const hasBack = c.description && String(c.description).trim() !== '';
        if (!hasBack) {
          grid.appendChild(el('div', { class: 'w-grid-card w-grid-card-static' },
            c.tag ? el('span', { class: 'tag' }, c.tag) : null,
            el('h4', null, c.titre || '')
          ));
          return;
        }
        const card = el('button', { class: 'w-grid-card w-grid-card-flip', type: 'button' });
        const inner = el('div', { class: 'w-grid-card-inner' });
        const front = el('div', { class: 'w-grid-card-face w-grid-card-front' },
          c.tag ? el('span', { class: 'tag' }, c.tag) : null,
          el('h4', null, c.titre || ''),
          el('span', { class: 'w-grid-card-hint' }, 'Révéler')
        );
        const back = el('div', { class: 'w-grid-card-face w-grid-card-back' },
          c.tag ? el('span', { class: 'tag' }, c.tag) : null,
          el('div', {
            class: 'w-grid-card-desc',
            html: md(c.description).replace(/^<p>|<\/p>$/g, '')
          }),
          el('span', { class: 'w-grid-card-hint' }, 'Retourner')
        );
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        card.addEventListener('click', () => card.classList.toggle('is-flipped'));
        grid.appendChild(card);
      });
      return grid;
    },

    /* ----- ListeMethodes -----
       params = {
         methodes: [{ titre, description }, ...]
       }
       Accordéon : une seule étape dépliée à la fois, la première par
       défaut. Clic sur un en-tête bascule l'ouverture. Le numéro et le
       titre restent toujours visibles ; seule la description se replie.
    */
    ListeMethodes(params) {
      const numerotation = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.'];
      const methodes = params.methodes || [];
      const container = el('div', { class: 'w-methods-acc' });
      const items = methodes.map((m, i) => {
        const isOpen = i === 0;
        const item = el('div', { class: 'w-method-acc' + (isOpen ? ' is-open' : '') });
        const head = el('button', { class: 'w-method-acc-head', type: 'button' },
          el('span', { class: 'w-method-acc-num' }, numerotation[i] || (i + 1) + '.'),
          el('span', { class: 'w-method-acc-titre' }, m.titre || ''),
          el('span', { class: 'w-method-acc-chevron', 'aria-hidden': 'true' }, '+')
        );
        const bodyWrap = el('div', { class: 'w-method-acc-body' });
        const bodyInner = el('div', { class: 'w-method-acc-body-inner' });
        bodyInner.appendChild(el('div', {
          class: 'w-method-acc-desc',
          html: md(m.description || '').replace(/^<p>|<\/p>$/g, '')
        }));
        bodyWrap.appendChild(bodyInner);
        item.appendChild(head);
        item.appendChild(bodyWrap);
        head.addEventListener('click', () => {
          const willOpen = !item.classList.contains('is-open');
          // Ferme tous les autres, ne touche qu'à l'item cible
          items.forEach(it => { if (it !== item) it.classList.remove('is-open'); });
          item.classList.toggle('is-open', willOpen);
        });
        return item;
      });
      items.forEach(it => container.appendChild(it));
      return container;
    },

    /* ----- Frise (timeline chronologique verticale) -----
       params = {
         evenements: [
           { date: '1905', titre: 'Relativité restreinte', description: '...' },
           { date: '1915', titre: 'Relativité générale', description: '...' }
         ]
       }
       Mode interactif : tous les événements compacts (date + titre), un
       seul déplié à la fois avec sa description. Premier événement ouvert
       par défaut. Clic ou flèches ← → pour naviguer. Plus lisible que
       l'ancienne version "tout déployé" sur les frises de 10+ events.
    */
    Frise(params) {
      const events = params.evenements || [];
      const wrap = el('div', { class: 'w-frise w-frise-interactive' });
      const items = events.map((ev, i) => {
        const hasDesc = ev.description && String(ev.description).trim() !== '';
        const item = el(hasDesc ? 'button' : 'div', {
          class: 'w-frise-item' + (hasDesc ? ' w-frise-item-btn' : '') + (i === 0 && hasDesc ? ' is-active' : ''),
          type: hasDesc ? 'button' : null
        });
        item.appendChild(el('div', { class: 'w-frise-marker' }));
        const content = el('div', { class: 'w-frise-content' });
        if (ev.date) content.appendChild(el('div', { class: 'w-frise-date' }, ev.date));
        if (ev.titre) content.appendChild(el('div', { class: 'w-frise-titre' }, ev.titre));
        if (hasDesc) {
          const descWrap = el('div', { class: 'w-frise-desc-wrap' });
          descWrap.appendChild(el('div', {
            class: 'w-frise-desc',
            html: md(ev.description).replace(/^<p>|<\/p>$/g, '')
          }));
          content.appendChild(descWrap);
        }
        item.appendChild(content);
        if (hasDesc) {
          item.addEventListener('click', () => {
            const wasActive = item.classList.contains('is-active');
            items.forEach(it => it.classList.remove('is-active'));
            if (!wasActive) item.classList.add('is-active');
          });
        }
        return item;
      });
      items.forEach(it => wrap.appendChild(it));

      // Navigation clavier ← → entre événements (sur l'item focusé).
      wrap.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight'
            && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        const focused = document.activeElement;
        const buttons = items.filter(it => it.tagName === 'BUTTON');
        const idx = buttons.indexOf(focused);
        if (idx < 0) return;
        e.preventDefault();
        const dir = (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 1;
        const next = idx + dir;
        if (next >= 0 && next < buttons.length) {
          buttons[next].focus();
          buttons[next].click();
        }
      });

      return wrap;
    },

    /* ----- Equation (rendu LaTeX via KaTeX, chargée via CDN) -----
       params = {
         tex: 'E = mc^2',
         legende: '...',         // [optionnel] légende sous l'équation
         affichage: 'block',     // 'block' (défaut, gros) ou 'inline'

         // ----- Mode manipulable (optionnel) -----
         // Si `variables` est fourni, des sliders apparaissent sous
         // l'équation. `compute` reçoit un objet {nom: valeur} et renvoie
         // soit une chaîne (nouveau tex), soit un objet { tex, note }.
         variables: [
           { nom: 'm', label: 'Masse', min: 1, max: 1e30, step: 0.01,
             init: 1, unite: 'kg' }
         ],
         compute: (vars) => {
           const E = vars.m * 9e16;
           return { tex: 'E = ' + vars.m + ' \\cdot c^2 \\approx ' +
                    E.toExponential(2) + ' \\text{ J}' };
         }
       }
    */
    Equation(params) {
      const wrap = el('div', { class: 'w-equation' });
      const body = el('div', { class: 'w-equation-body' });
      const initialTex = String(params.tex || '');
      const variables = Array.isArray(params.variables) ? params.variables : [];
      const isManipulable = variables.length > 0 && typeof params.compute === 'function';
      const noteEl = el('div', { class: 'w-equation-note' });

      function renderTex(texStr) {
        body._lastTex = texStr;
        if (typeof window.katex === 'undefined') {
          body.textContent = texStr;
          return;
        }
        try {
          clear(body);
          window.katex.render(texStr, body, {
            displayMode: params.affichage !== 'inline',
            throwOnError: false,
            errorColor: '#fb7185',
            strict: 'ignore'
          });
        } catch (e) {
          body.textContent = texStr;
        }
      }

      // Rendu initial
      renderTex(initialTex);
      wrap.appendChild(body);
      if (typeof window.katex === 'undefined') {
        // KaTeX est chargé en <script defer> depuis le CDN : au premier
        // rendu (CDS.start() est appelé en inline, AVANT l'exécution des
        // scripts defer) il n'est donc pas encore disponible. On affiche
        // le message d'attente, puis on re-rend automatiquement dès que
        // la lib arrive (écoute du 'load' du <script> + polling de
        // secours pendant 15 s). Le message ne reste que si KaTeX ne
        // se charge vraiment jamais (hors-ligne).
        const errEl = el('p', { class: 'block-error', style: { fontSize: '0.82rem', marginTop: '0.5rem', textAlign: 'left' } },
          'KaTeX non chargé — vérifie ta connexion à internet pour le rendu LaTeX.');
        wrap.appendChild(errEl);
        let done = false;
        const onReady = () => {
          if (done || typeof window.katex === 'undefined') return;
          done = true;
          renderTex(body._lastTex || initialTex);
          if (errEl.parentNode) errEl.parentNode.removeChild(errEl);
        };
        const katexScript = document.querySelector('script[src*="katex"]');
        if (katexScript) katexScript.addEventListener('load', onReady, { once: true });
        let tries = 0;
        const poll = setInterval(() => {
          tries++;
          if (typeof window.katex !== 'undefined') { clearInterval(poll); onReady(); }
          else if (tries > 60) clearInterval(poll);
        }, 250);
      }

      // Mode manipulable : sliders pour chaque variable + recalcul live
      if (isManipulable) {
        const current = {};
        variables.forEach(v => { current[v.nom] = v.init != null ? v.init : (v.min != null ? v.min : 0); });

        const controlsWrap = el('div', { class: 'w-equation-controls' });
        const rows = variables.map(v => {
          const sliderId = 'w-eq-' + v.nom + '-' + Math.random().toString(36).slice(2, 7);
          const valueLabel = el('span', { class: 'w-equation-var-value' });
          const head = el('div', { class: 'w-equation-var-head' },
            el('label', { for: sliderId, class: 'w-equation-var-label' },
              el('span', { class: 'w-equation-var-name' }, v.label || v.nom),
              v.unite ? el('span', { class: 'w-equation-var-unit' }, '(' + v.unite + ')') : null
            ),
            valueLabel
          );
          const slider = el('input', {
            id: sliderId,
            type: 'range',
            class: 'w-range w-equation-range',
            min: v.min != null ? v.min : 0,
            max: v.max != null ? v.max : 100,
            step: v.step != null ? v.step : 1,
            value: current[v.nom]
          });
          slider.addEventListener('input', () => {
            current[v.nom] = parseFloat(slider.value);
            recompute();
          });
          const row = el('div', { class: 'w-equation-var' }, head, slider);
          row._valueLabel = valueLabel;
          row._slider = slider;
          row._spec = v;
          return row;
        });
        rows.forEach(r => controlsWrap.appendChild(r));

        function formatVarValue(v, raw) {
          const isInt = Number.isInteger(v.step != null ? v.step : 1);
          if (typeof raw !== 'number' || !isFinite(raw)) return String(raw);
          if (Math.abs(raw) >= 1e6 || (Math.abs(raw) < 1e-3 && raw !== 0)) {
            return raw.toExponential(2);
          }
          return isInt ? raw.toFixed(0) : raw.toFixed(2).replace('.', ',');
        }
        function recompute() {
          rows.forEach(r => {
            r._valueLabel.textContent = formatVarValue(r._spec, current[r._spec.nom]) +
              (r._spec.unite ? ' ' + r._spec.unite : '');
          });
          let res;
          try { res = params.compute(current); }
          catch (e) { res = { tex: initialTex, note: 'Erreur de calcul' }; }
          if (typeof res === 'string') res = { tex: res };
          if (res && res.tex) renderTex(res.tex);
          if (res && res.note) { noteEl.textContent = res.note; noteEl.style.display = ''; }
          else { noteEl.textContent = ''; noteEl.style.display = 'none'; }
        }
        wrap.appendChild(controlsWrap);
        wrap.appendChild(noteEl);
        recompute();
      }

      if (params.legende) {
        wrap.appendChild(el('div', { class: 'w-equation-legend' }, params.legende));
      }
      return wrap;
    },

    /* ----- TableauComparatif -----
       Comparaison tabulaire n × m. Colonnes typées (text/number), tri
       au clic sur l'en-tête, surlignage automatique des extrêmes
       (max et min) pour les colonnes numériques.
       params = {
         colonnes: [
           { id: 'nom', label: 'Empire', type: 'text' },
           { id: 'surface', label: 'Surface', unite: 'M km²', type: 'number' }
         ],
         lignes: [
           { nom: 'Empire mongol', surface: 24 },
           { nom: 'Empire romain', surface: 5 }
         ],
         surlignageExtremes: true   // optionnel, défaut true
       }
    */
    TableauComparatif(params) {
      const colonnes = Array.isArray(params.colonnes) ? params.colonnes : [];
      const lignes = Array.isArray(params.lignes) ? params.lignes : [];
      const surligner = params.surlignageExtremes !== false;
      let sortCol = null;
      let sortDir = 1; // 1 = asc, -1 = desc

      // Pré-calcul des min/max par colonne numérique pour le surlignage
      const extremes = {};
      colonnes.forEach(c => {
        if (c.type !== 'number') return;
        const vals = lignes.map(l => l[c.id]).filter(v => typeof v === 'number' && isFinite(v));
        if (vals.length === 0) return;
        extremes[c.id] = { min: Math.min(...vals), max: Math.max(...vals) };
      });

      function formatCell(c, v) {
        if (v == null) return '—';
        if (c.type === 'number' && typeof v === 'number') {
          return formatNumberFr(v) + (c.unite ? ' ' + c.unite : '');
        }
        return String(v);
      }

      const wrapTable = el('div', { class: 'w-tableau-wrap' });
      const table = el('table', { class: 'w-tableau' });
      const thead = el('thead');
      const headRow = el('tr');
      colonnes.forEach(c => {
        const th = el('th', {
          class: 'w-tableau-th' + (c.type === 'number' ? ' is-num' : ''),
          'data-col': c.id
        });
        const labelText = c.label || c.id;
        const labelSpan = el('span', { class: 'w-tableau-th-label' }, labelText);
        const arrow = el('span', { class: 'w-tableau-th-arrow' }, '');
        th.appendChild(labelSpan);
        th.appendChild(arrow);
        if (c.unite) th.appendChild(el('span', { class: 'w-tableau-th-unite' }, c.unite));
        th.addEventListener('click', () => {
          if (sortCol === c.id) { sortDir = -sortDir; }
          else { sortCol = c.id; sortDir = c.type === 'number' ? -1 : 1; }
          renderBody();
        });
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      const tbody = el('tbody');

      function renderBody() {
        clear(tbody);
        // Met à jour les flèches de tri
        Array.from(headRow.children).forEach(th => {
          const colId = th.getAttribute('data-col');
          const arrow = th.querySelector('.w-tableau-th-arrow');
          if (!arrow) return;
          if (colId === sortCol) {
            arrow.textContent = sortDir > 0 ? ' ↑' : ' ↓';
            th.classList.add('is-sorted');
          } else {
            arrow.textContent = '';
            th.classList.remove('is-sorted');
          }
        });
        const sorted = lignes.slice();
        if (sortCol) {
          const col = colonnes.find(c => c.id === sortCol);
          sorted.sort((a, b) => {
            const va = a[sortCol], vb = b[sortCol];
            if (va == null && vb == null) return 0;
            if (va == null) return 1;
            if (vb == null) return -1;
            if (col && col.type === 'number') return (va - vb) * sortDir;
            return String(va).localeCompare(String(vb), 'fr') * sortDir;
          });
        }
        sorted.forEach(ligne => {
          const tr = el('tr');
          colonnes.forEach(c => {
            const v = ligne[c.id];
            const td = el('td', { class: c.type === 'number' ? 'is-num' : '' });
            if (surligner && c.type === 'number' && typeof v === 'number' && extremes[c.id]) {
              if (v === extremes[c.id].max) td.classList.add('is-max');
              else if (v === extremes[c.id].min) td.classList.add('is-min');
            }
            td.textContent = formatCell(c, v);
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
      }
      table.appendChild(thead);
      table.appendChild(tbody);
      wrapTable.appendChild(table);
      renderBody();
      return wrapTable;
    },

    /* ----- SchemaAnnote (image avec hotspots cliquables) -----
       params = {
         image: 'data:image/png;base64,...',  // base64 (recommandé) ou URL
         legende: '...',
         hotspots: [
           { x: 25, y: 40, label: 'Soleil', description: '...' },
           { x: 50, y: 60, label: 'Terre',  description: '...' }
         ]
       }
       x et y sont des pourcentages (0-100) de la dimension de l'image.
    */
    SchemaAnnote(params) {
      const wrap = el('div', { class: 'w-schema' });
      const imageWrap = el('div', { class: 'w-schema-image-wrap' });
      const img = el('img', {
        class: 'w-schema-image',
        src: params.image || '',
        alt: params.legende || 'Schéma annoté'
      });
      imageWrap.appendChild(img);

      const hotspots = params.hotspots || [];
      hotspots.forEach((h, i) => {
        const dot = el('button', {
          class: 'w-schema-hotspot',
          style: { left: (h.x || 0) + '%', top: (h.y || 0) + '%' },
          title: h.label || ('Annotation ' + (i + 1))
        }, String(i + 1));

        const card = el('div', { class: 'w-schema-hotspot-card' },
          h.label ? el('div', { class: 'w-schema-hotspot-label' }, h.label) : null,
          h.description ? el('div', {
            class: 'w-schema-hotspot-desc',
            html: md(h.description).replace(/^<p>|<\/p>$/g, '')
          }) : null
        );

        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const wasActive = dot.classList.contains('is-active');
          imageWrap.querySelectorAll('.w-schema-hotspot-card').forEach(c => c.classList.remove('is-visible'));
          imageWrap.querySelectorAll('.w-schema-hotspot').forEach(d => d.classList.remove('is-active'));
          if (!wasActive) {
            card.classList.add('is-visible');
            dot.classList.add('is-active');
          }
        });

        imageWrap.appendChild(dot);
        imageWrap.appendChild(card);
      });

      // Clic ailleurs ferme la carte ouverte
      imageWrap.addEventListener('click', () => {
        imageWrap.querySelectorAll('.w-schema-hotspot-card').forEach(c => c.classList.remove('is-visible'));
        imageWrap.querySelectorAll('.w-schema-hotspot').forEach(d => d.classList.remove('is-active'));
      });

      wrap.appendChild(imageWrap);
      if (params.legende) {
        wrap.appendChild(el('div', { class: 'w-schema-legend' }, params.legende));
      }
      return wrap;
    }

  };

  // =================================================================
  // TAB: QUIZ
  // =================================================================

  function renderTabQuiz(container, sujet) {
    if (!sujet.quiz || sujet.quiz.length === 0) {
      container.appendChild(el('p', { class: 'lead' }, 'Pas encore de quiz pour ce sujet.'));
      return;
    }

    // On préserve la session du quiz du sujet si elle existe déjà (en
    // cours OU terminée) : revenir sur l'onglet quiz ne doit pas remettre
    // l'utilisateur à la question 1. Une nouvelle session n'est créée que
    // si on arrive sur un sujet différent (ou jamais commencé), ou si le
    // sujet a changé de quiz (longueur différente).
    const existing = state.quizSession;
    const isSameSujetSession = existing
      && !existing.isMixed
      && existing.sujetId === sujet.meta.id
      && Array.isArray(existing.questions)
      && existing.questions.length === sujet.quiz.length;

    if (!isSameSujetSession) {
      state.quizSession = {
        sujetId: sujet.meta.id,
        currentQ: 0,
        score: 0,
        questions: sujet.quiz
      };
    }

    const quizCard = el('div', { class: 'quiz-card' });
    container.appendChild(quizCard);
    // Si la session existante est déjà finie, renderQuizQuestion va de
    // toute façon basculer vers renderQuizFinal — score + bouton refaire.
    renderQuizQuestion(quizCard, sujet);
  }

  // Normalisation pour comparaison de texte (insensible casse + accents + espaces)
  function normalizeAnswer(s) {
    return String(s || '').normalize('NFD')
      .replace(new RegExp('[\\u0300-\\u036f]', 'g'), '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  // Mélange Fisher-Yates en place (retourne le tableau pour chaînage)
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function renderQuizQuestion(quizCard, sujet) {
    // Préserve la position de scroll : pendant le clear(), le quizCard
    // devient temporairement vide (hauteur 0), ce qui peut faire scroller
    // la page vers le haut. On capture avant et on restaure après le rebuild.
    const _savedScrollY = window.scrollY;
    clear(quizCard);
    const sess = state.quizSession;
    if (!sess) return;
    // Restaure le scroll après que le DOM est reconstruit (microtask)
    Promise.resolve().then(() => {
      if (window.scrollY !== _savedScrollY) {
        window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
      }
    });

    if (sess.currentQ >= sess.questions.length) {
      // Le mode (revision / quotidien) prime sur isMixed : ces sessions
      // posent aussi isMixed=true, l'ancien ordre les envoyait toujours
      // sur l'écran « mixte » et leur écran final n'était jamais atteint.
      if (sess.mode === 'revision') renderRevisionFinal(quizCard);
      else if (sess.mode === 'quotidien') renderDailyQuizFinal(quizCard);
      else if (sess.isMixed) renderMixedQuizFinal(quizCard);
      else renderQuizFinal(quizCard, sujet);
      return;
    }

    const q = sess.questions[sess.currentQ];
    const sujetForQ = sujet || (q._sujet ? state.sujets[q._sujet.id] : null);
    const sujetId = sujetForQ ? sujetForQ.meta.id : (q._sujet && q._sujet.id) || null;
    const qIdx = (typeof q._qIdx === 'number') ? q._qIdx : sess.currentQ;
    const mode = sess.mode || (sess.isMixed ? 'mixte' : 'sujet');

    // Marque le début pour mesurer la durée de réponse
    sess._questionStart = Date.now();

    // Bandeau de progression + streak temps réel + source (mixte)
    const progress = el('div', { class: 'quiz-progress' },
      'Question ' + (sess.currentQ + 1) + ' sur ' + sess.questions.length);
    if (sess.isMixed && q._sujet) {
      const titre = String(q._sujet.titre).replace(/<[^>]+>/g, '');
      progress.appendChild(document.createTextNode(' · issue de '));
      progress.appendChild(el('em', null, titre));
    }
    quizCard.appendChild(progress);

    // Badge streak si > 1
    const streak = (state.user.quizStreak || {}).current || 0;
    if (streak >= 2) {
      quizCard.appendChild(el('div', { class: 'quiz-streak' },
        '🔥 ' + streak + ' bonnes réponses d\'affilée'));
    }

    // Question (toujours présente sauf pour texte-a-trou qui se débrouille seul)
    if (q.q) quizCard.appendChild(el('div', { class: 'quiz-question' }, q.q));

    const feedback = el('div', { class: 'quiz-feedback', style: { display: 'none' } });

    // Timer pour le mode Défi : compteur qui descend, timeout = mauvaise réponse
    let timerEl = null;
    let timerId = null;
    if (mode === 'defi') {
      sess._timerLeft = sess._timerSecs || 30;
      timerEl = el('div', { class: 'quiz-timer' }, sess._timerLeft + ' s');
      quizCard.insertBefore(timerEl, progress.nextSibling);
      // Un seul timer par session : un re-rendu ne doit pas en empiler un
      // second, et quitter la page doit l'arrêter (sinon le timeout enregistre
      // une mauvaise réponse sur un DOM détaché, puis la question est reposée).
      if (sess._timerId) { clearInterval(sess._timerId); sess._timerId = null; }
      timerId = setInterval(() => {
        sess._timerLeft--;
        if (timerEl) timerEl.textContent = sess._timerLeft + ' s';
        if (sess._timerLeft <= 5 && timerEl) timerEl.classList.add('quiz-timer-urgent');
        if (sess._timerLeft <= 0) {
          clearInterval(timerId);
          timerId = null;
          sess._timerId = null;
          onAnswer(false, true); // timeout
        }
      }, 1000);
      sess._timerId = timerId;
      onLeaveView(() => { if (sess._timerId) { clearInterval(sess._timerId); sess._timerId = null; } });
    }

    // Callback uniforme après réponse, peu importe le type
    function onAnswer(isCorrect, isTimeout) {
      // Arrête le timer du défi si présent
      if (timerId) { clearInterval(timerId); timerId = null; sess._timerId = null; }
      const durationMs = Date.now() - sess._questionStart;
      if (isCorrect) sess.score++;
      // Bonus de vitesse en mode défi
      let bonus = 0;
      if (mode === 'defi' && isCorrect && typeof sess._timerLeft === 'number') {
        bonus = Math.max(0, Math.round(sess._timerLeft * 0.5));
        sess.bonusPoints = (sess.bonusPoints || 0) + bonus;
      }
      recordQuizAnswer({
        sujetId: sujetId, qIdx: qIdx, type: q.type || 'qcm',
        correct: isCorrect, durationMs: durationMs, mode: mode
      });

      let msg;
      if (isTimeout) msg = 'Temps écoulé.';
      else if (isCorrect) msg = bonus > 0 ? 'Exact ! +' + bonus + ' bonus de vitesse' : 'Exact !';
      else msg = 'Pas tout à fait.';
      feedback.innerHTML = '<strong>' + msg + '</strong> ' + md(q.explication || '').replace(/^<p>|<\/p>$/g, '');
      feedback.style.display = 'block';

      const isLast = sess.currentQ === sess.questions.length - 1;
      const nextBtn = el('button', {
        class: 'btn',
        onclick: () => {
          sess.currentQ++;
          renderQuizQuestion(quizCard, sujet);
        }
      }, isLast ? 'Voir mon score →' : 'Question suivante →');
      feedback.appendChild(el('div', { class: 'quiz-next-row' }, nextBtn));

      // Re-render le badge streak après la réponse
      const oldStreak = quizCard.querySelector('.quiz-streak');
      if (oldStreak) oldStreak.remove();
      if (timerEl) timerEl.remove();
    }

    // Dispatch par type de question
    const type = q.type || 'qcm';
    const interactionHost = el('div', { class: 'quiz-interaction' });
    quizCard.appendChild(interactionHost);

    if (type === 'qcm') {
      renderQCMQuestion(interactionHost, q, onAnswer);
    } else if (type === 'vrai-faux') {
      renderVraiFauxQuestion(interactionHost, q, onAnswer);
    } else if (type === 'ordre-chrono') {
      renderOrdreChronoQuestion(interactionHost, q, onAnswer);
    } else if (type === 'texte-a-trou') {
      renderTexteATrouQuestion(interactionHost, q, onAnswer);
    } else if (type === 'associer') {
      renderAssocierQuestion(interactionHost, q, onAnswer);
    } else {
      // Type inconnu : fallback en bypass
      interactionHost.appendChild(el('p', { class: 'block-error' },
        'Type de question inconnu : « ' + type + ' »'));
      const skip = el('button', { class: 'btn', onclick: () => onAnswer(false) }, 'Passer');
      interactionHost.appendChild(skip);
    }

    quizCard.appendChild(feedback);
  }

  // -----------------------------------------------------------------
  // RENDERERS PAR TYPE DE QUESTION
  // -----------------------------------------------------------------

  function renderQCMQuestion(host, q, onAnswer) {
    const options = el('div', { class: 'quiz-options' });
    q.options.forEach((opt, i) => {
      const btn = el('button', {
        onclick: () => {
          if (btn.disabled) return;
          const isCorrect = i === q.correcte;
          Array.from(options.children).forEach((b, j) => {
            b.disabled = true;
            if (j === q.correcte) b.classList.add('correct');
            if (j === i && j !== q.correcte) b.classList.add('wrong');
          });
          onAnswer(isCorrect);
        }
      }, opt);
      options.appendChild(btn);
    });
    host.appendChild(options);
  }

  function renderVraiFauxQuestion(host, q, onAnswer) {
    if (q.affirmation) {
      host.appendChild(el('div', { class: 'quiz-affirmation' }, '« ' + q.affirmation + ' »'));
    }
    const options = el('div', { class: 'quiz-options quiz-options-vf' });
    [['Vrai', true], ['Faux', false]].forEach(([label, val]) => {
      const btn = el('button', {
        onclick: () => {
          if (btn.disabled) return;
          const isCorrect = val === q.reponse;
          Array.from(options.children).forEach(b => { b.disabled = true; });
          // Marque la bonne réponse
          Array.from(options.children).forEach((b, j) => {
            const isThisCorrect = (j === 0 ? true : false) === q.reponse;
            if (isThisCorrect) b.classList.add('correct');
          });
          if (!isCorrect) btn.classList.add('wrong');
          onAnswer(isCorrect);
        }
      }, label);
      options.appendChild(btn);
    });
    host.appendChild(options);
  }

  function renderOrdreChronoQuestion(host, q, onAnswer) {
    // q.items est l'ordre CORRECT. On le mélange pour l'affichage.
    const correctOrder = q.items.slice();
    const shuffled = shuffleArray(q.items.map((it, i) => ({ label: it, originalIdx: i })));

    host.appendChild(el('p', { class: 'quiz-hint' },
      'Réordonne avec les flèches puis valide.'));
    const list = el('ol', { class: 'quiz-ordre-list' });
    function rebuild() {
      clear(list);
      shuffled.forEach((item, i) => {
        const row = el('li', { class: 'quiz-ordre-item' },
          el('span', { class: 'quiz-ordre-label' }, item.label));
        const ctrl = el('div', { class: 'quiz-ordre-ctrl' });
        if (i > 0) ctrl.appendChild(el('button', {
          class: 'quiz-ordre-btn', title: 'Monter',
          onclick: () => {
            const t = shuffled[i]; shuffled[i] = shuffled[i - 1]; shuffled[i - 1] = t;
            rebuild();
          }
        }, '↑'));
        if (i < shuffled.length - 1) ctrl.appendChild(el('button', {
          class: 'quiz-ordre-btn', title: 'Descendre',
          onclick: () => {
            const t = shuffled[i]; shuffled[i] = shuffled[i + 1]; shuffled[i + 1] = t;
            rebuild();
          }
        }, '↓'));
        row.appendChild(ctrl);
        list.appendChild(row);
      });
    }
    rebuild();
    host.appendChild(list);
    const validate = el('button', {
      class: 'btn',
      onclick: () => {
        validate.disabled = true;
        // Compare l'ordre rendu avec l'ordre correct
        const isCorrect = shuffled.every((item, i) => item.label === correctOrder[i]);
        // Afficher l'ordre correct sous chaque ligne en cas d'erreur
        Array.from(list.children).forEach((row, i) => {
          const expected = correctOrder[i];
          if (shuffled[i].label === expected) row.classList.add('correct');
          else row.classList.add('wrong');
        });
        // Désactive les boutons de tri
        list.querySelectorAll('.quiz-ordre-btn').forEach(b => { b.disabled = true; });
        onAnswer(isCorrect);
      }
    }, 'Valider l\'ordre');
    host.appendChild(el('div', { class: 'quiz-next-row' }, validate));
  }

  function renderTexteATrouQuestion(host, q, onAnswer) {
    // Parse le texte : {motif} → input ; reste inchangé
    const re = /\{([^}]+)\}/g;
    const parts = [];
    let lastIdx = 0, m;
    const blanks = []; // input elements + expected normalized
    while ((m = re.exec(q.texte)) !== null) {
      if (m.index > lastIdx) parts.push({ type: 'text', value: q.texte.slice(lastIdx, m.index) });
      parts.push({ type: 'blank', expected: m[1] });
      lastIdx = m.index + m[0].length;
    }
    if (lastIdx < q.texte.length) parts.push({ type: 'text', value: q.texte.slice(lastIdx) });

    const sentence = el('p', { class: 'quiz-trou' });
    parts.forEach(p => {
      if (p.type === 'text') {
        sentence.appendChild(document.createTextNode(p.value));
      } else {
        const input = el('input', {
          type: 'text',
          class: 'quiz-trou-input',
          autocapitalize: 'off',
          autocomplete: 'off',
          spellcheck: 'false',
          size: String(Math.max(6, p.expected.length + 2))
        });
        blanks.push({ input: input, expected: p.expected });
        sentence.appendChild(input);
      }
    });
    host.appendChild(sentence);

    const validate = el('button', {
      class: 'btn',
      onclick: () => {
        validate.disabled = true;
        const isCorrect = blanks.every(b => normalizeAnswer(b.input.value) === normalizeAnswer(b.expected));
        blanks.forEach(b => {
          b.input.disabled = true;
          const ok = normalizeAnswer(b.input.value) === normalizeAnswer(b.expected);
          b.input.classList.add(ok ? 'correct' : 'wrong');
          if (!ok) {
            b.input.setAttribute('data-expected', b.expected);
            // ::after ne se rend pas sur un <input> (élément remplacé) :
            // on insère la bonne réponse dans un span juste après.
            const exp = el('span', { class: 'quiz-trou-expected' }, ' → ' + b.expected);
            b.input.insertAdjacentElement('afterend', exp);
          }
        });
        onAnswer(isCorrect);
      }
    }, 'Valider');
    host.appendChild(el('div', { class: 'quiz-next-row' }, validate));
  }

  function renderAssocierQuestion(host, q, onAnswer) {
    const paires = q.paires || [];
    // Affiche les "gauches" dans l'ordre, et "droites" en sélecteur shuffled
    const droitesShuffled = shuffleArray(paires.map(p => p.droite));
    const selects = [];
    const list = el('ul', { class: 'quiz-associer-list' });
    paires.forEach((p, i) => {
      const row = el('li', { class: 'quiz-associer-row' },
        el('span', { class: 'quiz-associer-gauche' }, p.gauche),
        el('span', { class: 'quiz-associer-sep' }, '↔')
      );
      const sel = el('select', { class: 'quiz-associer-select' });
      sel.appendChild(el('option', { value: '' }, '— choisir —'));
      droitesShuffled.forEach(d => sel.appendChild(el('option', { value: d }, d)));
      selects.push({ sel: sel, expected: p.droite });
      row.appendChild(sel);
      list.appendChild(row);
    });
    host.appendChild(list);
    const validate = el('button', {
      class: 'btn',
      onclick: () => {
        validate.disabled = true;
        let allOk = true;
        selects.forEach((s, i) => {
          s.sel.disabled = true;
          const ok = s.sel.value === s.expected;
          if (!ok) allOk = false;
          const row = list.children[i];
          row.classList.add(ok ? 'correct' : 'wrong');
          if (!ok) row.setAttribute('data-expected', s.expected);
        });
        onAnswer(allOk);
      }
    }, 'Valider');
    host.appendChild(el('div', { class: 'quiz-next-row' }, validate));
  }

  function renderQuizFinal(quizCard, sujet) {
    const sess = state.quizSession;
    const total = sess.questions.length;
    const score = sess.score;
    const pct = (score / total) * 100;
    let verdict;
    if (pct === 100) verdict = 'Sans-faute — tu maîtrises le sujet !';
    else if (pct >= 80) verdict = 'Excellent — compréhension solide.';
    else if (pct >= 60) verdict = 'Bien — quelques points à revoir.';
    else if (pct >= 40) verdict = 'Une bonne base à consolider.';
    else verdict = 'Une seconde lecture pourrait aider !';

    // Save — UNE seule fois par session. renderTabQuiz conserve la session
    // terminée pour réafficher le score au retour sur l'onglet : sans ce
    // garde-fou, chaque revisite ajoutait une tentative, une activité et
    // recalculait la répétition espacée.
    if (!sess._finalized) {
      const prev = state.user.quizScores[sujet.meta.id] || { best: 0, total };
      sess._isNewBest = score > prev.best;
      state.user.quizScores[sujet.meta.id] = {
        best: Math.max(prev.best, score),
        total,
        attempts: [...(prev.attempts || []), { score, date: new Date().toISOString() }].slice(-10)
      };
      sess._finalized = true;
      saveUserState();
      recordActivity('quiz', sujet.meta.id);
      updateSpacedRepetition(sujet.meta.id, score, total);
    }
    const isNewBest = !!sess._isNewBest;

    clear(quizCard);
    quizCard.appendChild(el('div', { class: 'quiz-final' },
      el('div', { class: 'score' }, `${score} / ${total}`),
      el('div', { class: 'verdict' }, verdict),
      el('div', { class: 'best-score' },
        isNewBest ? 'Nouveau meilleur score ! 🌟' :
          `Meilleur score : ${state.user.quizScores[sujet.meta.id].best} / ${total}`
      ),
      el('div', { class: 'btn-row' },
        el('button', {
          class: 'btn',
          onclick: () => {
            // On force le reset : renderTabQuiz préserve désormais la
            // session terminée pour pouvoir afficher le score au retour,
            // donc il faut explicitement la vider pour repartir à zéro.
            state.quizSession = null;
            const parent = quizCard.parentNode;
            clear(parent);
            renderTabQuiz(parent, sujet);
          }
        }, 'Refaire le quiz'),
        el('a', { class: 'btn btn-secondary', href: '#/sujet/' + encodeURIComponent(sujet.meta.id) + '/cours' }, 'Revoir le cours')
      )
    ));
  }

  // =================================================================
  // TAB: CARTE MENTALE — radial tree multi-niveaux
  // =================================================================
  //
  // Layout : arbre radial. Le central est au milieu, ses enfants directs
  // (niveau 1) en couronne autour, leurs propres enfants (niveau 2+) en
  // couronnes successives, dans le secteur angulaire alloué à leur parent.
  //
  // Couleurs : chaque enfant direct du central reçoit une teinte distincte
  // de la palette des domaines. Tous ses descendants partagent cette
  // teinte. Aide à différencier visuellement les "familles d'idées".
  //
  // Interactions : survol d'un nœud → carte de description flottante
  // ancrée sur le SVG + mise en lumière de toute la branche (ascendants
  // + descendants) tandis que le reste s'estompe. Clic → épingle la
  // carte (reste affichée jusqu'au prochain clic).

  const MM_BRANCH_PALETTE = [
    '#ff6b35', '#5b8def', '#4ade80', '#d946ef',
    '#06b6d4', '#a78bfa', '#f5b342', '#fb7185'
  ];

  function renderTabCarte(container, sujet) {
    if (!sujet.carte_mentale || !sujet.carte_mentale.noeuds || sujet.carte_mentale.noeuds.length === 0) {
      container.appendChild(el('p', { class: 'lead' }, 'Pas encore de carte mentale pour ce sujet.'));
      return;
    }

    const cm = sujet.carte_mentale;
    const noeuds = cm.noeuds;
    const centralId = cm.central || (noeuds.find(n => n.central) || noeuds[0]).id;

    // ---- Construction de l'arbre (une fois) ----
    const byId = {};
    noeuds.forEach(n => { byId[n.id] = Object.assign({}, n, { children: [] }); });
    const root = byId[centralId] || byId[noeuds[0].id];
    if (!root) {
      container.appendChild(el('p', { class: 'lead' }, 'Configuration de la carte mentale invalide.'));
      return;
    }
    noeuds.forEach(n => {
      if (n.id === root.id) return;
      let parentId = n.parent || root.id;
      if (parentId === n.id) parentId = root.id;
      const parent = byId[parentId] || root;
      parent.children.push(byId[n.id]);
    });

    // Chemin du root jusqu'à chaque nœud (pour le breadcrumb)
    const pathToRoot = {};
    function buildPaths(node, path) {
      pathToRoot[node.id] = path.concat([node.id]);
      node.children.forEach(c => buildPaths(c, pathToRoot[node.id]));
    }
    buildPaths(root, []);

    // ---- DOM scaffold ----
    container.appendChild(el('p', { class: 'lead' },
      'Architecture mentale du sujet. Survole un nœud pour voir sa description, clique sur un nœud avec des enfants pour zoomer dedans. Molette pour zoomer librement, glisser-déposer pour déplacer.'));

    const wrap = el('div', { class: 'mindmap-wrap' });
    const breadcrumb = el('div', { class: 'mm-breadcrumb' });
    const toolbar = el('div', { class: 'mm-toolbar' });
    const svgHost = el('div', { class: 'mm-svg-host' });
    const card = el('div', { class: 'mm-card' });
    const cardLabel = el('h4', { class: 'mm-card-label' });
    const cardDesc = el('div', { class: 'mm-card-desc' });
    card.appendChild(cardLabel);
    card.appendChild(cardDesc);
    wrap.appendChild(breadcrumb);
    wrap.appendChild(toolbar);
    wrap.appendChild(svgHost);
    wrap.appendChild(card);
    container.appendChild(wrap);

    // ---- Constantes layout ----
    // viewBox élargi (W×H réels = 960×720) + 80 px de padding sur chaque côté
    // pour que les nœuds des niveaux 3-4 placés à r=530 du centre rentrent
    // sans déborder. Le centre logique reste (480, 360) ; on décale juste le
    // min-x / min-y du viewBox.
    const W = 960, H = 720;
    const VB_PAD_X = 100, VB_PAD_Y = 80;
    const cx = W / 2, cy = H / 2;
    const levelRadii = [0, 230, 400, 480, 530];

    // ---- État pan/zoom (persistant entre renderMap d'une même vue focus) ----
    let panX = 0, panY = 0, scale = 1;
    const MIN_SCALE = 0.4, MAX_SCALE = 4;
    let isPanning = false, panLastX = 0, panLastY = 0, panMoved = false;
    // AbortController pour nettoyer les listeners window au démontage / re-render
    let mmCtrl = null;

    function applyTransform() {
      const g = svgHost.querySelector('.mm-viewport');
      if (g) g.setAttribute('transform', `translate(${panX} ${panY}) scale(${scale})`);
    }
    function resetView() {
      panX = 0; panY = 0; scale = 1;
      applyTransform();
    }
    function zoomBy(factor, ax, ay) {
      // ax, ay : point d'ancrage en coordonnées SVG (le point qui doit rester
      // sous le curseur après zoom). Si null, on zoome vers le centre du viewBox.
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * factor));
      if (Math.abs(newScale - scale) < 0.001) return;
      if (ax === null || ay === null) { ax = cx; ay = cy; }
      // Le point monde sous (ax,ay) doit rester sous (ax,ay) après mise à
      // jour de scale : on inverse la transformation.
      panX = ax - (ax - panX) * (newScale / scale);
      panY = ay - (ay - panY) * (newScale / scale);
      scale = newScale;
      applyTransform();
    }

    // Toolbar — boutons zoom/dézoom/recentrer.
    function makeToolBtn(label, title, onclick) {
      return el('button', { class: 'mm-tool-btn', title, onclick }, label);
    }
    toolbar.appendChild(makeToolBtn('+', 'Zoomer (ou molette ↑)', (e) => { e.stopPropagation(); zoomBy(1.25, null, null); }));
    toolbar.appendChild(makeToolBtn('−', 'Dézoomer (ou molette ↓)', (e) => { e.stopPropagation(); zoomBy(1 / 1.25, null, null); }));
    toolbar.appendChild(makeToolBtn('⟲', 'Recentrer la vue', (e) => { e.stopPropagation(); resetView(); }));
    const fsBtn = makeToolBtn('⛶', 'Plein écran (Echap pour sortir)', (e) => { e.stopPropagation(); toggleFullscreen(); });
    toolbar.appendChild(fsBtn);

    // ---- Plein écran ----
    // Calqué sur la carte globale : la classe is-fullscreen sur wrap fixe le
    // wrapper en position fixed inset:0, et la classe body masque
    // sidebar/topbar pour que la carte occupe tout l'écran.
    function toggleFullscreen(on) {
      const enable = on != null ? on : !wrap.classList.contains('is-fullscreen');
      wrap.classList.toggle('is-fullscreen', enable);
      document.body.classList.toggle('mindmap-fullscreen-active', enable);
      fsBtn.title = enable ? 'Quitter le plein écran (Echap)' : 'Plein écran (Echap pour sortir)';
      fsBtn.textContent = enable ? '⤫' : '⛶';
    }
    function onMindmapEscape(e) {
      if (e.key !== 'Escape') return;
      if (wrap.classList.contains('is-fullscreen')) {
        toggleFullscreen(false);
      }
    }
    document.addEventListener('keydown', onMindmapEscape);
    // Cleanup : à la navigation, on s'assure que la classe body est retirée
    // pour ne pas laisser sidebar/topbar masquées si on quitte la vue.
    window.addEventListener('hashchange', function cleanupMmFs() {
      if (document.body.classList.contains('mindmap-fullscreen-active')) {
        document.body.classList.remove('mindmap-fullscreen-active');
      }
      window.removeEventListener('hashchange', cleanupMmFs);
      document.removeEventListener('keydown', onMindmapEscape);
    });

    // ---- État ----
    let focusedId = root.id;
    let pinnedId = null;

    // ---- Rendu (rappelable quand focusedId change) ----
    function renderMap() {
      const focused = byId[focusedId];
      if (!focused) { focusedId = root.id; return renderMap(); }

      // Placement radial dans le sous-arbre du focused.
      // Allocation angulaire UNIFORME : chaque frère reçoit le même secteur,
      // indépendamment de la taille de son sous-arbre. C'est plus équitable
      // pour la lecture des labels (un sous-arbre lourd ne squeeze plus ses
      // voisins feuilles), au prix d'une légère sous-utilisation d'espace
      // pour les sous-arbres profonds.
      const positions = {};
      const branchOf = {};
      const ancestorsOf = {};
      const descendantsOf = {};

      function placeRecursive(node, depth, angleStart, angleEnd, branchRoot, ancestors) {
        if (depth === 0) {
          positions[node.id] = { x: cx, y: cy, depth: 0 };
        } else {
          const angle = (angleStart + angleEnd) / 2;
          const r = levelRadii[depth] || levelRadii[levelRadii.length - 1];
          positions[node.id] = {
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
            depth
          };
        }
        branchOf[node.id] = branchRoot;
        ancestorsOf[node.id] = new Set(ancestors);
        if (node.children.length === 0) return;

        const N = node.children.length;
        const totalAngle = angleEnd - angleStart;
        const a = totalAngle / N;
        let acc = angleStart;
        const newAncestors = ancestors.concat([node.id]);
        node.children.forEach(c => {
          const childBranch = (depth === 0) ? c.id : branchRoot;
          placeRecursive(c, depth + 1, acc, acc + a, childBranch, newAncestors);
          acc += a;
        });
      }
      placeRecursive(focused, 0, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI, null, []);

      function computeDescendants(node) {
        const set = new Set();
        node.children.forEach(c => {
          set.add(c.id);
          const cd = computeDescendants(c);
          cd.forEach(d => set.add(d));
        });
        descendantsOf[node.id] = set;
        return set;
      }
      computeDescendants(focused);

      // Couleurs : 1 teinte distincte par enfant direct du focused
      const branchColors = {};
      branchColors[focused.id] = 'var(--accent)';
      focused.children.forEach((c, i) => {
        branchColors[c.id] = MM_BRANCH_PALETTE[i % MM_BRANCH_PALETTE.length];
      });
      function colorOf(nodeId) {
        const branch = branchOf[nodeId];
        if (!branch) return 'var(--accent)';
        return branchColors[branch] || 'var(--accent)';
      }

      // Helpers de construction SVG
      function svgText(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      function attrEscape(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

      let svgInner = '';

      // Arêtes — Bezier cubique avec décalage perpendiculaire constant à
      // 1/3 et 2/3 de l'arête, dans le même sens. Garantit une courbe
      // visible même pour les arêtes radiales (où parent et enfant sont
      // alignés sur le même rayon).
      function emitEdge(parent, child) {
        const p = positions[parent.id], cp = positions[child.id];
        if (!p || !cp) return;
        const dx = cp.x - p.x;
        const dy = cp.y - p.y;
        const len = Math.hypot(dx, dy);
        if (len < 1) return;
        // Perpendiculaire (rotation 90° anti-horaire)
        const perpX = -dy / len;
        const perpY = dx / len;
        const offset = len * 0.20;
        const c1x = p.x + dx / 3 + perpX * offset;
        const c1y = p.y + dy / 3 + perpY * offset;
        const c2x = p.x + (2 * dx) / 3 + perpX * offset;
        const c2y = p.y + (2 * dy) / 3 + perpY * offset;
        const color = colorOf(child.id);
        svgInner += `<path class="mm-link" data-edge="${attrEscape(parent.id)}__${attrEscape(child.id)}" ` +
          `d="M ${p.x.toFixed(1)} ${p.y.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${cp.x.toFixed(1)} ${cp.y.toFixed(1)}" ` +
          `style="--branch-color: ${color}"/>`;
      }
      function walkEdges(node) { node.children.forEach(c => { emitEdge(node, c); walkEdges(c); }); }
      walkEdges(focused);

      // Liens transverses optionnels (cm.liens) — uniquement si les deux
      // bouts sont visibles dans le sous-arbre courant.
      if (Array.isArray(cm.liens)) {
        cm.liens.forEach(l => {
          if (!l) return;
          const fromNode = byId[l.de], toNode = byId[l.vers];
          if (!fromNode || !toNode) return;
          if (!positions[l.de] || !positions[l.vers]) return;
          if (toNode.parent === l.de || fromNode.parent === l.vers) return;
          emitEdge(fromNode, toNode);
        });
      }

      // Nœuds — taille et style selon le niveau
      function emitNode(node) {
        const pos = positions[node.id];
        if (!pos) return;
        let nodeW, nodeH, fontSize;
        if (pos.depth === 0)      { nodeW = Math.max(150, node.label.length * 9 + 32);  nodeH = 52; fontSize = 16; }
        else if (pos.depth === 1) { nodeW = Math.max(115, node.label.length * 7.5 + 22); nodeH = 38; fontSize = 13; }
        else                       { nodeW = Math.max(95,  node.label.length * 6.5 + 18); nodeH = 30; fontSize = 11; }

        const x = pos.x - nodeW / 2;
        const y = pos.y - nodeH / 2;
        const color = colorOf(node.id);
        const hasDesc = node.description ? '1' : '0';
        const hasChildren = node.children.length > 0 ? '1' : '0';
        svgInner += `
          <g class="mm-node" data-id="${attrEscape(node.id)}" data-level="${pos.depth}" data-has-desc="${hasDesc}" data-has-children="${hasChildren}" style="--branch-color: ${color}">
            <rect class="mm-node-bg" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${nodeW}" height="${nodeH}" rx="${(nodeH/2).toFixed(1)}" ry="${(nodeH/2).toFixed(1)}"/>
            <text class="mm-node-text" x="${pos.x.toFixed(1)}" y="${(pos.y + fontSize * 0.35).toFixed(1)}" style="font-size: ${fontSize}px">${svgText(node.label)}</text>
          </g>
        `;
      }
      function walkNodes(node) {
        emitNode(node);
        node.children.forEach(walkNodes);
      }
      walkNodes(focused);

      // Insère le SVG dans son host (remplace le précédent).
      // Tout le contenu (arêtes + nœuds) est wrappé dans un <g class="mm-viewport">
      // qui porte la transformation de pan/zoom. ViewBox élargi avec padding
      // pour que les nœuds des niveaux profonds (r=480-530) rentrent à scale=1.
      const vbX = -VB_PAD_X, vbY = -VB_PAD_Y;
      const vbW = W + 2 * VB_PAD_X, vbH = H + 2 * VB_PAD_Y;
      svgHost.innerHTML =
        `<svg class="mindmap-svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">` +
        `<g class="mm-viewport">${svgInner}</g>` +
        `</svg>`;
      const svgEl = svgHost.querySelector('.mindmap-svg');

      // Réinitialise pan/zoom à chaque rerender (changement de focus,
      // breadcrumb) ; applique la transform du coup pour state cohérent.
      panX = 0; panY = 0; scale = 1; applyTransform();

      // ---- Breadcrumb (seulement quand on n'est pas sur le root) ----
      clear(breadcrumb);
      const path = pathToRoot[focusedId] || [focusedId];
      if (path.length > 1) {
        path.forEach((id, i) => {
          const n = byId[id];
          if (!n) return;
          if (i > 0) breadcrumb.appendChild(el('span', { class: 'mm-breadcrumb-sep' }, '›'));
          const isLast = i === path.length - 1;
          const segLabel = String(n.label).replace(/<[^>]+>/g, '');
          const seg = el('span', {
            class: 'mm-breadcrumb-seg' + (isLast ? ' is-current' : ''),
            onclick: isLast ? null : (e) => {
              e.stopPropagation();
              pinnedId = null;
              focusedId = id;
              renderMap();
            }
          }, segLabel);
          breadcrumb.appendChild(seg);
        });
        breadcrumb.style.display = '';
      } else {
        breadcrumb.style.display = 'none';
      }

      // Reset état carte/épinglage à chaque rerender
      pinnedId = null;
      card.classList.remove('is-visible');

      // ---- Interactivité ----
      function showCardFor(node, nodeEl) {
        if (!node.description) { card.classList.remove('is-visible'); return; }
        cardLabel.textContent = node.label;
        cardDesc.innerHTML = md(node.description).replace(/^<p>|<\/p>$/g, '');
        cardLabel.style.color = colorOf(node.id);

        const nRect = nodeEl.getBoundingClientRect();
        const wRect = wrap.getBoundingClientRect();
        const ncx = nRect.left + nRect.width / 2 - wRect.left;
        const ncy = nRect.top + nRect.height / 2 - wRect.top;
        const halfW = wRect.width / 2;
        const halfH = wRect.height / 2;
        const goRight = ncx < halfW;
        const goBottom = ncy < halfH;
        const off = 14;

        card.style.left = card.style.right = card.style.top = card.style.bottom = '';
        if (goRight)  card.style.left  = (ncx + nRect.width / 2 + off) + 'px';
        else          card.style.right = (wRect.width - (ncx - nRect.width / 2) + off) + 'px';
        if (goBottom) card.style.top    = (ncy + nRect.height / 2 + off) + 'px';
        else          card.style.bottom = (wRect.height - (ncy - nRect.height / 2) + off) + 'px';

        card.classList.add('is-visible');
      }
      function hideCard() { card.classList.remove('is-visible'); }

      function highlightBranch(nodeId) {
        svgEl.classList.add('is-hovering');
        const active = new Set([nodeId]);
        (descendantsOf[nodeId] || new Set()).forEach(id => active.add(id));
        (ancestorsOf[nodeId]   || new Set()).forEach(id => active.add(id));
        svgEl.querySelectorAll('.mm-node').forEach(n => {
          n.classList.toggle('is-active', active.has(n.dataset.id));
        });
        svgEl.querySelectorAll('.mm-link').forEach(l => {
          const parts = (l.dataset.edge || '').split('__');
          l.classList.toggle('is-active', parts.length === 2 && active.has(parts[0]) && active.has(parts[1]));
        });
      }
      function clearHighlight() {
        svgEl.classList.remove('is-hovering');
        svgEl.querySelectorAll('.is-active').forEach(e => e.classList.remove('is-active'));
      }

      svgEl.querySelectorAll('.mm-node').forEach(g => {
        const id = g.getAttribute('data-id');
        const node = byId[id];
        if (!node) return;

        g.addEventListener('mouseenter', () => {
          if (pinnedId) return;
          showCardFor(node, g);
          highlightBranch(id);
        });
        g.addEventListener('mouseleave', () => {
          if (pinnedId) return;
          hideCard();
          clearHighlight();
        });
        g.addEventListener('click', (e) => {
          e.stopPropagation();
          // Si l'utilisateur vient de paner (drag), on n'interprète pas
          // comme un clic — sinon un mouvement de souris déclencherait un
          // zoom-in non voulu sur un nœud survolé.
          if (panMoved) return;
          // Clic sur le focused (central de la vue) : zoom OUT d'un cran si possible
          if (id === focusedId) {
            const p = pathToRoot[focusedId];
            if (p && p.length >= 2) {
              focusedId = p[p.length - 2];
              pinnedId = null;
              renderMap();
              return;
            }
            // Déjà au root → toggle pin (description si elle existe)
            if (pinnedId === id) { pinnedId = null; hideCard(); clearHighlight(); }
            else if (node.description) { pinnedId = id; showCardFor(node, g); highlightBranch(id); }
            return;
          }
          // Clic sur un nœud avec des enfants : zoom IN
          if (node.children.length > 0) {
            focusedId = id;
            pinnedId = null;
            renderMap();
            return;
          }
          // Clic sur une feuille : toggle pin (description)
          if (pinnedId === id) { pinnedId = null; hideCard(); clearHighlight(); }
          else { pinnedId = id; showCardFor(node, g); highlightBranch(id); }
        });
      });
    }

    // Clic ailleurs sur le wrap → désépingle (sans zoomer)
    wrap.addEventListener('click', (e) => {
      if (e.target.closest('.mm-node')) return;
      if (e.target.closest('.mm-breadcrumb-seg')) return;
      if (e.target.closest('.mm-tool-btn')) return;
      // Si on vient de paner, le mouseup déclenche un click sur le wrap :
      // on l'ignore, sinon ça désépingle systématiquement après un drag.
      if (panMoved) return;
      if (!pinnedId) return;
      pinnedId = null;
      card.classList.remove('is-visible');
      const svgEl = svgHost.querySelector('.mindmap-svg');
      if (svgEl) {
        svgEl.classList.remove('is-hovering');
        svgEl.querySelectorAll('.is-active').forEach(elem => elem.classList.remove('is-active'));
      }
    });

    // ---- Pan/zoom interaction ----
    // Wheel : zoom centré sur la position du curseur (en coordonnées viewBox).
    // zoomBy() reçoit le point d'ancrage dans le repère viewBox — c'est le
    // même repère que pan{X,Y} (la transform mm-viewport s'applique APRÈS).
    svgHost.addEventListener('wheel', (e) => {
      e.preventDefault();
      const svgEl = svgHost.querySelector('.mindmap-svg');
      if (!svgEl) return;
      let ax = cx, ay = cy;
      try {
        const ctm = svgEl.getScreenCTM();
        if (ctm) {
          const pt = svgEl.createSVGPoint();
          pt.x = e.clientX; pt.y = e.clientY;
          const sp = pt.matrixTransform(ctm.inverse());
          ax = sp.x; ay = sp.y;
        }
      } catch (_) { /* fallback : centre */ }
      const factor = e.deltaY < 0 ? 1.15 : (1 / 1.15);
      zoomBy(factor, ax, ay);
    }, { passive: false });

    // Mousedown : démarre un pan. On l'autorise même quand le mousedown
    // tombe sur un nœud — c'est seulement au mouseup, si on a bougé, qu'on
    // empêche le clic (via panMoved). Comme ça, glisser-déposer depuis
    // n'importe où dans la carte fonctionne.
    svgHost.addEventListener('mousedown', (e) => {
      // ignore clics sur la toolbar / breadcrumb / fullscreen — pas concernés
      if (e.button !== 0) return;
      isPanning = true;
      panLastX = e.clientX; panLastY = e.clientY;
      panMoved = false;
      svgHost.classList.add('is-panning');
      // Nettoie un éventuel ancien controller, puis enregistre les listeners
      // window le temps du drag (un seul drag à la fois).
      if (mmCtrl) mmCtrl.abort();
      mmCtrl = new AbortController();
      const sig = mmCtrl.signal;
      window.addEventListener('mousemove', (ev) => {
        if (!isPanning) return;
        const dx = ev.clientX - panLastX;
        const dy = ev.clientY - panLastY;
        if (!panMoved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) panMoved = true;
        panLastX = ev.clientX; panLastY = ev.clientY;
        const svgEl = svgHost.querySelector('.mindmap-svg');
        if (!svgEl) return;
        const ctm = svgEl.getScreenCTM();
        if (!ctm || !ctm.a) return;
        // Conversion px-écran → unités viewBox (la transform mm-viewport
        // s'applique APRÈS, donc pan{X,Y} est en coordonnées viewBox).
        panX += dx / ctm.a;
        panY += dy / ctm.d;
        applyTransform();
      }, { signal: sig });
      window.addEventListener('mouseup', () => {
        if (!isPanning) return;
        isPanning = false;
        svgHost.classList.remove('is-panning');
        // Garde panMoved=true le temps que le click event remonte (très court
        // après le mouseup), puis reset pour la prochaine interaction.
        setTimeout(() => { panMoved = false; }, 0);
        if (mmCtrl) { mmCtrl.abort(); mmCtrl = null; }
      }, { signal: sig });
    });

    // ---- Touch (tactile) : 1 doigt = pan, 2 doigts = pinch-zoom ----
    // Le repère viewBox est obtenu via getScreenCTM().inverse() comme pour
    // la souris. On reuse zoomBy() qui prend un point d'ancrage en viewBox.
    let touchMode = null;     // 'pan' | 'pinch' | null
    let touchLast = null;     // { x, y } pour pan, { dist, midX, midY } pour pinch

    function touchVB(t, svgEl) {
      const ctm = svgEl.getScreenCTM();
      if (!ctm) return null;
      const pt = svgEl.createSVGPoint();
      pt.x = t.clientX; pt.y = t.clientY;
      return pt.matrixTransform(ctm.inverse());
    }

    svgHost.addEventListener('touchstart', (e) => {
      const svgEl = svgHost.querySelector('.mindmap-svg');
      if (!svgEl) return;
      if (e.touches.length === 1) {
        // Pan tactile à un doigt
        e.preventDefault();
        touchMode = 'pan';
        panMoved = false;
        touchLast = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        svgHost.classList.add('is-panning');
      } else if (e.touches.length === 2) {
        // Pinch-zoom à deux doigts : on capture la distance initiale et le
        // milieu des deux doigts (en repère viewBox) comme point d'ancrage.
        e.preventDefault();
        touchMode = 'pinch';
        const t0 = e.touches[0], t1 = e.touches[1];
        const dx = t1.clientX - t0.clientX, dy = t1.clientY - t0.clientY;
        const dist = Math.hypot(dx, dy);
        const midPt = svgEl.createSVGPoint();
        midPt.x = (t0.clientX + t1.clientX) / 2;
        midPt.y = (t0.clientY + t1.clientY) / 2;
        const ctm = svgEl.getScreenCTM();
        const mid = ctm ? midPt.matrixTransform(ctm.inverse()) : { x: cx, y: cy };
        touchLast = { dist, midX: mid.x, midY: mid.y };
        panMoved = true;  // un pinch n'est jamais un "clic" de nœud
      }
    }, { passive: false });

    svgHost.addEventListener('touchmove', (e) => {
      const svgEl = svgHost.querySelector('.mindmap-svg');
      if (!svgEl) return;
      if (touchMode === 'pan' && e.touches.length === 1 && touchLast) {
        e.preventDefault();
        const dx = e.touches[0].clientX - touchLast.x;
        const dy = e.touches[0].clientY - touchLast.y;
        if (!panMoved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) panMoved = true;
        touchLast.x = e.touches[0].clientX;
        touchLast.y = e.touches[0].clientY;
        const ctm = svgEl.getScreenCTM();
        if (!ctm || !ctm.a) return;
        panX += dx / ctm.a;
        panY += dy / ctm.d;
        applyTransform();
      } else if (touchMode === 'pinch' && e.touches.length === 2 && touchLast) {
        e.preventDefault();
        const t0 = e.touches[0], t1 = e.touches[1];
        const ddx = t1.clientX - t0.clientX, ddy = t1.clientY - t0.clientY;
        const dist = Math.hypot(ddx, ddy);
        if (touchLast.dist > 0) {
          const factor = dist / touchLast.dist;
          zoomBy(factor, touchLast.midX, touchLast.midY);
        }
        // Met à jour la distance et le centre pour le frame suivant (pan
        // pendant le pinch quand les doigts glissent ensemble).
        const midPt = svgEl.createSVGPoint();
        midPt.x = (t0.clientX + t1.clientX) / 2;
        midPt.y = (t0.clientY + t1.clientY) / 2;
        const ctm = svgEl.getScreenCTM();
        const mid = ctm ? midPt.matrixTransform(ctm.inverse()) : { x: touchLast.midX, y: touchLast.midY };
        touchLast.dist = dist;
        touchLast.midX = mid.x;
        touchLast.midY = mid.y;
      }
    }, { passive: false });

    svgHost.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        if (touchMode === 'pan') svgHost.classList.remove('is-panning');
        touchMode = null;
        touchLast = null;
        // panMoved reste true le temps que d'éventuels click compensatoires
        // soient ignorés, puis reset au tick suivant.
        setTimeout(() => { panMoved = false; }, 0);
      } else if (e.touches.length === 1 && touchMode === 'pinch') {
        // Bascule pinch → pan quand un doigt se lève
        touchMode = 'pan';
        touchLast = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    });

    renderMap();
  }

  // =================================================================
  // VIEW: CARTE GLOBALE
  // =================================================================

  function renderCarte(main) {
    setAccent(null);
    main.appendChild(el('span', { class: 'eyebrow' }, 'Vue d\'ensemble'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Carte <em>globale</em> des savoirs' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Les sujets s\'attirent par tags partagés et liens [[slug]]. Survole un sujet pour voir ses voisins, clique pour l\'ouvrir.'));

    const sujets = state.sujetsOrder.map(id => state.sujets[id]);
    if (sujets.length === 0) {
      main.appendChild(el('div', { class: 'empty-state' },
        el('div', { class: 'empty-state-icon' }, '✦'),
        el('p', null, 'Ta carte est encore vierge. Chaque nouveau sujet exploré l\'enrichira.')
      ));
      return;
    }

    // ---- Construction des nœuds ----
    const top = computeTopSujets(state.user.dailyActivity);
    const timeById = {};
    top.forEach(t => { timeById[t.id] = t.timeMs; });

    // Canvas plus généreux maintenant qu'on a 50+ sujets : on a besoin de
    // place pour que les nœuds respirent et que les labels ne se chevauchent
    // pas en permanence. preserveAspectRatio garantit que ça reste lisible
    // sur n'importe quelle largeur de conteneur.
    const W = 1280, H = 920, cx = W / 2, cy = H / 2;

    // ---- Layout en SECTEURS PAR DOMAINE ----
    // Au lieu d'un cercle uniforme suivi d'un force-directed qui converge
    // en hairball, chaque domaine occupe un secteur fixe du canvas. Les
    // sujets sont pré-placés sur un arc à l'intérieur de leur secteur, puis
    // une force d'ancrage forte les maintient là pendant la simulation. Les
    // liens INTER-secteurs deviennent l'information visuelle principale —
    // les liens intra-secteur sont cachés par défaut (révélés au survol).
    const domCount = {};
    sujets.forEach(s => {
      const d = (s.meta.domaines || ['Autre'])[0];
      domCount[d] = (domCount[d] || 0) + 1;
    });
    const sortedDoms = Object.keys(domCount).sort((a, b) =>
      a.localeCompare(b, 'fr', { sensitivity: 'base' })
    );
    const MIN_SECTOR_DEG = 18;  // pour qu'un domaine à 1 sujet reste lisible
    // Chaque domaine reçoit un angle proportionnel à son count, mais au moins
    // MIN_SECTOR_DEG. Si la somme dépasse 360°, on rescale.
    let provisionalTotal = 0;
    const provisional = {};
    sortedDoms.forEach(d => {
      const propor = (domCount[d] / sujets.length) * 360;
      provisional[d] = Math.max(MIN_SECTOR_DEG, propor);
      provisionalTotal += provisional[d];
    });
    const sectorDeg = {};
    if (provisionalTotal > 360) {
      const k = 360 / provisionalTotal;
      sortedDoms.forEach(d => sectorDeg[d] = provisional[d] * k);
    } else {
      sortedDoms.forEach(d => sectorDeg[d] = provisional[d]);
    }
    const sectorStart = {}, sectorEnd = {};
    let cumDeg = -90;  // début à midi (12h)
    sortedDoms.forEach(d => {
      sectorStart[d] = cumDeg * Math.PI / 180;
      cumDeg += sectorDeg[d];
      sectorEnd[d] = cumDeg * Math.PI / 180;
    });
    const SECTOR_R = Math.min(W, H) * 0.36;  // rayon "central" des sujets dans leur secteur
    const SECTOR_R_VARY = 70;                // pour briser l'alignement parfait
    const domIndexCounter = {};
    const nodes = sujets.map(s => {
      const labelClean = String(s.meta.titre).replace(/<[^>]+>/g, '');
      const domain = (s.meta.domaines || ['Autre'])[0];
      const dCount = domCount[domain];
      const dIdx = (domIndexCounter[domain] = (domIndexCounter[domain] || 0) + 1) - 1;
      // Position dans le secteur : étalée le long de l'arc, à un rayon légèrement varié
      const t = (dIdx + 0.5) / dCount;
      const sw = sectorEnd[domain] - sectorStart[domain];
      const ang = sectorStart[domain] + t * sw;
      const r = SECTOR_R + ((dIdx % 3) - 1) * SECTOR_R_VARY * 0.6;
      const ax = cx + Math.cos(ang) * r;
      const ay = cy + Math.sin(ang) * r;
      return {
        id: s.meta.id,
        label: labelClean,
        labelLower: labelClean.toLowerCase(),
        shortLabel: labelClean.length > 28 ? labelClean.slice(0, 27) + '…' : labelClean,
        resume: s.resume || '',
        domains: s.meta.domaines || ['Autre'],
        domain: domain,
        timeMs: timeById[s.meta.id] || 0,
        x: ax, y: ay,
        ax: ax, ay: ay,  // position d'ancrage cible dans le secteur
        vx: 0, vy: 0
      };
    });
    const nodeById = {};
    nodes.forEach(n => nodeById[n.id] = n);

    // ---- Construction des arêtes (avec motifs) ----
    // Tags partagés (poids = nb), liens [[slug]] (poids 2), lie_a (poids 3).
    // On mémorise pour chaque arête : tags communs, présence d'un lien [[slug]],
    // présence d'un lien_a — pour pouvoir l'expliquer à l'utilisateur ensuite.
    const edgeMap = new Map(); // key "a|b" -> { weight, tags:Set, slugFromTo:Set, lieA:bool }
    function ensureEdge(a, b) {
      if (a === b || !nodeById[a] || !nodeById[b]) return null;
      const k = a < b ? a + '|' + b : b + '|' + a;
      let info = edgeMap.get(k);
      if (!info) {
        info = { weight: 0, tags: new Set(), slugLink: false, lieA: false };
        edgeMap.set(k, info);
      }
      return info;
    }
    function addTagEdge(a, b, sharedTags) {
      const info = ensureEdge(a, b); if (!info) return;
      sharedTags.forEach(t => info.tags.add(t));
      info.weight += sharedTags.length;
    }
    function addSlugEdge(a, b) {
      const info = ensureEdge(a, b); if (!info) return;
      if (!info.slugLink) info.weight += 2;
      info.slugLink = true;
    }
    function addLieAEdge(a, b) {
      const info = ensureEdge(a, b); if (!info) return;
      if (!info.lieA) info.weight += 3;
      info.lieA = true;
    }
    for (let i = 0; i < sujets.length; i++) {
      for (let j = i + 1; j < sujets.length; j++) {
        const shared = (sujets[i].meta.tags || []).filter(t => (sujets[j].meta.tags || []).includes(t));
        if (shared.length > 0) addTagEdge(sujets[i].meta.id, sujets[j].meta.id, shared);
      }
    }
    // Citations détaillées : pour chaque [[slug]] détecté, on conserve
    // d'où il vient (sujet source, index de bloc, titre du bloc, snippet)
    // afin de pouvoir naviguer précisément vers ce passage.
    const citations = []; // { source, target, blockIdx, blockTitle, snippet }
    sujets.forEach(s => {
      // Regex reconnaît [[slug]] ET [[slug|alias]] — groupe 1 = slug,
      // groupe 2 = alias optionnel (ignoré pour la construction du graph,
      // pertinent pour le nettoyage de snippet ci-dessous).
      const re = /\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g;
      // Dédoublonnage AU NIVEAU DU SUJET : si un même slug est cité plusieurs
      // fois dans le même bloc (par ex. dans plusieurs champs d'un widget),
      // on n'enregistre qu'une seule citation pour ce couple (bloc, target).
      const seenInSujet = new Set();
      function makeSnippet(text, target) {
        // Recherche d'un marker pouvant être [[target]] ou [[target|alias]].
        // On utilise un regex avec lookahead pour avoir la longueur réelle.
        const markerRe = new RegExp('\\[\\[' + target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\|[^\\]]+)?\\]\\]');
        const m = markerRe.exec(text);
        if (!m) return '';
        const idx = m.index;
        const markerLen = m[0].length;
        const radius = 110;
        let start = Math.max(0, idx - radius);
        let end = Math.min(text.length, idx + markerLen + radius);
        // Recale aux frontières de mot pour éviter les coupures au milieu
        if (start > 0) {
          const sp = text.indexOf(' ', start);
          if (sp >= 0 && sp < idx) start = sp + 1;
        }
        if (end < text.length) {
          const sp = text.lastIndexOf(' ', end);
          if (sp > idx + markerLen) end = sp;
        }
        let snip = text.slice(start, end);
        // Nettoyage léger : [[slug]] → "slug lisible" (ou alias si présent),
        // retire **, *, `
        snip = snip
          .replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, sl, alias) => alias || sl.replace(/-/g, ' '))
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\*([^*]+)\*/g, '$1')
          .replace(/`([^`]+)`/g, '$1')
          .replace(/\s+/g, ' ').trim();
        if (start > 0) snip = '… ' + snip;
        if (end < text.length) snip = snip + ' …';
        return snip;
      }
      function recordHits(text, blockIdx, blockTitle) {
        if (!text) return;
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(text)) !== null) {
          const target = m[1];
          if (target === s.meta.id || !nodeById[target]) continue;
          addSlugEdge(s.meta.id, target);
          // Clé persistante à l'échelle du sujet : (bloc, target)
          const key = blockIdx + '|' + target;
          if (seenInSujet.has(key)) continue;
          seenInSujet.add(key);
          citations.push({
            source: s.meta.id,
            target: target,
            blockIdx: blockIdx,
            blockTitle: blockTitle,
            snippet: makeSnippet(text, target)
          });
        }
      }
      function scanAny(val, blockIdx, blockTitle) {
        if (val == null) return;
        if (typeof val === 'string') recordHits(val, blockIdx, blockTitle);
        else if (Array.isArray(val)) val.forEach(v => scanAny(v, blockIdx, blockTitle));
        else if (typeof val === 'object') Object.values(val).forEach(v => scanAny(v, blockIdx, blockTitle));
      }
      // Résumé / points clés : pas attachés à un bloc cours (blockIdx = -1)
      if (s.resume) recordHits(s.resume, -1, 'Résumé');
      if (Array.isArray(s.points_cles)) {
        s.points_cles.forEach(p => recordHits(p, -1, 'Points clés'));
      }
      // Blocs du cours : on tente de récupérer un titre lisible
      if (Array.isArray(s.cours)) {
        s.cours.forEach((b, i) => {
          if (!b) return;
          const rawTitle = b.titre || b.label || ('Bloc ' + (i + 1));
          const blockTitle = String(rawTitle).replace(/<[^>]+>/g, '').trim() || ('Bloc ' + (i + 1));
          scanAny(b, i, blockTitle);
        });
      }
      // lie_a : lien fort déclaré explicitement
      (s.meta.lie_a || []).forEach(id => addLieAEdge(s.meta.id, id));
    });
    const edges = Array.from(edgeMap.entries()).map(([k, info]) => {
      const [from, to] = k.split('|');
      return {
        from: from, to: to,
        weight: info.weight,
        tags: Array.from(info.tags),
        slugLink: info.slugLink,
        lieA: info.lieA
      };
    });

    // ---- Index des voisins + raisons par paire ----
    const neighbors = {};
    const neighborReasons = {}; // {a: {b: { tags, slugLink, lieA }}}
    const citationsByPair = {}; // {a: {b: [citation, citation, ...]}}
    nodes.forEach(n => {
      neighbors[n.id] = new Set();
      neighborReasons[n.id] = {};
      citationsByPair[n.id] = {};
    });
    edges.forEach(e => {
      neighbors[e.from].add(e.to); neighbors[e.to].add(e.from);
      const reason = { tags: e.tags, slugLink: e.slugLink, lieA: e.lieA };
      neighborReasons[e.from][e.to] = reason;
      neighborReasons[e.to][e.from] = reason;
    });
    // Une citation source→target est visible des deux côtés (à la fois
    // depuis le sujet qui cite et depuis celui qui est cité).
    citations.forEach(c => {
      if (!citationsByPair[c.source][c.target]) citationsByPair[c.source][c.target] = [];
      if (!citationsByPair[c.target][c.source]) citationsByPair[c.target][c.source] = [];
      citationsByPair[c.source][c.target].push(c);
      citationsByPair[c.target][c.source].push(c);
    });

    // ---- Simulation force-directed ANCRÉE AUX SECTEURS ----
    // La force dominante est désormais l'ancrage : chaque nœud est tiré
    // vers sa position cible dans son secteur. La répulsion ne joue que
    // localement (sur les voisins proches) pour éviter le chevauchement.
    // L'attraction par arête reste, mais à intensité réduite, pour que les
    // sujets très liés se rapprochent légèrement sans casser la disposition.
    const ITER = 200;
    const REPULSION = 12000;
    const REPULSION_RANGE = 240;   // au-delà, on laisse l'ancrage faire son travail
    const ATTRACTION = 0.008;
    const ANCHOR_FORCE = 0.055;    // ressort qui ramène chaque nœud à son ancre
    const DAMPING = 0.82;
    const MIN_DIST = 95;

    for (let it = 0; it < ITER; it++) {
      nodes.forEach(n => { n.fx = 0; n.fy = 0; });
      // Répulsion LOCALE : seulement entre voisins proches
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y;
          const d2 = dx * dx + dy * dy + 0.01;
          const d = Math.sqrt(d2);
          if (d > REPULSION_RANGE) continue;
          let f = REPULSION / d2;
          if (d < MIN_DIST) f += (MIN_DIST - d) * 0.5;
          const fx = (dx / d) * f, fy = (dy / d) * f;
          nodes[i].fx -= fx; nodes[i].fy -= fy;
          nodes[j].fx += fx; nodes[j].fy += fy;
        }
      }
      // Attraction modérée le long des arêtes (poids capé à 2 pour ne pas
      // écraser l'ancrage)
      edges.forEach(e => {
        const a = nodeById[e.from], b = nodeById[e.to];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy + 0.01);
        const f = ATTRACTION * d * Math.min(2, (e.weight || 1));
        a.fx += (dx / d) * f; a.fy += (dy / d) * f;
        b.fx -= (dx / d) * f; b.fy -= (dy / d) * f;
      });
      // Force d'ancrage : ressort vers la position cible dans le secteur
      nodes.forEach(n => {
        n.fx += (n.ax - n.x) * ANCHOR_FORCE;
        n.fy += (n.ay - n.y) * ANCHOR_FORCE;
      });
      // Intégration + bornes
      nodes.forEach(n => {
        n.vx = (n.vx + n.fx) * DAMPING;
        n.vy = (n.vy + n.fy) * DAMPING;
        n.x += n.vx; n.y += n.vy;
        n.x = Math.max(80, Math.min(W - 80, n.x));
        n.y = Math.max(60, Math.min(H - 60, n.y));
      });
    }

    // ---- Placement multi-position des labels ----
    // Pour chaque nœud, on essaie 8 positions candidates et on retient
    // celle qui minimise une pénalité (chevauchement avec autres labels,
    // chevauchement avec cercles, sortie de cadre).
    nodes.forEach(n => {
      n.lblW = Math.max(60, n.shortLabel.length * 6.6);
      n.lblH = 14;
    });
    const placedLabels = []; // {bx, by, w, h}
    const labelOrder = nodes.slice().sort((a, b) => b.lblW - a.lblW); // labels longs en premier
    labelOrder.forEach(n => {
      // Candidats : [dx, dy, anchor] où (dx, dy) = offset du centre du label
      // par rapport au centre du nœud. Ordre = priorité décroissante.
      const halfW = n.lblW / 2;
      const C = [
        [0,           22, 'middle'],   // dessous (par défaut)
        [0,          -20, 'middle'],   // dessus
        [ halfW + 14,  4, 'start'],    // droite
        [-halfW - 14,  4, 'end'],      // gauche
        [0,           38, 'middle'],   // plus bas
        [0,          -36, 'middle'],   // plus haut
        [ halfW + 14, 22, 'start'],    // bas-droite
        [-halfW - 14, 22, 'end']       // bas-gauche
      ];
      let best = null, bestPenalty = Infinity;
      for (let i = 0; i < C.length; i++) {
        const cdx = C[i][0], cdy = C[i][1], anchor = C[i][2];
        const bx = n.x + cdx;
        const by = n.y + cdy;
        let penalty = i * 0.7; // léger biais vers les premiers candidats
        // Hors cadre SVG
        if (by < 14 || by > H - 8) penalty += 250;
        if (bx - halfW < 4 || bx + halfW > W - 4) penalty += 250;
        // Chevauchement avec labels déjà placés
        for (const p of placedLabels) {
          const dx = Math.abs(bx - p.bx);
          const dy = Math.abs(by - p.by);
          const minDX = (n.lblW + p.w) / 2 + 4;
          const minDY = (n.lblH + p.h) / 2 + 3;
          if (dx < minDX && dy < minDY) {
            penalty += (minDX - dx) * (minDY - dy) * 0.6;
          }
        }
        // Chevauchement avec les cercles (autres nœuds)
        for (const m of nodes) {
          if (m === n) continue;
          const dx = Math.abs(bx - m.x);
          const dy = Math.abs(by - m.y);
          const minDX = halfW + 10;
          const minDY = n.lblH / 2 + 12;
          if (dx < minDX && dy < minDY) {
            penalty += (minDX - dx) * (minDY - dy) * 0.3;
          }
        }
        if (penalty < bestPenalty) {
          bestPenalty = penalty;
          best = { bx: bx, by: by, anchor: anchor };
        }
      }
      n.lblBX = best.bx;
      n.lblBY = best.by;
      n.lblAnchor = best.anchor;
      placedLabels.push({ bx: best.bx, by: best.by, w: n.lblW, h: n.lblH });
    });

    // ---- Toolbar ----
    const search = el('input', {
      type: 'search',
      class: 'globe-search',
      placeholder: 'Chercher un sujet…'
    });
    const allDomains = [...new Set(sujets.flatMap(s => s.meta.domaines || []))].sort((a, b) =>
      a.localeCompare(b, 'fr', { sensitivity: 'base' })
    );
    const domSel = el('select', { class: 'globe-domain-select' });
    domSel.appendChild(el('option', { value: '' }, 'Tous les domaines'));
    allDomains.forEach(d => domSel.appendChild(el('option', { value: d }, d)));

    const cb = el('input', { type: 'checkbox' });
    const isolatedToggle = el('label', { class: 'globe-toggle' },
      cb,
      el('span', null, 'Masquer les isolés')
    );
    // Par défaut : les arêtes de poids 1 (un seul tag partagé, souvent du
    // bruit thématique) sont masquées. Coché = on affiche tout.
    const cbWeakEdges = el('input', { type: 'checkbox' });
    const weakEdgesToggle = el('label', { class: 'globe-toggle' },
      cbWeakEdges,
      el('span', null, 'Afficher les liens faibles')
    );
    // Par défaut : labels masqués sauf au survol/focus (mode "carte
    // stellaire ultra-aérée"). Coché = on affiche tous les labels en
    // permanence pour une vue d'ensemble nominative.
    const cbAllLabels = el('input', { type: 'checkbox' });
    const allLabelsToggle = el('label', { class: 'globe-toggle' },
      cbAllLabels,
      el('span', null, 'Tous les labels')
    );
    const fullscreenBtn = el('button', {
      class: 'globe-btn-action',
      title: 'Passer la carte en plein écran (Echap pour sortir)'
    }, '⛶ Plein écran');
    main.appendChild(el('div', { class: 'globe-toolbar' },
      search, domSel, isolatedToggle, weakEdgesToggle, allLabelsToggle, fullscreenBtn));

    // ---- Rendu SVG ----
    function attrEscape(s) {
      return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    let svgInner = '';

    // ---- Champ d'étoiles d'arrière-plan (déterministe, couvre tout le viewBox) ----
    // Densité un peu plus généreuse depuis qu'on a retiré la bordure : les
    // étoiles vont jusqu'au bord du conteneur et il ne doit pas y avoir de
    // zones "vides" trop visibles.
    let stars = '';
    for (let i = 0; i < 160; i++) {
      const sx = ((i * 9301 + 49297) % 233280) / 233280 * W;
      const sy = ((i * 7919 + 24593) % 233280) / 233280 * H;
      const sr = (0.4 + ((i * 17) % 7) * 0.22).toFixed(2);
      const sop = (0.04 + ((i * 11) % 5) * 0.022).toFixed(2);
      stars += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${sr}" fill="#ece4d3" opacity="${sop}"/>`;
    }
    svgInner += `<g class="globe-fd-stars" aria-hidden="true">${stars}</g>`;

    // ---- Arcs de secteur : un arc coloré en bord extérieur pour chaque
    // domaine, avec son label gravé au-dehors. Donne une lecture immédiate
    // des "régions" thématiques de la carte. ----
    const ARC_INNER = SECTOR_R - 70;
    const ARC_OUTER = SECTOR_R + 70;
    // Table d'abréviations pour les domaines aux libellés longs. Permet aux
    // labels de tenir dans la largeur angulaire de leur secteur — surtout
    // crucial pour les domaines à 1 sujet qui ne reçoivent que MIN_SECTOR_DEG
    // d'arc et où "Sciences cognitives" déborderait sur ses voisins.
    const DOMAIN_ABBR = {
      'Sciences cognitives':  'Sci. cognitives',
      'Sciences de la Terre': 'Sci. Terre',
      'Mathématiques':        'Maths',
      'Astrophysique':        'Astrophys.',
      'Architecture':         'Archi.',
      'Informatique':         'Info',
      'Philosophie':          'Philo',
      'Géopolitique':         'Géopol.',
      'Environnement':        'Environn.'
    };
    function abbrevDomain(d) { return DOMAIN_ABBR[d] || d; }
    let arcs = '';
    let arcLabels = '';
    sortedDoms.forEach(d => {
      const a0 = sectorStart[d], a1 = sectorEnd[d];
      const fill = domainColor(d);
      const x1 = cx + Math.cos(a0) * ARC_INNER;
      const y1 = cy + Math.sin(a0) * ARC_INNER;
      const x2 = cx + Math.cos(a1) * ARC_INNER;
      const y2 = cy + Math.sin(a1) * ARC_INNER;
      const x3 = cx + Math.cos(a1) * ARC_OUTER;
      const y3 = cy + Math.sin(a1) * ARC_OUTER;
      const x4 = cx + Math.cos(a0) * ARC_OUTER;
      const y4 = cy + Math.sin(a0) * ARC_OUTER;
      const largeArc = (a1 - a0) > Math.PI ? 1 : 0;
      const dpath =
        `M ${x1.toFixed(1)} ${y1.toFixed(1)} ` +
        `A ${ARC_INNER.toFixed(1)} ${ARC_INNER.toFixed(1)} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} ` +
        `L ${x3.toFixed(1)} ${y3.toFixed(1)} ` +
        `A ${ARC_OUTER.toFixed(1)} ${ARC_OUTER.toFixed(1)} 0 ${largeArc} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} ` +
        `Z`;
      arcs += `<path class="globe-fd-sector" data-domain="${attrEscape(d)}" d="${dpath}" fill="${fill}"/>`;

      // Label du domaine : suit la COURBE de l'arc extérieur via <textPath>.
      // Pour les secteurs de la moitié inférieure (sin(midA) > 0), on inverse
      // le SENS du sweep (0 au lieu de 1) et le sens du parcours (a1→a0 au
      // lieu de a0→a1) pour que le texte reste lisible (tête en haut, pas
      // à l'envers). Important : on n'échange PAS uniquement les points
      // avec un sweep inchangé — ça ferait passer l'arc par le long chemin.
      const midA = (a0 + a1) / 2;
      const labelR = ARC_OUTER + 22;
      const lx1 = cx + Math.cos(a0) * labelR;
      const ly1 = cy + Math.sin(a0) * labelR;
      const lx2 = cx + Math.cos(a1) * labelR;
      const ly2 = cy + Math.sin(a1) * labelR;
      const isBottom = (midA > 0 && midA < Math.PI);
      const arcId = 'sector-arc-' + d.toLowerCase().replace(/[^a-z0-9]/g, '-');
      let supPath;
      if (isBottom) {
        // Sens inversé : a1 → a0, CCW (sweep=0), short arc (largeArc=0)
        supPath = `M ${lx2.toFixed(1)} ${ly2.toFixed(1)} A ${labelR.toFixed(1)} ${labelR.toFixed(1)} 0 0 0 ${lx1.toFixed(1)} ${ly1.toFixed(1)}`;
      } else {
        // Sens normal : a0 → a1, CW (sweep=1), short arc
        supPath = `M ${lx1.toFixed(1)} ${ly1.toFixed(1)} A ${labelR.toFixed(1)} ${labelR.toFixed(1)} 0 0 1 ${lx2.toFixed(1)} ${ly2.toFixed(1)}`;
      }
      arcs += `<path id="${arcId}" d="${supPath}" fill="none" stroke="none"/>`;
      arcLabels += `<text class="globe-fd-sector-label" fill="${fill}"><textPath href="#${arcId}" startOffset="50%" text-anchor="middle">${attrEscape(abbrevDomain(d))}</textPath></text>`;
    });
    svgInner += `<g class="globe-fd-sectors" aria-hidden="true">${arcs}</g>`;
    svgInner += `<g class="globe-fd-sector-labels" aria-hidden="true">${arcLabels}</g>`;

    // ---- Arêtes : courbes de Bézier quadratiques pour un rendu organique ----
    // Les longues arêtes (cross-cluster) sont davantage incurvées vers
    // l'extérieur pour éviter de saturer le centre de la carte.
    const edgeCenterX = cx, edgeCenterY = cy;
    edges.forEach(e => {
      const a = nodeById[e.from], b = nodeById[e.to];
      const sameSector = a.domain === b.domain;
      // Arêtes inter-secteurs : visibles, c'est l'information principale.
      // Arêtes intra-secteurs : très discrètes au repos, révélées au survol.
      const opacity = sameSector
        ? Math.min(0.22, 0.05 + (e.weight || 1) * 0.05)
        : Math.min(0.42, 0.14 + (e.weight || 1) * 0.08);
      const width = sameSector
        ? 0.7 + Math.min(1.6, (e.weight || 1) * 0.35)
        : 1.1 + Math.min(2.6, (e.weight || 1) * 0.6);
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      // Pour les arêtes inter-secteurs, on courbe plus prononcément pour
      // dessiner un "pont" qui passe au-dessus du centre. Pour les intra,
      // un léger décalage suffit.
      const off = sameSector
        ? Math.min(30, len * 0.10)
        : Math.min(110, len * 0.26);
      let nx = -dy / len, ny = dx / len;
      const outward = (mx - edgeCenterX) * nx + (my - edgeCenterY) * ny;
      // Inter-secteurs : on courbe VERS l'intérieur (vers cx,cy) pour que
      // l'arc traverse visuellement le cœur, façon route aérienne.
      // Intra-secteurs : vers l'extérieur (préserve le pattern d'avant).
      if (sameSector ? (outward < 0) : (outward > 0)) { nx = -nx; ny = -ny; }
      const ccx = (mx + nx * off).toFixed(1);
      const ccy = (my + ny * off).toFixed(1);
      const d = `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${ccx} ${ccy} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      const weakClass = (e.weight || 1) <= 1 ? ' is-weak' : '';
      const kindClass = sameSector ? ' is-intra' : ' is-inter';
      svgInner += `<path class="globe-fd-edge${weakClass}${kindClass}" data-from="${attrEscape(e.from)}" data-to="${attrEscape(e.to)}" d="${d}" stroke-width="${width}" opacity="${opacity}" fill="none"/>`;
    });

    // ---- Nœuds : halo + cercle + label ----
    // Note : on n'enveloppe plus le cercle dans un <a> car le clic est
    // désormais utilisé pour épingler le focus (et non pour ouvrir la
    // fiche). L'ouverture du sujet se fait depuis le panneau d'info via
    // le bouton "Ouvrir cette fiche", ou via Entrée quand le nœud est
    // focalisé au clavier.
    nodes.forEach(n => {
      const color = domainColor(n.domain);
      const r = 8 + Math.min(14, Math.sqrt(Math.max(0, n.timeMs) / 60000));
      const isIsolated = neighbors[n.id].size === 0;
      const halfW = n.lblW / 2;
      const tx = n.lblAnchor === 'start' ? n.lblBX - halfW
               : n.lblAnchor === 'end'   ? n.lblBX + halfW
               : n.lblBX;
      const ty = n.lblBY + 4.5;
      svgInner += `<g class="globe-fd-node${isIsolated ? ' is-isolated' : ''}" data-id="${attrEscape(n.id)}" data-domain="${attrEscape(n.domain)}" style="color: ${color}" tabindex="0" role="button" aria-label="${attrEscape(n.label)}">
        <circle class="globe-fd-halo" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${(r * 1.9).toFixed(1)}" fill="${color}"/>
        <circle class="globe-fd-dot" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${r.toFixed(1)}" fill="${color}" stroke="${color}"/>
        <text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="${n.lblAnchor}" class="globe-fd-label">${attrEscape(n.shortLabel)}</text>
      </g>`;
    });

    const wrap = el('div', { class: 'globe-fd-wrap' });
    // Modes par défaut :
    //   - "weak-hidden" : les arêtes faibles (poids 1) sont masquées
    //   - "labels-minimal" : les labels apparaissent uniquement au survol
    //     ou sur le sujet épinglé, pour réduire la saturation visuelle
    //     quand la carte contient plusieurs dizaines de sujets.
    wrap.innerHTML = `<svg class="globe-fd-svg weak-hidden labels-minimal" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${svgInner}</svg>`;
    // Bouton d'exit flottant visible uniquement en mode plein écran : la
    // toolbar n'est plus accessible quand wrap couvre tout le viewport,
    // donc on a besoin d'une porte de sortie cliquable (Echap fonctionne
    // aussi, mais ce n'est pas évident sur mobile).
    const exitFsBtn = el('button', {
      class: 'globe-fs-exit',
      title: 'Quitter le plein écran (Echap)'
    }, '✕  Quitter');
    wrap.appendChild(exitFsBtn);
    main.appendChild(wrap);

    // ---- Panneau d'info "ce qui relie ces sujets" ----
    const infoDefault = el('div', { class: 'globe-info-default' },
      'Survole un sujet sur la carte — clique pour épingler son focus. Ce panneau affiche ses voisins et ce qui les relie : tags partagés, citation [[slug]] dans le cours, ou lien explicite déclaré.');
    const infoTitle = el('h3', { class: 'globe-info-title' });
    const infoOpenBtn = el('a', { class: 'globe-info-open', href: '#' }, 'Ouvrir cette fiche →');
    const infoHeader = el('div', { class: 'globe-info-header-row' }, infoTitle, infoOpenBtn);
    const infoSubtitle = el('p', { class: 'globe-info-subtitle' });
    const infoList = el('ul', { class: 'globe-info-list' });
    const infoFocused = el('div', { class: 'globe-info-focused' }, infoHeader, infoSubtitle, infoList);
    infoFocused.hidden = true;
    const infoPanel = el('div', { class: 'globe-info-panel' }, infoDefault, infoFocused);
    main.appendChild(infoPanel);

    // ---- Stats ----
    const isolatedNodes = nodes.filter(n => neighbors[n.id].size === 0);
    main.appendChild(el('div', { class: 'globe-stats' },
      el('div', { class: 'globe-stat' },
        el('div', { class: 'globe-stat-num' }, String(nodes.length)),
        el('div', { class: 'globe-stat-label' }, 'sujets')
      ),
      el('div', { class: 'globe-stat' },
        el('div', { class: 'globe-stat-num' }, String(edges.length)),
        el('div', { class: 'globe-stat-label' }, 'connexions')
      ),
      el('div', { class: 'globe-stat' },
        el('div', { class: 'globe-stat-num' }, String(allDomains.length)),
        el('div', { class: 'globe-stat-label' }, 'domaines')
      ),
      el('div', { class: 'globe-stat' },
        el('div', { class: 'globe-stat-num' }, String(isolatedNodes.length)),
        el('div', { class: 'globe-stat-label' }, 'isolés')
      )
    ));

    // ---- Sujets isolés ----
    if (isolatedNodes.length > 0) {
      const iso = el('div', { class: 'globe-isolated' });
      iso.appendChild(el('h3', { class: 'globe-isolated-title' }, 'Sujets sans connexion'));
      iso.appendChild(el('p', { class: 'globe-isolated-desc' },
        'Aucun tag commun ni lien [[slug]] avec les autres. Ajouter un tag partagé ou un renvoi dans un cours les rapprochera de la carte.'));
      const list = el('div', { class: 'globe-isolated-list' });
      isolatedNodes.forEach(n => {
        const link = el('a', {
          href: '#/sujet/' + encodeURIComponent(n.id),
          class: 'globe-isolated-chip'
        }, n.label);
        link.style.setProperty('--dot-color', domainColor(n.domain));
        list.appendChild(link);
      });
      iso.appendChild(list);
      main.appendChild(iso);
    }

    // Légende des domaines
    if (allDomains.length > 0) {
      main.appendChild(el('div', { class: 'globe-fd-legend' },
        ...allDomains.map(d => el('div', { class: 'globe-fd-legend-item' },
          el('span', { class: 'globe-fd-legend-dot', style: { background: domainColor(d) } }),
          el('span', null, d)
        ))
      ));
    }

    // ---- Interactivité ----
    const svgEl = wrap.querySelector('svg');
    const nodeEls = wrap.querySelectorAll('.globe-fd-node');
    const edgeEls = wrap.querySelectorAll('.globe-fd-edge');
    const nodeElById = {};
    nodeEls.forEach(g => { nodeElById[g.getAttribute('data-id')] = g; });

    let filterDomain = '';
    let filterSearch = '';
    let hideIsolated = false;

    function isVisible(id) {
      const node = nodeById[id];
      if (!node) return false;
      if (filterDomain && !node.domains.includes(filterDomain)) return false;
      if (filterSearch && !node.labelLower.includes(filterSearch) && !id.includes(filterSearch)) return false;
      if (hideIsolated && neighbors[id].size === 0) return false;
      return true;
    }

    function applyFilters() {
      filterSearch = search.value.trim().toLowerCase();
      filterDomain = domSel.value;
      hideIsolated = cb.checked;
      nodeEls.forEach(g => {
        g.classList.toggle('is-hidden', !isVisible(g.getAttribute('data-id')));
      });
      edgeEls.forEach(line => {
        const fHidden = !isVisible(line.getAttribute('data-from'));
        const tHidden = !isVisible(line.getAttribute('data-to'));
        line.classList.toggle('is-hidden', fHidden || tHidden);
      });
    }

    function highlight(id) {
      if (!id) {
        svgEl.classList.remove('has-focus');
        nodeEls.forEach(g => g.classList.remove('is-focus', 'is-neighbor'));
        edgeEls.forEach(l => l.classList.remove('is-active'));
        return;
      }
      svgEl.classList.add('has-focus');
      const nbs = neighbors[id];
      nodeEls.forEach(g => {
        const gid = g.getAttribute('data-id');
        g.classList.toggle('is-focus', gid === id);
        g.classList.toggle('is-neighbor', nbs.has(gid));
      });
      edgeEls.forEach(l => {
        const linked = l.getAttribute('data-from') === id || l.getAttribute('data-to') === id;
        l.classList.toggle('is-active', linked);
      });
    }

    function updateInfoPanel(id) {
      if (!id) return; // on garde le dernier affiché — pas de reset au mouseleave
      const node = nodeById[id];
      if (!node) return;
      const reasons = neighborReasons[id] || {};
      const neighborIds = Object.keys(reasons);

      infoDefault.hidden = true;
      infoFocused.hidden = false;
      infoTitle.textContent = node.label;
      infoOpenBtn.setAttribute('href', '#/sujet/' + encodeURIComponent(id));

      if (neighborIds.length === 0) {
        infoSubtitle.textContent = 'Aucune connexion — ajoute un tag commun ou un lien [[' + node.id + ']] dans un autre cours pour le rattacher.';
        clear(infoList);
        return;
      }
      infoSubtitle.textContent = neighborIds.length + ' sujet' + (neighborIds.length > 1 ? 's' : '') +
        ' relié' + (neighborIds.length > 1 ? 's' : '') + ' :';

      // Tri par force du lien : lie_a > slug > tags (nb)
      const sorted = neighborIds.slice().sort((a, b) => {
        const ra = reasons[a], rb = reasons[b];
        const sa = (ra.lieA ? 100 : 0) + (ra.slugLink ? 50 : 0) + ra.tags.length;
        const sb = (rb.lieA ? 100 : 0) + (rb.slugLink ? 50 : 0) + rb.tags.length;
        return sb - sa;
      });

      clear(infoList);
      sorted.forEach(otherId => {
        const other = nodeById[otherId];
        if (!other) return;
        const r = reasons[otherId];

        // En-tête : nom du voisin (lien direct vers sa fiche)
        const link = el('a', {
          class: 'globe-info-link',
          href: '#/sujet/' + encodeURIComponent(otherId)
        }, other.label);
        link.style.setProperty('--dot-color', domainColor(other.domain));
        const header = el('div', { class: 'globe-info-header' }, link);

        // Liste de cartes "preuves" — une par motif identifié
        const cardsBox = el('div', { class: 'globe-info-citations' });

        // 1) Lien direct (lie_a) — affiche un extrait du résumé du voisin
        if (r.lieA) {
          const card = el('a', {
            class: 'globe-info-citation globe-info-citation-direct',
            href: '#/sujet/' + encodeURIComponent(otherId),
            title: 'Aller à la fiche de ' + other.label
          });
          card.appendChild(el('div', { class: 'globe-info-citation-head' },
            el('span', { class: 'globe-info-citation-icon' }, '★'),
            el('span', { class: 'globe-info-citation-where' }, 'Lien direct vers ' + other.label)
          ));
          const summary = (other.resume || '').replace(/\s+/g, ' ').trim();
          if (summary) {
            const truncated = summary.length > 220 ? summary.slice(0, 217) + '…' : summary;
            card.appendChild(el('div', { class: 'globe-info-citation-snippet' }, '« ' + truncated + ' »'));
          } else {
            card.appendChild(el('div', { class: 'globe-info-citation-snippet' },
              'Sujet thématiquement proche — clique pour ouvrir la fiche.'));
          }
          cardsBox.appendChild(card);
        }

        // 2) Citations [[slug]] dans un cours, résumé ou points-clés
        const cits = (citationsByPair[id] && citationsByPair[id][otherId]) || [];
        cits.forEach(c => {
          const isMine = c.source === id;
          const sourceNode = nodeById[c.source];
          const where = isMine
            ? 'Dans ce cours'
            : 'Dans le cours de ' + (sourceNode ? sourceNode.label : c.source);
          // URL : si on a un bloc précis, on saute dessus ; sinon on va au résumé
          let href;
          if (c.blockIdx >= 0) {
            href = '#/sujet/' + encodeURIComponent(c.source) + '/cours/bloc-' + c.blockIdx;
          } else {
            href = '#/sujet/' + encodeURIComponent(c.source);
          }
          const card = el('a', {
            class: 'globe-info-citation',
            href: href,
            title: 'Aller voir la citation'
          });
          card.appendChild(el('div', { class: 'globe-info-citation-head' },
            el('span', { class: 'globe-info-citation-icon' }, '→'),
            el('span', { class: 'globe-info-citation-where' }, where + ' · ' + c.blockTitle)
          ));
          if (c.snippet) {
            card.appendChild(el('div', { class: 'globe-info-citation-snippet' }, '« ' + c.snippet + ' »'));
          }
          cardsBox.appendChild(card);
        });

        // 3) Tags partagés (carte non-clickable, juste informative)
        if (r.tags.length > 0) {
          const card = el('div', { class: 'globe-info-citation globe-info-citation-tags' });
          card.appendChild(el('div', { class: 'globe-info-citation-head' },
            el('span', { class: 'globe-info-citation-icon' }, '#'),
            el('span', { class: 'globe-info-citation-where' },
              r.tags.length + ' tag' + (r.tags.length > 1 ? 's' : '') +
              ' partagé' + (r.tags.length > 1 ? 's' : ''))
          ));
          card.appendChild(el('div', { class: 'globe-info-citation-snippet' },
            r.tags.map(t => '#' + t).join('   ·   ')));
          cardsBox.appendChild(card);
        }

        const item = el('li', { class: 'globe-info-item' }, header, cardsBox);
        infoList.appendChild(item);
      });
    }

    // ---- Mode épinglé : clic = focus persistant ----
    // Tant qu'un sujet est épinglé, le survol des autres ne change pas
    // l'affichage — l'utilisateur peut lire tranquillement le panneau.
    // Cliquer sur le même sujet ou ailleurs (fond) le déépingle, et la
    // touche Echap fonctionne aussi.
    let pinnedId = null;

    function applyPin(id) {
      pinnedId = id || null;
      nodeEls.forEach(g => g.classList.toggle('is-pinned', g.getAttribute('data-id') === pinnedId));
      if (pinnedId) {
        highlight(pinnedId);
        updateInfoPanel(pinnedId);
      } else {
        highlight(null);
        // Le panneau garde sa dernière vue par design — pas de reset.
      }
    }

    nodeEls.forEach(g => {
      const id = g.getAttribute('data-id');
      g.addEventListener('mouseenter', () => {
        if (pinnedId) return; // figé tant qu'un sujet est épinglé
        highlight(id); updateInfoPanel(id);
      });
      g.addEventListener('mouseleave', () => {
        if (pinnedId) return;
        highlight(null);
      });
      g.addEventListener('focusin', () => {
        if (pinnedId) return;
        highlight(id); updateInfoPanel(id);
      });
      g.addEventListener('focusout', () => {
        if (pinnedId) return;
        highlight(null);
      });
      // Clic : épingle / déépingle ce sujet
      g.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        applyPin(pinnedId === id ? null : id);
      });
      // Entrée au clavier : ouvre la fiche (raccourci direct)
      g.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          navigate('/sujet/' + encodeURIComponent(id));
        } else if (e.key === ' ') {
          e.preventDefault();
          applyPin(pinnedId === id ? null : id);
        }
      });
    });

    // Clic dans le SVG hors d'un nœud → déépingle
    svgEl.addEventListener('click', (e) => {
      if (!e.target.closest('.globe-fd-node') && pinnedId) {
        applyPin(null);
      }
    });

    // ---- Mode plein écran ----
    function toggleFullscreen(on) {
      const enable = on != null ? on : !wrap.classList.contains('is-fullscreen');
      wrap.classList.toggle('is-fullscreen', enable);
      document.body.classList.toggle('globe-fullscreen-active', enable);
      fullscreenBtn.textContent = enable ? '⛶ Quitter le plein écran' : '⛶ Plein écran';
    }
    fullscreenBtn.addEventListener('click', () => toggleFullscreen());
    exitFsBtn.addEventListener('click', () => toggleFullscreen(false));

    // Echap : sortir du plein écran et/ou déépingler
    function onEscape(e) {
      if (e.key !== 'Escape') return;
      if (wrap.classList.contains('is-fullscreen')) {
        toggleFullscreen(false);
      } else if (pinnedId) {
        applyPin(null);
      }
    }
    document.addEventListener('keydown', onEscape);
    // Nettoyage minimal : si la vue est re-rendue, on s'assure que la classe
    // body est retirée pour ne pas laisser sidebar/topbar masquées.
    window.addEventListener('hashchange', function cleanupFs() {
      if (document.body.classList.contains('globe-fullscreen-active')) {
        document.body.classList.remove('globe-fullscreen-active');
      }
      window.removeEventListener('hashchange', cleanupFs);
      document.removeEventListener('keydown', onEscape);
    });

    search.addEventListener('input', applyFilters);
    domSel.addEventListener('change', applyFilters);
    cb.addEventListener('change', applyFilters);
    // Logique inverse : coché = on retire "weak-hidden" pour afficher les
    // arêtes de poids 1 (un seul tag partagé, généralement du bruit).
    cbWeakEdges.addEventListener('change', () => {
      svgEl.classList.toggle('weak-hidden', !cbWeakEdges.checked);
    });
    // Tous les labels : coché = on retire "labels-minimal" pour afficher
    // tous les labels en permanence.
    cbAllLabels.addEventListener('change', () => {
      svgEl.classList.toggle('labels-minimal', !cbAllLabels.checked);
    });
  }

  // =================================================================
  // HEATMAP D'ACTIVITÉ (calendrier des 12 derniers mois)
  // =================================================================

  function renderHeatmap() {
    const section = el('section', { class: 'profil-section heatmap-section' });
    section.appendChild(el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Activité des 12 derniers mois'));

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // dayOfWeek : 0 = lundi, ..., 6 = dimanche (semaine FR)
    const dayOfWeek = (today.getDay() + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - dayOfWeek);
    // Démarrage : 52 semaines avant le lundi de la semaine en cours
    const start = new Date(monday);
    start.setDate(monday.getDate() - 52 * 7);

    const da = state.user.dailyActivity || {};
    const grid = el('div', { class: 'heatmap-grid' });
    let totalActiveDays = 0;

    // 53 colonnes pour englober la semaine courante
    for (let w = 0; w <= 52; w++) {
      const col = el('div', { class: 'heatmap-col' });
      for (let d = 0; d < 7; d++) {
        const date = new Date(start);
        date.setDate(start.getDate() + w * 7 + d);
        if (date > today) {
          col.appendChild(el('div', { class: 'heatmap-cell future' }));
          continue;
        }
        const data = da[dateKey(date)];
        const intensity = data ? dailyIntensity(data) : 0;
        const lvl = intensityBucket(intensity);
        if (lvl > 0) totalActiveDays++;
        col.appendChild(el('div', {
          class: 'heatmap-cell lvl-' + lvl,
          title: heatmapTooltip(date, data, intensity)
        }));
      }
      grid.appendChild(col);
    }
    section.appendChild(grid);

    // Légende intensité + résumé textuel
    const legend = el('div', { class: 'heatmap-legend' },
      el('span', { class: 'heatmap-summary' },
        totalActiveDays === 0
          ? "Pas encore d'activité enregistrée — apprends quelques sujets et cette grille se peuplera."
          : totalActiveDays + ' jour' + (totalActiveDays > 1 ? 's' : '') + ' actif' + (totalActiveDays > 1 ? 's' : '') + ' sur les 12 derniers mois.'
      ),
      el('span', { class: 'heatmap-scale' },
        el('span', null, 'Moins'),
        el('div', { class: 'heatmap-cell lvl-0' }),
        el('div', { class: 'heatmap-cell lvl-1' }),
        el('div', { class: 'heatmap-cell lvl-2' }),
        el('div', { class: 'heatmap-cell lvl-3' }),
        el('div', { class: 'heatmap-cell lvl-4' }),
        el('span', null, 'Plus')
      )
    );
    section.appendChild(legend);

    return section;
  }

  // =================================================================
  // VIEW: QUIZ MIXTE — pioche au hasard dans tous les sujets
  // =================================================================

  // Pool unique de toutes les questions disponibles avec leurs métadonnées
  function buildQuestionPool(domainFilter) {
    const all = [];
    state.sujetsOrder.forEach(id => {
      const sujet = state.sujets[id];
      if (!Array.isArray(sujet.quiz)) return;
      if (domainFilter) {
        const sujDomains = sujet.meta.domaines || [];
        if (!sujDomains.includes(domainFilter)) return;
      }
      sujet.quiz.forEach((q, qIdx) => {
        all.push(Object.assign({}, q, {
          _sujet: { id: id, titre: sujet.meta.titre },
          _qIdx: qIdx
        }));
      });
    });
    return all;
  }

  function startMixedQuiz(count, domainFilter) {
    const all = buildQuestionPool(domainFilter || null);
    if (all.length === 0) return false;
    shuffleArray(all);
    const picked = all.slice(0, Math.min(count, all.length));
    state.quizSession = {
      sujetId: '__mixte__',
      currentQ: 0,
      score: 0,
      questions: picked,
      isMixed: true,
      mode: 'mixte',
      _domain: domainFilter || null
    };
    return true;
  }

  // Mode Révision : tire les questions que l'utilisateur a déjà ratées
  // et qui ne sont pas encore résolues (lastCorrect === false).
  function startReviewQuiz(count) {
    const toReview = getQuestionsToReview();
    if (toReview.length === 0) return false;
    shuffleArray(toReview);
    const picked = toReview.slice(0, Math.min(count, toReview.length)).map(item =>
      Object.assign({}, item.q, {
        _sujet: { id: item.sujet.meta.id, titre: item.sujet.meta.titre },
        _qIdx: item.qIdx
      })
    );
    state.quizSession = {
      sujetId: '__revision__',
      currentQ: 0,
      score: 0,
      questions: picked,
      isMixed: true,
      mode: 'revision'
    };
    return true;
  }

  // Mode Quiz du jour : sélection DÉTERMINISTE pour la date du jour
  // (8 questions). Même tirage si lancé deux fois le même jour.
  function startDailyQuiz() {
    const all = buildQuestionPool();
    if (all.length === 0) return false;
    const today = dateKey(new Date());
    // Seed basé sur la date pour un tirage reproductible
    let seed = 0;
    for (let i = 0; i < today.length; i++) seed = (seed * 31 + today.charCodeAt(i)) >>> 0;
    function rand() { seed = (seed * 1103515245 + 12345) >>> 0; return seed / 0xFFFFFFFF; }
    const pool = all.slice();
    // Fisher-Yates avec le RNG seedé
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    const picked = pool.slice(0, Math.min(8, pool.length));
    state.quizSession = {
      sujetId: '__quotidien__',
      currentQ: 0,
      score: 0,
      questions: picked,
      isMixed: true,
      mode: 'quotidien',
      _dailyDate: today
    };
    return true;
  }

  // Construit un pool de questions limité aux sujets d'un parcours donné.
  function buildQuestionPoolForParcours(parcoursId) {
    const p = state.parcours[parcoursId];
    if (!p) return [];
    const all = [];
    (p.etapes || []).forEach(etape => {
      if (!etape || !etape.slug) return;
      const sujet = state.sujets[etape.slug];
      if (!sujet || !Array.isArray(sujet.quiz)) return;
      sujet.quiz.forEach((q, qIdx) => {
        all.push(Object.assign({}, q, {
          _sujet: { id: sujet.meta.id, titre: sujet.meta.titre },
          _qIdx: qIdx
        }));
      });
    });
    return all;
  }

  // Lance un quiz mixte limité aux sujets d'un parcours.
  function startParcoursQuiz(parcoursId, count) {
    const all = buildQuestionPoolForParcours(parcoursId);
    if (all.length === 0) return false;
    shuffleArray(all);
    const picked = all.slice(0, Math.min(count || 10, all.length));
    state.quizSession = {
      sujetId: '__parcours_' + parcoursId + '__',
      currentQ: 0,
      score: 0,
      questions: picked,
      isMixed: true,
      mode: 'parcours',
      _parcoursId: parcoursId
    };
    return true;
  }

  // Mode Défi : 10 questions, chacune avec timer 30s.
  // Le timer est porté par session ; renderQuizQuestion détecte le mode défi.
  function startChallengeQuiz(count) {
    const all = buildQuestionPool();
    if (all.length === 0) return false;
    shuffleArray(all);
    const picked = all.slice(0, Math.min(count || 10, all.length));
    state.quizSession = {
      sujetId: '__defi__',
      currentQ: 0,
      score: 0,
      bonusPoints: 0,
      questions: picked,
      isMixed: true,
      mode: 'defi',
      _timerSecs: 30
    };
    return true;
  }

  function renderQuizMixte(main) {
    const sess = state.quizSession;
    const isActive = sess && sess.isMixed && sess.currentQ < sess.questions.length;
    const isFinished = sess && sess.isMixed && sess.questions.length > 0 && sess.currentQ >= sess.questions.length;

    if (!isActive && !isFinished) {
      renderQuizHub(main);
      return;
    }

    const eyebrowText = sess.mode === 'revision' ? 'Mode révision'
      : sess.mode === 'quotidien' ? 'Quiz du jour'
      : sess.mode === 'defi' ? 'Mode défi'
      : sess.mode === 'parcours' ? (
          (state.parcours[sess._parcoursId] && String(state.parcours[sess._parcoursId].meta.titre).replace(/<[^>]+>/g, ''))
          ? 'Quiz · ' + String(state.parcours[sess._parcoursId].meta.titre).replace(/<[^>]+>/g, '')
          : 'Quiz par parcours')
      : 'Quiz mixte en cours';
    main.appendChild(el('span', { class: 'eyebrow' }, eyebrowText));

    const card = el('div', { class: 'quiz-card' });
    main.appendChild(card);

    if (isFinished) {
      if (sess.mode === 'revision') renderRevisionFinal(card);
      else if (sess.mode === 'quotidien') renderDailyQuizFinal(card);
      else renderMixedQuizFinal(card);
    } else {
      renderQuizQuestion(card, null);
    }
  }

  // Hub de la page Quiz mixte : quatre modes accessibles depuis des cartes.
  function renderQuizHub(main) {
    const sujets = state.sujetsOrder.map(id => state.sujets[id]);
    const totalQ = sujets.reduce((s, su) => s + (Array.isArray(su.quiz) ? su.quiz.length : 0), 0);

    main.appendChild(el('span', { class: 'eyebrow' }, 'Défi transverse'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Quiz <em>mixte</em>' }));

    if (totalQ === 0) {
      main.appendChild(el('p', { class: 'lead' },
        'Aucune question disponible pour le moment.'));
      return;
    }

    const stats = computeQuizStats();
    const toReview = stats.toReview;
    const today = dateKey(new Date());
    const dailyDone = state.user.dailyQuiz && state.user.dailyQuiz.date === today && state.user.dailyQuiz.completed;

    main.appendChild(el('p', { class: 'page-subtitle' },
      totalQ + ' questions disponibles sur ' + sujets.length + ' sujets · ' +
      stats.totalAnswered + ' réponses enregistrées · ' +
      Math.round(stats.successRate * 100) + ' % de réussite globale.'));

    // Quatre cartes de mode
    const grid = el('div', { class: 'quiz-modes-grid' });

    // 1. Quiz du jour
    const cardDaily = el('div', { class: 'quiz-mode-card quiz-mode-daily' });
    cardDaily.appendChild(el('div', { class: 'quiz-mode-eyebrow' }, '🌅 Quiz du jour'));
    cardDaily.appendChild(el('h3', { class: 'quiz-mode-title' }, '8 questions du jour'));
    cardDaily.appendChild(el('p', { class: 'quiz-mode-desc' },
      dailyDone
        ? 'Tu as déjà fait le quiz du jour : ' + state.user.dailyQuiz.score + '/' + state.user.dailyQuiz.total + '. Reviens demain !'
        : 'Sélection quotidienne mixte, identique pour tout le monde aujourd\'hui. Une fois par jour.'));
    cardDaily.appendChild(el('button', {
      class: 'btn',
      disabled: dailyDone || undefined,
      onclick: () => { if (startDailyQuiz()) rerender(); }
    }, dailyDone ? 'Déjà fait aujourd\'hui' : 'Lancer le quiz du jour →'));
    grid.appendChild(cardDaily);

    // 2. Mode Révision
    const cardReview = el('div', { class: 'quiz-mode-card quiz-mode-review' });
    cardReview.appendChild(el('div', { class: 'quiz-mode-eyebrow' }, '🔁 Révision'));
    cardReview.appendChild(el('h3', { class: 'quiz-mode-title' }, 'Questions ratées à reprendre'));
    cardReview.appendChild(el('p', { class: 'quiz-mode-desc' },
      toReview === 0
        ? 'Aucune question à reviser pour le moment — fais des quiz et reviens ici si tu en rates.'
        : toReview + ' question' + (toReview > 1 ? 's' : '') + ' à revisiter, tous sujets confondus.'));
    cardReview.appendChild(el('button', {
      class: 'btn',
      disabled: toReview === 0 || undefined,
      onclick: () => { if (startReviewQuiz(Math.min(10, toReview))) rerender(); }
    }, toReview === 0 ? 'Rien à réviser' : 'Lancer la révision →'));
    grid.appendChild(cardReview);

    // 3. Quiz mixte classique
    const cardMixte = el('div', { class: 'quiz-mode-card quiz-mode-mixte' });
    cardMixte.appendChild(el('div', { class: 'quiz-mode-eyebrow' }, '🎲 Mixte'));
    cardMixte.appendChild(el('h3', { class: 'quiz-mode-title' }, 'Pioche aléatoire'));
    cardMixte.appendChild(el('p', { class: 'quiz-mode-desc' },
      'Tirage au sort dans toute la bibliothèque (ou un domaine choisi). Choisis ta longueur.'));

    // Sélecteur de domaine optionnel : permet de cibler un domaine précis
    // (ex. "Mixte mais uniquement Histoire") — très utile avec 20+ domaines.
    const allMixteDomains = Array.from(new Set(sujets.flatMap(s => s.meta.domaines || [])))
      .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    const mixteDomSel = el('select', { class: 'quiz-mixte-domain' });
    mixteDomSel.appendChild(el('option', { value: '' },
      'Tous les domaines (' + totalQ + ' Q.)'));
    allMixteDomains.forEach(d => {
      const poolForDom = buildQuestionPool(d);
      if (poolForDom.length === 0) return;
      mixteDomSel.appendChild(el('option', { value: d },
        d + ' (' + poolForDom.length + ' Q.)'));
    });
    cardMixte.appendChild(mixteDomSel);

    const mixteBtns = el('div', { class: 'quiz-mode-btn-row' });
    [['5 questions', 5], ['10 questions', 10], ['20 questions', 20]].forEach(([label, n]) => {
      mixteBtns.appendChild(el('button', {
        class: 'btn btn-secondary',
        onclick: () => {
          const dom = mixteDomSel.value || null;
          const pool = buildQuestionPool(dom);
          if (pool.length === 0) return;
          const k = Math.min(n, pool.length);
          if (startMixedQuiz(k, dom)) rerender();
        }
      }, label));
    });
    cardMixte.appendChild(mixteBtns);
    grid.appendChild(cardMixte);

    // 4. Mode Défi
    const cardDefi = el('div', { class: 'quiz-mode-card quiz-mode-defi' });
    cardDefi.appendChild(el('div', { class: 'quiz-mode-eyebrow' }, '⚡ Défi'));
    cardDefi.appendChild(el('h3', { class: 'quiz-mode-title' }, 'Contre la montre'));
    cardDefi.appendChild(el('p', { class: 'quiz-mode-desc' },
      '10 questions, 30 secondes chacune. Bonus de vitesse selon ce qu\'il te reste au compteur.'));
    cardDefi.appendChild(el('button', {
      class: 'btn',
      onclick: () => { startChallengeQuiz(10); rerender(); }
    }, 'Lancer le défi →'));
    grid.appendChild(cardDefi);

    // 5. Quiz par parcours (n'apparaît que si au moins un parcours existe)
    if (state.parcoursOrder.length > 0) {
      const cardParcours = el('div', { class: 'quiz-mode-card quiz-mode-parcours' });
      cardParcours.appendChild(el('div', { class: 'quiz-mode-eyebrow' }, '🧭 Parcours'));
      cardParcours.appendChild(el('h3', { class: 'quiz-mode-title' }, 'Quiz d\'un parcours'));
      cardParcours.appendChild(el('p', { class: 'quiz-mode-desc' },
        'Pioche les questions des sujets d\'un parcours thématique — pour t\'auto-évaluer sur le fil que tu suis.'));

      const parcoursSel = el('select', { class: 'quiz-parcours-select' });
      const active = getActiveParcours();
      state.parcoursOrder.forEach(pid => {
        const p = state.parcours[pid];
        if (!p) return;
        const titreClean = String(p.meta.titre).replace(/<[^>]+>/g, '');
        const pool = buildQuestionPoolForParcours(pid);
        parcoursSel.appendChild(el('option',
          { value: pid },
          titreClean + ' (' + pool.length + ' Q.)'));
      });
      if (active && active.parcours && state.parcours[active.parcours.meta.id]) {
        parcoursSel.value = active.parcours.meta.id;
      }
      cardParcours.appendChild(parcoursSel);

      const parcoursBtnRow = el('div', { class: 'quiz-mode-btn-row' });
      const launchBtn = el('button', {
        class: 'btn',
        onclick: () => {
          const pid = parcoursSel.value;
          const pool = buildQuestionPoolForParcours(pid);
          if (pool.length === 0) return;
          if (startParcoursQuiz(pid, Math.min(10, pool.length))) rerender();
        }
      }, 'Lancer →');
      parcoursBtnRow.appendChild(launchBtn);
      cardParcours.appendChild(parcoursBtnRow);
      grid.appendChild(cardParcours);
    }

    main.appendChild(grid);

    // Bloc SR : quizzes complets à refaire (algorithme SM-2)
    const dueSR = getDueQuizzes();
    if (dueSR.length > 0) {
      const srBox = el('section', { class: 'quiz-sr-box' });
      srBox.appendChild(el('h3', { class: 'quiz-sr-title' }, '🔔 Quiz à refaire (répétition espacée)'));
      srBox.appendChild(el('p', { class: 'quiz-sr-sub' },
        dueSR.length + ' sujet' + (dueSR.length > 1 ? 's' : '') + ' dont l\'algorithme estime que la mémoire commence à fléchir.'));
      const list = el('div', { class: 'sr-due-list' });
      dueSR.forEach(d => {
        const sujet = state.sujets[d.id];
        const repInfo = d.sr.repetitions === 0
          ? 'Première révision'
          : 'Révision n°' + d.sr.repetitions + ' · intervalle ' + d.sr.interval + ' j';
        list.appendChild(el('a', {
          class: 'sr-due-item',
          href: '#/sujet/' + encodeURIComponent(d.id) + '/quiz'
        },
          el('span', { class: 'sr-due-title', html: htmlEscapeButKeepEm(sujet.meta.titre) }),
          el('span', { class: 'sr-due-meta' }, repInfo)
        ));
      });
      srBox.appendChild(list);
      main.appendChild(srBox);
    }
  }

  // Écran final du mode Révision
  function renderRevisionFinal(quizCard) {
    const sess = state.quizSession;
    const total = sess.questions.length;
    const score = sess.score;
    if (!sess._recorded) { sess._recorded = true; recordActivity('quiz', null); }
    clear(quizCard);
    const stillToReview = getQuestionsToReview().length;
    quizCard.appendChild(el('div', { class: 'quiz-final' },
      el('div', { class: 'score' }, score + ' / ' + total + ' rattrapés'),
      el('div', { class: 'verdict' },
        stillToReview === 0
          ? 'Tu n\'as plus rien à réviser pour le moment. Tout est carré.'
          : 'Il te reste ' + stillToReview + ' question' + (stillToReview > 1 ? 's' : '') + ' à reprendre.'),
      el('div', { class: 'btn-row' },
        el('button', {
          class: 'btn',
          disabled: stillToReview === 0 || undefined,
          onclick: () => { state.quizSession = null; if (startReviewQuiz(Math.min(10, stillToReview))) rerender(); }
        }, 'Continuer la révision'),
        el('button', {
          class: 'btn btn-secondary',
          onclick: () => { state.quizSession = null; rerender(); }
        }, 'Retour au hub')
      )
    ));
  }

  // Écran final du Quiz du jour
  function renderDailyQuizFinal(quizCard) {
    const sess = state.quizSession;
    const total = sess.questions.length;
    const score = sess.score;
    if (!sess._recorded) {
      sess._recorded = true;
      recordActivity('quiz', null);
      // Enregistre le résultat du jour
      const dayKey = sess._dailyDate || dateKey(new Date());
      state.user.dailyQuiz = {
        date: dayKey,
        score: score,
        total: total,
        completed: true
      };
      // Maintient une liste durable des dates de complétion pour
      // l'achievement quotidien-7 (le quizLog est capé à 500 entrées et
      // ne peut donc pas servir de source fiable pour cette mesure).
      if (!Array.isArray(state.user.dailyQuizDates)) state.user.dailyQuizDates = [];
      if (state.user.dailyQuizDates.indexOf(dayKey) < 0) {
        state.user.dailyQuizDates.push(dayKey);
      }
      saveUserState();
      checkAchievements();
    }
    clear(quizCard);
    const pct = total > 0 ? (score / total) * 100 : 0;
    let verdict;
    if (pct === 100) verdict = 'Sans-faute sur le quiz du jour. Brillant.';
    else if (pct >= 75) verdict = 'Très belle journée d\'apprentissage.';
    else if (pct >= 50) verdict = 'Quelques sujets à revoir.';
    else verdict = 'Demain est un autre jour.';
    quizCard.appendChild(el('div', { class: 'quiz-final' },
      el('div', { class: 'score' }, score + ' / ' + total),
      el('div', { class: 'verdict' }, verdict),
      el('div', { class: 'best-score' }, 'Reviens demain pour le prochain quiz quotidien.'),
      el('div', { class: 'btn-row' },
        el('button', {
          class: 'btn btn-secondary',
          onclick: () => { state.quizSession = null; rerender(); }
        }, 'Retour au hub')
      )
    ));
  }

  function renderMixedQuizFinal(quizCard) {
    const sess = state.quizSession;
    const total = sess.questions.length;
    const score = sess.score;
    const pct = (score / total) * 100;
    const isDefi = sess.mode === 'defi';
    const bonus = sess.bonusPoints || 0;
    let verdict;
    if (pct === 100) verdict = isDefi ? 'Sans-faute, et avec la vitesse en plus !' : 'Sans-faute sur ' + total + ' questions transverses — bravo !';
    else if (pct >= 80) verdict = 'Excellent — culture transverse solide.';
    else if (pct >= 60) verdict = 'Bien — quelques sujets à revisiter.';
    else if (pct >= 40) verdict = 'Une bonne base.';
    else verdict = 'Plusieurs sujets méritent une seconde lecture.';

    if (!sess._recorded) {
      sess._recorded = true;
      recordActivity('quiz', null);
      checkAchievements();
    }

    clear(quizCard);
    quizCard.appendChild(el('div', { class: 'quiz-final' },
      el('div', { class: 'score' }, score + ' / ' + total + (isDefi && bonus > 0 ? ' (+' + bonus + ' bonus)' : '')),
      el('div', { class: 'verdict' }, verdict),
      isDefi && bonus > 0 ? el('div', { class: 'best-score' }, 'Score total avec bonus : ' + (score + bonus)) : null,
      el('div', { class: 'btn-row' },
        el('button', {
          class: 'btn',
          onclick: () => {
            const prevMode = sess.mode, prevDomain = sess._domain, prevParcours = sess._parcoursId;
            state.quizSession = null;
            // Conserve le contexte : défi, parcours, ou mixte filtré par domaine
            if (isDefi) startChallengeQuiz(total);
            else if (prevMode === 'parcours' && prevParcours) startParcoursQuiz(prevParcours, total);
            else startMixedQuiz(total, prevDomain);
            rerender();
          }
        }, 'Recommencer'),
        el('button', {
          class: 'btn btn-secondary',
          onclick: () => { state.quizSession = null; rerender(); }
        }, 'Retour au hub')
      )
    ));
  }

  // =================================================================
  // VIEW: NOTES GLOBALES (cahier libre transverse)
  // =================================================================

  function renderNotesGlobales(main) {
    main.appendChild(el('span', { class: 'eyebrow' }, 'Cahier libre'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Mes <em>notes</em>' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Cahier transverse pour les idées qui ne s\'attachent à aucun sujet précis : fil rouge, brouillons, références à creuser. Sauvegarde automatique. Utilise la barre d\'outils ci-dessous pour mettre en forme — pas besoin de connaître le markdown.'));

    const notes = state.user.globalNotes || '';
    let isPreview = false;

    // Toolbar : toggle édition/aperçu + bouton export + stats
    const toolbar = el('div', { class: 'notes-toolbar' });
    const toggleBtn = el('button', { class: 'btn btn-secondary' }, 'Aperçu du rendu →');
    const exportBtn = el('button', {
      class: 'btn btn-secondary',
      onclick: () => {
        const blob = new Blob([state.user.globalNotes || ''], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes-carnet-' + dateKey(new Date()) + '.md';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }, 'Exporter en .md');
    const statsSpan = el('span', { class: 'notes-stats' });
    toolbar.appendChild(toggleBtn);
    toolbar.appendChild(exportBtn);
    toolbar.appendChild(statsSpan);
    main.appendChild(toolbar);

    function updateStats(val) {
      const v = val || '';
      const chars = v.length;
      const words = v.trim() === '' ? 0 : v.trim().split(/\s+/).length;
      const lines = v === '' ? 0 : v.split('\n').length;
      statsSpan.textContent = words + ' mots · ' + chars + ' car. · ' + lines + ' lignes';
    }

    const editWrap = el('div', { class: 'notes-edit-wrap' });
    const status = el('div', { class: 'notes-status' },
      notes ? 'Sauvegardé' : 'Tes notes seront sauvegardées automatiquement.');
    const textarea = el('textarea', {
      class: 'notes-area',
      placeholder: 'Tes pensées libres, idées qui traversent plusieurs sujets, projets futurs…\n\nUtilise les boutons ci-dessus pour mettre en forme (titres, gras, italique, liste, citer un sujet).',
      style: { minHeight: '60vh', fontSize: '1rem' }
    });
    textarea.value = notes;
    updateStats(notes);
    let saveTimer = null;
    textarea.addEventListener('input', () => {
      state.user.globalNotes = textarea.value;
      status.textContent = 'Saisie en cours…';
      updateStats(textarea.value);
      _pendingSave = true;
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        _pendingSave = false;
        saveUserState();
        status.textContent = 'Sauvegardé · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      }, 600);
    });

    // ---- Barre d'outils de mise en forme ----
    // Permet d'insérer titres, gras, italique, listes et liens vers des
    // sujets sans connaître la syntaxe markdown. Les boutons agissent
    // directement sur la sélection ou la ligne courante du textarea.
    function wrapSelection(before, after, placeholder) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.substring(start, end);
      const inner = selected || placeholder;
      textarea.value = textarea.value.substring(0, start) + before + inner + after + textarea.value.substring(end);
      if (!selected) {
        textarea.selectionStart = start + before.length;
        textarea.selectionEnd = start + before.length + inner.length;
      } else {
        textarea.selectionStart = textarea.selectionEnd = start + before.length + inner.length + after.length;
      }
      textarea.focus();
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    function prefixCurrentLine(prefix, placeholder) {
      const value = textarea.value;
      const start = textarea.selectionStart;
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const nextLineBreak = value.indexOf('\n', start);
      const lineEnd = nextLineBreak === -1 ? value.length : nextLineBreak;
      const currentLine = value.substring(lineStart, lineEnd);
      // Si la ligne porte déjà ce préfixe exact, on bascule (retire)
      if (currentLine.startsWith(prefix)) {
        const stripped = currentLine.substring(prefix.length);
        textarea.value = value.substring(0, lineStart) + stripped + value.substring(lineEnd);
        textarea.selectionStart = textarea.selectionEnd = Math.max(lineStart, start - prefix.length);
      } else {
        // Retire un autre préfixe titre éventuel pour ne pas cumuler "## # "
        const cleaned = currentLine.replace(/^(##?\s+|[-*]\s+)/, '');
        const body = cleaned.trim() === '' ? placeholder : cleaned;
        textarea.value = value.substring(0, lineStart) + prefix + body + value.substring(lineEnd);
        if (cleaned.trim() === '') {
          textarea.selectionStart = lineStart + prefix.length;
          textarea.selectionEnd = lineStart + prefix.length + body.length;
        } else {
          textarea.selectionStart = textarea.selectionEnd = start + (prefix.length - (currentLine.length - cleaned.length));
        }
      }
      textarea.focus();
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    function makeFormatBtn(label, title, action) {
      const b = el('button', { class: 'notes-fmt-btn', type: 'button', title: title }, label);
      b.addEventListener('click', (e) => { e.preventDefault(); action(); });
      return b;
    }
    const fmtBar = el('div', { class: 'notes-format-bar' },
      makeFormatBtn('Titre', 'Titre principal (Ctrl+1)',
        () => prefixCurrentLine('# ', 'Mon titre')),
      makeFormatBtn('Sous-titre', 'Sous-titre (Ctrl+2)',
        () => prefixCurrentLine('## ', 'Mon sous-titre')),
      el('span', { class: 'notes-fmt-sep' }),
      makeFormatBtn('Gras', 'Gras (Ctrl+B)',
        () => wrapSelection('**', '**', 'texte en gras')),
      makeFormatBtn('Italique', 'Italique (Ctrl+I)',
        () => wrapSelection('*', '*', 'texte en italique')),
      el('span', { class: 'notes-fmt-sep' }),
      makeFormatBtn('Liste', 'Puce de liste',
        () => prefixCurrentLine('- ', 'élément de liste')),
      makeFormatBtn('Citer un sujet', 'Insère un lien vers une fiche du carnet ([[slug]])',
        () => wrapSelection('[[', ']]', 'slug-du-sujet'))
    );

    // Raccourcis clavier classiques : Ctrl+B / Ctrl+I / Ctrl+1 / Ctrl+2
    textarea.addEventListener('keydown', (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      const k = e.key.toLowerCase();
      if (k === 'b') { e.preventDefault(); wrapSelection('**', '**', 'texte en gras'); }
      else if (k === 'i') { e.preventDefault(); wrapSelection('*', '*', 'texte en italique'); }
      else if (k === '1') { e.preventDefault(); prefixCurrentLine('# ', 'Mon titre'); }
      else if (k === '2') { e.preventDefault(); prefixCurrentLine('## ', 'Mon sous-titre'); }
    });

    editWrap.appendChild(fmtBar);
    editWrap.appendChild(textarea);
    editWrap.appendChild(status);

    // Mode aperçu : rend le markdown-lite + interprète [[slug]] comme dans
    // les sujets (liens cliquables vers les fiches existantes).
    const preview = el('div', { class: 'notes-preview' });
    preview.style.display = 'none';

    function refreshPreview() {
      const val = state.user.globalNotes || '';
      if (!val.trim()) {
        preview.innerHTML = '<p class="notes-preview-empty">Aucune note à prévisualiser pour l\'instant.</p>';
      } else {
        preview.innerHTML = md(val);
      }
    }
    toggleBtn.addEventListener('click', () => {
      isPreview = !isPreview;
      if (isPreview) {
        refreshPreview();
        editWrap.style.display = 'none';
        preview.style.display = '';
        toggleBtn.textContent = '← Retour à l\'édition';
      } else {
        editWrap.style.display = '';
        preview.style.display = 'none';
        toggleBtn.textContent = 'Aperçu du rendu →';
      }
    });

    main.appendChild(editWrap);
    main.appendChild(preview);

    // ---- Section "Notes attachées à des sujets" ----
    // state.user.notes[sujetId] contient les notes saisies depuis l'onglet
    // Résumé de chaque fiche sujet. Ici on les regroupe en un seul endroit
    // pour qu'on puisse les retrouver d'un coup d'œil.
    const sujetNotes = Object.entries(state.user.notes || {})
      .filter(([id, txt]) => typeof txt === 'string' && txt.trim() && state.sujets[id]);

    if (sujetNotes.length > 0) {
      const sec = el('section', { class: 'profil-section notes-attached' });
      sec.appendChild(el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } },
        'Notes attachées à des sujets (' + sujetNotes.length + ')'));
      sec.appendChild(el('p', { class: 'sr-section-sub' },
        'Notes saisies depuis l\'onglet Résumé de chaque fiche. Cliquer pour rouvrir le sujet.'));
      const list = el('div', { class: 'notes-attached-list' });
      sujetNotes
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([id, txt]) => {
          const s = state.sujets[id];
          const dom = (s.meta.domaines || ['Autre'])[0];
          const c = domainColor(dom);
          const cleanTitre = String(s.meta.titre).replace(/<[^>]+>/g, '');
          // Aperçu : 200 premiers caractères
          const preview = txt.length > 200 ? txt.slice(0, 197).trim() + '…' : txt.trim();
          const card = el('a', {
            class: 'notes-attached-card',
            href: '#/sujet/' + encodeURIComponent(id),
            style: { '--card-accent': c }
          },
            el('span', { class: 'notes-attached-domain' }, dom),
            el('span', { class: 'notes-attached-title', html: htmlEscapeButKeepEm(s.meta.titre) }),
            el('span', { class: 'notes-attached-preview' }, preview)
          );
          list.appendChild(card);
        });
      sec.appendChild(list);
      main.appendChild(sec);
    }

    // ---- Section "Passages surlignés" ----
    // state.user.passageHighlights[sujetId] = [{ blockIdx, text, ts }]
    // Liste tous les extraits surlignés dans les cours, groupés par sujet.
    // Cliquer sur un passage rouvre le sujet directement sur le bloc concerné.
    const allPassageEntries = Object.entries(state.user.passageHighlights || {})
      .filter(([id, arr]) => Array.isArray(arr) && arr.length > 0 && state.sujets[id]);

    if (allPassageEntries.length > 0) {
      const totalPassages = allPassageEntries.reduce((sum, [, arr]) => sum + arr.length, 0);
      const sec2 = el('section', { class: 'profil-section notes-passages' });
      sec2.appendChild(el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } },
        'Passages surlignés (' + totalPassages + ')'));
      sec2.appendChild(el('p', { class: 'sr-section-sub' },
        'Extraits de cours que tu as surlignés en sélectionnant le texte. Cliquer pour rouvrir le sujet sur le bloc concerné. La croix retire le surlignage.'));
      const list2 = el('div', { class: 'passages-list' });
      allPassageEntries
        .sort(([a], [b]) => {
          const ta = String(state.sujets[a].meta.titre).replace(/<[^>]+>/g, '');
          const tb = String(state.sujets[b].meta.titre).replace(/<[^>]+>/g, '');
          return ta.localeCompare(tb);
        })
        .forEach(([id, arr]) => {
          const sujet = state.sujets[id];
          const dom = (sujet.meta.domaines || ['Autre'])[0];
          const c = domainColor(dom);
          const groupe = el('div', { class: 'passages-group' });
          groupe.style.setProperty('--card-accent', c);
          groupe.appendChild(el('div', { class: 'passages-group-head' },
            el('span', { class: 'passages-group-domain' }, dom),
            el('a', {
              class: 'passages-group-title',
              href: '#/sujet/' + encodeURIComponent(id) + '/cours',
              html: htmlEscapeButKeepEm(sujet.meta.titre)
            })
          ));
          arr.slice().sort((x, y) => x.blockIdx - y.blockIdx).forEach(h => {
            const item = el('div', { class: 'passage-item' });
            const link = el('a', {
              class: 'passage-link',
              href: '#/sujet/' + encodeURIComponent(id) + '/cours',
              title: 'Aller au bloc ' + (h.blockIdx + 1),
              onclick: () => {
                // Après navigation, scroll vers le bloc concerné. parseHash
                // ignore l'ancre, donc on défile manuellement après rerender.
                setTimeout(() => {
                  const target = document.getElementById('bloc-' + h.blockIdx);
                  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }
            }, '« ' + h.text + ' »');
            const removeBtn = el('button', {
              class: 'passage-remove',
              type: 'button',
              title: 'Retirer ce surlignage',
              onclick: (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                removePassageHighlight(id, h.blockIdx, h.text);
                rerender();
              }
            }, '×');
            item.appendChild(link);
            item.appendChild(removeBtn);
            groupe.appendChild(item);
          });
          list2.appendChild(groupe);
        });
      sec2.appendChild(list2);
      main.appendChild(sec2);
    }
  }

  // Mini calendrier du mois courant — zoom détaillé sur la heatmap
  function renderMonthCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthName = now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();
    const startDOW = (firstDay.getDay() + 6) % 7; // Lundi = 0

    const da = state.user.dailyActivity || {};
    const todayKey = dateKey(new Date());

    const grid = el('div', { class: 'month-calendar-grid' });
    ['L', 'M', 'M', 'J', 'V', 'S', 'D'].forEach(d =>
      grid.appendChild(el('div', { class: 'month-cal-daylabel' }, d))
    );
    for (let i = 0; i < startDOW; i++) {
      grid.appendChild(el('div', { class: 'month-cal-cell month-cal-empty' }));
    }
    for (let day = 1; day <= numDays; day++) {
      const date = new Date(year, month, day);
      const key = dateKey(date);
      const data = da[key];
      const intensity = data ? dailyIntensity(data) : 0;
      const lvl = intensityBucket(intensity);
      const isToday = (key === todayKey);
      grid.appendChild(el('div', {
        class: 'month-cal-cell lvl-' + lvl + (isToday ? ' is-today' : ''),
        title: heatmapTooltip(date, data, intensity)
      },
        el('span', { class: 'month-cal-day' }, String(day))
      ));
    }

    return el('section', { class: 'profil-section month-calendar-section' },
      el('h3', { style: { fontStyle: 'italic', fontWeight: 400, textTransform: 'capitalize' } },
        monthName + ' en détail'),
      grid
    );
  }

  // =================================================================
  // VIEW: PROFIL
  // =================================================================

  // Section Quiz du Profil : stats fines, performance par domaine, top maîtrisés
  function renderQuizSection() {
    const section = el('section', { class: 'profil-section quiz-section' });
    section.appendChild(el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Mon quiz'));

    const stats = computeQuizStats();

    if (stats.totalAnswered === 0) {
      section.appendChild(el('p', { class: 'sr-section-sub' },
        'Tu n\'as pas encore répondu à de questions. Lance ton premier quiz pour faire vivre cette section.'));
      section.appendChild(el('a', { class: 'btn', href: '#/quiz-mixte' }, 'Aller au hub Quiz →'));
      return section;
    }

    // 4 mini-stats
    const grid = el('div', { class: 'stats-grid stats-grid-extras' },
      bigStat(stats.totalAnswered, 'Questions répondues', stats.totalCorrect + ' justes'),
      bigStat(Math.round(stats.successRate * 100) + '%', 'Taux de réussite global', 'Sur l\'ensemble du log'),
      bigStat(stats.streakCurrent, 'Streak actuelle',
        stats.streakBest > stats.streakCurrent ? 'Record : ' + stats.streakBest : 'Bonnes réponses d\'affilée'),
      bigStat(stats.sujetsPerfect, 'Sujets à 100%', stats.sujetsAttempted + ' tentés au total')
    );
    section.appendChild(grid);

    // Performance par domaine — barres horizontales
    const byDomain = Object.entries(stats.byDomain)
      .map(([d, s]) => ({ domain: d, rate: s.total ? s.ok / s.total : 0, ok: s.ok, total: s.total }))
      .sort((a, b) => b.total - a.total);

    if (byDomain.length > 0) {
      const domBox = el('div', { class: 'quiz-domain-perf' });
      domBox.appendChild(el('h4', { class: 'quiz-domain-perf-title' }, 'Performance par domaine'));
      byDomain.forEach(d => {
        const pct = Math.round(d.rate * 100);
        const row = el('div', { class: 'quiz-domain-row' });
        const label = el('div', { class: 'quiz-domain-label' }, d.domain);
        const bar = el('div', { class: 'quiz-domain-bar' });
        const fill = el('div', { class: 'quiz-domain-fill' });
        fill.style.width = pct + '%';
        fill.style.background = domainColor(d.domain);
        bar.appendChild(fill);
        const num = el('div', { class: 'quiz-domain-num' }, pct + '% · ' + d.ok + '/' + d.total);
        row.appendChild(label);
        row.appendChild(bar);
        row.appendChild(num);
        domBox.appendChild(row);
      });
      section.appendChild(domBox);
    }

    // Top sujets — mieux/moins maîtrisés
    const scores = Object.entries(state.user.quizScores)
      .filter(([id, s]) => s.total > 0 && state.sujets[id])
      .map(([id, s]) => ({ id: id, sujet: state.sujets[id], pct: s.best / s.total, score: s.best + '/' + s.total }))
      .sort((a, b) => b.pct - a.pct);

    if (scores.length > 0) {
      const topBox = el('div', { class: 'quiz-top-sujets' });
      const bestList = el('div', { class: 'quiz-top-list' });
      const worstList = el('div', { class: 'quiz-top-list' });
      const best3 = scores.slice(0, Math.min(3, scores.length));
      // "À approfondir" : on filtre les scores parfaits (10/10), ça n'a aucun
      // intérêt de proposer d'approfondir un sujet déjà maîtrisé. Si tout est
      // à 100 %, on cache simplement la colonne.
      const imperfect = scores.filter(s => s.pct < 1);
      const worst3 = imperfect.slice().reverse().slice(0, Math.min(3, imperfect.length));
      function renderEntry(entry) {
        return el('a', {
          class: 'quiz-top-entry',
          href: '#/sujet/' + encodeURIComponent(entry.id) + '/quiz'
        },
          el('span', { class: 'quiz-top-entry-title', html: htmlEscapeButKeepEm(entry.sujet.meta.titre) }),
          el('span', { class: 'quiz-top-entry-score' }, entry.score)
        );
      }
      topBox.appendChild(el('div', { class: 'quiz-top-col' },
        el('h4', { class: 'quiz-top-col-title' }, 'Tes meilleurs scores'),
        bestList,
        ...best3.map(renderEntry)
      ));
      if (worst3.length > 0) {
        topBox.appendChild(el('div', { class: 'quiz-top-col' },
          el('h4', { class: 'quiz-top-col-title' }, 'À approfondir'),
          worstList,
          ...worst3.map(renderEntry)
        ));
      }
      section.appendChild(topBox);
    }

    // Lien vers le hub
    section.appendChild(el('div', { style: { marginTop: '1.2rem', textAlign: 'right' } },
      el('a', { class: 'btn btn-secondary', href: '#/quiz-mixte' }, 'Aller au hub Quiz →')
    ));

    return section;
  }

  function renderProfil(main) {
    setAccent(null);
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mon parcours'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Mon <em>profil</em>' }));

    const sujets = state.sujetsOrder.map(id => state.sujets[id]);
    const total = sujets.length;
    const visited = sujets.filter(s => state.user.progress[s.meta.id] && state.user.progress[s.meta.id].visited).length;
    const completed = sujets.filter(s => {
      const p = state.user.progress[s.meta.id];
      return p && p.courseProgress >= 100;
    }).length;
    const quizScores = Object.entries(state.user.quizScores);
    const avgPct = quizScores.length === 0 ? 0 :
      Math.round(quizScores.reduce((acc, [, sc]) => acc + (sc.best / sc.total) * 100, 0) / quizScores.length);
    const favs = state.user.favorites.length;
    const coveragePct = total === 0 ? 0 : Math.round((visited / total) * 100);

    main.appendChild(el('div', { class: 'stats-grid' },
      stat(visited + ' / ' + total, 'Sujets ouverts (' + coveragePct + ' %)'),
      stat(completed, 'Cours terminés'),
      stat(favs, 'Favoris'),
      stat(quizScores.length === 0 ? '—' : avgPct + '%', 'Score moyen aux quiz')
    ));

    // ---- Stats motivation : streak / meilleur jour / tendance hebdo ----
    const da = state.user.dailyActivity || {};
    const streak = computeStreak(da);
    const bestDay = computeBestDay(da);
    const trend = computeWeekTrend(da);

    const streakLine1 = streak.current === 0
      ? '0'
      : streak.current + ' jour' + (streak.current > 1 ? 's' : '');
    const streakLine2 = streak.best > streak.current
      ? 'Record : ' + streak.best + ' j'
      : (streak.current > 0 ? 'Record en cours' : 'Apprends aujourd\'hui pour démarrer');

    let bestLine1, bestLine2;
    if (!bestDay) {
      bestLine1 = '—';
      bestLine2 = 'Pas encore d\'activité';
    } else {
      const parts = [];
      if (bestDay.data.blocs) parts.push(bestDay.data.blocs + ' blocs');
      if (bestDay.data.quiz)  parts.push(bestDay.data.quiz  + ' quiz');
      if (bestDay.data.visits) parts.push(bestDay.data.visits + ' sujet' + (bestDay.data.visits > 1 ? 's' : ''));
      bestLine1 = formatDateShort(bestDay.date);
      bestLine2 = parts.join(' · ') || 'Activité enregistrée';
    }

    let trendLine1, trendLine2;
    if (trend.thisWeek === 0) {
      trendLine1 = '—';
      trendLine2 = 'Pas d\'activité cette semaine';
    } else if (trend.pct === null) {
      trendLine1 = trend.thisWeek + '';
      trendLine2 = 'Première semaine d\'activité';
    } else {
      const sign = trend.pct >= 0 ? '+' : '';
      trendLine1 = sign + trend.pct + '%';
      trendLine2 = 'vs semaine dernière (' + trend.lastWeek + ' → ' + trend.thisWeek + ')';
    }

    main.appendChild(el('div', { class: 'stats-grid stats-grid-extras' },
      bigStat(streakLine1, 'Série actuelle', streakLine2),
      bigStat(bestLine1,   'Meilleur jour', bestLine2),
      bigStat(trendLine1,  'Cette semaine', trendLine2)
    ));

    // ---- Objectifs quotidiens ----
    main.appendChild(renderGoalsPanel());

    // ---- À réviser aujourd'hui (spaced repetition) ----
    const due = getDueQuizzes();
    if (due.length > 0) {
      main.appendChild(el('section', { class: 'profil-section sr-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'À réviser aujourd\'hui'),
        el('p', { class: 'sr-section-sub' },
          due.length + ' quiz dont l\'algorithme de répétition espacée recommande la révision.'),
        el('div', { class: 'sr-due-list' },
          ...due.map(d => {
            const sujet = state.sujets[d.id];
            const repInfo = d.sr.repetitions === 0
              ? 'Première révision'
              : 'Révision n°' + d.sr.repetitions + ' · intervalle ' + d.sr.interval + ' j';
            return el('a', {
              class: 'sr-due-item',
              href: '#/sujet/' + encodeURIComponent(d.id) + '/quiz'
            },
              el('span', { class: 'sr-due-title', html: htmlEscapeButKeepEm(sujet.meta.titre) }),
              el('span', { class: 'sr-due-meta' }, repInfo)
            );
          })
        )
      ));
    }

    // ---- Section Quiz : stats fines, performance par domaine, top sujets ----
    main.appendChild(renderQuizSection());

    // Heatmap d'activité — 12 derniers mois
    main.appendChild(renderHeatmap());

    // Mini calendrier du mois en cours (zoom détaillé)
    main.appendChild(renderMonthCalendar());

    // ---- Top sujets ----
    const top = computeTopSujets(da);
    if (top.length > 0) {
      const topMaxTime = Math.max.apply(null, top.map(t => t.timeMs)) || 1;
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Sujets les plus travaillés'),
        el('div', { class: 'top-sujets-list' },
          ...top.slice(0, 5).map(t => {
            const sujet = state.sujets[t.id];
            const titre = sujet ? sujet.meta.titre : t.id;
            const primary = sujet ? (sujet.meta.domaines || [])[0] : null;
            const color = primary ? domainColor(primary) : 'var(--d-default)';
            const pct = (t.timeMs / topMaxTime) * 100;
            const sub = [];
            if (t.timeMs) sub.push(formatDuration(t.timeMs));
            if (t.blocs)  sub.push(t.blocs + ' blocs lus');
            if (t.quiz)   sub.push(t.quiz + ' quiz');
            const row = el('a', {
              class: 'top-sujet-row',
              href: sujet ? '#/sujet/' + encodeURIComponent(t.id) : null,
              style: { '--bar-color': color }
            },
              el('div', { class: 'top-sujet-bar', style: { width: pct.toFixed(1) + '%' } }),
              el('div', { class: 'top-sujet-info' },
                el('span', { class: 'top-sujet-title', html: htmlEscapeButKeepEm(titre) }),
                el('span', { class: 'top-sujet-meta' }, sub.join(' · ') || 'Aucune mesure de temps')
              )
            );
            return row;
          })
        )
      ));
    }

    // ---- Domaines à explorer ----
    // Pour chaque domaine, compte (sujets visités / total). Les domaines
    // avec le taux le plus bas sont des "angles morts" — pousse l'utilisateur
    // à diversifier ses lectures plutôt qu'à toujours retourner sur les
    // mêmes thèmes.
    const domStats = {};
    sujets.forEach(s => {
      const dom = (s.meta.domaines || ['Autre'])[0];
      if (!domStats[dom]) domStats[dom] = { total: 0, visited: 0 };
      domStats[dom].total++;
      const p = state.user.progress[s.meta.id];
      if (p && p.visited) domStats[dom].visited++;
    });
    const unexplored = Object.entries(domStats)
      .map(([d, c]) => ({ domain: d, visited: c.visited, total: c.total, ratio: c.total > 0 ? c.visited / c.total : 0 }))
      .filter(d => d.ratio < 0.5)  // au moins la moitié non vue
      .sort((a, b) => a.ratio - b.ratio)
      .slice(0, 4);
    if (unexplored.length > 0 && visited > 0) {
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Domaines à explorer'),
        el('p', { class: 'sr-section-sub' },
          'Les domaines où ton carnet contient des sujets que tu n\'as pas encore ouverts.'),
        el('div', { class: 'unexplored-list' },
          ...unexplored.map(d => {
            const c = domainColor(d.domain);
            const remaining = d.total - d.visited;
            // Trouve un sujet non visité de ce domaine pour proposer un point d'entrée
            const pickable = sujets.find(s => {
              const sd = (s.meta.domaines || ['Autre'])[0];
              if (sd !== d.domain) return false;
              const p = state.user.progress[s.meta.id];
              return !p || !p.visited;
            });
            const item = el('div', {
              class: 'unexplored-item',
              style: { '--dom-color': c }
            },
              el('span', { class: 'unexplored-dot' }),
              el('div', { class: 'unexplored-info' },
                el('span', { class: 'unexplored-name' }, d.domain),
                el('span', { class: 'unexplored-meta' },
                  d.visited + ' / ' + d.total + ' lus · ' + remaining + ' à découvrir')
              )
            );
            if (pickable) {
              item.appendChild(el('a', {
                class: 'btn btn-secondary unexplored-cta',
                href: '#/sujet/' + encodeURIComponent(pickable.meta.id)
              }, 'Commencer →'));
            }
            return item;
          })
        )
      ));
    }

    // ---- Distribution par domaine ----
    const distrib = computeDomainDistribution(da);
    if (distrib.length > 0) {
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Répartition par domaine'),
        el('div', { class: 'domain-distrib' },
          el('div', { class: 'domain-distrib-bar' },
            ...distrib.map(d => el('div', {
              class: 'domain-distrib-segment',
              title: d.domain + ' — ' + formatDuration(d.ms) + ' (' + Math.round(d.pct * 100) + '%)',
              style: {
                width: (d.pct * 100).toFixed(2) + '%',
                background: domainColor(d.domain)
              }
            }))
          ),
          el('div', { class: 'domain-distrib-legend' },
            ...distrib.map(d => el('div', { class: 'domain-distrib-legend-item' },
              el('span', { class: 'domain-distrib-dot', style: { background: domainColor(d.domain) } }),
              el('span', { class: 'domain-distrib-name' }, d.domain),
              el('span', { class: 'domain-distrib-time' }, formatDuration(d.ms) + ' · ' + Math.round(d.pct * 100) + '%')
            ))
          )
        )
      ));
    }

    // Recently visited
    const recents = sujets
      .filter(s => state.user.progress[s.meta.id] && state.user.progress[s.meta.id].lastVisit)
      .sort((a, b) => new Date(state.user.progress[b.meta.id].lastVisit) - new Date(state.user.progress[a.meta.id].lastVisit))
      .slice(0, 5);

    if (recents.length > 0) {
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Récemment ouverts'),
        el('div', { class: 'history-list' },
          ...recents.map(s => el('a', {
            class: 'history-item',
            href: '#/sujet/' + encodeURIComponent(s.meta.id)
          },
            el('span', { class: 'history-item-title', html: htmlEscapeButKeepEm(s.meta.titre) }),
            el('span', { class: 'history-item-meta' }, formatDate(state.user.progress[s.meta.id].lastVisit))
          ))
        )
      ));
    }

    // Favorites
    const favSujets = state.user.favorites.map(id => state.sujets[id]).filter(Boolean);
    if (favSujets.length > 0) {
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Mes favoris'),
        el('div', { class: 'sujet-grid' }, ...favSujets.map(s => sujetCard(s)))
      ));
    }

    // Best quiz scores
    if (quizScores.length > 0) {
      main.appendChild(el('section', { class: 'profil-section' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Meilleurs scores aux quiz'),
        el('div', { class: 'history-list' },
          ...quizScores
            .map(([id, sc]) => ({ sujet: state.sujets[id], sc }))
            .filter(x => x.sujet)
            .sort((a, b) => (b.sc.best / b.sc.total) - (a.sc.best / a.sc.total))
            .map(x => el('a', {
              class: 'history-item',
              href: '#/sujet/' + encodeURIComponent(x.sujet.meta.id) + '/quiz'
            },
              el('span', { class: 'history-item-title', html: htmlEscapeButKeepEm(x.sujet.meta.titre) }),
              el('span', { class: 'history-item-meta' }, `${x.sc.best} / ${x.sc.total} · ${Math.round((x.sc.best/x.sc.total)*100)}%`)
            ))
        )
      ));
    }

    // ---- Achievements ----
    main.appendChild(renderAchievementsSection());

    // Data management
    main.appendChild(el('section', { class: 'profil-section' },
      el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } }, 'Mes données'),
      el('p', { class: 'page-subtitle', style: { fontSize: '0.95rem' } },
        'Toute votre progression est sauvegardée localement dans ce navigateur. Exportez-la pour la sauvegarder ou la transférer.'),
      el('div', { class: 'btn-row' },
        el('button', { class: 'btn btn-secondary', onclick: exportData }, 'Exporter mes données'),
        el('button', { class: 'btn btn-secondary', onclick: importData }, 'Importer un export'),
        el('button', { class: 'btn btn-secondary', onclick: resetData, style: { borderColor: 'var(--err)', color: 'var(--err)' } }, 'Réinitialiser')
      )
    ));
  }

  // Panneau des objectifs quotidiens (temps + intensité)
  function renderGoalsPanel() {
    const goals = state.user.goals || { timeMs: 30 * 60 * 1000, intensity: 10 };
    const today = dateKey(new Date());
    const da = state.user.dailyActivity || {};
    const todayData = da[today] || {};
    let todayMs = 0;
    if (todayData.sujets) {
      Object.values(todayData.sujets).forEach(s => { todayMs += (s.timeMs || 0); });
    }
    const todayInt = dailyIntensity(todayData);

    const timePct = Math.min(100, goals.timeMs > 0 ? (todayMs / goals.timeMs) * 100 : 0);
    const intPct  = Math.min(100, goals.intensity > 0 ? (todayInt / goals.intensity) * 100 : 0);

    function editGoals() {
      const m = prompt('Objectif quotidien — minutes de lecture (1 à 240)',
        Math.round(goals.timeMs / 60000));
      if (m === null) return;
      const mins = Math.max(1, Math.min(240, parseInt(m, 10) || 30));
      const i = prompt('Objectif quotidien — intensité (1 à 100)\n\n' +
        '(L\'intensité = visites + blocs lus + quiz × 3, agrégé sur la journée)',
        goals.intensity);
      if (i === null) return;
      const inten = Math.max(1, Math.min(100, parseInt(i, 10) || 10));
      state.user.goals = { timeMs: mins * 60000, intensity: inten };
      saveUserState();
      rerender();
    }

    return el('section', { class: 'profil-section goals-panel' },
      el('div', { class: 'goals-header' },
        el('h3', { style: { fontStyle: 'italic', fontWeight: 400, margin: 0 } }, 'Objectifs du jour'),
        el('button', { class: 'goals-edit', onclick: editGoals, title: 'Modifier mes objectifs' }, 'modifier')
      ),
      el('div', { class: 'goal-row' },
        el('div', { class: 'goal-label' },
          el('span', { class: 'goal-name' }, 'Temps de lecture'),
          el('span', { class: 'goal-value' }, formatDuration(todayMs) + ' / ' + formatDuration(goals.timeMs))
        ),
        el('div', { class: 'goal-track' },
          el('div', { class: 'goal-fill', style: { width: timePct + '%' } })
        )
      ),
      el('div', { class: 'goal-row' },
        el('div', { class: 'goal-label' },
          el('span', { class: 'goal-name' }, 'Intensité d\'activité'),
          el('span', { class: 'goal-value' }, todayInt + ' / ' + goals.intensity + ' points')
        ),
        el('div', { class: 'goal-track' },
          el('div', { class: 'goal-fill', style: { width: intPct + '%' } })
        )
      )
    );
  }

  function renderAchievementsSection() {
    const unlocked = new Set(state.user.achievements || []);
    return el('section', { class: 'profil-section achievements-section' },
      el('h3', { style: { fontStyle: 'italic', fontWeight: 400 } },
        'Succès (' + unlocked.size + ' / ' + ACHIEVEMENTS.length + ')'),
      el('div', { class: 'achievements-grid' },
        ...ACHIEVEMENTS.map(a => {
          const isUnlocked = unlocked.has(a.id);
          return el('div', {
            class: 'achievement-card' + (isUnlocked ? ' is-unlocked' : ' is-locked'),
            title: isUnlocked ? 'Débloqué' : 'À débloquer'
          },
            el('div', { class: 'achievement-icon' }, isUnlocked ? '✦' : '○'),
            el('div', { class: 'achievement-body' },
              el('div', { class: 'achievement-label' }, a.label),
              el('div', { class: 'achievement-desc' }, a.desc)
            )
          );
        })
      )
    );
  }

  function stat(value, label) {
    return el('div', { class: 'stat-card' },
      el('div', { class: 'stat-value' }, String(value)),
      el('div', { class: 'stat-label' }, label)
    );
  }

  // Carte de stat avec une 3e ligne de contexte (sous-titre)
  function bigStat(value, label, sub) {
    return el('div', { class: 'stat-card stat-card-rich' },
      el('div', { class: 'stat-value' }, String(value)),
      el('div', { class: 'stat-label' }, label),
      sub ? el('div', { class: 'stat-sub' }, sub) : null
    );
  }

  const EXPORT_MARKER = 'carnet-de-savoirs';
  const EXPORT_VERSION = 1;

  function exportData() {
    const envelope = {
      app: EXPORT_MARKER,
      version: EXPORT_VERSION,
      appVersion: APP_VERSION,
      exportedAt: new Date().toISOString(),
      user: state.user
    };
    const dataStr = JSON.stringify(envelope, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'carnet-de-savoirs-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Format invalide');
          // Deux formats acceptés : l'enveloppe { app, version, user } (exports
          // récents) et l'ancien export « brut » (l'objet user directement),
          // reconnu par la présence d'au moins un champ structurel.
          let raw;
          if (data.app === EXPORT_MARKER && data.user && typeof data.user === 'object') raw = data.user;
          else if ('progress' in data || 'quizScores' in data || 'dailyActivity' in data) raw = data;
          else throw new Error('Ce fichier n\'est pas un export du Carnet de Savoirs.');
          migrateUserState(raw);
          const clean = sanitizeUserState(raw);
          const nbSujets = Object.keys(clean.progress || {}).length;
          const nbQuiz = Object.keys(clean.quizScores || {}).length;
          const nbJours = Object.keys(clean.dailyActivity || {}).length;
          const when = data.exportedAt ? ' (export du ' + String(data.exportedAt).slice(0, 10) + ')' : '';
          const ok = confirm('Importer ces données' + when + ' ?\n\n' +
            '• ' + nbSujets + ' fiche(s) ouverte(s)\n' +
            '• ' + nbQuiz + ' quiz joué(s)\n' +
            '• ' + nbJours + ' jour(s) d\'activité\n\n' +
            'Ta progression actuelle sera REMPLACÉE (pense à l\'exporter avant si besoin).');
          if (!ok) return;
          state.user = clean;
          saveUserState();
          alert('Données importées. La page va se recharger.');
          location.reload();
        } catch (err) {
          alert('Erreur à l\'import : ' + err.message);
        }
      };
      reader.readAsText(f);
    };
    input.click();
  }

  function resetData() {
    if (!confirm('Êtes-vous sûr ? Ceci supprimera votre progression, scores quiz, favoris et notes. Action irréversible.')) return;
    state.user = defaultUserState();
    saveUserState();
    location.reload();
  }

  // =================================================================
  // RENDER PRINCIPAL
  // =================================================================

  // Trace du dernier hash rendu : permet de distinguer une vraie navigation
  // (hash modifié) d'un simple rerender intra-vue (ex: passage à la question
  // suivante dans un quiz). Dans le second cas, on préserve la position de
  // scroll pour éviter de reperdre la zone du quiz à chaque clic.
  let _lastRenderedHash = null;

  // ---- Overlays plein écran (présentation, flashcards, diaporama…) ----
  // Montage commun : refuse un second overlay tant qu'un est ouvert, pose
  // la classe body, l'écouteur clavier (ignoré dans les champs de saisie),
  // et FERME l'overlay à la navigation (bouton Retour, Ctrl+K, lien dans
  // une carte) — sinon body.overlay-active et le keydown global survivaient
  // à la vue qui les avait ouverts.
  function mountOverlay(overlay, close, onKey) {
    if (document.body.classList.contains('overlay-active')) return false;
    const keyHandler = (e) => {
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
      onKey(e);
    };
    overlay._keyHandler = keyHandler;
    document.addEventListener('keydown', keyHandler);
    document.body.classList.add('overlay-active');
    document.body.appendChild(overlay);
    if (!overlay.hasAttribute('role')) overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    window.addEventListener('hashchange', () => { if (overlay.parentNode) close(); }, { once: true });
    return true;
  }
  function unmountOverlay(overlay) {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    if (overlay._keyHandler) { document.removeEventListener('keydown', overlay._keyHandler); overlay._keyHandler = null; }
    document.body.classList.remove('overlay-active');
  }

  // ---- Cycle de vie des vues ----
  // Deux registres de fonctions de nettoyage :
  //  - onRerender(fn)  : exécutée au PROCHAIN rerender, quel qu'il soit
  //                      (observers, timers de dwell liés au DOM courant).
  //  - onLeaveView(fn) : exécutée seulement quand le hash change (timers de
  //                      manche, écouteurs document/window, overlays…) — un
  //                      rerender intra-vue (question suivante, accordéon)
  //                      ne doit pas les tuer.
  // Évite les fuites d'écouteurs, les chronos fantômes qui tournent après
  // navigation et les callbacks sur DOM détaché.
  const _renderCleanups = [];
  const _viewCleanups = [];
  function onRerender(fn) { if (typeof fn === 'function') _renderCleanups.push(fn); }
  function onLeaveView(fn) { if (typeof fn === 'function') _viewCleanups.push(fn); }
  function runCleanups(list) {
    while (list.length) {
      const fn = list.pop();
      try { fn(); } catch (e) { console.warn('[CarnetDeSavoirs] cleanup', e); }
    }
  }

  function rerender() {
    const route = parseHash();
    const currentHash = location.hash;
    const isNavigation = (_lastRenderedHash !== currentHash);
    runCleanups(_renderCleanups);
    if (isNavigation) runCleanups(_viewCleanups);
    const preservedScroll = isNavigation ? 0 : window.scrollY;
    const main = renderShell(route.view);

    // Timer de session : démarre/maintient sur une fiche sujet, stoppe ailleurs
    if (route.view === 'sujet') {
      startSujetTimer(route.id);
    } else {
      stopSujetTimer();
    }

    if (route.view === 'sujet') {
      renderSujet(main, route.id, route.tab, route.blockTarget);
    } else if (route.view === 'carte') {
      renderCarte(main);
    } else if (route.view === 'profil') {
      renderProfil(main);
    } else if (route.view === 'quiz-mixte') {
      setAccent(null);
      renderQuizMixte(main);
    } else if (route.view === 'notes') {
      setAccent(null);
      renderNotesGlobales(main);
    } else if (route.view === 'parcours-liste') {
      renderParcoursListe(main);
    } else if (route.view === 'parcours-detail') {
      renderParcoursDetail(main, route.id);
    } else if (route.view === 'timeline') {
      renderTimelineGlobale(main);
    } else if (route.view === 'vocabulaire') {
      renderVocabulaire(main);
    } else if (route.view === 'champion') {
      setAccent(null);
      renderChampion(main, route.manche);
    } else {
      setAccent(null);
      renderBibliotheque(main);
    }

    // Mode lecture : actif uniquement sur l'onglet Cours d'un sujet,
    // pour éviter de masquer la sidebar sur les vues de navigation.
    const inReadingCours = route.view === 'sujet' && route.tab === 'cours' && !!state.user.readingMode;
    document.body.classList.toggle('reading-mode', inReadingCours);

    // Scroll : remise à zéro uniquement sur navigation réelle (changement
    // de hash). Sur un rerender intra-vue (quiz qui avance, accordion, etc.)
    // on restaure la position précédente pour ne pas casser la lecture.
    if (isNavigation) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo({ top: preservedScroll, behavior: 'instant' });
    }
    _lastRenderedHash = currentHash;
  }

  window.addEventListener('hashchange', rerender);

  // =================================================================
  // BOUTON RETOUR EN HAUT (flottant)
  // =================================================================

  function setupBackToTop() {
    const btn = el('button', {
      class: 'back-to-top',
      title: 'Retour en haut',
      onclick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }, '↑');
    document.body.appendChild(btn);
    function update() {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // =================================================================
  // RECHERCHE FULL-TEXT — palette Ctrl+K
  // =================================================================
  // Indexation : on parcourt tous les sujets et on émet une liste plate
  // d'entrées { sujetId, sujetTitle, domain, kind, text, blockIdx?, weight }
  // que la recherche scanne en substring (insensible casse + accent).
  // Build paresseux : on construit au 1er appel après chargement des sujets.

  const SEARCH_INDEX = { built: false, entries: [] };

  // =================================================================
  // INDEX DE BACKLINKS — pour chaque sujet : qui le cite (lie_a + [[slug]])
  // =================================================================
  // Construit paresseusement, partagé entre l'onglet Résumé (panneau
  // "Qui cite ce sujet ?") et potentiellement d'autres vues futures.
  // Entrées par target slug :
  //   { sourceId, via: 'lie_a' | 'citation', blockIdx?, blockTitle?, snippet? }
  const BACKLINKS_INDEX = { built: false, byTarget: {} };

  function backlinksMakeSnippet(text, target) {
    // Marker accepte [[target]] OU [[target|alias]] (longueur variable)
    const markerRe = new RegExp('\\[\\[' + target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\|[^\\]]+)?\\]\\]');
    const m = markerRe.exec(text);
    if (!m) return '';
    const idx = m.index;
    const markerLen = m[0].length;
    const radius = 110;
    let start = Math.max(0, idx - radius);
    let end = Math.min(text.length, idx + markerLen + radius);
    if (start > 0) {
      const sp = text.indexOf(' ', start);
      if (sp >= 0 && sp < idx) start = sp + 1;
    }
    if (end < text.length) {
      const sp = text.lastIndexOf(' ', end);
      if (sp > idx + markerLen) end = sp;
    }
    let snip = text.slice(start, end);
    snip = snip
      .replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, sl, alias) => alias || sl.replace(/-/g, ' '))
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\{accent\}/g, '$1')
      .replace(/\s+/g, ' ').trim();
    if (start > 0) snip = '… ' + snip;
    if (end < text.length) snip = snip + ' …';
    return snip;
  }

  function buildBacklinksIndex() {
    if (BACKLINKS_INDEX.built) return BACKLINKS_INDEX.byTarget;
    const byTarget = {};
    function addEntry(target, entry) {
      if (!byTarget[target]) byTarget[target] = [];
      byTarget[target].push(entry);
    }
    state.sujetsOrder.forEach(sourceId => {
      const s = state.sujets[sourceId];
      if (!s || !s.meta) return;
      // Dédoublonnage à l'échelle (source, target, bloc) — un même [[slug]]
      // mentionné plusieurs fois dans un bloc ne génère qu'une entrée.
      const seen = new Set();

      // 1. lie_a (lien fort sans extrait textuel)
      (s.meta.lie_a || []).forEach(target => {
        if (target === sourceId) return;
        if (!state.sujets[target]) return;
        const key = sourceId + '|' + target + '|lie_a';
        if (seen.has(key)) return;
        seen.add(key);
        addEntry(target, { sourceId, via: 'lie_a' });
      });

      // 2. [[slug]] (et [[slug|alias]]) dans le contenu — l'alias ne sert
      // qu'à l'affichage en md(), pas à la construction de l'index.
      const re = /\[\[([a-z0-9-]+)(?:\|[^\]]+)?\]\]/g;
      function recordHits(text, blockIdx, blockTitle) {
        if (!text) return;
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(text)) !== null) {
          const target = m[1];
          if (target === sourceId || !state.sujets[target]) continue;
          const key = sourceId + '|' + target + '|' + blockIdx;
          if (seen.has(key)) continue;
          seen.add(key);
          addEntry(target, {
            sourceId,
            via: 'citation',
            blockIdx,
            blockTitle,
            snippet: backlinksMakeSnippet(text, target)
          });
        }
      }
      function scanAny(val, blockIdx, blockTitle) {
        if (val == null) return;
        if (typeof val === 'string') recordHits(val, blockIdx, blockTitle);
        else if (Array.isArray(val)) val.forEach(v => scanAny(v, blockIdx, blockTitle));
        else if (typeof val === 'object') Object.values(val).forEach(v => scanAny(v, blockIdx, blockTitle));
      }
      if (s.resume) recordHits(s.resume, -1, 'Résumé');
      if (Array.isArray(s.points_cles)) s.points_cles.forEach(p => recordHits(p, -1, 'Points-clés'));
      if (Array.isArray(s.cours)) {
        s.cours.forEach((b, i) => {
          if (!b) return;
          const rawTitle = b.titre || b.label || ('Bloc ' + (i + 1));
          const blockTitle = String(rawTitle).replace(/<[^>]+>/g, '').trim() || ('Bloc ' + (i + 1));
          scanAny(b, i, blockTitle);
        });
      }
      if (s.carte_mentale && Array.isArray(s.carte_mentale.noeuds)) {
        s.carte_mentale.noeuds.forEach(n => {
          if (n && n.description) recordHits(n.description, -2, 'Carte mentale');
        });
      }
    });
    BACKLINKS_INDEX.byTarget = byTarget;
    BACKLINKS_INDEX.built = true;
    return byTarget;
  }

  function getBacklinksFor(targetSlug) {
    const idx = buildBacklinksIndex();
    return idx[targetSlug] || [];
  }

  // =================================================================
  // VOCABULAIRE GLOBAL — deck transverse des concepts du carnet
  // =================================================================
  // Source : champ `vocabulaire` curaté par sujet — chaque sujet déclare
  // explicitement la liste des termes-à-retenir avec leur définition propre.
  // Schéma par sujet :
  //   vocabulaire: [
  //     { terme: 'Plus-value', definition: 'Concept marxien : ...' },
  //     ...
  //   ]
  // Quand un même terme apparaît dans plusieurs sujets, on déduplique
  // par forme normalisée et on cumule les occurrences (différentes
  // facettes / contextes du même concept).
  const VOCAB_INDEX = { built: false, terms: [] };

  function buildVocabIndex() {
    if (VOCAB_INDEX.built) return VOCAB_INDEX.terms;
    const byNorm = {};
    state.sujetsOrder.forEach(id => {
      const s = state.sujets[id];
      if (!s || !s.meta) return;
      if (!Array.isArray(s.vocabulaire)) return;
      const sourceTitle = String(s.meta.titre).replace(/<[^>]+>/g, '');
      const domain = (s.meta.domaines || ['Autre'])[0];

      s.vocabulaire.forEach(v => {
        if (!v || !v.terme || !v.definition) return;
        const term = String(v.terme).trim();
        if (!term) return;
        const norm = searchNormalize(term);
        if (!byNorm[norm]) byNorm[norm] = { term, norm, occurrences: [] };
        // Préfère la version avec majuscule pour les noms propres
        if (term[0] === term[0].toUpperCase() && byNorm[norm].term[0] !== byNorm[norm].term[0].toUpperCase()) {
          byNorm[norm].term = term;
        }
        byNorm[norm].occurrences.push({
          sourceId: id,
          sourceTitle,
          domain,
          definition: v.definition  // markdown-lite, rendu via md() à l'affichage
        });
      });
    });
    const terms = Object.values(byNorm).sort((a, b) => a.norm.localeCompare(b.norm));
    VOCAB_INDEX.terms = terms;
    VOCAB_INDEX.built = true;
    return terms;
  }

  // ---- Vue principale du vocabulaire ----
  function renderVocabulaire(main) {
    setAccent(null);
    main.appendChild(el('span', { class: 'eyebrow' }, 'Lexique transverse du carnet'));
    main.appendChild(el('h1', { class: 'page-title', html: '<em>Vocabulaire</em> du carnet' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Tous les concepts définis dans les cartes mentales des sujets, agrégés en un lexique unique. Chaque carte = un terme avec sa définition propre, plus un lien vers la fiche d\'origine. Le mode flashcards te fait défiler le deck pour mémoriser.'));

    const terms = buildVocabIndex();
    if (terms.length === 0) {
      main.appendChild(el('div', { class: 'empty-state' },
        el('div', { class: 'empty-state-icon' }, '✦'),
        el('p', null, 'Aucun terme accentué pour le moment.')));
      return;
    }

    const totalOcc = terms.reduce((s, t) => s + t.occurrences.length, 0);
    // Domaines distincts présents dans le vocabulaire, avec compteur pour
    // le sélecteur de filtre.
    const allDomains = Array.from(new Set(
      terms.flatMap(t => t.occurrences.map(o => o.domain))
    )).sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

    const toolbar = el('div', { class: 'vocab-toolbar' });
    const searchInput = el('input', {
      class: 'vocab-search',
      type: 'text',
      placeholder: 'Filtrer (terme, sujet, domaine…)',
      autocomplete: 'off'
    });
    toolbar.appendChild(searchInput);

    // Filtre par domaine : permet de réduire la vue à un seul domaine.
    // Le nombre de termes du domaine est affiché entre parenthèses.
    const domSel = el('select', { class: 'vocab-domain-select' });
    domSel.appendChild(el('option', { value: '' },
      'Tous les domaines (' + terms.length + ')'));
    allDomains.forEach(d => {
      const count = terms.filter(t => t.occurrences.some(o => o.domain === d)).length;
      domSel.appendChild(el('option', { value: d }, d + ' (' + count + ')'));
    });
    toolbar.appendChild(domSel);

    // Tri : alphabétique (par défaut), par domaine, par nombre d'occurrences
    // (utile pour repérer les concepts transversaux), ou aléatoire (utile
    // pour redécouvrir des termes).
    const sortSel = el('select', { class: 'vocab-sort-select' });
    [
      ['alpha',  'Tri : A → Z'],
      ['domain', 'Tri : par domaine'],
      ['occ',    'Tri : occurrences ↓'],
      ['random', 'Tri : aléatoire']
    ].forEach(([v, l]) => sortSel.appendChild(el('option', { value: v }, l)));
    toolbar.appendChild(sortSel);

    const counter = el('span', { class: 'vocab-counter' });
    toolbar.appendChild(counter);

    // Le bouton flashcards reprend exactement les filtres actifs de la grille
    // (recherche + domaine) pour permettre de réviser uniquement un domaine.
    // Le libellé s'adapte au filtre : "Réviser 23 termes d'Histoire →".
    const flashBtn = el('button', { class: 'btn' }, 'Réviser en flashcards →');
    function computeVisibleTerms() {
      const q = searchNormalize(searchInput.value || '').trim();
      const dom = domSel.value;
      let visible = terms;
      if (q) {
        visible = visible.filter(t => {
          if (searchNormalize(t.term).indexOf(q) >= 0) return true;
          return t.occurrences.some(o =>
            searchNormalize(o.sourceTitle).indexOf(q) >= 0 ||
            searchNormalize(o.domain).indexOf(q) >= 0);
        });
      }
      if (dom) {
        visible = visible.filter(t => t.occurrences.some(o => o.domain === dom));
      }
      return visible;
    }
    function updateFlashBtnLabel() {
      const dom = domSel.value;
      const q = (searchInput.value || '').trim();
      const visible = computeVisibleTerms();
      if (dom && !q) {
        flashBtn.textContent = 'Réviser ' + visible.length + ' terme' +
          (visible.length > 1 ? 's' : '') + ' de ' + dom + ' →';
      } else if (q || dom) {
        flashBtn.textContent = 'Réviser ' + visible.length + ' terme' +
          (visible.length > 1 ? 's' : '') + ' filtré' + (visible.length > 1 ? 's' : '') + ' →';
      } else {
        flashBtn.textContent = 'Réviser en flashcards →';
      }
      flashBtn.disabled = visible.length === 0;
    }
    flashBtn.addEventListener('click', () => {
      const visible = computeVisibleTerms();
      if (visible.length === 0) return;
      const dom = domSel.value || null;
      openVocabFlashcards(visible, dom);
    });
    toolbar.appendChild(flashBtn);
    main.appendChild(toolbar);

    // Index alphabétique cliquable : pour les 500+ termes du carnet, défiler
    // tout l'alphabet à la souris est fatigant. L'index permet de sauter
    // directement à une lettre. Visible seulement quand le tri est
    // alphabétique (sinon les ancres n'auraient pas de sens).
    const alphaIndex = el('div', { class: 'vocab-alpha-index' });
    const lettersInUse = new Set();
    terms.forEach(t => {
      const first = (t.norm[0] || '').toUpperCase();
      if (first && /[A-Z0-9]/.test(first)) lettersInUse.add(first);
    });
    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    allLetters.forEach(l => {
      const a = el('button', {
        class: 'vocab-alpha-letter' + (lettersInUse.has(l) ? '' : ' is-empty'),
        type: 'button'
      }, l);
      a.addEventListener('click', () => {
        if (!lettersInUse.has(l)) return;
        const target = grid.querySelector('[data-letter="' + l + '"]');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      alphaIndex.appendChild(a);
    });
    main.appendChild(alphaIndex);

    const grid = el('div', { class: 'vocab-grid' });
    main.appendChild(grid);

    function renderGrid() {
      clear(grid);
      const q = searchNormalize(searchInput.value || '').trim();
      const dom = domSel.value;
      const sortMode = sortSel.value;

      let visible = terms;
      if (q) {
        visible = visible.filter(t => {
          if (searchNormalize(t.term).indexOf(q) >= 0) return true;
          return t.occurrences.some(o =>
            searchNormalize(o.sourceTitle).indexOf(q) >= 0 ||
            searchNormalize(o.domain).indexOf(q) >= 0);
        });
      }
      if (dom) {
        visible = visible.filter(t => t.occurrences.some(o => o.domain === dom));
      }

      // Tri (les termes arrivent déjà triés alphabétiquement de buildVocabIndex)
      if (sortMode === 'domain') {
        visible = visible.slice().sort((a, b) => {
          const da = (a.occurrences[0] && a.occurrences[0].domain) || '';
          const db = (b.occurrences[0] && b.occurrences[0].domain) || '';
          return da.localeCompare(db, 'fr') || a.norm.localeCompare(b.norm);
        });
      } else if (sortMode === 'occ') {
        visible = visible.slice().sort((a, b) =>
          b.occurrences.length - a.occurrences.length ||
          a.norm.localeCompare(b.norm));
      } else if (sortMode === 'random') {
        visible = visible.slice();
        for (let i = visible.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = visible[i]; visible[i] = visible[j]; visible[j] = tmp;
        }
      }
      // sinon mode 'alpha' : déjà trié dans buildVocabIndex

      counter.textContent = visible.length === terms.length
        ? terms.length + ' termes · ' + totalOcc + ' occurrences'
        : visible.length + ' / ' + terms.length + ' termes';

      // L'index alphabétique n'a de sens qu'en tri alphabétique.
      alphaIndex.classList.toggle('is-hidden', sortMode !== 'alpha');

      if (visible.length === 0) {
        grid.appendChild(el('p', { class: 'vocab-empty' }, 'Aucun terme ne correspond à ce filtre.'));
        return;
      }

      // Pose des ancres data-letter sur la première carte de chaque lettre
      // (seulement en tri alpha). Permet le scrollIntoView depuis l'index.
      let lastLetter = '';
      visible.forEach(t => {
        const card = makeVocabCard(t);
        if (sortMode === 'alpha') {
          const letter = (t.norm[0] || '').toUpperCase();
          if (letter !== lastLetter && /[A-Z0-9]/.test(letter)) {
            card.setAttribute('data-letter', letter);
            lastLetter = letter;
          }
        }
        grid.appendChild(card);
      });
    }
    let inputDebounce = null;
    searchInput.addEventListener('input', () => {
      if (inputDebounce) clearTimeout(inputDebounce);
      inputDebounce = setTimeout(() => { renderGrid(); updateFlashBtnLabel(); }, 80);
    });
    domSel.addEventListener('change', () => { renderGrid(); updateFlashBtnLabel(); });
    sortSel.addEventListener('change', renderGrid);
    renderGrid();
    updateFlashBtnLabel();
  }

  function makeVocabCard(termData) {
    const t = termData;
    // Couleur dominante = domaine majoritaire des occurrences
    const counts = {};
    t.occurrences.forEach(o => { counts[o.domain] = (counts[o.domain] || 0) + 1; });
    let bestDom = null, bestN = 0;
    Object.keys(counts).forEach(d => { if (counts[d] > bestN) { bestN = counts[d]; bestDom = d; } });
    const color = domainColor(bestDom || 'Autre');

    const card = el('article', {
      class: 'vocab-card',
      style: { '--card-accent': color }
    });
    const head = el('header', { class: 'vocab-card-head' });
    head.appendChild(el('span', { class: 'vocab-card-term' }, t.term));
    if (t.occurrences.length > 1) {
      head.appendChild(el('span', { class: 'vocab-card-count' },
        '×' + t.occurrences.length));
    }
    card.appendChild(head);

    const body = el('div', { class: 'vocab-card-body' });
    const main = t.occurrences[0];
    // Définition principale rendue via md() (rendu **gras**, [terme]{accent},
    // [[slug]] etc. proprement).
    if (main && main.definition) {
      body.appendChild(el('div', {
        class: 'vocab-card-def',
        html: md(main.definition).replace(/^<p>|<\/p>$/g, '')
      }));
    }
    const src = el('a', {
      class: 'vocab-card-source',
      href: '#/sujet/' + encodeURIComponent(main.sourceId) + '/carte',
      onclick: (e) => {
        e.preventDefault();
        navigate('/sujet/' + encodeURIComponent(main.sourceId) + '/carte');
      }
    },
      el('span', { class: 'vocab-card-dot' }),
      el('span', { class: 'vocab-card-source-text' },
        main.sourceTitle + ' · ' + main.domain)
    );
    body.appendChild(src);

    // Autres occurrences si >1 (variantes du même concept dans d'autres
    // cartes mentales — souvent des définitions complémentaires).
    if (t.occurrences.length > 1) {
      const moreToggle = el('button', { class: 'vocab-card-more' },
        'Voir les ' + (t.occurrences.length - 1) + ' autres définition' +
        (t.occurrences.length - 1 > 1 ? 's' : ''));
      const moreList = el('div', { class: 'vocab-card-more-list' });
      moreList.style.display = 'none';
      t.occurrences.slice(1).forEach(o => {
        const c = domainColor(o.domain);
        const link = el('a', {
          class: 'vocab-card-other',
          style: { '--card-accent': c },
          href: '#/sujet/' + encodeURIComponent(o.sourceId) + '/carte',
          onclick: (e) => {
            e.preventDefault();
            navigate('/sujet/' + encodeURIComponent(o.sourceId) + '/carte');
          }
        });
        link.appendChild(el('span', { class: 'vocab-card-dot' }));
        link.appendChild(el('span', { class: 'vocab-card-other-text' },
          o.sourceTitle + ' · ' + o.domain));
        if (o.definition) link.appendChild(el('span', {
          class: 'vocab-card-other-def',
          html: md(o.definition).replace(/^<p>|<\/p>$/g, '')
        }));
        moreList.appendChild(link);
      });
      moreToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = moreList.style.display !== 'none';
        moreList.style.display = open ? 'none' : '';
        moreToggle.textContent = open
          ? 'Voir les ' + (t.occurrences.length - 1) + ' autres définition' +
            (t.occurrences.length - 1 > 1 ? 's' : '')
          : 'Replier';
      });
      body.appendChild(moreToggle);
      body.appendChild(moreList);
    }

    card.appendChild(body);
    return card;
  }

  // ---- Mode flashcards du vocabulaire global ----
  // Mêmes contrôles que openFlashcardsMode (sujet) : ← → flèches, espace
  // pour retourner, Echap pour quitter.
  // domainLabel : nom du domaine en cours de révision (null = tous domaines).
  // Affiché sous forme d'une pastille colorée en haut de l'overlay.
  function openVocabFlashcards(terms, domainLabel) {
    if (!terms || !terms.length) return;
    // Mélange pour ne pas toujours commencer par les premiers alphabétiques
    const deck = terms.slice();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = deck[i]; deck[i] = deck[j]; deck[j] = t;
    }
    let idx = 0, revealed = false;

    const overlay = el('div', { class: 'flashcards-overlay vocab-flashcards' });
    const closeBtn = el('button', { class: 'flashcard-close', title: 'Quitter (Esc)' }, '✕');
    // Pastille de filtre : visible uniquement quand un domaine est sélectionné.
    // Permet de signaler clairement le sous-ensemble en cours de révision.
    let filterChip = null;
    if (domainLabel) {
      filterChip = el('div', {
        class: 'flashcard-filter-chip',
        style: { '--chip-accent': domainColor(domainLabel) }
      }, 'Domaine : ' + domainLabel);
    }
    const counter = el('div', { class: 'flashcard-counter' });
    const card = el('div', { class: 'flashcard', title: 'Cliquer pour révéler' });
    const cardInner = el('div', { class: 'flashcard-inner' });
    const cardFront = el('div', { class: 'flashcard-face flashcard-front' });
    const cardBack = el('div', { class: 'flashcard-face flashcard-back' });
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    const prevBtn = el('button', { class: 'btn btn-secondary' }, '← Précédent');
    const flipBtn = el('button', { class: 'btn' }, 'Voir la définition');
    const nextBtn = el('button', { class: 'btn btn-secondary' }, 'Suivant →');
    const controls = el('div', { class: 'flashcard-controls' }, prevBtn, flipBtn, nextBtn);
    const hint = el('div', { class: 'flashcard-hint' },
      'Espace/Entrée pour retourner · ← → pour naviguer · Esc pour quitter');

    overlay.appendChild(closeBtn);
    if (filterChip) overlay.appendChild(filterChip);
    overlay.appendChild(counter);
    overlay.appendChild(card);
    overlay.appendChild(controls);
    overlay.appendChild(hint);

    function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    function update() {
      const t = deck[idx];
      counter.textContent = 'Carte ' + (idx + 1) + ' / ' + deck.length;
      cardFront.innerHTML = '<span class="flashcard-term">' + escHtml(t.term) + '</span>' +
        '<span class="flashcard-prompt-sub">(souviens-toi de la définition, puis retourne)</span>';
      const occ = t.occurrences[0];
      let backHtml = '';
      if (occ && occ.definition) {
        backHtml += '<div class="vocab-fc-def">' + md(occ.definition).replace(/^<p>|<\/p>$/g, '') + '</div>';
      }
      backHtml += '<div class="vocab-fc-source">Source : <a href="#/sujet/' +
        encodeURIComponent(occ.sourceId) + '/carte">' + escHtml(occ.sourceTitle) +
        '</a> · ' + escHtml(occ.domain) + '</div>';
      if (t.occurrences.length > 1) {
        backHtml += '<div class="vocab-fc-more">+ ' + (t.occurrences.length - 1) +
          ' autre' + (t.occurrences.length - 1 > 1 ? 's' : '') + ' définition' +
          (t.occurrences.length - 1 > 1 ? 's' : '') + ' dans le carnet</div>';
      }
      cardBack.innerHTML = backHtml;
      card.classList.toggle('is-flipped', revealed);
      flipBtn.textContent = revealed ? 'Cacher' : 'Voir la définition';
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === deck.length - 1;
    }
    function flip() {
      revealed = !revealed;
      if (revealed && deck[idx]) {
        // Trace la révision pour le succès « Cartographe »
        if (!Array.isArray(state.user.vocabReviewed)) state.user.vocabReviewed = [];
        const key = String(deck[idx].term || '').toLowerCase();
        if (key && state.user.vocabReviewed.indexOf(key) < 0) {
          state.user.vocabReviewed.push(key);
          saveUserState();
          checkAchievements();
        }
      }
      update();
    }
    function next() { if (idx < deck.length - 1) { idx++; revealed = false; update(); } }
    function prev() { if (idx > 0) { idx--; revealed = false; update(); } }
    function close() { unmountOverlay(overlay); }
    function onKey(e) {
      if (e.key === 'Escape')      { close(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft')  { prev(); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
      else if (e.key === ' ' || e.key === 'Enter') { flip(); e.preventDefault(); }
    }
    closeBtn.addEventListener('click', close);
    flipBtn.addEventListener('click', flip);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    card.addEventListener('click', flip);
    if (!mountOverlay(overlay, close, onKey)) return;
    update();
  }

  function searchStripMarkdown(s) {
    return String(s || '')
      .replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, sl, alias) => alias || sl.replace(/-/g, ' '))
      .replace(/\[([^\]]+)\]\{accent\}/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function searchNormalize(s) {
    return String(s || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function buildSearchIndex() {
    if (SEARCH_INDEX.built) return SEARCH_INDEX.entries;
    const entries = [];
    state.sujetsOrder.forEach(id => {
      const s = state.sujets[id];
      if (!s || !s.meta) return;
      const cleanTitle = String(s.meta.titre || id).replace(/<[^>]+>/g, '');
      const domain = (s.meta.domaines || ['Autre'])[0];

      entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'title', text: cleanTitle, weight: 12 });
      (s.meta.tags || []).forEach(t => {
        entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'tag', text: t, weight: 7 });
      });
      if (s.resume) {
        entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'resume', text: searchStripMarkdown(s.resume), weight: 6 });
      }
      (s.points_cles || []).forEach(p => {
        entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'point', text: searchStripMarkdown(p), weight: 8 });
      });
      (s.cours || []).forEach((b, i) => {
        if (!b) return;
        if (b.titre) {
          entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-title', text: searchStripMarkdown(b.titre), blockIdx: i, weight: 9 });
        }
        if (b.contenu_md) {
          entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-content', text: searchStripMarkdown(b.contenu_md), blockIdx: i, weight: 5 });
        }
        // Widget Frise / GrilleCartes / ListeMethodes : on indexe titres+desc des items
        const params = b.params || {};
        if (Array.isArray(params.evenements)) {
          params.evenements.forEach(ev => {
            if (!ev) return;
            const t = [ev.titre, ev.description].filter(Boolean).map(searchStripMarkdown).join(' — ');
            if (t) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-content', text: t, blockIdx: i, weight: 5 });
          });
        }
        if (Array.isArray(params.cartes)) {
          params.cartes.forEach(c => {
            if (!c) return;
            const t = [c.titre, c.description].filter(Boolean).map(searchStripMarkdown).join(' — ');
            if (t) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-content', text: t, blockIdx: i, weight: 5 });
          });
        }
        if (Array.isArray(params.methodes)) {
          params.methodes.forEach(m => {
            if (!m) return;
            const t = [m.titre, m.description].filter(Boolean).map(searchStripMarkdown).join(' — ');
            if (t) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-content', text: t, blockIdx: i, weight: 5 });
          });
        }
        // Widget TableauComparatif : indexe chaque ligne en concaténant
        // les valeurs textuelles des cellules pour permettre la recherche
        // sur les entités tabulées.
        if (Array.isArray(params.lignes) && Array.isArray(params.colonnes)) {
          params.lignes.forEach(ligne => {
            if (!ligne) return;
            const t = params.colonnes
              .map(c => ligne[c.id])
              .filter(v => v != null && v !== '')
              .map(v => String(v))
              .join(' — ');
            if (t) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'block-content', text: t, blockIdx: i, weight: 5 });
          });
        }
      });
      (s.quiz || []).forEach((q, i) => {
        if (q && q.q) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'quiz', text: searchStripMarkdown(q.q), quizIdx: i, weight: 4 });
      });
      if (s.carte_mentale && Array.isArray(s.carte_mentale.noeuds)) {
        s.carte_mentale.noeuds.forEach(n => {
          if (!n) return;
          if (n.label) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'carte', text: n.label, weight: 6 });
          if (n.description) entries.push({ sujetId: id, sujetTitle: cleanTitle, domain, kind: 'carte', text: searchStripMarkdown(n.description), weight: 4 });
        });
      }
    });
    SEARCH_INDEX.entries = entries;
    SEARCH_INDEX.built = true;
    return entries;
  }

  function searchEntries(query, limit) {
    limit = limit || 30;
    const q = searchNormalize(query).trim();
    if (!q) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    const entries = buildSearchIndex();
    const matches = [];
    entries.forEach(e => {
      const norm = searchNormalize(e.text);
      let score = 0, firstHit = Infinity, allMatch = true;
      for (const t of terms) {
        const idx = norm.indexOf(t);
        if (idx < 0) { allMatch = false; break; }
        score += 1;
        if (idx === 0 || /\s/.test(norm[idx - 1])) score += 1; // début de mot
        if (idx < firstHit) firstHit = idx;
      }
      if (!allMatch) return;
      const total = e.weight * 10 + score * 3 - Math.min(firstHit, 200) / 20;
      matches.push({ entry: e, score: total });
    });
    matches.sort((a, b) => b.score - a.score);
    // Déduplique : un même (sujet, kind, blockIdx) au mieux 1 fois
    const seen = new Set();
    const out = [];
    for (const m of matches) {
      const k = m.entry.sujetId + '|' + m.entry.kind + '|' + (m.entry.blockIdx ?? '');
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(m);
      if (out.length >= limit) break;
    }
    return out;
  }

  const SEARCH_KIND_LABEL = {
    title: 'Sujet', tag: 'Tag', resume: 'Résumé', point: 'Point-clé',
    'block-title': 'Cours', 'block-content': 'Cours',
    quiz: 'Quiz', carte: 'Carte mentale'
  };

  function searchPathFor(entry) {
    const id = encodeURIComponent(entry.sujetId);
    switch (entry.kind) {
      case 'block-title':
      case 'block-content':
        return '/sujet/' + id + '/cours/bloc-' + entry.blockIdx;
      case 'quiz':
        return '/sujet/' + id + '/quiz';
      case 'carte':
        return '/sujet/' + id + '/carte';
      case 'point':
      case 'resume':
      case 'title':
      case 'tag':
      default:
        return '/sujet/' + id + '/resume';
    }
  }

  function searchHtmlEscape(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function searchHighlightSnippet(text, query, maxLen) {
    maxLen = maxLen || 180;
    const q = searchNormalize(query).trim();
    if (!q) return searchHtmlEscape(text.slice(0, maxLen));
    const terms = q.split(/\s+/).filter(Boolean);
    const norm = searchNormalize(text);
    const ranges = [];
    terms.forEach(t => {
      let pos = 0;
      while (pos < norm.length) {
        const idx = norm.indexOf(t, pos);
        if (idx < 0) break;
        ranges.push([idx, idx + t.length]);
        pos = idx + t.length;
      }
    });
    if (ranges.length === 0) return searchHtmlEscape(text.slice(0, maxLen));
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0].slice()];
    for (let i = 1; i < ranges.length; i++) {
      const last = merged[merged.length - 1];
      if (ranges[i][0] <= last[1]) last[1] = Math.max(last[1], ranges[i][1]);
      else merged.push(ranges[i].slice());
    }
    // Fenêtre autour du 1er match
    const first = merged[0];
    const radius = Math.floor(maxLen / 3);
    let start = Math.max(0, first[0] - radius);
    let end = Math.min(text.length, start + maxLen);
    // Recale aux frontières de mot
    if (start > 0) {
      const sp = text.indexOf(' ', start);
      if (sp >= 0 && sp - start < 20) start = sp + 1;
    }
    if (end < text.length) {
      const sp = text.lastIndexOf(' ', end);
      if (sp > first[1]) end = sp;
    }
    let out = '';
    if (start > 0) out += '… ';
    let cursor = start;
    merged.forEach(r => {
      if (r[1] <= cursor || r[0] >= end) return;
      const s = Math.max(cursor, r[0]);
      const e2 = Math.min(end, r[1]);
      out += searchHtmlEscape(text.slice(cursor, s));
      out += '<mark>' + searchHtmlEscape(text.slice(s, e2)) + '</mark>';
      cursor = e2;
    });
    out += searchHtmlEscape(text.slice(cursor, end));
    if (end < text.length) out += ' …';
    return out;
  }

  function openSearchPalette() {
    if (document.querySelector('.search-palette-backdrop')) return;
    const backdrop = el('div', { class: 'search-palette-backdrop' });
    const palette = el('div', { class: 'search-palette' });
    const input = el('input', {
      class: 'search-palette-input',
      type: 'text',
      placeholder: 'Chercher dans le carnet…',
      autocomplete: 'off',
      spellcheck: 'false'
    });
    const results = el('div', { class: 'search-palette-results' });
    const hint = el('div', { class: 'search-palette-hint' }, '↑↓ pour naviguer · Entrée pour ouvrir · Échap pour fermer');
    palette.appendChild(input);
    palette.appendChild(results);
    palette.appendChild(hint);
    backdrop.appendChild(palette);
    document.body.appendChild(backdrop);

    let activeIdx = 0;
    let currentMatches = [];

    function close() {
      document.removeEventListener('keydown', onKey, true);
      backdrop.remove();
    }
    function goto(m) {
      if (!m) return;
      close();
      navigate(searchPathFor(m.entry));
    }
    function renderResults(matches) {
      clear(results);
      currentMatches = matches;
      activeIdx = 0;
      if (matches.length === 0) {
        const msg = input.value.trim()
          ? 'Aucun résultat.'
          : 'Tape pour chercher : titres, points-clés, cours, quiz, cartes, tags.';
        results.appendChild(el('div', { class: 'search-palette-empty' }, msg));
        return;
      }
      matches.forEach((m, i) => {
        const e = m.entry;
        const dot = el('span', {
          class: 'search-palette-dot',
          style: { backgroundColor: domainColor(e.domain) }
        });
        const meta = el('div', { class: 'search-palette-meta' },
          dot,
          el('span', { class: 'search-palette-sujet' }, e.sujetTitle),
          el('span', { class: 'search-palette-kind' }, SEARCH_KIND_LABEL[e.kind] || e.kind)
        );
        const snippet = el('div', {
          class: 'search-palette-snippet',
          html: searchHighlightSnippet(e.text, input.value)
        });
        const item = el('div', {
          class: 'search-palette-item' + (i === 0 ? ' is-active' : ''),
          onclick: () => goto(m),
          onmouseenter: () => setActive(i)
        }, meta, snippet);
        results.appendChild(item);
      });
    }
    function setActive(idx) {
      activeIdx = Math.max(0, Math.min(currentMatches.length - 1, idx));
      const nodes = results.querySelectorAll('.search-palette-item');
      nodes.forEach((n, i) => n.classList.toggle('is-active', i === activeIdx));
      const a = nodes[activeIdx];
      if (a) a.scrollIntoView({ block: 'nearest' });
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIdx + 1); return; }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(activeIdx - 1); return; }
      if (e.key === 'Enter')     { e.preventDefault(); goto(currentMatches[activeIdx]); return; }
    }

    let debounce = null;
    input.addEventListener('input', () => {
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => renderResults(searchEntries(input.value, 30)), 60);
    });
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', onKey, true);
    renderResults([]);
    setTimeout(() => input.focus(), 10);
  }

  // =================================================================
  // PARCOURS THÉMATIQUES — chemins guidés à travers plusieurs sujets
  // =================================================================
  // Un parcours est un fichier `parcours/{slug}.js` qui s'auto-enregistre
  // via window.CarnetDeSavoirs.registerParcours({...}).
  //
  // Schéma :
  //   { meta: { id, titre, domaine?, description, duree_estimee_min? },
  //     etapes: [ { slug, note? }, ... ] }
  //
  // L'utilisateur "active" un parcours en cliquant un bouton "Commencer".
  // L'état { slug, etape } est stocké dans state.user.activeParcours et
  // un bandeau apparaît au-dessus de la fiche sujet correspondante avec
  // navigation suivant/précédent et progression.

  function validateParcours(p) {
    const w = [];
    const m = p && p.meta;
    if (!m || typeof m.id !== 'string' || !m.id) { w.push('meta.id manquant'); return w; }
    if (!/^[a-z0-9-]+$/.test(m.id)) w.push(`meta.id="${m.id}" doit être en kebab-case [a-z0-9-]+`);
    if (typeof m.titre !== 'string' || !m.titre.trim()) w.push('meta.titre vide');
    if (!Array.isArray(p.etapes) || p.etapes.length < 2) w.push('etapes : tableau d\'au moins 2 entrées requis');
    else p.etapes.forEach((e, i) => {
      if (!e || typeof e.slug !== 'string') w.push(`etapes[${i}].slug manquant`);
    });
    return w;
  }

  CDS.registerParcours = function (data) {
    if (!data || !data.meta || !data.meta.id) {
      console.warn('[CarnetDeSavoirs] registerParcours : meta.id manquant', data);
      return;
    }
    const id = data.meta.id;
    if (state.parcours[id]) {
      console.warn(`[CarnetDeSavoirs] Doublon de parcours "${id}" — l'ancien sera écrasé.`);
    }
    const warnings = validateParcours(data);
    if (warnings.length) {
      console.group(`[CarnetDeSavoirs] Parcours "${id}" — ${warnings.length} avertissement(s)`);
      warnings.forEach(w => console.warn(w));
      console.groupEnd();
    }
    state.parcours[id] = data;
    if (!state.parcoursOrder.includes(id)) state.parcoursOrder.push(id);
  };

  function getActiveParcours() {
    const ap = state.user && state.user.activeParcours;
    if (!ap || !ap.slug) return null;
    const p = state.parcours[ap.slug];
    if (!p) return null;
    const etape = Math.max(0, Math.min((p.etapes || []).length - 1, ap.etape || 0));
    return { parcours: p, etape };
  }
  function setActiveParcours(slug, etape) {
    if (!state.user) return;
    if (slug == null) state.user.activeParcours = null;
    else state.user.activeParcours = { slug, etape: etape || 0 };
    saveUserState();
  }

  // ---- Vue liste des parcours ----
  function renderParcoursListe(main) {
    setAccent(null);
    main.appendChild(el('span', { class: 'eyebrow' }, 'Chemins guidés'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Parcours <em>thématiques</em>' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Plutôt qu\'un sujet isolé, suis un fil — une suite ordonnée de fiches qui se répondent. Tu peux activer un parcours et naviguer dedans avec les boutons suivant / précédent, sans perdre ton accès libre au reste du carnet.'));

    if (state.parcoursOrder.length === 0) {
      main.appendChild(el('div', { class: 'empty-state' },
        el('div', { class: 'empty-state-icon' }, '⤳'),
        el('p', null, 'Pas encore de parcours disponibles.')));
      return;
    }
    const active = getActiveParcours();
    const grid = el('div', { class: 'parcours-grid' });
    state.parcoursOrder.forEach(id => {
      const p = state.parcours[id];
      if (!p) return;
      const titreClean = String(p.meta.titre).replace(/<[^>]+>/g, '');
      const dom = p.meta.domaine || 'Atelier';
      const color = domainColor(dom);
      const isActive = active && active.parcours.meta.id === id;
      const card = el('div', {
        class: 'parcours-card' + (isActive ? ' is-active-parcours' : ''),
        style: { '--card-accent': color },
        onclick: () => navigate('/parcours/' + encodeURIComponent(id))
      });
      card.appendChild(el('div', { class: 'parcours-card-eyebrow' }, dom + ' · ' + (p.etapes || []).length + ' étapes'));
      card.appendChild(el('h3', { class: 'parcours-card-title', html: titreClean }));
      if (p.meta.description) {
        card.appendChild(el('p', { class: 'parcours-card-desc', html: md(p.meta.description).replace(/^<p>|<\/p>$/g, '') }));
      }
      if (isActive) {
        card.appendChild(el('div', { class: 'parcours-card-badge' }, 'Parcours en cours · étape ' + (active.etape + 1)));
      }
      grid.appendChild(card);
    });
    main.appendChild(grid);
  }

  // ---- Vue détail d'un parcours ----
  function renderParcoursDetail(main, slug) {
    const p = state.parcours[slug];
    if (!p) {
      main.appendChild(el('p', { class: 'lead' }, 'Parcours introuvable.'));
      return;
    }
    const dom = p.meta.domaine || 'Atelier';
    setAccent(dom);
    main.appendChild(el('button', {
      class: 'back-link',
      onclick: () => navigate('/parcours')
    }, el('span', { class: 'nav-icon', html: ICONS.arrowLeft }), el('span', null, 'Tous les parcours')));
    main.appendChild(el('span', { class: 'eyebrow' }, dom + ' · ' + (p.etapes || []).length + ' étapes'));
    main.appendChild(el('h1', { class: 'page-title', html: htmlEscapeButKeepEm(p.meta.titre) }));
    if (p.meta.description) {
      main.appendChild(el('p', { class: 'page-subtitle', html: md(p.meta.description).replace(/^<p>|<\/p>$/g, '') }));
    }
    const active = getActiveParcours();
    const isThisActive = active && active.parcours.meta.id === slug;
    const ctaRow = el('div', { class: 'parcours-cta-row' });
    if (isThisActive) {
      ctaRow.appendChild(el('button', {
        class: 'btn primary',
        onclick: () => {
          const tgt = p.etapes[active.etape];
          if (tgt && tgt.slug) navigate('/sujet/' + encodeURIComponent(tgt.slug));
        }
      }, 'Reprendre à l\'étape ' + (active.etape + 1)));
      ctaRow.appendChild(el('button', {
        class: 'btn',
        onclick: () => { setActiveParcours(null); navigate('/parcours/' + encodeURIComponent(slug)); }
      }, 'Quitter ce parcours'));
    } else {
      ctaRow.appendChild(el('button', {
        class: 'btn primary',
        onclick: () => {
          setActiveParcours(slug, 0);
          const first = p.etapes[0];
          if (first && first.slug) navigate('/sujet/' + encodeURIComponent(first.slug));
        }
      }, 'Commencer le parcours'));
    }
    // Bouton "Présenter en plein écran" — diaporama des étapes
    ctaRow.appendChild(el('button', {
      class: 'btn',
      title: 'Voir les étapes en plein écran, une par une',
      onclick: () => openParcoursPresentation(p)
    }, 'Présenter →'));
    main.appendChild(ctaRow);

    const list = el('ol', { class: 'parcours-etapes' });
    (p.etapes || []).forEach((etape, i) => {
      const sujet = state.sujets[etape.slug];
      const li = el('li', { class: 'parcours-etape' });
      const num = el('span', { class: 'parcours-etape-num' }, String(i + 1));
      const body = el('div', { class: 'parcours-etape-body' });
      if (sujet) {
        const titreClean = String(sujet.meta.titre).replace(/<[^>]+>/g, '');
        body.appendChild(el('a', {
          class: 'parcours-etape-title',
          href: '#/sujet/' + encodeURIComponent(etape.slug),
          onclick: (e) => {
            e.preventDefault();
            if (isThisActive) setActiveParcours(slug, i);
            else setActiveParcours(slug, i); // active aussi si on entre depuis une étape précise
            navigate('/sujet/' + encodeURIComponent(etape.slug));
          },
          html: htmlEscapeButKeepEm(sujet.meta.titre)
        }));
        if (sujet.resume) {
          body.appendChild(el('p', { class: 'parcours-etape-resume', html: md(sujet.resume).replace(/^<p>|<\/p>$/g, '') }));
        }
      } else {
        body.appendChild(el('span', { class: 'parcours-etape-title parcours-etape-missing' },
          'Sujet « ' + etape.slug + ' » manquant'));
      }
      if (etape.note) {
        body.appendChild(el('div', { class: 'parcours-etape-note', html: md(etape.note).replace(/^<p>|<\/p>$/g, '') }));
      }
      li.appendChild(num);
      li.appendChild(body);
      list.appendChild(li);
    });
    main.appendChild(list);
  }

  // ---- Mode diaporama d'un parcours ----
  // Overlay plein écran qui présente une étape par slide : titre + résumé
  // + points-clés du sujet de l'étape, plus la note du parcours. Navigation
  // clavier ← / → / Esc.
  function openParcoursPresentation(parcours) {
    if (!parcours || !Array.isArray(parcours.etapes) || parcours.etapes.length === 0) return;
    const etapes = parcours.etapes;
    // Démarre à l'étape courante si l'utilisateur a un parcours actif
    // correspondant — autrement repart de 0.
    let idx = 0;
    const active = getActiveParcours();
    if (active && active.parcours && active.parcours.meta.id === parcours.meta.id &&
        typeof active.etape === 'number' && active.etape >= 0 && active.etape < etapes.length) {
      idx = active.etape;
    }
    const accent = domainColor(parcours.meta.domaine || 'Atelier');

    const overlay = el('div', { class: 'parcours-pres-overlay' });
    overlay.style.setProperty('--pres-accent', accent);
    const closeBtn = el('button', { class: 'presentation-close', title: 'Quitter (Esc)' }, '✕');
    const counter = el('div', { class: 'presentation-counter' });
    // Barre de progression en haut — indique visuellement où on en est
    // dans le parcours, mise à jour à chaque slide.
    const progressBar = el('div', { class: 'presentation-progress' });
    const progressFill = el('div', { class: 'presentation-progress-fill' });
    progressBar.appendChild(progressFill);
    const slide = el('div', { class: 'parcours-pres-slide' });
    const prevBtn = el('button', { class: 'presentation-nav presentation-prev', title: 'Précédent (←)' }, '‹');
    const nextBtn = el('button', { class: 'presentation-nav presentation-next', title: 'Suivant (→)' }, '›');
    overlay.appendChild(progressBar);
    overlay.appendChild(closeBtn);
    overlay.appendChild(counter);
    overlay.appendChild(prevBtn);
    overlay.appendChild(slide);
    overlay.appendChild(nextBtn);

    function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    function render() {
      const e = etapes[idx];
      const sujet = state.sujets[e.slug];
      const parTitre = String(parcours.meta.titre).replace(/<[^>]+>/g, '');
      counter.textContent = parTitre + ' — Étape ' + (idx + 1) + ' / ' + etapes.length;
      let html = '';
      html += '<div class="parcours-pres-eyebrow">' + escHtml(parTitre) + ' · Étape ' + (idx + 1) + '</div>';
      if (sujet) {
        html += '<h1 class="parcours-pres-title">' + htmlEscapeButKeepEm(sujet.meta.titre) + '</h1>';
        if (sujet.resume) {
          html += '<p class="parcours-pres-resume">' + md(sujet.resume).replace(/^<p>|<\/p>$/g, '') + '</p>';
        }
        if (Array.isArray(sujet.points_cles) && sujet.points_cles.length > 0) {
          html += '<ul class="parcours-pres-points">';
          sujet.points_cles.forEach(p => {
            html += '<li>' + md(p).replace(/^<p>|<\/p>$/g, '') + '</li>';
          });
          html += '</ul>';
        }
      } else {
        html += '<h1 class="parcours-pres-title">' + escHtml(e.slug) + '</h1>';
        html += '<p class="parcours-pres-resume parcours-pres-missing">Sujet manquant dans le carnet.</p>';
      }
      if (e.note) {
        html += '<aside class="parcours-pres-note">' + md(e.note).replace(/^<p>|<\/p>$/g, '') + '</aside>';
      }
      // Lien pour ouvrir la fiche complète
      if (sujet) {
        html += '<div class="parcours-pres-cta"><a class="btn primary" href="#/sujet/' + encodeURIComponent(e.slug) + '">Ouvrir la fiche complète →</a></div>';
      }
      slide.innerHTML = html;
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === etapes.length - 1;
      // Met à jour la barre de progression : largeur proportionnelle à
      // l'avancement dans le parcours. Inclut l'étape courante (idx+1 sur N).
      const pct = ((idx + 1) / etapes.length) * 100;
      progressFill.style.width = pct.toFixed(1) + '%';
    }
    function next() { if (idx < etapes.length - 1) { idx++; render(); } }
    function prev() { if (idx > 0) { idx--; render(); } }
    function first() { if (idx !== 0) { idx = 0; render(); } }
    function last() { if (idx !== etapes.length - 1) { idx = etapes.length - 1; render(); } }
    function close() { unmountOverlay(overlay); }
    function onKey(e) {
      if (e.key === 'Escape')          { close(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp')   { prev();  e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === 'PageDown' ||
               e.key === ' ' || e.key === 'Enter')            { next();  e.preventDefault(); }
      else if (e.key === 'Home')                              { first(); e.preventDefault(); }
      else if (e.key === 'End')                               { last();  e.preventDefault(); }
    }
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    // Clic sur le lien "Ouvrir la fiche" → close avant navigation
    slide.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) close();
    });
    if (!mountOverlay(overlay, close, onKey)) return;
    render();
  }

  // ---- Bandeau de parcours actif (au-dessus de la fiche sujet) ----
  function renderParcoursBanner(container, sujetId) {
    const active = getActiveParcours();
    if (!active) return;
    // Le sujet courant correspond-il à une étape ?
    const etapes = active.parcours.etapes || [];
    const idx = etapes.findIndex(e => e && e.slug === sujetId);
    if (idx < 0) return; // sujet hors parcours : on n'affiche rien (on garde l'état actif intact)

    // Met à jour l'étape courante pour persistance
    if (idx !== active.etape) setActiveParcours(active.parcours.meta.id, idx);

    const titreClean = String(active.parcours.meta.titre).replace(/<[^>]+>/g, '');
    const banner = el('div', { class: 'parcours-banner' });
    const info = el('div', { class: 'parcours-banner-info' },
      el('span', { class: 'parcours-banner-eyebrow' }, 'Parcours en cours'),
      el('a', {
        class: 'parcours-banner-title',
        href: '#/parcours/' + encodeURIComponent(active.parcours.meta.id),
        onclick: (e) => { e.preventDefault(); navigate('/parcours/' + encodeURIComponent(active.parcours.meta.id)); }
      }, titreClean),
      el('span', { class: 'parcours-banner-progress' }, 'Étape ' + (idx + 1) + ' sur ' + etapes.length)
    );
    const nav = el('div', { class: 'parcours-banner-nav' });
    if (idx > 0) {
      nav.appendChild(el('button', {
        class: 'btn',
        title: 'Étape précédente',
        onclick: () => navigate('/sujet/' + encodeURIComponent(etapes[idx - 1].slug))
      }, '← Précédent'));
    }
    if (idx < etapes.length - 1) {
      nav.appendChild(el('button', {
        class: 'btn primary',
        title: 'Étape suivante',
        onclick: () => navigate('/sujet/' + encodeURIComponent(etapes[idx + 1].slug))
      }, 'Suivant →'));
    } else {
      nav.appendChild(el('span', { class: 'parcours-banner-end' }, 'Dernière étape'));
    }
    nav.appendChild(el('button', {
      class: 'btn-ghost',
      title: 'Quitter ce parcours (garde la fiche ouverte)',
      onclick: () => { setActiveParcours(null); rerender(); }
    }, 'Quitter'));
    banner.appendChild(info);
    banner.appendChild(nav);
    // Barre de progression visuelle
    const bar = el('div', { class: 'parcours-banner-bar' },
      el('div', { class: 'parcours-banner-bar-fill', style: { width: ((idx + 1) / etapes.length * 100) + '%' } })
    );
    banner.appendChild(bar);
    // Insère en tête du conteneur
    container.insertBefore(banner, container.firstChild);
  }

  // =================================================================
  // TIMELINE GLOBALE — agrégat des Frises de tous les sujets
  // =================================================================
  // On parcourt tous les blocs `cours[].composant === 'Frise'` et on
  // récolte chaque événement avec sa date textuelle. Une heuristique
  // parseHistoricalDate() convertit ces dates très variées ("1789",
  // "-301", "Vers -2500", "13,8 Ga", "Janv. 2009", "1900-1917") en une
  // année numérique. On affiche le tout sur une **échelle logarithmique
  // de temps écoulé** depuis aujourd'hui, ce qui donne sa place à la
  // préhistoire cosmique sans écraser l'histoire récente.

  // Convertit une date « libre » de Frise en année numérique (négatif = av.
  // J.-C. ; les échelles géologiques Ga/Ma/ka sont comptées en années avant
  // aujourd'hui). Retourne null si rien d'exploitable — l'appelant compte
  // ces cas et les signale.
  //
  // Étapes : normalisation (espaces fines, exposants ᵉ, « 10 000 » → 10000,
  // « 1990s » → 1990), unités géologiques, marqueurs av./ap. J.-C. stricts
  // (« av » seul ne suffit pas : « avril »), millénaires et siècles (romains
  // ou chiffres, avec plages), mois + année, plages numériques (« 1954-55 »,
  // « -400 à 400 », « Années 1990-2000 »), nombre négatif explicite, année
  // simple, « il y a N ans ». Testée sur les 450 dates réelles du carnet
  // (voir /tests ou le script d'audit).
  function parseHistoricalDate(s) {
    if (s == null) return null;
    let str = String(s).trim();
    if (!str) return null;
    // --- Normalisation ---
    str = str
      .replace(/[   ]/g, ' ')            // espaces insécables / fines
      .replace(/ᵉʳ|ᵉ|ᵈ|ʳᵉ/g, 'e')                        // exposants « XVᵉ » → « XVe »
      .replace(/(\d)\s(?=\d{3}\b)/g, '$1')               // « 10 000 » → « 10000 »
      .replace(/(\d{4})s\b/g, '$1')                      // « 1990s » → « 1990 »
      .replace(/\s+/g, ' ');
    const low = str.toLowerCase();
    const num = (t) => parseFloat(String(t).replace(',', '.'));
    let m;
    const romanVal = (r) => {
      const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
      let val = 0, prev = 0;
      const R = r.toUpperCase();
      for (let i = R.length - 1; i >= 0; i--) {
        const v = map[R[i]] || 0;
        if (v < prev) val -= v; else { val += v; prev = v; }
      }
      return val;
    };
    // Notations scientifiques (« 10⁻³⁶ s ») : pas une date calendaire
    if (/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/.test(str)) return null;
    // Calendrier républicain : « 9 thermidor an II » → 1793,5 ; « an VIII » → 1799,5
    m = str.match(/\ban\s+([IVX]+)\b/);
    if (m) return 1792 + romanVal(m[1]) - 0.5;
    if (/aujourd/i.test(str) && !/\b\d{4}\b/.test(str)) return new Date().getFullYear();

    // --- Échelles géologiques (frontières de mot strictes : « Ma » ≠ « mars ») ---
    m = str.match(/(\d+[,.]?\d*)\s*(?:Ga\b|Gyr\b|Gda\b|G\.\s*a\.|milliards?\s+d['’]ann[ée]es?)/);
    if (m) return -num(m[1]) * 1e9;
    m = str.match(/(\d+[,.]?\d*)\s*Ma\b/);
    if (m) return -num(m[1]) * 1e6;
    m = str.match(/(\d+[,.]?\d*)\s*millions?\s+d['’]ann[ée]es?/i);
    if (m) return -num(m[1]) * 1e6;
    m = str.match(/(\d+[,.]?\d*)\s*(?:ka\b|milliers?\s+d['’]ann[ée]es?)/i);
    if (m) return -num(m[1]) * 1e3;

    // --- Marqueurs d'ère ---
    // av. J.-C. / avant J.-C. / av. JC / avant notre ère — « avril » ne matche pas.
    const isBC = /\bav(?:\.|ant)?\s*(?:j\.?\s*-?\s*c\.?|jc\b|notre[\s-]+ère|n\.\s*è\.)/i.test(str) || /\bavant notre ère\b/i.test(low);
    const isAD = /\bap(?:\.|rès)?\s*(?:j\.?\s*-?\s*c\.?|jc\b|notre[\s-]+ère)/i.test(str) || /\bde notre ère\b/i.test(low);
    const era = (y) => (isBC ? -Math.abs(y) : y);
    const ORD = '(?:er|ère|re|ème|e)?';

    // --- Millénaire : « IVe millénaire av. J.-C. », « 3e millénaire » ---
    m = str.match(new RegExp('\\b([IVXLCM]+|\\d{1,2})\\s*' + ORD + '\\s*mill[ée]naire', 'i'));
    if (m) {
      const n = /^\d+$/.test(m[1]) ? parseInt(m[1], 10) : romanVal(m[1]);
      if (n > 0) return era((n - 1) * 1000 + 500);
    }
    // --- Siècles : « XVe siècle », « XIIe-XIIIe s. », « Ier s. ap. J.-C. », « 1er siècle » ---
    const SIECLE = '(?:s\\.|si[èe]cles?)';
    m = str.match(new RegExp('\\b([IVXLCM]+|\\d{1,2})\\s*' + ORD + '\\s*[–\\-—]\\s*([IVXLCM]+|\\d{1,2})\\s*' + ORD + '\\s*' + SIECLE, 'i'));
    if (m) {
      const a = /^\d+$/.test(m[1]) ? parseInt(m[1], 10) : romanVal(m[1]);
      const b = /^\d+$/.test(m[2]) ? parseInt(m[2], 10) : romanVal(m[2]);
      if (a > 0 && b > 0) return era(((a - 1) * 100 + 50 + (b - 1) * 100 + 50) / 2);
    }
    m = str.match(new RegExp('\\b([IVXLCM]+|\\d{1,2})\\s*' + ORD + '\\s*' + SIECLE, 'i'));
    if (m) {
      const n = /^\d+$/.test(m[1]) ? parseInt(m[1], 10) : romanVal(m[1]);
      if (n > 0) return era((n - 1) * 100 + 50);
    }

    // --- Mois + année : « 15 avril 2019 », « 21-23 janv. 2008 », « Fév. 2007 » ---
    const MONTHS = /\b(janv|f[ée]v|mars|avr|mai|juin|juil|ao[uû]t|sept|oct|nov|d[ée]c|janvier|f[ée]vrier|avril|juillet|septembre|octobre|novembre|d[ée]cembre|été|printemps|automne|hiver|fin|début|mi)\b/i;
    if (MONTHS.test(str)) {
      m = str.match(/\b(\d{3,4})\b/);
      if (m) return era(parseInt(m[1], 10));
    }

    // --- Plages numériques : « 1954-55 », « 300-200 av. J.-C. », « -400 à 400 », « ~1900-1917 » ---
    m = str.match(/(-?\d{1,7})\s*(?:[–\-—\/]|à|→)\s*(-?\d{1,7})/);
    if (m) {
      let a = parseInt(m[1], 10), b = parseInt(m[2], 10);
      // Second terme abrégé : « 1954-55 » → 1955, « 1940-50 » → 1950
      if (b >= 0 && b < 100 && Math.abs(a) >= 1000 && m[2].length <= 2 && !isBC) b = a - (a % 100) + b;
      if (isBC) { a = -Math.abs(a); b = -Math.abs(b); }
      return (a + b) / 2;
    }
    // « 2016 → aujourd'hui », « 1274 et 1281 »
    m = str.match(/\b(\d{3,4})\b\s*(?:et|→|puis)\s*\b(\d{3,4})\b/);
    if (m) return era((parseInt(m[1], 10) + parseInt(m[2], 10)) / 2);
    if (/aujourd/i.test(str)) {
      m = str.match(/\b(\d{4})\b/);
      const now = new Date().getFullYear();
      return m ? (parseInt(m[1], 10) + now) / 2 : now;
    }

    // --- Nombre négatif explicite : « -301 », « ~-2500 », « Vers -10000 » ---
    m = str.match(/(?:^|[^\d\w])-\s*(\d{1,12})\b/);
    if (m && !isAD) return -parseInt(m[1], 10);

    // --- « il y a N ans » / « N ans » (préhistoire) ---
    m = str.match(/il y a\s*(?:~|environ|env\.)?\s*(\d{1,9})\s*ans/i);
    if (m) return -parseInt(m[1], 10);
    m = str.match(/\b(\d{4,9})\s*ans\b/i);
    if (m && !/\b(?:après|apr\.|ap\.)\b/i.test(str)) return -parseInt(m[1], 10);
    // durées courtes (« ~ 5 ans », « Jour 1 », « ~3 minutes ») : pas une date
    if (/\b\d{1,3}\+?\s*(?:ans?|mois|jours?|minutes?|secondes?|s)\b/i.test(str) && !/\b\d{4}\b/.test(str)) return null;

    // --- Année simple : 4 chiffres en priorité, sinon 1 à 3 chiffres ---
    m = str.match(/\b(\d{4})\b/);
    if (m) return era(parseInt(m[1], 10));
    // 5 chiffres et plus (« 10000 av. J.-C. », « -13800000000 » déjà traité) : lu tel quel
    m = str.match(/\b(\d{5,12})\b/);
    if (m) return era(parseInt(m[1], 10));
    m = str.match(/\b(\d{1,3})\b/);
    if (m && (isBC || isAD || /^[~≈v.ers ]*\d{1,3}$/i.test(str) || /^\d{1,3}\b/.test(str))) return era(parseInt(m[1], 10));
    return null;
  }

  function collectTimelineEvents() {
    const events = [];
    collectTimelineEvents.unparsed = [];   // dates non reconnues (affichées sous la timeline)
    state.sujetsOrder.forEach(id => {
      const s = state.sujets[id];
      if (!s || !Array.isArray(s.cours)) return;
      const sujetTitle = String(s.meta.titre || id).replace(/<[^>]+>/g, '');
      const dom = (s.meta.domaines || ['Autre'])[0];
      s.cours.forEach((b, bi) => {
        if (!b || b.type !== 'widget' || b.composant !== 'Frise') return;
        const evs = (b.params && b.params.evenements) || [];
        evs.forEach(ev => {
          if (!ev || !ev.titre) return;
          const yr = parseHistoricalDate(ev.date);
          if (yr == null) { collectTimelineEvents.unparsed.push({ date: ev.date, sujetId: id, titre: ev.titre }); return; }
          events.push({
            year: yr,
            dateLabel: String(ev.date || '').trim(),
            title: searchStripMarkdown(ev.titre),
            desc: ev.description ? searchStripMarkdown(ev.description) : '',
            sujetId: id,
            sujetTitle,
            domain: dom,
            blockIdx: bi
          });
        });
      });
    });
    return events;
  }

  // Conversion année → position sur l'axe log [0..1]. On utilise log(1 + |years_ago|)
  // pour aplatir uniformément depuis aujourd'hui jusqu'à -13.8 Ga.
  function timelineLogPos(year, refYear, maxLog) {
    const yearsAgo = refYear - year;
    if (yearsAgo <= 0) return 1;
    return 1 - Math.log10(1 + yearsAgo) / maxLog;
  }

  function renderTimelineGlobale(main) {
    setAccent(null);
    main.appendChild(el('span', { class: 'eyebrow' }, 'Tout le savoir, à l\'échelle du temps'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Timeline <em>globale</em>' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Tous les événements datés extraits des frises de tous les sujets, projetés sur une échelle logarithmique du temps écoulé. Du Big Bang à aujourd\'hui, chaque point est cliquable et te ramène à sa fiche d\'origine.'));

    const events = collectTimelineEvents();
    if (events.length === 0) {
      main.appendChild(el('div', { class: 'empty-state' },
        el('div', { class: 'empty-state-icon' }, '⌛'),
        el('p', null, 'Aucun événement daté pour le moment (les frises des sujets sont vides ou non datées).')));
      return;
    }

    // Transparence : combien d'événements n'ont pas pu être datés (dates
    // libres du type « Renaissance », « Jour 1 », « ~ 5 ans »). Avant, ils
    // disparaissaient silencieusement.
    const unparsed = collectTimelineEvents.unparsed || [];
    if (unparsed.length) {
      const det = el('details', { class: 'timeline-unparsed' },
        el('summary', null, unparsed.length + ' événement' + (unparsed.length > 1 ? 's' : '') + ' de frise sans date exploitable (non affiché' + (unparsed.length > 1 ? 's' : '') + ')'),
        el('ul', null, ...unparsed.slice(0, 60).map(u => {
          const sj = state.sujets[u.sujetId];
          const t = sj ? String(sj.meta.titre || u.sujetId).replace(/<[^>]+>/g, '') : u.sujetId;
          return el('li', null, el('em', null, '« ' + String(u.date || '—') + ' »'), ' — ' + String(u.titre || '').replace(/[*`]/g, '') + ' (', el('a', { href: '#/sujet/' + encodeURIComponent(u.sujetId) + '/cours' }, t), ')');
        }))
      );
      main.appendChild(det);
    }

    // ---- Toolbar : toggle Long/Court + filtre par domaine ----
    const domains = Array.from(new Set(events.map(e => e.domain))).sort();
    const toolbar = el('div', { class: 'timeline-toolbar' });

    // Deux modes seulement : Long (log cosmos→aujourd'hui) et Court
    // (linéaire -10 000 → aujourd'hui). Tout zoom intermédiaire est géré
    // par le pan/zoom, plus par un sélecteur. Auto-bascule de Long vers
    // Court quand on zoome assez pour ne plus voir avant -10 000.
    const NOW = new Date().getFullYear();
    const MODES = {
      long:  { key: 'long',  label: 'Long',  short: 'Cosmos → aujourd\'hui',  scale: 'log',    minY: null,    maxY: NOW },
      court: { key: 'court', label: 'Court', short: '-10 000 → aujourd\'hui', scale: 'linear', minY: -10000,  maxY: NOW }
    };
    let currentMode = 'long';

    const modeToggle = el('div', { class: 'timeline-mode-toggle' });
    const btnLong  = el('button', { type: 'button', class: 'timeline-mode-btn is-active', 'data-mode': 'long'  },
      el('span', { class: 'timeline-mode-btn-main' }, MODES.long.label),
      el('span', { class: 'timeline-mode-btn-sub' }, MODES.long.short));
    const btnCourt = el('button', { type: 'button', class: 'timeline-mode-btn', 'data-mode': 'court' },
      el('span', { class: 'timeline-mode-btn-main' }, MODES.court.label),
      el('span', { class: 'timeline-mode-btn-sub' }, MODES.court.short));
    modeToggle.appendChild(btnLong);
    modeToggle.appendChild(btnCourt);
    toolbar.appendChild(modeToggle);

    const domSel = el('select', { class: 'timeline-domain-select' });
    domSel.appendChild(el('option', { value: '' }, 'Tous les domaines (' + events.length + ')'));
    domains.forEach(d => {
      const count = events.filter(e => e.domain === d).length;
      domSel.appendChild(el('option', { value: d }, d + ' (' + count + ')'));
    });
    toolbar.appendChild(domSel);

    // Hint discret sur l'interaction
    toolbar.appendChild(el('span', { class: 'timeline-hint' },
      'Molette pour zoomer · glisser pour panner · clic sur un cluster pour lister'));
    main.appendChild(toolbar);

    // ---- Construction SVG + tooltip persistant ----
    const wrap = el('div', { class: 'timeline-wrap' });
    main.appendChild(wrap);
    const tooltip = el('div', { class: 'timeline-tooltip' });
    wrap.appendChild(tooltip);

    // État pan/zoom (panX en unités viewBox, scale 1..N)
    let panX = 0, scale = 1, pinnedKey = null;
    let isDragging = false, dragStartScreenX = 0, dragViewBoxScale = 1, dragLiveDx = 0;

    // Constantes layout (utilisées aussi par les handlers de pan/zoom)
    const W = 1900, H = 620, padX = 70, padY = 30;
    const axisY = H - 50;

    function render(mode, filterDomain) {
      const P = MODES[mode] || MODES.long;
      // Filtre événements selon mode et domaine
      let filtered = events;
      if (P.minY != null) filtered = filtered.filter(e => e.year >= P.minY);
      if (P.maxY != null) filtered = filtered.filter(e => e.year <= P.maxY);
      if (filterDomain) filtered = filtered.filter(e => e.domain === filterDomain);

      // Bornes effectives pour le calcul d'axe (cosmique = bornes data)
      const effMin = P.minY != null ? P.minY : (filtered.length ? Math.min(...filtered.map(e => e.year)) : NOW - 1);
      const effMax = P.maxY != null ? P.maxY : NOW;
      const maxLog = Math.log10(1 + Math.max(1, (effMax - effMin)));

      // xLogical : position dans le repère NON zoomé [padX, W-padX]
      function xLogical(year) {
        if (P.scale === 'log') {
          const yearsAgo = effMax - year;
          if (yearsAgo <= 0) return W - padX;
          const t = Math.log10(1 + yearsAgo) / maxLog;
          return padX + (1 - t) * (W - 2 * padX);
        } else {
          const t = (year - effMin) / Math.max(1, (effMax - effMin));
          return padX + t * (W - 2 * padX);
        }
      }
      // xFor : position après application du pan/zoom — calculée EN AMONT
      // au rendu, pas via une transform SVG (sinon les glyphes et dots
      // deviennent ovales et illisibles aux forts zooms).
      function xFor(year) {
        return padX + (xLogical(year) - padX) * scale + panX;
      }

      // ---- Bornes visibles à l'écran (en années) ----
      // Permet de générer des graduations adaptatives au zoom courant.
      function yearAtXDisplay(xd) {
        const xLog = (xd - panX - padX) / scale + padX;
        if (P.scale === 'log') {
          const tNorm = (xLog - padX) / (W - 2 * padX);
          const yearsAgo = Math.pow(10, maxLog * (1 - tNorm)) - 1;
          return effMax - yearsAgo;
        } else {
          const t = (xLog - padX) / (W - 2 * padX);
          return effMin + t * (effMax - effMin);
        }
      }
      const visMinYear = Math.max(effMin, yearAtXDisplay(padX));
      const visMaxYear = Math.min(effMax, yearAtXDisplay(W - padX));

      // ---- Graduations adaptatives au zoom ----
      let ticks = [];
      if (P.scale === 'log') {
        // Génère des ticks à des "puissances de 1, 2, 5" pour l'écart en
        // années depuis aujourd'hui. Ne garde que ceux dans le range visible.
        const candidates = [
          [0, 'Aujourd\'hui'],
          [1, 'Il y a 1 an'], [2, '2 ans'], [5, '5 ans'],
          [10, '10 ans'], [20, '20 ans'], [50, '50 ans'],
          [100, 'Il y a un siècle'], [200, '200 ans'], [500, '500 ans'],
          [1000, '1000 ans'], [2000, '2000 ans'], [5000, '5000 ans'],
          [10000, '10 000 ans'], [20000, '20 ka'], [50000, '50 ka'],
          [100000, '100 ka'], [200000, '200 ka'], [500000, '500 ka'],
          [1e6, '1 Ma'], [2e6, '2 Ma'], [5e6, '5 Ma'],
          [1e7, '10 Ma'], [2e7, '20 Ma'], [5e7, '50 Ma'],
          [1e8, '100 Ma'], [2e8, '200 Ma'], [5e8, '500 Ma'],
          [1e9, '1 Ga'], [2e9, '2 Ga'], [5e9, '5 Ga'], [1e10, '10 Ga']
        ];
        candidates.forEach(([yearsAgo, label]) => {
          const y = NOW - yearsAgo;
          if (y >= visMinYear && y <= visMaxYear) ticks.push({ year: y, label });
        });
        // Si on a vraiment trop de ticks à fort zoom (range étroit log), on filtre
        if (ticks.length > 14) ticks = ticks.filter((_, i) => i % 2 === 0);
      } else {
        // Linéaire : pas adaptatif sur le SPAN VISIBLE (pas le span total)
        const visibleSpan = Math.max(1, visMaxYear - visMinYear);
        let step;
        if (visibleSpan <= 4)      step = 1;
        else if (visibleSpan <= 12)   step = 2;
        else if (visibleSpan <= 30)   step = 5;
        else if (visibleSpan <= 80)   step = 10;
        else if (visibleSpan <= 200)  step = 25;
        else if (visibleSpan <= 600)  step = 100;
        else if (visibleSpan <= 2000) step = 250;
        else if (visibleSpan <= 6000) step = 1000;
        else step = 2500;
        const start = Math.ceil(visMinYear / step) * step;
        for (let y = start; y <= visMaxYear; y += step) {
          const label = y < 0 ? Math.abs(y) + ' av. J.-C.' : (y === NOW ? 'Aujourd\'hui' : String(y));
          ticks.push({ year: y, label });
        }
      }

      // ---- Filtre "visible à l'écran" — gain de perf MASSIF au zoom ----
      // Au scale=20 on ne dessine que ~5% des événements ; on évite
      // d'écrire ~10 000 lignes de SVG inutiles.
      const visMargin = 40;
      const visFiltered = filtered.filter(e => {
        const xd = xFor(e.year);
        return xd >= padX - visMargin && xd <= W - padX + visMargin;
      });

      // ---- Clustering en COORDONNÉES DISPLAY (pas logiques) ----
      // Comme ça, plus on zoome, plus les clusters se séparent naturellement.
      // QUANTUM constant en pixels (display) = 6.
      const sortedByX = visFiltered.map(e => ({ ev: e, x: xFor(e.year) }))
        .sort((a, b) => a.x - b.x);
      const QUANTUM = 6;
      const clusters = [];
      let cur = null;
      sortedByX.forEach(item => {
        if (cur && (item.x - cur.lastX) < QUANTUM) {
          cur.events.push(item.ev);
          cur.sumX += item.x;
          cur.lastX = item.x;
        } else {
          cur = { events: [item.ev], sumX: item.x, lastX: item.x };
          clusters.push(cur);
        }
      });
      clusters.forEach(c => { c.x = c.sumX / c.events.length; });

      // Couleur du cluster : majoritaire dans le cluster (sinon accent)
      function clusterColor(c) {
        const counts = {};
        c.events.forEach(e => { counts[e.domain] = (counts[e.domain] || 0) + 1; });
        let best = null, bestN = 0;
        Object.keys(counts).forEach(d => { if (counts[d] > bestN) { bestN = counts[d]; best = d; } });
        return domainColor(best || 'Autre');
      }

      // ---- Facteur d'agrandissement visuel selon le zoom ----
      // Plus on zoome, plus on a la place d'agrandir dots, labels et écart
      // vertical pour mieux lire. Log-scaling, capé à 3× la base.
      const visualScale = Math.min(3, 1 + Math.log10(Math.max(1, scale)) * 0.55);
      const labelFontPx = Math.min(24, Math.round(10 * visualScale));
      const countFontPx = Math.min(20, Math.round(9 * visualScale));
      const labelMaxChars = Math.round(Math.min(60, 26 * Math.min(2.5, visualScale * 1.1)));

      // ---- Placement vertical des clusters ----
      const placed = [];
      const minDX = Math.round(22 * Math.min(2, visualScale));     // distance horizontale aussi un peu plus large au zoom
      const rowH = Math.round(24 * visualScale);
      const maxRows = Math.max(3, Math.floor((axisY - padY) / rowH));
      clusters.forEach(c => {
        let row = 0;
        while (row < maxRows) {
          const conflict = placed.some(p => p.row === row && Math.abs(p.x - c.x) < minDX);
          if (!conflict) break;
          row++;
        }
        if (row >= maxRows) row = placed.length % maxRows;
        placed.push({ c, x: c.x, row });
      });

      // Labels : seulement si l'événement a assez de libre sur le rang
      const LABEL_CLEAR_DX = Math.round(100 * Math.min(2, visualScale));
      placed.forEach(p => {
        let clearLeft = true, clearRight = true;
        for (const o of placed) {
          if (o === p || o.row !== p.row) continue;
          if (o.x < p.x && (p.x - o.x) < LABEL_CLEAR_DX) clearLeft = false;
          if (o.x > p.x && (o.x - p.x) < LABEL_CLEAR_DX) clearRight = false;
          if (!clearLeft && !clearRight) break;
        }
        p.showLabel = clearLeft && clearRight;
      });

      // ---- Émet le SVG ----
      function attrEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
      let svgInner = '';
      // Axe + ticks
      svgInner += `<line class="timeline-axis" x1="${padX}" y1="${axisY}" x2="${W - padX}" y2="${axisY}"/>`;
      ticks.forEach(t => {
        const x = xFor(t.year);
        if (x < padX - 1 || x > W - padX + 1) return;
        svgInner += `<line class="timeline-tick" x1="${x.toFixed(1)}" y1="${axisY - 6}" x2="${x.toFixed(1)}" y2="${axisY + 6}"/>`;
        svgInner += `<text class="timeline-tick-label" x="${x.toFixed(1)}" y="${axisY + 24}" text-anchor="middle">${attrEsc(t.label)}</text>`;
      });

      // Clusters
      placed.forEach((p, i) => {
        const c = p.c;
        const col = clusterColor(c);
        const y = axisY - 10 - p.row * rowH;
        const n = c.events.length;
        // Dot radius : base 3.5 × visualScale, augmenté par count
        const r = Math.min(18, 3.5 * visualScale + Math.log2(1 + n) * 1.8);
        svgInner += `<line class="timeline-stem" x1="${p.x.toFixed(1)}" y1="${axisY}" x2="${p.x.toFixed(1)}" y2="${(y + r).toFixed(1)}" style="stroke:${col}"/>`;
        svgInner += `<g class="timeline-evt" data-idx="${i}" style="--evt-color:${col}">`;
        svgInner += `<circle class="timeline-hit" cx="${p.x.toFixed(1)}" cy="${(y + r).toFixed(1)}" r="${(r + 6).toFixed(1)}"/>`;
        svgInner += `<circle class="timeline-dot" cx="${p.x.toFixed(1)}" cy="${(y + r).toFixed(1)}" r="${r.toFixed(1)}"/>`;
        if (n > 1) {
          svgInner += `<text class="timeline-evt-count" x="${p.x.toFixed(1)}" y="${(y + r + 1).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" style="font-size:${countFontPx}px">${n}</text>`;
        }
        if (p.showLabel) {
          const headline = n === 1 ? c.events[0].title : (n + ' événements');
          let labelTxt = headline.length > labelMaxChars ? headline.slice(0, labelMaxChars - 1) + '…' : headline;
          const anchor = p.x < padX + 60 ? 'start' : (p.x > W - padX - 60 ? 'end' : 'middle');
          // Le label monte un peu plus haut quand il est gros pour ne pas
          // se coller au dot agrandi.
          const labelY = y - 4 - Math.max(0, (visualScale - 1) * 4);
          svgInner += `<text class="timeline-evt-label" x="${p.x.toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="${anchor}" style="font-size:${labelFontPx}px">${attrEsc(labelTxt)}</text>`;
        }
        svgInner += `</g>`;
      });

      // Le <g class="timeline-viewport"> est conservé pour le pan en vol :
      // pendant un drag on lui applique translate(dx,0) en pixels display
      // (pas de scale, donc pas d'étirement de glyphes).
      let svg = `<svg class="timeline-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">`;
      svg += `<g class="timeline-viewport" transform="translate(0,0)">${svgInner}</g>`;
      svg += `</svg>`;

      wrap.innerHTML = '';
      wrap.appendChild(tooltip);
      const svgWrap = document.createElement('div');
      svgWrap.className = 'timeline-svg-wrap';
      svgWrap.innerHTML = svg;
      wrap.appendChild(svgWrap);

      // ---- Interactivité clusters ----
      function renderTooltipFor(cluster, pos, pin) {
        const evs = cluster.events;
        const col = clusterColor(cluster);
        let html = '';
        if (evs.length === 1) {
          const e = evs[0];
          html =
            `<div class="timeline-tt-date">${searchHtmlEscape(e.dateLabel)}</div>` +
            `<div class="timeline-tt-title">${searchHtmlEscape(e.title)}</div>` +
            (e.desc ? `<div class="timeline-tt-desc">${searchHtmlEscape(e.desc)}</div>` : '') +
            `<div class="timeline-tt-source">${searchHtmlEscape(e.sujetTitle)} · ${searchHtmlEscape(e.domain)}</div>` +
            `<div class="timeline-tt-cta">Cliquer pour ouvrir la fiche →</div>`;
        } else {
          // Plusieurs événements : liste cliquable
          const dates = Array.from(new Set(evs.map(e => e.dateLabel))).join(' · ');
          html =
            `<div class="timeline-tt-date">${searchHtmlEscape(dates)} · ${evs.length} événements</div>` +
            `<div class="timeline-tt-list">` +
            evs.slice(0, 12).map((e, k) =>
              `<a class="timeline-tt-item" data-evt-idx="${k}" style="--evt-color:${domainColor(e.domain)}">` +
                `<span class="timeline-tt-item-dot"></span>` +
                `<span class="timeline-tt-item-text"><strong>${searchHtmlEscape(e.title)}</strong>` +
                `<span class="timeline-tt-item-sub">${searchHtmlEscape(e.sujetTitle)} · ${searchHtmlEscape(e.domain)}</span></span>` +
              `</a>`
            ).join('') +
            (evs.length > 12 ? `<div class="timeline-tt-more">+ ${evs.length - 12} autres</div>` : '') +
            `</div>` +
            `<div class="timeline-tt-cta">Cliquer un événement pour ouvrir sa fiche</div>`;
        }
        tooltip.innerHTML = html;
        tooltip.style.setProperty('--tt-color', col);
        tooltip.classList.add('is-visible');
        tooltip.classList.toggle('is-pinned', !!pin);

        // Positionnement : centré horizontalement sous le cluster, et
        // clampé pour rester intégralement dans le wrap visible (max 92%
        // de la hauteur dispo, scroll interne si plus long).
        const TTW = pin && evs.length > 1 ? 340 : 300;
        const margin = 10;
        // Ajuste la max-height pour rester dans le cadre, peu importe la
        // position du cluster verticalement.
        const maxH = Math.max(120, pos.wRect.height - 2 * margin);
        tooltip.style.maxHeight = maxH + 'px';

        // Ouverture vers le bas si le cluster est en haut du wrap, sinon
        // vers le haut. Ça évite que le tooltip dépasse le cadre.
        const ttHeightEstimate = Math.min(maxH, tooltip.scrollHeight || 200);
        let top;
        if (pos.cy < ttHeightEstimate + margin + 20) {
          // pas la place au-dessus → ouvre en dessous
          top = pos.cy + 24;
        } else {
          // assez de place au-dessus
          top = pos.cy - ttHeightEstimate - 12;
        }
        top = Math.max(margin, Math.min(pos.wRect.height - ttHeightEstimate - margin, top));
        let left = pos.cx - TTW / 2;
        left = Math.max(margin, Math.min(pos.wRect.width - TTW - margin, left));
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';

        // Wire les liens des événements (mode multi)
        if (evs.length > 1) {
          tooltip.querySelectorAll('.timeline-tt-item').forEach((a) => {
            const k = parseInt(a.getAttribute('data-evt-idx'), 10);
            a.addEventListener('click', (e) => {
              e.preventDefault(); e.stopPropagation();
              const ev = evs[k];
              if (!ev) return;
              navigate('/sujet/' + encodeURIComponent(ev.sujetId) + '/cours/bloc-' + ev.blockIdx);
            });
          });
        }
      }

      svgWrap.querySelectorAll('.timeline-evt').forEach(g => {
        const idx = parseInt(g.getAttribute('data-idx'), 10);
        const p = placed[idx];
        if (!p) return;
        g.addEventListener('mouseenter', () => {
          if (pinnedKey) return;       // ne pas overrider un tooltip épinglé
          const rect = g.getBoundingClientRect();
          const wRect = wrap.getBoundingClientRect();
          renderTooltipFor(p.c, {
            cx: rect.left + rect.width / 2 - wRect.left,
            cy: rect.top - wRect.top,
            wRect
          }, false);
        });
        g.addEventListener('mouseleave', () => {
          if (pinnedKey) return;
          tooltip.classList.remove('is-visible');
        });
        g.addEventListener('click', (e) => {
          e.stopPropagation();
          if (p.c.events.length === 1) {
            const ev = p.c.events[0];
            navigate('/sujet/' + encodeURIComponent(ev.sujetId) + '/cours/bloc-' + ev.blockIdx);
            return;
          }
          // Cluster : épingle le tooltip
          const rect = g.getBoundingClientRect();
          const wRect = wrap.getBoundingClientRect();
          pinnedKey = idx;
          renderTooltipFor(p.c, {
            cx: rect.left + rect.width / 2 - wRect.left,
            cy: rect.top - wRect.top,
            wRect
          }, true);
        });
      });
    }

    // Click ailleurs dans le wrap : retire épingle
    wrap.addEventListener('click', (e) => {
      if (e.target.closest('.timeline-evt')) return;
      if (e.target.closest('.timeline-tooltip')) return;
      pinnedKey = null;
      tooltip.classList.remove('is-visible');
      tooltip.classList.remove('is-pinned');
    });

    // ---- PAN/ZOOM ----
    // Stratégie :
    // - WHEEL = zoom : recalcule scale + panX (pour ancrer le curseur),
    //   puis full re-render. Le scale n'est PAS appliqué via transform SVG
    //   (sinon glyphes/dots se déformeraient).
    // - DRAG = pan : pendant le drag on déplace le groupe via translate(dx,0)
    //   en PIXELS DISPLAY (pas de scale), donc pas d'étirement et c'est
    //   très fluide. Au mouseup, on commit dx dans panX et on re-render
    //   pour recalculer le clustering au nouveau pan.
    // - On utilise requestAnimationFrame pour throttler les renders au wheel,
    //   sinon on rebuild le SVG 60 fois/sec pour rien.
    let wheelRafId = null;
    let pendingWheel = null;

    function applyWheelZoom() {
      wheelRafId = null;
      if (!pendingWheel) return;
      const { clientX, deltaY } = pendingWheel;
      pendingWheel = null;
      const svgEl = wrap.querySelector('.timeline-svg');
      if (!svgEl) return;
      const ctm = svgEl.getScreenCTM();
      if (!ctm) return;
      const pt = svgEl.createSVGPoint();
      pt.x = clientX; pt.y = 0;
      const local = pt.matrixTransform(ctm.inverse()).x;  // x du curseur en repère viewBox
      const factor = deltaY < 0 ? 1.2 : (1 / 1.2);
      // Zoom plafonné à 30× : au-delà la timeline ne révèle plus rien d'utile,
      // chaque événement est déjà bien aéré. Si tu veux zoomer plus, le mode
      // Court fait déjà le travail. Sur Long, l'auto-bascule prend le relais
      // dès qu'on entre dans la fenêtre historique (cf. logique ci-dessous).
      const newScale = Math.max(1, Math.min(30, scale * factor));
      if (Math.abs(newScale - scale) < 0.005) return;
      // Garde le point sous le curseur stable : on veut xFor_new(year_at_cursor) = local
      // Comme xFor = padX + (xLogical - padX) * scale + padX,
      // year_at_cursor a xLogical = (local - panX - padX) / scale + padX
      // → newPanX = local - padX - ((local - panX - padX) / scale) * newScale
      const xLogCursor = (local - panX - padX) / scale + padX;
      panX = local - padX - (xLogCursor - padX) * newScale;
      scale = newScale;
      // Clamp pan
      const minPan = (W - 2 * padX) * (1 - scale);
      panX = Math.max(minPan, Math.min(0, panX));
      pinnedKey = null;
      tooltip.classList.remove('is-visible');

      // ---- Auto-bascule Long → Court ----
      // Si on est en mode Long et qu'on a zoomé assez pour que la fenêtre
      // visible ne contienne plus rien d'antérieur à -10 000, on bascule
      // automatiquement en Court centré sur la même année que sous le
      // curseur. L'utilisateur passe de "vue cosmique" à "vue historique"
      // sans cliquer sur un sélecteur.
      if (currentMode === 'long' && scale > 1.5) {
        const visMinYearNow = yearAtXDisplayForMode('long', padX);
        if (visMinYearNow != null && visMinYearNow > -10000) {
          const yearAtCursor = yearAtXDisplayForMode('long', local);
          currentMode = 'court';
          syncModeButtons();
          // Recadre Court pour que yearAtCursor soit toujours sous le curseur.
          // On choisit le scale Court tel que la fenêtre visible ait la
          // même amplitude que ce qui était visible en Long.
          const visMaxYearNow = yearAtXDisplayForMode('long', W - padX) || NOW;
          const visibleSpan = Math.max(50, visMaxYearNow - visMinYearNow);
          const courtTotalSpan = NOW - (-10000);
          const newScaleCourt = Math.max(1, Math.min(30, courtTotalSpan / visibleSpan));
          // Position de yearAtCursor en mode Court à scale=1 :
          //   xLogicalCourt = padX + ((y - minY) / span) * (W - 2 padX)
          const tCourt = (yearAtCursor - (-10000)) / courtTotalSpan;
          const xLogicalCourt = padX + tCourt * (W - 2 * padX);
          // panX = local - padX - (xLogicalCourt - padX) * newScale
          panX = local - padX - (xLogicalCourt - padX) * newScaleCourt;
          scale = newScaleCourt;
          const minPanCourt = (W - 2 * padX) * (1 - scale);
          panX = Math.max(minPanCourt, Math.min(0, panX));
        }
      }

      render(currentMode, domSel.value);
      renderMiniMap();
    }

    // Helper : convertir x display → année, pour un mode donné (utilisé par
    // l'auto-bascule, qui doit savoir ce que la fenêtre visible représente
    // dans le mode courant avant de basculer).
    function yearAtXDisplayForMode(mode, xd) {
      const P = MODES[mode];
      const filtered = (P.minY != null || P.maxY != null)
        ? events.filter(e =>
            (P.minY == null || e.year >= P.minY) &&
            (P.maxY == null || e.year <= P.maxY))
        : events;
      const effMin = P.minY != null ? P.minY : (filtered.length ? Math.min(...filtered.map(e => e.year)) : NOW - 1);
      const effMax = P.maxY != null ? P.maxY : NOW;
      const maxLog = Math.log10(1 + Math.max(1, (effMax - effMin)));
      const xLog = (xd - panX - padX) / scale + padX;
      if (P.scale === 'log') {
        const tNorm = (xLog - padX) / (W - 2 * padX);
        const yearsAgo = Math.pow(10, maxLog * (1 - tNorm)) - 1;
        return effMax - yearsAgo;
      } else {
        const t = (xLog - padX) / (W - 2 * padX);
        return effMin + t * (effMax - effMin);
      }
    }

    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      pendingWheel = { clientX: e.clientX, deltaY: e.deltaY };
      if (wheelRafId == null) wheelRafId = requestAnimationFrame(applyWheelZoom);
    }, { passive: false });

    let dragActuallyMoved = false;
    // AbortController : on attache les listeners pan globaux (mousemove,
    // mouseup) à window seulement le temps d'un drag, et on les retire
    // proprement au mouseup. Sans ça, chaque entrée dans la Timeline
    // ajouterait des listeners permanents — fuite mineure mais évitable.
    let dragCtrl = null;
    wrap.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('.timeline-tooltip')) return;
      if (e.target.closest('select')) return;
      const svgEl = wrap.querySelector('.timeline-svg');
      if (!svgEl) return;
      const ctm = svgEl.getScreenCTM();
      if (!ctm || !ctm.a) return;
      isDragging = true;
      dragStartScreenX = e.clientX;
      dragViewBoxScale = 1 / ctm.a;
      dragLiveDx = 0;
      dragActuallyMoved = false;
      if (dragCtrl) dragCtrl.abort();
      dragCtrl = new AbortController();
      const sig = dragCtrl.signal;
      // On NE change rien visuellement tant que la souris n'a pas bougé d'au
      // moins quelques pixels. Comme ça un simple clic sur un dot ne
      // déclenche pas un re-render qui détruirait son DOM avant que le
      // click handler ne fire.
      window.addEventListener('mousemove', (ev) => {
        if (!isDragging) return;
        const screenDx = ev.clientX - dragStartScreenX;
        if (!dragActuallyMoved) {
          if (Math.abs(screenDx) < 3) return;     // tolérance click vs drag
          dragActuallyMoved = true;
          wrap.classList.add('is-panning');
          pinnedKey = null;
          tooltip.classList.remove('is-visible');
        }
        dragLiveDx = screenDx * dragViewBoxScale;
        const g = wrap.querySelector('.timeline-viewport');
        if (g) g.setAttribute('transform', `translate(${dragLiveDx},0)`);
      }, { signal: sig });
      window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        if (dragCtrl) { dragCtrl.abort(); dragCtrl = null; }
        if (!dragActuallyMoved) {
          // Pas de drag réel — c'était un click, on laisse le click handler
          // du dot s'exécuter sans re-render.
          return;
        }
        wrap.classList.remove('is-panning');
        panX += dragLiveDx;
        const minPan = (W - 2 * padX) * (1 - scale);
        panX = Math.max(minPan, Math.min(0, panX));
        dragLiveDx = 0;
        dragActuallyMoved = false;
        render(currentMode, domSel.value);
        renderMiniMap();
      }, { signal: sig });
    });

    // ---- Mini-map ----
    // Bande basse, 90px de haut, qui montre l'**intégralité** de la période
    // du mode courant (pas affectée par le pan/zoom du SVG principal).
    // Tous les événements y sont en gris clair (sans clustering), et un
    // rectangle indique la fenêtre actuellement visible dans le SVG principal.
    // Le clic ou le drag dans la mini-map permet de re-cadrer la grande timeline.
    const MM_H = 90, MM_PADX = 30, MM_AXIS_Y = MM_H - 22;
    const miniWrap = el('div', { class: 'timeline-minimap-wrap' });
    main.appendChild(miniWrap);

    function renderMiniMap() {
      const P = MODES[currentMode];
      let filtered = events;
      if (P.minY != null) filtered = filtered.filter(e => e.year >= P.minY);
      if (P.maxY != null) filtered = filtered.filter(e => e.year <= P.maxY);
      if (domSel.value) filtered = filtered.filter(e => e.domain === domSel.value);
      const effMin = P.minY != null ? P.minY : (filtered.length ? Math.min(...filtered.map(e => e.year)) : NOW - 1);
      const effMax = P.maxY != null ? P.maxY : NOW;
      const maxLog = Math.log10(1 + Math.max(1, (effMax - effMin)));

      function mmX(year) {
        if (P.scale === 'log') {
          const yearsAgo = effMax - year;
          if (yearsAgo <= 0) return W - MM_PADX;
          const t = Math.log10(1 + yearsAgo) / maxLog;
          return MM_PADX + (1 - t) * (W - 2 * MM_PADX);
        } else {
          const t = (year - effMin) / Math.max(1, (effMax - effMin));
          return MM_PADX + t * (W - 2 * MM_PADX);
        }
      }
      // Fenêtre courante : on convertit padX et W-padX du SVG principal en
      // années (au scale/panX actuel), puis on les replace dans le repère
      // mini-map (qui est en scale=1).
      const yLeft  = yearAtXDisplayForMode(currentMode, padX);
      const yRight = yearAtXDisplayForMode(currentMode, W - padX);
      const mmLeft  = mmX(Math.max(effMin, Math.min(effMax, yLeft != null ? yLeft : effMin)));
      const mmRight = mmX(Math.max(effMin, Math.min(effMax, yRight != null ? yRight : effMax)));

      let inner = '';
      // Axe
      inner += `<line class="timeline-mm-axis" x1="${MM_PADX}" y1="${MM_AXIS_Y}" x2="${W - MM_PADX}" y2="${MM_AXIS_Y}"/>`;
      // Points d'événements (gris clair, taille fixe)
      filtered.forEach(e => {
        const x = mmX(e.year);
        inner += `<circle class="timeline-mm-dot" cx="${x.toFixed(1)}" cy="${MM_AXIS_Y - 6}" r="2" style="fill:${domainColor(e.domain)}"/>`;
      });
      // Fenêtre visible
      const winX = Math.min(mmLeft, mmRight);
      const winW = Math.max(8, Math.abs(mmRight - mmLeft));
      inner += `<rect class="timeline-mm-window" x="${winX.toFixed(1)}" y="6" width="${winW.toFixed(1)}" height="${(MM_H - 18).toFixed(1)}" rx="3"/>`;
      // Labels min / max
      const fmt = y => y < 0 ? Math.round(Math.abs(y) / (Math.abs(y) > 9999 ? 1e6 : 1)) + (Math.abs(y) > 9999 ? ' Ma' : ' av. J.-C.') : (y === NOW ? 'aujourd\'hui' : String(Math.round(y)));
      inner += `<text class="timeline-mm-lbl" x="${MM_PADX}" y="${MM_H - 4}" text-anchor="start">${fmt(effMin)}</text>`;
      inner += `<text class="timeline-mm-lbl" x="${W - MM_PADX}" y="${MM_H - 4}" text-anchor="end">${fmt(effMax)}</text>`;

      miniWrap.innerHTML = `<svg class="timeline-minimap" viewBox="0 0 ${W} ${MM_H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;
      const mmSvg = miniWrap.querySelector('.timeline-minimap');
      if (mmSvg) wireMiniMapInteraction(mmSvg, mmX, effMin, effMax, P);
    }

    function wireMiniMapInteraction(mmSvg, mmX, effMin, effMax, P) {
      // Click dans la mini-map = recadre le SVG principal pour centrer là.
      // Drag = idem en continu.
      function pickYearFromEvent(e) {
        const ctm = mmSvg.getScreenCTM(); if (!ctm) return null;
        const pt = mmSvg.createSVGPoint();
        pt.x = e.clientX; pt.y = 0;
        const xd = pt.matrixTransform(ctm.inverse()).x;
        // Inverser mmX
        if (P.scale === 'log') {
          const maxLog = Math.log10(1 + Math.max(1, (effMax - effMin)));
          const tNorm = (xd - MM_PADX) / (W - 2 * MM_PADX);
          const yearsAgo = Math.pow(10, maxLog * (1 - tNorm)) - 1;
          return effMax - yearsAgo;
        } else {
          const t = (xd - MM_PADX) / (W - 2 * MM_PADX);
          return effMin + t * (effMax - effMin);
        }
      }
      function centerOn(year) {
        // On veut que dans le SVG principal, l'année y soit au centre
        // (x = W/2). xLogical(year) = (selon scale du mode courant).
        let xLogical;
        if (P.scale === 'log') {
          const maxLog = Math.log10(1 + Math.max(1, (effMax - effMin)));
          const yearsAgo = effMax - year;
          if (yearsAgo <= 0) xLogical = W - padX;
          else xLogical = padX + (1 - Math.log10(1 + yearsAgo) / maxLog) * (W - 2 * padX);
        } else {
          const t = (year - effMin) / Math.max(1, (effMax - effMin));
          xLogical = padX + t * (W - 2 * padX);
        }
        // xFor_new(year) = W/2 → panX = W/2 - padX - (xLogical - padX) * scale
        panX = W / 2 - padX - (xLogical - padX) * scale;
        const minPan = (W - 2 * padX) * (1 - scale);
        panX = Math.max(minPan, Math.min(0, panX));
        pinnedKey = null;
        tooltip.classList.remove('is-visible');
        render(currentMode, domSel.value);
        renderMiniMap();
      }
      mmSvg.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const y = pickYearFromEvent(e);
        if (y != null) centerOn(y);
        function onMove(ev) {
          const y2 = pickYearFromEvent(ev);
          if (y2 != null) centerOn(y2);
        }
        function onUp() {
          window.removeEventListener('mousemove', onMove);
          window.removeEventListener('mouseup', onUp);
        }
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
      });
    }

    function syncModeButtons() {
      btnLong.classList.toggle('is-active', currentMode === 'long');
      btnCourt.classList.toggle('is-active', currentMode === 'court');
    }
    function switchTo(mode) {
      if (currentMode === mode) return;
      currentMode = mode;
      panX = 0; scale = 1;
      pinnedKey = null;
      tooltip.classList.remove('is-visible');
      syncModeButtons();
      render(currentMode, domSel.value);
      renderMiniMap();
    }
    btnLong.addEventListener('click', () => switchTo('long'));
    btnCourt.addEventListener('click', () => switchTo('court'));

    render(currentMode, '');
    renderMiniMap();
    domSel.addEventListener('change', () => {
      pinnedKey = null;
      tooltip.classList.remove('is-visible');
      render(currentMode, domSel.value);
      renderMiniMap();
    });
  }

  // =================================================================
  // POMODORO (panneau flottant 25/5 min)
  // =================================================================

  let pomodoroState = null;

  function tryChime() {
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.frequency.value = 660;
      o.type = 'sine';
      o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0.001, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.35, ac.currentTime + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 1.4);
      o.start(); o.stop(ac.currentTime + 1.4);
    } catch (e) { /* silencieux si l'API audio n'est pas dispo */ }
  }

  function togglePomodoro() {
    if (pomodoroState && pomodoroState.panel && pomodoroState.panel.parentNode) {
      closePomodoro();
    } else {
      openPomodoro();
    }
  }

  function openPomodoro() {
    const WORK_S = 25 * 60;
    const BREAK_S = 5 * 60;

    const panel = el('div', { class: 'pomodoro-panel' });
    const closeBtn = el('button', { class: 'pomodoro-close', title: 'Fermer' }, '✕');
    const phase = el('div', { class: 'pomodoro-phase' }, 'Travail');
    const display = el('div', { class: 'pomodoro-display' }, '25:00');
    const startBtn = el('button', { class: 'btn' }, 'Démarrer');
    const resetBtn = el('button', { class: 'btn btn-secondary' }, 'Reset');
    panel.appendChild(closeBtn);
    panel.appendChild(phase);
    panel.appendChild(display);
    panel.appendChild(el('div', { class: 'pomodoro-controls' }, startBtn, resetBtn));

    const s = {
      panel, display, phase, startBtn,
      isWork: true,
      remaining: WORK_S,
      running: false,
      intervalId: null
    };
    pomodoroState = s;

    function updateDisplay() {
      const m = Math.floor(s.remaining / 60);
      const sec = s.remaining % 60;
      display.textContent = m + ':' + (sec < 10 ? '0' + sec : sec);
      if (s.running) document.title = '⏱ ' + display.textContent + ' — Carnet';
      else document.title = 'Carnet de Savoirs';
    }
    // Le décompte est basé sur un horodatage de fin (s.endTs) et non sur
    // un compteur décrémenté à chaque tick : les navigateurs ralentissent
    // les setInterval des onglets en arrière-plan (jusqu'à 1 tick/min),
    // ce qui faisait durer un pomodoro de 25 min bien plus longtemps.
    function tick() {
      s.remaining = Math.max(0, Math.round((s.endTs - Date.now()) / 1000));
      if (s.remaining <= 0) {
        stopTimer();
        tryChime();
        const next = s.isWork ? 'pause' : 'travail';
        s.isWork = !s.isWork;
        s.remaining = s.isWork ? WORK_S : BREAK_S;
        phase.textContent = s.isWork ? 'Travail' : 'Pause';
        updateDisplay();
        // Notification douce et VRAIMENT non bloquante (un alert() gèle la
        // page) : on réutilise le toast des succès.
        showAchievementToast({ label: 'Pomodoro', desc: 'Début de la ' + next + '.' });
      } else {
        updateDisplay();
      }
    }
    function startTimer() {
      s.running = true;
      s.endTs = Date.now() + s.remaining * 1000;
      s.intervalId = setInterval(tick, 500);
      startBtn.textContent = 'Pause';
      updateDisplay();
    }
    function stopTimer() {
      s.running = false;
      if (s.intervalId) clearInterval(s.intervalId);
      s.intervalId = null;
      if (s.endTs) s.remaining = Math.max(0, Math.round((s.endTs - Date.now()) / 1000));
      s.endTs = null;
      startBtn.textContent = 'Reprendre';
      document.title = 'Carnet de Savoirs';
    }
    function reset() {
      stopTimer();
      s.remaining = s.isWork ? WORK_S : BREAK_S;
      startBtn.textContent = 'Démarrer';
      updateDisplay();
    }

    startBtn.addEventListener('click', () => s.running ? stopTimer() : startTimer());
    resetBtn.addEventListener('click', reset);
    closeBtn.addEventListener('click', closePomodoro);

    document.body.appendChild(panel);
    updateDisplay();
  }

  function closePomodoro() {
    if (!pomodoroState) return;
    if (pomodoroState.intervalId) clearInterval(pomodoroState.intervalId);
    if (pomodoroState.panel && pomodoroState.panel.parentNode) {
      pomodoroState.panel.parentNode.removeChild(pomodoroState.panel);
    }
    document.title = 'Carnet de Savoirs';
    pomodoroState = null;
  }

  // =================================================================
  // RACCOURCIS CLAVIER
  // =================================================================

  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const target = e.target;
      const isFormField = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      );

      // Esc — toujours actif pour quitter un champ ou le mode lecture
      if (e.key === 'Escape') {
        if (isFormField && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
          target.blur();
          return;
        }
        if (state.user && state.user.readingMode) {
          state.user.readingMode = false;
          saveUserState();
          document.body.classList.remove('reading-mode');
          const btn = document.querySelector('.reading-toggle');
          if (btn) {
            btn.classList.remove('on');
            btn.textContent = 'Mode lecture →';
            btn.title = 'Masquer la sidebar et élargir la colonne de lecture';
          }
          e.preventDefault();
        }
        return;
      }

      // Raccourci global Ctrl/Cmd + K : ouvre la palette de recherche.
      // Doit fonctionner aussi depuis un champ de saisie (UX standard).
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        openSearchPalette();
        return;
      }


      // Les autres raccourcis sont désactivés quand on tape dans un champ
      if (isFormField) return;

      // Modificateurs : on n'intercepte pas les autres Ctrl/Cmd/Alt
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const route = parseHash();

      // / — focus la barre de recherche
      if (e.key === '/') {
        const search = document.querySelector('.search-input');
        if (search) {
          e.preventDefault();
          search.focus();
          search.select();
        }
        return;
      }

      // b — retour à la bibliothèque
      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        navigate('/');
        return;
      }

      // 1..4 — basculer entre onglets sur une fiche sujet
      if (route.view === 'sujet' && /^[1-4]$/.test(e.key)) {
        const tabs = ['resume', 'cours', 'quiz', 'carte'];
        const idx = parseInt(e.key, 10) - 1;
        e.preventDefault();
        navigate('/sujet/' + encodeURIComponent(route.id) + '/' + tabs[idx]);
        return;
      }
    });
  }


  // =================================================================
  // MODE CHAMPION — adaptation solo du jeu télévisé "Questions pour
  // un Champion" (France 3). 4 manches au choix :
  //  - "4 à la suite"   : 4 questions d'un sujet, chrono dégressif,
  //                       aucune erreur permise. Succès = badge.
  //  - "Finale 1 min"   : max de bonnes réponses en 60 s sur un
  //                       domaine. -1 par erreur.
  //  - "9 points gagnants": questions tirées de tous tes sujets
  //                       visités, +1/-1, premier à 9 (gagné) ou -3
  //                       (perdu).
  //  - "Face-à-face"    : 12 questions sur un sujet, jouées contre
  //                       ton meilleur score précédent (fantôme).
  // =================================================================

  // ---- État de session (en RAM, non persistant) ----
  // state.championSession = {
  //   manche: '4-a-la-suite' | 'finale' | '9-points' | 'face-a-face',
  //   phase: 'select' | 'play' | 'result',
  //   ... params spécifiques à la manche
  // }

  // ---- Helpers d'accès aux records ----
  function getChampion() {
    if (!state.user.champion) state.user.champion = {
      quatreSuite: {}, finale: {},
      neufPoints: { wins: 0, played: 0, bestStreak: 0 },
      faceAFace: {}
    };
    return state.user.champion;
  }
  function recordQuatreSuiteWin(sujetId) {
    const c = getChampion();
    if (!c.quatreSuite[sujetId]) c.quatreSuite[sujetId] = { wins: 0, lastSuccessTs: 0 };
    c.quatreSuite[sujetId].wins++;
    c.quatreSuite[sujetId].lastSuccessTs = Date.now();
    saveUserState();
    checkAchievements();
  }
  function recordFinaleScore(dom, score) {
    const c = getChampion();
    const prev = (c.finale[dom] && c.finale[dom].bestScore) || 0;
    if (score > prev) c.finale[dom] = { bestScore: score, ts: Date.now() };
    saveUserState();
    checkAchievements();
  }
  function recordNeufPointsResult(won, streak) {
    const c = getChampion();
    c.neufPoints.played++;
    if (won) c.neufPoints.wins++;
    if (streak > (c.neufPoints.bestStreak || 0)) c.neufPoints.bestStreak = streak;
    saveUserState();
    checkAchievements();
  }
  function recordFaceAFaceScore(sujetId, score) {
    const c = getChampion();
    const prev = (c.faceAFace[sujetId] && c.faceAFace[sujetId].bestScore) || 0;
    if (score > prev) c.faceAFace[sujetId] = { bestScore: score, ts: Date.now() };
    saveUserState();
    checkAchievements();
  }

  // ---- Helpers de pool de questions ----
  // Sélectionne k questions aléatoires d'un sujet (ou moins si pas assez).
  function pickQuizFromSujet(sujet, k) {
    if (!sujet || !Array.isArray(sujet.quiz) || sujet.quiz.length === 0) return [];
    const pool = sujet.quiz.slice();
    shuffleInPlace(pool);
    const out = pool.slice(0, Math.min(k, pool.length));
    return out.map((q, i) => Object.assign({}, q, {
      _sujet: { id: sujet.meta.id, titre: sujet.meta.titre },
      _qIdx: sujet.quiz.indexOf(q)
    }));
  }
  // Pool global : tous sujets visités (ou tous si paramétré)
  function buildGlobalQuestionPool(opts) {
    opts = opts || {};
    const onlyVisited = opts.onlyVisited !== false;
    const domain = opts.domain || null;
    const list = [];
    Object.values(state.sujets || {}).forEach(sujet => {
      if (!sujet || !Array.isArray(sujet.quiz)) return;
      if (onlyVisited) {
        const p = state.user.progress[sujet.meta.id];
        if (!p || !p.visited) return;
      }
      if (domain) {
        const doms = sujet.meta.domaines || [];
        if (doms.indexOf(domain) === -1) return;
      }
      sujet.quiz.forEach((q, i) => {
        list.push(Object.assign({}, q, {
          _sujet: { id: sujet.meta.id, titre: sujet.meta.titre },
          _qIdx: i
        }));
      });
    });
    shuffleInPlace(list);
    return list;
  }
  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }
  function listAllDomains() {
    const set = new Set();
    Object.values(state.sujets || {}).forEach(s => {
      (s.meta.domaines || []).forEach(d => set.add(d));
    });
    return Array.from(set).sort();
  }
  function listVisitedSujets() {
    return Object.values(state.sujets || {})
      .filter(s => {
        const p = state.user.progress[s.meta.id];
        return p && p.visited && Array.isArray(s.quiz) && s.quiz.length > 0;
      })
      .sort((a, b) => String(a.meta.titre).localeCompare(String(b.meta.titre)));
  }

  // -----------------------------------------------------------------
  // RENDER PRINCIPAL DU MODE CHAMPION
  // -----------------------------------------------------------------
  function renderChampion(main, mancheParam) {
    // Si une session est active, on rend sa phase courante.
    const sess = state.championSession;
    if (sess && sess.manche) {
      if (sess.phase === 'play')   return renderChampionPlay(main);
      if (sess.phase === 'result') return renderChampionResult(main);
      // 'select' tombe dans le hub spécifique de la manche
      if (sess.manche === '4-a-la-suite') return renderManche4Select(main);
      if (sess.manche === 'finale')       return renderMancheFinaleSelect(main);
      if (sess.manche === '9-points')     return renderManche9Select(main);
      if (sess.manche === 'face-a-face')  return renderMancheFaceSelect(main);
    }
    // Sinon : hub principal des 4 manches
    renderChampionHub(main);
  }

  function renderChampionHub(main) {
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mode Champion'));
    main.appendChild(el('h1', { class: 'page-title', html: '<em>Question</em> pour un Champion' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Quatre manches inspirées du jeu télévisé, adaptées en solo. Pas de répétition espacée ni de mémorisation programmée : ici, c\'est de la pure performance contre ton meilleur score (ou contre le chrono).'));

    const c = getChampion();
    const visited = listVisitedSujets();
    const domains = listAllDomains();
    const grid = el('div', { class: 'champion-hub-grid' });

    // ---- Carte 1 : 4 à la suite ----
    const totalWins4 = Object.values(c.quatreSuite || {}).reduce((sum, x) => sum + (x.wins || 0), 0);
    const uniqueSujetsWon = Object.keys(c.quatreSuite || {}).filter(k => (c.quatreSuite[k].wins || 0) > 0).length;
    grid.appendChild(renderMancheCard({
      manche: '4-a-la-suite',
      titre: '4 à la suite',
      desc: 'Choisis un sujet, enchaîne 4 questions avec chrono dégressif (40s → 30s → 20s → 10s). Aucune erreur permise. Succès = tu es champion de ce sujet.',
      stats: totalWins4 > 0
        ? totalWins4 + ' victoire' + (totalWins4 > 1 ? 's' : '') + ' · ' + uniqueSujetsWon + ' sujet' + (uniqueSujetsWon > 1 ? 's' : '') + ' maîtrisé' + (uniqueSujetsWon > 1 ? 's' : '')
        : 'Jamais tenté.',
      disabled: visited.length === 0,
      disabledMsg: 'Visite au moins un sujet avec un quiz.'
    }));

    // ---- Carte 2 : Finale 1 minute ----
    const bestFinale = Object.entries(c.finale || {}).reduce((best, [d, v]) => {
      if (!best || v.bestScore > best.score) return { dom: d, score: v.bestScore };
      return best;
    }, null);
    grid.appendChild(renderMancheCard({
      manche: 'finale',
      titre: 'Finale (1 minute)',
      desc: 'Choisis un domaine. Enchaîne un max de bonnes réponses en 60 secondes. Erreur = -1 point. Affiche ton record par domaine.',
      stats: bestFinale
        ? 'Record : ' + bestFinale.score + ' pt' + (bestFinale.score > 1 ? 's' : '') + ' en ' + bestFinale.dom
        : 'Jamais tenté.',
      disabled: domains.length === 0,
      disabledMsg: 'Aucun domaine disponible.'
    }));

    // ---- Carte 3 : 9 points gagnants ----
    const np = c.neufPoints || { wins: 0, played: 0, bestStreak: 0 };
    grid.appendChild(renderMancheCard({
      manche: '9-points',
      titre: '9 points gagnants',
      desc: 'Questions tirées de tous tes sujets visités. Bonne réponse = +1, mauvaise = -1. Premier à 9 ou à -3 termine la partie. Pas de chrono : prends ton temps.',
      stats: np.played > 0
        ? np.wins + ' victoire' + (np.wins > 1 ? 's' : '') + ' sur ' + np.played + ' partie' + (np.played > 1 ? 's' : '') + ' · meilleure série : ' + np.bestStreak
        : 'Jamais tenté.',
      disabled: visited.length === 0,
      disabledMsg: 'Visite au moins un sujet avec un quiz.'
    }));

    // ---- Carte 4 : Face-à-face ----
    const bestFace = Object.entries(c.faceAFace || {}).reduce((best, [id, v]) => {
      if (!best || v.bestScore > best.score) return { id, score: v.bestScore };
      return best;
    }, null);
    const bestFaceTitle = bestFace && state.sujets[bestFace.id]
      ? String(state.sujets[bestFace.id].meta.titre).replace(/<[^>]+>/g, '')
      : null;
    grid.appendChild(renderMancheCard({
      manche: 'face-a-face',
      titre: 'Face-à-face',
      desc: '12 questions sur un sujet, jouées contre ton meilleur score précédent affiché en parallèle (fantôme). Si tu bats l\'ancien record, il devient le nouveau.',
      stats: bestFace
        ? 'Record : ' + bestFace.score + ' / 12 sur ' + (bestFaceTitle || bestFace.id)
        : 'Jamais tenté.',
      disabled: visited.length === 0,
      disabledMsg: 'Visite au moins un sujet avec un quiz.'
    }));

    main.appendChild(grid);
  }

  function renderMancheCard(opts) {
    const card = el('div', { class: 'champion-manche-card' + (opts.disabled ? ' is-disabled' : '') });
    card.appendChild(el('h2', null, opts.titre));
    card.appendChild(el('p', { class: 'champion-manche-desc' }, opts.desc));
    card.appendChild(el('div', { class: 'champion-manche-stats' }, opts.stats));
    if (opts.disabled) {
      card.appendChild(el('div', { class: 'champion-manche-disabled' }, opts.disabledMsg));
    } else {
      card.appendChild(el('button', {
        class: 'btn',
        onclick: () => {
          state.championSession = { manche: opts.manche, phase: 'select' };
          rerender();
        }
      }, 'Lancer cette manche →'));
    }
    return card;
  }

  // -----------------------------------------------------------------
  // MANCHE 1 : 4 À LA SUITE
  // -----------------------------------------------------------------
  function renderManche4Select(main) {
    main.appendChild(renderChampionBackBtn());
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mode Champion · Sélection'));
    main.appendChild(el('h1', { class: 'page-title' }, '4 à la suite'));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Choisis le sujet sur lequel tu veux te tester. 4 questions enchaînées, chrono dégressif (40s, 30s, 20s, 10s). Une seule erreur = échec.'));
    const visited = listVisitedSujets().filter(s => s.quiz.length >= 4);
    if (visited.length === 0) {
      main.appendChild(el('p', { class: 'champion-empty' },
        'Aucun sujet visité ne contient au moins 4 questions de quiz. Lis quelques sujets d\'abord.'));
      return;
    }
    const list = el('div', { class: 'champion-sujet-list' });
    const c = getChampion();
    visited.forEach(s => {
      const won = (c.quatreSuite[s.meta.id] && c.quatreSuite[s.meta.id].wins) || 0;
      const dom = (s.meta.domaines || ['Autre'])[0];
      const color = domainColor(dom);
      const card = el('button', {
        class: 'champion-sujet-card' + (won > 0 ? ' is-won' : ''),
        style: { '--card-accent': color },
        onclick: () => start4ALaSuite(s)
      },
        el('span', { class: 'champion-sujet-domain' }, dom),
        el('span', { class: 'champion-sujet-title', html: htmlEscapeButKeepEm(s.meta.titre) }),
        el('span', { class: 'champion-sujet-stats' }, won > 0
          ? '★ ' + won + ' victoire' + (won > 1 ? 's' : '')
          : s.quiz.length + ' questions disponibles')
      );
      list.appendChild(card);
    });
    main.appendChild(list);
  }
  function start4ALaSuite(sujet) {
    const questions = pickQuizFromSujet(sujet, 4);
    state.championSession = {
      manche: '4-a-la-suite',
      phase: 'play',
      sujetId: sujet.meta.id,
      sujetTitre: sujet.meta.titre,
      questions: questions,
      currentQ: 0,
      score: 0,
      timers: [40, 30, 20, 10],
      failed: false,
      timerLeft: 40,
      timerId: null
    };
    rerender();
  }

  // -----------------------------------------------------------------
  // MANCHE 2 : FINALE 1 MINUTE
  // -----------------------------------------------------------------
  function renderMancheFinaleSelect(main) {
    main.appendChild(renderChampionBackBtn());
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mode Champion · Sélection'));
    main.appendChild(el('h1', { class: 'page-title' }, 'Finale (1 minute)'));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Choisis un domaine. Tu auras 60 secondes pour enchaîner un maximum de bonnes réponses. Erreur = -1 point. Pioche tirée de tous tes sujets visités du domaine.'));
    const c = getChampion();
    const doms = listAllDomains();
    const list = el('div', { class: 'champion-domain-list' });
    doms.forEach(d => {
      const pool = buildGlobalQuestionPool({ onlyVisited: true, domain: d });
      const best = (c.finale[d] && c.finale[d].bestScore) || 0;
      const card = el('button', {
        class: 'champion-domain-card' + (pool.length === 0 ? ' is-disabled' : '') + (best > 0 ? ' is-record' : ''),
        style: { '--card-accent': domainColor(d) },
        disabled: pool.length === 0,
        title: pool.length === 0 ? 'Aucun sujet visité dans ce domaine.' : '',
        onclick: () => pool.length > 0 ? startFinale(d) : null
      },
        el('span', { class: 'champion-domain-name' }, d),
        el('span', { class: 'champion-domain-stats' }, pool.length === 0
          ? 'Aucune question'
          : pool.length + ' questions' + (best > 0 ? ' · record ' + best : ''))
      );
      list.appendChild(card);
    });
    main.appendChild(list);
  }
  function startFinale(dom) {
    const pool = buildGlobalQuestionPool({ onlyVisited: true, domain: dom });
    state.championSession = {
      manche: 'finale',
      phase: 'play',
      domain: dom,
      pool: pool,
      currentQ: 0,
      score: 0,
      timeLeft: 60,
      timerId: null,
      finished: false
    };
    rerender();
  }

  // -----------------------------------------------------------------
  // MANCHE 3 : 9 POINTS GAGNANTS
  // -----------------------------------------------------------------
  function renderManche9Select(main) {
    main.appendChild(renderChampionBackBtn());
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mode Champion · Confirmation'));
    main.appendChild(el('h1', { class: 'page-title' }, '9 points gagnants'));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Pioche dans tous tes sujets visités. Bonne réponse = +1, mauvaise = -1. Premier à 9 (victoire) ou à -3 (défaite) termine la partie. Aucun chrono.'));
    const pool = buildGlobalQuestionPool({ onlyVisited: true });
    if (pool.length < 15) {
      main.appendChild(el('p', { class: 'champion-empty' },
        'Il te faut au moins une quinzaine de questions disponibles (donc plusieurs sujets visités). Continue à lire et reviens !'));
      return;
    }
    main.appendChild(el('p', { class: 'champion-info' },
      pool.length + ' questions tirées de tes sujets visités sont prêtes à être tirées au sort.'));
    const c = getChampion();
    const np = c.neufPoints || {};
    if (np.played > 0) {
      main.appendChild(el('p', { class: 'champion-info' },
        'Historique : ' + (np.wins || 0) + ' victoire' + (np.wins > 1 ? 's' : '') + ' sur ' + np.played + ' partie' + (np.played > 1 ? 's' : '') + '. Meilleure série de bonnes réponses : ' + (np.bestStreak || 0) + '.'));
    }
    main.appendChild(el('button', {
      class: 'btn',
      onclick: () => start9Points(pool)
    }, 'Démarrer la partie →'));
  }
  function start9Points(pool) {
    state.championSession = {
      manche: '9-points',
      phase: 'play',
      pool: pool.slice(),
      currentQ: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      finished: false
    };
    rerender();
  }

  // -----------------------------------------------------------------
  // MANCHE 4 : FACE-À-FACE
  // -----------------------------------------------------------------
  function renderMancheFaceSelect(main) {
    main.appendChild(renderChampionBackBtn());
    main.appendChild(el('span', { class: 'eyebrow' }, 'Mode Champion · Sélection'));
    main.appendChild(el('h1', { class: 'page-title' }, 'Face-à-face'));
    main.appendChild(el('p', { class: 'page-subtitle' },
      '12 questions sur un sujet. Ton score affiché côte à côte avec ton meilleur score précédent (fantôme). À toi de battre l\'ancien record.'));
    const visited = listVisitedSujets().filter(s => s.quiz.length >= 12);
    if (visited.length === 0) {
      main.appendChild(el('p', { class: 'champion-empty' },
        'Aucun sujet visité ne contient au moins 12 questions de quiz. Lis quelques sujets riches d\'abord.'));
      return;
    }
    const c = getChampion();
    const list = el('div', { class: 'champion-sujet-list' });
    visited.forEach(s => {
      const best = (c.faceAFace[s.meta.id] && c.faceAFace[s.meta.id].bestScore) || 0;
      const dom = (s.meta.domaines || ['Autre'])[0];
      const card = el('button', {
        class: 'champion-sujet-card' + (best > 0 ? ' is-record' : ''),
        style: { '--card-accent': domainColor(dom) },
        onclick: () => startFaceAFace(s)
      },
        el('span', { class: 'champion-sujet-domain' }, dom),
        el('span', { class: 'champion-sujet-title', html: htmlEscapeButKeepEm(s.meta.titre) }),
        el('span', { class: 'champion-sujet-stats' }, best > 0
          ? 'Record : ' + best + ' / 12'
          : 'Aucun record')
      );
      list.appendChild(card);
    });
    main.appendChild(list);
  }
  function startFaceAFace(sujet) {
    const questions = pickQuizFromSujet(sujet, 12);
    const c = getChampion();
    const prevBest = (c.faceAFace[sujet.meta.id] && c.faceAFace[sujet.meta.id].bestScore) || 0;
    state.championSession = {
      manche: 'face-a-face',
      phase: 'play',
      sujetId: sujet.meta.id,
      sujetTitre: sujet.meta.titre,
      questions: questions,
      currentQ: 0,
      score: 0,
      ghostScore: prevBest,
      ghostMax: 12
    };
    rerender();
  }

  // -----------------------------------------------------------------
  // PHASE PLAY — dispatch selon manche
  // -----------------------------------------------------------------
  function renderChampionPlay(main) {
    const sess = state.championSession;
    if (!sess) { renderChampionHub(main); return; }
    main.appendChild(renderChampionBackBtn());

    if (sess.manche === '4-a-la-suite') return renderPlay4ALaSuite(main, sess);
    if (sess.manche === 'finale')       return renderPlayFinale(main, sess);
    if (sess.manche === '9-points')     return renderPlay9Points(main, sess);
    if (sess.manche === 'face-a-face')  return renderPlayFaceAFace(main, sess);
  }

  // ---- Helper : rend une question avec un onAnswer custom ----
  // Réutilise les renderers existants (QCM, vrai-faux, etc.) en passant un
  // callback uniforme. Affiche le feedback et un bouton "suivante".
  function renderChampionQuestion(host, q, opts) {
    const type = q.type || 'qcm';
    const interactionHost = el('div', { class: 'quiz-interaction' });
    if (q.q) host.appendChild(el('div', { class: 'quiz-question champion-question' }, q.q));
    host.appendChild(interactionHost);
    const feedback = el('div', { class: 'quiz-feedback', style: { display: 'none' } });
    host.appendChild(feedback);

    let answered = false;
    function wrappedOnAnswer(isCorrect, isTimeout) {
      if (answered) return;   // une seule réponse par question (timeout vs clic)
      answered = true;
      // Neutralise l'interaction restante (boutons, inputs, selects)
      interactionHost.querySelectorAll('button, input, select').forEach(n => { n.disabled = true; });
      const msg = isTimeout ? 'Temps écoulé.' : (isCorrect ? 'Exact !' : 'Pas tout à fait.');
      const explic = (q.explication ? ' ' + md(q.explication).replace(/^<p>|<\/p>$/g, '') : '');
      feedback.innerHTML = '<strong>' + msg + '</strong>' + explic;
      feedback.style.display = 'block';
      if (opts.onAnswer) opts.onAnswer(isCorrect, isTimeout);
      // Bouton "suivante" : injecté par opts.afterFeedback si fourni
      if (opts.afterFeedback) {
        const wrap = el('div', { class: 'quiz-next-row' });
        opts.afterFeedback(wrap);
        feedback.appendChild(wrap);
      }
    }

    if (type === 'qcm')               renderQCMQuestion(interactionHost, q, wrappedOnAnswer);
    else if (type === 'vrai-faux')    renderVraiFauxQuestion(interactionHost, q, wrappedOnAnswer);
    else if (type === 'ordre-chrono') renderOrdreChronoQuestion(interactionHost, q, wrappedOnAnswer);
    else if (type === 'texte-a-trou') renderTexteATrouQuestion(interactionHost, q, wrappedOnAnswer);
    else if (type === 'associer')     renderAssocierQuestion(interactionHost, q, wrappedOnAnswer);
    else {
      interactionHost.appendChild(el('p', { class: 'block-error' }, 'Type de question inconnu.'));
      const skip = el('button', { class: 'btn', onclick: () => wrappedOnAnswer(false) }, 'Passer');
      interactionHost.appendChild(skip);
    }
    // forceAnswer : utilisé par les timers de manche pour clore la question
    // (feedback + bouton suivant) au lieu de la laisser cliquable.
    return { feedback: feedback, forceAnswer: (isCorrect, isTimeout) => wrappedOnAnswer(!!isCorrect, !!isTimeout) };
  }

  // ---- Manche 1 : Play 4 à la suite ----
  function renderPlay4ALaSuite(main, sess) {
    main.appendChild(el('span', { class: 'eyebrow' }, '4 à la suite · ' + String(sess.sujetTitre).replace(/<[^>]+>/g, '')));
    main.appendChild(el('h1', { class: 'page-title' }, 'Question ' + (sess.currentQ + 1) + ' / 4'));

    // Petit récap des résultats précédents (pastilles)
    const dots = el('div', { class: 'champion-progress-dots' });
    for (let i = 0; i < 4; i++) {
      const cls = i < sess.currentQ ? 'is-ok' : (i === sess.currentQ ? 'is-current' : '');
      dots.appendChild(el('span', { class: 'champion-dot ' + cls }));
    }
    main.appendChild(dots);

    const card = el('div', { class: 'quiz-card champion-play-card' });
    main.appendChild(card);

    // Timer
    const baseSecs = sess.timers[sess.currentQ];
    sess.timerLeft = baseSecs;
    const timerEl = el('div', { class: 'quiz-timer champion-timer' }, sess.timerLeft + ' s');
    card.appendChild(timerEl);
    if (sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; }
    let qHandle = null; // renseigné après renderChampionQuestion (ci-dessous)
    sess.timerId = setInterval(() => {
      sess.timerLeft--;
      if (timerEl) timerEl.textContent = sess.timerLeft + ' s';
      if (sess.timerLeft <= 3) timerEl.classList.add('quiz-timer-urgent');
      if (sess.timerLeft <= 0) {
        clearInterval(sess.timerId);
        sess.timerId = null;
        // Passe par le wrapper de la question : feedback « Temps écoulé »,
        // options désactivées et bouton « Voir le résultat » — avant, on
        // marquait juste failed=true et le joueur restait bloqué à 0 s.
        if (qHandle) qHandle.forceAnswer(false, true);
        else onAnsweredQ(false, true);
      }
    }, 1000);
    // Quitter la vue arrête le chrono (sinon il expirait sur un DOM détaché
    // et la manche était perdue silencieusement).
    onLeaveView(() => { if (sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; } });

    function onAnsweredQ(isCorrect, isTimeout) {
      if (sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; }
      if (isCorrect) sess.score++;
      else sess.failed = true;
    }

    const q = sess.questions[sess.currentQ];
    qHandle = renderChampionQuestion(card, q, {
      onAnswer: onAnsweredQ,
      afterFeedback: (wrap) => {
        if (sess.failed) {
          // Échec immédiat
          wrap.appendChild(el('button', {
            class: 'btn',
            onclick: () => {
              state.championSession.phase = 'result';
              rerender();
            }
          }, 'Voir le résultat →'));
        } else {
          const isLast = sess.currentQ >= 3;
          wrap.appendChild(el('button', {
            class: 'btn',
            onclick: () => {
              if (isLast) {
                state.championSession.phase = 'result';
              } else {
                sess.currentQ++;
              }
              rerender();
            }
          }, isLast ? 'Voir le résultat →' : 'Question suivante →'));
        }
      }
    });
  }

  // ---- Manche 2 : Play Finale 1 min ----
  function renderPlayFinale(main, sess) {
    main.appendChild(el('span', { class: 'eyebrow' }, 'Finale · ' + sess.domain));
    main.appendChild(el('h1', { class: 'page-title champion-score-h1' },
      'Score : ' + sess.score + ' pt' + (Math.abs(sess.score) > 1 ? 's' : '')));

    const card = el('div', { class: 'quiz-card champion-play-card' });
    main.appendChild(card);

    // Timer global (60s pour toute la finale), basé sur un horodatage de fin :
    // insensible au throttling des onglets cachés, et le temps continue de
    // courir si l'on quitte la vue (pas de pause gratuite). L'intervalle,
    // lui, est nettoyé à la navigation et recréé au retour.
    if (!sess.endTs) sess.endTs = Date.now() + (sess.timeLeft || 60) * 1000;
    const tickFinale = () => {
      sess.timeLeft = Math.max(0, Math.ceil((sess.endTs - Date.now()) / 1000));
      // `card` est recréé à chaque question (rerender) : on cherche dans
      // le document, sinon l'affichage se fige après la 1re question.
      const t = document.querySelector('.champion-play-card .champion-timer');
      if (t) t.textContent = sess.timeLeft + ' s';
      if (sess.timeLeft <= 10 && t) t.classList.add('quiz-timer-urgent');
      if (sess.timeLeft <= 0) {
        clearInterval(sess.timerId);
        sess.timerId = null;
        sess.finished = true;
        state.championSession.phase = 'result';
        rerender();
      }
    };
    if (!sess.timerId) {
      sess.timerId = setInterval(tickFinale, 250);
    }
    onLeaveView(() => { if (sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; } });
    // Si le temps a expiré pendant qu'on était ailleurs, on bascule tout de suite
    if (sess.endTs - Date.now() <= 0 && !sess.finished) {
      if (sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; }
      sess.finished = true;
      state.championSession.phase = 'result';
      setTimeout(rerender, 0);   // hors du rendu en cours
      return;
    }
    const timerEl = el('div', { class: 'quiz-timer champion-timer' },
      sess.timeLeft + ' s' + (sess.timeLeft <= 10 ? '' : ''));
    if (sess.timeLeft <= 10) timerEl.classList.add('quiz-timer-urgent');
    card.appendChild(timerEl);

    const q = sess.pool[sess.currentQ % sess.pool.length];
    // Source indicateur (sujet d'origine)
    if (q._sujet) {
      card.appendChild(el('div', { class: 'champion-q-source' },
        'Issue de : ' + String(q._sujet.titre).replace(/<[^>]+>/g, '')));
    }
    renderChampionQuestion(card, q, {
      onAnswer: (ok) => {
        sess.score += ok ? 1 : -1;
      },
      afterFeedback: (wrap) => {
        wrap.appendChild(el('button', {
          class: 'btn',
          onclick: () => {
            sess.currentQ++;
            // Si on a épuisé le pool, on continue à reshuffler
            if (sess.currentQ >= sess.pool.length) {
              sess.pool = shuffleInPlace(sess.pool.slice());
              sess.currentQ = 0;
            }
            rerender();
          }
        }, 'Question suivante →'));
      }
    });
  }

  // ---- Manche 3 : Play 9 points gagnants ----
  function renderPlay9Points(main, sess) {
    main.appendChild(el('span', { class: 'eyebrow' }, '9 points gagnants'));
    main.appendChild(el('h1', { class: 'page-title champion-score-h1' },
      'Score : ' + (sess.score >= 0 ? '+' : '') + sess.score));
    main.appendChild(el('p', { class: 'page-subtitle' },
      'Premier à 9 : victoire. Premier à -3 : défaite. Série en cours : ' + sess.streak + ' (record dans la partie : ' + sess.bestStreak + ').'));

    // Jauge
    const gauge = el('div', { class: 'champion-9-gauge' });
    for (let v = -3; v <= 9; v++) {
      const seg = el('span', { class: 'champion-9-seg' + (v === sess.score ? ' is-current' : '') }, String(v));
      gauge.appendChild(seg);
    }
    main.appendChild(gauge);

    const card = el('div', { class: 'quiz-card champion-play-card' });
    main.appendChild(card);

    const q = sess.pool[sess.currentQ % sess.pool.length];
    if (q._sujet) {
      card.appendChild(el('div', { class: 'champion-q-source' },
        'Issue de : ' + String(q._sujet.titre).replace(/<[^>]+>/g, '')));
    }
    renderChampionQuestion(card, q, {
      onAnswer: (ok) => {
        if (ok) {
          sess.score++;
          sess.streak++;
          if (sess.streak > sess.bestStreak) sess.bestStreak = sess.streak;
        } else {
          sess.score--;
          sess.streak = 0;
        }
      },
      afterFeedback: (wrap) => {
        const done = sess.score >= 9 || sess.score <= -3;
        wrap.appendChild(el('button', {
          class: 'btn',
          onclick: () => {
            if (done) {
              state.championSession.phase = 'result';
            } else {
              sess.currentQ++;
              if (sess.currentQ >= sess.pool.length) {
                sess.pool = shuffleInPlace(sess.pool.slice());
                sess.currentQ = 0;
              }
            }
            rerender();
          }
        }, done ? 'Voir le résultat →' : 'Question suivante →'));
      }
    });
  }

  // ---- Manche 4 : Play Face-à-face ----
  function renderPlayFaceAFace(main, sess) {
    main.appendChild(el('span', { class: 'eyebrow' }, 'Face-à-face · ' + String(sess.sujetTitre).replace(/<[^>]+>/g, '')));
    main.appendChild(el('h1', { class: 'page-title' }, 'Question ' + (sess.currentQ + 1) + ' / 12'));

    // Tableau de bord : toi vs fantôme
    const dash = el('div', { class: 'champion-face-dashboard' });
    dash.appendChild(el('div', { class: 'champion-face-me' },
      el('span', { class: 'champion-face-label' }, 'Toi'),
      el('span', { class: 'champion-face-score' }, String(sess.score))
    ));
    dash.appendChild(el('div', { class: 'champion-face-vs' }, 'vs'));
    // Fantôme : projection linéaire du score précédent sur 12
    const ghostNow = Math.round(sess.ghostScore * (sess.currentQ / 12));
    dash.appendChild(el('div', { class: 'champion-face-ghost' },
      el('span', { class: 'champion-face-label' }, 'Fantôme'),
      el('span', { class: 'champion-face-score' }, String(ghostNow) + ' / ' + sess.ghostScore)
    ));
    main.appendChild(dash);

    const card = el('div', { class: 'quiz-card champion-play-card' });
    main.appendChild(card);

    const q = sess.questions[sess.currentQ];
    renderChampionQuestion(card, q, {
      onAnswer: (ok) => { if (ok) sess.score++; },
      afterFeedback: (wrap) => {
        const isLast = sess.currentQ >= 11;
        wrap.appendChild(el('button', {
          class: 'btn',
          onclick: () => {
            if (isLast) {
              state.championSession.phase = 'result';
            } else {
              sess.currentQ++;
            }
            rerender();
          }
        }, isLast ? 'Voir le résultat →' : 'Question suivante →'));
      }
    });
  }

  // -----------------------------------------------------------------
  // PHASE RESULT
  // -----------------------------------------------------------------
  function renderChampionResult(main) {
    const sess = state.championSession;
    if (!sess) { renderChampionHub(main); return; }
    main.appendChild(renderChampionBackBtn());

    if (sess.manche === '4-a-la-suite') return renderResult4(main, sess);
    if (sess.manche === 'finale')       return renderResultFinale(main, sess);
    if (sess.manche === '9-points')     return renderResult9(main, sess);
    if (sess.manche === 'face-a-face')  return renderResultFace(main, sess);
  }

  function renderResult4(main, sess) {
    const success = !sess.failed && sess.score >= 4;
    // Enregistrement unique par partie : l'écran de résultat peut être
    // re-rendu (retour depuis une autre vue) sans re-compter la victoire.
    if (success && !sess._recorded) { sess._recorded = true; recordQuatreSuiteWin(sess.sujetId); }
    const titre = String(sess.sujetTitre).replace(/<[^>]+>/g, '');
    main.appendChild(el('span', { class: 'eyebrow' }, '4 à la suite · ' + titre));
    main.appendChild(el('h1', { class: 'page-title' },
      success ? '🏆 Champion de ' + titre + ' !' : 'Manche perdue'));
    main.appendChild(el('p', { class: 'champion-result-msg' }, success
      ? 'Tu as enchaîné les 4 questions sans erreur, dans le temps imparti. Belle maîtrise du sujet.'
      : 'Tu as échoué à la question ' + (sess.currentQ + 1) + ' / 4. Score final : ' + sess.score + ' / 4. Une seule chance par manche, mais tu peux retenter quand tu veux.'));
    const wins = (getChampion().quatreSuite[sess.sujetId] && getChampion().quatreSuite[sess.sujetId].wins) || 0;
    if (wins > 0) {
      main.appendChild(el('p', { class: 'champion-result-stats' },
        '★ Tu as gagné cette manche ' + wins + ' fois sur ce sujet.'));
    }
    main.appendChild(renderResultActions());
  }

  function renderResultFinale(main, sess) {
    if (!sess._recorded) {
      // Lire l'ancien record AVANT de l'enregistrer, sinon « Nouveau record »
      // s'affiche aussi à égalité.
      const prevBest = (getChampion().finale[sess.domain] && getChampion().finale[sess.domain].bestScore) || 0;
      sess._isRecord = sess.score > prevBest && sess.score > 0;
      sess._recorded = true;
      recordFinaleScore(sess.domain, Math.max(0, sess.score));
    }
    const isRecord = !!sess._isRecord;
    main.appendChild(el('span', { class: 'eyebrow' }, 'Finale · ' + sess.domain));
    main.appendChild(el('h1', { class: 'page-title' },
      isRecord && sess.score > 0 ? '🏆 Nouveau record !' : 'Finale terminée'));
    main.appendChild(el('p', { class: 'champion-result-msg' },
      'Score final : ' + sess.score + ' pt' + (Math.abs(sess.score) > 1 ? 's' : '') + ' en 60 secondes sur le domaine ' + sess.domain + '.'));
    main.appendChild(el('p', { class: 'champion-result-stats' },
      'Record actuel sur ce domaine : ' + Math.max(prevBest, sess.score) + ' pt' + (Math.max(prevBest, sess.score) > 1 ? 's' : '') + '.'));
    main.appendChild(renderResultActions());
  }

  function renderResult9(main, sess) {
    const won = sess.score >= 9;
    if (!sess._recorded) { sess._recorded = true; recordNeufPointsResult(won, sess.bestStreak); }
    main.appendChild(el('span', { class: 'eyebrow' }, '9 points gagnants'));
    main.appendChild(el('h1', { class: 'page-title' },
      won ? '🏆 Victoire !' : 'Défaite'));
    main.appendChild(el('p', { class: 'champion-result-msg' }, won
      ? 'Tu as atteint 9 points avant -3. Belle régularité.'
      : 'Tu es tombé à -3 points. Tu peux retenter dans la foulée.'));
    main.appendChild(el('p', { class: 'champion-result-stats' },
      'Score final : ' + (sess.score >= 0 ? '+' : '') + sess.score + ' · Meilleure série de la partie : ' + sess.bestStreak));
    const np = getChampion().neufPoints;
    main.appendChild(el('p', { class: 'champion-result-stats' },
      'Historique cumulé : ' + np.wins + ' victoire' + (np.wins > 1 ? 's' : '') + ' / ' + np.played + ' partie' + (np.played > 1 ? 's' : '') + ' · meilleure série toutes parties : ' + np.bestStreak));
    main.appendChild(renderResultActions());
  }

  function renderResultFace(main, sess) {
    const isRecord = sess.score > sess.ghostScore;
    if (!sess._recorded) { sess._recorded = true; recordFaceAFaceScore(sess.sujetId, sess.score); }
    const titre = String(sess.sujetTitre).replace(/<[^>]+>/g, '');
    main.appendChild(el('span', { class: 'eyebrow' }, 'Face-à-face · ' + titre));
    main.appendChild(el('h1', { class: 'page-title' },
      isRecord ? '🏆 Nouveau record !' : (sess.score === sess.ghostScore ? 'Égalité' : 'Tu n\'as pas battu ton record')));
    main.appendChild(el('p', { class: 'champion-result-msg' },
      'Score final : ' + sess.score + ' / 12 · Ancien record : ' + sess.ghostScore + ' / 12.'));
    const best = (getChampion().faceAFace[sess.sujetId] && getChampion().faceAFace[sess.sujetId].bestScore) || 0;
    main.appendChild(el('p', { class: 'champion-result-stats' },
      'Record actuel sur ce sujet : ' + best + ' / 12.'));
    main.appendChild(renderResultActions());
  }

  function renderResultActions() {
    const sess = state.championSession;
    const wrap = el('div', { class: 'champion-result-actions' });
    wrap.appendChild(el('button', {
      class: 'btn',
      onclick: () => {
        // Rejouer même manche : on garde le type, on repasse en sélection
        state.championSession = { manche: sess.manche, phase: 'select' };
        rerender();
      }
    }, 'Rejouer cette manche →'));
    wrap.appendChild(el('button', {
      class: 'btn btn-secondary',
      class: 'btn btn-secondary',
      onclick: () => {
        state.championSession = null;
        navigate('/champion');
      }
    }, 'Retour au hub Champion'));
    return wrap;
  }

  function renderChampionBackBtn() {
    return el('button', {
      class: 'btn btn-secondary champion-back-btn',
      onclick: () => {
        // Si on est en train de jouer, demander confirmation
        const sess = state.championSession;
        if (sess && sess.phase === 'play') {
          if (!confirm('Abandonner la manche en cours ?')) return;
        }
        if (sess && sess.timerId) { clearInterval(sess.timerId); sess.timerId = null; }
        state.championSession = null;
        rerender();
      }
    }, '← Retour au hub Champion');
  }

  // =================================================================
  // STARTUP
  // =================================================================

  CDS.start = function () {
    state.user = loadUserState();
    setupKeyboardShortcuts();
    setupTimerListeners();
    setupBackToTop();
    // Service Worker + manifest PWA. Activés seulement en HTTP(S) ; sur
    // file:// le manifest déclenche des erreurs CORS et le SW est interdit,
    // donc on ne pose ni l'un ni l'autre dans ce cas.
    if (location.protocol !== 'file:') {
      const manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = './manifest.json';
      document.head.appendChild(manifestLink);
      if ('serviceWorker' in navigator) {
        // Toast « nouvelle version » : quand un nouveau SW prend le contrôle
        // (skipWaiting + claim côté sw.js), la page en cours tient encore
        // l'ancien app.js alors que les sujets rechargés viendront de la
        // nouvelle version → on propose de recharger. Le flag évite le
        // toast au tout premier enregistrement (pas de contrôleur avant).
        const hadController = !!navigator.serviceWorker.controller;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!hadController) return;
          if (document.querySelector('.update-toast')) return;
          const toast = el('div', { class: 'achievement-toast update-toast', role: 'status' },
            el('div', { class: 'achievement-toast-eyebrow' }, 'Mise à jour'),
            el('div', { class: 'achievement-toast-label' }, '✦ Nouvelle version disponible'),
            el('div', { class: 'achievement-toast-desc' }, 'Recharge la page pour en profiter.'),
            el('div', { class: 'btn-row', style: { marginTop: '0.5rem' } },
              el('button', { class: 'btn', onclick: () => location.reload() }, 'Recharger'),
              el('button', { class: 'btn btn-secondary', onclick: () => toast.remove() }, 'Plus tard'))
          );
          document.body.appendChild(toast);
          requestAnimationFrame(() => toast.classList.add('is-visible'));
        });
        navigator.serviceWorker.register('./sw.js').catch(e => {
          console.warn('[CarnetDeSavoirs] Service Worker non enregistré :', e);
        });
      }
    }
    // Vérifie les achievements au démarrage (au cas où des conditions
    // se sont accomplies hors-ligne, ex. un streak qui a passé un palier)
    checkAchievements();
    rerender();
    // Petit hint discret pour découvrir les raccourcis
    console.log(
      '%c[Carnet de Savoirs] Raccourcis clavier : / (recherche) · b (bibliothèque) · 1-4 (onglets) · Esc (quitter mode lecture)',
      'color: #8a8298; font-style: italic'
    );
  };

})();
