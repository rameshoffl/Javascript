

let p1=new Promise((res,rej)=>{
    res('i am resolve 1')
    rej('i am reject 1')
})

let p2=new Promise((res,rej)=>{
    res('i am resolve 2')
    rej('i am reject 2')
})

let p3=new Promise((res,rej)=>{
    res('i am resolve 3')
    rej('i am reject 3')
})

let p4=new Promise((res,rej)=>{
    res('i am resolve 4')
    rej('i am reject 4')
})


// PROMISE ANY - It will show the first occured resolve

Promise.any([p1,p2,p3,p4]).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


// PROMISE ALL - It will show the first occured reject

Promise.all([p1,p2,p3,p4]).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

//PROMISE ALLSETTLED

Promise.allSettled([p1,p2,p3,p4]).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

// PROMISE RACE

Promise.race([p1,p2,p3,p4]).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

