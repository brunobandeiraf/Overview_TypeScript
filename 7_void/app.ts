function testVoid(): void {
    console.log('Testing a function with void type')
}
testVoid()

let test: void
// Error
//test = 1
test = undefined
console.log(test)