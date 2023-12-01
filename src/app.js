import express, { json, urlencoded } from 'express'
import helmet from 'helmet'

import booksRoute from './routes/books.js'
import authentificationRoute from './routes/Authentication.route.js'

import notFoundErrorHandler from './middlewares/notFoundErrorHandler.js'

const app = express()

// Sécurité : https://expressjs.com/fr/advanced/best-practice-security
app.use(helmet())
// Exlication du fonction de .json() et .urlencoded() : https://stackoverflow.com/a/51844327
app.use(json()) // Transforme les requêtes entrantes JSON en objet JS 
app.use(urlencoded({ extended: true })) // Permet de lire les données des strings dans les requêtes entrantes 

// Routes
app.use('/books', booksRoute)
app.use('/', authentificationRoute)

// Quand l'URL n'est pas trouvée
app.use(notFoundErrorHandler)

// Exporte le module app pour l'utiliser dans d'autres fichiers (index.js)
export default app
