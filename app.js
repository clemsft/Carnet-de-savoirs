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

  // =================================================================
  // STATE
  // =================================================================

  const state = {
    sujets: {},                   // id -> sujet data
    sujetsOrder: [],              // ordre d'enregistrement
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
    glossaire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'
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
      // Merge avec defaults au cas où
      const merged = Object.assign(defaultUserState(), parsed);
      migrateUserState(merged);
      return merged;
    } catch (e) {
      console.warn('Erreur lecture localStorage', e);
      return defaultUserState();
    }
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
      filters: { domain: null, search: '', state: null, tag: null },
      highlights: {},    // sujetId -> array of block indices marqués comme importants
      globalNotes: '',   // cahier libre transverse
      achievements: [],  // ids d'achievements débloqués
      goals: { timeMs: 30 * 60 * 1000, intensity: 10 }, // objectifs quotidiens
      spacedRep: {},     // sujetId -> { nextReview, interval, easeFactor, repetitions, lastReview }
      readingMode: false,// vrai = sidebar masquée + colonne élargie sur l'onglet Cours
      dailyActivity: {}, // 'YYYY-MM-DD' -> { visits, blocs, quiz } pour la heatmap
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
    const VALID_BLOCK_TYPES = ['texte', 'encadre', 'widget', 'html_libre'];
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

    return w;
  }

  // =================================================================
  // ROUTAGE (hash-based)
  // =================================================================

  function parseHash() {
    const h = (window.location.hash || '#/').replace(/^#/, '') || '/';
    const parts = h.split('/').filter(Boolean);
    if (parts.length === 0) return { view: 'bibliotheque' };
    if (parts[0] === 'sujet' && parts[1]) {
      const route = { view: 'sujet', id: decodeURIComponent(parts[1]), tab: parts[2] || 'resume' };
      // Cible de bloc optionnelle : #/sujet/{id}/cours/bloc-{N}
      if (parts[3] && parts[3].indexOf('bloc-') === 0) {
        const idx = parseInt(parts[3].slice(5), 10);
        if (Number.isInteger(idx) && idx >= 0) route.blockTarget = idx;
      }
      return route;
    }
    if (parts[0] === 'carte') return { view: 'carte' };
    if (parts[0] === 'profil') return { view: 'profil' };
    if (parts[0] === 'glossaire') return { view: 'glossaire' };
    if (parts[0] === 'quiz-mixte') return { view: 'quiz-mixte' };
    if (parts[0] === 'notes') return { view: 'notes' };
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
    // [[slug]] -> lien vers une fiche (si le sujet existe) ou marqueur grisé
    s = s.replace(/\[\[([a-z0-9-]+)\]\]/g, (_, slug) => {
      const target = state.sujets[slug];
      if (target && target.meta) {
        const label = String(target.meta.titre || slug).replace(/<[^>]+>/g, '');
        return `<a class="sujet-link" href="#/sujet/${encodeURIComponent(slug)}">${label}</a>`;
      }
      return `<span class="sujet-link sujet-link-broken" title="Sujet « ${slug} » non encore disponible dans le carnet">${slug}</span>`;
    });
    s = s.replace(/\[([^\]]+)\]\{accent\}/g, '<em class="term">$1</em>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Paragraphes (séparés par lignes vides)
    const paras = s.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    return paras.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
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
        navLink('bibliotheque', activeView, 'Bibliothèque', ICONS.library, '/'),
        navLink('carte', activeView, 'Carte globale', ICONS.map, '/carte'),
        navLink('glossaire', activeView, 'Glossaire', ICONS.glossaire, '/glossaire'),
        navLink('quiz-mixte', activeView, 'Quiz mixte', ICONS.quiz, '/quiz-mixte'),
        navLink('notes', activeView, 'Mes notes', ICONS.notes, '/notes'),
        navLink('profil', activeView, 'Mon profil', ICONS.profile, '/profil')
      ),
      el('div', { class: 'sidebar-footer', html: 'v1.0 — construit avec ✦ et Claude' })
    );

    const main = el('main', { class: 'main', id: 'main-content' });

    const root = document.getElementById('app');
    clear(root);
    root.appendChild(sidebar);
    root.appendChild(main);

    return main;
  }

  function navLink(viewId, activeView, label, iconHtml, path) {
    const isActive = (viewId === 'sujet' && activeView === 'sujet') || viewId === activeView;
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

  function renderBibliotheque(main) {
    const sujets = state.sujetsOrder.map(id => state.sujets[id]);

    // Domaines uniques pour les filtres
    const allDomains = [...new Set(sujets.flatMap(s => s.meta.domaines || []))].sort();

    // Filtres actuels
    const f = state.user.filters;

    main.appendChild(el('span', { class: 'eyebrow' }, 'Bibliothèque'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Tous les <em>sujets</em>' }));
    main.appendChild(el('p', { class: 'page-subtitle' },
      sujets.length === 0
        ? 'Aucun sujet pour l\'instant. Discutez avec Claude pour créer votre premier !'
        : `${sujets.length} sujet${sujets.length > 1 ? 's' : ''} dans votre carnet — sélectionnez-en un pour reprendre l'apprentissage.`
    ));

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
      if (f.search && f.search.trim()) {
        const q = normalizeForSearch(f.search.trim());
        // Recherche plein texte : titre, résumé, tags, points-clés, contenu
        // des blocs de cours, paramètres de widgets, carte mentale, quiz.
        // Insensible à la casse ET aux accents.
        filtered = filtered.filter(s => searchableText(s).includes(q));
      }

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
      // Résumé
      el('p', { class: 'sujet-card-summary' }, sujet.resume || ''),
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
      el('p', { class: 'page-subtitle', style: { marginBottom: '0' } }, sujet.resume || ''),
      el('div', { class: 'sujet-meta-row' },
        el('span', { class: 'difficulty' },
          ...[1, 2, 3].map(i => el('span', { class: 'diff-dot' + (i <= (meta.difficulte || 1) ? ' on' : '') }))
        ),
        el('span', null, '· ' + (meta.difficulte === 1 ? 'Niveau initiation' : meta.difficulte === 2 ? 'Niveau intermédiaire' : 'Niveau avancé')),
        meta.duree_estimee_min && el('span', null, '· ' + meta.duree_estimee_min + ' min'),
        meta.date_maj && el('span', null, '· maj ' + formatDate(meta.date_maj))
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
  }

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
      let prev = new Date(dates[i]);
      current = 1; i--;
      while (i >= 0) {
        const d = new Date(dates[i]);
        const diff = Math.round((prev - d) / 86400000);
        if (diff === 1) { current++; prev = d; i--; }
        else break;
      }
    }

    // Meilleur streak historique
    let best = 0, run = 1;
    for (let i = 1; i < dates.length; i++) {
      const diff = Math.round((new Date(dates[i]) - new Date(dates[i - 1])) / 86400000);
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
    { id: 'cartographe',   label: 'Cartographe',        desc: '30 termes ou plus indexés dans le glossaire.',
      check: () => {
        const sujets = state.sujetsOrder.map(id => state.sujets[id]);
        return Object.keys(extractGlossaryTerms(sujets)).length >= 30;
      } },
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
    const last = new Date(dates[0]);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    last.setHours(0, 0, 0, 0);
    return Math.round((today - last) / 86400000);
  }

  // =================================================================
  // TAB: RÉSUMÉ
  // =================================================================

  function renderTabResume(container, sujet) {
    container.appendChild(el('p', { class: 'lead' }, sujet.resume || ''));

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
      state.user.notes[sujet.meta.id] = textarea.value;
      status.textContent = 'Saisie en cours…';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        saveUserState();
        status.textContent = 'Sauvegardé · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      }, 600);
    });
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
    function close() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('overlay-active');
    }

    function onKey(e) {
      if (e.key === 'Escape') { close(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
      else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { next(); e.preventDefault(); }
      else if (e.key === 'PageUp') { prev(); e.preventDefault(); }
    }

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
    document.addEventListener('keydown', onKey);

    document.body.classList.add('overlay-active');
    document.body.appendChild(overlay);
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
    function next() { if (idx < points.length - 1) { idx++; revealed = false; update(); } }
    function prev() { if (idx > 0) { idx--; revealed = false; update(); } }
    function close() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('overlay-active');
    }

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
    document.addEventListener('keydown', onKey);

    document.body.classList.add('overlay-active');
    document.body.appendChild(overlay);
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
      }
    });

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
    const DWELL_MS = 600;
    const dwellTimers = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const block = entry.target;
        const idx = parseInt(block.dataset.blockIdx, 10);
        if (seen.has(idx)) return;

        const small = block.offsetHeight < window.innerHeight * 0.5;
        const visibleEnough = entry.isIntersecting &&
          (small ? entry.intersectionRatio >= 0.95 : entry.intersectionRatio >= 0.5);

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
    }, { threshold: [0.5, 0.95] });

    blockNodes.forEach(n => observer.observe(n));
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
      default:
        console.warn('Type de bloc inconnu:', block.type);
        return null;
    }
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
    */
    SelecteurValeurs(params) {
      const opts = params.options || [];
      let active = params.indexInitial || 0;
      const value = el('span', { class: 'w-value' });
      const desc = el('span', { class: 'w-desc' });
      const buttons = el('div', { class: 'w-selector-buttons' });

      function update(i) {
        active = i;
        const o = opts[i];
        Array.from(buttons.children).forEach((b, j) => b.classList.toggle('active', j === i));
        const v = o.valeur;
        const formatted = (typeof v === 'number')
          ? (v >= 1000 ? v.toLocaleString('fr-FR').replace(/,/g, ' ') : String(v).replace('.', ','))
          : v;
        value.textContent = formatted + (params.unite ? ' ' + params.unite : '');
        desc.textContent = o.description || '';
      }

      opts.forEach((o, i) => {
        const b = el('button', { onclick: () => update(i) }, o.label);
        buttons.appendChild(b);
      });

      const wrap = el('div', { class: 'w-selector' },
        buttons,
        el('div', { class: 'w-selector-output' }, value, desc)
      );

      update(active);
      return wrap;
    },

    /* ----- CurseurParametrique -----
       params = {
         label: "Masse de l'étoile",
         min, max, step, valeurInitiale,
         unite: "M☉",
         seuils: [
           { jusqua: 8, titre: "...", description: "...", couleur: "#5b8def" },
           { jusqua: 25, titre: "...", description: "...", couleur: "#ffb86c" },
           { jusqua: Infinity, titre: "...", description: "...", couleur: "#ff6b35" }
         ],
         degradePiste: "linear-gradient(...)"  // optionnel
       }
    */
    CurseurParametrique(params) {
      const min = params.min ?? 0;
      const max = params.max ?? 100;
      const step = params.step ?? 1;
      const init = params.valeurInitiale ?? min;
      const seuils = params.seuils || [];

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

      const resultTitle = el('h4');
      const resultDesc = el('p');
      const result = el('div', { class: 'w-slider-result' }, resultTitle, resultDesc);

      function update() {
        const v = parseFloat(slider.value);
        const formatted = Number.isInteger(step) ? v.toFixed(0) : v.toFixed(1);
        valueLabel.textContent = formatted + (params.unite ? ' ' + params.unite : '');
        const seuil = seuils.find(s => v < s.jusqua) || seuils[seuils.length - 1];
        if (seuil) {
          resultTitle.textContent = seuil.titre || '';
          resultDesc.textContent = seuil.description || '';
          if (seuil.couleur) {
            result.style.setProperty('--w-result-color', seuil.couleur);
          }
        }
      }

      slider.addEventListener('input', update);
      update();

      return el('div', null, labelRow, slider, result);
    },

    /* ----- GrilleCartes -----
       params = {
         cartes: [{ tag, titre, description }, ...]
       }
    */
    GrilleCartes(params) {
      return el('div', { class: 'w-grid' },
        ...(params.cartes || []).map(c =>
          el('div', { class: 'w-grid-card' },
            c.tag && el('span', { class: 'tag' }, c.tag),
            el('h4', null, c.titre || ''),
            el('p', null, c.description || '')
          )
        )
      );
    },

    /* ----- ListeMethodes -----
       params = {
         methodes: [{ titre, description }, ...]
       }
    */
    ListeMethodes(params) {
      const numerotation = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.', 'vii.', 'viii.'];
      return el('div', null,
        ...(params.methodes || []).map((m, i) =>
          el('div', { class: 'w-method' },
            el('div', { class: 'w-method-num' }, numerotation[i] || (i + 1) + '.'),
            el('div', { class: 'w-method-content' },
              el('h4', null, m.titre || ''),
              el('p', { html: md(m.description || '').replace(/^<p>|<\/p>$/g, '') })
            )
          )
        )
      );
    },

    /* ----- Frise (timeline chronologique verticale) -----
       params = {
         evenements: [
           { date: '1905', titre: 'Relativité restreinte', description: '...' },
           { date: '1915', titre: 'Relativité générale', description: '...' }
         ]
       }
    */
    Frise(params) {
      const events = params.evenements || [];
      const wrap = el('div', { class: 'w-frise' });
      events.forEach(ev => {
        wrap.appendChild(el('div', { class: 'w-frise-item' },
          el('div', { class: 'w-frise-marker' }),
          el('div', { class: 'w-frise-content' },
            ev.date ? el('div', { class: 'w-frise-date' }, ev.date) : null,
            ev.titre ? el('div', { class: 'w-frise-titre' }, ev.titre) : null,
            ev.description ? el('div', {
              class: 'w-frise-desc',
              html: md(ev.description).replace(/^<p>|<\/p>$/g, '')
            }) : null
          )
        ));
      });
      return wrap;
    },

    /* ----- Equation (rendu LaTeX via KaTeX, chargée via CDN) -----
       params = {
         tex: 'E = mc^2',
         legende: '...',         // [optionnel] légende sous l'équation
         affichage: 'block'      // 'block' (défaut, gros) ou 'inline'
       }
    */
    Equation(params) {
      const wrap = el('div', { class: 'w-equation' });
      const body = el('div', { class: 'w-equation-body' });
      const tex = String(params.tex || '');
      if (typeof window.katex === 'undefined') {
        body.textContent = tex;
        wrap.appendChild(body);
        wrap.appendChild(el('p', { class: 'block-error', style: { fontSize: '0.82rem', marginTop: '0.5rem', textAlign: 'left' } },
          'KaTeX non chargé — vérifie ta connexion à internet pour le rendu LaTeX.'));
      } else {
        try {
          window.katex.render(tex, body, {
            displayMode: params.affichage !== 'inline',
            throwOnError: false,
            errorColor: '#fb7185',
            strict: 'ignore'
          });
        } catch (e) {
          body.textContent = tex;
        }
        wrap.appendChild(body);
      }
      if (params.legende) {
        wrap.appendChild(el('div', { class: 'w-equation-legend' }, params.legende));
      }
      return wrap;
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
    clear(quizCard);
    const sess = state.quizSession;
    if (!sess) return;

    if (sess.currentQ >= sess.questions.length) {
      if (sess.isMixed) renderMixedQuizFinal(quizCard);
      else if (sess.mode === 'revision') renderRevisionFinal(quizCard);
      else if (sess.mode === 'quotidien') renderDailyQuizFinal(quizCard);
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
      timerId = setInterval(() => {
        sess._timerLeft--;
        if (timerEl) timerEl.textContent = sess._timerLeft + ' s';
        if (sess._timerLeft <= 5 && timerEl) timerEl.classList.add('quiz-timer-urgent');
        if (sess._timerLeft <= 0) {
          clearInterval(timerId);
          timerId = null;
          onAnswer(false, true); // timeout
        }
      }, 1000);
    }

    // Callback uniforme après réponse, peu importe le type
    function onAnswer(isCorrect, isTimeout) {
      // Arrête le timer du défi si présent
      if (timerId) { clearInterval(timerId); timerId = null; }
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
      feedback.innerHTML = '<strong>' + msg + '</strong> ' + (q.explication || '');
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
          if (!ok) b.input.setAttribute('data-expected', b.expected);
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

    // Save
    const prev = state.user.quizScores[sujet.meta.id] || { best: 0, total };
    const isNewBest = score > prev.best;
    state.user.quizScores[sujet.meta.id] = {
      best: Math.max(prev.best, score),
      total,
      attempts: [...(prev.attempts || []), { score, date: new Date().toISOString() }].slice(-10)
    };
    saveUserState();
    recordActivity('quiz', sujet.meta.id);
    updateSpacedRepetition(sujet.meta.id, score, total);

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
      'Architecture mentale du sujet. Survole un nœud pour voir sa description, clique sur un nœud avec des enfants pour zoomer dedans.'));

    const wrap = el('div', { class: 'mindmap-wrap' });
    const breadcrumb = el('div', { class: 'mm-breadcrumb' });
    const svgHost = el('div', { class: 'mm-svg-host' });
    const card = el('div', { class: 'mm-card' });
    const cardLabel = el('h4', { class: 'mm-card-label' });
    const cardDesc = el('div', { class: 'mm-card-desc' });
    card.appendChild(cardLabel);
    card.appendChild(cardDesc);
    wrap.appendChild(breadcrumb);
    wrap.appendChild(svgHost);
    wrap.appendChild(card);
    container.appendChild(wrap);

    // ---- Constantes layout ----
    const W = 960, H = 720;
    const cx = W / 2, cy = H / 2;
    const levelRadii = [0, 230, 400, 480, 530];

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

      // Insère le SVG dans son host (remplace le précédent)
      svgHost.innerHTML = `<svg class="mindmap-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${svgInner}</svg>`;
      const svgEl = svgHost.querySelector('.mindmap-svg');

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
      if (!pinnedId) return;
      pinnedId = null;
      card.classList.remove('is-visible');
      const svgEl = svgHost.querySelector('.mindmap-svg');
      if (svgEl) {
        svgEl.classList.remove('is-hovering');
        svgEl.querySelectorAll('.is-active').forEach(elem => elem.classList.remove('is-active'));
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

    const W = 960, H = 720, cx = W / 2, cy = H / 2;
    const nodes = sujets.map((s, i) => {
      const angle = (i / sujets.length) * Math.PI * 2;
      const labelClean = String(s.meta.titre).replace(/<[^>]+>/g, '');
      return {
        id: s.meta.id,
        label: labelClean,
        labelLower: labelClean.toLowerCase(),
        shortLabel: labelClean.length > 28 ? labelClean.slice(0, 27) + '…' : labelClean,
        resume: s.resume || '',
        domains: s.meta.domaines || ['Autre'],
        domain: (s.meta.domaines || ['Autre'])[0],
        timeMs: timeById[s.meta.id] || 0,
        x: cx + Math.cos(angle) * 220,
        y: cy + Math.sin(angle) * 220,
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
      const re = /\[\[([a-z0-9-]+)\]\]/g;
      // Dédoublonnage AU NIVEAU DU SUJET : si un même slug est cité plusieurs
      // fois dans le même bloc (par ex. dans plusieurs champs d'un widget),
      // on n'enregistre qu'une seule citation pour ce couple (bloc, target).
      const seenInSujet = new Set();
      function makeSnippet(text, target) {
        const marker = '[[' + target + ']]';
        const idx = text.indexOf(marker);
        if (idx < 0) return '';
        const radius = 110;
        let start = Math.max(0, idx - radius);
        let end = Math.min(text.length, idx + marker.length + radius);
        // Recale aux frontières de mot pour éviter les coupures au milieu
        if (start > 0) {
          const sp = text.indexOf(' ', start);
          if (sp >= 0 && sp < idx) start = sp + 1;
        }
        if (end < text.length) {
          const sp = text.lastIndexOf(' ', end);
          if (sp > idx + marker.length) end = sp;
        }
        let snip = text.slice(start, end);
        // Nettoyage léger : [[slug]] → "slug lisible", retire **, *, `
        snip = snip
          .replace(/\[\[([a-z0-9-]+)\]\]/g, (_, sl) => sl.replace(/-/g, ' '))
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

    // ---- Simulation force-directed ----
    // Ajout d'une force de cohésion par domaine : les nœuds d'un même
    // domaine s'attirent vers leur centre de gravité, ce qui crée
    // visuellement des clusters distincts.
    const ITER = 380;
    const REPULSION = 18000;
    const ATTRACTION = 0.022;
    const CENTER_FORCE = 0.0014;
    const DOMAIN_COHESION = 0.020;
    const DAMPING = 0.86;
    const MIN_DIST = 100;

    // Pré-calculer la liste des domaines et l'appartenance des nœuds
    const nodesByDomain = {};
    nodes.forEach(n => {
      if (!nodesByDomain[n.domain]) nodesByDomain[n.domain] = [];
      nodesByDomain[n.domain].push(n);
    });
    // On ne fait du clustering que pour les domaines avec ≥ 2 nœuds
    const clusterDomains = Object.keys(nodesByDomain).filter(d => nodesByDomain[d].length >= 2);

    for (let it = 0; it < ITER; it++) {
      nodes.forEach(n => { n.fx = 0; n.fy = 0; });
      // Répulsion + plancher de distance minimale
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x, dy = nodes[j].y - nodes[i].y;
          const d2 = dx * dx + dy * dy + 0.01;
          const d = Math.sqrt(d2);
          let f = REPULSION / d2;
          if (d < MIN_DIST) f += (MIN_DIST - d) * 0.6;
          const fx = (dx / d) * f, fy = (dy / d) * f;
          nodes[i].fx -= fx; nodes[i].fy -= fy;
          nodes[j].fx += fx; nodes[j].fy += fy;
        }
      }
      // Attraction le long des arêtes
      edges.forEach(e => {
        const a = nodeById[e.from], b = nodeById[e.to];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy + 0.01);
        const f = ATTRACTION * d * (e.weight || 1);
        a.fx += (dx / d) * f; a.fy += (dy / d) * f;
        b.fx -= (dx / d) * f; b.fy -= (dy / d) * f;
      });
      // Cohésion par domaine : chaque nœud est attiré vers le centre de gravité
      // de son domaine principal. Effet : les clusters thématiques se forment.
      clusterDomains.forEach(domain => {
        const members = nodesByDomain[domain];
        let mx = 0, my = 0;
        members.forEach(m => { mx += m.x; my += m.y; });
        mx /= members.length; my /= members.length;
        members.forEach(m => {
          m.fx += (mx - m.x) * DOMAIN_COHESION;
          m.fy += (my - m.y) * DOMAIN_COHESION;
        });
      });
      // Centrage doux
      nodes.forEach(n => {
        n.fx += (cx - n.x) * CENTER_FORCE;
        n.fy += (cy - n.y) * CENTER_FORCE;
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
    main.appendChild(el('div', { class: 'globe-toolbar' }, search, domSel, isolatedToggle, weakEdgesToggle));

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

    // ---- Bulles de cluster : aura floue colorée derrière chaque domaine
    // qui regroupe au moins 2 sujets. Donne une lecture immédiate des
    // "constellations" thématiques sans saturer l'image. ----
    let bubbles = '';
    clusterDomains.forEach(domain => {
      const members = nodesByDomain[domain];
      if (members.length < 2) return;
      let mx = 0, my = 0;
      members.forEach(m => { mx += m.x; my += m.y; });
      mx /= members.length; my /= members.length;
      let maxR = 0;
      members.forEach(m => {
        const dxm = m.x - mx, dym = m.y - my;
        const dd = Math.sqrt(dxm * dxm + dym * dym);
        if (dd > maxR) maxR = dd;
      });
      const radius = maxR + 55;
      const fill = domainColor(domain);
      bubbles += `<circle class="globe-fd-cluster" cx="${mx.toFixed(1)}" cy="${my.toFixed(1)}" r="${radius.toFixed(1)}" fill="${fill}"/>`;
    });
    svgInner += `<g class="globe-fd-clusters" aria-hidden="true">${bubbles}</g>`;

    // ---- Arêtes : courbes de Bézier quadratiques pour un rendu organique ----
    // Les longues arêtes (cross-cluster) sont davantage incurvées vers
    // l'extérieur pour éviter de saturer le centre de la carte.
    const edgeCenterX = cx, edgeCenterY = cy;
    edges.forEach(e => {
      const a = nodeById[e.from], b = nodeById[e.to];
      // Arêtes très discrètes au repos — c'est le focus qui les fait ressortir
      const opacity = Math.min(0.32, 0.08 + (e.weight || 1) * 0.07);
      const width = 0.8 + Math.min(2.2, (e.weight || 1) * 0.5);
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      // Décalage perpendiculaire, plus prononcé pour les longues arêtes
      const off = Math.min(70, len * 0.18);
      // Orientation : on courbe vers l'extérieur (opposé au centre de la carte)
      // pour que les arêtes longues "contournent" le cœur du graphe.
      let nx = -dy / len, ny = dx / len; // normale perpendiculaire
      const outward = (mx - edgeCenterX) * nx + (my - edgeCenterY) * ny;
      if (outward < 0) { nx = -nx; ny = -ny; }
      const ccx = (mx + nx * off).toFixed(1);
      const ccy = (my + ny * off).toFixed(1);
      const d = `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${ccx} ${ccy} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      const weakClass = (e.weight || 1) <= 1 ? ' is-weak' : '';
      svgInner += `<path class="globe-fd-edge${weakClass}" data-from="${attrEscape(e.from)}" data-to="${attrEscape(e.to)}" d="${d}" stroke-width="${width}" opacity="${opacity}" fill="none"/>`;
    });

    // ---- Nœuds : halo + cercle + label ----
    nodes.forEach(n => {
      const color = domainColor(n.domain);
      const r = 8 + Math.min(14, Math.sqrt(Math.max(0, n.timeMs) / 60000));
      const isIsolated = neighbors[n.id].size === 0;
      const halfW = n.lblW / 2;
      const tx = n.lblAnchor === 'start' ? n.lblBX - halfW
               : n.lblAnchor === 'end'   ? n.lblBX + halfW
               : n.lblBX;
      const ty = n.lblBY + 4.5;
      svgInner += `<g class="globe-fd-node${isIsolated ? ' is-isolated' : ''}" data-id="${attrEscape(n.id)}" data-domain="${attrEscape(n.domain)}" style="color: ${color}">
        <circle class="globe-fd-halo" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${(r * 1.9).toFixed(1)}" fill="${color}"/>
        <a href="#/sujet/${encodeURIComponent(n.id)}">
          <circle class="globe-fd-dot" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${r.toFixed(1)}" fill="${color}" stroke="${color}"/>
          <text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="${n.lblAnchor}" class="globe-fd-label">${attrEscape(n.shortLabel)}</text>
        </a>
      </g>`;
    });

    const wrap = el('div', { class: 'globe-fd-wrap' });
    // Mode "weak-hidden" actif par défaut : les arêtes de poids 1 sont
    // masquées pour réduire le bruit visuel.
    wrap.innerHTML = `<svg class="globe-fd-svg weak-hidden" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${svgInner}</svg>`;
    main.appendChild(wrap);

    // ---- Panneau d'info "ce qui relie ces sujets" ----
    const infoDefault = el('div', { class: 'globe-info-default' },
      'Survole un sujet sur la carte — ce panneau affichera ses voisins et ce qui les relie : tags partagés, citation [[slug]] dans le cours, ou lien explicite déclaré dans le sujet.');
    const infoTitle = el('h3', { class: 'globe-info-title' });
    const infoSubtitle = el('p', { class: 'globe-info-subtitle' });
    const infoList = el('ul', { class: 'globe-info-list' });
    const infoFocused = el('div', { class: 'globe-info-focused' }, infoTitle, infoSubtitle, infoList);
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

    nodeEls.forEach(g => {
      const id = g.getAttribute('data-id');
      g.addEventListener('mouseenter', () => { highlight(id); updateInfoPanel(id); });
      g.addEventListener('mouseleave', () => highlight(null));
      g.addEventListener('focusin', () => { highlight(id); updateInfoPanel(id); });
      g.addEventListener('focusout', () => highlight(null));
    });

    search.addEventListener('input', applyFilters);
    domSel.addEventListener('change', applyFilters);
    cb.addEventListener('change', applyFilters);
    // Logique inverse : coché = on retire "weak-hidden" pour afficher les
    // arêtes de poids 1 (un seul tag partagé, généralement du bruit).
    cbWeakEdges.addEventListener('change', () => {
      svgEl.classList.toggle('weak-hidden', !cbWeakEdges.checked);
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
  function buildQuestionPool() {
    const all = [];
    state.sujetsOrder.forEach(id => {
      const sujet = state.sujets[id];
      if (Array.isArray(sujet.quiz)) {
        sujet.quiz.forEach((q, qIdx) => {
          all.push(Object.assign({}, q, {
            _sujet: { id: id, titre: sujet.meta.titre },
            _qIdx: qIdx
          }));
        });
      }
    });
    return all;
  }

  function startMixedQuiz(count) {
    const all = buildQuestionPool();
    if (all.length === 0) return false;
    shuffleArray(all);
    const picked = all.slice(0, Math.min(count, all.length));
    state.quizSession = {
      sujetId: '__mixte__',
      currentQ: 0,
      score: 0,
      questions: picked,
      isMixed: true,
      mode: 'mixte'
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
      'Tirage au sort dans toute la bibliothèque. Choisis ta longueur.'));
    const mixteBtns = el('div', { class: 'quiz-mode-btn-row' });
    [['5 questions', 5], ['10 questions', 10], ['20 questions', 20]].forEach(([label, n]) => {
      if (totalQ < n && n !== 5) return;
      mixteBtns.appendChild(el('button', {
        class: 'btn btn-secondary',
        onclick: () => { startMixedQuiz(Math.min(n, totalQ)); rerender(); }
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
    recordActivity('quiz', null);
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
        el('a', { class: 'btn btn-secondary', href: '#/quiz-mixte' }, 'Retour au hub')
      )
    ));
  }

  // Écran final du Quiz du jour
  function renderDailyQuizFinal(quizCard) {
    const sess = state.quizSession;
    const total = sess.questions.length;
    const score = sess.score;
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
        el('a', { class: 'btn btn-secondary', href: '#/quiz-mixte' }, 'Retour au hub')
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

    recordActivity('quiz', null);
    checkAchievements();

    clear(quizCard);
    quizCard.appendChild(el('div', { class: 'quiz-final' },
      el('div', { class: 'score' }, score + ' / ' + total + (isDefi && bonus > 0 ? ' (+' + bonus + ' bonus)' : '')),
      el('div', { class: 'verdict' }, verdict),
      isDefi && bonus > 0 ? el('div', { class: 'best-score' }, 'Score total avec bonus : ' + (score + bonus)) : null,
      el('div', { class: 'btn-row' },
        el('button', {
          class: 'btn',
          onclick: () => {
            state.quizSession = null;
            if (isDefi) startChallengeQuiz(total); else startMixedQuiz(total);
            rerender();
          }
        }, 'Recommencer'),
        el('a', { class: 'btn btn-secondary', href: '#/quiz-mixte' }, 'Retour au hub')
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
      'Cahier transverse pour les idées qui ne s\'attachent à aucun sujet précis : fil rouge, brouillons, références à creuser. Sauvegarde automatique.'));

    const notes = state.user.globalNotes || '';
    const status = el('div', { class: 'notes-status' },
      notes ? 'Sauvegardé' : 'Tes notes seront sauvegardées automatiquement.');
    const textarea = el('textarea', {
      class: 'notes-area',
      placeholder: 'Tes pensées libres, idées qui traversent plusieurs sujets, projets futurs…',
      style: { minHeight: '60vh', fontSize: '1rem' }
    });
    textarea.value = notes;
    let saveTimer = null;
    textarea.addEventListener('input', () => {
      state.user.globalNotes = textarea.value;
      status.textContent = 'Saisie en cours…';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        saveUserState();
        status.textContent = 'Sauvegardé · ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      }, 600);
    });
    main.appendChild(textarea);
    main.appendChild(status);
  }

  // =================================================================
  // VIEW: GLOSSAIRE GLOBAL
  // =================================================================
  // Index transverse de tous les [terme]{accent} apparaissant dans
  // n'importe quel sujet (points-clés, contenu_md, descriptions de
  // widgets, descriptions de noeuds de carte mentale).

  function extractGlossaryTerms(sujets) {
    const map = {}; // norm -> { display, sources: [{id, title}] }
    sujets.forEach(sujet => {
      const seenForSujet = new Set();
      function visit(text) {
        if (!text) return;
        const re = /\[([^\]]+)\]\{accent\}/g;
        let m;
        while ((m = re.exec(text)) !== null) {
          const term = m[1];
          const norm = normalizeForSearch(term);
          if (!norm) continue;
          if (!map[norm]) map[norm] = { display: term, sources: [] };
          if (!seenForSujet.has(norm)) {
            seenForSujet.add(norm);
            map[norm].sources.push({ id: sujet.meta.id, title: sujet.meta.titre });
          }
        }
      }
      if (Array.isArray(sujet.points_cles)) sujet.points_cles.forEach(visit);
      if (Array.isArray(sujet.cours)) {
        sujet.cours.forEach(b => {
          if (!b) return;
          if (b.contenu_md) visit(b.contenu_md);
          const p = b.params;
          if (p) {
            (p.options  || []).forEach(o  => o  && visit(o.description));
            (p.seuils   || []).forEach(s  => s  && visit(s.description));
            (p.cartes   || []).forEach(c  => c  && visit(c.description));
            (p.methodes || []).forEach(me => me && visit(me.description));
          }
        });
      }
      if (sujet.carte_mentale && Array.isArray(sujet.carte_mentale.noeuds)) {
        sujet.carte_mentale.noeuds.forEach(n => n && visit(n.description));
      }
    });
    return map;
  }

  function renderGlossaire(main) {
    main.appendChild(el('span', { class: 'eyebrow' }, 'Index transverse'));
    main.appendChild(el('h1', { class: 'page-title', html: 'Glossaire <em>global</em>' }));

    const sujets = state.sujetsOrder.map(id => state.sujets[id]);
    const terms = extractGlossaryTerms(sujets);
    const keys = Object.keys(terms).sort((a, b) => a.localeCompare(b, 'fr'));

    if (keys.length === 0) {
      main.appendChild(el('p', { class: 'lead' },
        'Aucun terme indexé pour l\'instant. Les mots mis en valeur avec la syntaxe [mot]{accent} dans tes sujets apparaîtront ici, regroupés par première lettre.'));
      return;
    }

    main.appendChild(el('p', { class: 'page-subtitle' },
      keys.length + ' terme' + (keys.length > 1 ? 's' : '') +
      ' indexé' + (keys.length > 1 ? 's' : '') +
      ', extrait' + (keys.length > 1 ? 's' : '') +
      ' des concepts mis en valeur dans tes contenus.'));

    // Regroupe par première lettre (avec normalisation pour les accents)
    const byLetter = {};
    keys.forEach(k => {
      const letter = (k.charAt(0) || '#').toUpperCase();
      const safe = /[A-Z]/.test(letter) ? letter : '#';
      if (!byLetter[safe]) byLetter[safe] = [];
      byLetter[safe].push(k);
    });
    const letters = Object.keys(byLetter).sort();

    // Ancres alphabétiques en haut. On utilise onclick + scrollIntoView au
    // lieu d'un vrai href : le routing étant hash-based, naviguer vers
    // `#glossaire-letter-X` casserait la vue (parseHash ne reconnaîtrait
    // pas la route). On garde quand même href pour l'accessibilité.
    main.appendChild(el('div', { class: 'glossaire-anchors' },
      ...letters.map(L => el('a', {
        class: 'glossaire-anchor',
        href: '#/glossaire',
        'data-letter': L,
        onclick: (e) => {
          e.preventDefault();
          const target = document.getElementById('glossaire-letter-' + L);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, L))
    ));

    letters.forEach(L => {
      const section = el('section', { class: 'glossaire-section', id: 'glossaire-letter-' + L },
        el('h3', { class: 'glossaire-letter' }, L)
      );
      byLetter[L].forEach(key => {
        const t = terms[key];
        section.appendChild(el('div', { class: 'glossaire-entry' },
          el('span', { class: 'glossaire-term' }, t.display),
          el('div', { class: 'glossaire-sources' },
            ...t.sources.map(src => el('a', {
              class: 'glossaire-source',
              href: '#/sujet/' + encodeURIComponent(src.id),
              html: htmlEscapeButKeepEm(src.title)
            }))
          )
        ));
      });
      main.appendChild(section);
    });
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

    main.appendChild(el('div', { class: 'stats-grid' },
      stat(visited, 'Sujets ouverts'),
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

  function exportData() {
    const dataStr = JSON.stringify(state.user, null, 2);
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
          if (!data || typeof data !== 'object') throw new Error('Format invalide');
          state.user = Object.assign(defaultUserState(), data);
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

  function rerender() {
    const route = parseHash();
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
    } else if (route.view === 'glossaire') {
      setAccent(null);
      renderGlossaire(main);
    } else if (route.view === 'quiz-mixte') {
      setAccent(null);
      renderQuizMixte(main);
    } else if (route.view === 'notes') {
      setAccent(null);
      renderNotesGlobales(main);
    } else {
      setAccent(null);
      renderBibliotheque(main);
    }

    // Mode lecture : actif uniquement sur l'onglet Cours d'un sujet,
    // pour éviter de masquer la sidebar sur les vues de navigation.
    const inReadingCours = route.view === 'sujet' && route.tab === 'cours' && !!state.user.readingMode;
    document.body.classList.toggle('reading-mode', inReadingCours);

    // Reset scroll
    window.scrollTo({ top: 0, behavior: 'instant' });
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
    function tick() {
      s.remaining--;
      if (s.remaining <= 0) {
        stopTimer();
        tryChime();
        const next = s.isWork ? 'pause' : 'travail';
        s.isWork = !s.isWork;
        s.remaining = s.isWork ? WORK_S : BREAK_S;
        phase.textContent = s.isWork ? 'Travail' : 'Pause';
        updateDisplay();
        // Notification douce (non bloquante)
        setTimeout(() => alert('Pomodoro : début de la ' + next + '.'), 50);
      } else {
        updateDisplay();
      }
    }
    function startTimer() {
      s.running = true;
      s.intervalId = setInterval(tick, 1000);
      startBtn.textContent = 'Pause';
      updateDisplay();
    }
    function stopTimer() {
      s.running = false;
      if (s.intervalId) clearInterval(s.intervalId);
      s.intervalId = null;
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

      // Les autres raccourcis sont désactivés quand on tape dans un champ
      if (isFormField) return;

      // Modificateurs : on n'intercepte pas les Ctrl/Cmd/Alt
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
