setTimeout(
    ()=>{
        // alert("Hello");
    }, 2000
)

// setTimeout with parameters


function sayName (name){
    alert(name)

}


const clearT= setTimeout(sayName, 5000, "John")
clearTimeout(clearT)


// setTimeout with strings and numbers
// setTimeout("alert(45)", 7000)

// setTimeout with arrow  functions
setTimeout(()=>{
    // alert("Hello")
}, 9000)


let timerId = setTimeout(() => alert("never happens"), 6000);
alert(timerId); // timer identifier

clearTimeout(timerId);

alert(timerId + " is cleared"); // timer identifier is cleared