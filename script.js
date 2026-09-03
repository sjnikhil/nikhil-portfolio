const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const bar=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+'%';});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
