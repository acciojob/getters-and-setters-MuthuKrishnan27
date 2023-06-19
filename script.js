//complete this code
class Person {
	name;
	age;
	_name;
	_age;
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getter(){
		this._name = name;
		return this._name;
	}
	setter(age){
		this._age = this.age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
    constructor(name,age){
        super(name,age);
    }
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
