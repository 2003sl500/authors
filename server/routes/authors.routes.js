const AuthorsController = require('../controllers/authors.controller')
module.exports = (app) => {
    app.delete('/api/authors/:id', AuthorsController.deleteAuthors)
    app.get('/api/authors', AuthorsController.getAllAuthors)
    app.get('/api/authors/:id', AuthorsController.getOneAuthors)
    app.post('/api/authors', AuthorsController.createAuthors)
    app.put('/api/authors/:id', AuthorsController.editAuthors)
}