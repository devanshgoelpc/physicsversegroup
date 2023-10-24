const numObjects = 20;
const space = document.querySelector('.objects');

for (let i = 0; i < numObjects; i++) {
    const object = document.createElement('div');
    object.classList.add('object');
    object.style.left = `${(i / numObjects) * 100}vw`;
    object.style.animationDuration = `${Math.random() * 6 + 5}s`;
    space.appendChild(object);
}

setTimeout(function () {
    const infoBox = document.querySelector('.info-box');
    infoBox.style.display = 'block';
}, 5000); // Display info box after 5 seconds
