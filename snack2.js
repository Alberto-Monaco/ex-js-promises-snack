//? 🏆 Snack 2

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6.
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const numeroCasuale = Math.floor(Math.random() * 6) + 1

			if (Math.random() < 0.2) {
				reject('Il dado si è incastrato!')
			} else {
				resolve(numeroCasuale)
			}
		}, 3000)
	})
}

lanciaDado()
	.then((res) => console.log('Risultato del lancio:', res))
	.catch((error) => console.log('Errore:', error))
