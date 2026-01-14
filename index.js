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
// let button = document.getElementById("btn");
// let heading = document.getElementById("title");
// button.addEventListener("click", ()=>{
//     heading.textContent = " hello atishay";
// } ) 

// let b = 6;
// function show(){
//     let a = 6;
//     return a;
// }
// let result=show();
// console.log(result);
// let obj = {
//     name : "atishay",
//     age : 18,
//     height : 5
// };
// let obj1= {...obj};
// console.log(obj);
// obj1.name="irshad";
// console.log(obj1);

// let obj = {
//     name : "atishay",
//     age : 18,
//     height : 5,
//     address:{
//         name1: " hello",
//         age1:2
//     } 
// };
// let obj1= {...obj};
// console.log(obj);
// obj1.name="irshad";
// console.log(obj);
// console.log(obj1);


// let obj = {
//   name: "Atishay",
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// let copy = structuredClone(obj);

// copy.address.city = "Mumbai";

// console.log(obj.address.city);  // Delhi ✅
// console.log(copy.address.city); // Mumbai

// let a = "5";
// let b =5;
//  if(a===b){
//     console.log("true");
//  }else{
//     console.log("false");
//  }


// let a =5;
// ++a;
// console.log(a);

// let n = 7;
// let result = n%2===0 ? " even " : "odd";
// console.log(result);

// const arr = [1,23,4,5];
// const newarr= arr.map((i)=>{
//      return 2*i;
    
//  });
//  console.log(arr);
//  console.log(newarr);

//  const newarr2= arr.forEach((i)=>{
//      return 2*i;
    
//  });
//  console.log(newarr2);

// const arr=[
//     {
//         name:"atishay",
//         age:10

//     },
//     {
//         name:"vansh",
//         age:10
//     },
//     {
//         name:"hello",
//         age: 12

//     }
// ];
// const result=(arr[2].name);
// console.log(result); 

// for(let i =0;i<=5;i++){
//     console.log(i*2);
// }
// let i =1;
// do{
//     console.log(i*2);
//     i++;

// }while(i<=5)
// let arr=[1,2,3,4,5];
// let target =3;
// function linearSearch(arr,target){
//     for(let i =0;i<=arr.length;i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;

// }

// console.log(linearSearch(arr,target));

// let obj1={
//     name:"atishay",
//     show(){
//        let b =  ()=>{
//         console.log(this.name);
//     }
//     b();
   
//     }
// };
// obj1.show();

// let a = "MY NAME IS ATISHAY"
// let b = a.split(" ");
// console.log(b);
//  const arr= ["helllo","is","jss","jio"];
//  console.log(arr.toString());
//  console.log(arr.join("*"));
// console.log(arr.at(1));
// console.log(arr.unshift("hey"));
// console.log(arr.push("hey"));
// console.log(arr.shift());
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.slice(0,3));
const arr= [1,2,[3,[[5,6]],[7],8,9]];
// const arr1=[1,2,3,4,5];
// console.log(arr.splice(2,1,"jaa","Atishsy"));
// // console.log(arr);
// console.log(Array.isArray(arr));
// console.log(arr.concat(arr1));
// console.log(delete arr[1]);
// console.log(arr);
// console.log(arr.splice(2,1));
// console.log(arr);
// console.log(arr.copyWithin(1,3,5));
// console.log(arr);
console.log(arr.flat(2));