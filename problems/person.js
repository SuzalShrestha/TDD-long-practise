class Person {
  // Your code here
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  sayHello(){
    return "Hello! "+this.name;
  }
  visit(instance){
    return `${this.name} visited ${instance.name}`;
  }
  switchVisit(instance){
    return this.visit(instance);
  }
}

module.exports = Person;