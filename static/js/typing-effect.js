document.addEventListener('DOMContentLoaded', function() {
    const text = "Welcome to the Home Page";
    const welcomeText = document.querySelector('.welcome-text');
    welcomeText.textContent = ''; // Clear the initial text
    
    let i = 0;
    const speed = 100; // Speed of typing in milliseconds
    
    function typeWriter() {
        if (i < text.length) {
            welcomeText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start the typing effect
    typeWriter();
}); 