const gallery = document.querySelector('.cor-gallery');
gallery.classList.remove('no-js');
const list = gallery.querySelector('.cor-gallery ul');
const slides = list.querySelectorAll('.cor-gallery li');

const observerSettings = {
  root: document.querySelector('.cor-gallery'),
  rootMargin: '-10px'
};

if ('IntersectionObserver' in window) {
  Array.prototype.forEach.call(slides, function (slide) {
    let img = slide.querySelector('figure > img');
  });

  const callback = (slides, observer) => {
    Array.prototype.forEach.call(slides, entry => {
      entry.target.classList.remove('visible');
      let a = entry.target.querySelector('a');
      if (a) a.setAttribute('tabindex', '-1');
      if (!entry.intersectionRatio > 0) {
        return;
      }
      let img = entry.target.querySelector('img');
      img.onload = () => img.classList.remove('dots');
      img.setAttribute('src', img.dataset.src);
      entry.target.classList.add('visible');
      if (a) a.removeAttribute('tabindex', '-1');
    })
  }

  const observer = new IntersectionObserver(callback, observerSettings);
  Array.prototype.forEach.call(slides, t => observer.observe(t));
} else {
  Array.prototype.forEach.call(slides, function (s) {
    let img = s.querySelector('img');
    img.setAttribute('src', img.getAttribute('data-src'));
    img.classList.remove('dots');
  })
}

const controls = document.createElement('ul')
controls.classList.add('cor-gallery-controls');
controls.setAttribute('aria-label', 'gallery controls');
controls.innerHTML = `
<li>
  <button class="previous" aria-label="previous artwork">
    <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  </button>
</li>
<li>
  <button class="next" aria-label="next artwork">
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </button>
</li>
`;

const prev = controls.querySelector('.previous');
const next = controls.querySelector('.next');
prev.disabled = true;

const instructions = document.getElementById('instructions');
gallery.parentNode.insertBefore(controls, gallery);
gallery.parentNode.style.padding = '0 var(--buttonWidth)';

function scrollIt(slideToShow) {
  let scrollPos = Array.prototype.indexOf.call(slides, slideToShow) * (gallery.scrollWidth / slides.length);
  gallery.scrollLeft = scrollPos;
  return scrollPos;
}

function showSlide(dir, slides) {
  let visible = document.querySelectorAll('.cor-gallery .visible');
  let i = dir === prev ? 0 : 1;

  if (visible.length > 1) {
    scrollIt(visible[i]);
  } else {
    let newSlide = i === 0 ? visible[0].previousElementSibling : visible[0].nextElementSibling;
    if (newSlide) {
      scrollIt(newSlide);
    }
  }
}

controls.addEventListener('click', function (e) {
  showSlide(e.target.closest('button'), slides);
});

function disable() {
  prev.disabled = gallery.scrollLeft < 1;
  next.disabled = gallery.scrollLeft === list.scrollWidth - list.offsetWidth;
}

var debounced;
gallery.addEventListener('scroll', function () {
  window.clearTimeout(debounced);
  debounced = setTimeout(disable, 200);
});