
module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/users-count')
        .get(app.api.user.count)
}