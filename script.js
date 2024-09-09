const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const searchBox = document.getElementById('searchbox'),
    heading = document.getElementById('heading'),
    noun = document.getElementById('noun'),
    linkParagraph = document.getElementById('link_paragraph'),
    font = document.getElementById('font'),
    notFoundText = document.getElementById('notFoundText'),
    notFoundParagraph = document.getElementById('notFoundParagraph');

const displayLogo = document.getElementById('display'),
    displayMoon = document.getElementById('displayMoon');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');    
    searchBox.classList.toggle('active');
    heading.classList.toggle('active');
    noun.classList.toggle('active');
    linkParagraph.classList.toggle('active');
    font.classList.toggle('active');
    notFoundParagraph.classList.toggle('active');
    notFoundText.classList.toggle('active');

    if(displayLogo.src.match('./images/sbook-removebg-preview.png')){
        displayLogo.src = './images/nochbook-removebg-preview.png'
    } else{
        displayLogo.src = './images/sbook-removebg-preview.png'
    }
    if(displayMoon.src.match('./images/smoon-removebg-preview (2).png')){
        displayMoon.src = './images/nmoon-removebg-preview (1).png'
    } else{
        displayMoon.src = './images/smoon-removebg-preview (2).png'
    }
}
// Font
const setFontFamily = (font) =>{
    if (font == 'sans-serif') {
        body.style.fontFamily = 'sans-serif'
    }else if (font == 'serif') {
        body.style.fontFamily = 'serif'
    }else{
        body.style.fontFamily = '"Roboto Mono", monospace;'
    }
 }
 font.addEventListener('change', (event) => {
    setFontFamily(event.target.value)
 })

// searchbar

// script.js
const searchInput = document.getElementById('searchInput'),
    searchIcon = document.getElementById('searchIcon'),
    pageOne = document.getElementById('pageOne'),
    notFound = document.getElementById('notFound'),
    emptyParagraph = document.getElementById('emptyParagraph')


searchIcon.onclick = function () {
    if (searchInput.value === 'keyboard') {
        pageOne.classList.add('active')
        searchBox.classList.remove('empty')
        emptyParagraph.classList.remove('empty')
        notFound.classList.remove('active')

    }else if(searchInput.value === ''){
        searchBox.classList.add('empty')
        emptyParagraph.classList.add('empty')
        pageOne.classList.remove('active')
        notFound.classList.remove('active')

    }else{
        notFound.classList.add('active')
        pageOne.classList.remove('active')
        searchBox.classList.remove('empty')
        emptyParagraph.classList.remove('empty')
    }
}