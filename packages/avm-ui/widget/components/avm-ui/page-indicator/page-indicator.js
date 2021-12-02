import { c as classNames } from "../index/index2.js";
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var pageIndicator = "";
const classPrefix = `adm-page-indicator`;
const defaultProps = {
  color: "primary",
  direction: "horizontal"
};
class PageIndicator extends Component {
  install = () => {
    console.log("PageIndicator!");
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    const {
      direction,
      dotColor = "rgba(0, 0, 0, 0.2)",
      activeDotColor = "#1677ff",
      dotSize = "3px",
      activeDotSize = "13px",
      dotBorderRadius = "1px",
      activeDotBorderRadius = "1px",
      dotSpacing = "3px"
    } = props;
    const isHorizontal = direction === "horizontal";
    const dots = [];
    for (let i = 0; i < props.total; i++) {
      dots.push(/* @__PURE__ */ avm.h("div", {
        key: i,
        className: classNames(`${classPrefix}-dot`, {
          [`${classPrefix}-dot-active`]: props.current === i
        }),
        style: {
          background: props.current === i ? activeDotColor : dotColor,
          width: props.current === i ? isHorizontal ? activeDotSize : dotSize : dotSize,
          height: props.current === i ? !isHorizontal ? activeDotSize : dotSize : dotSize,
          borderRadius: props.current === i ? activeDotBorderRadius : dotBorderRadius,
          marginRight: isHorizontal ? dotSpacing : 0,
          marginBottom: !isHorizontal ? dotSpacing : 0
        }
      }));
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix, `${classPrefix}-${props.direction}`, `${classPrefix}-color-${props.color}`)
    }, dots);
  };
}
export { PageIndicator as P };
