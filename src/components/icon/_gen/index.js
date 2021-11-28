import buildSvgFromReact from './src/buildSvgFromReact.js';
import svg2font from "./src/svg2font.js";
import {mergeCustomIcons} from "./src/mergeCustomIcons.js";

const fontName = 'avm-icon';
const svgPath = './dist/svg/';
const fontPath = './dist/fonts/';

buildSvgFromReact(svgPath);
mergeCustomIcons(svgPath);
svg2font(svgPath, fontPath, fontName);