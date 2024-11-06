//this component renders the homepage, categorypage and searchpage.
//theese 3 pages are basically the same but depending on url params the main previewcard carousel will filter different recipes.

import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import InfoBanner from "./InfoBanner";
import MainContainer from "./MainContainer";
import Loading from "./loading";

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);  // State for holding recipes
    const [loading, setLoading] = useState(true);  // State for loading
    const [error, setError] = useState(null);  // State for error handling
    const [searchTerm, setSearchTerm] = useState("");  // State for search input
    const [selectedCategory, setSelectedCategory] = useState("");  // State for category input
    const { categoryId, searchId } = useParams(); // url params

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

        // empties or sets category input depending on ulr params
        if (categoryId) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory("Kategorier");
        }

        // empties or sets search input depending on ulr params
        if (searchId) {
            setSearchTerm(searchId);
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

        //timer to hopefully await loading (works most of the time)
        const timer = setTimeout(scrollToElement, 300);

        return () => clearTimeout(timer);

    }, [categoryId, searchId]);

    if (loading) {
        return <Loading></Loading>;  // show loader
    }

    if (error) {
        return <p>{error}</p>;  // show error
    }

    // Filter recipes based on search or category input
    const filteredRecipes = recipes.filter(recipe =>
        (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory)) &&  // Category filtering
        isSearchMatch(recipe)  // Search filtering
    );

    function isSearchMatch(recipe) {

        //checks for match in title
        if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        }

        //checks for match in ingredients
        if (JSON.stringify(recipe.ingredients).toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        }

        //checks for match in categories
        if (JSON.stringify(recipe.categories).toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        }

        //checks for match in calculated difficulty
        if ("lätt".includes(searchTerm.toLowerCase()) && recipe.timeInMins < 5) {
            return true;
        }

        //checks for match in calculated difficulty
        if ("medel".includes(searchTerm.toLowerCase()) && recipe.timeInMins >= 5 && recipe.timeInMins <= 7) {
            return true;
        }

        //checks for match in calculated difficulty
        if ("svår".includes(searchTerm.toLowerCase()) && recipe.timeInMins > 7) {
            return true;
        }

        return false;
    }

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
