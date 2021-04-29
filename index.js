const menus = document.getElementsByClassName("navBar__menu__menu");

const work = document.querySelector(".portfolio__menu");
const about = document.querySelector(".about");
const blog = document.querySelector(".blog");
const contact = document.querySelector(".contact__content");

const logo = document.querySelector(".navBar__logo")
const home = document.querySelector(".navBar");
const backToTop = document.querySelector("#footer__btn");

function gotoHome(){
    home.scrollIntoView();
    window.location.reload();
};

logo.addEventListener("click", ()=>{
    gotoHome();
});
backToTop.addEventListener("click", ()=>{
    gotoHome();

});

Array.from(menus).forEach((menu) =>
  menu.addEventListener("click", handleClick)
);

function handleClick(event) {
    const name = event.target.id;
    if(name == "work"){
        work.scrollIntoView();
        window.location.reload();
    }
    else if(name == "about"){
        about.scrollIntoView();
        window.location.reload();
    }
    else if(name == "blog"){
        blog.scrollIntoView();
        window.location.reload();
    }
    else if(name == "contact"){
        contact.scrollIntoView();
        window.location.reload();
    }
};
