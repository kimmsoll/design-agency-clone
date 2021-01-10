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

work.addEventListener('click', ()=>{
portfolio.scrollIntoView();
window.location.reload();
});

about.addEventListener("click", ()=>{
    aboutContents.scrollIntoView();
    window.location.reload();
});

blog.addEventListener("click",()=>{
    blogImages.scrollIntoView();
    window.location.reload();
});

contact.addEventListener("click", ()=>{
    contacts.scrollIntoView({block:"center"});
    window.location.reload();
});

backToTop.addEventListener("click", ()=>{
    nav.scrollIntoView({block:"center"});
    window.location.reload();
});

home.addEventListener("click", ()=>{
    nav.scrollIntoView({block:"center"});
    window.location.reload();
});