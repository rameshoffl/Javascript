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

// arrow function ***  -> implicit return, syntactic sugar, present in temporal dead zone

let add=(a,b)=>a+b;

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



// function names:
 
// named function
// anonymous function 
// first-class function 
// functional expression 
// iife -> prevents global pollution
// arrow function 
// higher order function 
// callback function 
// nested function 



// generator function -> to pause and give output

let arrr=[1,2,3,4,5,6,7];
function * iterate(){
    for (let i=0; i<arrr.length; i++){
        yield arrr[i]
    }
    return 'finised execution'
}

let i = iterate()
let obj;

do{
    obj=i.next();
    console.log(obj.value)
}while(!obj.done)






// closure - object used by the inner function that stores the outer function data 

console.log('start')

function count(){
    let count=0;
    let msg='hello'

    function increment(){
        count++
        return count
    }

    return increment
}

let p=count()
console.log(a())
console.log(a())
console.log(a())

let q=count()
console.log(q())
console.log(q())
