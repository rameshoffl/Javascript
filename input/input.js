let name=window.prompt('enter your name:')

console.log(name)

let div=document.querySelector('div')
div.classList.add('box')

div.innerHTML=`<h1>${name}</h1>`