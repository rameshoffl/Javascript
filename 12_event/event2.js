let btn=document.querySelector('.btn')
btn.addEventListener('mouseover',()=>{    //it is an mouseover event
    alert('event listener invoked!')
})


let header=document.querySelector('header')
header.addEventListener('mouseover',()=>{
    header.style.backgroundColor='black'
    header.style.color='white'
})

header.addEventListener('mouseleave',()=>{
    header.style.backgroundColor='antiquewhite'
    header.style.color='black'
})




let a1=()=>{
    console.log('action 1')

}

let a2=()=>{
    console.log('action 2')

}
//here we can not use two onclick function in the event handler



let btn3=document.querySelector('.btn3')
btn3.addEventListener('click',()=>{
    console.log('btn3 action 1')
})

btn3.addEventListener('click',(e)=>{
    console.log('btn3 action 2')
    console.log(e)        //to get the event object
    console.log(e.type)    //to get the type of event
    console.log(e.target)  //to get the target element
})
//here we can use two click function in the event listener


// KEYBOARD EVENTS 

let input=document.querySelector('input')
let div=document.querySelector('.output')

input.addEventListener('keydown',()=>{
    console.log('key is pressed')
})

input.addEventListener('keyup',(e)=>{
    div.innerHTML=`<h3>${e.target.value}</h3>`   //it is important to target the input box to get the value of input tag - these target method we are also use in react
    console.log('key is released')
})