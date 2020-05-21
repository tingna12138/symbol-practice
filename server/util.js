const utils = {
  getKey (obj) {
    let keys = []
    keys = Object.keys(obj)
    return JSON.parse(keys[0])
  }
}

module.exports = utils