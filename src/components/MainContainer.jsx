import PreviewCard from './PreviewCard';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    const fourRandomRecipes = [...recipes].sort(() => Math.random() - 0.5).slice(0, 4);

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

            <article className='homepage-article'>
                <img src="/images/Are-you-as-healthy-as-you-think-iStock-1140193165-1916673535.jpg" alt="" />
                <div>
                    <h2>Varför smoothies?</h2>
                    <p>Smoothies är ett snabbt och gott sätt att få i sig näringsämnen. De är fulla av vitaminer, mineraler och fiber från frukt och grönsaker, vilket främjar bättre matsmältning och ger energi.</p>
                    <p>Med rätt ingredienser kan smoothies också hjälpa till med vätskebalansen och stärka immunförsvaret. De är dessutom lätta att anpassa—lägg till protein, frön eller gröna blad för att göra dem till ett balanserat och näringsrikt mellanmål eller måltid. </p>
                    <p>Perfekt för frukost eller efter träning, smoothies är ett fräscht och hälsosamt val!</p>
                </div>
            </article>

            <div className="main-cards easy-cards">
                <h2 className='main-cards-title easy-cards-title'>Populära</h2>
                <PreviewCard recipes={fourRandomRecipes} />  {/* Använd filtrerade recept */}
            </div>
        </div>
    );
}