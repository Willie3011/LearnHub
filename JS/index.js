const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('ul li');
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