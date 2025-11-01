export class Person {
    public firstname: string;
    public lastName: string;
    private address: string;

    constructor(firstname: string, lastName: string, address: string = 'New York') {
        this.firstname = firstname;
        this.lastName = lastName;
        this.address = address;
    }
}

// export class Hero extends Person {
//     public alterEgo: string;
//     public age: number;
//     public realName: string;

//     constructor(alterEgo: string, age: number, realName: string) {
//         super(realName, 'New York');

//         this.alterEgo = alterEgo;
//         this.age = age;
//         this.realName = realName;
//     }
// }

export class Hero {
    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;


    constructor(alterEgo: string, age: number, realName: string, person: Person) {
        this.person = person;
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}

const tony: Person = new Person('Tony Stark', 'New York, USA');

const ironMan: Hero = new Hero('Sergio', 45, 'New York, USA', tony);

console.log(ironMan);