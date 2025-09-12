console.log('event in js')

let display=()=>{
    console.log('I am display function')
}


let header=document.querySelector('header')

let color=()=>{
    header.style.backgroundColor='orange'

}



let card1=document.querySelector('.card1')
let card2=document.querySelector('.card2')

let content=()=>{
    card2.innerHTML=card1.innerHTML      // to copy content from one card to another card

    card1.innerHTML=``
    console.log('copied')
}


let msg=()=>{
    alert('good afternoon')      //alert message
}




let box=document.querySelector('.box')    //mouse hover event
let changebackground=()=>{
    
    box.style.backgroundColor='red'
    console.log('hover')
}


let changebackground2=()=>{
    console.log('hiii')
    box.style.backgroundColor='aqua'   
}