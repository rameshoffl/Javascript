// how to target the element

// 1. targeting the element (by ID) - to target single element

let logo=document.getElementById("logo")
console.log(logo)

// 2. targeting the element (by class name) - to target multiple elements and the return type is array

let cards=document.getElementsByClassName('card')
console.log(cards)

 console.log(cards[1]) //- to target 2nd card using indexing

 let buttons=document.getElementsByClassName('btn')
 console.log(buttons)


// 3. targeting the element (by tag name) - to target multiple elements and the return type is array

let list=document.getElementsByTagName('li')
console.log(list)

console.log(list[1])

// 4. targeting the element (by query selector) - to target single element

let logo2=document.querySelector('#logo') //can access using class
console.log(logo2)

let card1=document.querySelector('.card')  //can access using id
console.log(card1)

let li1=document.querySelector('li') //can access using tag name
console.log(li1)

// 5. targeting the element (by query selector all) - to target multiple elements and the return type is array

let cardsall=document.querySelectorAll('.card')
console.log(cardsall)
console.log(cardsall[2])



// how to get or set content inside the element


console.log(cards[1].innerText)


let cardss=document.getElementsByClassName('card')
console.log(cardss[1].innerText)

console.log(cardss[1].innerHTML)


console.log(cardss[2].innerText)

cardss[2].innerHTML='<h2>Modified using JS</h2>' //it understand the html tags also

// cardss[2].innerText='<h2>hi</h2>' //it will write as it is including tags