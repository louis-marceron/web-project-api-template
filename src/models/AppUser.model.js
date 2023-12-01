import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const AppUser = sequelize.define('AppUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
})

export default AppUser
