import StarRating from "./StarRating";
import PrepTime from "./PrepTime";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import React, { useRef, useState } from "react";

export default function PreviewCard({ recipes }) {

	const cardRef = useRef(0);

	const [videoSrc, setVideoSrc] = useState("https://videos.pexels.com/video-files/854128/854128-sd_640_360_25fps.mp4");

	const scroll = (scrollOffset) => {
		cardRef.current.scrollLeft += scrollOffset;
	};

	function shortenDescription(text) {
		const sentences = text.split(".");
		return sentences[0] + ".";
	}

	function setSrcAndPlay(event) {
		setVideoSrc(`https://videos.pexels.com/video-files/854128/854128-sd_640_360_25fps.mp4`);

		setTimeout(function () {
			event.target.play();
		}, 1);
	}

	function deleteSrcAndPause(event) {
		event.target.pause();
		setVideoSrc("");
	}

	const cards = recipes.map((dish) => (
		<Link key={dish._id} to={`/recipe/${dish._id}`}>
			<div className="card">
				<video
					key={dish._id}
					className="cardImg"
					alt={`Picture of ` + dish.title}
					poster={dish.imageUrl}
					onMouseOver={event => setSrcAndPlay(event)}
					onMouseOut={event => deleteSrcAndPause(event)}
					onEnded={() => setVideoSrc("")}
					src={videoSrc} >
				</video>
				{/* <img
					className="cardImg"
					src={dish.imageUrl}
					alt={`Picture of ` + dish.title}
				/> */}

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
