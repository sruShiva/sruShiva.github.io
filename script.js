(function(){
  const toggle=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const tps=document.getElementById('tps'),tokens=document.getElementById('tokens'),watts=document.getElementById('watts');
  function calculate(){if(!(tps&&tokens&&watts))return;const rate=Number(tps.value),count=Number(tokens.value),power=Number(watts.value);const secs=count/rate,wh=power*secs/3600,mwh=wh/count*1000;
    document.getElementById('tps-out').textContent=rate;document.getElementById('tokens-out').textContent=count.toLocaleString('en-US');document.getElementById('watts-out').textContent=power;
    document.getElementById('runtime').innerHTML=secs.toFixed(1)+' <small>s</small>';document.getElementById('energy').innerHTML=wh.toFixed(2)+' <small>Wh</small>';document.getElementById('energy-token').innerHTML=mwh.toFixed(2)+' <small>mWh</small>';
  }
  if(tps&&tokens&&watts){[tps,tokens,watts].forEach(el=>el.addEventListener('input',calculate));document.getElementById('reset-calc').addEventListener('click',()=>{tps.value=100;tokens.value=1000;watts.value=300;calculate();});calculate();}
  const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('[data-topic]')];
  filters.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filters.forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});let count=0;cards.forEach(card=>{const show=filter==='all'||card.dataset.topic.split(' ').includes(filter);card.hidden=!show;if(show)count++;});const empty=document.getElementById('no-results');if(empty)empty.hidden=count>0;}));
})();
