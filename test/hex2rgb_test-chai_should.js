/**
 * Created by Hafeez on 1/21/2015.
 */
var hex2rgb = require('../includes/hex2rgb')
    , should = require('chai').should();

describe('hex2rgb_chai-should', function() {

    it("should throw an error if the value is not an hex code", function(done) {
        hex2rgb("blue", function(error, result){
            should.exist(error);
            done();
        });
    })

    it("should return a correctly converted rgb value", function(done) {
        hex2rgb("#ffffff", function(error, result) {

            should.not.exist(error);

            //assert.strictEqual(error, null);
            result.should.deep.equal([255, 255, 255]);
            done();
        });
    })

    /*it.skip("should return rgb if passed an rgb value", function(done) {

    });*/
})