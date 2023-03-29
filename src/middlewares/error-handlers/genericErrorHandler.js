function genericErrorHandler(err, req, res, next) {
    // Set the response status to the error status, or default to 500 (Internal Server Error)
    res.status(err.status || 500);

    // Send the error message as a response
    res.json({
        message: err.message,
        // Only send the error details in development mode to prevent leaking sensitive information
        error: process.env.NODE_ENV === 'development' ? err : {},
    });
}

module.exports = genericErrorHandler;
