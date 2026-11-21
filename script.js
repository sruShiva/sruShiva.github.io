'use strict';
// Decorative homepage monitor. These values are generated, NOT system telemetry.
const coreGrid = document.getElementById('coreGrid');
for (let i = 0; i < 64; i++) coreGrid.appendChild(document.createElement('i'));
const cores = [...coreGrid.children];
const canvas = document.getElementById('traceCanvas');
const ctx = canvas.getContext('2d');
let tick = 0;
function monitorTick() {
  tick++;
  cores.forEach((el, i) => { const n = Math.sin(i * 1.8 + tick * .19) + Math.cos(i * .41 - tick * .11); el.className = n > .35 ? 'hot' : n > -.65 ? 'mid' : ''; });
  document.getElementById('cpuReading').innerHTML = (65 + Math.sin(tick * .32) * 9).toFixed(1) + '<span>%</span>';
  document.getElementById('queueReading').innerHTML = (12 + Math.round(Math.sin(tick * .29) * 6)) + '<span> jobs</span>';
  document.getElementById('effReading').innerHTML = (1.8 + Math.sin(tick * .09) * .15).toFixed(1) + '<span>×</span>';
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#29444b'; ctx.lineWidth = 1;
  for(let j=1;j<=3;j++){ctx.beginPath();ctx.moveTo(0,h*j/4);ctx.lineTo(w,h*j/4);ctx.stroke();}
  ctx.beginPath();
  for(let x=0;x<w;x+=2){const y=h*.5 + 24*Math.sin((x+tick*8)*.027)+12*Math.sin(x*.1-tick*.35)+6*Math.cos(x*.2+tick*.4); x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
  ctx.strokeStyle='#78e8af';ctx.lineWidth=2;ctx.stroke();
}
monitorTick();
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setInterval(monitorTick, 140);

const controls = ['tokens','throughput','power','carbon'].reduce((obj,id)=>(obj[id]=document.getElementById(id),obj),{});
const format = new Intl.NumberFormat('en-US');
const presets = { efficient:{tokens:2000,throughput:350,power:275,carbon:200},baseline:{tokens:2000,throughput:120,power:450,carbon:400},heavy:{tokens:5000,throughput:60,power:900,carbon:600} };
function refresh() {
  const t=+controls.tokens.value, r=+controls.throughput.value, p=+controls.power.value, c=+controls.carbon.value;
  const seconds=t/r, wh=p*seconds/3600, grams=wh*c/1000;
  document.getElementById('tokensOut').textContent=format.format(t);
  document.getElementById('throughputOut').textContent=format.format(r)+' tok/s';
  document.getElementById('powerOut').textContent=format.format(p)+' W';
  document.getElementById('carbonOut').textContent=format.format(c)+' gCO₂/kWh';
  document.getElementById('timeMetric').innerHTML=seconds.toFixed(1)+' <small>s</small>';
  document.getElementById('energyMetric').innerHTML=wh.toFixed(2)+' <small>Wh</small>';
  document.getElementById('rateMetric').innerHTML=format.format(r)+' <small>tok/s</small>';
  document.getElementById('emissionsMetric').innerHTML=grams.toFixed(2)+' <small>g CO₂</small>';
  document.getElementById('durationTag').textContent='~'+seconds.toFixed(1)+' seconds';
  const bars=document.getElementById('tokenStream');bars.replaceChildren();
  const count=55;const frac=Math.min(1,r/700);
  for(let i=0;i<count;i++){let bar=document.createElement('i');bar.style.height=(16+72*Math.abs(Math.sin(i*.83+frac*3)*Math.cos(i*.19+frac)))+'%';bar.style.animationDelay=i*.008+'s';bars.appendChild(bar);}
  document.querySelectorAll('[data-preset]').forEach(b=>b.classList.toggle('selected',Object.entries(presets[b.dataset.preset]).every(([k,v])=>+controls[k].value===v)));
}
Object.values(controls).forEach(el=>el.addEventListener('input',refresh));
document.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{Object.entries(presets[b.dataset.preset]).forEach(([k,v])=>controls[k].value=v);refresh();}));
refresh();document.getElementById('year').textContent=new Date().getFullYear();
