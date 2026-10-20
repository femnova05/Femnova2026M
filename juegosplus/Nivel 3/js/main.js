// FEMNOVA · Nivel 3: Respeto y Comunicación

/* ================= ACTIVIDAD 1: Simulación de conversaciones ================= */
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

const conversations = [
  {
    icon: `
      <path d="M26 38 H74 V62 H44 L34 72 V62 H26 Z"/>
      <path d="M50 58 H92 V82 H84 V92 L74 82 H50 Z"/>
      <path d="M34 48 h28" stroke-dasharray="3 3"/>
      <path d="M58 70 h24" stroke-dasharray="3 3"/>
    `,
    setting: 'En el salón, frente a varias personas.',
    dialogue: [
      { who:'Un compañero', text:'Tranquila, esto lo explico yo, que a las mujeres los números no se les dan.' }
    ],
    sensible: false,
    options: [
      { text:'Me quedo callada y dejo que siga explicando.', type:'pasiva' },
      { text:'“Explícalo tú, que para ignorante no hay quien te gane.”', type:'agresiva' },
      { text:'“Ese comentario sobra. Yo resolví el ejercicio y lo voy a explicar.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Callar evita el roce del momento, pero deja el comentario en pie y la explicación en sus manos. La asertividad no obliga a pelear: basta con nombrar lo que pasó y sostener tu lugar.',
      agresiva:'Devolver el insulto empata el tono, pero desvía la conversación hacia quién ofende más y tu argumento se pierde. Se puede marcar un límite sin descalificar.',
      asertiva:'Señalas el comentario, no a la persona, y recuperas tu espacio. Frase corta, sin insulto y con una acción concreta: así se pone un límite.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <rect x="40" y="30" width="38" height="62" rx="5"/>
      <path d="M52 30 h14" stroke-width="1.2"/>
      <circle cx="59" cy="84" r="2.5"/>
      <path d="M48 48 h22" stroke-dasharray="3 3"/>
      <path d="M48 58 h22" stroke-dasharray="3 3"/>
      <path d="M86 42 l16 -12" stroke-width="1.2"/>
      <circle cx="105" cy="26" r="5"/>
    `,
    setting: 'Tu pareja toma tu celular y empieza a revisarlo.',
    dialogue: [
      { who:'Tu pareja', text:'Si no tienes nada que ocultar, no te molesta que lo revise, ¿verdad?' }
    ],
    sensible: true,
    options: [
      { text:'“Revísalo, así te quedas tranquilo.”', type:'pasiva' },
      { text:'“Pues entonces dame el tuyo, a ver qué escondes tú.”', type:'agresiva' },
      { text:'“No voy a entregarte mi celular. Cuando lo revisas me siento vigilada y necesito que confíes en mí.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Ceder una vez suele abrir la puerta a la siguiente. Revisar el celular de la pareja no es una prueba de amor: es control, y el control se sostiene cuando no encuentra un límite.',
      agresiva:'Responder con la misma sospecha convierte la relación en una vigilancia mutua. El problema no es quién revisa primero, sino que la confianza se haya sustituido por el control.',
      asertiva:'Dices que no, explicas cómo te sientes y nombras lo que necesitas. Un no acompañado de una razón propia es más difícil de discutir que un no a secas.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <path d="M22 58 H62 V82 H36 L28 90 V82 H22 Z"/>
      <path d="M62 34 H100 V58 H92 V66 L84 58 H62 Z"/>
      <circle cx="42" cy="34" r="8"/>
      <path d="M30 52 c1-9 5-13 12-13 s11 4 12 13" stroke-width="1.2"/>
      <path d="M78 76 v10" stroke-width="1.2"/>
      <path d="M72 86 h12" stroke-width="1.2"/>
    `,
    setting: 'Trabajo en grupo. Llevas tres días haciendo la parte de otra persona.',
    dialogue: [
      { who:'Tú', text:'(Otra vez me tocó terminar su parte y mañana entregamos.)' },
      { who:'Tu compañera', text:'Ay, se me volvió a olvidar. Tú lo haces rapidísimo, ¿no?' }
    ],
    sensible: false,
    options: [
      { text:'“No te preocupes, yo lo hago.”', type:'pasiva' },
      { text:'“Eres una interesada, no piensas hacer nada nunca.”', type:'agresiva' },
      { text:'“Llevo tres días cubriendo tu parte y no me alcanza el tiempo. Necesito que hagas tu sección hoy.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Resolverlo tú evita la incomodidad, pero el acuerdo sigue roto y la carga vuelve a caer en el mismo lado. Ceder no es generosidad cuando se vuelve costumbre.',
      agresiva:'La etiqueta —“eres una interesada”— habla de su persona, no del problema. Casi siempre provoca defensa y la tarea sigue sin hacerse.',
      asertiva:'Describes el hecho, dices cómo te afecta y haces una petición concreta con plazo. Es la estructura básica de una frase asertiva.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <circle cx="42" cy="44" r="10"/>
      <path d="M26 82c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <circle cx="80" cy="44" r="10"/>
      <path d="M64 82c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <path d="M38 96 h42" stroke-dasharray="3 3"/>
      <path d="M59 22 v10"/>
      <path d="M52 28 l7 -8 l7 8" stroke-width="1.2"/>
    `,
    setting: 'Una amiga te cuenta que su novio le prohibió salir con ustedes.',
    dialogue: [
      { who:'Tu amiga', text:'No es para tanto, es que se pone celoso porque me quiere mucho.' }
    ],
    sensible: true,
    options: [
      { text:'“Bueno, cada pareja es un mundo.”', type:'pasiva' },
      { text:'“Estás ciega, déjalo ya o no me busques más.”', type:'agresiva' },
      { text:'“A mí me preocupa que decida con quién sales. Yo te escucho cuando quieras y aquí sigo.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Evita el conflicto, pero también evita a tu amiga. Puedes respetar su decisión y aun así decirle lo que ves.',
      agresiva:'Los ultimátums suelen aislar más a quien ya está siendo aislada. Si la relación con sus amistades se rompe, se queda con la única voz que la controla.',
      asertiva:'Nombras tu preocupación sin dar órdenes y dejas la puerta abierta. Mantener el vínculo es lo más protector que puedes ofrecerle.',
    },
    correct:'asertiva'
  }
];

let current = 0;
let answered = false;
let correctCount = 0;
document.getElementById('scTotal').textContent = conversations.length;

const dotsEl = document.getElementById('dots');
conversations.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  dotsEl.appendChild(d);
});

function updateScorePill(){
  document.getElementById('scorePill').textContent = `Aciertos ${correctCount} / ${conversations.length}`;
}

function setNeedle(type){
  const deg = type === 'pasiva' ? -58 : type === 'agresiva' ? 58 : 0;
  document.getElementById('needle').style.transform = `rotate(${deg}deg)`;
}

function loadConversation(i){
  answered = false;
  const c = conversations[i];
  document.getElementById('scCurrent').textContent = i + 1;
  document.getElementById('scenarioIcon').innerHTML = medallionFrame(c.icon);
  document.getElementById('sceneSetting').innerHTML = c.setting +
    (c.sensible ? '<div><span class="tag-sensible"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>Tema sensible · violencia de género</span></div>' : '');

  const dlg = document.getElementById('dialogue');
  dlg.innerHTML = '';
  c.dialogue.forEach(l => {
    const el = document.createElement('div');
    el.className = 'line-said' + (l.who === 'Tú' ? ' mine' : '');
    el.innerHTML = `<span class="who">${l.who}</span>${l.text}`;
    dlg.appendChild(el);
  });

  const col = document.getElementById('choiceCol');
  col.innerHTML = '';
  c.options.forEach(o => {
    const b = document.createElement('button');
    b.className = 'reply-btn';
    b.dataset.type = o.type;
    b.textContent = o.text;
    col.appendChild(b);
  });

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  fb.innerHTML = '';
  document.getElementById('nextBtn').classList.remove('show');
  setNeedle('asertiva');
  [...dotsEl.children].forEach((d, idx) => {
    d.className = 'dot' + (idx === i ? ' active' : idx < i ? ' done' : '');
  });
}

document.getElementById('choiceCol').addEventListener('click', (e) => {
  const btn = e.target.closest('.reply-btn');
  if(!btn || answered) return;
  answered = true;
  const type = btn.dataset.type;
  const c = conversations[current];
  const isCorrect = type === c.correct;
  if(isCorrect) correctCount++;
  updateScorePill();
  setNeedle(type);

  document.querySelectorAll('.reply-btn').forEach(b => {
    b.disabled = true;
    if(b === btn) b.classList.add('chosen', isCorrect ? 'right' : 'wrong');
  });

  const fb = document.getElementById('feedback');
  fb.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
  const etiqueta = type === 'pasiva' ? 'Respuesta pasiva' : type === 'agresiva' ? 'Respuesta agresiva' : 'Respuesta asertiva';
  fb.innerHTML = `<span class="verdict">${isCorrect ? '✓ ' + etiqueta : '✗ ' + etiqueta}</span>${c.feedback[type]}`;

  const nb = document.getElementById('nextBtn');
  nb.textContent = current < conversations.length - 1 ? 'Siguiente →' : 'Ver resultado →';
  nb.classList.add('show');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if(current < conversations.length - 1){
    current++;
    loadConversation(current);
    document.getElementById('scenarioCard').scrollIntoView({behavior:'smooth', block:'center'});
  } else {
    document.getElementById('sealScore').textContent = `${correctCount}/${conversations.length}`;
    document.getElementById('seal').classList.add('show');
    document.getElementById('scenarioCard').style.opacity = '.4';
    document.getElementById('scenarioCard').style.pointerEvents = 'none';
  }
});

loadConversation(0);

/* ================= ACTIVIDAD 2: Elegir la forma respetuosa ================= */
const rewrites = [
  {
    phrase:'“Necesitamos un hombre que cargue las cajas, ustedes no van a poder.”',
    options:[
      { text:'“Necesitamos a alguien con fuerza para cargar las cajas: ¿quién puede?”', ok:true },
      { text:'“Necesitamos un hombre fuerte, pero si alguna quiere intentar, que lo intente.”', ok:false },
      { text:'“Los hombres cargan las cajas y las mujeres organizan los papeles.”', ok:false }
    ],
    note:'La primera pide una capacidad —fuerza— y deja que responda quien la tenga. Las otras dos siguen repartiendo tareas por sexo, aunque una lo diga con más cortesía.'
  },
  {
    phrase:'“Todos los niños deben venir acompañados de su mamá.”',
    options:[
      { text:'“Cada niño debe venir con su mamá o, si no puede, con otro familiar.”', ok:false },
      { text:'“Cada estudiante debe venir acompañado por una persona adulta de su familia.”', ok:true },
      { text:'“Los niños y las niñas deben venir con su mamá.”', ok:false }
    ],
    note:'Poner a la madre como responsable por defecto —aunque se admitan excepciones— sigue asignando el cuidado a las mujeres. Hablar de “una persona adulta de su familia” incluye a todas las formas de familia.'
  },
  {
    phrase:'“Qué carácter tiene ella, seguro está en sus días.”',
    options:[
      { text:'“Ella está molesta, será cosa de hormonas.”', ok:false },
      { text:'“No le hagan caso, ya se le pasa.”', ok:false },
      { text:'“Ella está molesta. ¿Sabemos qué pasó?”', ok:true }
    ],
    note:'Explicar el enojo de una mujer por su ciclo o por su carácter sirve para no escuchar el motivo. Preguntar qué pasó devuelve el enojo a su causa real.'
  },
  {
    phrase:'“Ese trabajo lo hizo muy bien, para ser mujer.”',
    options:[
      { text:'“Ese trabajo quedó muy bien.”', ok:true },
      { text:'“Ese trabajo lo hizo muy bien, igual que un hombre.”', ok:false },
      { text:'“Qué sorpresa, no esperaba que le saliera tan bien.”', ok:false }
    ],
    note:'El elogio con condición —“para ser mujer”, “igual que un hombre”— mide el trabajo contra una expectativa baja. Un buen trabajo se reconoce sin comparaciones.'
  }
];

const rewriteList = document.getElementById('rewriteList');
const rewriteStatus = document.getElementById('rewriteStatus');
let rewriteAnswered = 0;
let rewriteCorrect = 0;

rewrites.forEach((r, idx) => {
  const card = document.createElement('div');
  card.className = 'gothic-frame rewrite-card';
  card.innerHTML = `
    <div class="corner tl"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="corner tr"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="corner bl"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="corner br"><svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg></div>
    <div class="rewrite-top">
      <span class="heard">Frase ${idx + 1}</span>
      <div class="phrase">${r.phrase}</div>
    </div>
    <div class="rewrite-options"></div>
  `;
  const optWrap = card.querySelector('.rewrite-options');
  r.options.forEach(o => {
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = o.text;
    b.addEventListener('click', () => {
      if(card.dataset.done) return;
      card.dataset.done = '1';
      rewriteAnswered++;
      if(o.ok) rewriteCorrect++;
      optWrap.querySelectorAll('.opt-btn').forEach((other, i) => {
        other.disabled = true;
        if(r.options[i].ok) other.classList.add('right');
        else if(other === b) other.classList.add('wrong');
        else other.classList.add('dim');
      });
      note.classList.add('show');
      rewriteStatus.textContent = rewriteAnswered === rewrites.length
        ? `Actividad completa — ${rewriteCorrect} de ${rewrites.length} bien elegidas.`
        : `${rewriteAnswered} de ${rewrites.length} respondidas.`;
    });
    optWrap.appendChild(b);
  });
  const note = document.createElement('div');
  note.className = 'rewrite-note';
  note.textContent = r.note;
  optWrap.appendChild(note);
  rewriteList.appendChild(card);
});

/* ===== Script original: bloque siguiente ===== */

/* ================= PERSONAJE GUÍA — NIVEL 3 =================
   Se engancha al DOM de la página (no modifica js/app.js): observa la
   retroalimentación, la aguja de tono, el sello y las frases a reescribir. */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const el = $('#mascot'), flip = $('#mFlip'), lean = $('#mLean'), anim = $('#mAnim'), bubble = $('#mBubble');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = t => String(t).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  const pick = a => a[Math.floor(Math.random()*a.length)];

  const ctx = { scDone:false, rwDone:false, ok:0, bad:0 };
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
    '¡Hola! Soy tu guía en el nivel 3. Hoy practicamos cómo decir lo que pienso <b>sin herir a nadie</b>.',
    'Hay tres maneras de comunicarse. Pasa el cursor sobre cada una y te las <b>actúo</b>.',
    'Tu respuesta moverá la <b>aguja del tono</b>. Intenta dejarla en el centro.',
    'Ahora elige la versión que dice lo mismo <b>sin excluir ni herir</b>.',
    'Último tramo: reflexiona y llévate un reto para la semana.'
  ];
  const nextLines = [
    'Un comentario en público. Pon el límite <b>sin pelear</b> y sin quedarte callada.',
    'Tema delicado: tómate tu tiempo. Un <b>no</b> con una razón propia es difícil de discutir.',
    'Piensa en tres pasos: el <b>hecho</b>, cómo te afecta y una <b>petición</b> concreta.',
    'Tema delicado: tu amiga necesita ser <b>escuchada</b>, no presionada.'
  ];
  const lexLines = [
    '«Los alumnos» deja fuera a las alumnas. <b>«El estudiantado»</b> nombra a todas las personas.',
    '«Y eso que eres mujer» parece halago, pero supone que una mujer <b>no podría</b> hacerlo bien.',
    '«Ayuda» da por hecho que la casa es de ella. <b>Compartir</b> es corresponsabilidad.',
    '«No seas nena» usa lo femenino como insulto. Mejor <b>preguntar qué necesita</b>.'
  ];
  const conceptReact = ['a-sad','a-shake','a-jump'];
  const conceptLead = ['<b>Pasiva</b>: me callo y cedo.', '<b>Agresiva</b>: ataco e impongo.', '<b>Asertiva</b>: digo y escucho.'];
  const closingLines = [
    'Prueba con: <b>«Yo siento… cuando… y necesito…»</b>. Habla de ti, no de lo que hizo la otra persona.',
    'Una frase al día durante siete días. Anota qué reacción provocó. <b>Pequeños cambios, gran efecto.</b>'
  ];
  const chat = [
    'Asertiva: <b>decir lo que siento</b> y pedir lo que necesito, sin descalificar.',
    'El lenguaje construye lo que creemos. Una palabra puede <b>abrir</b> o <b>cerrar</b> una conversación.',
    'Si necesitas ayuda, toca <b>✦ Pista</b>.'
  ];
  function idleChat(){ if(!bubble.classList.contains('show')) say(pick(chat), 5000, 0); }

  /* ---------- eventos de la actividad iii (conversaciones) ---------- */
  function needleAngle(){
    const n = $('#needle'); if(!n) return null;
    const m = getComputedStyle(n).transform;
    if(m && m !== 'none'){ const v = (m.match(/matrix\(([^)]+)\)/) || [])[1]; if(v){ const p = v.split(',').map(Number); return Math.atan2(p[1], p[0]) * 180 / Math.PI; } }
    const a = (n.getAttribute('transform') || '').match(/rotate\(\s*(-?[\d.]+)/);
    return a ? parseFloat(a[1]) : null;
  }
  function onAnswer(ok){
    lastActivity = Date.now();
    const chosen = $('#choiceCol .reply-btn.chosen');
    const type = chosen ? chosen.dataset.type : null;           // pasiva | agresiva | asertiva
    const sensitive = !!$('#sceneSetting .tag-sensible');
    if(ok === true){ react('a-jump', 750); sparks(12); }
    else if(type === 'agresiva' && !sensitive) react('a-shake', 700);
    else if(ok === false) react('a-sad', 1100);
    else react('a-think', 1200);
    const lines = {
      asertiva: sensitive ? '<b>Asertiva</b>: pusiste un límite con una razón propia. Eso protege.' : '¡<b>Asertiva</b>! Nombras el hecho, no atacas a la persona y sostienes tu lugar.',
      pasiva:   sensitive ? 'Eso fue <b>pasivo</b>. Es difícil decir que no; lee la explicación con calma.' : 'Eso fue <b>pasivo</b>: callar o ceder deja el problema en pie.',
      agresiva: sensitive ? 'Eso fue <b>agresivo</b>. Se entiende el enojo, pero así se aleja a quien quieres cuidar.' : 'Eso fue <b>agresivo</b>: atacas a la persona en vez de poner un límite.'
    };
    setTimeout(() => {                                           // espera a que la aguja se asiente
      say(lines[type] || (ok ? 'Muy bien.' : 'Lee la explicación con calma.'), 6200, 2, ok ? 'good' : 'bad');
    }, reduce ? 0 : 750);
  }
  const fb = $('#feedback');
  if(fb) new MutationObserver(() => {
    if(!fb.classList.contains('show')) return;
    onAnswer(fb.classList.contains('incorrect') ? false : fb.classList.contains('correct') ? true : null);
  }).observe(fb, { attributes:true, attributeFilter:['class'] });

  const sc = $('#scCurrent'); let lastSc = sc ? sc.textContent : null;
  if(sc) new MutationObserver(() => {
    if(sc.textContent === lastSc) return; lastSc = sc.textContent;
    const i = parseInt(sc.textContent, 10) - 1; react('a-think', 1600);
    say(nextLines[Math.min(Math.max(i,0), nextLines.length - 1)], 5600, 2);
  }).observe(sc, { childList:true, characterData:true, subtree:true });

  const seal = $('#seal');
  if(seal) new MutationObserver(() => {
    if(!seal.classList.contains('show') || ctx.scDone) return; ctx.scDone = true;
    const m = ($('#sealScore') ? $('#sealScore').textContent : '').match(/(\d+)\s*\/\s*(\d+)/);
    const s = m ? +m[1] : ctx.ok, t = m ? +m[2] : (ctx.ok + ctx.bad) || 4;
    if(s === t){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Perfecto!</b> Hablas con claridad y con respeto.', 6500, 3, 'good'); }
    else if(s >= t/2){ sparks(10); react('a-excited', 1400); say('<b>¡Buen trabajo!</b> Repasa las explicaciones y seguirás mejorando.', 6500, 3); }
    else { react('a-think', 1400); say('Gracias por intentarlo. Repasa los tres estilos conmigo y lo logras.', 6500, 3); }
  }).observe(seal, { attributes:true, attributeFilter:['class'] });

  const choiceCol = $('#choiceCol');
  if(choiceCol) choiceCol.addEventListener('mouseover', e => {
    const b = e.target.closest('button, [role=button], [data-choice], #choiceCol > *'); if(!b) return;
    const r = b.getBoundingClientRect(); gazeX = r.left + r.width/2; gazeUntil = Date.now() + 1400;
    if(!reacting) react('a-think', 1200);
  });

  /* ---------- actividad iv (elegir la forma respetuosa) ---------- */
  const rw = $('#rewriteList'), rwStatus = $('#rewriteStatus');
  const answered = new Set();
  const rwWhy = [
    ['Pides <b>una capacidad</b> (fuerza), no un sexo.', 'Sigue repartiendo tareas por sexo. Pide la <b>capacidad</b>, no el género.'],
    ['<b>«Una persona adulta de su familia»</b> incluye a todas las familias.', 'Poner a la madre por defecto sigue asignándole el cuidado a ellas.'],
    ['<b>Preguntar qué pasó</b> devuelve el enojo a su causa real.', 'Explicar su enojo por «sus días» sirve para no escucharla.'],
    ['<b>Un buen trabajo se reconoce sin comparaciones.</b>', 'Un elogio con condición mide el trabajo contra una expectativa baja.']
  ];
  if(rw){
    rw.addEventListener('mouseover', e => {
      const card = e.target.closest('#rewriteList > *'); if(!card || card.dataset.done) return;
      hover = card; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === card) hover = null; }, 9000);
    });
    rw.addEventListener('mouseleave', () => { hover = null; });
    rw.addEventListener('click', e => {
      const btn = e.target.closest('.opt-btn'); if(!btn) return;
      const card = btn.closest('#rewriteList > *'); if(!card || answered.has(card)) return;
      setTimeout(() => {                                          // la página marca right / wrong al hacer clic
        if(!card.dataset.done) return;
        const ok = btn.classList.contains('right') ? true : btn.classList.contains('wrong') ? false : null;
        const idx = [...rw.children].indexOf(card), why = rwWhy[idx];
        answered.add(card); holdOn(card, 3400); hover = null;
        if(ok === true){ ctx.rwOk = (ctx.rwOk||0) + 1; react('a-jump', 750); sparks(10); say('¡Eso! ' + (why ? why[0] : 'Dice lo mismo <b>sin excluir ni herir</b>.'), 6200, 2, 'good'); }
        else if(ok === false){ react('a-sad', 1100); say('Mmm, esa no. ' + (why ? why[1] : 'Fíjate en quién queda fuera de la frase.'), 6500, 2, 'bad'); }
        else { react('a-think', 1200); say('Anotado. Fíjate en quién queda fuera de la frase.', 4200, 2); }
        checkRewriteDone();
      }, 120);
    });
  }
  function checkRewriteDone(){
    if(ctx.rwDone || !rw) return;
    const total = rw.children.length;
    const txt = rwStatus ? rwStatus.textContent : '';
    if(answered.size >= total || /complet|termin|finaliz/i.test(txt)){
      ctx.rwDone = true; const okN = ctx.rwOk || 0;
      setTimeout(() => {
        if(okN === total){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Todas bien!</b> Ya reconoces el lenguaje que incluye y respeta.', 7000, 3, 'good'); }
        else { sparks(8); react('a-excited', 1400); say(`Terminaste: <b>${okN} de ${total}</b> bien. Repasa las que fallaron en «Lenguaje no sexista».`, 7000, 3); }
      }, 3400);
    }
  }
  if(rwStatus) new MutationObserver(checkRewriteDone).observe(rwStatus, { childList:true, characterData:true, subtree:true });

  /* ---------- contenidos: actúa cada estilo ---------- */
  function hoverable(node, html, anim, ms = 6200){
    node.addEventListener('mouseenter', () => {
      hover = node; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === node) hover = null; }, 9000);
      if(anim) react(anim, anim === 'a-jump' ? 750 : 1000);
      say(html, ms, 1);
    });
    node.addEventListener('mouseleave', () => { if(hover === node) hover = null; });
  }
  $$('.concept-card').forEach((c, i) => {
    const q = c.querySelector('.quote');
    hoverable(c, (conceptLead[i] || '') + (q ? ' Suena así: <i>' + esc(q.textContent) + '</i>' : ''), conceptReact[i]);
  });
  $$('.lex-row').forEach((c, i) => hoverable(c, lexLines[i] || 'Mira cómo cambia la frase: dice lo mismo sin excluir.', 'a-think', 7000));
  $$('.closing-card').forEach((c, i) => hoverable(c, closingLines[i] || '', 'a-jump'));

  /* ---------- globales ---------- */
  addEventListener('mousemove', e => { cursorX = e.clientX; lastActivity = Date.now(); }, { passive:true });
  addEventListener('touchstart', e => { cursorX = e.touches[0].clientX; lastActivity = Date.now(); }, { passive:true });

  const sections = $$('main > section'), seen = new Set();
  sections.forEach((s, i) => {
    if(i === 0) return;
    const io = new IntersectionObserver(([en]) => {
      if(en.isIntersecting && !seen.has(i)){ seen.add(i); say(sectionLines[i] || '', 5200, 0); io.disconnect(); }
    }, { threshold:.35 });
    io.observe(s);
  });
  const currentSection = () => { const m = innerHeight/2; return sections.findIndex(s => { const r = s.getBoundingClientRect(); return r.top <= m && r.bottom >= m; }); };
  $('#mHint').addEventListener('click', () => {
    if(!enabled) return; const s = currentSection(); react('a-think', 1800);
    if(s === 2 && !ctx.scDone) say('<b>Pista:</b> la asertiva habla de <i>lo que yo siento</i> y de <i>lo que necesito</i>. Ni te calles ni ataques.', 7000, 3);
    else if(s === 3 && !ctx.rwDone) say('<b>Pista:</b> ¿la frase deja fuera a alguien o usa lo femenino como insulto? Esa no es la respetuosa.', 7000, 3);
    else say('<b>Recuerda:</b> pasiva me callo, agresiva ataco, asertiva <b>digo y escucho</b>.', 7000, 3);
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
