
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avaliacao-senai-katas.cjs.production.min.js')
} else {
  module.exports = require('./avaliacao-senai-katas.cjs.development.js')
}
