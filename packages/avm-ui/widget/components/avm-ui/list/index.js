import { c as classNames } from "../index/index2.js";
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var list = "";
const classPrefix$1 = `adm-list`;
const defaultProps = {
  mode: "default"
};
class List extends Component {
  install = () => {
    console.log("List!");
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$1, `${classPrefix$1}--${props.mode}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$1}--inner`
    }, props.children));
  };
}
const classPrefix = `adm-list-item`;
class ListItem extends Component {
  install = () => {
    console.log("ListItem!");
  };
  render = (props) => {
    const clickable = props.clickable ?? !!props.onClick;
    const arrow = props.arrow === void 0 ? clickable : props.arrow;
    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
    const content = /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content`
    }, props.prefix && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content-prefix`,
      style: { width: prefixWidth }
    }, props.prefix), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content-main`
    }, props.title && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix}-title`
    }, props.title), /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix}-children`
    }, props.children), props.description && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix}-description`
    }, props.description)), props.extra && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content-extra`
    }, props.extra), arrow && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content-arrow`
    }, arrow === true ? /* @__PURE__ */ avm.h("span", null, "\u53F3\u7BAD\u5934") : arrow));
    const listItemCls = classNames(`${classPrefix}`, clickable ? ["adm-plain-anchor"] : [], props.disabled && `${classPrefix}-disabled`);
    const listItemEvent = props.disabled ? void 0 : props.onClick;
    const element = clickable ? /* @__PURE__ */ avm.h("a", {
      className: listItemCls,
      onClick: listItemEvent
    }, content) : /* @__PURE__ */ avm.h("div", {
      className: listItemCls,
      onClick: listItemEvent
    }, content);
    return element;
  };
}
function attachPropertiesToComponent(component, properties2) {
  const ret = component;
  for (const key in properties2) {
    if (properties2.hasOwnProperty(key)) {
      ret[key] = properties2[key];
    }
  }
  return ret;
}
const properties = {
  Item: ListItem
};
var index = attachPropertiesToComponent(List, properties);
export { index as default };
