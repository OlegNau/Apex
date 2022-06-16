"use strict";
let navigationAndLogin = document.querySelector(".header__nav-and-login");
let headerToggle = document.querySelector(".header__toggle");
let navLink = document.querySelectorAll(".nav__link");

headerToggle.classList.remove("header__toggle_active");
navigationAndLogin.classList.remove("header__nav-and-login_active");

headerToggle.addEventListener("click", function () {
    headerToggle.classList.toggle("header__toggle_active");
    navigationAndLogin.classList.toggle("header__nav-and-login_active");
});

for (let i = 0; i < navLink.length; i++) {
    let navElement = navLink[i];
    navElement.addEventListener("click", function () {
        if (headerToggle.classList.contains("header__toggle_active")) {
            navigationAndLogin.classList.remove("header__nav-and-login_active");
            headerToggle.classList.remove("header__toggle_active");
        }
    });
}
