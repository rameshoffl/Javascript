let outer=document.querySelector('.outer')
outer.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('outer is clicked')
})

let middle=document.querySelector('.middle')
middle.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('middle is clicked')
})

let inner=document.querySelector('.inner')
inner.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('inner is clicked')
})

document.body.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('body is clicked')
})




// WINDOW 

console.log(window)

let a=parseInt(window.prompt('enter first num:'))
let b=parseInt(prompt('enter second num:'))

let c=a+b
console.log(alert(c))

