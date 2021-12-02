import { c as classNames } from "../index/index2.js";
var space = "";
const classPrefix = `adm-space`;
class Space extends Component {
  render = (props) => {
    const { direction = "horizontal" } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify
      })
    }, props.children.map((child) => {
      return child !== null && child !== void 0 && /* @__PURE__ */ avm.h("div", {
        className: `${classPrefix}-item`
      }, child);
    }));
  };
}
export { Space as S };
