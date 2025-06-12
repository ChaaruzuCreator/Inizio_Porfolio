/**
 * Create a pixel art favicon animation during loading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Original favicon
    const originalFavicon = document.querySelector('link[rel="icon"]').href;
    
    // Create animated favicon function
    let faviconFrame = 0;
    let faviconColors = ['#a249dd', '#907bc5', '#ED1E79', '#ffffff'];
    
    function updateFavicon() {
        // Get current color
        const color = faviconColors[faviconFrame % faviconColors.length];
        
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        // Load original favicon as image
        const img = new Image();
        img.src = originalFavicon;
        
        img.onload = function() {
            // Draw the image
            ctx.drawImage(img, 0, 0, 32, 32);
            
            // Apply color overlay
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.3;
            ctx.fillRect(0, 0, 32, 32);
            
            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;
            
            // Draw border
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 32, 32);
            
            // Convert to data URL and update favicon
            const dataUrl = canvas.toDataURL('image/png');
            const favicon = document.querySelector('link[rel="icon"]');
            favicon.href = dataUrl;
            
            // Increment frame
            faviconFrame++;
        };
    }
    
    // Start animation
    const faviconInterval = setInterval(updateFavicon, 500);
    
    // Stop animation when page is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            clearInterval(faviconInterval);
            document.querySelector('link[rel="icon"]').href = originalFavicon;
        }, 1000);
    });
});
