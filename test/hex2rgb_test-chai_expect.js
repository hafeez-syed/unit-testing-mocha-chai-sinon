/**
 * Created by Hafeez on 1/21/2015.
 */
var hex2rgb = require('../includes/hex2rgb')
    , expect = require('chai').expect;

describe('hex2rgb_chai-expect', function() {

    it("should throw an error if the value is not an hex code", function(done) {
        hex2rgb("blue", function(error, result){
            expect(error).to.exist;
            done();
        });
    })

    it("should return a correctly converted rgb value", function(done) {
        hex2rgb("#ffffff", function(error, result) {

            expect(error).to.not.exist;

            //assert.strictEqual(error, null);
            expect(result).to.deep.equal([255, 255, 255]);
            done();
        });
    })

    it.skip("should return rgb if passed an rgb value", function(done) {

    })
})