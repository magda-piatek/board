import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import connectDB from '../config/db'
import users from '../routes/api/users'
import auth from '../routes/api/auth'
import confirmation from '../routes/api/confirmation'
import exhbs from 'express-handlebars'
const app = express()
const port = process.env.PORT || 9000

connectDB()
const hbs = exhbs.create()

// define a route handler for the default home page
app.engine(
  'hbs',
  exhbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
  })
)

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('client/dist'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/confirmation', confirmation)
app.use('/api/users', users)
app.use('/api/auth', auth)

app.get('*', (req: any, res: any) => {
  res.sendFile(path.resolve('..', 'client', 'dist', 'index.html'))
})
// app.use(
//   '/api/confirmation',
//   createProxyMiddleware({target: 'http://localhost:3000', changeOrigin: true})
// )

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
