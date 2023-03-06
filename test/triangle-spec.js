const chai = require("chai");
const expect = chai.expect;
const { Triangle, Scalene, Isosceles } = require("../problems/triangle");
const spies = require("chai-spies");
chai.use(spies);
describe("Triangle Class", function () {
  let triangle;
  let triangle2;
  beforeEach(function () {
    triangle = new Triangle(3, 4, 5);
    triangle2 = new Triangle(10, 20, 3);
  });
  it("should have side1, side2, side3 properties", function () {
    expect(triangle).to.have.property("side1");
    expect(triangle).to.have.property("side2");
    expect(triangle).to.have.property("side3");
  });
  it("should intake 3 sides and set them as properties", function () {
    expect(triangle.side1).to.eql(3);
    expect(triangle.side2).to.eql(4);
    expect(triangle.side3).to.eql(5);
  });
  it("should have getPerimeter instance method", function () {
    expect(triangle.getPerimeter).to.exist;
  });
  it("should have getPerimeter return perimeter", function () {
    expect(triangle.getPerimeter()).to.eql(12);
  });
  it("should have hasValidSideLengths instance method return boolean", function () {
    expect(triangle.hasValidSideLengths).to.exist;
    expect(triangle.hasValidSideLengths()).to.be.true;

    expect(triangle2.hasValidSideLengths()).to.be.false;
  });
  it("should have validate instance method", function () {
    expect(triangle.validate).to.exist;
    triangle.validate();
    triangle2.validate();
    expect(triangle.isValid).to.exist;
    expect(triangle.isValid).to.be.true;
    expect(triangle2.isValid).to.exist;
    expect(triangle2.isValid).to.be.false;
  });
  it("should have getValidTriangles static method and returns valid triangle instances", function () {
    expect(Triangle.getValidTriangles).to.exist;
    let triangles = [triangle, triangle2];
    let validTriangles = Triangle.getValidTriangles(triangles);
    expect(validTriangles).to.eql([triangle]);
  });
});
describe("Scalene Class", function () {
  let scalene;
  let notScalene;
  beforeEach(function () {
    scalene = new Scalene(2, 3, 4);
    notScalene = new Scalene(4, 5, 4);
  });
  it("should be inherit from Triangle class", function () {
    expect(scalene).to.be.instanceOf(Triangle);
  });
  it("should have side1, side2, side3 properties", function () {
    expect(scalene).to.have.property("side1");
    expect(scalene).to.have.property("side2");
    expect(scalene).to.have.property("side3");
  });
  it("should have isValidTriangle property", function () {
    expect(scalene).to.have.property("isValid");
  });
  it("should have isScalene instance method ", function () {
    expect(scalene.isScalene).to.exist;
    it("should test if triangle is scalene", function () {
      expect(scalene.isScalene()).to.be.true;
      expect(notScalene.isScalene()).to.be.false;
    });
  });
  it("should have validate instance method", function () {
    expect(scalene.validate).to.exist;
    expect(notScalene.validate).to.exist;
    expect(scalene.isValidScalene).to.not.exist;
    expect(notScalene.isValidScalene).to.not.exist;
    scalene.validate();
    notScalene.validate();
    expect(scalene.isValidScalene).to.exist;
    expect(scalene.isValidScalene).to.be.true;
    expect(notScalene.isValidScalene).to.exist;
    expect(notScalene.isValidScalene).to.be.false;
  });
});
describe("Isosceles Class", function () {
  let isosceles;
  let notisosceles;
  beforeEach(function () {
    isosceles = new Isosceles(2, 2, 3);
    notisosceles = new Isosceles(2, 3, 4);
  });
  it("should be inherit from Triangle class", function () {
    expect(isosceles).to.be.instanceOf(Triangle);
  });
  it("should have side1, side2, side3 properties", function () {
    expect(isosceles).to.have.property("side1");
    expect(isosceles).to.have.property("side2");
    expect(isosceles).to.have.property("side3");
  });
  it("should have isValidTriangle property", function () {
    expect(isosceles).to.have.property("isValid");
  });
  it("should have isIsosceles instance method ", function () {
    expect(isosceles.isIsosceles).to.exist;
    it("should test if triangle is isosceles", function () {
      expect(isosceles.isIsosceles()).to.be.true;
      expect(notisosceles.isIsosceles()).to.be.false;
    });
  });
  it("should have validate instance method", function () {
    expect(isosceles.validate).to.exist;
    expect(notisosceles.validate).to.exist;
    expect(isosceles.isValidIsosceles).to.not.exist;
    expect(notisosceles.isValidIsosceles).to.not.exist;
    isosceles.validate();
    notisosceles.validate();
    expect(isosceles.isValidIsosceles).to.exist;
    expect(isosceles.isValidIsosceles).to.be.true;
    expect(notisosceles.isValidIsosceles).to.exist;
    expect(notisosceles.isValidIsosceles).to.be.false;
  });
});
