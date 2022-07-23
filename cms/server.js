const http = require('http')
const json = require('./data/locale.json')
const fs = require('fs').promises

const HOST = 'localhost'
const PORT = 8000
const ASSETS_PATH = __dirname + '/data/assets/'

const assets = {}

const requestListener = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.url.match(/^\/image\//i)) {
    const fileName = req.url.substring(7)

    if (assets[fileName]) {
      if (fileName.substring(fileName.length - 3) === 'svg')
        res.setHeader('Content-Type', 'image/svg+xml')
      if (fileName.substring(fileName.length - 3) === 'png')
        res.setHeader('Content-Type', 'image/png')
      res.writeHead(200)
      res.end(assets[fileName])
    } else {
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(404)
      res.end(JSON.stringify({ error: 'wrong host' }))
    }
  } else {
    switch (req.url) {
      case '/cms':
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)
        res.end(JSON.stringify(json))
        break
      default:
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)
        res.end(JSON.stringify({ error: 'wrong host' }))
    }
  }
}

const server = http.createServer(requestListener)

fs.readdir(ASSETS_PATH).then((files) => {
  const promises = []

  files.forEach((fileName) => {
    promises.push(
      fs.readFile(`${ASSETS_PATH}${fileName}`).then((file) => {
        assets[fileName] = file
      })
    )
  })

  Promise.all(promises).then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`)
    })
  })
})
