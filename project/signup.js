

let form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    console.log('form sumbmitted')
    e.preventDefault()

    let uname=document.querySelector('input').value
    console.log(uname)

    let pass=document.getElementById('password').value
    console.log(pass)

    localStorage.setItem('username',uname)
    localStorage.setItem('password',pass)

    alert('signup done!')

    open('./login.html')
})

let middle=document.querySelector('.middle')

middle.addEventListener('mouseover',(e)=>{
    console.log('middle box hovered')
    middle.style.backgroundColor='rgb(217, 233, 207)'
})
middle.addEventListener('mouseleave',()=>{
    middle.style.backgroundColor='rgb(182, 206, 180)'
})