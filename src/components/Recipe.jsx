import React, { useState } from "react";
import Ingredients from "./Ingredients";
import AddStarRating from "./AddStarRating";
import StarRating from "./StarRating";
import PrepTime from "./PrepTime";

export default function Recipe({ drink }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // State för modalvisning

    // Funktion för att beräkna svårighetsgraden baserat på tillagningstid
    function getDifficultyLevel(time) {
        if (time < 4) {
            return "Lätt";
        } else if (time >= 4 && time <= 5) {
            return "Medel";
        } else {
            return "Svår";
        }
    }

    const drinkPage = drink.ingredients ? (
        <div className="recipe-detail-container">
            <h1 className="recipe-name">{drink.title}</h1>
            <div className="rating-time">
                {/* Modal Implementation */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
                            <AddStarRating recipeId={drink._id} /> {/* Endast en instans här */}
                        </div>
                    </div>
                )}
            </div>
            <button className="star-button" onClick={() => setIsModalOpen(true)}>
                <StarRating dish={drink} starClassName="button-star" />
            </button>
            <div className="recipe-image-info">
                <img
                    className="recipe-image"
                    src={drink.imageUrl}
                    alt={"Photo of " + drink.title}
                />
                <div className="recipe-info">
                    <div className="difficulty-time">
                        {/* Visa svårighetsgraden här */}
                        <p>Svårighetsgrad: {getDifficultyLevel(drink.time)}</p>
                        <PrepTime dish={drink} />
                    </div>
                    <h2>Ingredienser</h2>
                    <ul>
                        <Ingredients ingredients={drink.ingredients} />
                    </ul>
                    <h2>Så här blandar du en {drink.title}</h2>
                    <ul>
                        {drink.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : "";

    return (<>{drinkPage}</>);
}


