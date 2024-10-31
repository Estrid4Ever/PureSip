import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../apiCalls";
import { useParams } from "react-router-dom";
import Header from './Header';
import Recipe from "./Recipe";
import Footer from "./Footer";
import Comments from "./Comments";
import StarRating from './StarRating'; // Se till att denna import är korrekt

export default function RecipePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchAllRecipes()
            .then((data) => {
                if (data) {
                    setRecipes(data);
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
    const drink = recipes.find(recipe => recipe._id === recipeId);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header recipes={recipes} setSearchTerm={setSearchTerm} />
            <Recipe drink={drink} />
            <Comments recipeId={recipeId} />
            <Footer />
        </>
    );
}