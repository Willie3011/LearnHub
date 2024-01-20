const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('ul li');
const faqs = document.querySelectorAll('.Faq-item');

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    const menuButton = document.querySelector('button i');
    menuButton.classList.toggle("bx-x")
})

li.forEach(item => {
    item.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
})

faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
        
    })
})