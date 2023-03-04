const {expect}=require("chai");
const reverseString=require('../problems/reverse-string');
describe("Reverse String",function(){
    let word="IamWord";
    let wordWithSpace="I am word with spaces.";
    it("should reverse string",function(){

        expect(reverseString(word)).to.equal("droWmaI");
        expect(reverseString(wordWithSpace)).to.equal(".secaps htiw drow ma I");
        expect(()=>reverseString(0)).to.throw(Error);

          
    })
    
});