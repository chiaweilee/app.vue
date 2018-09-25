const map = require('lodash/map')
const join = require('lodash/join')
const moment = require('moment')

const title = 'Dear.red'

const version = [
  process.env.npm_package_version,
  '-',
  process.env.NODE_ENV !== 'production' ? 'dev' : 'prod',
  '.',
  moment().unix()
]

const scripts = [
  // {
  //   src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
  //   async: true,
  //   defer: true
  // }
]

const meta = [
  '<meta charset="utf-8">',
  '<meta name="viewport" content="initial-scale=1.0">',
  '<meta name=renderer content=webkit>',
  '<meta name=force-rendering content=webkit>',
  '<meta http-equiv=X-UA-Compatible content="IE=Edge, chrome=1">'
]

module.exports = {
  title,
  version: join(version, ''),
  meta: join(meta, ''),
  script: join(map(scripts, s => [
    '<script',
    s.src ? 'src="' + s.src + '"' : '',
    s.async ? ' async' : '',
    s.defer ? ' defer' : '',
    '>',
    s.content || '',
    '</script>'
  ], ''))
}
