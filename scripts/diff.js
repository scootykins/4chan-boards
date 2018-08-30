'use strict'

const deepEqual = require('deep-equal')

function diff (newJson, libPath) {
  let lib

  try {
    lib = require(libPath)
  } catch (err) {
    return false
  }

  return deepEqual(lib, newJson)
}

module.exports = diff
