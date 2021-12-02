var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var mask = "";
function useShouldRender(active, forceRender, destroyOnClose) {
  const initialized = active;
  if (forceRender)
    return true;
  if (active)
    return true;
  if (!initialized)
    return false;
  return !destroyOnClose;
}
const classPrefix = `adm-mask`;
const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: "black",
  opacity: "default",
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ["click"]
};
class Mask extends Component {
  render = (p) => {
    const props = mergeProps(defaultProps, p);
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props.visible, props.forceRender, props.destroyOnClose);
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix,
      style: __spreadProps(__spreadValues({}, props.style), {
        background,
        display: props.visible ? "flex" : "none"
      })
    }, props.onMaskClick && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-aria-button`,
      role: "button",
      "aria-label": "Mask",
      onClick: props.onMaskClick
    }), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-content`,
      onClick: props.onMaskClick
    }, shouldRender && props.children));
  };
}
export { Mask as M };
