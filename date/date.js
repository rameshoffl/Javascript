let time=new Date()

console.log(time)


console.log('now hour is ',time.getHours())
console.log('now minute is ',time.getMinutes())
console.log('now second is ',time.getSeconds())

console.log('today date is ',time.getDate())
console.log('today month is ',time.getMonth()+1)
console.log('this year is ',time.getFullYear())

let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

console.log('the day is ',days[time.getDay()])

let months=['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec']

console.log('the month is ',months[time.getMonth()])


console.log(time.toLocaleDateString())


// MATH OBJECT 

console.log(Math.sqrt(16))
console.log(Math.abs(-50)) 
console.log(Math.max(10,40,20))
console.log(Math.min(10,40,20))

console.log(Math.ceil(4.2))
console.log(Math.ceil(4.7))

console.log(Math.floor(4.5))
console.log(Math.floor(4.9))

console.log(Math.round(7.4))
console.log(Math.round(7.6))

let num=521

console.log(Math.floor((Math.random()*10)))