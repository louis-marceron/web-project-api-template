function notFoundErrorHandler(_req, res) {
    res.status(404).json({ error: "Not found" })
}

export default notFoundErrorHandler;
