"use strict";


// NAVIGATION++++++

document.addEventListener("DOMContentLoaded", function () {  
  const dropToggle = document.querySelector(".dropdown-toggle");  
  const dropDown = document.querySelector(".sub");  
  const navToggler = document.querySelector(".navbar_toggler");  
  const nav = document.querySelector("nav");  

  dropToggle.addEventListener("click", () => {  
    dropDown.classList.toggle("active");  
  });  

  navToggler.addEventListener("click", () => {  
    navToggler.classList.toggle("active");  
    nav.classList.toggle("open");  
  });  
});  
//======================1 sub menu========

// const dropToggle = document.querySelector(".dropdown-toggle");
// const dropDown = document.querySelector(".sub");

// dropToggle.addEventListener("click", () => {
//   dropDown.classList.toggle("active");
// });

// //======================2 hamburger Button=========

// const navToggler = document.querySelector(".navbar_toggler");
// const nav = document.querySelector("nav");
// navToggler.addEventListener("click", () => {
//   navToggler.classList.toggle("active");
//   nav.classList.toggle("open");
// });



//=========================3 menu active Background==========
// const li = document.getElementsByTagName("li");
// console.log(li);

// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", () => {
//     let j=0
//     while (j<li.length) {
//       li[j].classList.remove("active");
//     }
//     li[i].classList.add("active");
//   });
// }
//========================4 background Menu Items ==============

const li = document.getElementsByTagName('li');  

for (let i = 0; i < li.length; i++) {  
  li[i].addEventListener('click', () => {  
    // پاک کردن کلاس‌های قبلی با استفاده از حلقه while  
    let j = 0;  
    while (j < li.length) {  
      li[j].classList.remove("active"); // حذف کلاس 'selected' از تمام عناصر  
      j++;  
    }  
    // افزودن کلاس به عنصر کلیک شده  
    li[i].classList.add("active");  
  });  
}






// =====MAIN+++
// =====================Counter===================
let started = false; // To ensure the counters start only once  

// Create an array of targets and counter elements  
const targets = [1232, 64, 42, 15];  
const counters = [  
    document.getElementById('counter1'),  
    document.getElementById('counter2'),  
    document.getElementById('counter3'),  
    document.getElementById('counter4')  
];  

// Function to start counting  
function startCounting() {  
    targets.forEach((target, index) => {  
        let count = 0;  
        const counterElement = counters[index];  

        const interval = setInterval(() => {  
            if (count < target) {  
                count++;  
                counterElement.innerHTML = count + '<p>' + counterElement.querySelector('p').textContent + '</p>'; // Update the counter on screen  
            } else {  
                clearInterval(interval); // Stop the interval when the target is reached  
            }  
        }, 50); // Increase interval time for better visibility  
    });  
}  

// Function to check if the counter section is visible  
function checkVisibility() {  
    const section = document.querySelector('.counter-section');  
    const rect = section.getBoundingClientRect();  
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);  

    if (!started && rect.top <= viewHeight && rect.bottom >= 0) {  
        startCounting();  
        started = true; // Prevent the count from starting again  
    }  
}  

document.addEventListener("DOMContentLoaded", function() {  
    window.addEventListener('scroll', checkVisibility); // Check visibility on scroll  
});