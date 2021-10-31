const targetEle = document.querySelector(".targetEle");
const getJoke = document.querySelector(".getJoke");


//using promises

// function getJokes() {
//     fetch("https://icanhazdadjoke.com/", {
//         headers: {
//             Accept: "application/json"
//         }
//     }).then((res) => res.json())
//         .then((data) => targetEle.innerHTML = data.joke)
//         .catch((err) => console.log("err"));
// }


//Using async await
async function getJokes(){
    try{
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        const data = await res.json();
        targetEle.innerHTML = data.joke;

    }catch(err){
        console.log(err);
    }
}

getJoke.addEventListener("click", getJokes);
getJokes();