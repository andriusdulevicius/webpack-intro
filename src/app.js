import add from './js/add';
import say from './js/say';
import banner from './components/banner/ban';
import aside from './components/aside/aside';
import printResults from './components/modal/modal';

import './css/style.css'; //itraukiam css faila
// const path = require('path');
// console.log('path', path.resolve(__dirname));

console.log('webpack intro index.js');

console.log('add(1,2,3): ', add(1, 2, 3));
console.log('say ', say('nice day'));

const obj = {
    age: 30,
    name: 'Antanas',
};

const copy = { ...obj, gender: 'male' };

console.log('copy : ', copy);
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
