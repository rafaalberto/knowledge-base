
module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/users-count')
        .get(app.api.user.count)

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/:id')
        .put(app.api.category.save)
        .get(app.api.category.getById)
        .delete(app.api.category.remove)


    app.route('/articles')
        .post(app.api.article.save)
        .get(app.api.article.get)
        
    app.route('/articles/:id')
        .put(app.api.article.save)
        .delete(app.api.article.remove)
        .get(app.api.article.getById)

}