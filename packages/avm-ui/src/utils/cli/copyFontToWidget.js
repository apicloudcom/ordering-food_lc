const {widgetDir} = require('../../../avm-ui.config.json');
const {fontName, fontPath} = require('../../../src/components/icon/_gen/icon.config.json');
const fs = require('fs');
const {resolve} = require('path');

const fontFilePath = 'res';//相对于 widget 目录
// 1. 移动 font 文件
fs.copyFileSync(resolve(`./src/components/icon/_gen/${fontPath}/${fontName}.ttf`), resolve(widgetDir, fontFilePath, `${fontName}.ttf`));
//TODO 2. 写config.xml

console.log("如是第一次使用或者有新字体加入，请添加以下代码到 config.xml ，并且提交包文件到云端，重新编译自定义Loader，使资源生效。")
console.log(`<preference name="font" family="${fontName}" value="widget/res/${fontName}.ttf"/>`)


