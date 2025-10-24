document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== menuToggle) {
            navMenu.classList.remove('active');
        }
    });
});
