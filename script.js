document.getElementById('contact-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var contactInfo = document.getElementById('contact-info');
    
    // Toggle visibility
    if (contactInfo.style.display === "block") {
        contactInfo.style.display = "none";
    } else {
        contactInfo.style.display = "block";
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const mainBtn = document.getElementById('main-btn');
    const options = document.getElementById('options');
    const copyBtn = document.getElementById('copy-btn');
    const callBtn = document.getElementById('call-btn');
    const momoNumber = '0545035465'; 

    // Show options and toggle label when the main button is clicked
    mainBtn.addEventListener('click', () => {
        options.classList.toggle('hidden');
        mainBtn.textContent = options.classList.contains('hidden') ? 'Show Your Support' : '0545035465';
    });

    // Copy MoMo number to clipboard
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(momoNumber)
            .then(() => {
                alert('MoMo number copied to clipboard!');
            })
            .catch(err => {
                alert('Failed to copy the number.');
                console.error(err);
            });
    });

});

