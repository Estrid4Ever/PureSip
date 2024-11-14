// Function to fetch all recipes from the API
async function fetchAllRecipes() {
    try {
        // Sending a GET request to the recipes endpoint
        const response = await fetch('https://recept8-turen.reky.se/recipes');
        if (!response.ok) { // Check if the response is not OK (status code not in the range 200-299)
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error with the status code
        }
        const data = await response.json(); // Parse the response data as JSON
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to fetch a specific recipe by its ID
async function fetchRecipeById(recipeId) {
    try {
        // Sending a GET request to fetch a recipe by its ID
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}`);
        if (!response.ok) { // Check for a successful response
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-OK responses
        }
        const data = await response.json(); // Parse the response data as JSON
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to fetch comments for a specific recipe by its ID
async function fetchRecipeComments(recipeId) {
    try {
        // Sending a GET request to fetch comments for a recipe
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/comments`);
        if (!response.ok) { // Check for a successful response
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-OK responses
        }
        const data = await response.json(); // Parse the response data as JSON
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to post a comment for a specific recipe
async function postRecipeComments(recipeId, commentData) {
    try {
        // Sending a POST request to add a comment to a recipe
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/comments`, {
            method: 'POST', // Specify the method as POST
            body: JSON.stringify(commentData), // Convert comment data to JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Set the content type to JSON
            }
        });
        if (!response.ok) { // Check for a successful response
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-OK responses
        }
        const data = await response.json(); // Parse the response data as JSON
        return response; // Return the response object
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to post a rating for a specific recipe
async function postRecipeRating(recipeId, ratingData) {
    try {
        // Sending a POST request to add a rating to a recipe
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/ratings`, {
            method: 'POST', // Specify the method as POST
            body: JSON.stringify(ratingData), // Convert rating data to JSON
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // Set the content type to JSON
            }
        });
        if (!response.ok) { // Check for a successful response
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-OK responses
        }
        const data = await response.json(); // Parse the response data as JSON
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors to the console
    }
}

// Function to fetch recipes with ratings using Axios
export const fetchRecipesWithRatings = async () => {
    try {
        // Sending a GET request to the recipes endpoint using Axios
        const response = await axios.get('/api/recipes'); // Adjust endpoint as necessary
        return response.data; // Assuming this returns recipes with ratings included
    } catch (error) {
        console.error("Error fetching recipes:", error); // Log any errors to the console
        throw error; // Re-throw the error to allow further handling by the calling code
    }
};

// Exporting the functions to be used in other parts of the application
export { fetchAllRecipes, fetchRecipeById, fetchRecipeComments, postRecipeComments, postRecipeRating };

//this is only a temporary function for updating info in the db.

// async function fixDb() {
//     // just for fixing db
//     //this fixes imageUrl paths

//     var data;

//     try {
//         const response = await fetch('https://recept8-turen.reky.se/recipes');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         data = await response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }

//     const filtered = data.filter(recipe =>
//         recipe.imageUrl.startsWith("../src")
//     );

//     filtered.forEach(element => {
//         const newUrl = element.imageUrl.split("/src/assets")
//         const id = element._id
//         const patchData = {
//             imageUrl: newUrl[1]
//         }
//         console.log(id, " <---> ", patchData)


//         // patch(id, patchData);
        
//     });

//     async function patch(id, patchData) {
//         try {
//             const response = await fetch(`https://recept8-turen.reky.se/recipes/${id}`, {  // Enter your IP address here
                
//                 method: 'PATCH',  
//                 body: JSON.stringify(patchData),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 }
                
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
            
//             console.log(data)
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
// }
