document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility of camera lists based on current image
    hideFirstImg = false;

    function toggleCameraLists() {
        hideFirstImg = !hideFirstImg;

        const cameraList1 = document.getElementById('camera-list-1');
        const cameraList2 = document.getElementById('camera-list-2');

        if (hideFirstImg === true) {
            cameraList1.style.display = 'block';
            cameraList2.style.display = 'none';
        } else {
            cameraList1.style.display = 'none';
            cameraList2.style.display = 'block';
        }
    }

    // Get the carousel containers
    const carouselContainers = document.querySelectorAll('.carousel-container');
    carouselContainers.forEach(function(container) {
        const symbol = container.querySelectorAll('.carousel-symbol');
        
        // Add click event listeners to images for toggling camera lists
        symbol.forEach((img) => {
            img.addEventListener('click', function() {
                toggleCameraLists();
            });
        });
    });

    // Initially hide camera lists based on the visibility of the images
    // const initialIndex = 0; // Assuming the initial image is the first one
    toggleCameraLists();
});
