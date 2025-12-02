// scripts/review.js

// Function to track and display the number of reviews submitted by the user
function trackReviewCount() {

    // 1. Define a constant key for localStorage to avoid typos.
    const STORAGE_KEY = 'numReviews';

    // 2. Retrieve the current count from localStorage.
    let count = localStorage.getItem(STORAGE_KEY);

    // 3. Parse the count to an integer, defaulting to 0 if not found.
    let reviewCount = count ? parseInt(count) : 0;
    
    // Increment the review count by 1 for the current submission.
    reviewCount++;

    // 4. Store the updated count back in localStorage.
    localStorage.setItem(STORAGE_KEY, reviewCount.toString());

    // 5. Update the display element with the new count.
    const displayElement = document.querySelector('#reviewCount');
    if (displayElement) {
        //  6. Set the text content of the display element to the updated count.
        displayElement.textContent = reviewCount;
    }
}

// Invoke the function to
trackReviewCount();