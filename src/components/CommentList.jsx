import { useState, useEffect } from "react";
import { fetchRecipeComments } from "../apiCalls";

export default function CommentList({ recipeId }) {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering

    useEffect(() => {
        fetchRecipeComments(recipeId)
            .then((data) => {
                if (data) {
                    setComments(data);  // Sätt recepten
                } else {
                    setError("No data available");
                }
            })
            .catch(() => {
                setError("Failed to fetch recipes");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // const { recipeId } = useParams();
    // const drink = recipes.find(recipe => recipe._id === recipeId)

    if (loading) {
        return <p>Loading...</p>;  // Visa laddningsindikator
    }

    if (error) {
        return <p>{error}</p>;  // Visa felmeddelande
    }

    const listItems = comments.length > 0 ? comments.map((comment) => {
        <li>
            <div className="comments-name-date">
                <h4>{comment.name.split}</h4>
                <p>date</p>
            </div>
            <p className="comments-text">{comment.comment}</p>
        </li>
    })
        : <li><p className="comments-empty">Inga kommentarer finns än...</p></li>;


    return <>
        <ul className="comments-list">
            {listItems}
        </ul>
    </>;
}