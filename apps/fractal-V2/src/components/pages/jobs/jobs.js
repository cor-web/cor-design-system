import '../../carousel/carousel.js';


const textElements = document.querySelectorAll('.cor-jobs__wordcloud li,[observe]');

const observer = new IntersectionObserver(handleIntersect);
textElements.forEach( textElement => observer.observe(textElement));

function handleIntersect(entries) {
  entries.forEach((entry) => {
     
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } 
    
    if (!entry.isIntersecting) {
      entry.target.classList.remove('visible');
    }

  });
}