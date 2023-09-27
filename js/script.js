const openBars = document.querySelector('#openTheBars'),
    closeBars = document.querySelector('#closeTheBars'),
    menu = document.querySelector('#menu'),
    overlay = document.querySelector('#overlay'),
    menu_items = document.querySelectorAll('#menu ul li a'),
    header = document.querySelector('#header'),
    sections = document.querySelectorAll('section'),
    topBtn = document.querySelector('#top'),
    logo_DevStuck = document.querySelector('#logo_DevStuck');

function toggleMenuVisibility() {
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('visible');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('invisible');

    overlay.classList.toggle('opacity-60');
    overlay.classList.toggle('visible');
    overlay.classList.toggle('opacity-0');
    overlay.classList.toggle('invisible');
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

openBars.addEventListener('click', toggleMenuVisibility);
closeBars.addEventListener('click', toggleMenuVisibility);
topBtn.addEventListener('click', toTop);

window.addEventListener('scroll', function() {
    const isScrolledPastThreshold = window.scrollY > 150;

    isScrolledPastThreshold ? topBtn.classList.remove('hidden') : topBtn.classList.add('hidden')

    logo_DevStuck.style.width = isScrolledPastThreshold ? '4rem' : '6rem';
    header.style.boxShadow = isScrolledPastThreshold 
        ? ' rgba(149, 157, 165, 0.2) 0px 8px 24px' 
        : ' rgba(149, 157, 165, 0) 0px 0px 0px';

    let x = sections.length;
    while (x-- && window.scrollY + 100 < sections[x].offsetTop) {}

    menu_items.forEach(item => item.classList.remove('text-[#eb4f4f]'));
    menu_items[x].classList.add('text-[#eb4f4f]');
});

menu_items.forEach(item => {
    item.addEventListener('click', event => {
        smoothScroll(event);
        toggleMenuVisibility();
    });
});

function smoothScroll(event) {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}

const splide = new Splide('.splide', {
    perPage: 3,
    focus: 0,
    omitEnd: true,
    breakpoints: {
        911: {
            perPage: 1,
        },
    }
});

splide.mount();
