import StarRating from "./StarRating";
import PrepTime from "./PrepTime";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

export default function PreviewCard({ recipes }) {
    function shortenDescription(text) {
        const sentences = text.split(".");
        return sentences[0] + (sentences.length > 1 ? "." : "");
    }

    const cardRef = useRef(0);

    const scroll = (scrollOffset) => {
        cardRef.current.scrollLeft += scrollOffset;
    };

    const cards = recipes.map((dish) => (
        <Link key={dish._id} to={`/recipe/${dish._id}`}>
            <div className="card">
                <div className="cardImg slowzoom" style={{ backgroundImage: `url('${dish.imageUrl}')` }}></div>
                <h2 className="cardTitle">{dish.title}</h2>

                {/* Svårighetsgrad visas här */}
                <p className="difficulty-level">Svårighetsgrad: {dish.difficulty}</p>

                <div className="rating-time">
                    <StarRating dish={dish} />
                    <PrepTime dish={dish} />
                </div>

                <p className="description">{shortenDescription(dish.description)}</p>
            </div>
        </Link>
    ));

    const scrollButtons =
        recipes.length > 3 ? (
            <div className="scroll-buttons">
                <button onClick={() => scroll(-330)}><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={() => scroll(330)}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        ) : recipes.length <= 1 ? (
            <></>
        ) : (
            <div className="scroll-buttons" id="three-or-less">
                <button onClick={() => scroll(-330)}><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={() => scroll(330)}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        );

    return (
        <>
            <main ref={cardRef} className="mainContainer sidescroll-container">{cards}</main>
            {scrollButtons}
        </>
    );
}



