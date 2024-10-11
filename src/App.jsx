import "./App.css";
<<<<<<<<< Temporary merge branch 1
import PreviewCard from "./components/PreviewCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<PreviewCard />
        <Footer/>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "recipe/:recipeId",
		element: (
			<>
				<Header />
				<Recipe />
        <Footer/>
			</>
		),
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
=========
import { useState, useEffect } from "react";
import fetchAllRecipes from './apiCalls';
import Header from './components/Header';
import PreviewCard from './components/PreviewCard';

export default function App() {
  const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
  const [loading, setLoading] = useState(true);  // State för laddning
  const [error, setError] = useState(null);  // State för felhantering
  const [searchTerm, setSearchTerm] = useState("");  // State för sökord

  useEffect(() => {
    fetchAllRecipes()
      .then((data) => {
        if (data) {
          setRecipes(data);  // Sätt recepten
        } else {
          setError("No data available");
        }
      })
      .catch(() => {
        setError("Failed to fetch recipes");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;  // Visa laddningsindikator
  }

  if (error) {
    return <p>{error}</p>;  // Visa felmeddelande
  }

  // Filtrera recepten baserat på sökordet
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header recipes={recipes} setSearchTerm={setSearchTerm} /> {/* Skicka recipes och setSearchTerm till Header */}
      <PreviewCard recipes={filteredRecipes} /> {/* Använd filtrerade recept */}

      {/* FOOTER */}
      <footer className="footer">
        <div className="subscription">
          <h3>Bli prenumerant hos PureSip!</h3>
          <p>Få drinkrecept och exklusiva erbjudanden direkt till din mail.</p>
          <form className="subscription-form">
            <input type="email" placeholder="E-postadress" />
            <input type="tel" placeholder="+46 Mobilnummer" />
            <button type="submit">Börja prenumerera</button>
          </form>
          <p>Genom att anmäla dig godkänner du PureSip:s <a href="#">allmänna villkor</a> och <a href="#">integritetspolicy</a>.</p>
        </div>
        <div className="footer-info">
          <div className="company-info">
            <img src="/images/ITHS.picture.png" alt="ITHS bild" className="logo" />
            <p>PureSip</p>
            <p>Trekantsvägen 1, 117 43 Stockholm</p>
            <p><a href="mailto:info@iths.se">info@iths.se</a></p>
          </div>
          <div className="footer-links">
            <a href="#">Om PureSip</a>
            <a href="#">Allmänna villkor</a>
            <a href="#">Personuppgiftspolicy</a>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/ITHogskolan" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/ithogskolan/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
          </div>
        </div>
      </footer>
    </>
  );
>>>>>>>>> Temporary merge branch 2
}
