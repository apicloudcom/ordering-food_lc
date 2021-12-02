import { c as classNames } from "../index/index2.js";
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var badge = "";
const classPrefix = `adm-badge`;
const defaultProps = {
  color: "#FF411C"
};
class Badge extends Component {
  install = () => {
    console.log("Badge!");
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    const { content, color, children, isDot, right, top } = props;
    const badgeCls = classNames(classPrefix, {
      [`${classPrefix}--fixed`]: !!children,
      [`${classPrefix}--dot`]: isDot
    });
    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-wrap`
    }, children, /* @__PURE__ */ avm.h("text", {
      className: badgeCls,
      style: { backgroundColor: color, right: styleRight, top: styleTop }
    }, !isDot && content));
  };
}
export { Badge as B };
