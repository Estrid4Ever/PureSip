import React from "react";
import Ingredients from "./Ingredients";

export default function Recipe( {drink} ) {

    const drinkPage = drink.ingredients ? <div className="recipe-detail-container">
        <img
            className="recipe-image"
            src={drink.imageUrl}
            alt={"Photo of " + drink.title}
        />
        <div className="recipe-info">
            <h1>{drink.title} ingredienser</h1>
            <ul>
                <Ingredients ingredients={drink.ingredients}/>
            </ul>
            <h2>Så här blandar du en {drink.title}</h2>
            <ul>
                {drink.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    </div> : "";
    
    return (<>{drinkPage}</>);
}
