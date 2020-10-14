const registerRouter = require('./register')
const profileRouter = require('./profile')
const loginRouter = require('./login')

module.exports = app => {
    app.use('/register', registerRouter)
    app.use('/profile', profileRouter)
    app.use('/login', loginRouter)
}