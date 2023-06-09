import './style.css';
import makeHome from './home';
import makeMenuPage from './menu';
import makeContactPage from './contact';

const makePage = () => {
    const body = document.querySelector('#content');

    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('homeBtn');
    menuBtn.classList.add('menuBtn');
    contactBtn.classList.add('contactBtn');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    body.appendChild(nav);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    body.appendChild(document.createElement('main'));
    body.appendChild(document.createElement('footer'));
}

const clearMain = () => {
    const main = document.querySelector('main');
    while(main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
}

makePage();

const homeBtn = document.querySelector('.homeBtn');
homeBtn.onclick = () => {
    clearMain();
    makeHome(document.querySelector('main'));
}

const menuBtn = document.querySelector('.menuBtn');
menuBtn.onclick = () => {
    clearMain();
    makeMenuPage(document.querySelector('main'));
}


const contactBtn = document.querySelector('.contactBtn');
contactBtn.onclick = () => {
    clearMain();
    makeContactPage(document.querySelector('main'));
} 

const main = document.querySelector('main');

console.log("hello blah");
makeHome(main);
//makeMenuPage(main);
//makeContactPage(main);