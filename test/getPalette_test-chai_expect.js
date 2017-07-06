/* global describe  */
var palette = require('../modules/palette')
, expect = require('chai').expect
, arrayLength = 10
, fs = require('fs')
, configFilePath = process.cwd() + '/config/'
, configFile = configFilePath + 'colorPalette.json'
, jsonContentFile = configFilePath + 'jsonContent.json'
, writeContentFile = function(config, callback) {
    if(Array.isArray(config)) {
        fs.writeFile(jsonContentFile, JSON.stringify(config), function (err) {
            if(err) {
                callback({type: 'error', 'message': err.message});
            }

            callback({type: 'success', 'message': 'The file has been saved!'});
        });
    } else {
        callback({type: 'error', 'message': 'Value passed is not an array'});
    }
};

describe('getPalette_chai-expect', function() {

    var config = {}

    before(function(done){

        fs.readFile(configFile, function (err, contents) {
            config = JSON.parse(contents.toString())
            done()
        })
    })

    afterEach(function(done){
        writeContentFile(config, function () {});
        done()
    })

    it('should throw an error if the result is not an array', function (done) {
        writeContentFile([{newKey: "new value"}], function(result){
            function fetch() {
                return "not an array";
            }

            if(result.type === 'error') {
                expect(palette(fetch)).to.throw('is not an array');
            }
            done();
        })
    })

    it('should return an array with ' + arrayLength + ' items by default', function (done) {
        palette().should.be.an('array').with.length(arrayLength);
        done();
    })
})