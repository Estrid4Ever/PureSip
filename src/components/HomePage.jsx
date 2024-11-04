import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import InfoBanner from "./InfoBanner";
import MainContainer from "./MainContainer";
import Loading from "./loading";

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const { categoryId, searchId } = useParams();

    // Funktion för att bestämma svårighetsgrad baserat på tid
    function getDifficultyLevel(time) {
        if (time < 4) {
            return "Lätt";
        } else if (time >= 4 && time <= 5) {
            return "Medel";
        } else {
            return "Svår";
        }
    }

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

        const scrollToElement = () => {
            if (categoryId || searchId) {
                const mainCard = document.getElementsByClassName("main-cards")[0];
                if (mainCard) {
                    const y = mainCard.getBoundingClientRect().top + window.scrollY;
                    window.scroll({
                        top: y - 100,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const timer = setTimeout(scrollToElement, 300);
        return () => clearTimeout(timer);
    }, [categoryId, searchId]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Filtrera recepten baserat på både sökord, vald kategori och svårighetsgrad
    const filteredRecipes = recipes.filter(recipe => {
        const difficulty = getDifficultyLevel(recipe.time);
        return (
            (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory) || difficulty === selectedCategory) &&
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                recipes={recipes}
            />
            <InfoBanner />
            <p className="info-text">
                På PureSip skapar vi smakrika, alkoholfria drycker för dig som vill njuta av festliga smaker utan alkohol.
                Varje dryck är noggrant framtagen med naturliga ingredienser för att ge en upplevelse som passar alla tillfällen, från vardag till fest.
                Utforska vår värld av hälsosamma och kreativa alternativ som bjuder på allt från fräschör till lyxiga nyanser.
            </p>
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

