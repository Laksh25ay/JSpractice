// Ex-1
// let name = "Lakshay";
// function temp(){
//     console.log(this.name);
// }

// temp();

// Ex -2
// let age = 26;
// let obj = {
//     name : "Lakshay",
//     age : 22,
//     getData : () => {
//         console.log(this.age);
//     }
// }
// obj.getData();

//Ex -3 //still refers to global object 
let name = "Lol";
let obj = {
    name : "Lakshay",
    data : {
        getData : ()=>{
            console.log(this);
        }
    }
}
obj.data.getData();