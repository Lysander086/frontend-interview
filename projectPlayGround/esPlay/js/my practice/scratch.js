// console.log(typeof (typeof {}));
// console.log(1);

class People{
  constructor(name) {
    this.name = name
  }
  eat(){
    console.log(`${this.name} is eating`);
  }
}

class Student extends People{
  constructor(name, number) {
    super(name);
    this.number = number
  }

}

const stu = new Student('Lys', 6)
stu.eat()
console.log(stu.__proto__, stu.prototype);
