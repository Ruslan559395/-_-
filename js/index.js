"use strict";

//Блок меню

let logo = document.querySelector(".header__logo");
logo.ondragstart = () => false;

$(document).ready(function() {
  $('.icon-menu').click(function(event) {
    $('.icon-menu,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.menu__list a').click(function(event) {
    $('.icon-menu,.menu__body').removeClass('active');
    $('body').removeClass('lock');
  });
});


//блок карточка с картинками

let textMother = document.querySelector('.text-mother');
let textback = document.querySelector('.text-back');
let textbody = document.querySelector('.text-body')

let rad = -180;

textbody.onclick = function (event) {
  event.preventDefault();
  generator.next().value;
  textbody.style.transform = `rotateY(${rad}deg)`;
  rad += -180;
}

let generator = generateSequence();

function* generateSequence() {
  while (true) {
  yield textback.style.backgroundImage = "url(./img/Панорама/1476139345-wallpaper-panedia-com-1920x1200-3x-5760x1200-5760x1200-hd-wallpaper.jpg)";
   yield textMother.style.backgroundImage = 'url(./img/Панорама/1476177255-panoramic-wallpapers-105.jpg)';
  yield textback.style.backgroundImage = 'url(./img/Панорама/1476177249-panoramic-wallpapers-1.jpg)';
   yield textMother.style.backgroundImage = 'url(./img/Панорама/1476177256-panoramic-wallpapers-107.jpg)';
  yield textback.style.backgroundImage = 'url(./img/Панорама/1476177252-panoramic-wallpapers-101.jpg)';
    yield textMother.style.backgroundImage = 'url(./img/Панорама/1476177258-panoramic-wallpapers-109.jpg)';
  yield textback.style.backgroundImage = 'url(./img/Панорама/1476177253-panoramic-wallpapers-103.jpg)';
    yield textMother.style.backgroundImage = 'url(./img/Панорама/1476177259-panoramic-wallpapers-110.jpg)';
    if (textback.style.backgroundImage = 'url(./img/Панорама/1476177253-panoramic-wallpapers-103.jpg)') {
      textback.style.backgroundImage = 'url(./img/Панорама/1476139345-wallpaper-panedia-com-1920x1200-3x-5760x1200-5760x1200-hd-wallpaper.jpg)';
    }
    if (textMother.style.backgroundImage = 'url(./img/Панорама/1476177259-panoramic-wallpapers-110.jpg)') {
      textMother.style.backgroundImage = 'url(./img/Панорама/1476177255-panoramic-wallpapers-105.jpg)';
    }
  }
}

textMother.ondragstart = () => false;
textback .ondragstart = () => false;
