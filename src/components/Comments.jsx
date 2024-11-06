import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { fetchRecipeComments } from "../apiCalls";

export default function Comments({ recipeId }) {

    const [comments, setComments] = useState([]);
    const [commentIsSent, setCommentIsSent] = useState(false);
    const [loading, setLoading] = useState(true);  // State for loading
    const [error, setError] = useState(null);  // State for error handeling

    //triggered on pageload and then again on sent comment
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
        return <p>Loading...</p>;  // show loader
    }

    if (error) {
        return <p>{error}</p>;  // show error
    }

    return <>
        <div className="comments-container">

            <AddComment comments={comments} recipeId={recipeId} commentIsSent={commentIsSent} setCommentIsSent={setCommentIsSent} />

            <CommentList comments={comments} commentIsSent={commentIsSent} />

        </div>
    </>;
}