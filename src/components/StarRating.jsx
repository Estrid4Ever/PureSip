export default function StarRating({ dish }) {

    // let rating = 0;
    // for (const nr of dish.ratings) {
    //     rating += nr
    // }
    // rating = rating / dish.ratings.length;

    let starClass = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];

    let endIndex;

    for (let i = 0; i < dish.avgRating - 1; i++) {
        starClass[i] = starClass[i] + " checked";
        endIndex = i;
    }

    if(endIndex < 5) {
        var decimal = dish.avgRating % 1;
        var rounded = Math.round(decimal * 10) / 10

        console.log(dish.title + " rating-decimal: " + decimal)

        //switch för 0.25, 0.5 och 0.75

        starClass[endIndex + 1] = starClass[endIndex + 1] + " partial-checked";
    }

    const stars = starClass.map((star, index) =>
        <span key={index} className={star}></span>
    );

    return <><div className="rating">
        {stars}
        {/* <span> ({dish.ratings.length})</span> */}
    </div></>;
}