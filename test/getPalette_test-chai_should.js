/* global describe  */
var palette = require('../modules/palette')
, should = require('chai').should()
, arrayLength = 10
, fs = require('fs')
, configFilePath = process.cwd() + '/config/'
, configFile = configFilePath + 'colorPalette.json'
, jsonContentFile = configFilePath + 'jsonContent.json'
, writeContentFile = function(config, callback) {
    fs.writeFile(jsonContentFile, JSON.stringify(config))
  }

describe('getPalette_chai-should', function() {

    var config = {}

    before(function(done){

        fs.readFile(configFile, function (err, contents) {
            config = JSON.parse(contents.toString())
            done()
        })
    })

    afterEach(function(done){
        writeContentFile(config)
        done()
    })

    it('should throw an error if the result is not an array', function () {
        writeContentFile({newKey: "new value"}, function(err, done){
            function fetch() {
                return "not an array";
            }

            should.Throw(palette(fetch), 'is not an array')
            //assert.throws( palette(fetch), 'is not an array' )
            done()
        })
    })

    it('should return an array with '+arrayLength+' items by default', function () {
        palette().should.be.an('array').with.length(arrayLength)
    })
})