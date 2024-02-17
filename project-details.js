/*function for toggling content by clicking on headers.
  (kept for future usage)
*/

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.description-toggle');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const hiddenContent = this.nextElementSibling; // Get the next sibling, which is the hidden content

            // Toggle the visibility of the hidden content
            if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
                hiddenContent.style.display = 'block';
            } else {
                hiddenContent.style.display = 'none';
            }
        });
    });
});
