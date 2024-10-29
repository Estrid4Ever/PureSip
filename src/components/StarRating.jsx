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


    const stars = starClass.map((star, index) =>
        <span key={index} className={star}></span>
    );

    if (endIndex < 5) {

        var decimalInPercent = Math.round((dish.avgRating % 1) * 100);

        if (decimalInPercent !== 0) {

            const mystyle = {
                background: `linear-gradient(to right, yellow ${decimalInPercent}%, var(--tan) ${decimalInPercent}%)`,
            };

            stars[endIndex + 1] = <span key={endIndex + 1} className={starClass[endIndex + 1]} id="checked-partial" style={mystyle}></span >;

        } else {
            
            stars[endIndex + 1] = <span key={endIndex + 1} className={starClass[endIndex + 1] + " checked"}></span >;
        }

    }

    return <><div className="rating" title={`${Math.round(dish.avgRating * 10) / 10} av 5 Stjärnor`}>
        {stars}
        {/* <span> ({dish.ratings.length})</span> */}
    </div></>;
}