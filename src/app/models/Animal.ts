export class Animal {
    name: string;
    type: string;
    age: number;
    vegeterian: boolean;
    isFed: boolean;

    constructor(name: string, type: string, age: number, vegeterian: boolean) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.vegeterian = vegeterian;
        this.isFed = false;
    }
}