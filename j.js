
const links=document.querySelectorAll('nav a');
window.addEventListener('scroll',()=>{
    let fromTop=window.scrollY+100;
    links.forEach(link=>{
        const section=document.querySelector(link.getAttribute('href'));
        if(section.offsetTop<=fromTop && section.offsetTop+section.offsetHeight>fromTop){ link.classList.add('active'); }
        else { link.classList.remove('active'); }
    });
});
 document.getElementById('openVideoBtn').addEventListener('click', ()=>{
      const yt = document.getElementById('ytPlayer');
      if(yt) yt.scrollIntoView({behavior:'smooth'});
    });