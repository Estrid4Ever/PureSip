import SelectMenu from './SelectMenu';
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Header({ recipes, setSearchTerm }) {  // Ta emot setSearchTerm

    return( <>
        <header>
            <Link className="header-title-link" to={`/`}>
                <h1 className="header-title">PureSip</h1>
            </Link>
            <div className="search-categories">

                <SelectMenu recipes={recipes} />
                <div className='search-container'>
                    <input className="searchbar"
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
