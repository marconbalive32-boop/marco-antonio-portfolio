document.querySelectorAll('.reveal').forEach(e=>{new IntersectionObserver(x=>x.forEach(i=>{if(i.isIntersecting)e.classList.add('active')}),{threshold:.12}).observe(e)})

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

document.querySelectorAll('.hero-metrics strong').forEach((el) => {
  const text = el.textContent.trim();
  const match = text.match(/^(\d+)/);
  if (!match) return;
  const end = Number(match[1]);
  let current = 0;
  const suffix = text.replace(String(end), '');
  const step = Math.max(1, Math.ceil(end / 30));
  const timer = setInterval(() => {
    current += step;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    el.textContent = current + suffix;
  }, 28);
});
