//Change navbar design of scroll

window.addEventListener('scroll', ()=>{
    
    document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
})

//Mint Link goes to mint button
const mintlink = document.getElementById("mintlink");
mintlink.addEventListener('click', function(){
    document.getElementById("mint-button-container").click()
});
const mintlinki = document.getElementById("mintlinki");
mintlinki.addEventListener('click', function(){
    document.getElementById("mint-button-container").click()
});

// Show/hide nav bar
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
closeBtn.addEventListener('click', ()=>{
    menu.style.display = "none"
    menuBtn.style.display = "inline-block"
    closeBtn.style.display = "none"
})
