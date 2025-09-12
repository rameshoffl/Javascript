// async is an keyword that is used to declare an asynchronous function.

// the await keyword is used to wait for a promise to resolve.


// let getdata=async ()=>{
//     try{
//         let f=await fetch('https://fakestoreapi.com/products')
//         console.log(f)
    
//         let data=await f.json()
//         console.log(data)

//     }
//     catch(err){
//         console.log(err)
//     }

// }
// getdata()






// TO GET THE DATA USING FETCH METHOD WITHOUT USING ASYNC AND AWAIT 


// let ol=document.querySelector('ol')
// let getdata= ()=>{
//     let data=fetch('https://fakestoreapi.com/products')
//     console.log(data)

//     data.then((ele)=>{
//         console.log(ele)

//         let jsondata=ele.json()
//         console.log(jsondata)

//         jsondata.then((ele)=>{
//             console.log(ele)

//             ele.map((objdata)=>{
//                 let li=document.createElement('li')
//                 li.innerHTML=`<h2>${objdata.title}</h2><h4>Price: ${objdata.price}</h4>`

//                 ol.append(li)
//             })
//         })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// getdata()






let ol=document.querySelector('ol')
let h1=document.querySelector('h1')

let f=async ()=>{
    let data=await fetch('https://fakestoreapi.com/products')
    console.log(data)

    let jsondata=await data.json()
    console.log(jsondata)

    jsondata.map((ele)=>{
        console.log(ele)

        let div=document.createElement('div')
        div.classList.add('card')

        div.innerHTML=`<h4>${ele.title}</h4><p>Price: ${ele.price}</p>`
        div.after(h1)

       
    })
}
f()