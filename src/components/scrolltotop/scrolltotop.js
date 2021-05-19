const scrollToTopBtn = document.getElementById("scrollToTopBtn")

const target = document.querySelector("footer");

function callback(entries, observer) {
  entries.forEach( entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add('showBtn')
    } else {
      // Hide button
      scrollToTopBtn.classList.remove('showBtn')
    }
  })
}

let observer = new IntersectionObserver(callback);

observer.observe(target);