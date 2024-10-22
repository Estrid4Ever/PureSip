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

async function postRecipeComments(recipeId ,commentData) {
      
    try {
        const response = await fetch(`https://recept8-turen.reky.se/recipes/${recipeId}/comments`, {  // Enter your IP address here

            method: 'POST',  
            body: JSON.stringify(commentData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            
          });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export {fetchAllRecipes, fetchRecipeById, fetchRecipeComments, postRecipeComments}

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