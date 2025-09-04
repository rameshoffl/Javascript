// this type of object initialization is object literal

let student={
    sid:101,
    sname:'ramesh',
    isplayer:true,
    skills:['python','html'],
    work:()=>{
        console.log('eat sleep repeat')
    },
    address:{
        city:'chennai',
        pincode:123456
    }
}

console.log(student)

// how to access 

console.log(student.sname)
console.log(student.sid)
console.log(student.skills)
console.log(student.skills[1])
student.work()
console.log(student.address.city)

let employee={
    ename:'miller',
    eid:102,
    salary:20000,

}

console.log(employee)
console.log(employee.ename)


// how to modify the object elements 

employee.eid=110

console.log(employee)

// how to add 

employee.phno=987654321
console.log(employee)

// how to delete 

delete employee.phno
console.log(employee)


// METHODS IN OBJECTS 

// 1. Object.keys() - it will return one array that contains the keys of the object

console.log(Object.keys(employee))

let player={
    playername:'rohit',
    age:35,
    team:'india'
}
console.log(Object.keys(player))

let keys=Object.keys(player)
console.log(keys)

// 2. Object.values() - it will return one array that contains the values of the object

let value=Object.values(player)
console.log(value)

// 3. Object.entries() - it will return one array that contains the keys and values of the object in the form of another array inside

let entries=Object.entries(player)
console.log(entries)


// 4. Object.freeze() - it will not allow to modify, add or delete the properties of the object

let ob1={
    obname:'pen',
    color:'red'
}
console.log(ob1)

Object.freeze(ob1)   //we can't modify
ob1.color='black'    
console.log(ob1)

ob1.price=20
console.log(ob1)      //we can't update

delete ob1.color
console.log(ob1)     //we can't add


// 5. object.isfrozen() - it will return true if the object is frozen otherwise false

console.log(Object.isFrozen(ob1))
console.log(Object.isFrozen(player))

// 6. Object.seal() - it will not allow to add or delete the properties of the object but we can modify the properties of the object

// here we can't add or delete the element but we can modify the element

let ob2={
    obname:'notebook',
    price:2000
}
console.log(ob2)
Object.seal(ob2)

ob2.name='ramesh'  // we can't add the element
console.log(ob2)

delete ob2.price  // we can't delete the element
console.log(ob2)

ob2.price=500     // but we can modify the data
console.log(ob2)

// 7. Object.isSealed() - it will return true if the object is sealed otherwise false

console.log(Object.isSealed(ob2))

// 8. Object.assign() - it will copy the data from one object to another object

// it is used to combine two or more than two objects and it will return one new object

let person={
    personname:'ramesh',
    age:20,

}
let address={
    city:'chennai',
    country:'india'
}
let combineob=Object.assign({},person,address) // if {} is not given then person object is modified
console.log(combineob)

console.log(address)
console.log(person)  // person object is modified if {} in initialization not given


// 9. hasOwnProperty() - it will return true if the object has the specified property as its own property (as opposed to inheriting it)

console.log(person.hasOwnProperty('age'))
console.log(person.hasOwnProperty('gender'))
