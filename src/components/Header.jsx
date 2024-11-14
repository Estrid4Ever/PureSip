import { Outlet, Link, useNavigate } from "react-router-dom"; // Importing necessary components and hooks from react-router-dom
import SelectMenu from './SelectMenu'; // Importing the SelectMenu component for category selection
import { fetchAllRecipes } from '../apiCalls'; // Importing the function to fetch all recipes from the API
import { useState, useEffect } from "react"; // Importing React hooks for state and effect management
import { useParams } from "react-router-dom"; // Importing useParams to extract route parameters

// Functional component for the Header
export default function Header({ recipes, setSearchTerm }) {

    const navigate = useNavigate(); // Hook to programmatically navigate
    const [drinks, setDrinks] = useState([]);  // State to hold the recipes
    const [searchParam, setSearchParam] = useState(""); // State to hold the search parameter for navigation
    const [searchValue, setSearchValue] = useState(""); // State to hold the current search input value
    const { categoryId, searchId } = useParams(); // Extracting categoryId and searchId from the URL parameters

    // Effect hook to fetch recipes or set drinks when categoryId or searchId changes
    useEffect(() => {
        if(recipes) {
            setDrinks(recipes); // If recipes are passed as props, set them to drinks state
        } else {
            fetchAllRecipes() // Fetching recipes from the API if not provided
                .then((data) => {
                    if (data) {
                        setDrinks(data);  // Set the fetched recipes to drinks state
                    }
                });
        }

        if (!searchId) {
            setSearchValue(""); // Clear the search value if searchId is not present
        }
    }, [categoryId, searchId]); // Dependencies: re-run effect when categoryId or searchId changes


    // Dynamically generate unique categories from the recipes
    const uniqueCategories = drinks && drinks.length > 0 ? [...new Set(
        drinks
            .flatMap(drink => drink.categories || [])  // Ensure drink.categories exists
            .map(category => category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()) // Capitalize categories
    )] : []; // If no drinks, return an empty array

    // Mapping unique categories to option elements for the select menu
    const categoryOptions = uniqueCategories.map(category => (
        <option className="category-select-option" key={category} value={category}>
            {category} 
        </option>
    ));

    // Function to handle search input changes
    function handleSearch(searchValue) {
        setSearchValue(searchValue); // Update the search value state
        if (setSearchTerm) {
            setSearchTerm(searchValue); // Update the search term in the parent component
        }
        setSearchParam("/search/" + searchValue); // Update the search parameter for navigation
    }

    // Function to handle key down events in the search input
    function handleKeyDown(event) {
        if (event.code === 'Enter' && searchValue.trim() !== "") { // Check for Enter key and non-empty search
            navigate(searchParam, { replace: true }); // Navigate to the search parameter
        }
    }

    return (
        <header className="header-container"> {/* Main header container */}

            <div>
                <Link className="header-title-link" to={`/`}> {/* Link to the home page */}
                    <img src="/PURESIP logoo in black.png" alt="puresip logo" /> {/* Logo image */}
                </Link>  {/* Title */}
            </div>

            <div className="search-categories"> {/* Container for search and category selection */}

                <SelectMenu categoryOptions={categoryOptions} /> {/* Rendering the SelectMenu with category options */}

                <div className='search-container'> {/* Container for the search input and icon */}
                    <input className="searchbar"
                        type="text" // Input type is text
                        name="search"
                        placeholder="Sök..." // Placeholder text for the search bar
                        value={searchValue} // Controlled input value
                        onInput={(e) => handleSearch(e.target.value)} // Update search term on input
                        onKeyDown={(e) => handleKeyDown(e)} // Handle key down events
                    />
                    <Link className="searchbar-icon" to={searchParam}> {/* Link to the search results */}
                        <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                    </Link>
                </div>

            </div>

        </header>
    );
}