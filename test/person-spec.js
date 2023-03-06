const Person = require("../problems/person");
const { expect } = require("chai");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
describe("Person Class", function () {
  let person;
  beforeEach(function () {
    person = new Person("IamPerson", 9);
  });
  it("should have name and age property", function () {
    expect(person.name).to.exist;
    expect(person.age).to.exist;
  });
  describe("SayHello method", function () {
    if (
      ("sayHello method should exist",
      function () {
        expect(person.sayHello).to.exist;
      })
    )
      it("should Greet person", function () {
        expect(person.sayHello()).to.eql("Hello! IamPerson");
      });
  });
  describe("Visit method", function () {
    it("should have visit method", function () {
      expect(person.visit).to.exist;
    });
    it("should return visited status", function () {
      let nextPerson = new Person("Sam");
      expect(person.visit(nextPerson)).to.eql("IamPerson visited Sam");
    });
    it("should have switchVisit method to invoke visit method", function () {
      let nextVisitPerson = new Person("Sam");
      let person1 = new Person("Hari");
      expect(person1.switchVisit(nextVisitPerson)).to.eql("Hari visited Sam");
    });
  });
  describe("Update method", function () {
    it("should throw error if object is not provided", function () {
      expect(() => person.update(0)).to.throw(TypeError);
    });
    it("should throw error if object has no name and age property", function () {
      expect(() => person.update({ property: "none" })).to.throw(Error);
    });
    it("should update the person name and age", function () {
      person.update({ name: "Sam", age: 45 });
      expect(person.name).to.eql("Sam");
      expect(person.age).to.eql(45);
    });
  });
  describe("tryUpdate method", function () {
    it("should return true if updated sucessfully", function () {
      expect(person.tryUpdate({ name: "Sam", age: 45 })).to.be.true;
      expect(person.name).to.eql("Sam");
      expect(person.age).to.eql(45);
    });
    it("should return false if not updated", function () {
      expect(person.tryUpdate({ property: "none" })).to.be.false;
    });
  });
  describe("GreetAll static method", function () {
    it("should have greetAll static method", function () {
      expect(Person.greetAll).to.exist;
    });
    it("should greet all the persons", function () {
      let person1 = new Person("Rajesh");
      let person2 = new Person("Neem");
      let person3 = new Person("Raju");
      let person4 = new Person("Ravi");
      let instances = [person1, person2, person3, person4];
      expect(Person.greetAll(instances)).to.eql([
        "Hello! Rajesh",
        "Hello! Neem",
        "Hello! Raju",
        "Hello! Ravi",
      ]);
    });
  });
});
