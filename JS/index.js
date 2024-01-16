const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('ul li');
menu.addEventListener("click", () => {
    nav.classList.toggle("active");
})

li.forEach(item => {
    item.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
})