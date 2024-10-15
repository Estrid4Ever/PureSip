export default function SelectMenu({ recipes, setSelectedCategory }) {  // Lägg till setSelectedCategory i props

    // Kontrollera om recipes existerar och innehåller data
    const uniqueCategories = recipes && recipes.length > 0 ? [...new Set(
        recipes
            .flatMap(drink => drink.categories || [])  // Kontrollera att drink.categories existerar, annars använd en tom array
            .map(category => category.charAt(0).toUpperCase() + category.slice(1).toLowerCase())
    )] : [];

    // Rendera kategorival som option-element
    const categoryOptions = uniqueCategories.map(category => (
        <option className="category-select-option" key={category} value={category}>
            {category}
        </option>
    ));

    return (
        <>
            <div className="categories-container">
                <label htmlFor="category"></label>
                <select 
                    className="category-select" 
                    name="category" 
                    onChange={(e) => setSelectedCategory(e.target.value)}  // Uppdatera kategorin baserat på användarens val
                >
                    <option className="default-select-value" defaultValue="Kategorier" hidden>Kategorier</option>
                    {categoryOptions}
                </select>
            </div>
        </>
    );
}

