
(function ( $ ) { 
    "use strict";
        
// Initiate the wowjs animation library
new WOW().init();

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#mobile-nav-toggle').css('top', '1rem');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#mobile-nav-toggle').css('top', '1.5rem');
    }
  });

//carousel
var caruCarousel = $(".carousel");
var caruCarouselIndicators = $(".carousel-indicators");
caruCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    caruCarouselIndicators.append("<li data-target='#caruCarousel' data-slide-to='" + index + "' class='active'></li>") :
    caruCarouselIndicators.append("<li data-target='#caruCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
    $(this).children('.carousel-background').remove();
});

}( jQuery ));

// Active menu element
let menuElements = document.querySelectorAll(".nav-el");

menuElements.forEach(menuEl => {
    menuEl.addEventListener("click", ()=> {
      let activeMenuEl = document.querySelector(".active");
      activeMenuEl.classList.remove("active");
      menuEl.classList.add("active");
    })
});

// Mobile menu
let mobileBtn = document.querySelector("#mobile-nav-toggle"),
    mobileBtnIcon = document.querySelector("#mobile-nav-toggle i"),
    mobileMenu = document.querySelector(".mobile-menu-container"),
    flag = false,
    mobileMenuActivator = document.querySelectorAll(".mobile-menu-act");

mobileMenuActivator.forEach(el =>{
  el.addEventListener("click", ()=> {
    flag = !flag;

    if(flag){
      mobileMenu.classList.add("active");
      mobileBtnIcon.classList.remove("fa-bars");
      mobileBtnIcon.classList.add("fa-times");
      document.body.style.overflowY = "hidden";
    } else {
      mobileMenu.classList.remove("active");
      mobileBtnIcon.classList.remove("fa-times");
      mobileBtnIcon.classList.add("fa-bars");
      document.body.style.overflowY = "scroll";
    }
  })
})

//Form open/close logic
let formOpen = document.querySelectorAll(".form-open"),
    formClose = document.querySelectorAll(".form-close"),
    form = document.querySelector(".login-register"),
    loginForm = document.querySelector(".login-form"),
    registerForm = document.querySelector(".register-form");


formOpen.forEach(fs => {
  fs.addEventListener("click", ()=> {
    form.style.display = "flex";
  })
})

formClose.forEach(fc => {
  fc.addEventListener("click", ()=> {
    form.style.display = "none";
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  })
})



//Author popup show
let authorPopup = document.querySelector(".author-popup");

setTimeout(()=>{
  authorPopup.style.right = "0";
},3000)

setTimeout(()=>{
  authorPopup.style.right = "-100%";  
},6000)

// Dynamic content - instagram feed
let instaImgs = [
  "img/insta/1.jpg",
  "img/insta/2.jpg",
  "img/insta/3.jpg",
  "img/insta/4.jpg",
  "img/insta/5.jpg",
  "img/insta/6.jpg",
];

let instaFeed = document.querySelector(".insta-feed");

for (let i = 0; i <instaImgs.length; i++) {
  instaFeed.insertAdjacentHTML("afterbegin" , `<div class="col-md-2"><img src=${instaImgs[i]} alt="cv perfect insta" class="img-thumbnail w-100" loading="lazy"></div>`);
}

// Form validation

let regForm = document.querySelector("#reg-form");
let regFormName = document.querySelector("#name");
let regFormLast = document.querySelector("#last-name");
let regFormEmail = document.querySelector("#email");
let regFormPass = document.querySelector("#password");
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;



regForm.addEventListener("submit", (e)=> {

  let errors = 0;
  let errorMsgs = document.querySelectorAll(".error-text");
  errorMsgs.forEach(errMsg => {
    errMsg.innerHTML = " ";
  })

  if(regFormName.value == '' || regFormName.value == null) {
    document.querySelector(".name-error").innerHTML = "Name cant be empty";
    errors++;
  }

  if(regFormLast.value == '' || regFormName.value == null) {
    document.querySelector(".lastname-error").innerHTML = "Last name cant be empty";
    errors++;
  }

  if(regFormEmail.value == '' || regFormEmail.value == null) {
    document.querySelector(".email-error").innerHTML = "Email field cant be empty";
    errors++;
    } else if(!regFormEmail.value.match(validRegex)) {
    document.querySelector(".email-error").innerHTML = "Email is not valid!";
    errors++;
  }

  if(!regFormPass.value.match(passRegex)) {
    document.querySelector(".password-error").innerHTML = "Password must be between 6 to 15 characters which contain at least one numeric digit and a special character";
    errors++;
  } 
  
  if(errors > 0) {
    e.preventDefault();
  }

});
