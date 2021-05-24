import add from './js/add';
import say from './js/say';
import banner from './components/banner/ban';
import aside from './components/aside/aside';
import printResults from './components/modal/modal';
import createAndPrintElement from './js/helperFns';

import picture from './img/img1.jpg';
import pngPic from './img/bart.png';

import './css/style.css'; //itraukiam css faila
// const path = require('path');
// console.log('path', path.resolve(__dirname));

const pic = document.createElement('img');
pic.src = picture;
document.body.prepend(pic);

const png = document.createElement('img');
png.src = pngPic;
document.body.append(png);
//galima kurti img tiesiai templage.html dalyje. Tuomet dist prie images nerodys to img kol nesutvarkysime.  Reikia naudoti spec sintakse  -->
// <img src = <%= require('./img/bart.png') %> alt="">

const bannerTitle = 'Best banner';
const bestBanner = banner(bannerTitle, 'Learn more about banners');

const guestsArr = ['Jonas Jonaitis', 'Michaelis Dzeksonas', 'Selas Selauskas', 'Rihana', 'Ariana Grande'];
const title = 'Sveciu sarasas:';
const mainAside = aside(title, guestsArr);
document.body.append(bestBanner);
document.body.append(mainAside);
const btn = mainAside.querySelector('button');
btn.addEventListener('click', () => {
    console.log(bannerTitle);
});

printResults();

const headingOne = createAndPrintElement('h3', 'Sveiki cia antraste 1', 'first-h3');
const paraOne = createAndPrintElement('p', 'Hello this is paragraph 1 with no class.');

document.body.append(headingOne, paraOne);
document.body.append(
    createAndPrintElement('h3', 'Sveiki cia antraste 2', 'second-h3'),
    createAndPrintElement('p', 'Hello this is paragraph 2 with a class.', 'second-para')
);
