// console.log(a)
// var a=7;

// console.log(a);
// let a = 7;
// sayhello();
// function sayhello(){
//     console.log("hello");
// }

// console.log("hello   ndnd")

// let n = 7;

// const P = new Promise((resolve, reject) => {
//     if (n % 2 === 0) {
//         resolve(n);
//     } else {
//         reject(n);
//     }
// })

// .then(value => {
//     console.log(value + 1);
// })
// .catch(value => {
//     console.log(value - 1);
// });

// let obj = {
//     name: "atishay",
//     age : 19,
//     rollno : 2,
//     show(){
//         console.log(this.name)
//     }

// };
// obj.show();
let button = document.getElementById("btn");
let heading = document.getElementById("title");
button.addEventListener("click", ()=>{
    heading.textContent = " hello atishay";
} )