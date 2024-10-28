import PreviewCard from './PreviewCard';
import { useState, useEffect } from "react";
import CategoryArticles from './CategoryArticles';

export default function MainContainer({ recipes, filteredRecipes, selectedCategory, searchTerm }) {

    const [mainCardsTitle, setMainCardsTitle] = useState("");

    useEffect(() => {
        setMainCardsTitle("Alla recept");

        if (searchTerm) {
            setMainCardsTitle("Resultat för: " + searchTerm);
        }

        if (selectedCategory !== "Kategorier") {
            setMainCardsTitle(selectedCategory);
        }

        if (filteredRecipes === undefined || filteredRecipes.length == 0) {
            setMainCardsTitle("Inga resultat hittades...");
        }
    }
    );


    const fiveRandomRecipes = [...recipes].sort(() => Math.random() - 0.5).slice(0, 5);

    const topFiveRecipes = [...recipes].sort((a, b) => b.avgRating - a.avgRating).slice(0, 5);

    return (
        <div className="homepage-main">
            <div className="main-cards">
                <h2 className='main-cards-title'>{mainCardsTitle}</h2>
                <PreviewCard recipes={filteredRecipes} />  {/* Använd filtrerade recept */}
            </div>

            <div className='icons'>
                <i className="fa-solid fa-martini-glass"></i>
                <i className="fa-solid fa-mug-hot"></i>
                <i className="fa-solid fa-champagne-glasses"></i>
                <i className="fa-solid fa-whiskey-glass"></i>
                <i className="fa-solid fa-mug-saucer"></i>
            </div>

            <div className="main-cards easy-cards">
                <h2 className='main-cards-title easy-cards-title'>Testa våra favoriter!</h2>
                <PreviewCard recipes={fiveRandomRecipes} />  {/* Använd filtrerade recept */}
            </div>

            <CategoryArticles />

            <div className="main-cards easy-cards">
                <h2 className='main-cards-title easy-cards-title'>Populära val</h2>
                <PreviewCard recipes={topFiveRecipes} />  {/* Använd filtrerade recept */}
            </div>
        </div>
    );
}