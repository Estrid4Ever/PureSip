import { useState, useEffect } from "react"; // Importing React hooks for state and effect management
import { fetchAllRecipes } from "../apiCalls"; // Importing the function to fetch all recipes from the API
import { useParams } from "react-router-dom"; // Importing useParams to extract route parameters
import Header from './Header'; // Importing the Header component for the page header
import Recipe from "./Recipe"; // Importing the Recipe component to display the selected recipe
import Footer from "./Footer"; // Importing the Footer component for the page footer
import Comments from "./Comments"; // Importing the Comments component to display comments related to the recipe
import StarRating from './StarRating'; // Importing the StarRating component for displaying ratings (ensure this import is correct)
import Loading from "./loading"; // Importing the Loading component to show a loading state

// Functional component for the RecipePage
export default function RecipePage() {
    // State variables for managing recipes, loading state, error messages, and search term
    const [recipes, setRecipes] = useState([]); // State to hold the list of recipes
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to hold error messages
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the user's search term

    // Effect hook to fetch all recipes when the component mounts
    useEffect(() => {
        fetchAllRecipes() // Calling the API function to fetch recipes
            .then((data) => { // Handling the response
                if (data) {
                    setRecipes(data); // If data is received, set it to the recipes state
                } else {
                    setError("No data available"); // Set error message if no data is available
                }
            })
            .catch(() => {
                setError("Failed to fetch recipes"); // Set error message if the fetch fails
            })
            .finally(() => {
                setLoading(false); // Set loading to false after the fetch operation completes
            });
    }, []); // Empty dependency array ensures this runs only on mount

    const { recipeId } = useParams(); // Extracting the recipeId from the URL parameters
    const drink = recipes.find(recipe => recipe._id === recipeId); // Finding the recipe that matches the recipeId

    if (loading) { // If loading is true, show the loading component
        return <Loading></Loading>;
    }

    if (error) { // If there is an error, display the error message
        return <p>{error}</p>;
    }

    // Filtering recipes based on the search term entered by the user
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
    );

    return (
        <>
            <Header recipes={recipes} setSearchTerm={setSearchTerm} /> {/* Rendering the Header component with recipes and search function */}
            <Recipe drink={drink} /> {/* Rendering the Recipe component with the selected drink */}
            <Comments recipeId={recipeId} /> {/* Rendering the Comments component for the specific recipe */}
            <Footer /> {/* Rendering the Footer component */}
        </>
    );
}