//this component renders comments if there are any. in order of newest to oldest.

export default function CommentList({ comments }) {

    var listItems = [<li key={"empty"}><p className="comments-empty">Inga kommentarer finns än...</p></li>];

    if (comments.length > 0) {
        listItems = comments.map((comment) => 
            <li key={comment._id}>
                <div className="comments-name-date">
                    <h4>{comment.name}</h4>
                    <i>{comment.createdAt.split("T")[0]}</i>
                </div>
                <p className="comments-text">{comment.comment}</p>
            </li>
        );

        listItems.reverse();
    }

    return <>
        <ul className="comments-list">
            {listItems}
        </ul>
    </>;
}