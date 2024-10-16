import { useState, useEffect } from "react";
import { postRecipeComments } from "../apiCalls";
import CommentList from "./CommentList";

export default function Comments({ recipeId }) {

    const [newComment, setNewComment] = useState("");
    const [commentName, setCommentName] = useState("");

    const publishNewComment = () => {

        var

        console.log("send");
    };

    const cancelComment = () => {
        setNewComment("")
        setCommentName("")
    };

    // useEffect(() => {
    //     fetchRecipeComments(recipeId).then((data) => {
    //         setComments(data);
    //     });
    // }, []);

    return <>
        <div className="comments-container">

            <div className="comments-add-comment">

                <div className="comments-title-amount">
                    <h2 className="comments-title">Kommentarer</h2>
                    <p className="comments-total-amount">(4st)</p>
                </div>

                <textarea className="comments-text-input" placeholder="Skriv din kommentar" value={newComment} onChange={e => setNewComment(e.target.value)} />

                <div className="comments-name-buttons">
                    
                    <input className="comments-name" type="text" placeholder="Ange namn" value={commentName} onChange={e => setCommentName(e.target.value)}/>

                    <div className="comments-buttons">
                        <button onClick={() => cancelComment()} className="comments-button cancel" >Avbryt</button>
                        <button onClick={publishNewComment} className="comments-button send" >Skicka</button>
                    </div>

                </div>

            </div>

            <CommentList recipeId={recipeId}/>

        </div>
    </>;
}