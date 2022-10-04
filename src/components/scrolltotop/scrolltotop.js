const rootElement = document.documentElement;
const scrollToTopBtn = document.getElementById("scrollToTopBtn")

/*
const target = document.querySelector(".mainContent");

function callback(entries, observer) {
  entries.forEach(entry => {
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
*/

function handleScroll() {
  // Do something on scroll
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

document.addEventListener('scroll', handleScroll);