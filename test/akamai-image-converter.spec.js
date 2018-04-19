import imageConverter from '../akamai-image-converter'
const TEST_IMAGE = '//tech.akamai.com/image-manager/img/mountain.jpeg'

test('test _checkParameter', () => {
  expect(
    imageConverter._checkParameter(TEST_IMAGE)
  ).toEqual('?')
  expect(
    imageConverter._checkParameter(TEST_IMAGE + '?param=param')
  ).toEqual('&')
});

test('test _withOutputFormat', () => {
  let format = 'webp'
  let expected = `${TEST_IMAGE}?output-format=${format}`
  expect(
    imageConverter._withOutputFormat(TEST_IMAGE, format)
  ).toEqual(expected)
})

test('test _withOutputFormat null', () => {
  expect(
    imageConverter._withOutputFormat(TEST_IMAGE)
  ).toEqual(TEST_IMAGE)
})

test('test _withQuality', () => {
  let quality = 40
  let expected = `${TEST_IMAGE}?output-quality=${quality}`
  expect(
    imageConverter._withQuality(TEST_IMAGE, quality)
  ).toEqual(expected)
})

test('test _withQuality null', () => {
  expect(
    imageConverter._withQuality(TEST_IMAGE)
  ).toEqual(TEST_IMAGE)
})

test('test _withDimension', () => {
  let width = 40
  let height = 50
  let expected = `${TEST_IMAGE}?resize=${width}px:${height}px`
  expect(
    imageConverter._withDimension(TEST_IMAGE, width, height)
  ).toEqual(expected)
})

test('test _withDimension null', () => {
  expect(
    imageConverter._withDimension(TEST_IMAGE)
  ).toEqual(TEST_IMAGE)
})

test('test convert combination', () => {
  let format = 'webp'
  let quality = 40
  let width = 30
  let height = 50
  let expected = `${TEST_IMAGE}?resize=${width}px:${height}px&output-quality=${quality}&output-format=${format}`
  expect(
    imageConverter.convert(TEST_IMAGE, format, quality, width, height)
  ).toEqual(expected)
})
