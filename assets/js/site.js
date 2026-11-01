// Mobile menu toggle + current year. Site works without JS.
(function(){
  var b=document.querySelector('.menu-btn'), l=document.getElementById('nav-links');
  if(b&&l){
    b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
    l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&l.classList.contains('open')){l.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});
  }
  var y=document.querySelectorAll('[data-year]');for(var i=0;i<y.length;i++){y[i].textContent=new Date().getFullYear();}
})();
