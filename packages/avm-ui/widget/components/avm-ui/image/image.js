var __defProp = Object.defineProperty;
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
import { m as mergeProps } from "../with-default-props/with-default-props.js";
var image = "";
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}
var outlineUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAxOTkwOTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS41NTIgMTUxLjU1MnY3MjAuODk2aDcyMC44OTZWMTUxLjU1MkgxNTEuNTUyeiBtLTMyLjc2OC02NS41MzZoNzg2LjQzMmM5LjU1Njk5MiAwIDE3LjQwOCAzLjA3MiAyMy41NTIgOS4yMTZzOS4yMTYgMTMuOTk1MDA4IDkuMjE2IDIzLjU1MnY3ODYuNDMyYzAgOS41NTY5OTItMy4wNzIgMTcuNDA4LTkuMjE2IDIzLjU1MnMtMTMuOTk1MDA4IDkuMjE2LTIzLjU1MiA5LjIxNkgxMTguNzg0Yy05LjU1Njk5MiAwLTE3LjQwOC0zLjA3Mi0yMy41NTItOS4yMTZzLTkuMjE2LTEzLjk5NTAwOC05LjIxNi0yMy41NTJWMTE4Ljc4NGMwLTkuNTU2OTkyIDMuMDcyLTE3LjQwOCA5LjIxNi0yMy41NTJzMTMuOTk1MDA4LTkuMjE2IDIzLjU1Mi05LjIxNnogbTI2Mi4xNDQgMTk2LjYwOGM0My42OTEwMDggMCA2NS41MzYgMjEuODQ0OTkyIDY1LjUzNiA2NS41MzZzLTIxLjg0NDk5MiA2NS41MzYtNjUuNTM2IDY1LjUzNi02NS41MzYtMjEuODQ0OTkyLTY1LjUzNi02NS41MzYgMjEuODQ0OTkyLTY1LjUzNiA2NS41MzYtNjUuNTM2ek0xNzcuMTUyIDg4NS43NmwtNTEuMi0zOS45MzYgMjIxLjE4NC0yODguNzY4YzE2LjM4NC0yMS4xNjMwMDggMzguMDU5MDA4LTMzLjQ1MTAwOCA2NS4wMjQtMzYuODY0IDI2Ljk2NDk5Mi0zLjQxMjk5MiA1MS4wMjg5OTIgMi43MzEwMDggNzIuMTkyIDE4LjQzMmwxMjggMTAzLjQyNGM3LjUwODk5MiA1LjQ2MDk5MiAxNS41MzEwMDggNy42OCAyNC4wNjQgNi42NTZTNjUyLjI4OCA2NDMuNzU1MDA4IDY1OC40MzIgNjM2LjkyOGwyMjEuMTg0LTI3Ni40OCA1MS4yIDQwLjk2LTIyMS4xODQgMjc2LjQ4Yy0xNy4wNjcwMDggMjEuMTYzMDA4LTM5LjA4MzAwOCAzMy4xMDg5OTItNjYuMDQ4IDM1Ljg0LTI2Ljk2NDk5MiAyLjczMTAwOC01MS4wMjg5OTItNC4wOTYtNzIuMTkyLTIwLjQ4TDQ0NC40MTYgNTkwLjg0OGMtNy41MDg5OTItNS40NjA5OTItMTUuNTMxMDA4LTcuNjgtMjQuMDY0LTYuNjU2cy0xNS41MzEwMDggNS4yOTEwMDgtMjAuOTkyIDEyLjhMMTc3LjE1MiA4ODUuNzZ6IiBwLWlkPSIyOTYxIiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PC9zdmc+";
var warnUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAyMDMxMzYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzNiA2NTkuMzQ0bDI1OS42NjctMjYwLjIxOWMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDg2LjEgODYuMiAzNy43NS0zNy43OWE3Ljg4OCA3Ljg4OCAwIDAgMSAxLjUwOC0yLjExbDE0NC4zLTE0NC4zYzIuOTU4LTIuOTU4IDcuNzM3LTMuMDkzIDEwLjg2Mi0wLjQwNyAwLjIzNSAwLjE4NyAwLjQ2MyAwLjM5IDAuNjggMC42MDdsMzYuOCAzNi44YzAuMjc0IDAuMjY1IDAuNTI0IDAuNTQ1IDAuNzUxIDAuODM3bDQyLjY0NyA0Mi42OTYgMC4wMDYgMC4wMDdhOCA4IDAgMCAxLTAuMDIgMTEuMzE0bC0zNi44NzYgMzYuNzQ3YTggOCAwIDAgMS0xMS4zMDctMC4wMTRsLTM3LjcwMy0zNy43NDctMTgzLjc5OCAxODMuOTZjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBsLTg2LjEtODYuMkwxMzYgNzU1LjUxMlY3OTJoMzM0YTggOCAwIDAgMSA4IDh2NTZhOCA4IDAgMCAxLTggOEg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTkyYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDc4NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYyMzJhOCA4IDAgMCAxLTggOGgtNTZhOCA4IDAgMCAxLTgtOFYyMzJIMTM2djQyNy4zNDR6TTI3NCA0MzJjLTM1LjM0NSAwLTY0LTI4LjY1NS02NC02NHMyOC42NTUtNjQgNjQtNjQgNjQgMjguNjU1IDY0IDY0LTI4LjY1NSA2NC02NCA2NHogbTQ3MCA0OGMxMTkuMyAwIDIxNiA5Ni43IDIxNiAyMTZzLTk2LjcgMjE2LTIxNiAyMTYtMjE2LTk2LjctMjE2LTIxNiA5Ni43LTIxNiAyMTYtMjE2eiBtMTA3LjUgMzIzLjVDODgwLjIgNzc0LjggODk2IDczNi42IDg5NiA2OTZjMC00MC42LTE1LjgtNzguOC00NC41LTEwNy41QzgyMi44IDU1OS44IDc4NC42IDU0NCA3NDQgNTQ0Yy00MC42IDAtNzguOCAxNS44LTEwNy41IDQ0LjVDNjA3LjggNjE3LjIgNTkyIDY1NS40IDU5MiA2OTZjMCA0MC42IDE1LjggNzguOCA0NC41IDEwNy41QzY2NS4yIDgzMi4yIDcwMy40IDg0OCA3NDQgODQ4YzQwLjYgMCA3OC44LTE1LjggMTA3LjUtNDQuNXpNNzEyIDc3NmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzIgMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMi0xNy42NzMgMC0zMi0xNC4zMjctMzItMzJ6IG0xMi02NGMtNC40IDAtOC0zLjYtOC04VjU5MmMwLTQuNCAzLjYtOCA4LThoNDBjNC40IDAgOCAzLjYgOCA4djExMmMwIDQuNC0zLjYgOC04IDhoLTQweiIgcC1pZD0iMzIwNCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg==";
const classPrefix = `adm-image`;
const defaultProps = {
  fit: "fill",
  placeholder: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix}-tip`
  }, /* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u4E2D..."), /* @__PURE__ */ avm.h("img", {
    src: outlineUrl
  })),
  fallback: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix}-tip`
  }, /* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u5931\u6557"), /* @__PURE__ */ avm.h("img", {
    src: warnUrl
  }))
};
class Image extends Component {
  install = () => {
    console.log("Image!");
    this.setLoaded(false);
    this.setFailed(false);
  };
  data = {
    loaded: false,
    failed: false
  };
  setLoaded = (status) => {
    this.data.loaded = status;
  };
  setFailed = (status) => {
    this.data.failed = status;
  };
  render = (props) => {
    props = mergeProps(defaultProps, props);
    let src = props.src;
    let srcSet = props.srcSet;
    const renderInner = () => {
      if (this.data.failed) {
        return /* @__PURE__ */ avm.h("view", null, props.fallback);
      }
      const img = /* @__PURE__ */ avm.h("img", {
        className: `${classPrefix}-img`,
        src,
        alt: props.alt,
        onClick: props.onClick,
        onLoad: () => {
          this.setLoaded(true);
        },
        onError: (e) => {
          this.setFailed(true);
          props.onError?.(e);
        },
        style: __spreadValues({
          objectFit: props.fit
        }, props.style),
        crossOrigin: props.crossOrigin,
        decoding: props.decoding,
        loading: props.loading,
        referrerPolicy: props.referrerPolicy,
        sizes: props.sizes,
        srcSet,
        useMap: props.useMap
      });
      return /* @__PURE__ */ avm.h("view", null, /* @__PURE__ */ avm.h("div", null, !this.data.loaded && props.placeholder), img);
    };
    const style = {};
    if (props.width) {
      style["width"] = toCSSLength(props.width);
    }
    if (props.height) {
      style["height"] = toCSSLength(props.height);
    }
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix,
      style
    }, renderInner());
  };
}
export { Image as I };
