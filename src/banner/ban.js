import './ban.css';

function banner(title, btnText) {
    const sectionBanner = document.createElement('section');
    sectionBanner.className = 'banner';
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const p = document.createElement('p');
    p.textContent = 'This is very good banner';
    const btn = document.createElement('button');
    btn.textContent = btnText;
    sectionBanner.append(h2, p, btn);

    return sectionBanner;
}

export default banner;
