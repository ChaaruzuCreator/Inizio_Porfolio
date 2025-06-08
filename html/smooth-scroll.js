// Import Locomotive Scroll
import LocomotiveScroll from 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js';

// Initialize Locomotive Scroll
document.addEventListener('DOMContentLoaded', () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        lerp: 0.05, // Linear interpolation, lower = smoother
        multiplier: 0.8, // Scroll speed
        scrollFromAnywhere: true,
        getDirection: true,
        getSpeed: true
    });

    // Optional: Update scroll on page load
    setTimeout(() => {
        scroll.update();
    }, 1000);
});
