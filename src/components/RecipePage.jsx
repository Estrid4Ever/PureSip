import { useState, useEffect } from "react";
import { fetchRecipeById, fetchAllRecipes } from "../apiCalls";
import { useParams } from "react-router-dom";
import Header from './Header';
import Recipe from "./Recipe";
import Footer from "./Footer";
import Comments from "./Comments";

export default function RecipePage() {

    const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering
    const [searchTerm, setSearchTerm] = useState("");  // State för sökord

    useEffect(() => {
        fetchAllRecipes()
            .then((data) => {
                if (data) {
                    setRecipes(data);  // Sätt recepten
                } else {
                    setError("No data available");
                }
            })
            .catch(() => {
                setError("Failed to fetch recipes");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const { recipeId } = useParams();
    const drink = recipes.find(recipe => recipe._id === recipeId)

    if (loading) {
        return <p>Loading...</p>;  // Visa laddningsindikator
    }

    if (error) {
        return <p>{error}</p>;  // Visa felmeddelande
    }

    // Filtrera recepten baserat på sökordet
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header recipes={recipes} setSearchTerm={setSearchTerm} /> {/* Skicka recipes och setSearchTerm till Header */}
            <Recipe drink={drink} />
            <Comments />
            <Footer />
        </>
    );
}