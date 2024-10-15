import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import Header from './Header';
import PreviewCard from './PreviewCard';
import Footer from "./Footer";

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering
    const [searchTerm, setSearchTerm] = useState("");  // State för sökord
    const [selectedCategory, setSelectedCategory] = useState("all");  // State för vald kategori

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

    // Filtrera recepten baserat på både sökord och vald kategori
    const filteredRecipes = recipes.filter(recipe =>
        (selectedCategory === "all" || recipe.categories.includes(selectedCategory.toLowerCase())) &&  // Kategorifiltrering
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())  // Sökfiltrering
    );

    return (
        <>
            <Header 
                setSearchTerm={setSearchTerm} 
                recipes={recipes} 
                setSelectedCategory={setSelectedCategory}  // Skicka setSelectedCategory till Header för kategorifiltrering
            />
            <PreviewCard recipes={filteredRecipes} />  {/* Använd filtrerade recept */}
            <Footer />
        </>
    );
}
