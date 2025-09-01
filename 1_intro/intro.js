console.log("this is external javascript")

// how to declare variable

// let , var , const are the variable in js 

// we can't redeclare the variable in let keyword
// but in var keyword it is possible to redeclare the variable 

// let keyword 

let sname
sname='ramesh'
console.log(sname)

let age=20
console.log(age)

age=22
console.log(age)

// clg is an shortcut to console.log or try log
// let sname - in let keyword re-declaration is not possible.

// var keyword

var ename
ename='praha'
ename='ramesh'
console.log(ename)

var ismarried
ismarried=false
console.log(ismarried)

var haschild=true
console.log(haschild)

haschild=false
console.log(haschild)

// by using var keyword we can re-declare any variable. 

// const keyword 

const aadharno=123456789012
console.log(aadharno)

// const aadharno - here also re declaration is not possible

// aadharno=098765432
// console.log(aadharno)

// when we want to take constant value that we don't want to change we have to use const keyword

// const pi
// pi=3.14 - In const we have to declare and initialize in the same line or else it will throw the error



// DATA TYPES IN JS 

// 1. primitive data types 
// 2. non-primitive data types

// 1. primitive datatypes:
//number
let phno=1234567890
console.log(phno)

console.log(typeof phno)

// typeof operator is used to know the datatype of the variable.

let dec=1.12
console.log(typeof dec) // for both integer and float the datatype is number

//boolean

let isstudent=true
console.log(typeof isstudent)

//string

let name='ramesh'
let city="chennai"
let country=`india`

console.log(typeof name)
console.log(typeof city)
console.log(typeof country)

//undefined

//variable is declared but it is not initialized is known as undefined.
let coursename
console.log(coursename)
console.log(typeof coursename)

//null

let salary=null
console.log(salary)
console.log(typeof salary) // the type of null is object

//bigint

let largenum=2n
console.log(largenum)
console.log(typeof largenum) //if you add the n at the end of data the number will change into bigint


// 2. Non primitive datatypes:

// array , function , object

//array

let arr=[20,'ramesh',true,undefined,null]
console.log(arr)
console.log(typeof arr)

//function

function add(){
    console.log('i am at function')
}
add()
console.log(typeof add)

// object

let emp={ename:'miller',eid:1212,loc:'chennai',salary:90000}
console.log(emp)
console.log(typeof emp)
