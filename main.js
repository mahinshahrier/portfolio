// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button logic
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '▲';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "28px";
scrollBtn.style.right = "36px";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#ff9100";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.padding = "10px 16px";
scrollBtn.style.borderRadius = "20px";
scrollBtn.style.fontSize = "1.7rem";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 2px 10px #d5b095";
scrollBtn.style.zIndex = "1500";

window.addEventListener('scroll', function() {
  if(window.scrollY > 250) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in reveal for sections
const fadeEls = document.querySelectorAll('.hero, .content-section, .video-intro');
fadeEls.forEach(el => {
  el.style.opacity = 0;
  el.style.transition = "opacity 0.8s, transform 0.8s";
  el.style.transform = "translateY(60px)";
});

function fadeInOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 120) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Add input focus highlight in forms
document.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('focus', function() {
    this.style.borderColor = "#5a8dee";
    this.style.boxShadow = "0 2px 8px #e0e6fa";
  });
  field.addEventListener('blur', function() {
    this.style.borderColor = "#e6e6fa";
    this.style.boxShadow = "none";
  });
});
