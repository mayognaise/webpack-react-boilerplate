import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

/* view engine setup */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

/* uncomment after placing your favicon in /public */
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

/* for development */
if (app.get('env') === 'development') {
  const webpackConfig = require('./webpack.config')
  const compiler = require('webpack')(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, stats: { colors: true }, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }))

}
else {
  app.use(express.static(path.join(__dirname, 'dist')))
}

/* static path + routes */
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes'))


module.exports = app