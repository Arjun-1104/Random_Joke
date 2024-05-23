const pera = document.getElementById("pera");
const btn = document.getElementById("btn");

let getjoke = () =>{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(data => data.json())
    .then(item => pera.innerHTML = item.joke);
}

btn.addEventListener('click', getjoke);
getjoke();
