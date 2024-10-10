export default async function fetchAllRecipes() {
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

export async function fetchRecipeById(recipeId) {
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