'use strict';
import './modal.css';

let modal = document.createElement('div');
let backDrop = document.createElement('div');
const submitBtn = document.getElementById('modal-btn');

export default function printResults() {
    submitBtn.addEventListener('click', function () {
        addModal();
        addBackDrop();
    });

    backDrop.addEventListener('click', function () {
        removeModal();
        removeBackDrop();
    });

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'go-back') {
            removeModal();
            removeBackDrop();
        }
    });
}

function addModal() {
    modal.className = 'modal';
    const h2 = document.createElement('h2');
    h2.textContent = 'This is modal';
    const p = document.createElement('p');
    p.textContent = 'This is subheading for a modal';
    const button = document.createElement('button');
    button.textContent = 'Go back!';
    button.className = 'go-back';
    modal.append(h2, p, button);
    document.body.appendChild(modal);
}

function addBackDrop() {
    backDrop.className = 'back-drop';
    document.body.appendChild(backDrop);
}
function removeModal() {
    modal.classList.add('remove');
    modal.innerHTML = '';
}
function removeBackDrop() {
    backDrop.classList.add('remove');
}
