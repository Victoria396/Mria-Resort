// слайдер для табов
const slickPreset = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: "<img src='../img/prev.png' class='prev' alt='left'>",
    nextArrow: "<img src='../img/next.png' class='next' alt='right'>",
}

// слайдер для раздела всё включено
const slickInclusive = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: "<img src='../img/arrows-inclusive-l.png' class='prev' alt='left'>",
    nextArrow: "<img src='../img/arrows-inclusive-r.png' class='next' alt='right'>",
}

// слик слайдер
$(document).ready(function(){
    $('.choice__slider1').slick(slickPreset);
    $('.choice__slider2').slick(slickPreset);
    $('.choice__slider3').slick(slickPreset);
    $('.inclusive__slider').slick(slickInclusive);
});

// код для переключения табов
const choiceBtn = document.querySelectorAll(".choice__tab-item");
const choiceItem = document.querySelectorAll(".choice__tab-body-item");

choiceBtn.forEach(choiceOnTabClick);

function choiceOnTabClick(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('choice__tab-item-active')) {
            choiceBtn.forEach(function(item){
                item.classList.remove('choice__tab-item-active');
            });

            choiceItem.forEach(function(item){
                item.classList.remove('choice__tab-body-active');
            });

            currentBtn.classList.add('choice__tab-item-active');
            currentTab.classList.add('choice__tab-body-active');
        }
    }); 
}

document.querySelector('.choice__tab-item').click();

// код для открытия и закрытия меню
const menuOpen = document.querySelector(".header__menu");
const menuClose = document.querySelector(".header__menu-close");
const menu = document.querySelector(".menu__popup");
const header = document.querySelector("header");
const main = document.querySelector("main");

menuOpen.addEventListener("click", function(){
    main.classList.add('main-active');

    if (!menuOpen.classList.contains('menu__popup-active')) {
        header.classList.add('header-active');
        menu.classList.add('menu__popup-active');
        menu.classList.remove('menu__popup');
        
    }else {
        header.classList.remove('header-active');
        menu.classList.add('menu__popup');
        menu.classList.remove('menu__popup-active');
        
    }
});

menuClose.addEventListener("click", function(){
    menu.classList.add('menu__popup');
    menu.classList.remove('menu__popup-active')
    header.classList.remove('header-active');
    main.classList.remove('main-active');
});

// код для слайдера в меню 
let offset = 0;
const sliderLine = document.querySelector('.menu__popup-slider')

document.querySelector('.menu__popup-slider-dots1')
    .addEventListener('click', function() {
        sliderLine.style.right = offset + 0 + 'px';
    })
document.querySelector('.menu__popup-slider-dots2')
    .addEventListener('click', function() {
        sliderLine.style.right = offset + 420 + 'px';
    })
document.querySelector('.menu__popup-slider-dots3')
    .addEventListener('click', function() {
        sliderLine.style.right = offset + 840 + 'px';
    })

// код для меню и подменю 
const itemLevel1 = document.querySelectorAll(".menu__popup-level1");
const itemLevel2 = document.querySelectorAll(".menu__popup-list2");


itemLevel1.forEach(function(item) {
    item.addEventListener("click", function() {
        let btnLevel = item;
        let levelID = btnLevel.getAttribute("data-level1");
        let tabLevel = document.querySelector(levelID);

        if(!btnLevel.classList.contains("menu__popup-level1-active")) {
            itemLevel1.forEach(function(btnLevel) {
            btnLevel.classList.remove("menu__popup-level1-active");
        });

        itemLevel2.forEach(function(btnLevel) {
            btnLevel.classList.remove("menu__popup-list2-active");
        });

        btnLevel.classList.add("menu__popup-level1-active");
        tabLevel.classList.add("menu__popup-list2-active")
        }
    });
});

document.querySelector(".menu__popup-level1:nth-child(2)").click();
