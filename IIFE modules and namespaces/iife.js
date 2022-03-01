export function hello(){
    alert("Hello");
}



export var nam = "I am named global";




function outerFun(){
    var nam =  "I am named in outerFun which is a way of showing the lexical scope"
    var fun = function(){
        console.log(nam);
    }
    return fun;

    
}
outerFun()();

// The Es6 arrow function way
const outerFun2 = () => {
    const nam = "I am named in outerFun";
    const fun = ()=>{
        console.log(nam);
    }
    return fun;
}

// Function expression
var msg = "I am a function expression";
var func = function(){
    console.log(msg);
}    

// Anonymous function can be used as a callback
// const unnamed = document.querySelector(".unnamed");
// unnamed.addEventListener("click", function(){
//     alert("I am anonymous");
// })


// IIFE - Immediately Invoked Function Expression
!function(){
    // alert("I am an IIFE");
}()

// IIFE - Immediately Invoked Function Expression with variation 

void function(){
    // alert("I am an IIFE");
}()

+function(){
    // alert("I am an IIFE");
}()

// IIFE with parameters
var msg2 = "I am an IIFE with parameters";
!function(msg2){
    // alert(msg2);
}(msg2);

// iife variation
(function (){
    // alert("I am an IIFE");
}());

// iife variation

(function (){
    // alert("I am an IIFE too 🙏");
})();

// IIFE can be assigned to a variable

var msg4 = (function(){
    return "I am from an IIFE and I am assigned to a variable";
})();

// alert(msg4);


// IIFE with paramters

(function (name, age){
    // alert(`I am ${name} and I am ${age} years old`);
})("Hashim", 23);

// iife with parameters example 2
(function (msg, times){
    for(let i = 0; i<times; i++){
        // document.write(msg + "<br>");
    }
})("Hi", 5);
