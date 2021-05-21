import add from './js/add';
import say from './js/say';
import banner from './banner/ban';

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

const bestBanner = banner('Best banner', 'Learn more about banners');

document.body.append(bestBanner);
