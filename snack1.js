//? 🏆 Snack 1

// Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e
// restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

// Function that returns a Promise to get a post title by ID
function getPostTitle(id) {
	// Create and return a new Promise
	return new Promise((resolve, reject) => {
		// Fetch data from the API using the provided ID
		fetch(`https://dummyjson.com/posts/${id}`)
			// Convert the response to JSON
			.then((response) => response.json())
			// Extract the title from the data and resolve the Promise
			.then((data) => resolve(data.title))
			// If any error occurs, reject the Promise with the error
			.catch((error) => reject(error))
	})
}

// Example usage: get the title of post with ID 1
getPostTitle(1)
	// Log the title if successful
	.then((title) => console.log(title))
	// Log any errors that occur
	.catch((error) => console.error(error))
