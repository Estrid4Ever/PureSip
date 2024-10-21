import { useState, useEffect } from "react";
import { postRecipeComments } from "../apiCalls";

export default function AddComment({ comments, recipeId }) {

    const [newComment, setNewComment] = useState("");
    const [commentName, setCommentName] = useState("");
    const [fieldsAreValid, setFieldsAreValid] = useState(false)
    const [commentIsSent, setCommentIsSet] = useState(false);

    const publishNewComment = () => {

        if(commentName === "" || newComment === "") {
            setFieldsAreValid(false);
            return
        }

        const date = new Date();

        const newCommentData = {
            "name": commentName,
            "comment": newComment
        };

        postRecipeComments(recipeId, newCommentData).then((data) => {
            console.log(data);
        });

        setCommentIsSet(true);

    };

    const cancelComment = () => {
        setNewComment("");
        setCommentName("");
        setFieldsAreValid(false);
    };

    function commentOnChangeHandler(value) {
        setNewComment(value);

        if(commentName !== "" && newComment !== "") {
            setFieldsAreValid(true);
        } else {
            setFieldsAreValid(false)
        }
    }

    function nameOnChangeHandler(value) {
        setCommentName(value);

        if(commentName !== "" && newComment !== "") {
            setFieldsAreValid(true);
        } else {
            setFieldsAreValid(false)
        }
    }

    const addCommentOrThanksForComment = commentIsSent ? <div className="comments-thanks"> <h2 className="comments-thanks-text">Tack för din kommentar!</h2> </div>: <div className="comments-add-comment">

    <div className="comments-title-amount">
        <h2 className="comments-title">Kommentarer</h2>
        <p className="comments-total-amount">({comments.length})</p>
    </div>

    <textarea className="comments-text-input" placeholder="Skriv din kommentar" value={newComment} onChange={e => commentOnChangeHandler(e.target.value)} />

    <div className="comments-name-buttons">

        <input className="comments-name" type="text" placeholder="Ange namn" value={commentName} onChange={e => nameOnChangeHandler(e.target.value)} />

        <div className="comments-buttons">
            <button onClick={() => cancelComment()} className="comments-button cancel" >Avbryt</button>
            <button onClick={publishNewComment} className={fieldsAreValid ? "comments-button send" : "comments-button invalid-send"} >Skicka</button>
        </div>

    </div>

</div>

    return <>{addCommentOrThanksForComment}</>;
}