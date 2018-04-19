# 🏞 akamai-image-converter

> Simple javascript util for Akamai image converter

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
let result = this._withOutputFormat(TEST_IMAGE, format)
let result = this._withQuality(TEST_IMAGE, quality)
let result = this._withDimension(TEST_IMAGE, width, height)
```



Copyright © 2017 by [Irfan Maulana](https://github.com/mazipan/)
