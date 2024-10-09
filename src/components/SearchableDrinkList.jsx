import React, { useState } from "react";

export default function DrinkSearch({ allRecipes }) {
  const [searchTerm, setSearchTerm] = useState("");  // State för sökfältet

  // Filtrera drinkarna baserat på vad som skrivs i sökfältet
  const filteredDrinks = allRecipes.filter(drink =>
    drink.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a drink..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Uppdatera sökordet
      />

      {/* Visa filtrerade drinkar */}
      <ul>
        {filteredDrinks.map(drink => (
          <li key={drink.id}>
            <h2>{drink.title}</h2>
            <p>{drink.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

