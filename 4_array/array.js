let arr=[10,'html',true]
console.log(arr)

// how to know the lenght of the array 

console.log(arr.length)

// array methods

// 1. push() - to add the element at the end
// return value is lenght of the modified array 

let arr1=[20,30,40]
arr1.push(50)
console.log(arr1)

// 2. pop() - to remove the end element from array
// return value is poped element from array 

arr1.pop()
console.log(arr1)

// 3. unshift() - to add the element in first position in the array

arr1.unshift(10)
console.log(arr1)

// 4. shift() - to remove the first occurance element from the array

arr1.shift()
console.log(arr1)

// 5. includes() - to check the value is present or not in the array and return value is true or false 

console.log(arr1.includes(20))
console.log(arr1.includes(100))

// 6. indexof() - to return the index value of the element in first occurance

let arr2=[10,20,30,40,50,20]
console.log(arr2.indexOf(20))

// 7. lastindexof() - to return the index value of the element in last occurance

console.log(arr2.lastIndexOf(20))

// 8. concat() - to add two array

let sub1=['html','css']
let sub2=['python','java']
console.log(sub1.concat(sub2))

// 9. reverse() - to reverse array

console.log(arr2.reverse())

// 10. join() - to convert any string into array or vice versa

let arr3=['hi','how','are','you']
console.log(arr3.join(' '))



// to reverse the given string 
let str='hello'
console.log(str)
let arra=str.split('')
let rev=arra.reverse()
let revstr=rev.join('')
console.log(revstr)


let name='ramesh'
let arrname=name.split('')
console.log(arrname)
let revname=arrname.reverse()
console.log(revname)
let reve=revname.join('')
console.log(reve)
