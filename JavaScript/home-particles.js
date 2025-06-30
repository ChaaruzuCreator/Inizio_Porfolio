/**
 * Home Section Pixel Particles
 * Creates pixel art particles for the home section
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get home section
    const homeSection = document.getElementById('home');
    const videoContainer = homeSection.querySelector('.video-container');
    
    if (homeSection && videoContainer) {
        // Create pixel particles container
        const homeParticlesContainer = document.createElement('div');
        homeParticlesContainer.className = 'home-pixel-particles';        homeParticlesContainer.style.position = 'absolute';
        homeParticlesContainer.style.width = '100%';
        homeParticlesContainer.style.height = '100%';
        homeParticlesContainer.style.zIndex = '-1';
        homeParticlesContainer.style.pointerEvents = 'none';
        videoContainer.appendChild(homeParticlesContainer);
        
        // Create pixel art particles for the home section
        for (let i = 0; i < 40; i++) {
            createHomePixelParticle(homeParticlesContainer);
        }
    }
});

/**
 * Creates a single pixel art particle for the home section
 */
function createHomePixelParticle(container) {
    const particle = document.createElement('div');
    
    // Random pixel size
    const size = Math.floor(Math.random() * 5) + 3;
    
    // Random position
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;
    
    // Random color (theme colors)
    const colors = ['#EFB6C8', '#A888B5', '#8174A0', '#441752'];
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
    const duration = Math.random() * 5 + 3;
    particle.style.animation = `float-home-particle ${duration}s infinite ease-in-out`;
    
    // Add to container
    container.appendChild(particle);
    
    // Add animation keyframes to document if not already present
    if (!document.getElementById('home-pixel-particle-keyframes')) {
        const style = document.createElement('style');
        style.id = 'home-pixel-particle-keyframes';
        style.textContent = `
            @keyframes float-home-particle {
                0% { transform: translateY(0) rotate(0); }
                50% { transform: translateY(-${Math.random() * 30 + 15}px) rotate(${Math.random() * 360}deg); }
                100% { transform: translateY(0) rotate(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add parallax scroll effect to particles
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        const homeSection = document.getElementById('home');
        
        if (homeSection) {
            const homeBounds = homeSection.getBoundingClientRect();
            
            // If home section is in view
            if (homeBounds.top < window.innerHeight && homeBounds.bottom > 0) {
                // Calculate scroll position relative to section
                const relativeScroll = scrollY - (homeBounds.top + scrollY - window.innerHeight);
                
                // Apply parallax effect with random factor for more natural movement
                const parallaxFactor = Math.random() * 0.2 + 0.1;
                particle.style.transform = `translateY(${relativeScroll * parallaxFactor}px)`;
            }
        }
    });
}
