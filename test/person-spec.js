const Person=require('../problems/person');
const {expect}=require('chai');
const chai =require('chai');
const spies=require('chai-spies');
chai.use(spies);
describe("Person Class",function(){
    let person;
beforeEach(function(){
    person=new Person("IamPerson",9);
})
it("should have name and age property",function(){
    expect(person.name).to.exist;
    expect(person.age).to.exist;
})
describe("SayHello method",function(){
    if("sayHello method should exist",function(){

        expect(person.sayHello).to.exist;
    })
    it("should Greet person",function(){
        expect(person.sayHello()).to.eql("Hello! IamPerson");
    })
});
describe("Visit method",function(){
    it("should have visit method",function(){
        expect(person.visit).to.exist;
    });
    it("should return visited status",function(){
        let nextPerson=new Person("Sam");
        expect(person.visit(nextPerson)).to.eql("IamPerson visited Sam");
    })
    it("should have switchVisit method to invoke visit method",function(){
        let nextVisitPerson=new Person("Sam");
        let person1=new Person("Hari");
        expect(person1.switchVisit(nextVisitPerson)).to.eql("Hari visited Sam");
    })
})

});