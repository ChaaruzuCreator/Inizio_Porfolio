/**
 * Loading Screen Animation
 * Creates pixel art particles around the logo during loading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get loader elements
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const loaderBar = document.querySelector('.loader-bar');
    const loaderLogo = document.querySelector('.loader-logo');
    
    // Create pixel particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'pixel-particles';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.zIndex = '-1';
    loader.insertBefore(particlesContainer, loader.firstChild);
    
    // Create pixel art particles
    for (let i = 0; i < 30; i++) {
        createPixelParticle(particlesContainer);
    }
    
    // Logo special effect
    let glitch = false;
    const glitchInterval = setInterval(function() {
        if (Math.random() > 0.85) {
            glitch = true;
            loaderLogo.style.transform = `scale(${1 + Math.random() * 0.1}) translateX(${Math.random() * 4 - 2}px)`;
            loaderLogo.style.filter = `brightness(${1 + Math.random() * 0.3}) contrast(1.1) hue-rotate(${Math.random() * 10}deg)`;
            
            setTimeout(function() {
                glitch = false;
                loaderLogo.style.transform = '';
                loaderLogo.style.filter = '';
            }, 150);
        }
    }, 500);
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(function() {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            clearInterval(glitchInterval);
              // Wait a moment before hiding loader
            setTimeout(function() {
                // Play sound effect if available
                const loadingSound = document.getElementById('loading-complete-sound');
                if (loadingSound) {
                    loadingSound.play().catch(e => console.log('Audio error:', e));
                }
                
                // Hide loader and show content
                loader.classList.add('loader-hidden');
                mainContent.classList.add('content-visible');
                
                // Remove animations-paused class to start all animations
                document.body.classList.remove('animations-paused');
                
                // Remove the loader from DOM after transition
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 500);
            }, 500);
        }
        loaderBar.style.width = progress + '%';
    }, 300);
});

/**
 * Creates a single pixel art particle
 */
function createPixelParticle(container) {
    const particle = document.createElement('div');
    
    // Random pixel size
    const size = Math.floor(Math.random() * 5) + 3;
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Random color (theme colors)
    const colors = ['#907bc5', '#a249dd', '#ED1E79', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Set styles
    particle.style.position = 'absolute';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.backgroundColor = color;
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.opacity = Math.random() * 0.7 + 0.3;
    
    // Add pixel rendering
    particle.style.imageRendering = 'pixelated';
    
    // Animation
    const duration = Math.random() * 3 + 2;
    particle.style.animation = `float-particle ${duration}s infinite ease-in-out`;
    
    // Add to container
    container.appendChild(particle);
    
    // Add animation keyframes to document if not already present
    if (!document.getElementById('pixel-particle-keyframes')) {
        const style = document.createElement('style');
        style.id = 'pixel-particle-keyframes';
        style.textContent = `
            @keyframes float-particle {
                0% { transform: translateY(0) rotate(0); }
                50% { transform: translateY(-${Math.random() * 20 + 10}px) rotate(${Math.random() * 360}deg); }
                100% { transform: translateY(0) rotate(0); }
            }
        `;
        document.head.appendChild(style);
    }
}
