// !  Named Function 


function display()
{
    console.log("I am display function")
}

display()

// !  function with parameters 

function add(a , b)
{
    console.log(`the addition of ${a} and ${b} is ${a+b}`)
}

add(2,8)
add(30,50)


// !  function with return keyword 


function sub(a,b)
{
    return a - b;
}

let res = sub(50,20) 
console.log(res)

console.log(sub(40,20))



// !  function with expression


let a = function(sname)
{
    console.log("I am anonymous function")
    console.log(`my name is : ${sname}`)
}

a("santanu")

let func=function(){
    console.log('simple function')
}
func()

// arrow function ***

let fun1 = () => {
    console.log('i am arrow function')
}
fun1()

// nested function  ***

let outer=() =>{
    console.log('this is outer func')
    let inner=() =>{
        console.log('this is inner function')
    }
    inner()
}
outer()


// lexical scopping ***

// inner function can access the property of all parent clause but parent can't access the properties of child 

// in nested function inner function can access all the properties of outer function but the outer function can't access the property of inner function, this is called lexical scoping. 

let parent=()=>{
    let a=10
    let child=()=>{
        let b=20

        console.log(a)
        console.log(b)
    }
    child()
}
parent()


// higher order function and callback function  ***

// any function that takes another function as parameter is called higherorder function. 

// the function we are sending to the higher order function as parameter is called callback function. 

let fun=(a)=>{
    a()
    console.log('i am higher order function')
}
fun(()=>{
    console.log('i am callback function')
});


// IIFE (Immediate Invoke Function Expression) ***

// this function can be used only once and before statements we have to use semi colon and () is been used to call the function 

(function(){
    console.log("i am iife function")
})

()