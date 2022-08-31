const slickPreset = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: "<img src='../img/prev.png' class='prev' alt='left'>",
    nextArrow: "<img src='../img/next.png' class='next' alt='right'>",
}

$(document).ready(function(){
    $('.choice__slider1').slick(slickPreset);
    $('.choice__slider2').slick(slickPreset);
    $('.choice__slider3').slick(slickPreset);
});


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