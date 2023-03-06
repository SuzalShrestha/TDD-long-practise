class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isValid = false;
    this.isValidTriangle = this.hasValidSideLengths();
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  hasValidSideLengths() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    );
  }

  validate() {
    this.isValid = this.hasValidSideLengths();
  }
  static getValidTriangles(triangles) {
    let validTriangles = [];
    for (let triangle of triangles) {
      triangle.validate();
      if (triangle.isValid) {
        validTriangles.push(triangle);
      }
    }
    return validTriangles;
  }
}
class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  isScalene() {
    return (
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    );
  }
  validate() {
    this.isValidScalene = this.isScalene();
  }
}
class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  isIsosceles() {
    return (
      this.side1 === this.side2 ||
      this.side1 === this.side3 ||
      this.side2 === this.side3
    );
  }
  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}
module.exports = { Triangle, Scalene, Isosceles };
