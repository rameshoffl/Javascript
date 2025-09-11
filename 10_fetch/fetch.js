
let fet=fetch('https://fakestoreapi.com/products')
console.log(fet)    //promise

fet.then((data)=>{
    console.log(data)   //got the response

    let jsondata=data.json()   
    console.log(jsondata)     //again promise

    let ol=document.querySelector('ol')
    ol.classList.add('ol')


    jsondata.then((data)=>{
        console.log(data)      //shows the array of objects

        data.map((ele)=>{
            console.log(ele)    //to show every object

            let li=document.createElement('li')   //to display every list in UI
            li.innerHTML=`<p>${ele.title}</p>`

            ol.append(li)
        })

        

    })
    .catch((err)=>{
        console.log(err)        //for each and every promise we have to use catch method to handle the error
    })


})

.catch((err)=>{
    console.log(err)
})
