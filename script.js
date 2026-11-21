(function(){
  const toggle=document.querySelector('.mobile-toggle');
  const nav=document.querySelector('.nav');
  if(toggle&&nav){
    const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
    nav.addEventListener('click',e=>{if(e.target.closest('a'))close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){close();toggle.focus();}});
    window.matchMedia('(min-width:781px)').addEventListener('change',e=>{if(e.matches)close();});
  }
  // Highlight the nav link for the section in view (home page only)
  const links=[...document.querySelectorAll('.nav>a[href^="#"]')];
  const home=document.querySelector('.nav>a[href="index.html"]');
  if(links.length&&home){
    const targets=links.map(a=>({a,el:document.querySelector(a.getAttribute('href'))})).filter(t=>t.el);
    const update=()=>{
      const y=window.scrollY+120;let cur=null;
      targets.forEach(t=>{if(t.el.offsetTop<=y)cur=t;});
      links.forEach(a=>a.classList.remove('active'));
      home.classList.toggle('active',!cur);
      if(cur){cur.a.classList.add('active');home.removeAttribute('aria-current');}else{home.setAttribute('aria-current','page');}
    };
    let ticking=false;
    window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(()=>{update();ticking=false;});}},{passive:true});
    update();
  }
  const year=document.getElementById('year');
  if(year)year.textContent=new Date().getFullYear();
})();
