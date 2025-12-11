function calculateWindChill(tempC, speed) {
    return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
}


function updateFooterDates() {

    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    
    if (currentYearElement) {
        currentYearElement.textContent = `©${currentYear}`;
    }

    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {

    updateFooterDates(); 

    let tempC = 23; 
    let speed = 8.5;

    [cite_start]
    if (tempC <= 10 && speed > 4.8) {
        const wcf = calculateWindChill(tempC, speed);
        document.getElementById("wcf").innerHTML = `${wcf.toFixed(1)} °C`;
    } else {
        document.getElementById("wcf").innerHTML = "N/A";
    }
});