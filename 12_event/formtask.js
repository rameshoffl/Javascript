let form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let num1=parseInt(document.getElementById('num1').value)
    let num2=parseInt(document.getElementById('num2').value)

    let result=document.querySelector('.result')

    result.innerHTML=`<h2>The sum is: ${Number(num1)+Number(num2)}</h2>`

})