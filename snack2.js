//? 🏆 Snack 2

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
	// Creiamo una nuova Promise
	return new Promise((resolve, reject) => {
		// Utilizziamo setTimeout per simulare un'attesa di 3 secondi
		setTimeout(() => {
			// Genera un numero casuale tra 1 e 6
			const numeroCasuale = Math.floor(Math.random() * 6) + 1

			// Nel 20% dei casi (random < 0.2) il dado si incastra
			if (Math.random() < 0.2) {
				reject('Il dado si è incastrato!')
			} else {
				// Negli altri casi, restituisce il numero generato
				resolve(numeroCasuale)
			}
		}, 3000)
	})
}

// Chiamiamo la funzione e gestiamo il risultato
lanciaDado()
	.then((res) => console.log('Risultato del lancio:', res)) // In caso di successo
	.catch((error) => console.log('Errore:', error)) // In caso di errore
