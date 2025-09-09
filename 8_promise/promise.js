
//promise is one js object,used to handle aasynchronized operation.
//we can create promise by using new keyword
// it will take one callback function thereit willl take two parameters(resolev,reject)
//for handling the resolev we need .then() block and for handling the reject we need .catch()block.

//promise having 3 states (pending,fulfilled,rejected)




let p=new Promise((resolve,reject)=>{
let studied=true
if(studied)
{
    resolve("I will give mock on 15th sep")
}
else{
    reject("I will notgive bcoz im not prepared")
}

})
console.log(p)
//.then will work in (true) or (resolve) 
p.then((data)=>{
console.log(data)
})

//.catch will work in (false) or (reject)
.catch((d)=>{
    console.log(d)
})

.finally(
       console.log("i am finally block")
    )




let p1=new promise((resolve,reject)=>{
let play=true
if(play){
    resolve("i will play")
}
else{
    reject("i will not play")
}
    
})
p1.then((d1)=>{
console.log(d1)
})   
.catch((d2)=>{
    console.log(d2)
})
.finally(
    console.log("finally")
)