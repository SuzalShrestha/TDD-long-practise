class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return "Hello! " + this.name;
  }
  visit(instance) {
    return `${this.name} visited ${instance.name}`;
  }
  switchVisit(instance) {
    return this.visit(instance);
  }
  update(obj) {
    if (obj.name === undefined && obj.age === undefined) {
      throw new TypeError("Enter valid name and age");
    }
    this.name = obj.name;
    this.age = obj.age;
  }
  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }
  static greetAll(arr) {
    return arr.map((person) => person.sayHello());
  }
}

module.exports = Person;
