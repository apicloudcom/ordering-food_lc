import { c as classNames } from "../index/index2.js";
import { L as Loading } from "../loading/loading.js";
var button = "";
const classPrefix = `adm-button`;
class Button extends Component {
  install = () => {
    console.log("Button !");
  };
  render = (props) => {
    const disabled = props.disabled || props.loading;
    return /* @__PURE__ */ avm.h("button", {
      type: props.type,
      onClick: props.onClick,
      className: classNames(classPrefix, props.color ? `${classPrefix}-${props.color}` : null, {
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-fill-outline`]: props.fill === "outline",
        [`${classPrefix}-fill-none`]: props.fill === "none",
        [`${classPrefix}-mini`]: props.size === "mini",
        [`${classPrefix}-small`]: props.size === "small",
        [`${classPrefix}-large`]: props.size === "large",
        [`${classPrefix}-loading`]: props.loading
      }),
      disabled
    }, props.loading ? /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix}-loading-wrapper`
    }, /* @__PURE__ */ avm.h(Loading, {
      color: "currentColor"
    }), props.loadingText) : props.children);
  };
  test() {
    api.alert({
      msg: "Button"
    });
  }
}
export { Button as B };
