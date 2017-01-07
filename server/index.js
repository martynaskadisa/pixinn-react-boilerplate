require('babel-register')
require('./config')

if (__DEV__) {
  require('./server.dev')
} else {
  require('./server')
}
