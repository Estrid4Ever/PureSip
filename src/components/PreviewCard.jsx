import { useState, useEffect } from "react";
import StarRating from './StarRating';
import fetchRecipes from '../apiCalls';

export default function PreviewCard() {

    const [recipes, setRecipes] = useState([]);

    fetchRecipes().then((data) => {
        setRecipes(data);
    });

    const cards = recipes.map(dish =>
        <div key={dish._id} className="card">
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
        </div>
    );

    return <><main className="mainContainer">{cards}</main></>;
}