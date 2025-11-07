document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const message = document.getElementById('message');

    // Simple validation (for demo purposes)
    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        if (rememberMe) {
            localStorage.setItem('username', username);
        }
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Forgot password functionality not implemented yet.');
});

// Load remembered username if available
window.addEventListener('load', function() {
    const rememberedUsername = localStorage.getItem('username');
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('rememberMe').checked = true;
    }
});
