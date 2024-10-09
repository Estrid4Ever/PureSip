import SelectMenu from './SelectMenu';
import { useState, useEffect } from "react";
import fetchAllRecipes from "../apiCalls";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export default function Header({recipes}) {

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
