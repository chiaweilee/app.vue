const merge = require('lodash/merge')
const cache = {}

const mergeAll = list => {
  list.forEach(l => {
    merge(cache, l)
  })
}

mergeAll([
  require('@/components/sociality/extend/airasia/x')
])

module.exports = cache
