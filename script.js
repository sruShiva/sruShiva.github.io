(function(){
  const toggle=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  if(toggle&&nav){
    const closeMenu=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
    window.matchMedia('(min-width:781px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
  }
  // Highlight the nav link for the section currently in view (home page only)
  const sectionLinks=[...document.querySelectorAll('.nav>a[href^="#"]')];
  const homeLink=document.querySelector('.nav>a[href="index.html"]');
  if(sectionLinks.length&&homeLink){
    const targets=sectionLinks.map(a=>({a,el:document.querySelector(a.getAttribute('href'))})).filter(t=>t.el);
    const update=()=>{
      const y=window.scrollY+120;let current=null;
      targets.forEach(t=>{if(t.el.offsetTop<=y)current=t;});
      sectionLinks.forEach(a=>a.classList.remove('active'));
      homeLink.classList.toggle('active',!current);
      if(current)current.a.classList.add('active');
      if(current)homeLink.removeAttribute('aria-current');else homeLink.setAttribute('aria-current','page');
    };
    let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(()=>{update();ticking=false;});}},{passive:true});
    update();
  }
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const filters=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('[data-topic]')];
  filters.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filters.forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});let count=0;cards.forEach(card=>{const show=filter==='all'||card.dataset.topic.split(' ').includes(filter);card.hidden=!show;if(show)count++;});const empty=document.getElementById('no-results');if(empty)empty.hidden=count>0;}));
})();
