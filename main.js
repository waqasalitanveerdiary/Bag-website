
let searchbox = document.querySelector('.search-box');
let searchicon = document.querySelector('#search-icon');
let search = document.querySelector('.search');
let timeout;

// js code when seach icon is click it open search icon for 5 seconds
searchicon.onclick = ()=>{
    searchbox.classList.toggle('active');

    // The below code will remove the searchbox when navbar is clicked
    navbar.classList.remove('active');

    if(searchbox.classList.contains('active')){
        starttimeout();
        search.addEventListener('input',starttimeout)
    }else{
        clearTimeout(timeout);
    }
}

function starttimeout(){
    clearTimeout(timeout);

    timeout = setTimeout(()=>{
        if(search.value===''){
            searchbox.classList.remove('active')
        }
    },5000);
}

// js code when windo is scrolling the header border-bottom is change

const header = document.querySelector('header');

function headerchange(){
    header.classList.toggle('active',window.scrollY>0)
}
window.addEventListener('scroll',headerchange);


// js code to show navbar though menu icon

const navbar = document.querySelector('.navbar');
const menuicon = document.querySelector('#menu-icon');

function navbaropener(){
    navbar.classList.toggle('active');

    // below code will navbar when seachbox is clicked
    searchbox.classList.remove('active');
}
menuicon.addEventListener('click',navbaropener);

// this code will remove the navbar and seachbox on scroll 

window.addEventListener('scroll',()=>{
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
})
