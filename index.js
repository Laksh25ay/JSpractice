// let arr = ["Jan", "march" , "April", "June", "July"];

// console.log(arr.splice(5, 1, "Dec"));
// console.log(arr);

// console.log(arr.splice(1,1,"March"));
// console.log(arr);

// console.log(arr.splice(3,1, "From"));
// console.log(arr);

// let idx = arr.indexOf("march");
// if(idx !== -1){
//     console.log(arr.splice(idx, 1, "March"));
// }
// console.log(arr);


//Adding 'May' after "April"
// let idx = arr.indexOf("April");
// if(idx !== -1){
//     console.log(arr.splice(idx+1, 0, "May"));
// }
// console.log(arr);

//Deleting 2 elements from index=2
// console.log(arr.splice(2, 2));
// console.log(arr);


// let arr = [25, 36, 49, 64, 81];
//Find sq root of each element

// let sqRootArr = arr.map((ele) => ele**(1/2));
// console.log(sqRootArr);

// let a1 = [2, 3, 4, 6, 8] 
// //Multiply each element by 2 and return elements which are greater than 10.
// let res = a1.map((ele) => ele*2).filter((ele)=> ele > 10);
// console.log(res);

// let arr = [1,2,3,4,5];
// let newArr = arr.map((ele)=> ele**2).reduce((total, ele) => total+=ele , 10);
// console.log(newArr);

// const arr = [
//     ['z1', 'z2'],
//     ['z3', 'z4'],
//     ['z5', 'z6'],
//     ['z7', 'z8'],
// ];

// const oneDArr = arr.reduce((acc, ele) => {
//     return acc.concat(ele);
// });

// console.log(oneDArr);

// const s1 = "Lakshay is noice";
// const res = s1.slice(5);
// console.log(res);

// const s1 = "Lakshay is noice0";
// console.log(s1.charCodeAt(s1.length-1));

const fname = "Lakshay";
const lname = "Gupta";
const fullName = fname.concat(lname);
console.log(fullName);