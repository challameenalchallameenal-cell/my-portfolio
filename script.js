const card = document.getElementById('tilt-card');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const fullImg = document.getElementById('full-img');
const closeBtn = document.querySelector('.close-btn');

// When a photo is clicked
galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        fullImg.src = img.src;
        // Small delay to trigger the scale animation
        setTimeout(() => lightbox.classList.add('active'), 10);
    });
});

// When the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    setTimeout(() => lightbox.style.display = 'none', 300);
});

// Close if they click the dark background
lightbox.addEventListener('click', (e) => {
    if (e.target !== fullImg) {
        closeBtn.click();
    }
});
