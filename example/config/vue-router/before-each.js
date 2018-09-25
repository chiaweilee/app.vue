import variables, { reg2string } from '@/config/variables'

export default function (to, from, next/* , store *//* vue-use extend */) {
  // listen #key
  console.log(new RegExp('^#' + reg2string(variables.key) + '$').test(to.hash))
  if (to.path === '/' && new RegExp('^#' + reg2string(variables.key) + '$').test(to.hash)) {
    const key = to.hash.replace(/^#(.+)/, '$1')
    if (key) {
      next({ name: '#', params: { key } })
      return
    }
  }
  next()
}
