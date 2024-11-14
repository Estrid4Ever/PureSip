import React from "react"; // Importing React library

// Functional component for displaying star ratings
export default function StarRating({ dish }) {
    // Initializing an array to hold the star classes for the 5 stars
    let starClass = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];
    let endIndex; // Variable to keep track of the last filled star index

    // Determine filled stars based on the average rating
    for (let i = 0; i < dish.avgRating - 1; i++) { // Loop through the number of filled stars
        starClass[i] = starClass[i] + " checked"; // Add 'checked' class to filled stars
        endIndex = i; // Update endIndex to the current index
    }

    // Create stars and add the star-outline class for all stars
    const stars = starClass.map((star, index) => (
        <span key={index} className={`${star} star-outline`}></span> // Render each star with the appropriate classes
    ));

    // Check if there are any partial stars to display
    if (endIndex < 5) {
        var decimalInPercent = Math.round((dish.avgRating % 1) * 100); // Calculate the percentage for the partial star

        if (decimalInPercent !== 0) { // If there is a partial star
            const mystyle = {
                background: `linear-gradient(to right, yellow ${decimalInPercent}%, var(--tan) ${decimalInPercent}%)`, // Create a gradient background for the partial star
            };

            // Render the partial star with the gradient background
            stars[endIndex + 1] = (
                <span key={endIndex + 1} className={`${starClass[endIndex + 1]} star-outline`} id="checked-partial" style={mystyle}></span>
            );
        } else { // If there is no partial star, render the next star as filled
            stars[endIndex + 1] = (
                <span key={endIndex + 1} className={`${starClass[endIndex + 1]} star-outline checked`}></span>
            );
        }
    }

    // Return the rating component with stars and an accessibility title
    return (
        <div className="rating" title={`${Math.round(dish.avgRating * 10) / 10} av 5 Stjärnor`}>
            {stars} {/* Render the stars */}
            {/* <span> ({dish.ratings.length})</span> */} {/* Optional: Uncomment to display the number of ratings */}
        </div>
    );
}