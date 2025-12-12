document.addEventListener('DOMContentLoaded', () => {
    
    let count = Number(localStorage.getItem('formSubmissions')) || 0;
    
    count++;
    
    localStorage.setItem('formSubmissions', count);
    
    const countElement = document.getElementById('submission-count');
    if (countElement) {
        countElement.textContent = count;
    }
    
});