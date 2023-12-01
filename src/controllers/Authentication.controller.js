import jwt from 'jsonwebtoken';
import { genSalt ,compare, hash } from 'bcrypt';
import { UniqueConstraintError } from 'sequelize';
import AppUser from '../models/AppUser.model.js';
import validator from 'validator'

const TOKEN_LIFE_SPAN = '15d';
const COOKIE_LIFE_SPAN = 1000 * 60 * 60 * 24 * 15; // 15 days

function signupValidation(userInput) {
    const errors = [];
    if (!userInput.email || !userInput.password) {
        errors.push({ message: 'Please provide an email and a password' });
        return errors;
    }
    if (!validator.isEmail(userInput.email)) {
        errors.push({ message: 'Invalid email format' });
    }
    if (!validator.isStrongPassword(userInput.password, { minLength: 8 })) {
        errors.push({ message: 'Password is not strong enough' });
    }
    return errors;
}

function loginValidation(userInput) {
    const errors = [];
    if (!userInput.email || !userInput.password) {
        errors.push({ message: 'Please provide an email and a password' });
        return errors;
    }
    if (!validator.isEmail(userInput.email)) {
        errors.push({ message: 'Invalid email format' });
    }
    return errors;
}

export const signup = async (req, res) => {
    try {
        const credentials = req.body;
        const validationErrors = signupValidation(credentials);

        if (validationErrors.length > 0) {
            return res.status(400).json({ error: "Validation error", details: validationErrors });
        }

        // Hash le mot de passe
        const salt = await genSalt(10);
        const hashedPassword = await hash(credentials.password, salt);

        // Remplace le mot de passe en clair par le mot de passe hashé
        credentials.password = hashedPassword;

        const newUser = await AppUser.create(credentials);
        const token = jwt.sign({ id: newUser.user_id }, process.env.SECRET, { expiresIn: TOKEN_LIFE_SPAN });
        return res
            .cookie('token', token, { secure: true, httpOnly: true, maxAge: COOKIE_LIFE_SPAN, sameSite: 'lax' })
            .status(201)
            .json({
                message: 'Registered successfully',
                userId: newUser.user_id
            });
    } catch (error) {
        if (error instanceof UniqueConstraintError)
            return res.status(400).json({ error: "An account with this email already exists" });

        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Error creating user" });
    }
};

export const login = async (req, res) => {
    try {
        const INVALID_CREDENTIAL_MESSAGE = 'Invalid credentials';
        const credentials = req.body;

        const validationErrors = loginValidation(credentials);
        if (validationErrors.length > 0) {
            return res.status(400).json({ error: "Validation error", details: validationErrors });
        }

        // Check if the user exists
        const user = await AppUser.findOne({ where: { email: credentials.email } });
        if (user === null) {
            console.log('user not found');
            return res.status(401).json({ error: INVALID_CREDENTIAL_MESSAGE });
        }

        // Check if the password is valid
        const isValidPassword = await compare(credentials.password, user.password);
        if (!isValidPassword) {
            console.log('invalid password');
            return res.status(401).json({ error: INVALID_CREDENTIAL_MESSAGE });
        }

        // Return a JWT as a cookie
        const token = jwt.sign({ id: user.user_id }, process.env.SECRET, { expiresIn: TOKEN_LIFE_SPAN });
        return res
            .status(200)
            // Configuration d'un cookie nommé 'token' avec la valeur de la variable `token`.
            .cookie('token', token, {
                secure: true,    // Cette option spécifie que le cookie doit uniquement être envoyé via HTTPS. Cela aide à prévenir les attaques de type "man-in-the-middle".
                httpOnly: true,  // Cette option signifie que le cookie ne peut pas être accédé via des scripts côté client. C'est une mesure contre les attaques de type cross-site scripting (XSS).
                maxAge: COOKIE_LIFE_SPAN, // Cela définit l'âge maximum du cookie en millisecondes. Après ce temps, le cookie expirera automatiquement.
                sameSite: 'lax' // Ce paramètre contrôle si le cookie est envoyé avec des requêtes cross-origin. 'Lax' permet d'envoyer le cookie avec des navigations de niveau supérieur et sera appliqué comme paramètre par défaut pour les cookies.
            })
            .json({
                message: 'Logged in successfully',
                userId: user.user_id
            });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ error: 'Error logging in' });
    }
};

export const logout = async (_req, res) => {
    try {
        // Return an expired JWT as a cookie
        const token = jwt.sign({ id: "logout user" }, process.env.SECRET, { expiresIn: 0 });
        return res
            .status(200)
            .cookie('token', token, { secure: true, httpOnly: true, path: '/', sameSite: 'none' })
            .json('Log out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
        return res.status(500).json({ error: 'Error logging out.' });
    }
};
