import React from "react";

export default function StarRating({ dish }) {
    let starClass = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];
    let endIndex;

    // Determine filled stars based on the average rating
    for (let i = 0; i < dish.avgRating - 1; i++) {
        starClass[i] = starClass[i] + " checked";
        endIndex = i;
    }

    // Create stars and add the star-outline class
    const stars = starClass.map((star, index) => (
        <span key={index} className={`${star} star-outline`}></span> // Added star-outline class to all stars
    ));

    if (endIndex < 5) {
        var decimalInPercent = Math.round((dish.avgRating % 1) * 100);

        if (decimalInPercent !== 0) {
            const mystyle = {
                background: `linear-gradient(to right, yellow ${decimalInPercent}%, var(--tan) ${decimalInPercent}%)`,
            };

            stars[endIndex + 1] = (
                <span key={endIndex + 1} className={`${starClass[endIndex + 1]} star-outline`} id="checked-partial" style={mystyle}></span> // Added star-outline class here
            );
        } else {
            stars[endIndex + 1] = (
                <span key={endIndex + 1} className={`${starClass[endIndex + 1]} star-outline checked`}></span> // Added star-outline class here
            );
        }
    }

    return (
        <div className="rating" title={`${Math.round(dish.avgRating * 10) / 10} av 5 Stjärnor`}>
            {stars}
            {/* <span> ({dish.ratings.length})</span> */}
        </div>
    );
}
