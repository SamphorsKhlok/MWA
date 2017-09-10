class Person{
    constructor(name){
        this.name = name;
    }

    teach(subject){
        return this.name + " is now teaching " + subject;
    }
}

var TeacherA  = new Person("Asaad");
var TeacherB  = new Person("Ken");

console.log(TeacherA.teach("MWA"));
console.log(TeacherB.teach("SCI"));
