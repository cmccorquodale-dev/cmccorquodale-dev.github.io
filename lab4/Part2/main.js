/*
Name: Cailum McCorquodale
File: index.html
INFT1206 – Web Development Fundamentals
Date: 28 July 2026
Description: Image gallery example
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const images = [ { filename: 'pic1.jpg', alt: 'Closeup of a human eye' }, { filename: 'pic2.jpg', alt: 'Rock formation resembling a wave' }, { filename: 'pic3.jpg', alt: 'Purple and white pansies' }, { filename: 'pic4.jpg', alt: 'Section of an Egyptian wall painting' }, { filename: 'pic5.jpg', alt: 'Large butterfly on a leaf' }
];
const baseUrl = 'images/';
for (const image of images) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", baseUrl + image.filename);
    newImage.setAttribute("alt", image.alt);
    newImage.setAttribute('tabindex', '0');
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (e) => {
        updateDisplayedImage(image.filename, image.alt);
    });
    newImage.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
        updateDisplayedImage(e.target);
        }
    });
}   
function updateDisplayedImage(activeImage) {
  displayedImage.setAttribute('src', activeImage.getAttribute('src'));
  displayedImage.setAttribute('alt', activeImage.getAttribute('alt'));
}
btn.addEventListener('click', () => {
  const isDark = btn.classList.contains('dark');

  if (isDark) {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0)';
  }
    btn.classList.toggle('dark');
});