// const sum = (num1)=>{
//     const b = (num2)=>{
//         return num1 + num2;
//     }
//     return b;
// };

// console.dir(sum(5));


// Ex-2
const sum = (num1) =>{
    const inner = (num2) =>{
        const innerMost = (num3) =>{
            return num1 + num2 + num3;
        }
        return innerMost;
    }
    return inner;
}

console.log(sum(4)(5)(6));