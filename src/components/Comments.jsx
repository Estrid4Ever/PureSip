import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { fetchRecipeComments } from "../apiCalls";

export default function Comments({ recipeId }) {

    const [comments, setComments] = useState([]);
    const [commentIsSent, setCommentIsSent] = useState(false);
    const [loading, setLoading] = useState(true);  // State för laddning
    const [error, setError] = useState(null);  // State för felhantering

    useEffect(() => {
        fetchRecipeComments(recipeId)
            .then((data) => {
                if (data) {
                    setComments(data);
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

    }, [commentIsSent]);

    if (loading) {
        return <p>Loading...</p>;  // Visa laddningsindikator
    }

    if (error) {
        return <p>{error}</p>;  // Visa felmeddelande
    }

    return <>
        <div className="comments-container">

            <AddComment comments={comments} recipeId={recipeId} commentIsSent={commentIsSent} setCommentIsSent={setCommentIsSent} />

            <CommentList comments={comments} commentIsSent={commentIsSent} />

        </div>
    </>;
}