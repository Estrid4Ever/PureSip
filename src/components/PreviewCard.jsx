import StarRating from "./StarRating";
import PrepTime from "./PrepTime";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import React, { useRef } from "react";

export default function PreviewCard({ recipes }) {

	const cardRef = useRef(0);

	const scroll = (scrollOffset) => {
		cardRef.current.scrollLeft += scrollOffset;
	};

	function shortenDescription(text) {
		const sentences = text.split(".");
		return sentences[0] + ".";
	}

	const cards = recipes.map((dish) => (
		<Link key={dish._id} to={`/recipe/${dish._id}`}>
			<div className="card">
				<img
					className="cardImg"
					src={dish.imageUrl}
					alt={`Picture of ` + dish.title}
				/>

				<h2 className="cardTitle">{dish.title}</h2>

				<div className="rating-time">
					<StarRating dish={dish} />

					<PrepTime dish={dish} />
				</div>

				<p className="description">{shortenDescription(dish.description)}</p>
			</div>
		</Link>
	));

	

	var scrollButtons = recipes.length > 3 ? <div className="scroll-buttons">
		<button onClick={() => scroll(-330)}><i className="fa-solid fa-angle-left"></i></button>
		<button onClick={() => scroll(330)}><i className="fa-solid fa-angle-right"></i></button>
	</div> : recipes.length <= 1 ? <></> : <div className="scroll-buttons" id="three-or-less">
		<button onClick={() => scroll(-330)}><i className="fa-solid fa-angle-left"></i></button>
		<button onClick={() => scroll(330)}><i className="fa-solid fa-angle-right"></i></button>
	</div>;

	return (
		<>
			<main ref={cardRef} className="mainContainer sidescroll-container">{cards}</main>
			{scrollButtons}
		</>
	);
}
