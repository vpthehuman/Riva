document.querySelector('.content').addEventListener('click', function() {
    const feedback = document.getElementById('interactive-feedback');
    feedback.style.display = 'block'; // Make the feedback div visible
    feedback.textContent = "Riva just told a joke... and yes, it was as delusional as always!";
    
    // Hide the message after 5 seconds
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 5000);
});
