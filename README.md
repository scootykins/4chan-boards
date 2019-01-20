# 4chan-boards

[![Build Status](https://travis-ci.org/scootykins/4chan-boards.svg?branch=master)](https://travis-ci.org/scootykins/4chan-boards)

Get a board's name and type given its short name (eg. `/b/`).

### 2.0.0 BREAKING CHANGES

Enumerated types are now `Symbol`s, so relying on falsy evaluation will no longer work:

```js
const boards = require('4chan-boards')

if (boards.getType('b')) {
  console.log('This will not print!')
}
```

Instead, use the provided enumerated types:

```js
if (boards.getType('b') !== boards.INVALID) {
  console.log('This message prints! Yay!')
}
```

## Installation

```bash
yarn add 4chan-boards

# OR

npm install --save 4chan-boards
```

## Usage

```js
const boards = require('4chan-boards')

console.log(boards.getName('wsg'))                // Worksafe GIF
console.log(boards.getType('b') === boards.NSFW)  // true
```

## API

### Methods

Get information (ie name or type) about a board.

* **boards.getName(board)**
* **boards.getType(board)**


### Objects

Objects mapping short names to full names. `boards.all` contains the mapping for all the boards, `boards.sfw` contains mapping for only the SFW boards, etc.

* **boards.all**
* **boards.admin**
* **boards.nsfw**
* **boards.sfw**


### Enumerated types

`boards.getType(board)` will return an enumerated type, which has been implemented as a `Symbol`

* **boards.ADMIN**
* **boards.NSFW**
* **boards.SFW**
* **boards.INVALID**
