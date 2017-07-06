/* global describe  */

var hex2rgb = require('../includes/hex2rgb')
    , hex2rgb2 = require('../includes/hex2rgb2')
    , assert = require('assert');

xdescribe('hex2rgb_node', function() {

    it("should throw an error if the value is not an hex code", function(done) {
        hex2rgb2.convert("blue", function(error, result){
            console.log('error');
            console.log(error);
            console.log('result');
            console.log(result);
            assert(error);
            done();
        });
    });

    it("should return a correctly converted rgb value", function(done) {
        hex2rgb("#ffffff", function(error, result) {
            assert.strictEqual(error, null);
            assert.deepEqual(result, [255, 255, 255]);
            done();
        });
    });
})