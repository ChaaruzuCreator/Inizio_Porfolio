document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Track cursor position
    function updateCursorPosition(e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }

    // Add beat animation on click
    function addBeatAnimation() {
        cursor.classList.add('beat');
        setTimeout(() => {
            cursor.classList.remove('beat');
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
