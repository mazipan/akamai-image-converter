module.exports.convert = function (originImage, format, quality, width, height) {
  let result = originImage
  let haveParam = false

  result = this._withOutputFormat(
           this._withQuality(
           this._withDimension(
            result, width, height),
            quality),
            format)

  return result
}

module.exports._checkParameter = function (fullImageUrl) {
  return fullImageUrl.indexOf('?') >= 0 ? '&' : '?'
}

module.exports._withOutputFormat = function (fullImageUrl, format){
  let result = fullImageUrl
  if (format) {
    let param = this._checkParameter(result)
    result = `${result}${param}output-format=${format}`
  }
  return result
}

module.exports._withQuality = function (fullImageUrl, quality){
  let result = fullImageUrl
  if (quality) {
    let param = this._checkParameter(result)
    result = `${result}${param}output-quality=${quality}`
  }
  return result
}

module.exports._withDimension = function(fullImageUrl, width, height){
  let result = fullImageUrl
  if (width && height) {
    let param = this._checkParameter(result)
    result = `${result}${param}resize=${width}px:${height}px`
  }
  return result
}
