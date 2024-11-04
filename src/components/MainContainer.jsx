import PreviewCard from './PreviewCard';
import { useState, useEffect } from "react";
import CategoryArticles from './CategoryArticles';

export default function MainContainer({ recipes, filteredRecipes, selectedCategory, searchTerm }) {
    const [mainCardsTitle, setMainCardsTitle] = useState("");

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
        setMainCardsTitle("Alla recept");

        if (searchTerm) {
            setMainCardsTitle("Resultat för: " + searchTerm);
        }

        if (selectedCategory !== "Kategorier") {
            setMainCardsTitle(selectedCategory);
        }

        if (filteredRecipes === undefined || filteredRecipes.length === 0) {
            setMainCardsTitle("Inga resultat hittades...");
        }
    }, [searchTerm, selectedCategory, filteredRecipes]); // Ensure useEffect has dependencies

    // Exempel på slumpmässiga och topprankade drinkar
    const fiveRandomRecipes = [...recipes].sort(() => Math.random() - 0.5).slice(0, 5);
    const topFiveRecipes = [...recipes].sort((a, b) => b.avgRating - a.avgRating).slice(0, 5);

    return (
        <div className="homepage-main">
            {/* Sektion för Alla recept eller resultat baserat på sökord och kategorival */}
            <div className="main-cards">
                <h2 className='main-cards-title'>{mainCardsTitle}</h2>
                <PreviewCard recipes={filteredRecipes.map(recipe => ({
                    ...recipe,
                    difficulty: getDifficultyLevel(recipe.time) // Lägg till svårighetsgrad
                }))} />
            </div>

            {/* Ikoner för drycktyper */}
            <div className='icons'>
                <i className="fa-solid fa-martini-glass"></i>
                <i className="fa-solid fa-mug-hot"></i>
                <i className="fa-solid fa-champagne-glasses"></i>
                <i className="fa-solid fa-whiskey-glass"></i>
                <i className="fa-solid fa-mug-saucer"></i>
            </div>

            {/* Sektion för favoriter */}
            <div className="main-cards easy-cards">
                <h2 className='main-cards-title easy-cards-title'>Testa våra favoriter!</h2>
                <PreviewCard recipes={fiveRandomRecipes.map(recipe => ({
                    ...recipe,
                    difficulty: getDifficultyLevel(recipe.time) // Lägg till svårighetsgrad
                }))} />
            </div>

            <CategoryArticles />

            {/* Sektion för populära drinkar */}
            <div className="main-cards easy-cards">
                <h2 className='main-cards-title easy-cards-title'>Populära val</h2>
                <PreviewCard recipes={topFiveRecipes.map(recipe => ({
                    ...recipe,
                    difficulty: getDifficultyLevel(recipe.time) // Lägg till svårighetsgrad
                }))} />
            </div>
        </div>
    );
}

