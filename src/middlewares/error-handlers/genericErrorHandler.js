function genericErrorHandler(err, _req, res) {
    // Si le code d'erreur n'est pas défini, met 500 par défaut (erreur interne)
    res.status(err.status || 500);

    // Envoie le message de l'erreur comme réponse
    res.json({
        message: err.message,
        // Empêche la fuite d'informations sensibles en production
        error: process.env.NODE_ENV === 'development' ? err : {},
    });
}

export default genericErrorHandler;
