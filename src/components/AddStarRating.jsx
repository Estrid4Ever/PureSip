import React, { useState } from 'react';
import {postRecipeRating} from "../apiCalls";


const AddStarRating = ({ recipeId }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);
    const [message, setMessage] = useState("");

    const handleStarClick = (starRating) => {
        if (hasRated) {
            setMessage("Du har redan lämnat ett betyg");
            return;
        }
        setRating(starRating);
        setHasRated(true);
        setMessage("Tack för ditt betyg!");
        console.log (starRating);
        const newRatingData = {
          "rating": starRating
        };

        postRecipeRating (recipeId, newRatingData).then((data) => {
            console.log(data);
        });
        
    };

    const renderStars = () => {
        return [...Array(5)].map((_, index) => {
            var starRating = index + 1;
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
        <div className="star-rating">
            <h3>Vad tycker du? Sätt betyg på receptet</h3>
            <div className="stars">
                {renderStars()}
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddStarRating;