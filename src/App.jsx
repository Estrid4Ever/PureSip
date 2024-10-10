import "./App.css";
import { useState, useEffect } from "react";
import fetchAllRecipes from './apiCalls';
import Header from './components/Header';
import PreviewCard from './components/PreviewCard';
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

// export default function App() {
//   const [recipes, setRecipes] = useState([]);  // State för att hålla recepten
//   const [loading, setLoading] = useState(true);  // State för laddning
//   const [error, setError] = useState(null);  // State för felhantering
//   const [searchTerm, setSearchTerm] = useState("");  // State för sökord

//   useEffect(() => {
//     fetchAllRecipes()
//       .then((data) => {
//         if (data) {
//           setRecipes(data);  // Sätt recepten
//         } else {
//           setError("No data available");
//         }
//       })
//       .catch(() => {
//         setError("Failed to fetch recipes");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;  // Visa laddningsindikator
//   }

//   if (error) {
//     return <p>{error}</p>;  // Visa felmeddelande
//   }

//   // Filtrera recepten baserat på sökordet
//   const filteredRecipes = recipes.filter(recipe =>
//     recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Header recipes={recipes} setSearchTerm={setSearchTerm} /> {/* Skicka recipes och setSearchTerm till Header */}
//       <PreviewCard recipes={filteredRecipes} /> {/* Använd filtrerade recept */}
//     </>
//   );



export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
