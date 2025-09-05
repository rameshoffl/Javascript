let person={
    name:'ramesh',
    age:'20',
    city:'chennai',
    isplayer:true
}
console.log(person)

// JSON.stringify() - It converts a JavaScript object into a JSON string.

// the type of JSON is string 

let jsonobject=JSON.stringify(person)
console.log(jsonobject)

console.log(typeof(jsonobject))

// JSON.parse() - It converts a JSON string into a JavaScript object.

let ob1=JSON.parse(jsonobject)
console.log(ob1)
console.log(typeof(ob1))


// JSON( JAVASCRIPT OBJECT NOTATION) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. 

// Advantages of JSON:
// Human-Readable:
// JSON's structure is easy for developers to understand and write.

// Lightweight:
// JSON is a minimal format that reduces the size of the data being

// Language-independent:
// JSON is language-independent, meaning it can be used with any programming language that can parse and generate text.


let employee=[
    {
        eid:1,
        ename:'miller',
        sal:5000
    },
    {
        eid:2,
        ename:'adams',
        sal:8000
    },
    {
        eid:3,
        ename:'scott',
        sal:9000
    }
]
console.log(employee)

employee.map((ele)=>{
    console.log(ele)
})

employee.map((ele)=>{
    console.log(ele.eid)
    console.log(ele.ename)
})



// object DESTRUCTURE - to assign the each and every keys to seperate variable

let student={
    studentname:'ramesh',
    age:20,
    isstudent:true,
    skills:['html','css','js']
}
let {studentname,isstudent,skills}=student
console.log(skills)


// rest parameter - allows a function to accept an indefinite number of arguments as an array using 3 dots and the variable after 3 dots stores the all rest of the value.

let display=(a,b,...c)=>{
    console.log(a)
    console.log(b)
    console.log(c)
}
display(10,20,3,4,5,6,7,8,9,0)

let arr4=[1,2,3,4,5,6,7,8,9,10,11,12]
let [a,b,...c]=arr4
console.log(a)
console.log(b)
console.log(c)

// spread operator - allows an iterable such as an array or string to be expanded in places where 0 or more arguments or elements are expected.

let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)