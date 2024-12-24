function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasDate = new Date(`December 25, ${currentYear} 00:00:00`);
    
    const diff = christmasDate - now;
  
    if (diff <= 0) {
      document.getElementById("message").textContent = "🎉 Merry Christmas! 🎄🎅";
      document.querySelector(".countdown").style.display = "none";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  // Update every second
  setInterval(updateCountdown, 1000);
  updateCountdown();
  

  