document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('footprints-container');
  
  function createFootprint() {
      const footprint = document.createElement('div');
      footprint.className = 'printType';
      footprint.style.top = `${Math.random() * window.innerHeight}px`;
      footprint.style.left = `${Math.random() * window.innerWidth}px`;
      container.appendChild(footprint);
      
      // Remove footprint after animation completes
      setTimeout(() => {
          container.removeChild(footprint);
      }, 5000);
  }

  // Create footprints at intervals
  setInterval(createFootprint, 300);
});
