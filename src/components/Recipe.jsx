import React from 'react';

export default function Recipe() {
    const drink = {
        title: "Big Appleberry",
        imageUrl: "../src/assets/images/BigAppleberry-500x650___media_library_original_500_650.jpg",
        ingredients: [
            "5 cl konjak",
            "6 st röda vinbär",
            "3 st gröna kärnfria vindruvor",
            "2 cl björnbär",
            "2 cl sockerlag",
            "8 cl pressad äpplejuice",
            "Is",
            "Färska hallon",
            "Färska björnbär"
        ],
        instructions: [
            "Häll all frukt i en shaker och mortla.",
            "Tillsätt sedan konjak, pressad äpplejuice och sockerlag.",
            "Skaka ordentligt så att frukt och konjak blandas väl.",
            "Sila över i ett slingglas fyllt med iskuber.",
            "Garnera med ett hallon och ett björnbär."
        ]
    };

    return (
        <div className="recipe-detail-container">
            <img className="recipe-image" src={drink.imageUrl} alt={drink.title} />
            <div className="recipe-info">
                <h1>{drink.title} ingredienser</h1>
                <ul>
                    {drink.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2>Så här blandar du en {drink.title}</h2>
                <ol>
                    {drink.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}