const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('overlay');

function openMenu(){
  sidebar.classList.add('open');
  overlay.classList.add('show');
  sidebar.setAttribute('aria-hidden','false');
  hamburger.setAttribute('aria-expanded','true');
}
function closeMenu(){
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  sidebar.setAttribute('aria-hidden','true');
  hamburger.setAttribute('aria-expanded','false');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close sidebar on Escape
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      closeMenu();
    }
  })
});
