import SelectMenu from './SelectMenu';
import { useState, useEffect } from "react";
import fetchAllRecipes from "../apiCalls";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Header({ setSearchTerm }) {  // Ta emot setSearchTerm

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchAllRecipes().then((data) => {
            setRecipes(data);
        });
    }, []);

    return( <>
        <header>
            <Link className="header-title-link" to={`/`}>
                <h1 className="header-title">PureSip</h1>
            </Link>
            <div className="search-categories">

                <SelectMenu recepies={recipes} />
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
