import { c as classNames } from "../index/index2.js";
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var steps = "";
const classPrefix$1 = `adm-step`;
class Step extends Component {
  install = () => {
    console.log("Step");
  };
  render = (props) => {
    const { title, description, status = "wait", direction, curIndex, totalLen } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$1}`, `${classPrefix$1}-${direction}`, `${classPrefix$1}-status-${status}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$1}-indicator`, `${classPrefix$1}-${direction}-indicator`)
    }, /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$1}-icon-container`)
    }, /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$1}-icon-dot`, `${classPrefix$1}-icon-dot-${status}`)
    })), curIndex !== totalLen - 1 && /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$1}-line`, `${classPrefix$1}-${direction}-line`, `${classPrefix$1}-line-${status}`)
    })), /* @__PURE__ */ avm.h("div", {
      className: classNames(`${classPrefix$1}-content`, `${classPrefix$1}-${direction}-content`)
    }, /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$1}-title`, `${classPrefix$1}-title-${status}`)
    }, title), !!description && /* @__PURE__ */ avm.h("span", {
      className: classNames(`${classPrefix$1}-description`, `${classPrefix$1}-${direction}-content-description`)
    }, description)));
  };
}
const classPrefix = `adm-steps`;
const defaultProps = {
  current: 0,
  direction: "horizontal"
};
class Steps extends Component {
  install = () => {
    console.log("Steps!");
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    const { direction, current, list = [] } = props;
    const stemItem = list.map((item, index) => {
      let { status, title, description } = item;
      if (index < current) {
        status = status || "finish";
      } else if (index === current) {
        status = status || "process";
      } else {
        status = status || "wait";
      }
      return /* @__PURE__ */ avm.h(Step, {
        status,
        title,
        description,
        direction,
        totalLen: list.length,
        curIndex: index
      });
    });
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix, `${classPrefix}-${direction}`)
    }, stemItem);
  };
}
export { Steps as S };
