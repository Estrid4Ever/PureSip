import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import PreviewCard from './PreviewCard';

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering
    const [searchTerm, setSearchTerm] = useState("");  // State för sökord
    const [selectedCategory, setSelectedCategory] = useState("");  // State för vald kategori
    const { categoryId, searchId } = useParams();

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

            if (categoryId) {
                setSelectedCategory(categoryId);
            } else {
                setSelectedCategory("Kategorier");
            }

            if(searchId){
                setSearchTerm(searchId);
                setSelectedCategory("Kategorier");
            } else {
                setSearchTerm("");
            }

    }, [categoryId, searchId]);

    if (loading) {
        return <p>Loading...</p>;  // Visa laddningsindikator
    }

    if (error) {
        return <p>{error}</p>;  // Visa felmeddelande
    }

    // Filtrera recepten baserat på både sökord och vald kategori
    const filteredRecipes = recipes.filter(recipe =>
        (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory.toLowerCase())) &&  // Kategorifiltrering
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())  // Sökfiltrering
    );

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                recipes={recipes}
            />
            <PreviewCard recipes={filteredRecipes} />  {/* Använd filtrerade recept */}         
            <Footer />
        </>
    );
}

