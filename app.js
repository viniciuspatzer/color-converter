'use strict';

const body = document.querySelector('body');
const rgbInput = document.querySelector('.rgb');
const hexInput = document.querySelector('.hex');


rgbInput.addEventListener('keyup', () => {
    const color = formatRGB(rgbInput.value);
    const isColor = isValidColor(color);  // body.style.backgroundColor = hex;

    if (isColor) {
        const hex = RGBToHex(color);
        hexInput.value = hex;
    }
});

hexInput.addEventListener('keyup', () => {
    const color = formatHEX(hexInput.value);
    const isColor = isValidColor(color);  // body.style.backgroundColor = rgb;

    if (isColor) {
        const rgb = hexToRGB(color);
        rgbInput.value = rgb;
    }
});





function RGBToHex(rgb) {
    let [r, g, b] = rgbInput.value.split(',').filter(c => parseInt(c));

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
};

function formatRGB(text) {
    let [r, g, b] = text.split(',').filter(c => parseInt(c));
    return `rgb(${r}, ${g}, ${b})`;
};


function formatHEX(text) {
    return text.slice(0, 1) === '#' ? text : `#${text}`
};


function isValidColor(color) {
    body.style.backgroundColor = color;
    return body.style.backgroundColor ? true : false;
};