const compression = require('compression')
const path = require('path')
const app = require('express')()
app.use(compression())
const http = require('http').Server(app)
const fs = require('fs')
const createHandler = require('github-webhook-handler')
const cmd = require('node-cmd')
const handler = createHandler({path: '/', secret: '7d38cdd689735b008b3c702edd92eea23791c5f6'})
const httpPort = 8088
const defaultPath = './dist/'
const defaultPage = 'index.html'

const mimeType = {
  'css': ['text/css', 'utf8'],
  'gif': ['image/gif', 'binary'],
  'html': ['text/html', 'utf8'],
  'ico': ['image/x-icon', 'binary'],
  'jpeg': ['image/jpeg', 'binary'],
  'jpg': ['image/jpeg', 'binary'],
  'js': ['text/javascript', 'utf8'],
  'json': ['application/json', 'utf8'],
  'png': ['image/png', 'binary'],
  'svg': ['image/svg+xml', 'binary'],
  'tiff': ['image/tiff', 'binary'],
  'txt': ['text/plain', 'utf8'],
  'xml': ['text/xml', 'utf8']
}

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function () {
  cmd.run('git pull')
})

app.post('/', function (request, response) {
  // eslint-disable-next-line
  handler(request, response, function (err) {
    response.statusCode = 404
    response.end('no such location')
  })
})

app.get('*', function (request, response) {
  const url = request.originalUrl !== '/' ? request.originalUrl : `/${defaultPage}`
  const ext = (() => /\.([a-zA-Z0-9]+)$/gi.exec(url.split('?')[0]) || [])()[1]
  const redirect = function (url, rewrite = false) {
    fs.readFile(path.resolve(url), function (err, data) {
      if (err) {
        if (err.code === 'ENOENT') {
          // try url rewrite for vue-router history mode
          fs.readFile(path.resolve(`${defaultPath}${defaultPage}`), function (err, data) {
            if (err) {
              response.send(err)
              return
            }
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data, 'utf8')
            response.end()
          })
          return //
        }
        response.send(err)
        return
      }
      response.writeHead(200, {'content-type': mimeType[ext][0] || 'text/plain'})
      response.write(data, mimeType[ext][1])
      response.end()
    })
  }
  redirect(`${defaultPath}${url}`, (mimeType[ext] || [])[1])
})

http.listen(httpPort, function () {
  console.log(`> Listening on *:${httpPort}`)
})
