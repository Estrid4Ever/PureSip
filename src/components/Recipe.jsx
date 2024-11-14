import React, { useState } from "react"; // Importing React and the useState hook for managing state
import Ingredients from "./Ingredients"; // Importing Ingredients component to display the list of ingredients
import AddStarRating from "./AddStarRating"; // Importing AddStarRating component for adding ratings
import StarRating from "./StarRating"; // Importing StarRating component to display the current rating
import PrepTime from "./PrepTime"; // Importing PrepTime component to show preparation time
import Difficulty from "./Difficulty"; // Importing Difficulty component to indicate the difficulty level of the recipe

// Functional component for displaying a recipe
export default function Recipe({ drink }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the visibility of the rating modal

    // Conditional rendering of the drink page if ingredients are available 
    const drinkPage = drink.ingredients ? (
        <div className="recipe-detail-container"> {/* Main container for the recipe details */}
            <h1 className="recipe-name">{drink.title}</h1> {/* Displaying the title of the recipe */}
            <div className="rating-time"> {/* Container for rating and time elements */}
                {/* Modal Implementation for adding a star rating */}
                {isModalOpen && ( // If the modal is open
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}> {/* Overlay to close the modal when clicked */}
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Stops click events from propagating to the overlay */}
                            <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button> {/* Close button for the modal */}
                            <AddStarRating recipeId={drink._id} /> {/* Render the AddStarRating component for this recipe */}
                        </div>
                    </div>
                )}
            </div>
            <button className="star-button" onClick={() => setIsModalOpen(true)}> {/* Button to open the rating modal */}
                <StarRating dish={drink} starClassName="button-star" /> {/* Displaying the star rating for the recipe */}
            </button>
            <div className="recipe-image-info"> {/* Container for the recipe image and additional information */}
                <img
                    className="recipe-image"
                    src={drink.imageUrl} // Image URL of the recipe
                    alt={"Photo of " + drink.title} // Alt text for the image
                />
                <div className="recipe-info"> {/* Container for recipe information */}
                    <div className="difficulty-time"> {/* Container for difficulty and preparation time */}
                        <Difficulty time={drink.timeInMins}/> {/* Displaying the difficulty level */}
                        <PrepTime dish={drink} /> {/* Displaying the preparation time */}
                    </div>
                    <h2>Ingredienser</h2> {/* Heading for the ingredients section */}
                    <ul>
                        <Ingredients ingredients={drink.ingredients} /> {/* Rendering the Ingredients component with the list of ingredients */}
                    </ul>
                    <h2>Så här blandar du en {drink.title}</h2> {/* Heading for the instructions section */}
                    <ul>
                        {drink.instructions.map((step, index) => ( // Mapping over the instructions array
                            <li key={index}>{step}</li> // Rendering each instruction as a list item
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : ""; // If no ingredients are available, render nothing

    return (<>{drinkPage}</>); // Render the drinkPage content
}