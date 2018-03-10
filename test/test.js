const { expect } = require('chai')
const boards = require('../')

describe('4chan board library', function () {
  describe('Getting board types', function () {
    it('should return the correct board types', function () {
      expect(boards.getType('wsg')).to.equal(boards.SFW)
      expect(boards.getType('gif')).to.equal(boards.NSFW)
      expect(boards.getType('j')).to.equal(boards.ADMIN)
      expect(boards.getType('fail')).to.equal(boards.INVALID)
    })
  })
  describe('Getting board names', function () {
    it('should return the correct board names', function () {
      expect(boards.getName('b')).to.equal('Random')
      expect(boards.getName('trv')).to.equal('Travel')
      expect(boards.getName('j')).to.equal('Janitor')
      expect(boards.getName('test')).to.equal(undefined)
    })
  })
  describe('Board enumerated types', function () {
    it('should not work with falsy evaluation', function () {
      expect(boards.getType('b') == true).to.be.false
    })
  })
})
