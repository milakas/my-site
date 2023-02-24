//* Porfolio Section

//Стилизация кнопки "исходный код"
let gitLink = document.querySelectorAll('.portfolio__link');
for (let i = 0; i < gitLink.length; i++) {
  gitLink[i].classList.remove('portfolio__link_disabled');
  if (gitLink[i].hasAttribute('href')) continue;
  gitLink[i].classList.add('portfolio__link_disabled');
}

//Кнопка "смотреть еше"
let seeMoreBtn = document.querySelector('.portfolio__btn');
let hidden = document.querySelectorAll('.portfolio__card');
let showPerClick = 4;
if (document.documentElement.clientWidth < 991.98) {
  showPerClick = 3;
}
if (document.documentElement.clientWidth < 767.98) {
  showPerClick = 2;
}
//todo: пофиксить баг: количество скрытых карточек не адаптируется под изменение ширины экрана
for (let i = showPerClick; i < hidden.length; i++) {
  hidden[i].style.display = 'none';
}
//todo: пофиксить баг: не отображает карточку, когда showPerClick > скрытых карточек. баг выявлен при clientWidth < 991.98
seeMoreBtn.addEventListener('click', function () {
  showPerClick += showPerClick;
  if (showPerClick <= hidden.length) {
    for (let i = 0; i < showPerClick; i++) {
      hidden[i].style.display = 'block';
    }
  }
  seeMoreBtn.style.display = 'none';
});
