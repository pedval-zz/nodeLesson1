/**
 * Created by valenciap on 14/08/2014.
 */
var assert = require("assert"); // node.js core module
var C = require('../cash.js');

describe('Cash Register', function() {
//    describe('Module C', function(){
        it('should have a getChange method', function() {
            assert.equal(typeof C, 'object');
            assert.equal(typeof C.getChange, 'function');
        });

        it('getChange(210,300) should be equal [50,20,20]', function(){
            assert.deepEqual(C.getChange(210, 300), [50,20,20]);
        });

        it('getChange(486, 1000) should be equal [500,10,2,2]', function() {
           assert.deepEqual(C.getChange(486, 1000), [500,10,2,2]);
        });

        it('getChange(385, 10000) should be equal [5000,1000,500]', function() {
            assert.deepEqual(C.getChange(385, 10000), [5000,2000,2000,500,100,10,5]);
        });

        it('getChange(0, 1201) should be equal [1000,200,1]', function() {
            assert.deepEqual(C.getChange(0, 1201), [1000,200,1]);
        });

        it('getChange(2,1) should be equal []', function() {
            assert.deepEqual(C.getChange(2,1), []);
        });

//    });
})