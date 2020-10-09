const registerRouter = require('./register')

module.exports = app => {
    app.use('/register', registerRouter)
}