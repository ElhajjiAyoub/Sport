//Getting elements

//accounts btns
const accountBtns = document.getElementById("account-btns");
const openBtnsAccount = document.getElementById("user-icon");
const closeAccountBtns = document.querySelector(".close-account-btns");

//open thes btns signe in and sign up
openBtnsAccount.addEventListener("click", (e) => {
    accountBtns.classList.add("navbare-btns-active");
});

//hidden the btns sign in and sign up
closeAccountBtns.addEventListener("click", (e) => {
    accountBtns.classList.remove("navbare-btns-active");
});

//menu
const navbareLinks = document.getElementById("navbare-links");
const openMenu = document.getElementById("menu-icon");
const closeMenu = document.querySelector(".close-menu");
const links = document.querySelectorAll(".navbare-links .link");

//open menu
openMenu.addEventListener("click", () => {
    navbareLinks.classList.add("navbare-links-active");
});

//hidden menu
closeMenu.addEventListener("click", (e) => {
    navbareLinks.classList.remove("navbare-links-active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        navbareLinks.classList.remove("navbare-links-active");
    });
});
