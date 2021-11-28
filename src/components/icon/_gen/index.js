const buildSvgFromReact = require('./src/buildSvgFromReact');
const svg2font = require('./src/svg2font');
const mergeCustomIcons = require('./src/mergeCustomIcons');

const fontName = 'avm-icon';
const svgPath = './dist/svg/';
const fontPath = './dist/fonts/';

buildSvgFromReact(svgPath);
mergeCustomIcons(svgPath);
svg2font(svgPath, fontPath, fontName);