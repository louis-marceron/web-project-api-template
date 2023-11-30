import sequelize from './config/database.js'
import app from './app.js'
const PORT = process.env.PORT || 3000

// Charge les models de la base de données pour que Sequelize puisse les synchroniser
import './models/Book.js'

;(async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Database connection established and models synced.')

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Unable to connect to the database or sync models:', error)
    }
})()
