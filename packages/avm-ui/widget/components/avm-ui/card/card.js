import { c as classNames } from "../index/index2.js";
var card = "";
const classPrefix = `adm-card`;
class Card extends Component {
  render = (props) => {
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null;
      }
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix}-header`, props.headerClassName),
        style: props.headerStyle,
        onClick: props.onHeaderClick
      }, props.title.children ? props.title : /* @__PURE__ */ avm.h("text", {
        className: `${classPrefix}-header-title`
      }, props.title), props.extra ? props.extra : /* @__PURE__ */ avm.h("text", null, props.extra));
    };
    const renderBody = () => {
      if (!props.children) {
        return null;
      }
      console.log(props.children);
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix}-body`, props.bodyClassName),
        style: props.bodyStyle,
        onClick: props.onBodyClick
      }, props.children);
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix,
      onClick: props.onClick
    }, renderHeader(), renderBody());
  };
}
export { Card as C };
