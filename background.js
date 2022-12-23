const body = document.querySelector('body');
const imageBasePath = 'images/Photobox/';
const imageListFile = 'images.json';
const updateInterval = 1000;
let lastUpdated = 0;
let images = [];
let imagesInDoc = [];

function updateImageList(callback) {
    let request = new XMLHttpRequest();
    request.open('GET', imageListFile, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            images = request.responseText.split(",");
            callback();
        } else {
            callback();
        }
    };
    request.onerror = function () {
        callback();
    };
    request.send();
}

function removeInactiveImages() {
    let inactiveImages = document.querySelectorAll('.image-element.active:not(:last-child)');
    inactiveImages.forEach(image => {
        body.removeChild(image);
    });
}

function showImage(image) {
    if (image.endsWith('.jpg') || image.endsWith('.jpeg') || image.endsWith('.JPG') || image.endsWith('.JPEG')) {
        console.log('showing', image);
        let element = document.createElement('div');
        let img = document.createElement('img');

        removeInactiveImages();

        element.setAttribute('class', 'image-element');
        element.setAttribute('style', 'background-image: url(' + imageBasePath + image + ');');

        body.appendChild(element);
        setTimeout(function () {
            element.classList.add('active');
        }, 300);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkImageForUpdate() {
    let imagesInDocLength = Object.keys(imagesInDoc).length;

    if (imagesInDocLength != images.length) {
        for (let i = 0; i < images.length; i++) {
            if (!imagesInDoc[images[i]]) {
                showImage(images[i]);
                imagesInDoc[images[i]] = true;
            }
        }
        lastUpdated = 0;
    } else {
        if (lastUpdated > 15) {
            let img = images[getRandomInt(0, images.length - 1)];
            console.log('random image', img);
            showImage(img);
            lastUpdated = 0;
        } else {
            lastUpdated++;
        }
    }

    setTimeout(function () {
        updateImageList(checkImageForUpdate);
    }, updateInterval);
}

updateImageList(checkImageForUpdate);