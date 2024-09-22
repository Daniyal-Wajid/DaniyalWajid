// cursor.js

export function initializeCursor() {
    const cursor = document.getElementById('cursor');
    const speed = 0.1; // Adjust the speed factor for the cursor

    function updateCursorPosition(e) {
        const { clientX: mouseX, clientY: mouseY } = e;
        let cursorX = cursor.offsetLeft;
        let cursorY = cursor.offsetTop;

        // Calculate the new position with smoothing
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
    }

    function handleMouseOver(e) {
        // Check for buttons or links
        if (e.target.closest('button') || e.target.closest('a')) {
            cursor.classList.add('hover');
        }
    }

    function handleMouseOut(e) {
        // Remove hover class when leaving buttons or links
        if (e.target.closest('button') || e.target.closest('a')) {
            cursor.classList.remove('hover');
        }
    }

    // Use requestAnimationFrame for smooth animations
    function animate() {
        updateCursorPosition({ clientX: window.mouseX, clientY: window.mouseY });
        requestAnimationFrame(animate);
    }

    // Add event listeners
    const handleMouseMove = (e) => {
        window.mouseX = e.clientX;
        window.mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Start animation
    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
    };
}
