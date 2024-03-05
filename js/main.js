// Menu
let button = document.querySelector(".header__open");
let nav = document.querySelector('#header__nav');

button.onclick = () => {
  if (nav.classList.toggle('nav-open')){
    nav.style.display = "inline-block";
    button.style.position = "fixed";
    button.style.zIndex = "3";
  }
  else{
    nav.style.display = "none";
    button.style.position = "relative";
  }       
}

// Section-hero
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
  },
  allowTouchMove: false,
});

//We-Worked

document.querySelectorAll('.list-Worked__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(event){
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.We-Worked__content').forEach(function(tabContent){
      tabContent.classList.remove('We-Worked__content-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('We-Worked__content-active')
  })
})

// Questions

document.querySelectorAll('.Questions__button').forEach(function(Btn){
  Btn.addEventListener('click', function(event){
    const path = event.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.toggle('Questions__otvet-active')
  })
})
