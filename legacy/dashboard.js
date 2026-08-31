// ... (previous code for offline status and switching forms) ...

// Handle Local Farmer Login
document.getElementById('localForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = document.getElementById('localPhone').value;
    const language = document.getElementById('language').value;
    
    // Validate phone number (basic Nigerian format)
    if (phone.length < 11) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Simulate OTP sending and verification
    alert(`OTP sent to ${phone}. Verifying... Success!`);
    
    // Store user role and name for the dashboard to use
    localStorage.setItem('userRole', 'local');
    localStorage.setItem('userName', 'Chinedu'); // You can make this dynamic later
    
    // LINK TO LOCAL DASHBOARD HERE
    window.location.href = 'local-dashboard.html';
});

// Handle Modern Farmer Login
document.getElementById('modernForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('modernEmail').value;
    const password = document.getElementById('modernPassword').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login success
    alert('Login Successful!');
    
    // Store user role and name
    localStorage.setItem('userRole', 'modern');
    localStorage.setItem('userName', 'Amina');

    // LINK TO MODERN DASHBOARD HERE
    window.location.href = 'modern-dashboard.html';
});