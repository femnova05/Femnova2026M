const preguntas = [
  {t:"La identidad se construye únicamente a partir de lo que otras personas piensan de nosotros.", mito:true, e:"La identidad es un proceso propio que integra la historia personal, las emociones, los valores, la cultura y las vivencias de cada quien; no depende solo de la mirada externa."},
  {t:"La identidad de género y la orientación sexual son lo mismo.", mito:true, e:"La identidad de género se refiere a cómo una persona se percibe y se define a sí misma, mientras que la orientación sexual tiene que ver con hacia quién siente atracción. Son dimensiones distintas."},
  {t:"La diversidad de género ha existido en distintas culturas a lo largo de la historia.", mito:false, e:"Diversas culturas, como algunas comunidades indígenas de América, Asia y Oceanía, han reconocido históricamente identidades de género más allá del binario hombre/mujer."},
  {t:"Los estereotipos de género asignan roles y características fijas a las personas solo por su sexo, sin considerar su individualidad.", mito:false, e:"Eso es justamente lo que hace un estereotipo: generaliza y puede limitar las oportunidades, los gustos y la libre expresión de cada persona."},
  {t:"Todos los niños deben jugar con carros y todas las niñas con muñecas porque así es su naturaleza.", mito:true, e:"Esa idea es un estereotipo cultural, no una regla biológica. Los gustos e intereses de una persona no dependen del sexo con el que nació."},
  {t:"La identidad de una persona puede transformarse y seguir construyéndose a lo largo de la vida.", mito:false, e:"La identidad no es estática: se nutre de nuevas experiencias, relaciones y aprendizajes en cada etapa de la vida."},
  {t:"Reconocer la diversidad de género favorece el respeto y disminuye la discriminación.", mito:false, e:"Comprender que existen distintas formas de vivir y expresar el género ayuda a construir entornos más inclusivos y respetuosos para todas las personas."},
  {t:"Los estereotipos de género no afectan las decisiones de vida de las personas, como su carrera o su forma de vestir.", mito:true, e:"Los estereotipos sí influyen, muchas veces de forma inconsciente, en decisiones educativas, laborales y personales, limitando las opciones que una persona cree tener disponibles."},
  {t:"Existe una única forma “correcta” de ser hombre o de ser mujer.", mito:true, e:"No existe un molde único: cada persona expresa su identidad de manera particular, y reducirla a un solo modelo desconoce esa diversidad."},
  {t:"Conocer la propia identidad ayuda a tomar decisiones más coherentes con los valores y necesidades de cada persona.", mito:false, e:"La autoconciencia sobre quién se es facilita relaciones más sanas y decisiones alineadas con el propio bienestar."}
];
let current=0, answered=false, correctCount=0;
const $=id=>document.getElementById(id);
$('scTotal').textContent=preguntas.length;
const dotsEl=$('dots');
preguntas.forEach((_,i)=>{const d=document.createElement('div'); d.className='dot'+(i===0?' active':''); dotsEl.appendChild(d);});
const updateScore=()=>{$('scorePill').textContent=`Aciertos ${correctCount} / ${preguntas.length}`;};
const setNeedle=deg=>{$('needle').style.transform=`rotate(${deg}deg)`;};

function load(i){
  answered=false; const p=preguntas[i];
  $('scCurrent').textContent=i+1;
  $('statementText').textContent=p.t;
  document.querySelectorAll('.reply-btn').forEach(b=>{b.disabled=false; b.classList.remove('chosen','right','wrong','dim','reveal');});
  const fb=$('feedback'); fb.className='feedback'; fb.innerHTML='';
  $('nextBtn').classList.remove('show');
  setNeedle(0); Guardian.reset();
  [...dotsEl.children].forEach((d,idx)=>{d.className='dot'+(idx===i?' active':idx<i?' done':'');});
}
$('choiceCol').addEventListener('click',e=>{
  const btn=e.target.closest('.reply-btn'); if(!btn||answered) return;
  answered=true;
  const p=preguntas[current], eligioMito=btn.dataset.mito==='1', ok=eligioMito===p.mito;
  if(ok) correctCount++; updateScore();
  setNeedle(p.mito?-58:58); Guardian.answer(ok,p.mito);
  document.querySelectorAll('.reply-btn').forEach(b=>{
    b.disabled=true;
    const isCorrectBtn=(b.dataset.mito==='1')===p.mito;
    if(b===btn) b.classList.add('chosen',ok?'right':'wrong');
    else if(isCorrectBtn) b.classList.add('reveal'); else b.classList.add('dim');
  });
  const fb=$('feedback'); fb.className='feedback show '+(ok?'correct':'incorrect');
  fb.innerHTML=`<span class="verdict">${ok?'✓ Correcto':'✗ Es '+(p.mito?'un mito':'una realidad')}</span>${p.e}`;
  const nb=$('nextBtn'); nb.textContent=current<preguntas.length-1?'Siguiente →':'Ver resultado →'; nb.classList.add('show');
});
$('nextBtn').addEventListener('click',()=>{
  if(current<preguntas.length-1){current++; load(current); $('scenarioCard').scrollIntoView({behavior:'smooth',block:'center'});}
  else{
    const n=preguntas.length;
    $('sealScore').textContent=`${correctCount}/${n}`;
    $('seal').classList.add('show'); $('resultBox').classList.add('show'); Guardian.finish(correctCount,n);
    $('resultMessage').textContent = correctCount===n
      ? "Identificaste todas las afirmaciones. Comprender la identidad, la diversidad de género y los estereotipos es clave para relacionarnos con más respeto."
      : correctCount>=n*0.7
      ? "Tienes una base sólida. Revisa las explicaciones de lo que se te escapó: cada mito desmontado ayuda a mirar la identidad y la diversidad con más claridad."
      : "Este es un buen punto de partida. Nada aquí busca hacerte sentir mal por no saberlo antes, sino ofrecerte información clara sobre identidad, diversidad de género y estereotipos.";
    $('scenarioCard').style.opacity='.4'; $('scenarioCard').style.pointerEvents='none';
    $('seal').scrollIntoView({behavior:'smooth',block:'center'});
  }
});
$('restartBtn').addEventListener('click',()=>{
  current=0; correctCount=0; updateScore(); load(0); Guardian.greet();
  $('seal').classList.remove('show'); $('resultBox').classList.remove('show');
  $('scenarioCard').style.opacity=''; $('scenarioCard').style.pointerEvents='';
  $('scenarioCard').scrollIntoView({behavior:'smooth',block:'center'});
});
load(0);

/* ===== Actividad 2 ===== */
const rewrites=[
  {phrase:"“Ese niño llora mucho; tiene que aprender a ser hombre.”",
   options:[{text:"“Está bien que llore, pero que lo haga en casa y no frente a los demás.”",ok:false},{text:"“Llorar es una forma natural de expresar emociones, sin importar el género.”",ok:true},{text:"“Mejor distraerlo para que deje de llorar.”",ok:false}],
   note:"Las emociones no tienen sexo. Pedirle a un niño que las esconda es un estereotipo que le limita expresarse; reconocerlas le ayuda a crecer con bienestar."},
  {phrase:"“Las niñas no sirven para las ciencias; que estudien algo más suave.”",
   options:[{text:"“Las capacidades para las ciencias dependen del interés y la práctica, no del sexo.”",ok:true},{text:"“Algunas sí pueden, pero son la excepción.”",ok:false},{text:"“Pueden estudiarlas, pero les costará más que a ellos.”",ok:false}],
   note:"Las otras respuestas conservan la idea de que las mujeres parten en desventaja. Los estereotipos influyen en la carrera que creemos posible, aunque no sean ciertos."},
  {phrase:"“Si no se comporta como una verdadera mujer, algo le pasa.”",
   options:[{text:"“Tal vez debería esforzarse más por comportarse como se espera.”",ok:false},{text:"“Cada quien expresa su identidad a su manera; no existe un molde único.”",ok:true},{text:"“Mejor no hablar de eso con ella.”",ok:false}],
   note:"No existe una única forma correcta de ser hombre o mujer. Reducir a una persona a un modelo desconoce su individualidad."}
];
const rl=$('rewriteList'), rs=$('rewriteStatus'); let ra=0, rc=0;
const corner=`<svg viewBox="0 0 22 22"><path d="M1 21V6a5 5 0 015-5h15" fill="none" stroke="#C9A44C" stroke-width="1.2"/></svg>`;
rewrites.forEach((r,idx)=>{
  const card=document.createElement('div'); card.className='gothic-frame rewrite-card';
  card.innerHTML=['tl','tr','bl','br'].map(c=>`<div class="corner ${c}">${corner}</div>`).join('')+
   `<div class="rewrite-top"><span class="heard">Frase ${idx+1}</span><div class="phrase">${r.phrase}</div></div><div class="rewrite-options"></div>`;
  const wrap=card.querySelector('.rewrite-options');
  const note=document.createElement('div'); note.className='rewrite-note'; note.textContent=r.note;
  r.options.forEach(o=>{
    const b=document.createElement('button'); b.className='opt-btn'; b.textContent=o.text;
    b.addEventListener('click',()=>{
      if(card.dataset.done) return; card.dataset.done='1'; ra++; if(o.ok) rc++;
      wrap.querySelectorAll('.opt-btn').forEach((x,i)=>{x.disabled=true; if(r.options[i].ok) x.classList.add('right'); else if(x===b) x.classList.add('wrong'); else x.classList.add('dim');});
      note.classList.add('show'); Guardian.rewrite(o.ok, ra===rewrites.length, rc, rewrites.length);
      rs.textContent= ra===rewrites.length?`Actividad completa — ${rc} de ${rewrites.length} bien elegidas.`:`${ra} de ${rewrites.length} respondidas.`;
    });
    wrap.appendChild(b);
  });
  wrap.appendChild(note); rl.appendChild(card);
});
