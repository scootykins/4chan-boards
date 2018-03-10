const sfwBoards = require('./sfw')
const nsfwBoards = require('./nsfw')
const adminBoards = require('./admin')

const boards = {
  getType: function (board) {
    if (this.nsfw[board]) {
      return this.NSFW
    } else if (this.sfw[board]) {
      return this.SFW
    } else if (this.admin[board]) {
      return this.ADMIN
    } else {
      return this.INVALID
    }
  },
  getName: function (board) {
    return this.all[board]
  },
  sfw: sfwBoards,
  nsfw: nsfwBoards,
  admin: adminBoards,
  all: Object.assign({}, sfwBoards, nsfwBoards, adminBoards),
  ADMIN: Symbol('admin'),
  NSFW: Symbol('nsfw'),
  SFW: Symbol('sfw'),
  INVALID: Symbol('invalid')
}

module.exports = boards
