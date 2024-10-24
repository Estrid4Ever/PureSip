import { useState, useEffect } from "react";
import { fetchAllRecipes } from '../apiCalls';
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import InfoBanner from "./InfoBanner";
import MainContainer from "./MainContainer";

export default function HomePage() {

    const [recipes, setRecipes] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  
    const [searchTerm, setSearchTerm] = useState("");  
    const [selectedCategory, setSelectedCategory] = useState("");  
    const { categoryId, searchId } = useParams();

    
    const exampleDifficultDrinks = [
        {
            id: 1,
            title: "Blueberry Cooler",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Bluerry cooler.jpg",
            description: "En uppfriskande bärdrink.",
            categories: ["mocktails"],
            time: 7
        },
        {
            id: 2,
            title: "Golden Milk (Gurkmejalatte)",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Golden Milk - Gurkmejalatte.jpg",
            description: "En kryddig varm dryck med gurkmeja.",
            categories: ["varma-drycker"],
            time: 10
        },
        {
            id: 3,
            title: "Varm Choklad med Havremjölk",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Varm choklad med havremjölk.jpg",
            description: "En rik och krämig chokladdryck.",
            categories: ["varma-drycker"],
            time: 8
        },
        {
            id: 4,
            title: "Chai Latte",
            difficulty: "Svår",
            imageUrl: "src/assets/images/Chai Latte.jpg",
            description: "En varm och kryddig dryck med mjölk.",
            categories: ["varma-drycker"],
            time: 9
        }
    ];

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

    }, [categoryId, searchId]);

    if (loading) {
        return <p>Loading...</p>;  // Visa laddningsindikator
    }

    if (error) {
        return <p>{error}</p>;  // Visa felmeddelande
    }

    
    const filteredRecipes = recipes.filter(recipe =>
        (selectedCategory === "Kategorier" || recipe.categories.includes(selectedCategory.toLowerCase())) &&  
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())  
    );

    return (
        <>
            <Header
                setSearchTerm={setSearchTerm}
                recipes={recipes} 
            />
            <PreviewCard recipes={filteredRecipes} />  

            
            <h2>Svår</h2>
            {exampleDifficultDrinks.length > 0 ? (
                <PreviewCard recipes={exampleDifficultDrinks} />
            ) : (
                <p>Inga svåra drinkar tillgängliga.</p>
            )}

            
            <InfoBanner />
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



