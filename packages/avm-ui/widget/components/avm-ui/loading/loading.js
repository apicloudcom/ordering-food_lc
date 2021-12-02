var loading = "";
const classPrefix = `adm-loading`;
class Loading extends Component {
  render = (props) => {
    const { color = "default" } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix
    }, /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix}-${color}`
    }, "svg\u56FE\u5360\u4F4D"));
  };
}
export { Loading as L };
