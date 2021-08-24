
// Set things up

const textElements = document.querySelectorAll('.cor-jobs__wordcloud li,[observe]');

const observer = new IntersectionObserver(handleIntersect);
textElements.forEach( textElement => observer.observe(textElement));
  


function handleIntersect(entries) {
  entries.forEach((entry) => {
     
    
    console.log(entry.target);
    console.log(entry.isIntersecting);
    
     
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } 
    
    if (!entry.isIntersecting) {
      entry.target.classList.remove('visible');
    }

  });
}