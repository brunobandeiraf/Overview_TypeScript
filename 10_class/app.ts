class Human{
    name: string
    age: number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    showHuman(){
        return `This human's name is ${this.name} and he is ${this.age} years old`
    }
}

let ana = new Human('Ana Maria', 29)
console.log(ana)
console.log(ana.showHuman())