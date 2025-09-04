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


// 11. slice()  - to extract the element from the array

let arr4=[10,20,30,40,50]
console.log(arr4)
console.log(arr4.slice(1,3))

// 12. splice() - to reject the specified element from the array

// splice() method will take 3 parameters. (startindex, deletecount, replacevalue) 

// this method will modify the original array 

let arr5=[8,10,20,40,66,30,22,10]
arr5.splice(2,4)
console.log(arr5)
arr5.splice(2,4,400) // to add the value at the end of the given array
console.log(arr5)

let subjects=['html','css','js']
subjects.splice(2,0,'python')
console.log(subjects)


// HIGHER ORDER ARRAY METHODS

// 1. map()  - It has 3 parameter that is element, index, array

// map is used to travese and do any operation

// it does not check any condition

// map method is higher order array method which is used to traverse array and perform any operation with all the elements from the array 

// It will return one new array 

// It will take one callback there it will take 3 parameters (Element,index,array)

// to add 5 value to all element 
let numbers=[80,75,65,82,92]
let arrmap=numbers.map((ele)=>{
    return ele+5
})
console.log(arrmap)

// to transform to uppercase 
let subject=['html','css','java','js']
console.log(subject)
let cap=subject.map((vari)=>{
    return vari.toUpperCase()
})
console.log(cap)

// to add 100 value to all elements of array 
let price=[10,20,234,23,400]
let retail=price.map((ele)=>{
    return ele+100
})
console.log(retail)

// 2. filter() - higher order method used to check the condition only.

// it is one higherorder array method , used to traverse the array and check the conditions If the condition matched then it will return one new array 

let filtered=numbers.filter((ele)=>{
    return ele > 80
})
console.log(filtered)


// 3. reduce() - the accumulator will take the first value by default

// to reduce the array into single value 

// it will take 4 arguments -  (accumulator,element, index, array )

// it is one higher order array method used to convert the array into single value. 

let arrr=[10,20,30,40,50]
let sum=arrr.reduce((acc,ele)=>{
    return acc+ele
})
console.log(sum)

// 4. sort() - to sort the array in asc or desc

// it is used to sort the array into asc or desc order and it will take 2 parameters in callback function.

// first parameter - second parameter ->will give ascending order 
// second parameter - first parameter -> will give descending order 

let arr11=[1,4,5,9,6,38,43,11]
let acc=arr11.sort((a,b)=>{
    return a-b
})
console.log(acc)

let dec=arr11.sort((a,b)=>{
    return b-a
})
console.log(dec)


// 5. foreach() - It is also like the map() method but it can't return the values to the variable rather that it can display the values spontaneously.

let x=price.forEach((ele)=>{
    console.log(ele)
    return ele
})

