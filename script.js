document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
    if (this.classList.contains('flipped')) {
      // Trigger balloon animation on card flip
      document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.style.animation = 'float 4s infinite';
      });
    }
  });
  