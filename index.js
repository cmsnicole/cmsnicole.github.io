/* show and hide skills description */

const description = document.getElementById('description');

const boxComputing = document.getElementById('box-computing');
const descriptionComputing = document.getElementById('description-computing');
let computingOpened = false;

const boxSoftware = document.getElementById('box-software');
const descriptionSoftware = document.getElementById('description-software');
let softwareOpened = false;

const boxDesign = document.getElementById('box-design');
const descriptionDesign = document.getElementById('description-design');
let designOpened = false;

boxComputing.addEventListener('click', () => {
  // Toggle 'active' class
  boxComputing.classList.toggle('active');
  computingOpened = !computingOpened;

  if (computingOpened) {
    description.style.display = 'block';
    description.style.backgroundColor = '#fcfcfc';
    descriptionComputing.style.display = 'block';

    // Hide other description blocks
    descriptionSoftware.style.display = 'none';
    softwareOpened = false;
    descriptionDesign.style.display = 'none';
    designOpened = false;
  } else {
    // Hide descriptionComputing
    if (!softwareOpened && !designOpened) {
      description.style.display = 'none';
    }
    descriptionComputing.style.display = 'none';
  }
});

boxSoftware.addEventListener('click', () => {
  // Toggle 'active' class
  boxSoftware.classList.toggle('active');
  softwareOpened = !softwareOpened;

  if (softwareOpened) {
    description.style.display = 'block';
    description.style.backgroundColor = '#fcfcfc';
    descriptionSoftware.style.display = 'block';

    // Hide other description blocks
    descriptionComputing.style.display = 'none';
    computingOpened = false;
    descriptionDesign.style.display = 'none';
    designOpened = false;
  } else {
    // Hide descriptionSoftware
    if (!computingOpened && !designOpened) {
      description.style.display = 'none';
    }
    descriptionSoftware.style.display = 'none';
  }
});

boxDesign.addEventListener('click', () => {
  // Toggle 'active' class
  boxDesign.classList.toggle('active');
  designOpened = !designOpened;

  if (designOpened) {
    description.style.display = 'block';
    description.style.backgroundColor = '#fcfcfc';
    descriptionDesign.style.display = 'block';

    // Hide other description blocks
    descriptionComputing.style.display = 'none';
    computingOpened = false;
    descriptionSoftware.style.display = 'none';
    softwareOpened = false;
  } else {
    // Hide descriptionDesign
    if (!computingOpened && !softwareOpened) {
      description.style.display = 'none';
    }
    descriptionDesign.style.display = 'none';
  }
});

/* copy contact details to clipboard */

    // Function to copy text to clipboard
    function copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      navigator.clipboard.writeText(text);
      document.body.removeChild(el);
  }

  // Add an event listener to each link
  document.querySelectorAll('.contacts-text a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior
          const text = this.querySelector('.contacts-clipboard').innerText; // Get the text to copy
          copyToClipboard(text); // Copy the text to clipboard
          alert('Copied to clipboard!'); // Provide a notification
      });
  });