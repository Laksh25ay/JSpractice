const targetEle = document.querySelector(".targetEle");
const getJoke = document.querySelector(".getJoke");



function getJokes() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    }).then((res) => res.json())
        .then((data) => targetEle.innerHTML = data.joke)
        .catch((err) => console.log("err"));
}

getJoke.addEventListener("click", getJokes);
getJokes();