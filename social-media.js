document.addEventListener('DOMContentLoaded', function() {
    // Get all image boxes
    const imageBoxes = document.querySelectorAll('.image-box');

    // Loop through each image box
    imageBoxes.forEach(function(box) {
        // Add click event listener
        box.addEventListener('click', function() {
            // Get the image source of the clicked box
            const imageSrc = this.querySelector('.image-img').getAttribute('src');
            
            // Show the overlay
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'flex';

            // Set the image source in the overlay
            const overlayImage = overlay.querySelector('.overlay-image');
            overlayImage.setAttribute('src', imageSrc);
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

    // Close overlay2 when clicking outside of video description box
    const videoBox = document.querySelector('.video-box');
    const overlay2Area = document.querySelector('.overlay2-area');
    const overlay2Box = document.querySelector('.overlay2-box');
    const overlay2 = document.getElementById('overlay2');

    videoBox.addEventListener('click', function() {
        overlay2.style.display = 'block';
    });

    overlay2Area.addEventListener('click', function(e) {
        if (e.target === this) {
            overlay2.style.display = 'none';
        }
    });

    overlay2Box.addEventListener('click', function(e) {
        if (e.target === this) {
            overlay2.style.display = 'none';
        }
    });
});