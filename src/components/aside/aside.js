import './aside.css';

function aside(title, listItems) {
    const aside = document.createElement('aside');
    aside.className = 'main-aside';
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const ul = document.createElement('ul');
    listItems.forEach((liEl) => {
        const li = document.createElement('li');
        li.textContent = liEl;
        ul.appendChild(li);
    });
    const button = document.createElement('button');
    button.textContent = 'Get more...';

    aside.append(h2, ul, button);
    return aside;
}

export default aside;
