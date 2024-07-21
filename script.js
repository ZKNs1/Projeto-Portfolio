document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajusta para considerar a altura do header fixo
                behavior: 'smooth'
            });
        });
    }
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;
    var bodyHeight = document.body.offsetHeight;

    if (windowHeight + scrollY >= bodyHeight) {
        footer.style.opacity = 1; 
    } else {
        footer.style.opacity = 0;
    }
});
