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
import Loading from "./components/loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/category/:categoryId",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/search/:searchId",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/recipe/:recipeId",
        element: <RecipePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <>
            <About />
            <Footer />
        </>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/terms",
        element: <>
                <Terms />
                <Footer />
            </>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/privacy",
        element: <>
                <Privacy />
                <Footer />
            </>,
        errorElement: <ErrorPage />,
    },
    {
        path: ":/*",
        errorElement: <ErrorPage />,
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} fallbackElement={<Loading></Loading>}/>
        </>
    );
}
