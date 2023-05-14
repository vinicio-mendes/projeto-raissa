function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  const targetDate = new Date('September 1, 2023');
  const currentDate = new Date();

  const timeDifference = targetDate - currentDate;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    countdownElement.innerHTML = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
  
    setTimeout(updateCountdown, 1000);
  }
  
  updateCountdown();
  