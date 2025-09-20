
    // Create particles
    function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Random position
    particle.style.left = Math.random() * 100 + '%';

    // Random animation delay
    particle.style.animationDelay = Math.random() * 15 + 's';

    // Random animation duration
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

    particlesContainer.appendChild(particle);
}
}

    // Initialize particles
    createParticles();

    // Add interactive glow effect on mouse move
    document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.glass-card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleX = (y - centerY) / 30;
    const angleY = (centerX - x) / 30;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

    // Reset card transform when mouse leaves
    document.querySelector('.glass-card').addEventListener('mouseleave', function () {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

    // Add click ripple effect to social links
    document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

    // Add parallax effect to floating shapes
    document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
    const speed = (index + 1) * 20;
    shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
});
});

    // Add typing effect to title (optional enhancement)
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';
    let charIndex = 0;

    function typeWriter() {
    if (charIndex < originalText.length) {
    title.textContent += originalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
}
}

    // Start typing effect when page loads
    setTimeout(typeWriter, 1000);