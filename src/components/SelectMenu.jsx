export default function SelectMenu( {recepies} ) {

	const uniqueCategories = [...new Set(
		recepies.flatMap(drink => drink.categories)
	)];

	uniqueCategories.map( category => (
		category.charAt(0).toUpperCase() + category.slice(1)
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
