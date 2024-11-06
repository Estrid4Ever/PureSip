
export default function Ingredients({ ingredients }) {

    //if ingredient amount is 0 it returns only ingredient name, otherwise it returns amount, unit and name
    //ex. if 0 "ice" if 3 "3 cubes of ice" (but in swe)
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient.amount == 0 ? '' : ingredient.amount + ' ' + ingredient.unit + ' '} {ingredient.name}</li>
    ));

    return <>{ingredientsListItems}</>;
}