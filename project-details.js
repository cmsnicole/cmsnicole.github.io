document.addEventListener('DOMContentLoaded', function() {

    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(function(container) {
        const leftButton = container.querySelector('.carousel-left');
        const rightButton = container.querySelector('.carousel-right');
        const images = container.querySelectorAll('.carousel-img img');
        let currentIndex = 0;
    
        function showImage(index) {
            images.forEach((img, idx) => {
                if (idx === index) {
                    img.style.opacity = 1;
                    img.classList.remove('hidden');
                    img.style.pointerEvents = 'auto'; 
                } else {
                    img.style.opacity = 0;
                    img.classList.add('hidden');
                    img.style.pointerEvents = 'none'; 
                }
            });
        }
    
        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        }
    
        function prevImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        }
    
        leftButton.addEventListener('click', prevImage);
        rightButton.addEventListener('click', nextImage);

        // Show overlay on image click
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                const overlayImage = document.getElementById('overlay-image');
                overlayImage.src = img.src;
                const overlay = document.getElementById('overlay');
                overlay.style.display = 'block';
            });
        });
    });

    // Close overlay when clicking outside of image
    const overlayArea = document.getElementById('overlay-area');
    const overlay = document.getElementById('overlay');
    overlayArea.addEventListener('click', function(e) {
        if (e.target === this) {
            overlay.style.display = 'none';
        }
    });
    })
