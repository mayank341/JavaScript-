// REturning with arrow func:
// let addTwonumbers=(x,y)=>x+y;
// let result=addTwonumbers(12,15);
// console.log(result);

// let addTwoNumbers=(x,y)=>{
//     console.log("Adding....");
//     return x+y;
// }


// Variable scope in funcn:
// var :Function scope ,value undefined,u can declare first before initial.
// let : block scope ,not redeclarate 
// const:block scope, one time declar.,initia.,redeclaration.

// scope 
// function testavailability(x){
//     console.log("Available here:",x);
// }
// testavailability("Hi");
// console.log("not avilable here:",x);


// function testavailability(x){
//     let y="local variable";
//     console.log("available here:",y);
// }
// testavailability();
// console.log("not available here:",y);


// function testavailability(){
//     let y="i will return";
//     console.log("available here:",y);
//     return y;
// }

// var scope :
// function doingstuff(){
//     if (true){
//       var x ="local";
//     }
//     console.log(x);
// }
// doingstuff();

//
// function doingstuff(){
//     if (true){
//         console.log(x);
//       var x ="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if (true){
//       const x ="local";
//     }
//     console.log(x);
// }
// doingstuff();


// 
// let globalVar="accessible evreywhere";
// console.log("outside function:",globlvar );

// function creatingNewscope(x){
//     console.log("access to gloabl vars inside function:",globalvar);

// }
// creatingNewscope("some parameter";
//     console.log("still available",globalvar);
// )


// 
let x="global";

function doingstuff(){
    let x="local";
    console.log(x);
}
doingstuff();
console.log(x);