// TypeOf operator

// Boolean

console.log(typeof(false));

console.log(typeof(true));

// object
console.log(typeof(null));
console.log(
    typeof(
    {
        name: "Abdullah",
        age: 25,
        isMarried: false

    })
)
console.log(typeof(document))

// undefined
console.log(typeof(undefined));

//Number
console.log(typeof(10));

// string
console.log(typeof("Abdullah"));

// Symbol
console.log(typeof(Symbol("Abdullah")));

// Array
console.log(typeof([1,2,3,4,5]));

// function

console.log(typeof(function Fun(){}));

// Date
console.log(typeof(new Date()));

// RegExp
console.log(typeof(/abdullah/));

// Error
console.log(typeof(new Error()));

// Math
console.log(typeof(Math));

// JSON
console.log(typeof(JSON));

// Map
console.log(typeof(new Map()));

// Set
console.log(typeof(new Set()));

// WeakMap
console.log(typeof(new WeakMap()));


// WeakSet
console.log(typeof(new WeakSet()));



// Set example
console.log( new Set([1,2,3, 3, 3, 3, 3, 3, 3, 3, 3, 3,4,5]));

//  == vs ===


let a = 7
let b = "7"

// if (a==b){
//     alert("a is equal to b")
// }

if (a!==b){
   console.log(Error("they are equal yet the type is different"))
}