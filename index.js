const work = document.getElementById("work");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
const backToTop = document.getElementById("footer__btn");
const home = document.querySelector(".navBar__logo");

const portfolio = document.querySelector(".portfolio__menu");
const aboutContents = document.querySelector(".about");
const blogImages = document.querySelector(".blog");
const contacts = document.querySelector(".contact__content");
const nav = document.querySelector(".navBar");

function goto(place){
    place.scrollIntoView();
    window.location.reload();
}

work.addEventListener('click', ()=> {
    goto(portfolio);
});

about.addEventListener("click", ()=>{
    goto(aboutContents);
});

blog.addEventListener("click",()=>{
    goto(blogImages);
});

contact.addEventListener("click", ()=>{
goto(contacts);
});

backToTop.addEventListener("click", ()=>{
    goto(nav);
});

home.addEventListener("click", ()=>{
    goto(nav);
});