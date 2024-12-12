document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous reviendrons vers vous très bientôt.');
    document.getElementById('contactForm').reset();
});
