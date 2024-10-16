import "./App.css";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import ErrorPage from "./components/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/category/:categoryId",
		element: <HomePage />,
	},
	{
		path: "/search/:searchId",
		element: <HomePage />,
	},
	{
		path: "/recipe/:recipeId",
		element: <RecipePage />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
	
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
