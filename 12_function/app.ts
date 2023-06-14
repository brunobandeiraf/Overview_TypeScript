// Output typing - Tipagem na saída
function hello(greeting: string, name:string): string {
    return `${greeting} ${name}, how are you? Have a good day`
    // Error for different than string
    //return 0
}

console.log(hello('Sr.', 'Breno'))
// Error
//console.log(hello(4,3))
