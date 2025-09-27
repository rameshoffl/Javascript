let string=window.prompt('enter any string to reverse:')

let spl=string.split('')
let rev=spl.reverse()
let res=rev.join('')
console.log((res))

let div=document.createElement('div')
console.log(div)

div.innerHTML=`<h2>The reversed string is : ${res}</h2>`
document.body.append(div)