export default {
  convert(originImage, format, quality, width, height) {
    let result = originImage
    let haveParam = false

    result = this._withOutputFormat(
             this._withQuality(
             this._withDimension(
              result, width, height),
              quality),
              format)

    return result
  },
  _checkParameter(fullImageUrl) {
    return fullImageUrl.indexOf('?') >= 0 ? '&' : '?'
  },
  _withOutputFormat(fullImageUrl, format){
    let result = fullImageUrl
    if (format) {
      let param = this._checkParameter(result)
      result = `${result}${param}output-format=${format}`
    }
    return result
  },
  _withQuality(fullImageUrl, quality){
    let result = fullImageUrl
    if (quality) {
      let param = this._checkParameter(result)
      result = `${result}${param}output-quality=${quality}`
    }
    return result
  },
  _withDimension(fullImageUrl, width, height){
    let result = fullImageUrl
    if (width && height) {
      let param = this._checkParameter(result)
      result = `${result}${param}resize=${width}px:${height}px`
    }
    return result
  }
}
