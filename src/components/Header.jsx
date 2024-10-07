import { useState, useEffect } from "react";
import SelectMenu from './SelectMenu';
import fetchRecipes from '../apiCalls';

export default function Header() {

    const [recipes, setRecipes] = useState([]);

    fetchRecipes().then((data) => {
        setRecipes(data);
    });


    return <>
        <header>
            <h1 className="header-title">PureSip</h1>
            <div className="search-categories">

                <SelectMenu recepies={recipes} />
                <div className='search-container'>
                    <input className="searchbar" type="text" name="search" placeholder="Sök..." />
                    <span className="searchbar-icon"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </header>
    </>;
}