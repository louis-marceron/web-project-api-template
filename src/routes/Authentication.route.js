import { Router } from 'express'
import { login, signup, logout } from '../controllers/Authentication.controller.js'

export default Router()
    .post('/signup', signup)
    .post('/login', login)
    .post('/logout', logout)
