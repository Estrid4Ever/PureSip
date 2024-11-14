import React, { useState, useEffect } from 'react'; // Importing React and hooks for state and lifecycle management
import { postRecipeRating } from "../apiCalls"; // Importing the API call function to post the recipe rating

// Functional component for adding star ratings to a recipe
const AddStarRating = ({ recipeId }) => {
    // State variables to manage the rating, hover state, rating status, and messages
    const [rating, setRating] = useState(0); // Holds the current rating
    const [hoverRating, setHoverRating] = useState(0); // Holds the rating being hovered over
    const [hasRated, setHasRated] = useState(false); // Indicates if the user has already rated
    const [message, setMessage] = useState(""); // Holds feedback messages for the user

    // Effect hook to check if a rating exists in localStorage when the component mounts or recipeId changes
    useEffect(() => {
        const storedRating = localStorage.getItem(`recipeRating_${recipeId}`); // Fetch the stored rating from localStorage
        if (storedRating) { // If a rating exists
            setRating(parseInt(storedRating, 10)); // Set the current rating from localStorage
            setHasRated(true); // Mark that the user has rated
            setMessage("Du har redan lämnat ett betyg."); // Set message indicating the user has already rated
        }
    }, [recipeId]); // Dependency array ensures this runs when recipeId changes

    // Function to handle star click events
    const handleStarClick = (starRating) => {
        if (hasRated) { // Check if the user has already rated
            setMessage("Du har redan lämnat ett betyg."); // Set message if they try to rate again
            return; // Exit the function early
        }
        setRating(starRating); // Update the rating state with the clicked star rating
        setHasRated(true); // Mark that the user has rated
        setMessage("Tack för ditt betyg!"); // Set thank you message

        localStorage.setItem(`recipeRating_${recipeId}`, starRating); // Store the rating in localStorage
        const newRatingData = { rating: starRating }; // Prepare the data to send to the API
        postRecipeRating(recipeId, newRatingData).then((data) => { // Call the API to submit the rating
            console.log(data); // Log the response from the API
        });
    };

    // Function to render the star rating UI
    const renderStars = () => {
        return [...Array(5)].map((_, index) => { // Create an array of 5 elements for the stars
            const starRating = index + 1; // Calculate the star rating (1 to 5)
            return (
                <span
                    key={starRating} // Unique key for each star
                    className={`star ${starRating <= (hoverRating || rating) ? 'filled' : ''}`} // Determine if the star should be filled based on hover or rating
                    onMouseEnter={() => setHoverRating(starRating)} // Set hover rating on mouse enter
                    onMouseLeave={() => setHoverRating(0)} // Reset hover rating on mouse leave
                    onClick={() => handleStarClick(starRating)} // Handle star click
                    role="button" // Accessibility role for the span
                    aria-label={`Betygsätt ${starRating} av 5`} // Accessibility label for screen readers
                >
                    ★ {/* Star character */}
                </span>
            );
        });
    };

    return (
        <div className="star-rating" style={{ textAlign: 'center' }}> {/* Main container for the star rating component, centered */}
            <h3 style={{ color: '#333' }}>Vad tycker du? Sätt betyg på receptet.</h3> {/* Prompt for user feedback */}
            <div className="stars" style={{ display: 'inline-block' }}> {/* Container for stars, displayed inline-block for centering */}
                {renderStars()} {/* Render the stars */}
            </div>
            {message && <p style={{ color: '#333' }}>{message}</p>} {/* Display feedback message if it exists */}
        </div>
    );
};

export default AddStarRating; // Export the AddStarRating component for use in other parts of the application