/* global describe  */
var palette = require('../modules/palette')
, assert = require('assert')
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

xdescribe('getPalette_node', function() {

    var config = {};

    before(function(done){

        fs.readFile(configFile, function (err, contents) {
            config = JSON.parse(contents.toString());
            done();
        });
    });

    afterEach(function(done){
        writeContentFile(config, function () {});
        done();
    });

    it('should throw an error if the passed value is not an array', function (done) {
        writeContentFile([{newKey: "new value"}], function(result){
            function fetch() {
                return "not an array";
            }

            if(result.type === 'error') {
                assert.throws( palette(fetch), err.message );
            }

            done();
        });
    });

    it('should return an array with ' + arrayLength +' items by default', function (done) {
        assert(Array.isArray(palette()), 'did not return an array');
        assert.equal(palette().length, arrayLength, 'array length is not ' + arrayLength);
        done();
    });
});