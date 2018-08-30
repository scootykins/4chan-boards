'use strict'

const path = require('path')
const gen = require('./gen')

const outPath = path.join(__dirname, '../index.json')
const libPath = outPath

gen(outPath, libPath)
  .then(() => console.log('Success!'))
  .catch(err => console.error('Failure!', err))
