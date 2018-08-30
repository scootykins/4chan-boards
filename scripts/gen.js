'use strict'

const fs = require('fs')
const util = require('util')
const axios = require('axios')
const transform = require('./transform')
const diff = require('./diff')

const apiUrl = 'https://a.4cdn.org/boards.json'
const writeFile = util.promisify(fs.writeFile)

async function gen (outPath, libPath) {
  const { data } = await axios.get(apiUrl)
  const libJson = transform(data)

  if (!diff(libJson, libPath)) {
    await writeFile(outPath, JSON.stringify(libJson), 'utf8')

    return true
  }

  return false
}

module.exports = gen
