document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content');
    const navBullets = document.querySelectorAll('.nav-bullet');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-bullet.active').forEach((bullet) => {
                    bullet.classList.remove('active');
                });
                const activeBullet = document.querySelector(`.nav-bullet[data-section="#${entry.target.id}"]`);
                if (activeBullet) {
                    activeBullet.classList.add('active');
                }
            }
        });
    }, {threshold: 0.5}); // Adjust threshold based on when you want the bullet to activate

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll to section on bullet click
    navBullets.forEach(bullet => {
        bullet.addEventListener('click', () => {
            const section = document.querySelector(bullet.getAttribute('data-section'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
