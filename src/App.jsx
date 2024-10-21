import "./App.css";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import ErrorPage from "./components/error-page";
import About from "./components/About"; // Importera Om PureSip-komponenten
import Terms from "./components/Terms"; // Importera Allmänna villkor-komponenten
import Privacy from "./components/Privacy"; // Importera Personuppgiftspolicy-komponenten
import Footer from "./components/Footer"; // Importera Footer-komponenten
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAllRecipes from './apiCalls';
import PreviewCard from './components/PreviewCard';

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
        element: <About />, // Rutt för Om PureSip
    },
    {
        path: "/terms",
        element: <Terms />, // Rutt för Allmänna villkor
    },
    {
        path: "/privacy",
        element: <Privacy />, // Rutt för Personuppgiftspolicy
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
            <Footer /> {/* Lägg till footern så att den visas på alla sidor */}
        </>
    );
}

