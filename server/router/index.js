const registerRouter = require('./register')
const profileRouter = require('./profile')
const loginRouter = require('./login')
const resourcesRouter = require('./resources')
const volunteerRouter = require('./volunteer')

module.exports = app => {
    app.use('/register', registerRouter)
    app.use('/profile', profileRouter)
    app.use('/login', loginRouter)
    app.use('/resources', resourcesRouter)
    app.use('/volunteer', volunteerRouter)
}
