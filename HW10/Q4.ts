class Person {
    _firstName: string = "";

    private enumerable: boolean = true;
    private configurable: boolean = true;

    get firstName(){
        return this._firstName;
    }

    set firstName(value: string){
        this._firstName = value;
    }
}

let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);
