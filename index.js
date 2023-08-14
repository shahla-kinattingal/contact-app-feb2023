// import json server
const jsonServer = require('json-server')

// create jsonserver application
const server = jsonServer.create()

// set up root for db.json file
const router = jsonServer.router('db.json')

// return a middle ware used by json server
const middleware = jsonServer.defaults()

// set up  port number server app
const port = process.env.port||3000

// use router and middleware in server app
server.use(middleware)
server.use(router)

// to listen the server app in port
server.listen(port,()=>{
    console.log('contact server app started at port',port);
})