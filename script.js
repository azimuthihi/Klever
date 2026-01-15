document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    const navIcon = document.querySelector('.nav__icon');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            navIcon.classList.toggle('open');

            // Optional: Toggle body scroll if you want to prevent scrolling when menu is open
            // document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });
    }
});
