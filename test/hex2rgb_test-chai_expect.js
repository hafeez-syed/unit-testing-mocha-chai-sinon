/**
 * Created by Hafeez on 1/21/2015.
 */
var hex2rgb = require('../includes/hex2rgb')
    , hex2rgb2 = require('../includes/hex2rgb2')
    , expect = require('chai').expect
    , sinon = require('sinon');


xdescribe('hex2rgb_chai-expect', function() {

    describe('convert method', function () {

        it("SINON.SPY: should call parse once", function(done) {

            sinon.spy(hex2rgb2, 'parse');

            hex2rgb2.convert('#ffffff', function (err, result) {
                expect(hex2rgb2.parse.calledOnce).to.be.true;
                expect(hex2rgb2.parse.args[0][0]).to.have.length(6);

                hex2rgb2.parse.restore(); // undo spy

                done();
            });
        });

        it("SINON.STUB: should always return parse result", function(done) {
            sinon.stub(hex2rgb2, 'arrayItems').returns([0,0,300]);

            hex2rgb2.convert('123', function (err, result) {
                expect(result).to.deep.equal([0,0, 300]);
 
                hex2rgb2.arrayItems.restore(); // undo stub
                done();
            });
            
        });
        
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
    });
})