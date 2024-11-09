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

