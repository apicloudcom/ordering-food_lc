const svgtofont = require("svgtofont");
const path = require("path");

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
      version: 1,
      meta: {
        description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
        keywords: "AVM-UI,TTF,EOT,WOFF,WOFF2,SVG"
      },
      description: `暂时没啥好描述的，还在持续迭代中。`,
      // corners: {
      //   url: 'https://github.com/jaywcjlove/svgtofont',
      //   width: 62, // default: 60
      //   height: 62, // default: 60
      //   bgColor: '#dc3545' // default: '#151513'
      // },
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

module.exports = svg2font;