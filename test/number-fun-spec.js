const {expect}=require("chai");
const {returnsThree,reciprocal}=require("../problems/number-fun");
describe("ReturnsThree Function",function(){
    it("should return three",function(){
        expect(returnsThree()).to.equal(3);
    })
});
describe("Reciprocal Function",function(){
    it("should return reciprocal",function(){
        
        expect(reciprocal(1)).to.equal(1);
        expect(reciprocal(4)).to.equal(0.25);
        

    })
    it("should thorw Error",function(){
        expect(()=>reciprocal(0)).to.throw(Error);
        expect(()=>reciprocal(-4)).to.throw(Error);
        expect(()=>reciprocal(1000001)).to.throw(Error);
    })
});