// Check online/offline status
function checkOnlineStatus() {
    const offlineIndicator = document.getElementById('offlineIndicator');
    
    if (!navigator.onLine) {
        offlineIndicator.classList.add('show');
    } else {
        offlineIndicator.classList.remove('show');
    }
}

// Listen for online/offline events
window.addEventListener('online', checkOnlineStatus);
window.addEventListener('offline', checkOnlineStatus);

// Initial check
checkOnlineStatus();

// Switch between Local and Modern Farmer forms
function switchUserType(type) {
    // Update toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');

    // Show corresponding form
    document.querySelectorAll('.login-form').forEach(form => {
        form.classList.remove('active-form');
    });

    if (type === 'local') {
        document.getElementById('localForm').classList.add('active-form');
    } else {
        document.getElementById('modernForm').classList.add('active-form');
    }
}

// Handle Local Farmer Form Submission
document.getElementById('localForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = document.getElementById('localPhone').value;
    const language = document.getElementById('language').value;
    
    // Validate phone number (basic Nigerian format)
    if (phone.length < 11) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Simulate OTP sending
    alert(`OTP sent to ${phone}. Please check your SMS.\n\nLanguage selected: ${language.toUpperCase()}`);
    
    // In production, this would redirect to OTP verification page
    // window.location.href = '/verify-otp';
});

// Handle Modern Farmer Form Submission
document.getElementById('modernForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('modernEmail').value;
    const password = document.getElementById('modernPassword').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login
    alert(`Logging in as Modern Farmer...\nEmail: ${email}`);
    
    // In production, this would authenticate and redirect to dashboard
    // window.location.href = '/modern/dashboard';
});

// Add smooth transitions on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('SOILREVIVE Login Page Loaded');
    console.log('Supported Languages: English, Hausa, Yoruba, Igbo');
    console.log('USSD Fallback: *XXX#');
});