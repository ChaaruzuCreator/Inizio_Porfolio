// Project Scroll Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project scroll script loaded');
    
    const projectsGrid = document.getElementById('projectsGrid');
    const leftArrow = document.getElementById('projectArrowLeft');
    const rightArrow = document.getElementById('projectArrowRight');
    
    console.log('Elements found:', {
        projectsGrid: !!projectsGrid,
        leftArrow: !!leftArrow,
        rightArrow: !!rightArrow
    });
    
    if (!projectsGrid || !leftArrow || !rightArrow) {
        console.error('Missing required elements for project scroll');
        return;
    }
    
    const scrollAmount = 320; // Width of one card plus gap
    
    // Check scroll position and update arrow states
    function updateArrowStates() {
        const scrollLeft = projectsGrid.scrollLeft;
        const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
        
        leftArrow.disabled = scrollLeft <= 0;
        rightArrow.disabled = scrollLeft >= maxScroll - 1;
        
        console.log('Arrow states updated:', {
            scrollLeft,
            maxScroll,
            leftDisabled: leftArrow.disabled,
            rightDisabled: rightArrow.disabled
        });
    }
    
    // Scroll left
    leftArrow.addEventListener('click', () => {
        console.log('Left arrow clicked');
        projectsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        // Update arrow states after a short delay
        setTimeout(updateArrowStates, 300);
    });
    
    // Scroll right
    rightArrow.addEventListener('click', () => {
        console.log('Right arrow clicked');
        projectsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        // Update arrow states after a short delay
        setTimeout(updateArrowStates, 300);
    });
    
    // Update arrow states on scroll
    projectsGrid.addEventListener('scroll', updateArrowStates);
    
    // Initial arrow state check
    setTimeout(updateArrowStates, 100);
    
    // Update arrow states on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateArrowStates, 100);
    });
    
    console.log('Project scroll navigation initialized successfully');
});
