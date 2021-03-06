# 🏞 akamai-image-converter

> Simple javascript util for Akamai image converter

[![License](https://img.shields.io/github/license/mazipan/akamai-image-converter.svg?longCache=true)](https://github.com/mazipan/akamai-image-converter) ![minified](https://badgen.net/bundlephobia/minzip/akamai-image-converter) [![version](https://img.shields.io/npm/v/akamai-image-converter.svg?maxAge=3600)](https://www.npmjs.com/package/akamai-image-converter)
[![downloads](https://img.shields.io/npm/dt/akamai-image-converter.svg?maxAge=86400)](https://www.npmjs.com/package/akamai-image-converter) [![Travis](https://img.shields.io/travis/mazipan/akamai-image-converter.svg?maxAge=86400)](https://travis-ci.org/mazipan/akamai-image-converter)
[![codecov](https://codecov.io/gh/mazipan/akamai-image-converter/branch/master/graph/badge.svg?maxAge=86400)](https://codecov.io/gh/mazipan/akamai-image-converter)


## About Akamai Image Converter

https://tech.akamai.com/image_converter/


## Download & Usage

### Download via NPM/YARN

```js
npm i akamai-image-converter
// OR
yarn add akamai-image-converter
```

### Basic Usage

```js
import imageConverter from 'akamai-image-converter'

// call convert methods will return optimized url
imageConverter.convert(TEST_IMAGE, format, quality, width, height)

// let say we have url: //tech.akamai.com/image-manager/img/mountain.jpeg
// this method will return url :
// //tech.akamai.com/image-manager/img/mountain.jpeg?resize=${width}px:${height}px&output-quality=${quality}&output-format=${format}
```

### Advance Usage

You can define your combination by your self


```js
import imageConverter from 'akamai-image-converter'

// you can call these available function
let result = imageConverter._withOutputFormat(TEST_IMAGE, format)
let result = imageConverter._withQuality(TEST_IMAGE, quality)
let result = imageConverter._withDimension(TEST_IMAGE, width, height)
```



Copyright © 2018 by [Irfan Maulana](https://github.com/mazipan/)
