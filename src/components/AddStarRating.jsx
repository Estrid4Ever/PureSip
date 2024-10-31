import React, { useState, useEffect } from 'react';
import { postRecipeRating } from "../apiCalls";

const AddStarRating = ({ recipeId }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const storedRating = localStorage.getItem(`recipeRating_${recipeId}`);
        if (storedRating) {
            setRating(parseInt(storedRating, 10));
            setHasRated(true);
            setMessage("Du har redan lämnat ett betyg.");
        }
    }, [recipeId]);

    const handleStarClick = (starRating) => {
        if (hasRated) {
            setMessage("Du har redan lämnat ett betyg.");
            return;
        }
        setRating(starRating);
        setHasRated(true);
        setMessage("Tack för ditt betyg!");

        localStorage.setItem(`recipeRating_${recipeId}`, starRating);
        const newRatingData = { rating: starRating };
        postRecipeRating(recipeId, newRatingData).then((data) => {
            console.log(data);
        });
    };

    const renderStars = () => {
        return [...Array(5)].map((_, index) => {
            const starRating = index + 1;
            return (
                <span
                    key={starRating}
                    className={`star ${starRating <= (hoverRating || rating) ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverRating(starRating)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleStarClick(starRating)}
                    role="button"
                    aria-label={`Betygsätt ${starRating} av 5`}
                >
                    ★
                </span>
            );
        });
    };

    return (
        <div className="star-rating" style={{ textAlign: 'center' }}> {/* Centering the content */}
            <h3 style={{ color: '#333' }}>Vad tycker du? Sätt betyg på receptet.</h3> {/* Change color if needed */}
            <div className="stars" style={{ display: 'inline-block' }}> {/* Ensure stars are inline-block for centering */}
                {renderStars()}
            </div>
            {message && <p style={{ color: '#333' }}>{message}</p>} {/* Change color if needed */}
        </div>
    );
};

export default AddStarRating;
