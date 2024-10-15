export default function Header({ setSearchTerm, recipes, setSelectedCategory }) {

    // Dynamiskt generera kategorier från recepten
    const uniqueCategories = recipes && recipes.length > 0 ? [...new Set(
        recipes
            .flatMap(drink => drink.categories || [])  // Säkerställ att drink.categories existerar
            .map(category => category.charAt(0).toUpperCase() + category.slice(1).toLowerCase())
    )] : [];

    const categoryOptions = uniqueCategories.map(category => (
        <option className="category-select-option" key={category} value={category}>
            {category}
        </option>
    ));

    return (
        <header className="header-container">
            <h1 className="header-title">PureSip</h1>  {/* Titel */}
            <div className="header-controls">
                <select 
                    className="category-select" 
                    name="category" 
                    onChange={(e) => setSelectedCategory(e.target.value)}  // Uppdatera kategorin
                >
                    <option className="default-select-value" defaultValue="Kategorier" hidden>Kategorier</option>
                    {categoryOptions}
                </select>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Sök..."
                    onChange={(e) => setSearchTerm(e.target.value)}  // Uppdatera sökterm
                />
            </div>
        </header>
    );
}
