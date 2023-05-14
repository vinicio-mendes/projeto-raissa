document.getElementById('login-button').addEventListener('click', function() {
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (password === '14052002') {
    window.location.href = 'blog.html'; // Altere para o caminho correto da página do blog
  } else {
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('error');
  }
});
