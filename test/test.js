/* global describe, it, beforeEach, before, after */

'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const nock = require('nock')
const url = require('url')
const path = require('path')
const fs = require('fs-extra')
const gen = require('../scripts/gen')

const payload = require('./data/boards.json')
const payloadTrimmed = require('./data/boards-trimmed.json')
const expectedTrimmed = require('./expected/lib-trimmed.json')

const apiUrl = 'https://a.4cdn.org/boards.json'
const { expect } = chai

chai.use(dirtyChai)

describe('4chan-boards scripts generate json of active 4chan boards', () => {
  const parsedUrl = url.parse(apiUrl)
  const resultPath = path.join(__dirname, './out/result.json')
  const expectedPath = path.join(__dirname, './expected/lib.json')

  before(() => {
    return fs.mkdirp(path.join(__dirname, './out'))
  })

  beforeEach(() => {
    return fs.remove(resultPath)
  })

  after(() => {
    return fs.remove(path.join(__dirname, './out'))
  })

  describe('behaviour for unchanged payload', () => {
    beforeEach(() => {
      nock(`${parsedUrl.protocol}//${parsedUrl.host}`)
        .get(parsedUrl.path)
        .reply(200, payload)
    })

    it('does not write to disk, and does not throw an error', async () => {
      const res = await gen(resultPath, expectedPath)

      expect(await fs.exists(resultPath)).to.be.false()
      expect(res).to.be.false()
    })
  })

  describe('behaviour for new or changed payload', () => {
    beforeEach(() => {
      nock(`${parsedUrl.protocol}//${parsedUrl.host}`)
        .get(parsedUrl.path)
        .reply(200, payloadTrimmed)
    })

    it('writes to disk if no library exists', async () => {
      const res = await gen(resultPath, '/path/to/library/that/does/not/exist')

      expect(await fs.exists(resultPath)).to.be.true()
      expect(res).to.be.true()

      const result = require(resultPath)

      expect(result).to.deep.equal(expectedTrimmed)
    })

    it('produces the correct output and writes to disk', async () => {
      const res = await gen(resultPath, expectedPath)

      expect(await fs.exists(resultPath)).to.be.true()
      expect(res).to.be.true()

      const result = require(resultPath)

      expect(result).to.deep.equal(expectedTrimmed)
    })
  })
})
