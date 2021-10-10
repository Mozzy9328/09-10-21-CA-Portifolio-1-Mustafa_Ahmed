/* 

NAV HAMBURGER 


*/
const hide = document.querySelectorAll(".hide")

const hamburgerMenu = document.querySelector(".hamburger-icon")

hamburgerMenu.addEventListener("click", () => {
for(let i = 0; i <hide.length; i++){
    let showNav = hide[i]
    showNav.classList.toggle("change");

}


})