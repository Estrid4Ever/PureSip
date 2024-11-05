import StarRating from "./StarRating"; 
import PrepTime from "./PrepTime"; 
import Difficulty from "./Difficulty"; 
import { Outlet, Link, useLoaderData } from "react-router-dom"; 
import React, { useRef, useState, useEffect } from "react";

export default function PreviewCard({ recipes }) {
    // Function to shorten the description to the first sentence
    function shortenDescription(text) {
        const sentences = text.split(".");
        return sentences[0] + (sentences.length > 1 ? "." : "");
    }

    const cardRef = useRef(0); 

    // Function to scroll the card container to the right
    const scrollRight = (scrollOffset) => {
        const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;
        // Check if the user is near the end of the scroll, then reset to start
        if (scrollLeft + clientWidth >= scrollWidth - 100) { // Adding a slight buffer
            
			cardRef.current.scroll({
                left: 0,
                behavior: 'smooth'
            });
        } else {
			
            cardRef.current.scrollLeft += scrollOffset;
        }

    };

    // Function to scroll the card container to the left
    const scrollLeft = (scrollOffset) => {
        const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;
        // Check if the user is near the start of the scroll, then jump to the end
        if (scrollLeft < 100) { // Adding a slight buffer
            cardRef.current.scroll({
                left: scrollWidth,
                behavior: 'smooth'
            });
        } else {
            cardRef.current.scrollLeft -= scrollOffset;
        }
		
    };

    // Maps each recipe to a card displaying relevant information
    const cards = recipes.map((dish, index) => (
        <Link key={dish._id} to={`/recipe/${dish._id}`}>
            <div className="card">
                <div className="cardImg slowzoom" style={{ backgroundImage: `url('${dish.imageUrl}')` }}></div>
                <h2 className="cardTitle">{dish.title}</h2>
                <div className="rating-time">
                    <StarRating dish={dish} /> // Rating component
                    <div className="difficulty-time">
                        <Difficulty time={dish.timeInMins} /> // Difficulty component
                        <PrepTime dish={dish} /> // Preparation time component
                    </div>
                </div>
                <p className="description">{shortenDescription(dish.description)}</p> // Shortened description
            </div>
        </Link>
    ));

    // Conditionally render scroll buttons if more than 3 recipes or hide if only one
    var scrollButtons = recipes.length > 3 ? <div className="scroll-buttons">
        <button onClick={() => scrollLeft(-330)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => scrollRight(330)}><i className="fa-solid fa-angle-right"></i></button>
    </div> : recipes.length <= 1 ? <></> : <div className="scroll-buttons" id="three-or-less">
        <button onClick={() => scrollLeft(-330)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => scrollRight(330)}><i className="fa-solid fa-angle-right"></i></button>
    </div>;

    return (
        <>
            <main ref={cardRef} className="mainContainer sidescroll-container">{cards}</main> // Main container for cards
            {scrollButtons} // Scroll buttons for navigation
        </>
    );
}


