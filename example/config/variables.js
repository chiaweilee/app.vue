const reg2string = reg => reg.toString().replace(/^\/([^/]*)\/$/, '$1')

export default {
  at: /[a-zA-Z0-9_]{2,30}/,
  key: /[a-zA-Z0-9_]{2,30}/
}

export {
  reg2string
}
