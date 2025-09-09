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

cardss[2].innerHTML='<h2>Modified using JS</h2> <p>hi hello</p>' //it understand the html tags also

// cardss[2].innerText='<h2>hi</h2>' //it will write as it is including tags




// to modify CSS using JS 
// how to apply CSS 

let items=document.getElementsByTagName('li')
console.log(items[1].innerText)

let about=items[1]
console.log(about)


about.style.color="red"
about.style.textDecoration='underline'

// how to give class 

let firstcard=document.querySelector('.card')
console.log(firstcard.classList)

firstcard.classList.add('dark')

console.log(firstcard.classList)

// how to remove the class name 

firstcard.classList.remove('dark')
console.log(firstcard.classList)

// how to create any element 

let div=document.createElement('div')
div.classList.add('circle')

// cards[2].append(div)
// cards[2].prepend(div)
// cards[2].before(div)
cards[2].after(div)



// to create the footer

let footer=document.createElement('div')
footer.classList.add('footer')

console.log(footer.classList)

footer.innerHTML='<p>&copy; dom task using js 2025</p>'

// to target main tag 

let maintg=document.getElementsByTagName('main')

// to display footer after the main tag 

console.log(maintg)

maintg[0].after(footer) // if you are using document tag name you should specify using indexing because the return type of tag name is array
