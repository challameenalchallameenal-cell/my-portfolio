// Wrap everything in an IIFE to keep the "Global Scope" clean (Best Practice!)
(() => {
    // --- 1. TYPEWRITER LOGIC (CLEANED) ---
    const textElement = document.getElementById('typewriter-text');
    const phrases = ["Python Specialist", "UI/UX Visionary", "Cloud Architect Student", "Tech Innovator"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!textElement) return; // Error safety: Exit if element is missing

        const currentPhrase = phrases[phraseIndex];
        
        // Use textContent for better performance than innerHTML
        textElement.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50); // Deleting speed
        } else {
            // State switcher
            isDeleting = !isDeleting;
            if (!isDeleting) {
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            // Logic for the pauses at the end or start of a phrase
            setTimeout(type, isDeleting ? 2000 : 500);
        }
    }

    // --- 2. GOLD MATRIX LOGIC (OPTIMIZED) ---
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Set fixed size (or make it match container)
        canvas.width = 300;
        canvas.height = 300;

        const letters = "0101VASANTHAKUMAR";
        const fontSize = 14; // Slightly bigger for better look
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            // Semi-transparent background creates the "trail" effect
            ctx.fillStyle = "rgba(0, 8, 26, 0.15)"; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffd700"; // Royal Gold
            ctx.font = `bold ${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it hits bottom
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        // Start animations once DOM is ready
        type();
        setInterval(drawMatrix, 50);
    }
})();
document.addEventListener('mousemove', (e) => {
    // Add these two lines inside your existing mousemove function:
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
    
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
});