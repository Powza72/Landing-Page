// Create dynamic particles
      function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          
          // Random horizontal position
          particle.style.left = Math.random() * 100 + '%';
          
          // Random animation delay
          particle.style.animationDelay = Math.random() * 15 + 's';
          
          // Random size variation
          const size = Math.random() * 4 + 2;
          particle.style.width = size + 'px';
          particle.style.height = size + 'px';
          
          // Random color variation
          const colors = ['#FFB300', '#E35205', '#FF6B35', '#FFA500'];
          particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          
          particlesContainer.appendChild(particle);
        }
      }

      // Initialize particles when page loads
      document.addEventListener('DOMContentLoaded', function() {
        createParticles();
      });