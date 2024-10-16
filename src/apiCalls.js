async function fetchAllRecipes() {
    try {
        const response = await fetch('https://recept8-turen.reky.se/recipes');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchRecipeById(recipeId) {
    try {
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchRecipeComments(recipeId) {
    try {
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function postRecipeComments(recipeId) {

    fetch('http://------------:8080/', {  // Enter your IP address here

        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  
      })
      
    // try {
    //     const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/comments`);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();

    //     return data;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
}

export {fetchAllRecipes, fetchRecipeById, fetchRecipeComments, postRecipeComments}