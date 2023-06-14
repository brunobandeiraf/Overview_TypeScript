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

class Student extends Human{
    registration: string

    constructor(name:string, age:number, registration:string){
        super(name, age)
        this.registration = registration
    }

    cryOnTestDay(){
        console.log("uaaahh uuaaahh uaaah help me teacher ")
    }
}


let ana = new Student('Ana Maria', 29, '102030')
console.log(ana)
console.log(ana.showHuman())
ana.cryOnTestDay()
