// Prevent default sign-in and simulate success
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Sign in successful! (Mock)');
});

// Simple transaction tab switching (if implementing tabs)
document.querySelectorAll('.trans-tabs span').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelector('.trans-tabs .active-tab').classList.remove('active-tab');
    tab.classList.add('active-tab');
    // Add your logic here to show/hide transactions for that bank
    // This is a mock/stub, so customize as needed
  });
});
