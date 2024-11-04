import StarRating from "./StarRating";
import PrepTime from "./PrepTime";
import Difficulty from "./Difficulty";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";



export default function PreviewCard({ recipes }) {
	function shortenDescription(text) {
		const sentences = text.split(".");
		return sentences[0] + (sentences.length > 1 ? "." : "");
	}

	const cardRef = useRef(0);

	const scrollRight = (scrollOffset) => {
        const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 100) { // Adding a slight buffer
            
            cardRef.current.scroll({
                left: 0,
                behavior: 'smooth'
            });
        } else {

            cardRef.current.scrollLeft += scrollOffset;
        }

    };

    const scrollLeft = (scrollOffset) => {
        const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;

        if (cardRef.current?.scrollLeft < 100) { // Adding a slight buffer
            
            cardRef.current.scroll({
                left: cardRef.current.scrollWidth,
                behavior: 'smooth'
            });
        } else {

            cardRef.current.scrollLeft += scrollOffset;
        }

    };

	function shortenDescription(text) {
		const sentences = text.split(".");
		return sentences[0] + ".";
	}

	const cards = recipes.map((dish, index) => (
		<Link key={dish._id} to={`/recipe/${dish._id}`}>
			<div className="card">
				<div className="cardImg slowzoom" style={{ backgroundImage: `url('${dish.imageUrl}')` }}></div>
				<h2 className="cardTitle">{dish.title}</h2>

				<div className="rating-time">
					<StarRating dish={dish} />

					<div className="difficulty-time">

						<Difficulty time={dish.timeInMins} />
						<PrepTime dish={dish} />
					</div>
				</div>

				<p className="description">{shortenDescription(dish.description)}</p>
			</div>
		</Link>
	));


	var scrollButtons = recipes.length > 3 ? <div className="scroll-buttons">
		<button onClick={() => scrollLeft(-330)}><i className="fa-solid fa-angle-left"></i></button>
		<button onClick={() => scrollRight(330)}><i className="fa-solid fa-angle-right"></i></button>
	</div> : recipes.length <= 1 ? <></> : <div className="scroll-buttons" id="three-or-less">
		<button onClick={() => scrollLeft(-330)}><i className="fa-solid fa-angle-left"></i></button>
		<button onClick={() => scrollRight(330)}><i className="fa-solid fa-angle-right"></i></button>
	</div>;

	return (
		<>
			<main ref={cardRef} className="mainContainer sidescroll-container">{cards}</main>
			{scrollButtons}
		</>
	);
}

