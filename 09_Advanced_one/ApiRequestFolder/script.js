let name = document.querySelector("#name");
let userName = document.querySelector("#user-name");
let following = document.querySelector("#following");
let followers = document.querySelector("#followers");
let publicRepos = document.querySelector("#repos");
let pfp = document.querySelector(".profile-pic");
let btn = document.querySelector("#btn");
let randomBtn = document.querySelector("#random-btn");
//let getApi = function (repoOf) {
//    let requestUrl = `https://api.github.com/users/${repoOf}`;
//    const xhr = new XMLHttpRequest();
//    xhr.open("GET", requestUrl);
//    xhr.onreadystatechange = function () {
//        console.log(xhr.readyState);
//        if (xhr.readyState === 4) {
//            let data = JSON.parse(xhr.responseText);
//            console.log(data);
//            insertingData(data);
//        }
//    };
//    xhr.send();
//};
const randomUser = async function () {
    let requestUrl = `https://api.github.com/users`;
    const xhr = await fetch(requestUrl);
    let data = await xhr.json();
    let randoNumber = Math.floor(Math.random() * (data.length - 1 + 1) + 1);
    console.log(data);
    let user = data[randoNumber].login;
    getApi(user);
};
const getApi = async function (repoOf) {
    let requestUrl = `https://api.github.com/users/${repoOf}`;
    const xhr = await fetch(requestUrl);
    let data = await xhr.json();
    insertingData(data);
};

let insertingData = function (data) {
    pfp.setAttribute("src", data.avatar_url);
    userName.innerHTML = data.login;
    name.innerHTML = data.name;
    following.innerHTML = data.following;
    followers.innerHTML = data.followers;
    publicRepos.innerHTML = data.public_repos;
};
btn.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        let repoOfInput = document.querySelector("#repoOf");
        let repoOf = repoOfInput.value;
        if (repoOf !== "") {
            getApi(repoOf);
            repoOfInput.value = "";
            console.log("worked");
        } else {
            console.log("hdgjh");
        }
    },
    false
);
randomBtn.addEventListener("click", randomUser);
