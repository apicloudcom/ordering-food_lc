import icons from 'antd-mobile-icons';
import fs from 'fs-extra';

export default function buildSvgFromReact(outputPath) {

  fs.ensureDirSync(outputPath);
  fs.emptyDirSync(outputPath);

  const files = [];
  for (const iconName in icons) {
    const iconFactory = icons[iconName];
    const VNode = iconFactory({style: ''});
    const svgString = buildRNodeByVNode(VNode);
    const svgPath = `${outputPath}${iconName}.svg`;
    fs.writeFileSync(svgPath, svgString);
    files.push(svgPath);
  }
  return files;
}


/**
 * 从虚拟节点渲染真实节点
 * @param VNode
 */
function buildRNodeByVNode(VNode) {

  let RNode = '';
  DFS(VNode);
  return RNode;

  function DFS(VNode) {
    const {type, props: {children, ...normalProps}} = VNode;
    if (VNode.props.opacity !== 0) {// "忽略透明标签"
      RNode += `<${type} ${buildPropStringFromObject(normalProps)}>`;
      children && children.type && DFS(children);
      Array.isArray(children) && children.forEach(DFS);
      RNode += `</${type}>`;
    }
  }
}

function buildPropStringFromObject(normalProps) {
  const excludePropName = ['className', 'style', 'id']; // 不想要的属性名称
  const replaceValue = { // 需要校正的值
    '#FFFFFF': 'transparent',
    'currentColor': '#000',
    '1em': '300%'
  };

  return Object.entries(normalProps)
    .filter(([k]) => excludePropName.indexOf(k) === -1)
    .map(([k, v]) => `${k}="${replaceValue[v] || v}"`)
    .join(' ');
}