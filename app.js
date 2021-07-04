'use strict';

const body = document.querySelector('body');
const rgbInput = document.querySelector('.rgb');
const hexInput = document.querySelector('.hex');


rgbInput.addEventListener('keyup', () => {
    const term = filterValue(rgbInput.value);

});

hexInput.addEventListener('keyup', () => {
    const term = filterValue(hexInput.value);

});





function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}


function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];

        // 6 digits
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }

    return `rgb(${+r},${+g},${+b})`;
}


function isValidColor(color) {
    const el = document.createElement('div');
    el.style.backgroundColor = color;
    return el.style.backgroundColor ? true : false;
};


function filterValue(value) {
    return value
        .split('')
        .filter(letter => letter.match(/[0-9]/i))
        .join('');
};