/* ===== Guía: reacciona a las dinámicas del nivel ===== */
window.Guardian=(()=>{
  const el=document.getElementById('guardian'), img=document.getElementById('gImg'),
        bub=document.getElementById('gBubble'), btn=document.getElementById('gBtn');
  let streak=0, timer=null, tipIdx=0;
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const play=c=>{img.classList.remove('happy','sad','cheer'); void img.offsetWidth; img.classList.add(c);};
  const lean=d=>{el.dataset.lean=d||'';};
  const say=(msg,ms=3800)=>{bub.textContent=msg; bub.classList.add('show'); clearTimeout(timer); timer=setTimeout(()=>bub.classList.remove('show'),ms);};
  const tips=[
    "Si dice “todos” o “siempre”, sospecha: los estereotipos generalizan.",
    "Pregúntate: ¿esto lo respalda la evidencia o solo la costumbre?",
    "Una idea repetida mil veces no se vuelve cierta.",
    "Mira a la persona, no al molde."
  ];
  btn.addEventListener('click',()=>{play('happy'); say(tips[tipIdx++%tips.length],5200);});
  return {
    greet(){streak=0; lean(''); play('happy'); say("Responde con criterio: ¿mito o realidad?");},
    reset(){lean('');},
    answer(ok,mito){
      lean(mito?'l':'r');                       // se inclina hacia donde apunta la aguja
      if(ok){
        streak++; play('happy');
        say(streak===3?"Tres seguidas.":streak===5?"Cinco seguidas: criterio afilado.":
            pick(mito?["Mito desmontado.","Bien visto: eso es un mito."]:["Eso sí es realidad.","Exacto: está respaldado."]));
      }else{
        streak=0; play('sad');
        say(mito?"Era un mito. Lee por qué, abajo.":"Era realidad. Lee la explicación, abajo.");
      }
    },
    finish(score,n){
      lean(''); play('cheer');
      say(score===n?"Perfecto. Ningún estereotipo te la coló.":score>=n*0.7?"Base sólida. Repasa lo que se te escapó.":"Buen punto de partida. Vuelve a jugar.",6000);
    },
    rewrite(ok,done,rc,total){
      play(ok?'happy':'sad');
      if(done) say(`Actividad completa: ${rc} de ${total}.`,5000);
      else say(ok?"Esa sí corrige el estereotipo.":"Esa conserva la idea de fondo. Lee la nota.");
    }
  };
})();
/* primera aparición: saluda cuando el quiz entra en pantalla */
(()=>{const c=document.getElementById('scenarioCard'); if(!c||!('IntersectionObserver' in window)) return;
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){Guardian.greet(); io.disconnect();}},{threshold:.5}); io.observe(c);})();
