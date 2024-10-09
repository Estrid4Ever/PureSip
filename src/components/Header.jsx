import SelectMenu from './SelectMenu';

export default function Header({ recipes, setSearchTerm }) {  // Ta emot recipes och setSearchTerm

    return (
        <>
            <header>
                <h1 className="header-title">PureSip</h1>
                <div className="search-categories">
                    <SelectMenu recepies={recipes} /> {/* Skicka recepten till SelectMenu */}
                    <div className='search-container'>
                        <input
                            className="searchbar"
                            type="text"
                            name="search"
                            placeholder="Sök..."
                            onChange={(e) => setSearchTerm(e.target.value)} // Uppdatera sökordet
                        />
                        <span className="searchbar-icon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );
}
