import React, { useRef, useState } from "react";

export default function CategoryArticles() {

    const cardRef = useRef(0);

    const scroll = (scrollOffset) => {
        cardRef.current.scrollLeft += scrollOffset;
    };

    const recipes = [1, 2, 3, 4, 4]

    var scrollButtons = recipes.length > 3 ? <div className="scroll-buttons">
        <button onClick={() => scroll(-550)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => scroll(550)}><i className="fa-solid fa-angle-right"></i></button>
    </div> : recipes.length <= 1 ? <></> : <div className="scroll-buttons" id="three-or-less">
        <button onClick={() => scroll(-550)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => scroll(550)}><i className="fa-solid fa-angle-right"></i></button>
    </div>;

    return (
        <div className="category-articles">
            <div ref={cardRef} className='homepage-articles sidescroll-container'>
                <article>
                    <img src="/images/Are-you-as-healthy-as-you-think-iStock-1140193165-1916673535.jpg" alt="" />
                    <div>
                        <h2>Varför smoothies?</h2>
                        <p>Smoothies är ett snabbt och gott sätt att få i sig näringsämnen. De är fulla av vitaminer, mineraler och fiber från frukt och grönsaker, vilket främjar bättre matsmältning och ger energi.</p>
                        <p>Med rätt ingredienser kan smoothies också hjälpa till med vätskebalansen och stärka immunförsvaret. De är dessutom lätta att anpassa—lägg till protein, frön eller gröna blad för att göra dem till ett balanserat och näringsrikt mellanmål eller måltid. </p>
                        <p>Perfekt för frukost eller efter träning, smoothies är ett fräscht och hälsosamt val!</p>
                    </div>
                </article>

                <article>
                    <img src="/images/Are-you-as-healthy-as-you-think-iStock-1140193165-1916673535.jpg" alt="" />
                    <div>
                        <h2>Varför smoothies?</h2>
                        <p>Smoothies är ett snabbt och gott sätt att få i sig näringsämnen. De är fulla av vitaminer, mineraler och fiber från frukt och grönsaker, vilket främjar bättre matsmältning och ger energi.</p>
                        <p>Med rätt ingredienser kan smoothies också hjälpa till med vätskebalansen och stärka immunförsvaret. De är dessutom lätta att anpassa—lägg till protein, frön eller gröna blad för att göra dem till ett balanserat och näringsrikt mellanmål eller måltid. </p>
                        <p>Perfekt för frukost eller efter träning, smoothies är ett fräscht och hälsosamt val!</p>
                    </div>
                </article>
            </div>
            {scrollButtons}
        </div>
    );
}