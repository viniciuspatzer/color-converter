'use strict';

const body = document.querySelector('body');
const rgbInput = document.querySelector('.rgb');
const hexInput = document.querySelector('.hex');


rgbInput.addEventListener('keyup', () => {
    const color = formatRGB(rgbInput.value);
    const isColor = isValidColor(color);
    console.log(color);
    if (isColor) {
        const hex = RGBToHex(color);
        body.style.backgroundColor = color;
        hexInput.value = hex;
    }
});


hexInput.addEventListener('keyup', () => {
    const color = formatHEX(hexInput.value);
    const isColor = isValidColor(color);

    if (isColor) {
        const rgb = hexToRGB(color);
        body.style.backgroundColor = color;
        rgbInput.value = rgb;
    }
});


function RGBToHex(rgb) {
    let [r, g, b] = rgb
        .split('')
        .filter(c => !isNaN(c) || c === ',')
        .join('')
        .split(',');

    r = Number(r).toString(16);
    g = Number(g).toString(16);
    b = Number(b).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
};


function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;

    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];

    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }

    return `rgb(${+r},${+g},${+b})`;
};


function formatRGB(text) {
    let [r, g, b] = text
        .split('')
        .filter(c => !isNaN(c) || c === ',')
        .join('')
        .split(',');

    return `rgb(${r}, ${g}, ${b})`;
};


function formatHEX(text) {
    return text.slice(0, 1) === '#' ? text : `#${text}`
};


function isValidColor(color) {
    const el = document.createElement('div');
    el.style.backgroundColor = color;
    return el.style.backgroundColor ? true : false;
};