// Simple Box Content System
document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('.radio-inputs input[type="radio"]');
    const contentBoxes = document.querySelectorAll('.content-box');
    
    // Show HTML content by default
    document.getElementById('html-content').classList.add('active');
    
    // Add event listeners to radio buttons
    radioInputs.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                // Hide all content boxes
                contentBoxes.forEach(box => box.classList.remove('active'));
                
                // Show the selected content box
                const targetBox = document.getElementById(`${this.value}-content`);
                if (targetBox) {
                    targetBox.classList.add('active');
                }
            }
        });
    });
});
