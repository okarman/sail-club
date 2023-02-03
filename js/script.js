let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let articleSections = document.querySelectorAll('.blog-article.short');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');
let previewList = document.querySelectorAll('.preview-list a');
let mainImage = document.querySelector('.active-photo');

for (let activeImage of previewList) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;
        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    }
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
}

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
}

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
}

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
}

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    }
}

cardViewButtonGrid.onclick = function () {
    cards.classList.add('list');
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
}

cardViewButtonList.onclick = function () {
    cards.classList.remove('list');
    cardViewButtonList.classList.add('active');
    cardViewButtonGrid.classList.remove('active');
}
