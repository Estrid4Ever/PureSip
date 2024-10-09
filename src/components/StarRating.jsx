export default function StarRating({ dish }) {

    // let rating = 0;
    // for (const nr of dish.ratings) {
    //     rating += nr
    // }
    // rating = rating / dish.ratings.length;

    let starClass = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];

    for (let i = 0; i < dish.avgRating - 1; i++) {
        starClass[i] = starClass[i] + " checked";
    }

    const stars = starClass.map((star, index) =>
        <span key={index} className={star}></span>
    );

    return <><div className="rating">
        {stars}
        {/* <span> ({dish.ratings.length})</span> */}
    </div></>;
}