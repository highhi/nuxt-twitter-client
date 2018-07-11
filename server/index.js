require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const timeout = require('connect-timeout');
const helmet = require('helmet')
const { Nuxt, Builder } = require('nuxt')
const { ApolloServer } = require('apollo-server-express');
const config = require('../nuxt.config.js')
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

config.dev = !(process.env.NODE_ENV === 'production')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const nuxt = new Nuxt(config)

server.applyMiddleware({ app });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(timeout('5s'));
app.use((req, _, next) => { if (!req.timedout) next() });

// No build in production
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

// app.use((req, res, next) => {
//   res.status(404).send('Sorry cant find that!');
// });

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send('Something broke!');
// });

app.listen(port, host)
console.log('Server is listening on http://localhost:3000')