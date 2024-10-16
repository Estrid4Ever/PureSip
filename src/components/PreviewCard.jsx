import StarRating from "./StarRating";
import PrepTime from "./PrepTime";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function PreviewCard({ recipes }) {

	const cards = recipes.map((dish) => (
		<Link key={dish._id} className="card" to={`/recipe/${dish._id}`}>
			<img
				className="cardImg"
				src={dish.imageUrl}
				alt={`Picture of ` + dish.title}
			/>

			<h2 className="cardTitle">{dish.title}</h2>

			<div className="rating-time">
				<StarRating dish={dish} />

				<PrepTime dish={dish}/>
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
