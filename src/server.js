require('colors')
const express = require('express')
const cors = require('cors')

const {dbConnection} = require('./database/database.config')

const userRoute = require('./routes/user.route')
const postRoute = require('./routes/post.route')

module.exports = class Server{
    
    constructor(){
        this.app = express()
        
        this.port = process.env.PORT

        this.database()

        this.middlewares()

        this.routes()

        this.usersPath = 'api/v1/users'
        this.postsPath = 'api/v1/posts'
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    async database(){
        await dbConnection()
    }
    listen(){
        this.app.listen(this.port, ()=> console.log(`Server running at http://localhost:${this.port}`.blue))
    }

    routes(){
        this.app.get('/', (req, res) => res.send('API found job App'))
        
        this.app.use(this.usersPath, userRoute)
        this.app.use(this.usersPath, postRoute)
    }

}
