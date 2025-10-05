let display=document.querySelector('.display')
console.log(display)
let add=document.querySelector('.add')
console.log(add)
let minus=document.querySelector('.minus')
console.log(minus)
let reset=document.querySelector('.reset')
console.log(reset)

let value=0
display.innerHTML=`<h1>${value}</h1>`


add.addEventListener('click',()=>{
    value++
    display.innerHTML=`<h1>${value}</h1>`
})


minus.addEventListener('click',()=>{
    value--
    display.innerHTML=`<h1>${value}</h1>`
})

reset.addEventListener('click',()=>{
    value=0
    display.innerHTML=`<h1>${value}</h1>`
    console.log(value)
}) 