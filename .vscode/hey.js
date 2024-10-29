// global space...
// WINDOW..--- IS A GLOBAL OBJECT IN CASE OF BROWSERES    

//this == window 
// gives the output as true

// console.log(b);
// function a(){
//     console.log(b)
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// var b = 10;
// a()
//*********************************************************//
// lexical environment of c is local environment of c and has lexical environment of a
// lexical environment of a is local environment of a and has lexical environment of GLOBAL EXECUTION CONTEXT

// console.log(a)
// let a = 10
// var b = 10
//*****************************************************//

// ................   CLOSURES   ...................  //
// function a(){
//     var x = 10;
//     function b(){
//         console.log(x);
//     }
//     return b
// }

// var c = a()
// console.log(c)


//   OUTPUT : -

// ƒ b(){
//     console.log(x);
// }




// function a(){
//     var x = 10;
//     function b(){
//         console.log(x);
//     }
//     return b
// }

// var c = a()
// console.log(c)
// c()

// here even if the single threaded js is forgetting the function a() when it is executingn the var c
// then the function b remembers the lexical scope of the b() so hence the output occurs as 7 at the end

// function a(){
//     var x = 111
//     function b(){
//         console.log(x)
//     }
//     return b
// }

//***********************************setTimeout + closures interview questions****************************************//
// function a(){
//     setTimeout(function(){
//         console.log(1)
//     },5000)
// }
// a()


// function b(){
//     for(let i=1;i<=5;i++){
//         setTimeout(
//             function(){
//                 console.log(i)
//             },i*1000)
//     }
//     console.log("Ashrith Gaddam")
// }
// b()

// function c(){
//     for(var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x)
//             },x*1000)
//         }
//         close(i)
//     }
// }
// c()

//...........DATA HIDING IN THE CLOSURES...............//
// function a(){
//     var count = 0
//     return function incrementcount(){
//         count++;
//         console.log(count)
//     }
// }

// var some = a()
// some()



//using the CONSTRUCTOR function for the above with INCREMENT and DECREMENT FUNCTION...

// function a(){
//     var count = 0;
//     this.incrementcount = function(){
//         count++;
//         console.log(count)
//     }
//     this.decrementcount = function(){
//         count--;
//         console.log(count)
//     }
// }

// var counter1 = new a()
// counter1.incrementcount();
// counter1.incrementcount();
// counter1.decrementcount();


//************************CALL BACK FUNCTIONS AND EVENTLISTENERS**********************//


// call back function

// function x(){
//     console.log("BUTTON CLICKED",++count)
// }

// call back with the event listener...
// document.getElementById("click me").addEventListener("click",
//     function x(){
//         console.log("BUTTON CLICKED",++count)
//     }
// )

// // closure demo with event listener...
// function eventoccurence(){
//     var count = 0
//     document.getElementById("click me").addEventListener("click",
//         function x(){
//             console.log("BUTTON CLICKED",++count)
//         }
//     )    
// }
// eventoccurence()

// document.getElementById("click me").addEventListener("click"
//     ,
//     function some(){
//         console.log("BUTTON IS CLICKED")
//     }
// )

// the above is using the call back function and eventlistener..


// function print(){
//     var COUNT = 0
//     document.getElementById("click me").addEventListener("click",
//         function something(){
//             console.log("HERE THE BUTTON IS CLICKED AND THE COUNT IS INCREMENT",++COUNT)
//         }
//     )
// }

// print()

// the above is using the CALLBACK FUNCTION with usage of the EVENT LISENER and mainly in CLOSURE

// console.log("Ashrith Gaddam START")

// setTimeout(function(){
//     console.log("Here the function in call back queue function is called")
// },5000)


// console.log("END")

// let startdate = new Date().getTime()
// let date = startdate
// console.log(startdate)
// while(date < startdate + 10000){
//     date = new Date().getTime()
// }

// console.log("While loop expires here")


//**************************HIGHER ORDER FUNCTIONS*****************************//

// const radius = [1,2,3,4]

// const area = function(radius){
//     return Math.PI * radius * radius
// }

// const circumference = function(radius){
//     return 2 * Math.PI * radius
// }

// const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,area));

// console.log(calculate(radius,circumference));


//*************************************MAPS , FILTERS AND REDUCE*******************************************//

//MAPS

const arr = [5,4,1,6,2,3]

console.log(arr)

function double(x){
    return 2 * x
}

function binary(x){
    return x.toString(2)
}
/////////.............x.toString(2)....to Convert the numbers into BINARY........



const output = arr.map(binary)
console.log(output)

const out = arr.map((x) => x.toString(2))
console.log(out)

//..................SAME AS THE ABOVE...............//
// const solution = arr.map(function double(x){
//     return 2 * x
// })

// console.log(solution)
//...........................................................................//
//.............FILTER.............//

function isOdd(x){
    return x % 2
}

const Output = arr.filter(isOdd)
console.log("The odd numbers are Printed:")
console.log(Output)

function isEven(x){
    return x % 2 === 0
}
const OUtput = arr.filter(isEven)
console.log("Even numbers are printed")
console.log(OUtput)

//...........................................................................//
//...........REDUCE................
//.....The REDUCE gives us only 1 value......

const OUTput = arr.reduce(function(acc,curr){
    if(acc < curr){
        acc = curr
    }
    return acc
},0)
console.log("Maximum number in the array is:")
console.log(OUTput)


//********************************************* SEASON 2 ******************************************//

//.................. CALL BACK HELL .............................//

// const cart = ["shoes","clothes","fooditems"]

// api.createorder(cart,funtion(){

//     api.proceedToPayment(function(){

//         api.showOrderSummary(

//             function (){
//                 api.updatewallet()
//             }

//         )

//     })

// })


























