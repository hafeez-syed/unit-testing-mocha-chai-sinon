/**
 * Created by Hafeez on 2/8/2015.
 */
/**
 * Created by Hafeez on 1/21/2015.
 */
var hex2rgb = require('../includes/hex2rgb')
    , assert = require('assert');

describe.skip('skipping all tests here. Use "skip" or "only". only will only run this rest file and skip every other files.', function() {

    it("should throw an error if the value is not an hex code", function(done) {
        hex2rgb("blue", function(error, result){
            assert(error);
            done();
        });
    })

    it("should return a correctly converted rgb value", function(done) {
        hex2rgb("#ffffff", function(error, result) {
            assert.strictEqual(error, null);
            assert.deepEqual(result, [255, 255, 255]);
            done();
        });
    })

    it("should return rgb if passed an rgb value")

})