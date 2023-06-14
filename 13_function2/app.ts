// Não pode um parâmetro opcional antes de um obrigatório
function printCar(brand:string, hoop?:number){
    
    if(hoop){
        console.log(`The car is from the brand ${brand} and has a hoop ${hoop}`)
    }else{
        console.log(`The car is from the brand ${brand}`)
    }
}

printCar('BMW', 20)
printCar('Ferrari')