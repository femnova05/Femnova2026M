/* ================= MASCOTA GUÍA =================
   Camina hacia donde ocurre la acción, mira al cursor, reacciona a cada
   respuesta, acompaña el arrastre de tarjetas y celebra los resultados. */
(() => {
  const el = document.getElementById('mascot');
  const flip = document.getElementById('mFlip');
  const lean = document.getElementById('mLean');
  const anim = document.getElementById('mAnim');
  const bubble = document.getElementById('mBubble');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx = { sc:0, scDone:false, dragging:false, dragZone:null, placed:0 };
  let x = -140, y = innerHeight - 12;          // pies (centro-abajo), coordenadas de viewport
  let facing = 1, walking = false, reacting = false, enabled = true;
  let cursorX = innerWidth/2, gazeUntil = 0, gazeX = null;
  let hover = null, hoverTimer = null;         // tarjeta/ejemplo sobre el que se posa
  let hold = null;                              // ancla temporal tras soltar una tarjeta
  let bubbleTimer = null, bubblePrio = 0, lastActivity = Date.now();

  const $ = s => document.querySelector(s);
  const size = () => ({ w: el.offsetWidth || 96, h: el.offsetHeight || 130 });
  const vis = r => r.bottom > 0 && r.top < innerHeight;

  /* ---------- a dónde quiere ir ---------- */
  function target(){
    const {w,h} = size(), vw = innerWidth, vh = innerHeight;
    const clampX = v => Math.min(vw - w/2 - 8, Math.max(w/2 + 8, v));
    const clampY = v => Math.min(vh - 10, Math.max(h + 10, v));
    const perch = r => ({ x: clampX(r.left + r.width/2), y: clampY(r.top + 4) });

    if(hold && Date.now() < hold.until){ const r = hold.node.getBoundingClientRect(); if(vis(r)) return perch(r); }
    if(ctx.dragging){
      if(ctx.dragZone){ const r = document.getElementById(ctx.dragZone === 'igualdad' ? 'zoneIgualdad' : 'zoneEquidad').getBoundingClientRect(); return perch(r); }
      const r = $('.drop-zones').getBoundingClientRect(); return perch(r);
    }
    if(hover){ const r = hover.getBoundingClientRect(); if(vis(r)) return { x: clampX(r.right - w*0.55), y: clampY(r.top + 4) }; }
    const seal = document.getElementById('seal');
    if(seal.classList.contains('show')){ const r = seal.getBoundingClientRect(); if(vis(r)) return { x: clampX(r.right + w*0.7), y: clampY(r.bottom - 4) }; }
    const card = document.getElementById('scenarioCard').getBoundingClientRect();
    if(!ctx.scDone && vis(card) && card.top > h + 14){
      // se posa sobre el borde superior de la tarjeta, junto a la balanza
      return { x: clampX(card.right - w*0.55), y: clampY(card.top + 2) };
    }
    return { x: clampX(vw - w*0.75), y: vh - 14 };
  }

  /* ---------- bucle de movimiento ---------- */
  function setAnim(cls){ anim.className = 'm-anim ' + cls; }
  function loop(){
    if(enabled){
      const t = target(), {w,h} = size();
      const dx = t.x - x, dy = t.y - y, dist = Math.hypot(dx, dy);
      let step = reduce ? dist : Math.min(dist, Math.max(0.6, dist * 0.085), 13);
      if(dist > 1){ x += dx/dist*step; y += dy/dist*step; }
      const moving = dist > 6;
      if(moving && Math.abs(dx) > 4) facing = dx > 0 ? 1 : -1;
      if(moving !== walking){ walking = moving; if(!reacting) setAnim(walking ? 'a-walk' : 'a-idle'); }
      // mirada: sigue al cursor cuando está quieta
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

  /* ---------- globo de diálogo ---------- */
  function placeBubble(){
    if(!bubble.classList.contains('show')) return;
    const {w,h} = size(), bw = bubble.offsetWidth, bh = bubble.offsetHeight;
    let bx = x - bw/2, by = y - h - bh - 14, below = false;
    bx = Math.min(innerWidth - bw - 10, Math.max(10, bx));
    if(by < 8){ by = y + 12; below = true; }
    bubble.style.transform = `translate(${bx}px, ${by}px)`;
    bubble.classList.toggle('below', below);
    bubble.style.setProperty('--tail', Math.min(bw - 26, Math.max(12, x - bx - 7)) + 'px');
  }
  function say(html, ms = 5200, prio = 1, tone = ''){
    if(!enabled) return;
    if(bubble.classList.contains('show') && prio < bubblePrio) return;
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
  function sparks(n = 10, colors = ['#E7C56B','#C9A44C','#F5E6C8'], spread = 90){
    if(reduce) return;
    const {w,h} = size(), cx = x, cy = y - h*0.6;
    for(let i = 0; i < n; i++){
      const s = document.createElement('div'); s.className = 'm-spark';
      s.style.left = cx + 'px'; s.style.top = cy + 'px';
      s.style.background = colors[i % colors.length];
      document.body.appendChild(s);
      const a = Math.random()*Math.PI*2, d = spread*(0.5 + Math.random());
      s.animate([
        { transform:'translate(0,0) rotate(45deg) scale(1)', opacity:1 },
        { transform:`translate(${Math.cos(a)*d}px, ${Math.sin(a)*d - 40}px) rotate(${180 + Math.random()*180}deg) scale(.3)`, opacity:0 }
      ], { duration: 800 + Math.random()*500, easing:'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => s.remove();
    }
  }
  function confetti(){
    if(reduce) return;
    const cols = ['#E7C56B','#C9A44C','#F5E6C8','#6b3a70','#8fae6f'];
    for(let i = 0; i < 46; i++){
      const s = document.createElement('div'); s.className = 'm-spark';
      s.style.left = Math.random()*innerWidth + 'px'; s.style.top = '-12px';
      s.style.background = cols[i % cols.length];
      document.body.appendChild(s);
      s.animate([
        { transform:'translate(0,0) rotate(45deg)', opacity:1 },
        { transform:`translate(${(Math.random()-.5)*160}px, ${innerHeight + 30}px) rotate(${400 + Math.random()*300}deg)`, opacity:.9 }
      ], { duration: 1800 + Math.random()*1600, delay: Math.random()*500, easing:'ease-in', fill:'backwards' }).onfinish = () => s.remove();
    }
  }
  const pick = a => a[Math.floor(Math.random()*a.length)];

  /* ---------- contenido ---------- */
  const intro = [
    'Este tema es delicado. Tómate tu tiempo para pensarlo.',
    'Piensa si todas las personas necesitan <b>exactamente lo mismo</b> aquí.',
    'Mira qué necesita cada persona para llegar al <b>mismo punto</b>.',
    'Fíjate en la situación <b>real</b> de cada quien.'
  ];
  const hints = [
    'Pregúntate: ¿hay <b>confianza y libertad</b> para las dos personas, o una controla a la otra?',
    'Pregúntate: ¿tratar a todos <b>idéntico</b> resuelve la diferencia de necesidad?',
    'Pregúntate: ¿se da lo mismo a todos o <b>lo que cada quien necesita</b> para entrar?',
    'Pregúntate: ¿el reparto considera <b>la situación real</b> de cada persona?'
  ];
  const dragWhy = {
    d1:'<b>Igualdad</b>: lo mismo para todos, sin mirar su punto de partida.',
    d2:'<b>Equidad</b>: se compensa a quien tuvo menos oportunidades.',
    d3:'<b>Igualdad</b>: el mismo horario para todo el personal.',
    d4:'<b>Equidad</b>: se ajusta la carga a la necesidad médica real.',
    d5:'<b>Igualdad</b>: misma beca para todos, sin revisar su situación.',
    d6:'<b>Equidad</b>: el apoyo se da solo a quien lo necesita.'
  };
  const sectionLines = [
    '¡Hola! Soy tu guía. Mi trabajo: ayudarte a distinguir <b>igualdad</b> de <b>equidad</b>.',
    'Pasa el cursor sobre las tarjetas y te cuento la diferencia.',
    'Tu turno: decide si cada situación es <b>justa</b> o no. Yo te acompaño.',
    'Ahora arrastra cada situación a su lugar. Iré contigo.'
  ];
  const chat = [
    'Igualdad: <b>lo mismo</b> para todos. Equidad: <b>lo que cada quien necesita</b>.',
    'Una rampa junto a las escaleras es un gran ejemplo de equidad.',
    'Tratar igual no siempre es tratar con justicia.',
    'Si necesitas ayuda, toca <b>✦ Pista</b>.'
  ];
  function idleChat(){ if(!bubble.classList.contains('show')) say(pick(chat), 5000, 0); }

  /* ---------- API usada por la página ---------- */
  const api = {
    onScenario(i){ ctx.sc = i; ctx.scDone = false; },
    onNext(i){ ctx.sc = i; react('a-think', 1600); say(intro[i], 5600, 1); },
    onAnswer(ok, i){
      const sensible = i === 0;
      if(ok){
        react('a-jump', 750); sparks(12);
        say(sensible ? '<b>Correcto.</b> El amor no justifica controlar a nadie.' : pick(['¡Muy bien! Lo notaste enseguida.','¡Correcto! Vas con buen ojo.','¡Eso es! Así se reconoce la equidad.']), 4600, 2, 'good');
      }else{
        react('a-sad', 1100);
        say(sensible ? 'Está bien, es un tema difícil. Lee la explicación con calma.' : pick(['Casi. Lee la explicación y lo vemos juntos.','No pasa nada, así se aprende. Mira la explicación.','Mmm, revisemos esa idea juntos.']), 5200, 2, 'bad');
      }
    },
    onFinish(score, total){
      ctx.scDone = true; react(score === total ? 'a-jump' : 'a-excited', 1600);
      if(score === total){ confetti(); sparks(18); say('<b>¡Perfecto!</b> Distingues muy bien la igualdad de la equidad.', 6500, 3, 'good'); }
      else if(score >= total/2){ sparks(10); say('<b>¡Buen trabajo!</b> Repasa las explicaciones y verás cómo mejora.', 6500, 3); }
      else say('Gracias por intentarlo. Repasa los conceptos conmigo y lo logras.', 6500, 3);
    },
    dragStart(){ ctx.dragging = true; ctx.dragZone = null; hold = null; react('a-excited', 1800); say('Piensa: ¿se da <b>lo mismo</b> a todos, o <b>lo que cada quien necesita</b>?', 4200, 2); },
    dragEnd(){ ctx.dragging = false; ctx.dragZone = null; },
    dragOver(z){ if(ctx.dragZone !== z){ ctx.dragZone = z; say(z === 'igualdad' ? '¿<b>Igualdad</b>? Lo mismo para todos.' : '¿<b>Equidad</b>? Según la necesidad.', 1800, 2); } },
    dragLeave(z){ if(ctx.dragZone === z) ctx.dragZone = null; },
    onDrop(id, ok, zone, placed, total, correctCount){
      ctx.dragging = false; ctx.dragZone = null;
      hold = { node: document.getElementById(zone === 'igualdad' ? 'zoneIgualdad' : 'zoneEquidad'), until: Date.now() + 2600 };
      if(ok){ react('a-jump', 750); sparks(10); say('¡Bien! ' + dragWhy[id], 5200, 2, 'good'); }
      else { react('a-shake', 700); say('Uy, esa iba en otro lado. ' + dragWhy[id], 6200, 2, 'bad'); }
      if(placed === total){
        setTimeout(() => {
          if(correctCount === total){ confetti(); sparks(18); react('a-jump', 800); say('<b>¡Todas bien!</b> Ya dominas la diferencia entre igualdad y equidad.', 7000, 3, 'good'); }
          else { react('a-excited', 1400); say(`Terminaste: <b>${correctCount} de ${total}</b> bien. Repasa las que fallaron y vuelve a intentarlo.`, 7000, 3); }
        }, 3200);
      }
    }
  };

  /* ---------- eventos propios (sin tocar la lógica de la página) ---------- */
  addEventListener('mousemove', e => { cursorX = e.clientX; lastActivity = Date.now(); }, { passive:true });
  addEventListener('touchstart', e => { cursorX = e.touches[0].clientX; lastActivity = Date.now(); }, { passive:true });

  // se inclina hacia el botón sobre el que está el cursor
  const choiceRow = document.getElementById('choiceRow');
  choiceRow.addEventListener('mouseover', e => {
    const b = e.target.closest('.arch-btn'); if(!b || b.disabled) return;
    const r = b.getBoundingClientRect(); gazeX = r.left + r.width/2; gazeUntil = Date.now() + 1400;
    react('a-think', 1400);
  });
  // se posa sobre las tarjetas de concepto y los ejemplos
  const cardLines = [
    '<b>Igualdad</b>: se da lo mismo a todas las personas, sin importar su punto de partida.',
    '<b>Equidad</b>: se da a cada quien lo que necesita para llegar a las mismas condiciones.'
  ];
  document.querySelectorAll('.concept-card').forEach((c, i) => hoverable(c, cardLines[i], 6200));
  const chipLines = [
    'Esto es <b>igualdad</b>: el mismo monto para todos, sin mirar quién lo necesita más.',
    'Esto es <b>equidad</b>: la rampa responde a una necesidad real.',
    'Esto es <b>equidad</b>: el reparto se ajusta al tiempo real de cada persona.'
  ];
  document.querySelectorAll('.example-chip').forEach((c, i) => hoverable(c, chipLines[i], 6200));
  function hoverable(node, line, ms){
    node.addEventListener('mouseenter', () => {
      hover = node; clearTimeout(hoverTimer); hoverTimer = setTimeout(() => { if(hover === node) hover = null; }, 9000);
      say(line, ms, 1);
    });
    node.addEventListener('mouseleave', () => { if(hover === node) hover = null; });
  }

  // comenta cada sección la primera vez que se ve
  const sections = [...document.querySelectorAll('main > section')];
  const seen = new Set();
  sections.forEach((s, i) => {
    if(i === 0) return;
    const io = new IntersectionObserver(([en]) => {
      if(en.isIntersecting && !seen.has(i)){ seen.add(i); say(sectionLines[i], 5200, 0); io.disconnect(); }
    }, { threshold:.35 });
    io.observe(s);
  });

  // controles
  function currentSection(){
    const mid = innerHeight/2;
    return sections.findIndex(s => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom >= mid; });
  }
  document.getElementById('mHint').addEventListener('click', () => {
    if(!enabled) return;
    const s = currentSection(); react('a-think', 1800);
    if(s === 2 && !ctx.scDone) say('<b>Pista:</b> ' + hints[ctx.sc], 7000, 3);
    else if(s === 3) say('<b>Pista:</b> pregúntate si se da <b>lo mismo</b> a todos o <b>lo que cada quien necesita</b>.', 7000, 3);
    else say('<b>Recuerda:</b> igualdad es lo mismo para todos; equidad es dar a cada quien lo que necesita.', 7000, 3);
  });
  const toggle = document.getElementById('mToggle');
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    el.classList.toggle('off', !enabled); bubble.classList.toggle('off', !enabled);
    toggle.textContent = enabled ? 'Ocultar' : 'Mostrar';
    toggle.setAttribute('aria-pressed', String(!enabled));
  });

  // entrada: llega caminando desde la izquierda y saluda
  y = innerHeight - 14; el.classList.add('ready');
  setTimeout(() => say(sectionLines[0], 6500, 1), 1800);
  requestAnimationFrame(loop);
  window.Mascot = api;
})();

/* ===== Script %d ===== */

/* ================= ACTIVIDAD 1: ¿Es justo o no? ================= */
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

const scenarios = [
  {
    icon: `
      <circle cx="42" cy="42" r="8"/>
      <path d="M26 74c1.5-13 7-20 16-20s14.5 7 16 20"/>
      <circle cx="76" cy="46" r="7"/>
      <path d="M62 74c1.3-11 6-17 14-17s12.7 6 14 17"/>
      <path d="M50 52 L68 52" stroke-dasharray="3 3"/>
      <rect x="47" y="49" width="6" height="6"/>
      <rect x="65" y="49" width="6" height="6"/>
      <path d="M50 43 a4 4 0 0 1 8 0 v6 h-8 z" stroke-width="1.2"/>
    `,
    text: `En una pareja, él decide qué ropa puede usar ella, con quién puede hablar y le revisa el celular "porque la quiere".`,
    sensible: true,
    correct: 'injusto',
    feedback: `Controlar la vida de otra persona no es cuidado ni amor: es una forma de violencia. La equidad y el respeto en una relación implican confianza y libertad para ambas personas, no vigilancia ni control.`
  },
  {
    icon: `
      <rect x="26" y="64" width="66" height="4"/>
      <rect x="34" y="40" width="14" height="24"/>
      <rect x="52" y="40" width="14" height="24"/>
      <rect x="70" y="40" width="14" height="24"/>
      <circle cx="59" cy="26" r="9"/>
      <path d="M52 32 h14" stroke-dasharray="2 2"/>
      <path d="M59 17 L59 26 L64 29" stroke-width="1.3"/>
    `,
    text: `En una clase, la maestra le da el mismo tiempo extra en el examen a todos los estudiantes, incluido uno con una condición visual que necesita más tiempo para leer.`,
    sensible: false,
    correct: 'injusto',
    feedback: `Tratar a todos igual aquí no resuelve la diferencia real de necesidad. Para que sea equitativo, ese estudiante necesitaría un ajuste adicional, no exactamente el mismo trato.`
  },
  {
    icon: `
      <rect x="28" y="46" width="62" height="34"/>
      <path d="M28 46 L59 24 L90 46"/>
      <rect x="52" y="60" width="14" height="20"/>
      <path d="M28 80 L18 92 L44 92 Z"/>
      <circle cx="24" cy="86" r="3"/>
    `,
    text: `Un edificio construye una rampa además de las escaleras, para que las personas en silla de ruedas también puedan entrar.`,
    sensible: false,
    correct: 'justo',
    feedback: `No se trata de dar lo mismo a todos, sino de dar lo que cada quien necesita para tener el mismo acceso: eso es equidad.`
  },
  {
    icon: `
      <path d="M30 76 V46 L59 24 L88 46 V76 Z"/>
      <path d="M30 76 H88" />
      <circle cx="48" cy="58" r="6"/>
      <path d="M38 76c1-8 5-12 10-12s9 4 10 12"/>
      <circle cx="70" cy="60" r="6"/>
      <path d="M60 76c1-7 4.5-11 10-11s8.7 4 10 11"/>
    `,
    text: `En casa, ambas personas de la pareja se reparten las tareas del hogar según el tiempo libre real que tiene cada una esa semana, no en partes matemáticamente iguales.`,
    sensible: false,
    correct: 'justo',
    feedback: `Ajustar la repartición según la situación real de cada persona es equidad: el objetivo es que la carga se sienta pareja, no que se divida en fracciones idénticas.`
  }
];

let current = 0;
let answered = false;
let correctCount = 0;
document.getElementById('scTotal').textContent = scenarios.length;

const dotsEl = document.getElementById('dots');
scenarios.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  dotsEl.appendChild(d);
});

function updateScorePill(){
  document.getElementById('scorePill').textContent = `Aciertos ${correctCount} / ${scenarios.length}`;
}

function loadScenario(i){
  answered = false;
  const s = scenarios[i];
  document.getElementById('scCurrent').textContent = i+1;
  document.getElementById('scenarioIcon').innerHTML = medallionFrame(s.icon);
  document.getElementById('scenarioText').innerHTML = s.text + (s.sensible ? '<span class="tag-sensible"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>Tema sensible · violencia de género</span>' : '');
  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  fb.innerHTML = '';
  document.getElementById('nextBtn').classList.remove('show');
  document.querySelectorAll('.arch-btn').forEach(b => b.disabled = false);
  resetScale();
  window.Mascot&&Mascot.onScenario(i);
  [...dotsEl.children].forEach((d, idx) => {
    d.className = 'dot' + (idx === i ? ' active' : idx < i ? ' done' : '');
  });
}

function resetScale(){
  document.getElementById('beam').style.transform = 'rotate(0deg)';
  document.getElementById('panL').style.transform = 'translateY(0px)';
  document.getElementById('panR').style.transform = 'translateY(0px)';
}

function tiltScale(toJusto){
  const beam = document.getElementById('beam');
  const panL = document.getElementById('panL');
  const panR = document.getElementById('panR');
  if(toJusto){
    beam.style.transform = 'rotate(-10deg)'; panL.style.transform = 'translateY(11px)'; panR.style.transform = 'translateY(-11px)';
  } else {
    beam.style.transform = 'rotate(10deg)'; panL.style.transform = 'translateY(-11px)'; panR.style.transform = 'translateY(11px)';
  }
}

document.getElementById('choiceRow').addEventListener('click', (e) => {
  const btn = e.target.closest('.arch-btn');
  if(!btn || answered) return;
  answered = true;
  const choice = btn.dataset.choice;
  const s = scenarios[current];
  const isCorrect = choice === s.correct;
  if(isCorrect) correctCount++;
  updateScorePill();
  window.Mascot&&Mascot.onAnswer(isCorrect, current);
  tiltScale(s.correct === 'justo');
  const fb = document.getElementById('feedback');
  fb.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
  fb.innerHTML = `<span class="verdict">${isCorrect ? '✓ Correcto' : '✗ Revisemos juntos'}</span>${s.feedback}`;
  document.querySelectorAll('.arch-btn').forEach(b => b.disabled = true);
  document.getElementById('nextBtn').textContent = current < scenarios.length - 1 ? 'Siguiente →' : 'Ver resultado →';
  document.getElementById('nextBtn').classList.add('show');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if(current < scenarios.length - 1){
    current++;
    loadScenario(current);
    window.Mascot&&Mascot.onNext(current);
  } else {
    document.getElementById('sealScore').textContent = `${correctCount}/${scenarios.length}`;
    document.getElementById('seal').classList.add('show');
    window.Mascot&&Mascot.onFinish(correctCount, scenarios.length);
    document.getElementById('scenarioCard').style.opacity = '.4';
    document.getElementById('scenarioCard').style.pointerEvents = 'none';
  }
});

loadScenario(0);

/* ================= ACTIVIDAD 2: Arrastrar ================= */
const dragScenarios = [
  { id:'d1', text:'Repartir 3 lápices exactamente iguales entre 3 niños, sin ver si alguno ya tiene material.', zone:'igualdad' },
  { id:'d2', text:'Dar más tiempo de estudio a quien tuvo menos oportunidades antes del examen.', zone:'equidad' },
  { id:'d3', text:'El mismo horario de entrada para todo el personal de la oficina.', zone:'igualdad' },
  { id:'d4', text:'Adaptar la carga de trabajo de una persona en rehabilitación médica.', zone:'equidad' },
  { id:'d5', text:'Dar la misma beca económica a cada estudiante, sin revisar su situación familiar.', zone:'igualdad' },
  { id:'d6', text:'Ofrecer intérprete de lengua de señas solo a quien lo necesita en una charla.', zone:'equidad' }
];

const pool = document.getElementById('pool');
const itemsIgualdad = document.getElementById('itemsIgualdad');
const itemsEquidad = document.getElementById('itemsEquidad');
const dragStatus = document.getElementById('dragStatus');
let placedCount = 0;

dragScenarios.forEach(s => {
  const el = document.createElement('div');
  el.className = 'drag-item';
  el.textContent = s.text;
  el.draggable = true;
  el.dataset.id = s.id;
  el.dataset.zone = s.zone;
  el.addEventListener('dragstart', e => { window.Mascot&&Mascot.dragStart(); el.classList.add('dragging'); e.dataTransfer.setData('text/plain', s.id); });
  el.addEventListener('dragend', () => { el.classList.remove('dragging'); window.Mascot&&Mascot.dragEnd(); });
  pool.appendChild(el);
});

[document.getElementById('zoneIgualdad'), document.getElementById('zoneEquidad')].forEach(zone => {
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over'); window.Mascot&&Mascot.dragOver(zone.dataset.zone); });
  zone.addEventListener('dragleave', () => { zone.classList.remove('over'); window.Mascot&&Mascot.dragLeave(zone.dataset.zone); });
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('over');
    const id = e.dataTransfer.getData('text/plain');
    const original = pool.querySelector(`.drag-item[data-id="${id}"]`);
    if(!original || original.classList.contains('placed')) return;

    const dropZoneName = zone.dataset.zone;
    const correctZone = original.dataset.zone;
    const clone = document.createElement('div');
    clone.className = 'drag-item ' + (dropZoneName === correctZone ? 'right' : 'wrong');
    clone.textContent = original.textContent;
    const target = dropZoneName === 'igualdad' ? itemsIgualdad : itemsEquidad;
    target.appendChild(clone);

    original.classList.add('placed');
    original.draggable = false;

    placedCount++;
    if(placedCount === dragScenarios.length){
      const correct = [...itemsIgualdad.children, ...itemsEquidad.children].filter(el => el.classList.contains('right')).length;
      dragStatus.textContent = `Actividad completa — ${correct} de ${dragScenarios.length} bien clasificadas.`;
    } else {
      dragStatus.textContent = `${placedCount} de ${dragScenarios.length} colocadas.`;
    }
    if(window.Mascot){
      const okCount = [...itemsIgualdad.children, ...itemsEquidad.children].filter(n => n.classList.contains('right')).length;
      Mascot.onDrop(id, dropZoneName === correctZone, dropZoneName, placedCount, dragScenarios.length, okCount);
    }
  });
});
