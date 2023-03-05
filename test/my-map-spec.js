const chai=require('chai');
const {expect}=require('chai');
const myMap=require("../problems/my-map");
const spies = require('chai-spies');
chai.use(spies);

describe("My map",function(){
    let arr;
    let call;
    beforeEach(function(){
       arr=[1,2,3];
       call=function(num){return num*2;};
    })
    it("should not mutate the original array",function(){
        let array=[1,2,3];
        myMap(arr,call);
        expect(arr).to.eql(array);
    })
    it("should not call built-in Array.map method",function(){
        let spy=chai.spy.on(arr,'map',myMap(arr,call));
        expect(spy).to.have.been.not.called();
    })
    it("should call passed in callback for each element of array",function(){
        let spy=chai.spy();
        myMap(arr,spy);
        expect(spy).to.have.been.called.exactly(3);
    });
    
});
