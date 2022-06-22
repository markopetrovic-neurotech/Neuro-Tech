

// Create function to select elements
const selectElement = (element) => document.querySelector(element);


// Open/Close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .img-index-about').src = src;
    }
});


