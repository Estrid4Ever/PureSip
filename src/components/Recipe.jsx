import React from "react";
import Ingredients from "./Ingredients";
import AddStarRating from "./AddStarRating";
import StarRating from "./StarRating";
export default function Recipe({ drink }) {

    const drinkPage = drink.ingredients ? (
        <div className="recipe-detail-container">
            <h1 className="recipe-name">{drink.title}</h1>
            <div className="rating-time">
                <AddStarRating recipeId={drink._id} />
            </div>
            <button><StarRating dish = {drink}></StarRating></button>
            <div className="recipe-image-info">
                <img
                    className="recipe-image"
                    src={drink.imageUrl}
                    alt={"Photo of " + drink.title}
                />
                <div className="recipe-info">
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