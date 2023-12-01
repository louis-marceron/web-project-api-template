import { Sequelize } from 'sequelize'

if (!process.env.DATABASE_URL) {
    console.error('Missing DATABASE_URL environment variable.')
    process.exit(1)
}

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' })

export default sequelize
