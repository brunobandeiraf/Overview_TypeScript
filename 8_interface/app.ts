function printName(
    obj : { name: string, age: number}
){
    console.log(`This person is called ${obj.name} and he is ${obj.age} years old`)
}

let person1 = { name: 'Ana', age: 29 }
printName(person1)

// Error
//let person2 = { name: 'Bruno'}
//printName(person2)