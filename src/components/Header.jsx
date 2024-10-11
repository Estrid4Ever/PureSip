import SelectMenu from './SelectMenu';
import { Outlet, Link, useLoaderData } from "react-router-dom";

<<<<<<<<< Temporary merge branch 1
export default function Header() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchAllRecipes().then((data) => {
            setRecipes(data);
        });
    }, []);

    return <>
        <header>
            <h1 className="header-title">PureSip</h1>
            <div className="search-categories">

                <SelectMenu recipes={recipes} />
                <div className='search-container'>
                    <input className="searchbar" type="text" name="search" placeholder="Sök..." />
                    <span className="searchbar-icon"><i className="fas fa-search"></i></span>
=========
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
>>>>>>>>> Temporary merge branch 2
                </div>
            </header>
        </>
    );
}
