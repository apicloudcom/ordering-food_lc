import buildSvgFromReact from './src/buildSvgFromReact.js';
import svg2font from "./src/svg2font.js";
import {mergeCustomIcons} from "./src/mergeCustomIcons.js";

import fse from 'fs-extra';

const {fontName, svgPath, fontPath} = JSON.parse(fse.readFileSync('./icon.config.json').toString());


buildSvgFromReact(svgPath);
mergeCustomIcons(svgPath);
svg2font(svgPath, fontPath, fontName);