let form=document.querySelector('form')

console.log(form)

form.addEventListener('submit',(e)=>{
    console.log('form submitted')
    e.preventDefault()       //It is used to prevent the default behaviour of the form which is to reload the page

    let sname=document.getElementById('name').value
    

    let semail=document.getElementById('email').value
    console.log({sname,semail})    //to print in object format

})

