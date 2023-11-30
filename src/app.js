import express, { json, urlencoded } from 'express'
import helmet from 'helmet'

import booksRoutes from './routes/books.js'

import notFoundErrorHandler from './middlewares/error-handlers/notFoundErrorHandler.js'
import genericErrorHandler from './middlewares/error-handlers/genericErrorHandler.js'

const app = express()

app.use(helmet())
// Exlication du fonction de .json() et .urlencoded() : https://stackoverflow.com/a/51844327
app.use(json()) // Transforme les requêtes entrantes JSON en objet JS 
app.use(urlencoded({ extended: true })) // Permet de lire les données des strings dans les requêtes entrantes 

// Middlewares personnalisés
// app.use(customMiddleware)

// Routes
app.use('/books', booksRoutes)

// Middlewares de gestion des erreurs
app.use(notFoundErrorHandler)
app.use(genericErrorHandler)

// Exporte le module app pour l'utiliser dans d'autres fichiers (index.js)
export default app
