import { c as classNames } from "../index/index2.js";
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var noticeBar = "";
const classPrefix = `adm-notice-bar`;
const defaultProps = {
  color: "default",
  delay: 2e3,
  speed: 50
};
class NoticeBar extends Component {
  install = () => {
    console.log("notice-bar!");
  };
  data = {
    visible: true
  };
  setVisible = (status) => {
    this.data.visible = status;
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    if (!this.data.visible)
      return null;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix, `${classPrefix}-${props.color}`)
    }, /* @__PURE__ */ avm.h("text", {
      className: classNames(`${classPrefix}-left`, `${classPrefix}-left-${props.color}`)
    }, "icon" in props ? props.icon : "\u9ED8\u8BA4icon"), /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix}-content`
    }, /* @__PURE__ */ avm.h("text", {
      className: classNames(`${classPrefix}-content-inner`, `${classPrefix}-content-inner-${props.color}`)
    }, props.content)), props.closeable && /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix}-right`
    }, props.closeable && /* @__PURE__ */ avm.h("text", {
      onClick: () => {
        this.setVisible(false);
        props.onClose?.();
      }
    }, "X")));
  };
}
export { NoticeBar as N };
