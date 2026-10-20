/* ================= ACTIVIDAD 1: Simulación de conversaciones ================= */
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
      <circle cx="44" cy="42" r="10"/>
      <path d="M28 80c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <path d="M68 36 H96 V62 H68 Z"/>
      <path d="M74 46 h16" stroke-dasharray="3 3"/>
      <path d="M74 54 h16" stroke-dasharray="3 3"/>
      <path d="M36 92 h46" stroke-width="1.2"/>
    `,
    setting: 'Cena familiar, una semana antes de las elecciones.',
    dialogue: [
      { who:'Tu tío', text:'Tú vota por quien yo te diga. Las muchachas no saben de esas cosas.' }
    ],
    sensible: false,
    options: [
      { text:'Sonrío y asiento para evitar discutir.', type:'pasiva' },
      { text:'“Mejor ocúpate de lo tuyo, que tú ni sabes por quién votar.”', type:'agresiva' },
      { text:'“Gracias por tu opinión, pero voy a revisar las propuestas y decidir yo.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Asentir evita el roce del momento, pero deja entender que tu voto es negociable. Puedes oír su opinión sin comprometerte a seguirla.',
      agresiva:'Devolver el golpe cambia el tema: ahora se discute quién ofende más y no quién decide tu voto. Se puede marcar el límite sin descalificar.',
      asertiva:'Reconoces su opinión, pero dejas claro que la decisión es tuya. Es una frase corta, firme y sin insulto, que mantiene el respeto.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <circle cx="42" cy="40" r="10"/>
      <path d="M26 78c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <path d="M70 34 H98 V62 H70 Z"/>
      <path d="M76 48 l6 6 l11 -13" stroke-width="1.4"/>
      <path d="M30 94 h56" stroke-dasharray="3 3"/>
    `,
    setting: 'Una amiga dice que no piensa ir a votar.',
    dialogue: [
      { who:'Tu amiga', text:'Yo ni voy a votar. Un voto no cambia nada y todos los políticos son iguales.' }
    ],
    sensible: false,
    options: [
      { text:'“Tienes razón, mejor quedarse en casa.”', type:'pasiva' },
      { text:'“Qué egoísta eres. Así luego no tienes derecho a quejarte.”', type:'agresiva' },
      { text:'“Te entiendo, es cansador. Pero muchas mujeres esperaron décadas por este derecho. ¿Revisamos juntas las propuestas?”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Darle la razón evita la discusión, pero refuerza la idea de que participar no sirve. Puedes comprender su desencanto y aun así ofrecerle otra mirada.',
      agresiva:'Acusar de egoísta suele cerrar la conversación y provocar defensa. Quien se siente atacada rara vez cambia de opinión.',
      asertiva:'Validas su cansancio, aportas un dato que da sentido al voto y propones una acción conjunta. Así se invita sin presionar.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <circle cx="40" cy="42" r="10"/>
      <path d="M24 80c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <circle cx="82" cy="42" r="10" stroke-dasharray="3 3"/>
      <path d="M66 80c1.6-16 8-23 16-23s14.4 7 16 23" stroke-dasharray="3 3"/>
      <path d="M52 24 H68 V38 H52 Z"/>
      <path d="M56 30 h8" stroke-width="1.2"/>
    `,
    setting: 'Al salir de votar, tu pareja te espera afuera.',
    dialogue: [
      { who:'Tu pareja', text:'Me vas a decir por quién votaste. Y si no, es que me ocultas algo.' }
    ],
    sensible: true,
    options: [
      { text:'“Está bien, te lo digo para que te quedes tranquilo.”', type:'pasiva' },
      { text:'“Pues yo reviso tus mensajes y vemos quién esconde más.”', type:'agresiva' },
      { text:'“Mi voto es secreto y es mío. No te lo voy a decir, y necesito que respetes mi decisión.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Ceder una vez suele abrir la puerta a la siguiente. Exigir que te expliques por tu voto es una forma de control, y el control crece cuando nadie lo detiene.',
      agresiva:'Responder con otra amenaza convierte la relación en un intercambio de vigilancia. El problema no es quién pregunta primero, sino que se use la sospecha para controlar.',
      asertiva:'Recuerdas que el voto es secreto, dices no y explicas lo que necesitas. Si la presión continúa o aumenta, conviene hablarlo con alguien de confianza o buscar apoyo.'
    },
    correct:'asertiva'
  },
  {
    icon: `
      <circle cx="44" cy="42" r="10"/>
      <path d="M28 80c1.6-16 8-23 16-23s14.4 7 16 23"/>
      <path d="M70 30 H100 V54 H92 V62 L84 54 H70 Z"/>
      <path d="M76 40 h18" stroke-dasharray="3 3"/>
      <path d="M76 47 h12" stroke-dasharray="3 3"/>
      <path d="M32 94 h50" stroke-width="1.2"/>
    `,
    setting: 'Debate en clase sobre participación ciudadana.',
    dialogue: [
      { who:'Un compañero', text:'Las mujeres en política solo sirven de adorno, nunca resuelven nada.' }
    ],
    sensible: false,
    options: [
      { text:'Me quedo callada para no armar problema.', type:'pasiva' },
      { text:'“Tú ni siquiera sabes de lo que hablas, ignorante.”', type:'agresiva' },
      { text:'“Eso no es cierto: las mujeres han legislado y gobernado. Hablemos de propuestas, no de adornos.”', type:'asertiva' }
    ],
    feedback: {
      pasiva:'Callar evita el roce, pero la afirmación queda sin respuesta delante de todo el grupo. Una frase breve puede cambiar el tono de la clase.',
      agresiva:'El insulto tapa tu argumento y desvía el debate hacia la pelea. Quien responde con hechos suele ser más convincente.',
      asertiva:'Corriges con un hecho y devuelves la conversación a lo importante: las propuestas. Sin insultos, pero sin dejarlo pasar.'
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
    (c.sensible ? '<div><span class="tag-sensible"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>Tema sensible · control en la pareja</span></div>' : '');

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

/* ================= ACTIVIDAD 2: Elegir la afirmación acertada ================= */
const rewrites = [
  {
    phrase:'“El voto femenino fue un regalo que dieron los gobernantes.”',
    options:[
      { text:'“Fue una concesión que los hombres decidieron dar cuando quisieron.”', ok:false },
      { text:'“Fue el resultado de décadas de organización y reclamo de mujeres que exigieron ese derecho.”', ok:true },
      { text:'“Llegó por casualidad, sin que nadie lo pidiera.”', ok:false }
    ],
    note:'Los derechos políticos de las mujeres se consiguieron porque muchas los exigieron durante años, a pesar de la burla y la resistencia. Presentarlos como un favor borra esa lucha.'
  },
  {
    phrase:'“Yo no voto, eso es cosa de los hombres.”',
    options:[
      { text:'“Votar es un derecho que costó conseguir; ejercerlo también es honrar a quienes lo pidieron.”', ok:true },
      { text:'“Está bien no votar, nadie va a notar un voto menos.”', ok:false },
      { text:'“Que voten ellos, nosotras mejor nos ocupamos de la casa.”', ok:false }
    ],
    note:'Votar no pertenece a ningún sexo. Las otras opciones repiten la idea de que la política es un asunto ajeno a las mujeres, justo la que el sufragio vino a cambiar.'
  },
  {
    phrase:'“Ella solo ganó porque es mujer.”',
    options:[
      { text:'“Ganó por cuota, no por mérito.”', ok:false },
      { text:'“Seguro la ayudaron, no pudo hacerlo sola.”', ok:false },
      { text:'“Ganó por sus propuestas y por los votos que obtuvo.”', ok:true }
    ],
    note:'Atribuir un triunfo solo al sexo de la candidata resta valor a sus propuestas. Se evalúa a una candidata por lo que plantea y hace, igual que a cualquier otra persona.'
  },
  {
    phrase:'“Vota por quien te diga tu familia, para qué te vas a informar.”',
    options:[
      { text:'“Pregunta a tu familia por quién votar y haz lo que digan.”', ok:false },
      { text:'“Infórmate, compara propuestas y decide por ti misma; el voto es secreto.”', ok:true },
      { text:'“No votes, así evitas problemas con tu familia.”', ok:false }
    ],
    note:'El voto es personal y secreto. Escuchar a la familia está bien, pero la decisión informada es de quien vota. Abstenerse para evitar conflicto tampoco resuelve nada: cede el lugar a otros.'
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
});\n\n/* ===== Script extraído del HTML original ===== */\n\n/* ================= PERSONAJE GUÍA — NIVEL 5 =================
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

  const size = () => ({ w: el.offsetWidth || 96, h: el.offsetHeight || 130 });
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
    '¡Hola! Soy <b>Lumi</b>, tu guía. Hoy hablamos de por qué el voto femenino fue una <b>conquista</b>.',
    'Tres formas de ejercer la ciudadanía. Pasa el cursor sobre cada tarjeta y te las cuento.',
    'Conversaciones reales sobre el voto. Tu respuesta moverá la <b>aguja del tono</b>.',
    'Ahora elige la afirmación que respeta <b>los hechos y a las mujeres</b>.',
    'Último tramo: reflexiona y llévate el reto de la semana.'
  ];
  const conceptReact = ['a-jump','a-excited','a-think'];
  const conceptLines = [
    '<b>Votar</b>: decido quién me representa. Es libre, secreto y personal.',
    '<b>Ser elegida</b>: presento propuestas y ocupo cargos. Cuando hay mujeres decidiendo, la agenda cambia.',
    '<b>Participar</b>: la democracia no termina en la urna; incluye organizarse, informarse y exigir cuentas.'
  ];
  const mythLines = [
    'No votaban porque <b>la ley se lo impedía</b>, no por falta de interés. Muchas lucharon décadas.',
    'Cada persona vota según su criterio. El voto es <b>secreto</b>: nadie debe condicionarlo.',
    'Los resultados se construyen <b>sumando</b> votos; abstenerse deja la decisión en manos de otros.',
    'Participar es un <b>derecho</b>, no un favor.'
  ];
  const closingLines = [
    'Piensa en las mujeres de tu familia: <b>¿qué cambiaría si hoy se sintieran escuchadas?</b>',
    'Pregunta a una mujer mayor cuándo votó por primera vez. Su historia merece <b>contarse</b>. ¡Anótala!'
  ];
  const nextLines = [
    'Cena familiar y un tío opinando por ti. Escucha, pero <b>decide tú</b>.',
    'Tu amiga está desencantada. Valida su cansancio y <b>ofrécele otra mirada</b>.',
    'Tema delicado: tu voto es <b>secreto</b>. Piensa cómo decir que no sin atacar.',
    'Un debate en clase. Un <b>hecho</b> pesa más que un insulto.'
  ];
  const hints = [
    'Reconoce su opinión, pero deja claro que <b>la decisión es tuya</b>.',
    'Valida su cansancio, aporta un dato y <b>propón hacerlo juntas</b>.',
    'Recuerda: el voto es <b>secreto</b>. Di que no y explica lo que necesitas.',
    'Corrige con un <b>hecho</b> y vuelve a las propuestas.'
  ];
  const asertivaLines = [
    '¡<b>Asertiva</b>! Escuchas su opinión, pero la decisión es <b>tuya</b>.',
    '¡<b>Asertiva</b>! Validas su cansancio y le propones <b>hacerlo juntas</b>.',
    '<b>Asertiva</b>: tu voto es secreto y lo dijiste con firmeza. Si la presión sigue, habla con alguien de confianza.',
    '¡<b>Asertiva</b>! Corriges con un <b>hecho</b> y vuelves a las propuestas.'
  ];
  const rwWhy = [
    ['<b>Décadas de organización y reclamo</b>: no fue un regalo.', 'Presentarlo como un favor <b>borra la lucha</b> de quienes lo exigieron.'],
    ['Votar no pertenece a ningún sexo: ejercerlo es <b>honrar a quienes lo pidieron</b>.', 'Esas opciones repiten que la política es ajena a las mujeres, justo lo que el sufragio vino a cambiar.'],
    ['Se evalúa a una candidata por <b>sus propuestas</b>, como a cualquier persona.', 'Atribuir su triunfo solo a su sexo le resta valor a sus propuestas.'],
    ['Escuchar a la familia está bien, pero <b>la decisión informada es tuya</b>.', 'El voto es personal y secreto; abstenerse para evitar conflicto cede el lugar a otros.']
  ];
  const chat = [
    'En Colombia, las mujeres votaron por primera vez en el plebiscito de <b>1957</b>.',
    'El voto es <b>libre, secreto y personal</b>: nadie puede ejercerlo por ti.',
    'Si necesitas ayuda, toca <b>✦ Pista</b>.'
  ];
  function idleChat(){ if(!bubble.classList.contains('show')) say(pick(chat), 5000, 0); }

  /* ---------- actividad iii: conversaciones ---------- */
  const convIdx = () => Math.max(0, parseInt(($('#scCurrent') || {}).textContent, 10) - 1 || 0);
  function onAnswer(ok){
    lastActivity = Date.now();
    const chosen = $('#choiceCol .reply-btn.chosen');
    const type = chosen ? chosen.dataset.type : null;           // pasiva | agresiva | asertiva
    const sensitive = !!$('#sceneSetting .tag-sensible');
    const i = convIdx();
    if(ok === true){ react('a-jump', 750); sparks(12); }
    else if(type === 'agresiva' && !sensitive) react('a-shake', 700);
    else if(ok === false) react(sensitive ? 'a-think' : 'a-sad', 1100);
    else react('a-think', 1200);
    const lines = {
      asertiva: asertivaLines[i] || '¡<b>Asertiva</b>!',
      pasiva:   sensitive ? 'Eso fue <b>pasivo</b>. Es difícil decir que no, y ceder abre la puerta a la siguiente exigencia. Lee con calma.' : 'Eso fue <b>pasivo</b>: asentir o callar deja la idea en pie.',
      agresiva: sensitive ? 'Eso fue <b>agresivo</b>. Se entiende el enojo, pero la vigilancia mutua no protege tu decisión.' : 'Eso fue <b>agresivo</b>: el insulto tapa tu argumento.'
    };
    setTimeout(() => say(lines[type] || (ok ? 'Muy bien.' : 'Lee la explicación con calma.'), 6400, 2, ok ? 'good' : 'bad'), reduce ? 0 : 750);
  }
  const fb = $('#feedback');
  if(fb) new MutationObserver(() => {
    if(!fb.classList.contains('show')) return;
    onAnswer(fb.classList.contains('incorrect') ? false : fb.classList.contains('correct') ? true : null);
  }).observe(fb, { attributes:true, attributeFilter:['class'] });

  const sc = $('#scCurrent'); let lastSc = sc ? sc.textContent : null;
  if(sc) new MutationObserver(() => {
    if(sc.textContent === lastSc) return; lastSc = sc.textContent;
    react('a-think', 1600); say(nextLines[Math.min(convIdx(), nextLines.length - 1)], 5800, 2);
  }).observe(sc, { childList:true, characterData:true, subtree:true });

  const seal = $('#seal');
  if(seal) new MutationObserver(() => {
    if(!seal.classList.contains('show') || ctx.scDone) return; ctx.scDone = true;
    const m = ($('#sealScore') ? $('#sealScore').textContent : '').match(/(\d+)\s*\/\s*(\d+)/);
    const s = m ? +m[1] : ctx.ok, t = m ? +m[2] : 4;
    if(s === t){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Perfecto!</b> Tu voz y tu voto están en buenas manos: <b>las tuyas</b>.', 7000, 3, 'good'); }
    else if(s >= t/2){ sparks(10); react('a-excited', 1400); say('<b>¡Buen trabajo!</b> Repasa las explicaciones y seguirás afinando tu voz.', 7000, 3); }
    else { react('a-think', 1400); say('Gracias por intentarlo. Repasa los mitos y realidades conmigo y lo logras.', 7000, 3); }
  }).observe(seal, { attributes:true, attributeFilter:['class'] });

  const choiceCol = $('#choiceCol');
  if(choiceCol) choiceCol.addEventListener('mouseover', e => {
    const b = e.target.closest('.reply-btn'); if(!b) return;
    const r = b.getBoundingClientRect(); gazeX = r.left + r.width/2; gazeUntil = Date.now() + 1400;
    if(!reacting) react('a-think', 1200);
  });

  /* ---------- actividad iv: elegir la afirmación acertada ---------- */
  const rw = $('#rewriteList'), rwStatus = $('#rewriteStatus'), answered = new Set();
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
        const why = rwWhy[[...rw.children].indexOf(card)];
        answered.add(card); holdOn(card, 3400); hover = null;
        if(ok === true){ ctx.rwOk = (ctx.rwOk||0) + 1; react('a-jump', 750); sparks(10); say('¡Eso! ' + (why ? why[0] : 'Respeta los hechos y a las mujeres.'), 6500, 2, 'good'); }
        else if(ok === false){ react('a-sad', 1100); say('Mmm, esa no. ' + (why ? why[1] : 'Busca la que respeta los hechos.'), 6800, 2, 'bad'); }
        else { react('a-think', 1200); say('Anotado. Lee la nota con calma.', 4200, 2); }
        checkRewriteDone();
      }, 120);
    });
  }
  function checkRewriteDone(){
    if(ctx.rwDone || !rw) return;
    const total = rw.children.length;
    if(answered.size >= total){
      ctx.rwDone = true; const okN = ctx.rwOk || 0;
      setTimeout(() => {
        if(okN === total){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Todas bien!</b> Distingues los hechos de los mitos sobre el voto femenino.', 7200, 3, 'good'); }
        else { sparks(8); react('a-excited', 1400); say(`Terminaste: <b>${okN} de ${total}</b> bien. Repasa «Mitos y realidades» y vuelve a mirar las que fallaste.`, 7200, 3); }
      }, 3600);
    }
  }

  /* ---------- contenidos ---------- */
  function hoverable(node, html, anim, ms = 6200){
    node.addEventListener('mouseenter', () => {
      hover = node; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === node) hover = null; }, 9000);
      if(anim) react(anim, anim === 'a-jump' ? 750 : 1000);
      say(html, ms, 1);
    });
    node.addEventListener('mouseleave', () => { if(hover === node) hover = null; });
  }
  const purpose = $('.purpose-box');
  if(purpose) hoverable(purpose, 'En Colombia las mujeres pudieron votar desde la reforma de <b>1954</b> y lo hicieron por primera vez en el plebiscito de <b>1957</b>, tras décadas de reclamo.', 'a-jump', 7500);
  $$('.concept-card').forEach((c, i) => {
    const q = c.querySelector('.quote');
    hoverable(c, (conceptLines[i] || '') + (q ? ' <i>' + esc(q.textContent) + '</i>' : ''), conceptReact[i] || 'a-think', 7200);
  });
  $$('.lex-row').forEach((c, i) => hoverable(c, mythLines[i] || 'Mira lo que dicen los <b>hechos</b>.', 'a-think', 6800));
  $$('.closing-card').forEach((c, i) => hoverable(c, closingLines[i] || '', 'a-jump'));

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
    if(s === 2 && !ctx.scDone) say('<b>Pista:</b> ' + (hints[convIdx()] || 'di lo que piensas sin callarte ni atacar.'), 7000, 3);
    else if(s === 3 && !ctx.rwDone) say('<b>Pista:</b> busca la opción que reconoce la <b>lucha de las mujeres</b> y respeta que cada persona decida.', 7500, 3);
    else say('<b>Recuerda:</b> el voto es <b>libre, secreto y personal</b>; nadie puede ejercerlo por ti.', 7000, 3);
  });
  const toggle = $('#mToggle');
  toggle.addEventListener('click', () => {
    enabled = !enabled; el.classList.toggle('off', !enabled); bubble.classList.toggle('off', !enabled);
    toggle.textContent = enabled ? 'Ocultar' : 'Mostrar'; toggle.setAttribute('aria-pressed', String(!enabled));
  });

  el.classList.add('ready');
  setTimeout(() => say(sectionLines[0], 6500, 1), 1800);
  requestAnimationFrame(loop);
})();\n