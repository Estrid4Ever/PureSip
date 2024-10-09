import "./App.css";
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
}
