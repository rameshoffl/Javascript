let hour=new Date().getHours()
// let hour=10

let wish=()=>{
    if (hour<12){
        message.innerHTML=`<h1>Good Morning</h1>`

    }
    else{
        message.innerHTML=`<h1>Good Afternoon</h1>`
        
        
    }
}
// wish()



let circle=document.querySelector('div')

let heading=document.createElement('h2')
heading.innerHTML=`<h3>!Click here!</h3>`
circle.append(heading)

let message=document.createElement('div')
message.classList.add('msg')
document.body.append(message)
