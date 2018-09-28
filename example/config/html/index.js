module.exports = {
  title: require('./title'),
  version: require('./version'),
  meta: require('./meta').join(''),
  script: require('./scripts').map(s => `<script ${s.src ? 'src="' + s.src + '"' : ''} ${s.async ? 'async' : ''} ${s.defer ? 'defer' : ''}>${s.content || ''}</script>`).join('')
}
