# csv-light

Light parser from CSV to JSON. 🌪️

## Install

```sh
$ npm i csv-light -S
```

## Tests

```sh
$ npm test
```

## Usage

```js
const parse = require('csv-light');

const json = parse('"name","age","hasGirlfriend"\n"Mikhail Semin",16,true');

// [
//   {
//     name: 'Mikhail Semin',
//     age: 16,
//     hasGirlfriend: true,
//   },
// ]
```
