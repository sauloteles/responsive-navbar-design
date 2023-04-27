const btnHamburgue = document.getElementsByClassName('header__hamburgue')[0];
const menu = document.getElementsByClassName('header__nav')[0];

console.log();


const outMenu = ()=>{
        menu.classList.toggle('is--none');
}

btnHamburgue.addEventListener('click', outMenu);