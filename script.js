document.body.classList.add('loading');
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    document.body.classList.remove('loading');
});

const navButton = document.querySelector(".navButton");
const nav = document.querySelector(".mobileNav");
const scrollToTop = document.querySelector(".scrollToTop");

navButton.addEventListener("click",(event) =>{
    event.stopPropagation();
    nav.classList.toggle("show");
});
nav.addEventListener("click",(event) =>{
    event.stopPropagation();
});
document.addEventListener("click",()=>{
    nav.classList.remove("show");
});

window.addEventListener("scroll",() =>{
    if (window.scrollY > 300){
        scrollToTop.classList.add("show");
    }
    else {
        scrollToTop.classList.remove("show");
    }
});

scrollToTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function flash(){
      const bar = document.getElementById("contact");
  bar.classList.add("flash");

  setTimeout(() => {
    bar.classList.remove("flash");
  }, 1000);
}