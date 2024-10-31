import "./App.css";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import ErrorPage from "./components/error-page";
import About from "./components/About"; 
import Terms from "./components/Terms"; 
import Privacy from "./components/Privacy"; 
import Footer from "./components/Footer"; 
import Header from "./components/Header"; 
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
        path: "/about",
        element: (
            <>
                <About /> {}
            </>
        ),
    },
    {
        path: "/terms",
        element: (
            <> 
                <Terms /> {}
            </>
        ),
    },
    {
        path: "/privacy",
        element: (
            <>
                <Privacy /> {}
            </>
        ),
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
            <Footer /> {}
        </>
    );
}
