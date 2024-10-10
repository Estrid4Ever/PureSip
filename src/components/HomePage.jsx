import { useState, useEffect } from "react";
import {fetchAllRecipes} from '../apiCalls';
import Header from './Header';
import PreviewCard from './PreviewCard';
import Footer from "./Footer";

export default function HomePage() {

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
            <PreviewCard recipes={filteredRecipes} /> {/* Använd filtrerade recept */}
            <Footer />
        </>
    );
}