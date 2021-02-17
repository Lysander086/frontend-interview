class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }

  sayHi() {
    console.log(this.name, '+', this.number)
  }
}

class People {
  constructor(name) {
    this.name = name

  }
}

class Teacher extends People{
  

}
