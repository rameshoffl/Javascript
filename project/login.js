let loginform=document.querySelector('form')
console.log(loginform)

loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    let loguname=document.getElementById('username').value
    
    
    let logpass=document.getElementById('password').value

    let username=localStorage.getItem('username')
    let password=localStorage.getItem('password')
    
    if(loguname==username && logpass===password){
        console.log('accepted')
        open('home.html')
    }
    else{
        console.log('rejected')
        alert('wrong credentials. Plz signup!')
        open('signup.html')
    }
})

let middle=document.querySelector('.middle')
middle.addEventListener('mouseover',()=>{
    middle.style.backgroundColor='rgb(167, 193, 168)'
})

middle.addEventListener('mouseleave',()=>{
    middle.style.backgroundColor='rgb(129, 154, 145)'
    
})