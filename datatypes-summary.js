// primitive

// 7 types : string , Boolean . Number , null , undefined, symbol , bigint

const score = 100;
const scoreVal = 100.5;

const isloggedIn = true;
const output = null;
let username; // undefined

const id = Symbol('123')
const userid = Symbol('123')

console.log(id === userid);


// Refrence (Non primitive)

// Array, object, function 

const heros = ["spiderman","superman","ironman","ant man"]

const myboj = {
    name : "vishnu",
    age : 21,
    isPassed : true
}

const myFunction = function(){
    console.log("hello world")
}