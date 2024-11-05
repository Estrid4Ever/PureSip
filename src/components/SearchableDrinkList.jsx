import React, { useState } from "react";

export default function DrinkSearch({ allRecipes }) {
  const [searchTerm, setSearchTerm] = useState("");  // State for the search field

  // Filter the drinks based on what is typed in the search field
  const filteredDrinks = allRecipes.filter(drink =>
    drink.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a drink..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Update the search term
      />

      {/* Show filtered drinks */}
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

