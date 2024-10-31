import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import InfoBanner from "./InfoBanner";
import MainContainer from "./MainContainer";
import { useLocation } from 'react-router-dom';

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering
    const [searchTerm, setSearchTerm] = useState("");  // State för sökord
    const [selectedCategory, setSelectedCategory] = useState("");  // State för vald kategori
    const { categoryId, searchId } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

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

        if (searchId) {
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
        (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory)) &&  // Kategorifiltrering
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())  // Sökfiltrering
    );

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                recipes={recipes}
            />
            <InfoBanner />
            <p className="info-text">På PureSip skapar vi smakrika, alkoholfria drycker för dig som vill njuta av festliga smaker utan alkohol.
                Varje dryck är noggrant framtagen med naturliga ingredienser för att ge en upplevelse som passar alla tillfällen, från vardag till fest.
                Utforska vår värld av hälsosamma och kreativa alternativ som bjuder på allt från fräschör till lyxiga nyanser.</p>
            <MainContainer 
                recipes={recipes} 
                filteredRecipes={filteredRecipes}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                />
            <Footer />
        </>
    );
}
