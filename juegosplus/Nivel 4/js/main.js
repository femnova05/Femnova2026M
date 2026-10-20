/* ================= ACTIVIDAD 1: Historias interactivas ================= */
/* cada icono se dibuja dentro de un medallón tipo vitral (marco cuatrifolio) */
function medallionFrame(inner){
  return `
    <g fill="none" stroke="#C9A44C" stroke-width="1">
      <circle cx="59" cy="59" r="55"/>
      <circle cx="59" cy="59" r="46"/>
      <path d="M59 4 A55 55 0 0 1 105 30" stroke-width="1.6"/>
      <path d="M114 59 A55 55 0 0 1 88 105" stroke-width="1.6"/>
      <path d="M59 114 A55 55 0 0 1 13 88" stroke-width="1.6"/>
      <path d="M4 59 A55 55 0 0 1 30 13" stroke-width="1.6"/>
    </g>
    <g fill="none" stroke="#E7C56B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
  `;
}

const stories = [
  {
    name:'El chiste en el grupo',
    sensible:false,
    icon:`
      <path d="M24 38 H72 V62 H42 L32 72 V62 H24 Z"/>
      <path d="M52 62 H96 V86 H88 V96 L78 86 H52 Z"/>
      <circle cx="48" cy="50" r="2.2" fill="#E7C56B"/>
      <circle cx="58" cy="50" r="2.2" fill="#E7C56B"/>
      <path d="M62 74 h24" stroke-dasharray="3 3"/>
    `,
    steps:[
      {
        setting:'Recreo. Están seis personas del curso y tú.',
        dialogue:[
          { who:'Un compañero', text:'A Laura no la pongan en el equipo de mecánica, va a romper algo. Es broma, no se enojen.' },
          { who:'El grupo', text:'(Risas.)' }
        ],
        options:[
          { text:'Te ríes también: no quieres ser la aguafiestas del grupo.', ok:false,
            fb:'La risa es lo que sostiene el chiste. Quien lo dijo recibe la señal de que puede repetirlo, y Laura recibe la de que nadie va a decir nada.',
            out:'Nadie dice nada. En la siguiente clase, el profesor arma los equipos y el comentario ya circula como si fuera un hecho.' },
          { text:'Te quedas serio y callado, esperando que el tema pase solo.', ok:false,
            fb:'No reírte ya marca una diferencia, pero el silencio no la nombra. Para el resto del grupo, silencio y aprobación se parecen demasiado.',
            out:'El tema pasa, pero no se olvida. En la siguiente clase, el profesor arma los equipos y el comentario ya circula como si fuera un hecho.' },
          { text:'“¿Por qué va a romper algo? Es la que mejor va en el taller.”', ok:true,
            fb:'Una pregunta corta obliga a explicar en voz alta el prejuicio, y añadir un hecho lo desmonta sin convertir la escena en una pelea.',
            out:'El compañero se encoge de hombros y cambia de tema. En la siguiente clase, el profesor arma los equipos.' }
        ]
      },
      {
        setting:'El profesor reparte los roles del taller.',
        dialogue:[
          { who:'El profesor', text:'Laura, tú encárgate de la bitácora y de tomar apuntes. Los muchachos se ocupan del motor.' }
        ],
        options:[
          { text:'No dices nada: al final es el profesor quien decide.', ok:false,
            fb:'La autoridad de quien decide no convierte la decisión en justa. Cuando el reparto se hace por sexo y no por habilidad, señalarlo con respeto también es parte de aprender.' },
          { text:'“Profe, Laura lleva todo el semestre en el motor. ¿Podemos rotar los roles?”', ok:true,
            fb:'Propones en vez de acusar: recuerdas un hecho y ofreces una solución que vale para todo el grupo. Es la forma más difícil de rechazar.' },
          { text:'“Eso es machismo, profe.” Y te cruzas de brazos.', ok:false,
            fb:'El diagnóstico puede ser correcto, pero sin un hecho ni una propuesta suele abrir una discusión sobre las palabras y no sobre los roles. Laura sigue con la bitácora.' }
        ]
      }
    ]
  },
  {
    name:'La vacante',
    sensible:false,
    icon:`
      <rect x="34" y="30" width="50" height="62"/>
      <path d="M44 46 h30"/><path d="M44 58 h30"/><path d="M44 70 h18" stroke-dasharray="3 3"/>
      <circle cx="88" cy="80" r="12"/>
      <path d="M97 89 l10 10" stroke-width="1.8"/>
    `,
    steps:[
      {
        setting:'Prácticas en una oficina. Escuchas a dos personas del equipo revisando hojas de vida.',
        dialogue:[
          { who:'Coordinadora', text:'Esta candidata es la mejor, sin duda. Pero tiene 29 años, seguro sale embarazada y nos deja el puesto colgado.' }
        ],
        options:[
          { text:'Callas: eres practicante, no te corresponde opinar.', ok:false,
            fb:'Descartar a alguien por un embarazo posible es discriminación y en la mayoría de países es ilegal. Ser practicante limita el poder, no la posibilidad de preguntar.',
            out:'La hoja de vida queda al final del montón. Al día siguiente, la coordinadora te pide ayuda para redactar el aviso del cargo.' },
          { text:'“¿Le preguntaríamos lo mismo a un candidato de 29?”', ok:true,
            fb:'Una pregunta que cambia el sujeto y deja ver la regla doble: el mismo riesgo no se le calcula a un hombre. Es breve y no acusa a nadie de nada.',
            out:'La coordinadora se queda callada un momento y vuelve a mirar la hoja de vida. Al día siguiente te pide ayuda para redactar el aviso del cargo.' },
          { text:'“Es que es verdad, siempre pasa lo mismo con las mujeres.”', ok:false,
            fb:'Repetir el prejuicio como si fuera un dato lo convierte en norma. La decisión no se toma sobre una persona real, sino sobre lo que se supone que hará.',
            out:'La hoja de vida queda al final del montón. Al día siguiente, la coordinadora te pide ayuda para redactar el aviso del cargo.' }
        ]
      },
      {
        setting:'Te toca escribir el aviso de la vacante.',
        dialogue:[
          { who:'Coordinadora', text:'Ponle algo como “se busca un joven dinámico, con buena presencia y disponibilidad total”.' }
        ],
        options:[
          { text:'Lo escribes tal cual: es lo que te pidieron.', ok:false,
            fb:'“Un joven”, “buena presencia” y “disponibilidad total” son filtros indirectos: descartan por edad, por apariencia y por tener personas a cargo, sin decirlo.' },
          { text:'“Lo dejo igual pero cambio ‘un joven’ por ‘una persona joven’.”', ok:false,
            fb:'Es un avance real en el lenguaje, pero el aviso sigue pidiendo “buena presencia” y “disponibilidad total”, que son los filtros que de verdad excluyen.' },
          { text:'“Mejor pongamos los requisitos del trabajo: la formación, la experiencia y el horario exacto.”', ok:true,
            fb:'Un aviso que pide capacidades y no características personales abre el cargo a quien pueda hacerlo. Así se previene la discriminación indirecta: cambiando la regla, no solo la palabra.' }
        ]
      }
    ]
  },
  {
    name:'La amiga del grupo',
    sensible:true,
    icon:`
      <circle cx="44" cy="46" r="10"/>
      <path d="M28 88c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <circle cx="80" cy="46" r="10"/>
      <path d="M64 88c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <path d="M34 98 h56" stroke-dasharray="3 3"/>
      <path d="M62 24 v-8"/><path d="M55 20 l7 -7 l7 7" stroke-width="1.2"/>
    `,
    steps:[
      {
        setting:'Chat del grupo de amigas. Alguien reenvía una foto íntima de una compañera.',
        dialogue:[
          { who:'Un contacto', text:'Miren lo que mandó ella. Pásenla, que se entere todo el colegio la clase de niña que es.' }
        ],
        options:[
          { text:'No la reenvías, pero tampoco respondes nada.', ok:false,
            fb:'No reenviar evita el daño mayor, y eso cuenta. Pero la foto sigue circulando y ella sigue sin saberlo: hay un paso más que sí está en tus manos.',
            out:'La imagen sigue circulando durante el día. En la tarde, ella entra al salón y nota que la miran distinto.' },
          { text:'La reenvías solo a una amiga para comentarlo.', ok:false,
            fb:'Difundir una imagen íntima sin permiso es violencia digital y, en muchos países, un delito: no importa a cuántas personas se envíe. “Solo a una” es como empiezan todas las cadenas.',
            out:'La imagen sigue circulando durante el día. En la tarde, ella entra al salón y nota que la miran distinto.' },
          { text:'No la reenvías, escribes “esto es delito, no lo pasen” y haces captura de quién la envió.', ok:true,
            fb:'Cortas la cadena, lo nombras delante del grupo y conservas la prueba para que ella pueda denunciar si quiere. Eso es lo que convierte a un testigo en apoyo.',
            out:'Dos personas más dejan de reenviarla. En la tarde, ella entra al salón y nota que la miran distinto.' }
        ]
      },
      {
        setting:'Ella se sienta a tu lado, sin saber todavía qué pasó.',
        dialogue:[
          { who:'Tú', text:'(Tengo que decirle algo.)' }
        ],
        options:[
          { text:'Le dices “no te preocupes, ya se les va a olvidar”.', ok:false,
            fb:'Minimizar deja el problema en sus manos y sola. Lo que ocurrió no se olvida por sí solo: se detiene con apoyo y, si ella quiere, con una denuncia.' },
          { text:'Le cuentas en privado lo que viste, le muestras la captura y le preguntas qué necesita.', ok:true,
            fb:'Le devuelves la información y la decisión: ella elige si denuncia, si habla con su familia o si busca a la orientadora. Acompañar no es decidir por la otra persona.' },
          { text:'Le dices delante de todas: “te están pasando una foto tuya, ¿tú se la mandaste a quién?”', ok:false,
            fb:'Hacerlo en público la expone otra vez, y la pregunta pone el foco en su conducta y no en quien difundió la imagen. La responsabilidad es siempre de quien difunde.' }
        ]
      }
    ]
  }
];

const totalDecisions = stories.reduce((n, s) => n + s.steps.length, 0);
let storyIdx = 0;
let stepIdx = 0;
let answered = false;
let correctCount = 0;
let storyScore = 0;
let carryOutcome = null;

document.getElementById('scTotal').textContent = stories.length;
document.getElementById('scorePill').textContent = `Aciertos 0 / ${totalDecisions}`;

const dotsEl = document.getElementById('dots');
stories.forEach((s, i) => {
  s.steps.forEach((_, j) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 && j === 0 ? ' active' : '');
    d.dataset.pos = i + '-' + j;
    dotsEl.appendChild(d);
  });
});

function flatIndex(i, j){
  let n = 0;
  for(let k = 0; k < i; k++) n += stories[k].steps.length;
  return n + j;
}

function updateDots(){
  const pos = flatIndex(storyIdx, stepIdx);
  [...dotsEl.children].forEach((d, idx) => {
    d.className = 'dot' + (idx === pos ? ' active' : idx < pos ? ' done' : '');
  });
}

function markWindow(i, good){
  const pane = document.querySelector(`.pane[data-i="${i}"]`);
  const crack = document.querySelector(`.crack[data-i="${i}"]`);
  if(good){ pane.classList.add('lit'); crack.classList.remove('show'); }
  else { pane.classList.remove('lit'); crack.classList.add('show'); }
}

function loadStep(){
  answered = false;
  const story = stories[storyIdx];
  const step = story.steps[stepIdx];

  document.getElementById('scCurrent').textContent = storyIdx + 1;
  document.getElementById('stCurrent').textContent = stepIdx + 1;
  document.getElementById('storyName').textContent = story.name;
  document.getElementById('scenarioIcon').innerHTML = medallionFrame(story.icon);
  document.getElementById('sceneSetting').innerHTML = step.setting +
    (story.sensible ? '<div><span class="tag-sensible"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>Tema sensible · violencia de género</span></div>' : '');

  const dlg = document.getElementById('dialogue');
  dlg.innerHTML = '';
  if(carryOutcome){
    const n = document.createElement('div');
    n.className = 'line-narr';
    n.innerHTML = `<span class="who">Lo que pasó después</span>${carryOutcome}`;
    dlg.appendChild(n);
    carryOutcome = null;
  }
  step.dialogue.forEach(l => {
    const el = document.createElement('div');
    el.className = 'line-said' + (l.who === 'Tú' ? ' mine' : '');
    el.innerHTML = `<span class="who">${l.who}</span>${l.text}`;
    dlg.appendChild(el);
  });

  const col = document.getElementById('choiceCol');
  col.innerHTML = '';
  step.options.forEach((o, i) => {
    const b = document.createElement('button');
    b.className = 'reply-btn';
    b.dataset.i = i;
    b.textContent = o.text;
    col.appendChild(b);
  });

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  fb.innerHTML = '';
  document.getElementById('nextBtn').classList.remove('show');
  updateDots();
}

document.getElementById('choiceCol').addEventListener('click', (e) => {
  const btn = e.target.closest('.reply-btn');
  if(!btn || answered) return;
  answered = true;

  const story = stories[storyIdx];
  const step = story.steps[stepIdx];
  const opt = step.options[+btn.dataset.i];

  if(opt.ok){ correctCount++; storyScore++; }
  document.getElementById('scorePill').textContent = `Aciertos ${correctCount} / ${totalDecisions}`;

  document.querySelectorAll('.reply-btn').forEach(b => {
    b.disabled = true;
    if(b === btn) b.classList.add('chosen', opt.ok ? 'right' : 'wrong');
  });

  const fb = document.getElementById('feedback');
  fb.className = 'feedback show ' + (opt.ok ? 'correct' : 'incorrect');
  fb.innerHTML = `<span class="verdict">${opt.ok ? '✓ Buena decisión' : '✗ Revisemos juntos'}</span>${opt.fb}`;

  const isLastStep = stepIdx === story.steps.length - 1;
  if(isLastStep) markWindow(storyIdx, storyScore === story.steps.length);
  if(opt.out) carryOutcome = opt.out;

  const nb = document.getElementById('nextBtn');
  nb.textContent = !isLastStep ? 'Continuar →'
    : (storyIdx < stories.length - 1 ? 'Siguiente historia →' : 'Ver resultado →');
  nb.classList.add('show');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const story = stories[storyIdx];
  if(stepIdx < story.steps.length - 1){
    stepIdx++;
    loadStep();
  } else if(storyIdx < stories.length - 1){
    storyIdx++;
    stepIdx = 0;
    storyScore = 0;
    carryOutcome = null;
    loadStep();
  } else {
    document.getElementById('sealScore').textContent = `${correctCount}/${totalDecisions}`;
    document.getElementById('seal').classList.add('show');
    document.getElementById('scenarioCard').style.opacity = '.4';
    document.getElementById('scenarioCard').style.pointerEvents = 'none';
    return;
  }
  document.getElementById('scenarioCard').scrollIntoView({behavior:'smooth', block:'center'});
});

loadStep();

/* ================= ACTIVIDAD 2: Detecta la microagresión ================= */
const phrases = [
  {
    text:'“Te felicito, quedaste de jefa. Eso sí, ojo con volverte mandona.”',
    micro:true,
    note:'A un hombre en el mismo cargo se le pide liderazgo; a ella se le advierte que no se pase. La palabra “mandona” casi no existe en masculino, y eso dice bastante.'
  },
  {
    text:'“¿Puedes revisar el informe antes de las cinco? Lo necesito para la reunión.”',
    micro:false,
    note:'Es una petición concreta, con un motivo y un plazo, dirigida a una persona por su función. No hay prejuicio: solo trabajo.'
  },
  {
    text:'“Qué valiente tu esposo, quedándose a cuidar a los niños mientras tú viajas.”',
    micro:true,
    note:'Se elogia como heroísmo lo que en una madre se daría por descontado. El elogio refuerza la idea de que cuidar es tarea de ella y favor de él.'
  },
  {
    text:'“No pareces lesbiana, si eres súper femenina.”',
    micro:true,
    note:'Presenta la orientación como algo que debería notarse en la apariencia, y disfraza de cumplido la idea de que hay una forma correcta de verse.'
  },
  {
    text:'“Me gustó cómo defendiste tu propuesta en la reunión.”',
    micro:false,
    note:'Reconoce una acción concreta, sin compararla con lo que se esperaba de ella por ser quien es. Así se ve un reconocimiento sin condiciones.'
  },
  {
    text:'“Déjame eso a mí, que tú no vas a poder con ese peso.”',
    micro:true,
    note:'Decidir por otra persona lo que puede o no puede hacer, sin preguntarle, es paternalismo. Ofrecer ayuda sería: “¿Quieres que te dé una mano?”.'
  }
];

const detectList = document.getElementById('detectList');
const detectStatus = document.getElementById('detectStatus');
let detectAnswered = 0;
let detectCorrect = 0;

phrases.forEach((p, idx) => {
  const card = document.createElement('div');
  card.className = 'gothic-frame detect-card';
  card.innerHTML = `
    <div class="corner tl"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="corner br"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="detect-phrase"><span class="heard">Frase ${idx + 1}</span>${p.text}</div>
    <div class="detect-row">
      <button class="arch-btn" data-v="1"><span class="frame"></span><span class="keystone"></span>Microagresión</button>
      <button class="arch-btn" data-v="0"><span class="frame"></span><span class="keystone"></span>Comentario neutral</button>
    </div>
    <div class="detect-note"></div>
  `;
  const note = card.querySelector('.detect-note');
  note.textContent = p.note;
  card.querySelectorAll('.arch-btn').forEach(b => {
    b.addEventListener('click', () => {
      if(card.dataset.done) return;
      card.dataset.done = '1';
      const said = b.dataset.v === '1';
      const ok = said === p.micro;
      if(ok) detectCorrect++;
      detectAnswered++;
      card.querySelectorAll('.arch-btn').forEach(other => {
        other.disabled = true;
        if(other === b) other.classList.add('chosen', ok ? 'right' : 'wrong');
      });
      note.classList.add('show');
      detectStatus.textContent = detectAnswered === phrases.length
        ? `Actividad completa — ${detectCorrect} de ${phrases.length} bien identificadas.`
        : `${detectAnswered} de ${phrases.length} respondidas.`;
    });
  });
  detectList.appendChild(card);
});

// ===== Script separado =====

/* ================= PERSONAJE GUÍA — NIVEL 4 =================
   Se engancha al DOM de la página (no modifica js/app.js): observa la
   retroalimentación, la aguja de tono, el sello y las frases a reescribir. */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const el = $('#mascot'), flip = $('#mFlip'), lean = $('#mLean'), anim = $('#mAnim'), bubble = $('#mBubble');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = t => String(t).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const pick = a => a[Math.floor(Math.random()*a.length)];

  const ctx = { scDone:false, dtDone:false, dtOk:0 };
  let x = -140, y = innerHeight - 14, facing = 1, walking = false, reacting = false, enabled = true;
  let cursorX = innerWidth/2, gazeUntil = 0, gazeX = null;
  let hover = null, hoverTimer = null, hold = null;
  let bubbleTimer = null, bubblePrio = 0, lastActivity = Date.now();

  const size = () => ({ w: el.offsetWidth || 92, h: el.offsetHeight || 141 });
  const vis = r => r.bottom > 0 && r.top < innerHeight;

  /* ---------- a dónde quiere ir ---------- */
  function target(){
    const {w,h} = size(), vw = innerWidth, vh = innerHeight;
    const clampX = v => Math.min(vw - w/2 - 8, Math.max(w/2 + 8, v));
    const clampY = v => Math.min(vh - 10, Math.max(h + 10, v));
    const onTop = r => ({ x: clampX(r.right - w*0.55), y: clampY(r.top + 4) });

    if(hold && Date.now() < hold.until && document.contains(hold.node)){ const r = hold.node.getBoundingClientRect(); if(vis(r)) return onTop(r); }
    if(hover && document.contains(hover)){ const r = hover.getBoundingClientRect(); if(vis(r)) return onTop(r); }
    const seal = $('#seal');
    if(seal && seal.classList.contains('show')){ const r = seal.getBoundingClientRect(); if(vis(r)) return { x: clampX(r.right + w*0.7), y: clampY(r.bottom - 4) }; }
    const card = $('#scenarioCard');
    if(card && !ctx.scDone){ const r = card.getBoundingClientRect(); if(vis(r) && r.top > h + 14) return onTop(r); }
    return { x: clampX(vw - w*0.75), y: vh - 14 };
  }

  /* ---------- bucle de movimiento ---------- */
  const setAnim = c => { anim.className = 'm-anim ' + c; };
  function loop(){
    if(enabled){
      const t = target(), {w,h} = size();
      const dx = t.x - x, dy = t.y - y, dist = Math.hypot(dx, dy);
      const step = reduce ? dist : Math.min(dist, Math.max(0.6, dist * 0.085), 13);
      if(dist > 1){ x += dx/dist*step; y += dy/dist*step; }
      const moving = dist > 6;
      if(moving && Math.abs(dx) > 4) facing = dx > 0 ? 1 : -1;
      if(moving !== walking){ walking = moving; if(!reacting) setAnim(walking ? 'a-walk' : 'a-idle'); }
      const gx = (gazeX !== null && Date.now() < gazeUntil) ? gazeX : cursorX;
      if(!moving){ const d = gx - x; if(Math.abs(d) > 50) facing = d > 0 ? 1 : -1;
        lean.style.setProperty('--lean', (Math.max(-1, Math.min(1, d/260)) * 6) + 'deg'); }
      else lean.style.setProperty('--lean', '0deg');
      flip.style.transform = `scaleX(${facing})`;
      el.style.transform = `translate(${x - w/2}px, ${y - h}px)`;
      placeBubble();
      if(Date.now() - lastActivity > 28000){ lastActivity = Date.now(); idleChat(); }
    }
    requestAnimationFrame(loop);
  }

  /* ---------- globo ---------- */
  function placeBubble(){
    if(!bubble.classList.contains('show')) return;
    const {h} = size(), bw = bubble.offsetWidth, bh = bubble.offsetHeight;
    let bx = x - bw/2, by = y - h - bh - 14, below = false;
    bx = Math.min(innerWidth - bw - 10, Math.max(10, bx));
    if(by < 8){ by = y + 12; below = true; }
    bubble.style.transform = `translate(${bx}px, ${by}px)`;
    bubble.classList.toggle('below', below);
    bubble.style.setProperty('--tail', Math.min(bw - 26, Math.max(12, x - bx - 7)) + 'px');
  }
  function say(html, ms = 5200, prio = 1, tone = ''){
    if(!enabled) return;
    if(bubble.classList.contains('show') && prio < bubblePrio && prio < 2) return;   // las reacciones a tus acciones siempre reemplazan al globo anterior
    bubblePrio = prio; lastActivity = Date.now();
    bubble.className = 'mascot-bubble ' + tone;
    bubble.innerHTML = html;
    void bubble.offsetWidth;
    bubble.classList.add('show'); placeBubble();
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => { bubble.classList.remove('show'); bubblePrio = 0; }, ms);
  }

  /* ---------- reacciones ---------- */
  function react(cls, ms){
    reacting = true; setAnim(cls);
    clearTimeout(react.t);
    react.t = setTimeout(() => { reacting = false; setAnim(walking ? 'a-walk' : 'a-idle'); }, ms);
  }
  function sparks(n = 10, spread = 90){
    if(reduce) return;
    const {h} = size(), cols = ['#E7C56B','#C9A44C','#F5E6C8'];
    for(let i = 0; i < n; i++){
      const s = document.createElement('div'); s.className = 'm-spark';
      s.style.left = x + 'px'; s.style.top = (y - h*0.6) + 'px'; s.style.background = cols[i % 3];
      document.body.appendChild(s);
      const a = Math.random()*Math.PI*2, d = spread*(0.5 + Math.random());
      s.animate([{ transform:'translate(0,0) rotate(45deg) scale(1)', opacity:1 },
        { transform:`translate(${Math.cos(a)*d}px, ${Math.sin(a)*d - 40}px) rotate(${180 + Math.random()*180}deg) scale(.3)`, opacity:0 }],
        { duration: 800 + Math.random()*500, easing:'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => s.remove();
    }
  }
  function confetti(){
    if(reduce) return;
    const cols = ['#E7C56B','#C9A44C','#F5E6C8','#6b3a70','#8fae6f'];
    for(let i = 0; i < 46; i++){
      const s = document.createElement('div'); s.className = 'm-spark';
      s.style.left = Math.random()*innerWidth + 'px'; s.style.top = '-12px'; s.style.background = cols[i % 5];
      document.body.appendChild(s);
      s.animate([{ transform:'translate(0,0) rotate(45deg)', opacity:1 },
        { transform:`translate(${(Math.random()-.5)*160}px, ${innerHeight + 30}px) rotate(${400 + Math.random()*300}deg)`, opacity:.9 }],
        { duration: 1800 + Math.random()*1600, delay: Math.random()*500, easing:'ease-in', fill:'backwards' }).onfinish = () => s.remove();
    }
  }
  const holdOn = (node, ms = 2800) => { hold = { node, until: Date.now() + ms }; };

  /* ---------- textos ---------- */
  const sectionLines = [
    '¡Hola! Soy tu guía en el nivel 4. Hoy aprendemos a <b>reconocer lo que deja a alguien fuera</b> y qué hacer.',
    'Hay varios tipos de discriminación. Pasa el cursor sobre cada tarjeta y te los cuento.',
    'Tres historias, dos decisiones cada una. Cuida el <b>vitral</b>: se ilumina o se agrieta según lo que elijas.',
    'Ahora detecta cuáles frases son <b>microagresiones</b> y cuáles no.',
    'Último tramo: reflexiona y llévate el reto de la semana.'
  ];
  const conceptLines = [
    '<b>Sexismo</b>: se da menos valor, voz u oportunidad por el sexo o el género.',
    '<b>Racismo y xenofobia</b>: se excluye o se sospecha por etnia, color u origen.',
    '<b>LGBTIfobia</b>: se rechaza o se niegan derechos por orientación o identidad.',
    '<b>Capacitismo y edadismo</b>: se decide por otra persona lo que puede o no hacer.'
  ];
  const chipLines = [
    '<b>Directa</b>: se excluye a la vista de todos.',
    '<b>Indirecta</b>: una regla «igual para todas» que perjudica solo a unas, como reuniones a las 7 p.m.',
    '<b>Estructural</b>: nadie la comete en concreto, todos la sostienen y a nadie le extraña.'
  ];
  const lexLines = [
    'Convierte su cara en algo hecho para <b>agradar</b> y su ánimo en asunto de otros.',
    'Da a entender que de su origen se esperaba poco: ella sería <b>la excepción</b>.',
    'Quien lo dijo decide si algo ofende. Eso es <b>minimizar</b> su molestia.',
    'Supone que en una familia alguien «manda» por defecto, y que es un hombre.'
  ];
  const closingLines = [
    'Saber <b>qué te frena</b> (sorpresa, grupo, miedo a exagerar) es la mitad del camino para responder.',
    '<b>«¿Por qué lo dices?»</b> No acusa, no grita: obliga a explicar lo que se dijo sin pensar. ¡Practícala!'
  ];
  // [historia][decisión]
  const stepIntro = {
    '1-2':'El profesor reparte los roles. ¿Qué decisión <b>propone</b> en vez de acusar?',
    '2-1':'Escuchas algo que no debería pasar. Una pregunta breve puede <b>cambiar el sujeto</b>.',
    '2-2':'Ahora la regla la escribes tú. Revisa qué <b>filtros ocultos</b> trae el aviso.',
    '3-1':'Tema delicado. Piensa en cortar la cadena, nombrarlo y <b>cuidar a ella</b>.',
    '3-2':'Ella se sienta a tu lado. Dale <b>información</b> y respeta que ella decida.'
  };
  const stepHint = {
    '1-1':'Piensa qué señal le das al grupo si te ríes… o si callas.',
    '1-2':'Recuerda un <b>hecho</b> y ofrece una <b>propuesta</b>, no un diagnóstico.',
    '2-1':'Cambia el sujeto: ¿le dirían lo mismo a un hombre?',
    '2-2':'Un aviso debe pedir <b>capacidades</b>, no características personales.',
    '3-1':'Corta la cadena, nómbralo y <b>conserva la prueba</b>.',
    '3-2':'Dale la <b>información</b>, en privado, y deja que ella decida.'
  };
  const goodLines = {
    '1-1':'Una <b>pregunta corta</b> con un hecho desmonta el chiste sin pelea.',
    '1-2':'Propones en vez de acusar: <b>hecho + solución</b>.',
    '2-1':'Cambiaste el sujeto y se vio la <b>regla doble</b>. Breve y sin acusar.',
    '2-2':'Pides <b>capacidades</b>, no características personales. Así se previene la discriminación indirecta.',
    '3-1':'Cortaste la cadena y <b>guardaste la prueba</b>. Eso es apoyar.',
    '3-2':'Le devolviste <b>la información y la decisión</b>. Acompañar no es decidir por ella.'
  };
  const badLines = {
    '1-1':'Ojo: la risa y el silencio sostienen el chiste. Lee la explicación.',
    '1-2':'Cuando el reparto es por sexo, señalarlo con respeto también es aprender. Lee por qué.',
    '2-1':'Ser practicante limita el poder, no la posibilidad de <b>preguntar</b>.',
    '2-2':'Fíjate en los filtros ocultos: «buena presencia», «disponibilidad total».',
    '3-1':'Es un tema difícil. Hay un paso más que sí está en tus manos; lee con calma.',
    '3-2':'Es difícil saber qué decir. Lee la explicación con calma.'
  };
  const detectWhy = [
    'A ella se le advierte que no se pase; a un hombre se le pide liderazgo.',
    'Es una petición concreta, con motivo y plazo. <b>No hay prejuicio</b>, solo trabajo.',
    'Se elogia como heroísmo lo que en una madre se da por descontado.',
    'Disfraza de cumplido la idea de que hay una forma correcta de <b>verse</b>.',
    'Reconoce una acción concreta, <b>sin comparaciones</b>.',
    'Decidir por otra persona lo que puede cargar es <b>paternalismo</b>. Mejor: «¿quieres una mano?».'
  ];
  const chat = [
    'Los comentarios pequeños duelen por acumulación: <b>una gota no moja, mil sí</b>.',
    'Una pregunta como <b>«¿por qué lo dices?»</b> ya cambia la conversación.',
    'Si necesitas ayuda, toca <b>✦ Pista</b>.'
  ];
  function idleChat(){ if(!bubble.classList.contains('show')) say(pick(chat), 5000, 0); }

  /* ---------- actividad iv: historias y vitral ---------- */
  const stepKey = () => ($('#scCurrent') ? $('#scCurrent').textContent : '1') + '-' + ($('#stCurrent') ? $('#stCurrent').textContent : '1');
  const sensitiveNow = () => !!$('#sceneSetting .tag-sensible');

  function onAnswer(ok){
    lastActivity = Date.now();
    const key = stepKey(), sensitive = sensitiveNow();
    const lastStep = ($('#stCurrent') || {}).textContent === '2';
    let tail = '';
    if(lastStep){                                   // la página ya marcó el vitral antes de que llegue este aviso
      const pane = $(`.pane[data-i="${parseInt(key, 10) - 1}"]`);
      const lit = pane && pane.classList.contains('lit');
      tail = lit ? ' ¡Y el <b>vitral se ilumina</b>!' : ' Esta vez el vitral se agrieta; puedes volver a intentarlo cuando quieras.';
      if(lit){ setTimeout(() => sparks(16, 110), 350); }
    }
    if(ok){ react('a-jump', 750); sparks(12); }
    else if(ok === false) react(sensitive ? 'a-think' : 'a-sad', 1100);
    else react('a-think', 1200);
    setTimeout(() => {
      if(ok === true) say('¡Buena decisión! ' + (goodLines[key] || '') + tail, 7200, 2, 'good');
      else if(ok === false) say((badLines[key] || 'Lee la explicación con calma.') + tail, 7200, 2, 'bad');
      else say('Anotado. Lee la explicación con calma.', 4200, 2);
    }, reduce ? 0 : 300);
  }
  const fb = $('#feedback');
  if(fb) new MutationObserver(() => {
    if(!fb.classList.contains('show')) return;
    onAnswer(fb.classList.contains('incorrect') ? false : fb.classList.contains('correct') ? true : null);
  }).observe(fb, { attributes:true, attributeFilter:['class'] });

  // nueva decisión o nueva historia
  let lastKey = stepKey();
  const onStep = () => {
    const k = stepKey(); if(k === lastKey) return; lastKey = k;
    react('a-think', 1600);
    say(stepIntro[k] || 'Nueva historia. Lee con calma y piensa en <b>quién queda fuera</b>.', 5800, 2);
  };
  ['#scCurrent', '#stCurrent'].forEach(s => { const n = $(s); if(n) new MutationObserver(onStep).observe(n, { childList:true, characterData:true, subtree:true }); });

  const seal = $('#seal');
  if(seal) new MutationObserver(() => {
    if(!seal.classList.contains('show') || ctx.scDone) return; ctx.scDone = true;
    const m = ($('#sealScore') ? $('#sealScore').textContent : '').match(/(\d+)\s*\/\s*(\d+)/);
    const s = m ? +m[1] : 0, t = m ? +m[2] : 6;
    if(s === t){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Perfecto!</b> Los tres vitrales brillan. Sabes qué hacer cuando ocurre delante de ti.', 7000, 3, 'good'); }
    else if(s >= t/2){ sparks(10); react('a-excited', 1400); say('<b>¡Buen trabajo!</b> Repasa las explicaciones y verás cómo brillan más vitrales.', 7000, 3); }
    else { react('a-think', 1400); say('Gracias por intentarlo. Reconocer lo que cuesta ya es un primer paso; repasa y vuelve.', 7000, 3); }
  }).observe(seal, { attributes:true, attributeFilter:['class'] });

  const choiceCol = $('#choiceCol');
  if(choiceCol) choiceCol.addEventListener('mouseover', e => {
    const b = e.target.closest('.reply-btn'); if(!b) return;
    const r = b.getBoundingClientRect(); gazeX = r.left + r.width/2; gazeUntil = Date.now() + 1400;
    if(!reacting) react('a-think', 1200);
  });

  /* ---------- actividad v: detecta la microagresión ---------- */
  const dl = $('#detectList'), dStatus = $('#detectStatus'), answered = new Set();
  if(dl){
    dl.addEventListener('mouseover', e => {
      const b = e.target.closest('.arch-btn');
      if(b && !b.disabled){ const r = b.getBoundingClientRect(); gazeX = r.left + r.width/2; gazeUntil = Date.now() + 1200; }
      const card = e.target.closest('#detectList > *'); if(!card || card.dataset.done) return;
      hover = card; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === card) hover = null; }, 9000);
    });
    dl.addEventListener('mouseleave', () => { hover = null; });
    dl.addEventListener('click', e => {
      const btn = e.target.closest('.arch-btn'); if(!btn) return;
      const card = btn.closest('#detectList > *'); if(!card || answered.has(card)) return;
      setTimeout(() => {                                          // la página marca right / wrong al hacer clic
        if(!card.dataset.done) return;
        const ok = btn.classList.contains('right') ? true : btn.classList.contains('wrong') ? false : null;
        const why = detectWhy[[...dl.children].indexOf(card)] || '';
        answered.add(card); holdOn(card, 3400); hover = null;
        if(ok === true){ ctx.dtOk++; react('a-jump', 750); sparks(10); say('¡Correcto! ' + why, 6500, 2, 'good'); }
        else if(ok === false){ react('a-sad', 1100); say('Mmm, no era así. ' + why, 6800, 2, 'bad'); }
        else { react('a-think', 1200); say('Anotado. ' + why, 5200, 2); }
        checkDetectDone();
      }, 120);
    });
  }
  function checkDetectDone(){
    if(ctx.dtDone || !dl) return;
    const total = dl.children.length;
    if(answered.size >= total){
      ctx.dtDone = true; const okN = ctx.dtOk;
      setTimeout(() => {
        if(okN === total){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Todas bien!</b> Ya reconoces cuándo una frase repite un prejuicio.', 7200, 3, 'good'); }
        else { sparks(8); react('a-excited', 1400); say(`Terminaste: <b>${okN} de ${total}</b> bien. Repasa las que fallaste en «Microagresiones».`, 7200, 3); }
      }, 3600);
    }
  }

  /* ---------- contenidos ---------- */
  function hoverable(node, html, anim, ms = 6200){
    node.addEventListener('mouseenter', () => {
      hover = node; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === node) hover = null; }, 9000);
      if(anim) react(anim, 1000);
      say(html, ms, 1);
    });
    node.addEventListener('mouseleave', () => { if(hover === node) hover = null; });
  }
  $$('.concept-card').forEach((c, i) => {
    const q = c.querySelector('.quote');
    hoverable(c, (conceptLines[i] || '') + (q ? ' Suena así: <i>' + esc(q.textContent) + '</i>' : ''), 'a-think', 7000);
  });
  $$('.example-chip').forEach((c, i) => hoverable(c, chipLines[i] || '', 'a-think', 6800));
  $$('.lex-row').forEach((c, i) => hoverable(c, lexLines[i] || 'Mira lo que <b>transmite</b> la frase, no solo lo que dice.', 'a-think', 6800));
  $$('.closing-card').forEach((c, i) => hoverable(c, closingLines[i] || '', 'a-jump'));
  const ws = $('.window-stage');
  if(ws) hoverable(ws, 'Cada historia es un <b>vitral</b>: se ilumina cuando actúas y se agrieta cuando la dejas pasar.', 'a-think', 6200);

  /* ---------- globales ---------- */
  addEventListener('mousemove', e => { cursorX = e.clientX; lastActivity = Date.now(); }, { passive:true });
  addEventListener('touchstart', e => { cursorX = e.touches[0].clientX; lastActivity = Date.now(); }, { passive:true });

  const sections = $$('main > section'), seen = new Set();
  sections.forEach((s, i) => {
    if(i === 0) return;
    const io = new IntersectionObserver(([en]) => {
      if(en.isIntersecting && !seen.has(i)){ seen.add(i); say(sectionLines[i] || '', 5600, 0); io.disconnect(); }
    }, { threshold:.35 });
    io.observe(s);
  });
  const currentSection = () => { const m = innerHeight/2; return sections.findIndex(s => { const r = s.getBoundingClientRect(); return r.top <= m && r.bottom >= m; }); };
  $('#mHint').addEventListener('click', () => {
    if(!enabled) return; const s = currentSection(); react('a-think', 1800);
    if(s === 2 && !ctx.scDone) say('<b>Pista:</b> ' + (stepHint[stepKey()] || 'pregúntate quién queda fuera y qué pregunta breve lo haría visible.'), 7000, 3);
    else if(s === 3 && !ctx.dtDone) say('<b>Pista:</b> ¿la frase compara, sorprende por ser quien es, o decide por la otra persona? Una petición concreta no es microagresión.', 7500, 3);
    else say('<b>Recuerda:</b> casi nunca llega con gritos; llega en un chiste, una regla «neutral» o un comentario. Pregunta <b>«¿por qué lo dices?»</b>.', 7500, 3);
  });
  const toggle = $('#mToggle');
  toggle.addEventListener('click', () => {
    enabled = !enabled; el.classList.toggle('off', !enabled); bubble.classList.toggle('off', !enabled);
    toggle.textContent = enabled ? 'Ocultar' : 'Mostrar'; toggle.setAttribute('aria-pressed', String(!enabled));
  });

  el.classList.add('ready');
  setTimeout(() => say(sectionLines[0], 6500, 1), 1800);
  requestAnimationFrame(loop);
})();
