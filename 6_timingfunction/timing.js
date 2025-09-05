console.log('timing function in js')

console.log('start')

let display=()=>{
    console.log('i am display function')
}

// setTimeout() - it is used to execute a function after a specified period of time
setTimeout(display,2000)  //it  an callback function


console.log('end')

setTimeout(()=>{
    console.log('direct settimeout callback function')
},5000)


let wish=()=>{
    console.log('happy birthday')
}
let st=setTimeout(wish,3000)


let sorry=()=>{
    console.log('sorry')
}
setTimeout(sorry,4000)


// setInterval() - it is used to execute a function repeatedly after a specified period of time

let si=setInterval(sorry,1000)
clearInterval(si)

//clearTimeout() - it is used to cancel a timeout that was previously established by setTimeout()

clearTimeout(st)

//clearInterval() - it is used to cancel a timeout that was previously established by setInterval()

clearInterval(si)