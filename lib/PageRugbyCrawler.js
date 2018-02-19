var cheerio = require('cheerio')
var request = require('request')

function fetchPage (url, callback) {
  // Use request to read in pages.
  request(url, function (error, response, body) {
    if (error) {
      console.log('Error requesting page: ' + error)
      return
    }

    callback(body)
  })
}

function crawl (url) {
  console.log('crawl', url)
  fetchPage(url, function (body) {
    // Use cheerio to find things in the page with css selectors.
    var $ = cheerio.load(body)
    console.log('<table summary="Tabelle">', $('table[summary="Tabelle"]'))
  })
}

module.exports = {
  crawl: crawl
}
