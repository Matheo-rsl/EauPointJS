function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    scheduleNextPopup();
  }
  
  function scheduleNextPopup() {
    const minTime = 3 * 60 * 1000; // 1 heure en millisecondes
    const maxTime = 6 * 60 * 1000; // 1,5 heure en millisecondes
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    
    setTimeout(showPopup, randomTime);
  }
  
  // Planifiez le premier popup
  scheduleNextPopup();