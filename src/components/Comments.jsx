export default function Comments({ recipeId }) {



    return <>
        <div className="comments-container">

            <div className="comments-add-comment">

                <div className="comments-title-amount">
                    <h2 className="comments-title">Kommentarer</h2>
                    <p className="comments-total-amount">(4st)</p>
                </div>

                <input type="text" className="comments-text-input" placeholder="Skriv din kommentar" required/>

                <div className="comments-buttons">
                    <button className="comments-button cancel" >Avbryt</button>
                    <button className="comments-button send" >Skicka</button>
                </div>

            </div>

            <ul className="comments-list">
                <li>
                    <div className="comments-name-date">
                        <h3>name</h3>
                        <p>date</p>
                    </div>
                    <p>kommentaren lyder så här! bla bla bla...</p>
                </li>
            </ul>

        </div>
    </>;
}