let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)

// let myCreateDates = new Date(2024,4,5)
// let myCreateDates = new Date(2024,4,5,6,5)
// let myCreateDates = new Date("2023-05-05")
// let myCreateDates = new Date("05-05-2024")

// console.log(myCreateDates.toLocaleString())

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDates.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate =  new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

newDate.toLocaleString('Default',{
    weekday : "long"
})