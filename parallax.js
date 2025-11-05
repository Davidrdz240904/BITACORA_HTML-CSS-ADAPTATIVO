document.addEventListener('DOMContentLoaded', function () {
            const layer1 = document.getElementById('layer1');
            
            const container = document.getElementById('parallax-container');
            const speed1 = 0.2; // El fondo se mueve más rápido
            const speed3 = 0.4; // El frente se mueve más lento
 
            function updateParallax() {
                const scrollOffset = container.getBoundingClientRect().top;
                layer1.style.transform = `translate3d(0, ${scrollOffset * speed1}px, 0)`;
 
            }
 
            window.addEventListener('scroll', updateParallax);
 
            updateParallax();
        });