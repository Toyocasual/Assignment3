//create a function to merge two objects into a new one

function cars() {let first_car = {
    makers: 'Toyota',
    models: 'Camry',
    years: '2015',
    nicknames:'muscle'

}

let second_car = {
    maker: 'Toyota',
    model: 'corolla',
    year: '2005',
    nickname: 'Big daddy'

}

Object.assign(first_car, second_car)

console.log(first_car)
}

cars();