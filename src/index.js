console.log('DATABASE_URL:', process.env.DATABASE_URL)
console.log('SECRET:', process.env.SECRET)

if (!process.env.DATABASE_URL) {
    console.error('Missing DATABASE_URL environment variable.')
    process.exit(1)
}

if (!process.env.SECRET) {
    console.error('Missing SECRET environment variable.')
    process.exit(1)
}

import app from './app.js'
import sequelize from './config/database.js'

// Charge les models de la base de données pour que Sequelize puisse les synchroniser
import './models/AppUser.model.js'
import './models/Book.js'

const PORT = process.env.PORT || 3000

try {
    await sequelize.authenticate()
    // force: true suppose que la base de données est vide et la réinitialise à chaque fois
    // /!\ À n'utiliser qu'en développement
    await sequelize.sync({ force: true })
    console.log('Database connection established and models synced.')

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
} catch (error) {
    console.error('Unable to connect to the database or sync models:', error)
}
