### gorchichka

> krovostok lyrics quotes

[![npm](https://img.shields.io/npm/v/gorchichka.svg?style=flat-square)](https://www.npmjs.com/package/gorchichka)
[![Build Status](https://img.shields.io/travis/agudulin/gorchichka/master.svg?style=flat-square)](https://travis-ci.org/agudulin/gorchichka)
[![license](https://img.shields.io/npm/l/gorchichka.svg?style=flat-square)](https://github.com/agudulin/gorchichka/blob/master/license)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Managed by Yarn](https://img.shields.io/badge/managed%20by-Yarn-2C8EBB.svg?style=flat-square)](https://yarnpkg.com/)
[![Greenkeeper badge](https://badges.greenkeeper.io/agudulin/gorchichka.svg)](https://greenkeeper.io/)

### Install

```sh
yarn add gorchichka
```

### Usage

```js
import gorchichka from 'gorchichka'

gorchichka.getQuote()
// → я варил и жрал снегирей

gorchichka.getQuote({ details: true })
// → {
//  album: {
//    index: 4,
//    title: 'Ломбард',
//    year: 2015
//  },
//  song: {
//    index: 4,
//    title: 'Ломбард'
//  },
//  quote: {
//    index: 1,
//    title: 'я варил и жрал снегирей'
//  }
// }

```

### Lyrics

- [река крови](http://krovostok.ru/lyrics/L01.html)
- [сквозное](http://krovostok.ru/lyrics/skvoznoye/LS01.html)
- [гантеля](http://krovostok.ru/lyrics/gantalya/gan01.html)

### License

MIT © [Alexander Gudulin](http://gudulin.com)