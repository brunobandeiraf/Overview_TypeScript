interface config {
    brand: string,
    hoop?: number, //aro
    sunRoof: boolean,
    color?: string
}

// Parâmetros não passados são atribuidos por default
function createCar(config: config)
: { brand: string, hoop: number, sunRoof: boolean, color: string } {
    
    let car = { brand: 'Default', hoop: 16, sunRoof: false, color: 'black' }

    if(config.brand){
        car.brand = config.brand
    }
    if(config.hoop){
        car.hoop = config.hoop
    }
    if(config.sunRoof){
        car.sunRoof = config.sunRoof
    }
    if(config.color){
        car.color = config.color
    }

    return car
}

let bmw = createCar({
    brand: 'BMW', 
    sunRoof: true
})
console.log(bmw)

let ferrari = createCar({
    brand: 'Ferrari',
    hoop: 20, 
    sunRoof: false,
    color: 'red'
})
console.log(ferrari)