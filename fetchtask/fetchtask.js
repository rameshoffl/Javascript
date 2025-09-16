


let data=async()=>{
    let fet=await fetch('https://fakestoreapi.com/products')
    console.log(fet)

    let response=await fet.json()
    console.log(response)

    let main=document.querySelector('main')
    response.map((ele)=>{
        let div=document.createElement('div')
        div.classList.add('card')
        div.innerHTML=`<img src=${ele.image} <h3>Title: ${ele.title}</h3> <h4>Price: ${ele.price} </h4> <h4>Category:${ele.category}</h4>`
        main.append(div)
    })

}

data()