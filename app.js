let Koa = require('koa')
let Router = require('koa-router')
let serve = require('koa-static')

let app = new Koa()
let router = new Router()
let main = serve(__dirname + '/dist', { extensions: ['html'] })

app.use(main)
  .listen(3000)

console.log('server run at localhost:3000')
