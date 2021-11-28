import fs from 'fs-extra';
import path from "path";

/**
 * 合并自定义图标库
 * @param svgPath
 * @param prefix
 */
export function mergeCustomIcons(svgPath, prefix = true) {

  const svgFiles = walk(path.resolve('./icons'));
  svgFiles.forEach(svg => {
    const [svgFile, fileName, dir] = svg;
    fs.copySync(svgFile, svgPath + (prefix ? dir + '_' : '') + fileName)
  })

}


const walk = function (dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    // 排除static静态目录（可按你需求进行新增）
    if (file === 'static') {
      return false
    }
    file = dir + path.sep + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file))
    } else {
      if (path.extname(file) === '.svg') {
        results.push([path.resolve(file), path.basename(file), path.dirname(file).split(path.sep).pop()])
      }
    }
  })
  return results
}
