'use strict'

function transform (raw) {
  let mapped = {}

  raw.boards.forEach((boardObj) => {
    mapped[boardObj.board] = boardObj

    delete mapped[boardObj.board].board
  })

  return mapped
}

module.exports = transform
