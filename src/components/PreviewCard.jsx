import StarRating from "./StarRating";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function PreviewCard({ recipes }) {

	const cards = recipes.map((dish) => (
		<Link key={dish._id} className="card" to={`recipe/${dish._id}`}>
			<img
				className="cardImg"
				src={dish.imageUrl}
				alt={`Picture of ` + dish.title}
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
