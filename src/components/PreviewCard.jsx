import StarRating from "./StarRating";
import { useState, useEffect } from "react";
import fetchAllRecipes from "../apiCalls";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function PreviewCard() {
    
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetchAllRecipes().then((data) => {
			setRecipes(data);
		});
	}, []);

	const cards = recipes.map((dish) => (
		<Link key={dish._id} className="card" to={`recipe/${dish._id}`}>
				<img
					className="cardImg"
					src={dish.imageUrl}
					alt="picture of {dish.title}"
				/>

				<h2 className="cardTitle">{dish.title}</h2>

				<div className="rating-time">
					<StarRating dish={dish} />

					<div className="prep-time">
						<i className="fa clock">&#xf017;</i>
						<p className="time">{dish.timeInMins} min</p>
					</div>
				</div>

				<p className="description">{dish.description}</p>
		</Link>
	));

	return (
		<>
			<main className="mainContainer">{cards}</main>
		</>
	);
}
