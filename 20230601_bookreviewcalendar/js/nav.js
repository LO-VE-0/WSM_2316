// .nav-list에 .show-menu toggle

// HTML -> js
// // 1. id
// const navToggleDivid = document.getElementById("nav-toggle");
// // 2. class : 얘를 집단으로 묶음 (리스트) : 여러개일 수가 있기 때문
// const navToggleDivclass = document.getElementsByClassName("nav-toggle")[0];
// // 3. Tag
// const navToggleDivtag = document.getElementsByTagName("div")[0];
// // 4. CSS selector : 느리기 때문에 추천은 안됨
// const navToggleDivselector1 = document.querySelector("#nav-toggle");
// const navToggleDivselector2 = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDivselector3 = document.querySelectorAll("div")[0];
// // 5. XPath

const nav_toggle = document.getElementById("nav-toggle");
const navToggleIcon = nav_toggle.getElementsByTagName("i")[0];
console.log(navToggleIcon);
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleIcon);
console.log(navListUl);
nav_toggle.onclick = () => {
    // .nav-toggle 클릭하면
    // .nav-toggle icon : 햄버거 메뉴 <-> X
    // class 에서 bi-list -> bi-x-lg
    navToggleIcon.classList.toggle("bi-list");
    navToggleIcon.classList.toggle("bi-x-lg");

    navListUl.classList.toggle("show-menu");

}
// function sayHello() {
//     alert("안녕");
// }
// nav_toggle.onclick = () => sayHello();