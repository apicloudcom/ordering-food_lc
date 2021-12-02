import fs from "fs-extra";
import path from 'path';
import {
  copyTemplate, createEOT, createHTML,
  createSVG, createSvgSymbol, createTTF,
  createTypescript, createWOFF, createWOFF2
} from "svgtofont/lib/utils.js";

import {generateIconsSource, generateReactIcons} from "svgtofont/lib/generate.js";
import image2uri from "image2uri";

import color from 'colors-cli';
import camelcase from "camelcase";


function svg2font(svgPath, fontPath, fontName) {

  svgtofont({
    src: svgPath, // svg path
    dist: fontPath, // output path
    // styleTemplates: path.resolve(rootPath, "styles"), // file templates path (optional)
    css: true,
    emptyDist: true,
    fontName, // font name
    startUnicode: 0xea01, // unicode start number
    classNamePrefix: '',
    svgicons2svgfont: {
      fontHeight: 1000,
      normalize: true,
    },
    // website = null, no demo html files
    website: {
      title: "AVM-UI ICON",
      // Must be a .svg format image.
      logo: path.resolve(svgPath, "apicloud_logo.svg"),
      version: '0.1',
      meta: {
        description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
        keywords: "AVM-UI,TTF,EOT,WOFF,WOFF2,SVG"
      },
      description: `暂时没啥好描述的，还在持续迭代中。`,
      corners: {
        url: 'http://git.yonyou.com/APICloud-CF/AVM-UI',
        width: 62, // default: 60
        height: 62, // default: 60
        bgColor: '#dc3545' // default: '#151513'
      },
      links: [

        {
          title: "Font Class",
          url: "index.html"
        },
        {
          title: "Unicode",
          url: "unicode.html"
        }
      ],
      footerInfo: `Licensed under MIT. `
    }
  }).then(() => {
    console.log('done!');
  });

}

export default svg2font;


async function svgtofont(options) {


  options.dist = options.dist || path.join(process.cwd(), 'fonts');
  options.src = options.src || path.join(process.cwd(), 'svg');
  options.startUnicode = options.startUnicode || 0xea01;
  options.svg2ttf = options.svg2ttf || {};
  options.fontName = options.fontName || 'iconfont';
  options.svgicons2svgfont = options.svgicons2svgfont || {};
  options.svgicons2svgfont.fontName = options.fontName;
  options.classNamePrefix = options.classNamePrefix || options.fontName;
  const fontSize = options.css && typeof options.css !== 'boolean' && options.css.fontSize ? options.css.fontSize : '16px';
  // If you generate a font you need to generate a style.
  if (options.website && !options.css) options.css = true;

  try {
    if (options.emptyDist) {
      if (options.dist != null) {
        await fs.emptyDir(options.dist);
      }
    }
    // Ensures that the directory exists.
    if (options.dist != null) {
      await fs.ensureDir(options.dist);
    }
    const unicodeObject = await createSVG(options);

    let cssString = [];
    let cssToVars = [];
    let cssIconHtml = [];
    let unicodeHtml = [];
    let symbolHtml = [];
    let componentList = [];
    const prefix = options.classNamePrefix || options.fontName;

    Object.keys(unicodeObject).forEach(name => {
      const _code = unicodeObject[name];
      const pascalName = camelcase(name, {pascalCase: true});
      let symbolName = options.classNamePrefix + '-' + name
      let iconPart = symbolName + '">';
      let encodedCodes = _code.charCodeAt(0);
      componentList.push(`export class ${pascalName} extends Icon {code = ${encodedCodes};}`);


      if (options.useNameAsUnicode) {
        symbolName = name;
        iconPart = prefix + '">' + name;
        encodedCodes = _code.split('').map(x => x.charCodeAt(0)).join(';&amp;#');
      } else {
        cssString.push(`.${symbolName}:before { content: "\\${encodedCodes.toString(16)}"; }\n`);
        cssToVars.push(`$${symbolName}: "\\${encodedCodes.toString(16)}";\n`);
      }

      cssIconHtml.push(`<li class="class-icon"><i class="${iconPart}</i><p class="name">${pascalName}</p></li>`);
      unicodeHtml.push(`<li class="unicode-icon"><span class="iconfont">${_code}</span><h4>${pascalName}</h4><span class="unicode">&amp;#${encodedCodes};</span></li>`);
      symbolHtml.push(`
        <li class="symbol">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="${options.fontName}.symbol.svg#${symbolName}"></use>
          </svg>
          <h4>${symbolName}</h4>
        </li>
      `);
    });

    await createComponentCode(componentList);

    const ttf = await createTTF(options);
    await createEOT(options, ttf);
    await createWOFF(options, ttf);
    await createWOFF2(options, ttf);
    await createSvgSymbol(options);

    if (options.css) {
      const styleTemplatePath = options.styleTemplates || (!options.useNameAsUnicode ? path.resolve(path.join('src', 'styles')) : path.resolve(path.join('src', 'ligature-styles')))
      ;
      await copyTemplate(styleTemplatePath, options.dist, {
        fontname: options.fontName,
        cssString: cssString.join(''),
        cssToVars: cssToVars.join(''),
        fontSize: fontSize,
        timestamp: new Date().getTime(),
        prefix,
        _opts: typeof options.css === 'boolean' ? {} : {...options.css}
      });
    }


    if (options.typescript) {
      await createTypescript({...options, typescript: options.typescript})
    }

    if (options.website) {
      const pageName = ['font-class', 'unicode', 'symbol'];
      let fontClassPath = path.join(options.dist, 'index.html');
      let unicodePath = path.join(options.dist, 'unicode.html');
      let symbolPath = path.join(options.dist, 'symbol.html');
      // setting default home page.
      // @ts-ignore
      const indexName = pageName.includes(options.website.index) ? pageName.indexOf(options.website.index) : 0;
      pageName.forEach((name, index) => {
        const _path = path.join(options.dist, indexName === index ? 'index.html' : `${name}.html`);
        if (name === 'font-class') fontClassPath = _path;
        if (name === 'unicode') unicodePath = _path;
        if (name === 'symbol') symbolPath = _path;
      });
      // default template


      options.website.template = options.website.template || path.resolve(path.join('src', 'website', 'index.ejs'));
      // template data
      const tempData = {
        meta: null,
        links: null,
        corners: null,
        description: null,
        footerInfo: null,
        ...options.website,
        fontname: options.fontName,
        classNamePrefix: options.classNamePrefix,
        _type: 'font-class',
        _link: `${(options.css && typeof options.css !== 'boolean' && options.css.fileName) || options.fontName}.css`,
        _IconHtml: cssIconHtml.join(''),
        _title: options.website.title || options.fontName
      };
      // website logo
      if (options.website.logo && fs.pathExistsSync(options.website.logo) && path.extname(options.website.logo) === '.svg') {
        tempData.logo = fs.readFileSync(options.website.logo).toString();
      }
      // website favicon
      if (options.website.favicon && fs.pathExistsSync(options.website.favicon)) {
        tempData.favicon = image2uri(options.website.favicon);
      } else {
        tempData.favicon = '';
      }

      const classHtmlStr = await createHTML(options.website.template, tempData);
      fs.outputFileSync(fontClassPath, classHtmlStr);
      console.log(`${color.green('SUCCESS')} Created ${fontClassPath} `);

      tempData._IconHtml = unicodeHtml.join('');
      tempData._type = 'unicode';
      const unicodeHtmlStr = await createHTML(options.website.template, tempData);
      fs.outputFileSync(unicodePath, unicodeHtmlStr);
      console.log(`${color.green('SUCCESS')} Created ${unicodePath} `);

      tempData._IconHtml = symbolHtml.join('');
      tempData._type = 'symbol';
      const symbolHtmlStr = await createHTML(options.website.template, tempData);
      fs.outputFileSync(symbolPath, symbolHtmlStr);
      console.log(`${color.green('SUCCESS')} Created ${unicodePath} `);
    }

    if (options.outSVGPath) {
      const outPath = await generateIconsSource(options);
      console.log(`${color.green('SUCCESS')} Created ${outPath} `);
    }
    if (options.outSVGReact) {
      const outPath = await generateReactIcons(options);
      console.log(`${color.green('SUCCESS')} Created React Components. ${outPath}`);
    }

  } catch (error) {
    console.log('SvgToFont:CLI:ERR:', error);
  }
}


async function createComponentCode(componentList) {
  componentList.unshift(fs.readFileSync('../src.tsx'));
  await fs.writeFileSync(path.resolve('../icon.tsx'), componentList.join('\n'));
}
