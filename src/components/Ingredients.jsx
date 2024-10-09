
export default function Ingredients({ ingredients }) {

    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient.amount == 0 ? '' : ingredient.amount + ' ' + ingredient.unit + ' '} {ingredient.name}</li>
    ));

    return <>{ingredientsListItems}</>;
}