// Handle User Type Selection
function selectType(type) {
    // Update radio buttons visually
    const radios = document.querySelectorAll('input[name="userType"]');
    radios.forEach(radio => {
        if (radio.value === type) {
            radio.checked = true;
        }
    });

    // Toggle dynamic fields
    const localFields = document.getElementById('localFields');
    const modernFields = document.getElementById('modernFields');

    if (type === 'local') {
        localFields.classList.add('active');
        modernFields.classList.remove('active');
        
        // Make local fields required, remove modern requirements
        document.getElementById('language').required = true;
        document.getElementById('email').required = false;
    } else {
        localFields.classList.remove('active');
        modernFields.classList.add('active');
        
        // Make modern fields required, remove local requirements
        document.getElementById('language').required = false;
        document.getElementById('email').required = true;
    }
}

// Handle Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    
    // Basic Validation
    if (phone.length < 11) {
        alert('Please enter a valid Nigerian phone number');
        return;
    }

    let message = `Account created successfully!\n\n`;
    message += `Name: ${fullName}\n`;
    message += `Type: ${userType === 'local' ? 'Local Farmer' : 'Modern Farmer'}\n`;
    
    if (userType === 'local') {
        const lang = document.getElementById('language').value;
        message += `Language: ${lang.toUpperCase()}\n`;
        message += `\nNext Step: Visit a nearby "Soil Health Champion" to test your soil!`;
    } else {
        const farmName = document.getElementById('farmName').value;
        message += `Farm: ${farmName}\n`;
        message += `\nNext Step: Complete your Digital Soil Passport setup.`;
    }

    alert(message);
    
    // In production, this would send data to backend and redirect
    // window.location.href = '/dashboard';
});

// Initialize with Local Farmer selected by default
document.addEventListener('DOMContentLoaded', function() {
    selectType('local');
});