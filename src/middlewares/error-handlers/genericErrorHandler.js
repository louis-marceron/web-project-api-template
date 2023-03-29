/**
 * This middleware function handles any errors that are passed to it through the `next` function.
 * 
 * @param {Error} err - The error object passed from previous middleware or route handlers.
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @param {NextFunction} next - The next middleware function in the pipeline.
 * @returns {void}
 */
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