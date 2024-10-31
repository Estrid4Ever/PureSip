import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryArticles() {

    const cardRef = useRef(0);
    const navigate = useNavigate();
    const [halfWindowSize, setHalfWindowSize] = useState(window.innerWidth / 2);

    const scroll = (scrollOffset) => {
        cardRef.current.scrollLeft += scrollOffset;
        console.log(scrollOffset);
    };

    const handleResize = () => {
        setHalfWindowSize(window.innerWidth / 2);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleClick(article) {

        const y = document.getElementsByClassName("main-cards")[0].getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y -100,
            behavior: 'smooth'
        });

        navigate(article.navUrl, { replace: true });
    }


    const articlesData = [
        {
            img: "/images/Smoothies.jpg",
            imgAlt: "Bild på en hälsosam tjej.",
            navUrl: "/category/Smoothies",
            title: "Varför smoothies?",
            text: "Smoothies är ett snabbt och gott sätt att få i sig näringsämnen. De är fulla av vitaminer, mineraler och fiber från frukt och grönsaker, vilket främjar bättre matsmältning och ger energi. Med rätt ingredienser kan smoothies också hjälpa till med vätskebalansen och stärka immunförsvaret. De är dessutom lätta att anpassa—lägg till protein, frön eller gröna blad för att göra dem till ett balanserat och näringsrikt mellanmål eller måltid. Perfekt för frukost eller efter träning, smoothies är ett fräscht och hälsosamt val!"
        },
        {
            img: "/images/Mocktails.jpg",
            imgAlt: "Bild på en mocktail.",
            navUrl: "/category/Mocktails",
            title: "Varför mocktails?",
            text: "Mocktails är perfekta för dig som vill njuta av festliga smaker utan alkohol. De är smakrika och kan göras med färska frukter, örter och kryddor för en uppfriskande upplevelse. Oavsett om det är en vardagskväll eller en fest, ger mocktails en lyxig känsla och är enkla att anpassa efter säsong och smak."
        },
        {
            img: "/images/Hälsodrycker.jpg",
            imgAlt: "Bild på ett glas vatten med frukt i.",
            navUrl: "/category/Hälsodrycker",
            title: "Varför Hälsodrycker?",
            text: "Hälsodrycker är fyllda med vitaminer och mineraler som stödjer din kropp och ditt välmående. Genom att blanda frukter, grönsaker och superfoods kan de förbättra din energi, hydreringsnivå och hjälpa till med återhämtning efter träning. Perfekt för dig som söker ett näringsrikt tillskott i vardagen."
        },
        {
            img: "/images/Varma drycker.jpg",
            imgAlt: "Bild på en en kopp te med en kanelstav i.",
            navUrl: "/category/Varma drycker",
            title: "Varför varma drycker?",
            text: "Varma drycker som te, varm choklad och kryddiga infusioner skapar en lugn och mysig atmosfär, perfekt för kalla dagar eller avkoppling. Med ingredienser som örter, honung och kryddor ger de inte bara värme utan också hälsofördelar som att lindra stress och stödja immunförsvaret."
        },
        {
            img: "/images/Juicer.jpg",
            imgAlt: "Bild på olika juicer och frukter.",
            navUrl: "/category/Juicer",
            title: "Varför juicer?",
            text: "Juicer är fulla av naturlig smak och näring, perfekta för att få i sig frukt och grönsaker på ett enkelt sätt. De är lätta att anpassa med olika ingredienser för en fräsch och uppiggande dryck som ger energi och hjälper till att hålla vätskebalansen."
        },
    ];


    var scrollButtons = <div className="scroll-buttons">
        <button onClick={() => scroll(-halfWindowSize)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => scroll(halfWindowSize)}><i className="fa-solid fa-angle-right"></i></button>
    </div>;

    const articles = articlesData.map(article =>
        <article key={article.title} onClick={() => handleClick(article)}>
            <img src={article.img} alt={article.imgAlt} />
            <div>
                <h2>{article.title}</h2>
                <p>{article.text}</p>

            </div>
        </article>
    );

    return (
        <div className="category-articles">
            <div ref={cardRef} className='homepage-articles sidescroll-container'>
                {articles}
            </div>
            {scrollButtons}
        </div>
    );
}