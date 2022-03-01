// Factory Functions

function Car (quality){
    return {
        color: 'red',
        getSummary(){
            console.log(`The car is ${this.color} and its quality is ${quality}`);
        }
    }
}

var car = new Car()
console.log(car);
// car.getSummary()

var car2 = Car("Good")
car2.getSummary()


// call apply bind

let firstName = "Harshit";

let names = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
        // console.log(firstName)
    }
}

// names.getFullName()

let names2 = {
    firstName: 'John 2',
    lastName: 'Doe 2'
}

let names3 = {
    firstName: 'John 3',
    lastName: 'Doe 3'
}

// function borrowing
names.getFullName.call(names2)
names.getFullName.call(names3)



let carFun = function (){
    console.log(`${this.make} ${this.model}`);
}

let car1 = {
    make: 'Honda',
    model: 'Civic',
}

let car3 ={
    make: 'Toyota',
    model: 'Corolla'
}
carFun.call(car1)
carFun.call(car3)

