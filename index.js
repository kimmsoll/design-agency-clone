const work = document.getElementById("work");
const about = document.getElementById("about");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");

const portfolio = document.querySelector(".portfolio__menu");
const aboutContents = document.querySelector(".about");
const blogImages = document.querySelector(".blog");
const contacts = document.querySelector(".contact__content");

work.addEventListener('click', ()=>{
portfolio.scrollIntoView();
});

about.addEventListener("click", ()=>{
    aboutContents.scrollIntoView();
});

blog.addEventListener("click",()=>{
    blogImages.scrollIntoView();
});

contact.addEventListener("click", ()=>{
    contacts.scrollIntoView({block:"center"});
});