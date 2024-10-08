import { renderToNodeStream } from "react-dom/server";

export default function SelectMenu({ recepies }) {

	const uniqueCategories = [...new Set(
		recepies.flatMap(drink => drink.categories)
	)];

	//TODO	if the same category exist with different casing this will probably break. needs a fix.

	uniqueCategories.map(category => (
		category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
	));

	const categoryOptions = uniqueCategories.map(category => (
		<option className="category-select-option" key={category} value={category}>
			{category}
		</option>
	));

	return (
		<>
			<div className="categories-container">
				<label htmlFor="category"></label>
				<select className="category-select" name="category">
					<option className="default-select-value" defaultValue="Kategorier" hidden>Kategorier</option>
					{categoryOptions}
				</select>
			</div>
		</>
	);
}
