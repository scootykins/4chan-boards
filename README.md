# 4chan-boards

Get a board's name and type given its short name (eg. `/b/`).

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

`boards.getType(board)` will return an enumerated type, which are really just numbers under the hood.

* **boards.ADMIN**
* **boards.NSFW**
* **boards.SFW**
* **boards.INVALID**

`boards.INVALID` is `0`, so you can check if a board short name is valid by doing:

```js
const boards = require('4chan-boards')

if (boards.getType('not-a-board')) {
  console.log('this will not be printed')
}
```

