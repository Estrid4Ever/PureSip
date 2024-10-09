import "./App.css";
import PreviewCard from './components/PreviewCard';
import Header from './components/Header';
import Recipe from './components/Recipe';
import { useState, useEffect } from "react";
import fetchAllRecipes from './apiCalls';

export default function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchAllRecipes().then((data) => {
      setRecipes(data);
    });
  }, []); 


  return (
    <>
      <Header recipes={recipes} />

      <Recipe/>

      <PreviewCard recipes={recipes} />
    </>
  );
}
