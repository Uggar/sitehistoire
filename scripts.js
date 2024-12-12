document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message, nous reviendrons vers vous bientôt !');
    document.getElementById('contactForm').reset();
});
