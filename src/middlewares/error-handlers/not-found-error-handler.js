/**
 * This middleware handles 404 Not Found errors.
 * 
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @param {NextFunction} next - The next middleware function in the pipeline.
 * @returns {void}
 */
function notFoundErrorHandler(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}

module.exports = notFoundErrorHandler;