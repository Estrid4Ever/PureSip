import { Outlet, Link, useNavigate } from "react-router-dom";
import SelectMenu from './SelectMenu';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Header({ recipes, setSearchTerm }) {

    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const { categoryId, searchId } = useParams();

    useEffect(() => {
        if (!searchId) {
            setSearchValue("");
        }
    }, [categoryId, searchId]);


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

    function handleSearch(searchValue) {
        setSearchValue(searchValue);
        setSearchTerm(searchValue);
        setSearchParam("/search/" + searchValue);
    }


    function handleKeyDown(event) {

        if (event.code == 'Enter') {
            navigate(searchParam, { replace: true });
        }
    }

    return (
        <header className="header-container">

            <div>
                <Link className="header-title-link" to={`/`}>
                    <h1 className="header-title">PureSip</h1>
                </Link>  {/* Titel */}

                <img src="/PureSip_Logo-small.png" alt="puresip logo" />
            </div>

            <div className="search-categories">

                <SelectMenu categoryOptions={categoryOptions} />

                <div className='search-container'>
                    <input className="searchbar"
                        type="text"
                        name="search"
                        placeholder="Sök..."
                        value={searchValue}
                        onInput={(e) => handleSearch(e.target.value)} // Uppdatera sökordet
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <Link className="searchbar-icon" to={searchParam}>

                        <i className="fas fa-search"></i>

                    </Link>
                </div>

            </div>

        </header>
    );
}
