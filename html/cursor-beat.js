document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    // Track cursor position
    function updateCursorPosition(e) {
        // Apply offsets to position the pointer tip exactly at the mouse position
        // These values align the pointer tip with the actual mouse position
        const offsetX = 0;  // Adjust this based on your cursor image
        const offsetY = 0;  // Adjust this based on your cursor image
        
        cursor.style.left = `${e.clientX + offsetX}px`;
        cursor.style.top = `${e.clientY + offsetY}px`;
    }// Add beat animation on click
    function addBeatAnimation() {
        // Set the transform origin to be at the pointer tip during animation
        // This ensures the cursor beats from the pointer tip, not the center
        cursor.style.transformOrigin = "10px 10px"; // Adjust these values to match your cursor's pointer position
        cursor.classList.add('beat');
        setTimeout(() => {
            cursor.classList.remove('beat');
            // Reset transform origin after animation
            cursor.style.transformOrigin = "0 0";
        }, 300); // Duration should match CSS animation
    }

    // Handle different cursor states
    function handleInputHover() {
        cursor.classList.add('input-hover');
    }

    function handleInputLeave() {
        cursor.classList.remove('input-hover');
    }

    function handleLinkHover() {
        cursor.classList.add('link-hover');
    }

    function handleLinkLeave() {
        cursor.classList.remove('link-hover');
    }

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', addBeatAnimation);
    
    // Find all clickable elements and add hover effects
    const clickableElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], .tab-links');
    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');

    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', handleLinkHover);
        element.addEventListener('mouseleave', handleLinkLeave);
    });

    textInputs.forEach(input => {
        input.addEventListener('mouseenter', handleInputHover);
        input.addEventListener('mouseleave', handleInputLeave);
    });
});
