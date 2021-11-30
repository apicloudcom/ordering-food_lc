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
var button = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var loading = "";
const classPrefix$b = `adm-loading`;
class Loading extends Component {
  render = (props) => {
    const { color = "default" } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$b
    }, /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$b}-${color}`
    }, "svg\u56FE\u5360\u4F4D"));
  };
}
const classPrefix$a = `adm-button`;
class Button extends Component {
  install = () => {
    console.log("Button !");
  };
  render = (props) => {
    const disabled = props.disabled || props.loading;
    return /* @__PURE__ */ avm.h("button", {
      type: props.type,
      onClick: props.onClick,
      className: classNames(classPrefix$a, props.color ? `${classPrefix$a}-${props.color}` : null, {
        [`${classPrefix$a}-block`]: props.block,
        [`${classPrefix$a}-disabled`]: disabled,
        [`${classPrefix$a}-fill-outline`]: props.fill === "outline",
        [`${classPrefix$a}-fill-none`]: props.fill === "none",
        [`${classPrefix$a}-mini`]: props.size === "mini",
        [`${classPrefix$a}-small`]: props.size === "small",
        [`${classPrefix$a}-large`]: props.size === "large",
        [`${classPrefix$a}-loading`]: props.loading
      }),
      disabled
    }, props.loading ? /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$a}-loading-wrapper`
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
var badge = "";
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var Symbol$3 = root$1.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
var nativeObjectToString$1 = objectProto$8.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$6.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$7 = Object.prototype;
var nativeObjectToString = objectProto$7.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$3(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$3;
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var baseGetTag$2 = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag$2(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root = _root;
var coreJsData$1 = root["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$6 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$5).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$2(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$2;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var eq = eq_1, isArrayLike$2 = isArrayLike_1, isIndex$1 = _isIndex, isObject = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$2(object) && isIndex$1(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$2(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$2;
var objectProto$4 = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$2;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$3(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$3;
var baseGetTag$1 = _baseGetTag, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$1 = isObjectLike_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$1(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
var isBuffer$1 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$1, isBuffer$1.exports);
var baseGetTag = _baseGetTag, isLength = isLength_1, isObjectLike = isObjectLike_1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray = isArray_1, isBuffer = isBuffer$1.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$2(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$2;
var assignValue = _assignValue, copyObject$1 = _copyObject, createAssigner$1 = _createAssigner, isArrayLike = isArrayLike_1, isPrototype = _isPrototype, keys$1 = keys_1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var assign = createAssigner$1(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject$1(source, keys$1(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});
var assign_1 = assign;
var copyObject = _copyObject, createAssigner = _createAssigner, keys = keys_1;
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});
var assignWith_1 = assignWith;
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_1 = isUndefined;
function mergeProps(...items) {
  function customizer(objValue, srcValue) {
    return isUndefined_1(srcValue) ? objValue : srcValue;
  }
  let ret = assign_1({}, items[0]);
  for (let i = 1; i < items.length; i++) {
    ret = assignWith_1(ret, items[i], customizer);
  }
  return ret;
}
const classPrefix$9 = `adm-badge`;
const defaultProps$5 = {
  color: "#FF411C"
};
class Badge extends Component {
  install = () => {
    console.log("Badge!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$5, props);
    const { content, color, children, isDot, right, top } = props;
    const badgeCls = classNames(classPrefix$9, {
      [`${classPrefix$9}--fixed`]: !!children,
      [`${classPrefix$9}--dot`]: isDot
    });
    const styleRight = !!right && !!children ? right : 0;
    const styleTop = !!top && !!children ? top : 0;
    return /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$9}-wrap`
    }, children, /* @__PURE__ */ avm.h("text", {
      className: badgeCls,
      style: { backgroundColor: color, right: styleRight, top: styleTop }
    }, !isDot && content));
  };
}
var space = "";
const classPrefix$8 = `adm-space`;
class Space extends Component {
  render = (props) => {
    const { direction = "horizontal" } = props;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$8, {
        [`${classPrefix$8}-wrap`]: props.wrap,
        [`${classPrefix$8}-block`]: props.block,
        [`${classPrefix$8}-${direction}`]: true,
        [`${classPrefix$8}-align-${props.align}`]: !!props.align,
        [`${classPrefix$8}-justify-${props.justify}`]: !!props.justify
      })
    }, props.children.map((child) => {
      return child !== null && child !== void 0 && /* @__PURE__ */ avm.h("div", {
        className: `${classPrefix$8}-item`
      }, child);
    }));
  };
}
var list = "";
const classPrefix$7 = `adm-list`;
const defaultProps$4 = {
  mode: "default"
};
class List extends Component {
  install = () => {
    console.log("List!");
  };
  render = (props) => {
    props = mergeProps(defaultProps$4, props);
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$7, `${classPrefix$7}--${props.mode}`)
    }, /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$7}--inner`
    }, props.children));
  };
}
const classPrefix$6 = `adm-list-item`;
class ListItem extends Component {
  install = () => {
    console.log("ListItem!");
  };
  render = (props) => {
    const clickable = props.clickable ?? !!props.onClick;
    const arrow = props.arrow === void 0 ? clickable : props.arrow;
    const prefixWidth = !!props.prefixWidth ? props.prefixWidth : "auto";
    const content = /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-content`
    }, props.prefix && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-content-prefix`,
      style: { width: prefixWidth }
    }, props.prefix), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-content-main`
    }, props.title && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$6}-title`
    }, props.title), /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$6}-children`
    }, props.children), props.description && /* @__PURE__ */ avm.h("span", {
      className: `${classPrefix$6}-description`
    }, props.description)), props.extra && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-content-extra`
    }, props.extra), arrow && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$6}-content-arrow`
    }, arrow === true ? /* @__PURE__ */ avm.h("span", null, "\u53F3\u7BAD\u5934") : arrow));
    const listItemCls = classNames(`${classPrefix$6}`, clickable ? ["adm-plain-anchor"] : [], props.disabled && `${classPrefix$6}-disabled`);
    const listItemEvent = props.disabled ? void 0 : props.onClick;
    const element = clickable ? /* @__PURE__ */ avm.h("a", {
      className: listItemCls,
      onClick: listItemEvent
    }, content) : /* @__PURE__ */ avm.h("div", {
      className: listItemCls,
      onClick: listItemEvent
    }, content);
    return element;
  };
}
function attachPropertiesToComponent(component, properties2) {
  const ret = component;
  for (const key in properties2) {
    if (properties2.hasOwnProperty(key)) {
      ret[key] = properties2[key];
    }
  }
  return ret;
}
const properties = {
  Item: ListItem
};
var index = attachPropertiesToComponent(List, properties);
var card = "";
const classPrefix$5 = `adm-card`;
class Card extends Component {
  render = (props) => {
    const renderHeader = () => {
      if (!(props.title || props.extra)) {
        return null;
      }
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$5}-header`, props.headerClassName),
        style: props.headerStyle,
        onClick: props.onHeaderClick
      }, props.title.children ? props.title : /* @__PURE__ */ avm.h("text", {
        className: `${classPrefix$5}-header-title`
      }, props.title), props.extra ? props.extra : /* @__PURE__ */ avm.h("text", null, props.extra));
    };
    const renderBody = () => {
      if (!props.children) {
        return null;
      }
      console.log(props.children);
      return /* @__PURE__ */ avm.h("div", {
        className: classNames(`${classPrefix$5}-body`, props.bodyClassName),
        style: props.bodyStyle,
        onClick: props.onBodyClick
      }, props.children);
    };
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$5,
      onClick: props.onClick
    }, renderHeader(), renderBody());
  };
}
var image = "";
function toCSSLength(val) {
  return typeof val === "number" ? `${val}px` : val;
}
var outlineUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAxOTkwOTczIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5NjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS41NTIgMTUxLjU1MnY3MjAuODk2aDcyMC44OTZWMTUxLjU1MkgxNTEuNTUyeiBtLTMyLjc2OC02NS41MzZoNzg2LjQzMmM5LjU1Njk5MiAwIDE3LjQwOCAzLjA3MiAyMy41NTIgOS4yMTZzOS4yMTYgMTMuOTk1MDA4IDkuMjE2IDIzLjU1MnY3ODYuNDMyYzAgOS41NTY5OTItMy4wNzIgMTcuNDA4LTkuMjE2IDIzLjU1MnMtMTMuOTk1MDA4IDkuMjE2LTIzLjU1MiA5LjIxNkgxMTguNzg0Yy05LjU1Njk5MiAwLTE3LjQwOC0zLjA3Mi0yMy41NTItOS4yMTZzLTkuMjE2LTEzLjk5NTAwOC05LjIxNi0yMy41NTJWMTE4Ljc4NGMwLTkuNTU2OTkyIDMuMDcyLTE3LjQwOCA5LjIxNi0yMy41NTJzMTMuOTk1MDA4LTkuMjE2IDIzLjU1Mi05LjIxNnogbTI2Mi4xNDQgMTk2LjYwOGM0My42OTEwMDggMCA2NS41MzYgMjEuODQ0OTkyIDY1LjUzNiA2NS41MzZzLTIxLjg0NDk5MiA2NS41MzYtNjUuNTM2IDY1LjUzNi02NS41MzYtMjEuODQ0OTkyLTY1LjUzNi02NS41MzYgMjEuODQ0OTkyLTY1LjUzNiA2NS41MzYtNjUuNTM2ek0xNzcuMTUyIDg4NS43NmwtNTEuMi0zOS45MzYgMjIxLjE4NC0yODguNzY4YzE2LjM4NC0yMS4xNjMwMDggMzguMDU5MDA4LTMzLjQ1MTAwOCA2NS4wMjQtMzYuODY0IDI2Ljk2NDk5Mi0zLjQxMjk5MiA1MS4wMjg5OTIgMi43MzEwMDggNzIuMTkyIDE4LjQzMmwxMjggMTAzLjQyNGM3LjUwODk5MiA1LjQ2MDk5MiAxNS41MzEwMDggNy42OCAyNC4wNjQgNi42NTZTNjUyLjI4OCA2NDMuNzU1MDA4IDY1OC40MzIgNjM2LjkyOGwyMjEuMTg0LTI3Ni40OCA1MS4yIDQwLjk2LTIyMS4xODQgMjc2LjQ4Yy0xNy4wNjcwMDggMjEuMTYzMDA4LTM5LjA4MzAwOCAzMy4xMDg5OTItNjYuMDQ4IDM1Ljg0LTI2Ljk2NDk5MiAyLjczMTAwOC01MS4wMjg5OTItNC4wOTYtNzIuMTkyLTIwLjQ4TDQ0NC40MTYgNTkwLjg0OGMtNy41MDg5OTItNS40NjA5OTItMTUuNTMxMDA4LTcuNjgtMjQuMDY0LTYuNjU2cy0xNS41MzEwMDggNS4yOTEwMDgtMjAuOTkyIDEyLjhMMTc3LjE1MiA4ODUuNzZ6IiBwLWlkPSIyOTYxIiBmaWxsPSIjYmZiZmJmIj48L3BhdGg+PC9zdmc+";
var warnUrl = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM4MDAyMDMxMzYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzNiA2NTkuMzQ0bDI1OS42NjctMjYwLjIxOWMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDg2LjEgODYuMiAzNy43NS0zNy43OWE3Ljg4OCA3Ljg4OCAwIDAgMSAxLjUwOC0yLjExbDE0NC4zLTE0NC4zYzIuOTU4LTIuOTU4IDcuNzM3LTMuMDkzIDEwLjg2Mi0wLjQwNyAwLjIzNSAwLjE4NyAwLjQ2MyAwLjM5IDAuNjggMC42MDdsMzYuOCAzNi44YzAuMjc0IDAuMjY1IDAuNTI0IDAuNTQ1IDAuNzUxIDAuODM3bDQyLjY0NyA0Mi42OTYgMC4wMDYgMC4wMDdhOCA4IDAgMCAxLTAuMDIgMTEuMzE0bC0zNi44NzYgMzYuNzQ3YTggOCAwIDAgMS0xMS4zMDctMC4wMTRsLTM3LjcwMy0zNy43NDctMTgzLjc5OCAxODMuOTZjLTMuMSAzLjEtOC4yIDMuMS0xMS4zIDBsLTg2LjEtODYuMkwxMzYgNzU1LjUxMlY3OTJoMzM0YTggOCAwIDAgMSA4IDh2NTZhOCA4IDAgMCAxLTggOEg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMTkyYzAtMTcuNyAxNC4zLTMyIDMyLTMyaDc4NGMxNy43IDAgMzIgMTQuMyAzMiAzMnYyMzJhOCA4IDAgMCAxLTggOGgtNTZhOCA4IDAgMCAxLTgtOFYyMzJIMTM2djQyNy4zNDR6TTI3NCA0MzJjLTM1LjM0NSAwLTY0LTI4LjY1NS02NC02NHMyOC42NTUtNjQgNjQtNjQgNjQgMjguNjU1IDY0IDY0LTI4LjY1NSA2NC02NCA2NHogbTQ3MCA0OGMxMTkuMyAwIDIxNiA5Ni43IDIxNiAyMTZzLTk2LjcgMjE2LTIxNiAyMTYtMjE2LTk2LjctMjE2LTIxNiA5Ni43LTIxNiAyMTYtMjE2eiBtMTA3LjUgMzIzLjVDODgwLjIgNzc0LjggODk2IDczNi42IDg5NiA2OTZjMC00MC42LTE1LjgtNzguOC00NC41LTEwNy41QzgyMi44IDU1OS44IDc4NC42IDU0NCA3NDQgNTQ0Yy00MC42IDAtNzguOCAxNS44LTEwNy41IDQ0LjVDNjA3LjggNjE3LjIgNTkyIDY1NS40IDU5MiA2OTZjMCA0MC42IDE1LjggNzguOCA0NC41IDEwNy41QzY2NS4yIDgzMi4yIDcwMy40IDg0OCA3NDQgODQ4YzQwLjYgMCA3OC44LTE1LjggMTA3LjUtNDQuNXpNNzEyIDc3NmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzIgMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMi0xNy42NzMgMC0zMi0xNC4zMjctMzItMzJ6IG0xMi02NGMtNC40IDAtOC0zLjYtOC04VjU5MmMwLTQuNCAzLjYtOCA4LThoNDBjNC40IDAgOCAzLjYgOCA4djExMmMwIDQuNC0zLjYgOC04IDhoLTQweiIgcC1pZD0iMzIwNCIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjwvc3ZnPg==";
const classPrefix$4 = `adm-image`;
const defaultProps$3 = {
  fit: "fill",
  placeholder: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix$4}-tip`
  }, /* @__PURE__ */ avm.h("text", null, "\u52A0\u8F09\u4E2D..."), /* @__PURE__ */ avm.h("img", {
    src: outlineUrl
  })),
  fallback: /* @__PURE__ */ avm.h("div", {
    className: `${classPrefix$4}-tip`
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
    props = mergeProps(defaultProps$3, props);
    let src = props.src;
    let srcSet = props.srcSet;
    const renderInner = () => {
      if (this.data.failed) {
        return /* @__PURE__ */ avm.h("view", null, props.fallback);
      }
      const img = /* @__PURE__ */ avm.h("img", {
        className: `${classPrefix$4}-img`,
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
      className: classPrefix$4,
      style
    }, renderInner());
  };
}
var icon = "";
const classPrefix$3 = `adm-icon`;
class Icon extends Component {
  code = 59913;
  render = (props) => {
    return /* @__PURE__ */ avm.h("text", {
      _code: this.code,
      _name: this.constructor.name,
      style: __spreadValues({}, props),
      class: `${classPrefix$3} ${classPrefix$3}-font-icon-text`
    }, String.fromCharCode(this.code));
  };
}
class AaOutline extends Icon {
  code = 59905;
}
class AddCircleOutline extends Icon {
  code = 59906;
}
class AddOutline extends Icon {
  code = 59907;
}
class AddressBookFill extends Icon {
  code = 59908;
}
class AddSquareOutline extends Icon {
  code = 59909;
}
class AlipayCircleFill extends Icon {
  code = 59910;
}
class AlipaySquareFill extends Icon {
  code = 59911;
}
class AntOutline extends Icon {
  code = 59912;
}
class ApiCloudLogo extends Icon {
  code = 59913;
}
class AppOutline extends Icon {
  code = 59914;
}
class AppstoreOutline extends Icon {
  code = 59915;
}
class ArrowDownCircleOutline extends Icon {
  code = 59916;
}
class ArrowsAltOutline extends Icon {
  code = 59917;
}
class AudioFill extends Icon {
  code = 59918;
}
class AudioMutedOutline extends Icon {
  code = 59919;
}
class AudioOutline extends Icon {
  code = 59920;
}
class BankcardOutline extends Icon {
  code = 59921;
}
class BellMuteOutline extends Icon {
  code = 59922;
}
class BellOutline extends Icon {
  code = 59923;
}
class BillOutline extends Icon {
  code = 59924;
}
class CalculatorOutline extends Icon {
  code = 59925;
}
class CalendarOutline extends Icon {
  code = 59926;
}
class CameraOutline extends Icon {
  code = 59927;
}
class ChatAddOutline extends Icon {
  code = 59928;
}
class ChatCheckOutline extends Icon {
  code = 59929;
}
class ChatWrongOutline extends Icon {
  code = 59930;
}
class CheckCircleFill extends Icon {
  code = 59931;
}
class CheckCircleOutline extends Icon {
  code = 59932;
}
class CheckOutline extends Icon {
  code = 59933;
}
class CheckShieldFill extends Icon {
  code = 59934;
}
class CheckShieldOutline extends Icon {
  code = 59935;
}
class ClockCircleFill extends Icon {
  code = 59936;
}
class ClockCircleOutline extends Icon {
  code = 59937;
}
class CloseCircleFill extends Icon {
  code = 59938;
}
class CloseCircleOutline extends Icon {
  code = 59939;
}
class CloseOutline extends Icon {
  code = 59940;
}
class CloseShieldOutline extends Icon {
  code = 59941;
}
class CollectMoneyOutline extends Icon {
  code = 59942;
}
class CompassOutline extends Icon {
  code = 59943;
}
class ContentOutline extends Icon {
  code = 59944;
}
class CouponOutline extends Icon {
  code = 59945;
}
class DeleteOutline extends Icon {
  code = 59946;
}
class DownCircleOutline extends Icon {
  code = 59947;
}
class DownFill extends Icon {
  code = 59948;
}
class DownlandOutline extends Icon {
  code = 59949;
}
class DownOutline extends Icon {
  code = 59950;
}
class EditFill extends Icon {
  code = 59951;
}
class EditSFill extends Icon {
  code = 59952;
}
class EditSOutline extends Icon {
  code = 59953;
}
class EnvironmentOutline extends Icon {
  code = 59954;
}
class ExclamationCircleFill extends Icon {
  code = 59955;
}
class ExclamationCircleOutline extends Icon {
  code = 59956;
}
class ExclamationOutline extends Icon {
  code = 59957;
}
class ExclamationShieldFill extends Icon {
  code = 59958;
}
class ExclamationShieldOutline extends Icon {
  code = 59959;
}
class ExclamationTriangleOutline extends Icon {
  code = 59960;
}
class EyeFill extends Icon {
  code = 59961;
}
class EyeInvisibleFill extends Icon {
  code = 59962;
}
class EyeInvisibleOutline extends Icon {
  code = 59963;
}
class EyeOutline extends Icon {
  code = 59964;
}
class FaceRecognitionOutline extends Icon {
  code = 59965;
}
class FileOutline extends Icon {
  code = 59966;
}
class FileWrongOutline extends Icon {
  code = 59967;
}
class FillinOutline extends Icon {
  code = 59968;
}
class FilterOutline extends Icon {
  code = 59969;
}
class FingerdownOutline extends Icon {
  code = 59970;
}
class FireFill extends Icon {
  code = 59971;
}
class FlagOutline extends Icon {
  code = 59972;
}
class FolderOutline extends Icon {
  code = 59973;
}
class ForbidFill extends Icon {
  code = 59974;
}
class FrownFill extends Icon {
  code = 59975;
}
class FrownOutline extends Icon {
  code = 59976;
}
class GiftOutline extends Icon {
  code = 59977;
}
class GlobalOutline extends Icon {
  code = 59978;
}
class HandPayCircleOutline extends Icon {
  code = 59979;
}
class HeartFill extends Icon {
  code = 59980;
}
class HeartOutline extends Icon {
  code = 59981;
}
class HistogramOutline extends Icon {
  code = 59982;
}
class InformationCircleFill extends Icon {
  code = 59983;
}
class InformationCircleOutline extends Icon {
  code = 59984;
}
class KeyOutline extends Icon {
  code = 59985;
}
class KoubeiFill extends Icon {
  code = 59986;
}
class KoubeiOutline extends Icon {
  code = 59987;
}
class LeftOutline extends Icon {
  code = 59988;
}
class LikeOutline extends Icon {
  code = 59989;
}
class LinkOutline extends Icon {
  code = 59990;
}
class LocationFill extends Icon {
  code = 59991;
}
class LocationOutline extends Icon {
  code = 59992;
}
class LockFill extends Icon {
  code = 59993;
}
class LockOutline extends Icon {
  code = 59994;
}
class LoopOutline extends Icon {
  code = 59995;
}
class MailFill extends Icon {
  code = 59996;
}
class MailOpenOutline extends Icon {
  code = 59997;
}
class MailOutline extends Icon {
  code = 59998;
}
class MessageFill extends Icon {
  code = 59999;
}
class MessageOutline extends Icon {
  code = 6e4;
}
class MinusCircleOutline extends Icon {
  code = 60001;
}
class MinusOutline extends Icon {
  code = 60002;
}
class MoreOutline extends Icon {
  code = 60003;
}
class MovieOutline extends Icon {
  code = 60004;
}
class PayCircleOutline extends Icon {
  code = 60005;
}
class PhonebookFill extends Icon {
  code = 60006;
}
class PhonebookOutline extends Icon {
  code = 60007;
}
class PhoneFill extends Icon {
  code = 60008;
}
class PictureOutline extends Icon {
  code = 60009;
}
class PicturesOutline extends Icon {
  code = 60010;
}
class PictureWrongOutline extends Icon {
  code = 60011;
}
class PieOutline extends Icon {
  code = 60012;
}
class PlayOutline extends Icon {
  code = 60013;
}
class QuestionCircleFill extends Icon {
  code = 60014;
}
class QuestionCircleOutline extends Icon {
  code = 60015;
}
class ReceiptOutline extends Icon {
  code = 60016;
}
class ReceivePaymentOutline extends Icon {
  code = 60017;
}
class RedoOutline extends Icon {
  code = 60018;
}
class RightOutline extends Icon {
  code = 60019;
}
class ScanCodeOutline extends Icon {
  code = 60020;
}
class ScanningFaceOutline extends Icon {
  code = 60021;
}
class ScanningOutline extends Icon {
  code = 60022;
}
class SearchOutline extends Icon {
  code = 60023;
}
class SendOutline extends Icon {
  code = 60024;
}
class SetOutline extends Icon {
  code = 60025;
}
class ShopbagOutline extends Icon {
  code = 60026;
}
class ShrinkOutline extends Icon {
  code = 60027;
}
class SmileFill extends Icon {
  code = 60028;
}
class SmileOutline extends Icon {
  code = 60029;
}
class SoundMuteFill extends Icon {
  code = 60030;
}
class SoundMuteOutline extends Icon {
  code = 60031;
}
class SoundOutline extends Icon {
  code = 60032;
}
class StarFill extends Icon {
  code = 60033;
}
class StarOutline extends Icon {
  code = 60034;
}
class StopOutline extends Icon {
  code = 60035;
}
class SystemQRcodeOutline extends Icon {
  code = 60036;
}
class TagOutline extends Icon {
  code = 60037;
}
class TeamFill extends Icon {
  code = 60038;
}
class TeamOutline extends Icon {
  code = 60039;
}
class TextDeletionOutline extends Icon {
  code = 60040;
}
class TextOutline extends Icon {
  code = 60041;
}
class TransportQRcodeOutline extends Icon {
  code = 60042;
}
class TravelOutline extends Icon {
  code = 60043;
}
class TruckOutline extends Icon {
  code = 60044;
}
class UiwAdobe extends Icon {
  code = 60045;
}
class UiwAlipay extends Icon {
  code = 60046;
}
class UiwAliwangwang extends Icon {
  code = 60047;
}
class UiwAndroidO extends Icon {
  code = 60048;
}
class UiwAndroid extends Icon {
  code = 60049;
}
class UiwApple extends Icon {
  code = 60050;
}
class UiwAppstoreO extends Icon {
  code = 60051;
}
class UiwAppstore extends Icon {
  code = 60052;
}
class UiwAreaChart extends Icon {
  code = 60053;
}
class UiwArrowDown extends Icon {
  code = 60054;
}
class UiwArrowLeft extends Icon {
  code = 60055;
}
class UiwArrowRight extends Icon {
  code = 60056;
}
class UiwArrowUp extends Icon {
  code = 60057;
}
class UiwArrowsAlt extends Icon {
  code = 60058;
}
class UiwAsterisk extends Icon {
  code = 60059;
}
class UiwBackward extends Icon {
  code = 60060;
}
class UiwBaidu extends Icon {
  code = 60061;
}
class UiwBarChart extends Icon {
  code = 60062;
}
class UiwBarcode extends Icon {
  code = 60063;
}
class UiwBell extends Icon {
  code = 60064;
}
class UiwCameraO extends Icon {
  code = 60065;
}
class UiwCaretDown extends Icon {
  code = 60066;
}
class UiwCaretLeft extends Icon {
  code = 60067;
}
class UiwCaretRight extends Icon {
  code = 60068;
}
class UiwCaretUp extends Icon {
  code = 60069;
}
class UiwCheckSquareO extends Icon {
  code = 60070;
}
class UiwCheckSquare extends Icon {
  code = 60071;
}
class UiwCheck extends Icon {
  code = 60072;
}
class UiwChrome extends Icon {
  code = 60073;
}
class UiwCircleCheckO extends Icon {
  code = 60074;
}
class UiwCircleCheck extends Icon {
  code = 60075;
}
class UiwCircleCloseO extends Icon {
  code = 60076;
}
class UiwCircleClose extends Icon {
  code = 60077;
}
class UiwCircleO extends Icon {
  code = 60078;
}
class UiwCloseSquareO extends Icon {
  code = 60079;
}
class UiwCloseSquare extends Icon {
  code = 60080;
}
class UiwClose extends Icon {
  code = 60081;
}
class UiwCloudDownloadO extends Icon {
  code = 60082;
}
class UiwCloudDownload extends Icon {
  code = 60083;
}
class UiwCloudUploadO extends Icon {
  code = 60084;
}
class UiwCloudUpload extends Icon {
  code = 60085;
}
class UiwCoffee extends Icon {
  code = 60086;
}
class UiwComponent extends Icon {
  code = 60087;
}
class UiwCopy extends Icon {
  code = 60088;
}
class UiwCopyright extends Icon {
  code = 60089;
}
class UiwCss3 extends Icon {
  code = 60090;
}
class UiwCut extends Icon {
  code = 60091;
}
class UiwDArrowLeft extends Icon {
  code = 60092;
}
class UiwDArrowRight extends Icon {
  code = 60093;
}
class UiwDCaret extends Icon {
  code = 60094;
}
class UiwDashboard extends Icon {
  code = 60095;
}
class UiwDate extends Icon {
  code = 60096;
}
class UiwDelete extends Icon {
  code = 60097;
}
class UiwDingding extends Icon {
  code = 60098;
}
class UiwDislikeO extends Icon {
  code = 60099;
}
class UiwDocument extends Icon {
  code = 60100;
}
class UiwDotChart extends Icon {
  code = 60101;
}
class UiwDownCircleO extends Icon {
  code = 60102;
}
class UiwDownCircle extends Icon {
  code = 60103;
}
class UiwDownSquareO extends Icon {
  code = 60104;
}
class UiwDownSquare extends Icon {
  code = 60105;
}
class UiwDown extends Icon {
  code = 60106;
}
class UiwDownload extends Icon {
  code = 60107;
}
class UiwEdit extends Icon {
  code = 60108;
}
class UiwEnter extends Icon {
  code = 60109;
}
class UiwEnvironmentO extends Icon {
  code = 60110;
}
class UiwEnvironment extends Icon {
  code = 60111;
}
class UiwEyeO extends Icon {
  code = 60112;
}
class UiwEye extends Icon {
  code = 60113;
}
class UiwFacebook extends Icon {
  code = 60114;
}
class UiwFileAdd extends Icon {
  code = 60115;
}
class UiwFileExcel extends Icon {
  code = 60116;
}
class UiwFileJpg extends Icon {
  code = 60117;
}
class UiwFilePdf extends Icon {
  code = 60118;
}
class UiwFileText extends Icon {
  code = 60119;
}
class UiwFileUnknown extends Icon {
  code = 60120;
}
class UiwFilter extends Icon {
  code = 60121;
}
class UiwFirefox extends Icon {
  code = 60122;
}
class UiwFolderAdd extends Icon {
  code = 60123;
}
class UiwFolderOpen extends Icon {
  code = 60124;
}
class UiwFolder extends Icon {
  code = 60125;
}
class UiwForward extends Icon {
  code = 60126;
}
class UiwFoursquare extends Icon {
  code = 60127;
}
class UiwFrownO extends Icon {
  code = 60128;
}
class UiwFrown extends Icon {
  code = 60129;
}
class UiwGithubO extends Icon {
  code = 60130;
}
class UiwGithub extends Icon {
  code = 60131;
}
class UiwGlobal extends Icon {
  code = 60132;
}
class UiwHeartOff extends Icon {
  code = 60133;
}
class UiwHeartOn extends Icon {
  code = 60134;
}
class UiwHome extends Icon {
  code = 60135;
}
class UiwHtml5 extends Icon {
  code = 60136;
}
class UiwIe extends Icon {
  code = 60137;
}
class UiwInbox extends Icon {
  code = 60138;
}
class UiwInformationO extends Icon {
  code = 60139;
}
class UiwInformation extends Icon {
  code = 60140;
}
class UiwLaptop extends Icon {
  code = 60141;
}
class UiwLeftCircleO extends Icon {
  code = 60142;
}
class UiwLeftCircle extends Icon {
  code = 60143;
}
class UiwLeftSquareO extends Icon {
  code = 60144;
}
class UiwLeftSquare extends Icon {
  code = 60145;
}
class UiwLeft extends Icon {
  code = 60146;
}
class UiwLikeO extends Icon {
  code = 60147;
}
class UiwLink extends Icon {
  code = 60148;
}
class UiwLinkedin extends Icon {
  code = 60149;
}
class UiwLinux extends Icon {
  code = 60150;
}
class UiwLoading extends Icon {
  code = 60151;
}
class UiwLock extends Icon {
  code = 60152;
}
class UiwLogin extends Icon {
  code = 60153;
}
class UiwLogout extends Icon {
  code = 60154;
}
class UiwMailO extends Icon {
  code = 60155;
}
class UiwMail extends Icon {
  code = 60156;
}
class UiwMan extends Icon {
  code = 60157;
}
class UiwMap extends Icon {
  code = 60158;
}
class UiwMehO extends Icon {
  code = 60159;
}
class UiwMeh extends Icon {
  code = 60160;
}
class UiwMenuFold extends Icon {
  code = 60161;
}
class UiwMenuUnfold extends Icon {
  code = 60162;
}
class UiwMenu extends Icon {
  code = 60163;
}
class UiwMessage extends Icon {
  code = 60164;
}
class UiwMinusCircleO extends Icon {
  code = 60165;
}
class UiwMinusCircle extends Icon {
  code = 60166;
}
class UiwMinusSquareO extends Icon {
  code = 60167;
}
class UiwMinusSquare extends Icon {
  code = 60168;
}
class UiwMinus extends Icon {
  code = 60169;
}
class UiwMobile extends Icon {
  code = 60170;
}
class UiwMore extends Icon {
  code = 60171;
}
class UiwNotification extends Icon {
  code = 60172;
}
class UiwOpera extends Icon {
  code = 60173;
}
class UiwPaperClip extends Icon {
  code = 60174;
}
class UiwPauseCircleO extends Icon {
  code = 60175;
}
class UiwPauseCircle extends Icon {
  code = 60176;
}
class UiwPause extends Icon {
  code = 60177;
}
class UiwPayCircleO extends Icon {
  code = 60178;
}
class UiwPay extends Icon {
  code = 60179;
}
class UiwPicasa extends Icon {
  code = 60180;
}
class UiwPicture extends Icon {
  code = 60181;
}
class UiwPieChart extends Icon {
  code = 60182;
}
class UiwPinterest extends Icon {
  code = 60183;
}
class UiwPlayCircleO extends Icon {
  code = 60184;
}
class UiwPlayCircle extends Icon {
  code = 60185;
}
class UiwPlusCircleO extends Icon {
  code = 60186;
}
class UiwPlusCircle extends Icon {
  code = 60187;
}
class UiwPlusSquareO extends Icon {
  code = 60188;
}
class UiwPlusSquare extends Icon {
  code = 60189;
}
class UiwPlus extends Icon {
  code = 60190;
}
class UiwPoweroff extends Icon {
  code = 60191;
}
class UiwPrinter extends Icon {
  code = 60192;
}
class UiwQq extends Icon {
  code = 60193;
}
class UiwQrcode extends Icon {
  code = 60194;
}
class UiwQuestionCircleO extends Icon {
  code = 60195;
}
class UiwQuestionCircle extends Icon {
  code = 60196;
}
class UiwReddit extends Icon {
  code = 60197;
}
class UiwReload extends Icon {
  code = 60198;
}
class UiwRightCircleO extends Icon {
  code = 60199;
}
class UiwRightCircle extends Icon {
  code = 60200;
}
class UiwRightSquareO extends Icon {
  code = 60201;
}
class UiwRightSquare extends Icon {
  code = 60202;
}
class UiwRight extends Icon {
  code = 60203;
}
class UiwRollback extends Icon {
  code = 60204;
}
class UiwSafari extends Icon {
  code = 60205;
}
class UiwSafety extends Icon {
  code = 60206;
}
class UiwSave extends Icon {
  code = 60207;
}
class UiwSearch extends Icon {
  code = 60208;
}
class UiwSettingO extends Icon {
  code = 60209;
}
class UiwSetting extends Icon {
  code = 60210;
}
class UiwShare extends Icon {
  code = 60211;
}
class UiwShoppingCart extends Icon {
  code = 60212;
}
class UiwShrink extends Icon {
  code = 60213;
}
class UiwSmileO extends Icon {
  code = 60214;
}
class UiwSmile extends Icon {
  code = 60215;
}
class UiwSquareO extends Icon {
  code = 60216;
}
class UiwStarOff extends Icon {
  code = 60217;
}
class UiwStarOn extends Icon {
  code = 60218;
}
class UiwStopO extends Icon {
  code = 60219;
}
class UiwStop extends Icon {
  code = 60220;
}
class UiwSwapLeft extends Icon {
  code = 60221;
}
class UiwSwapRight extends Icon {
  code = 60222;
}
class UiwSwap extends Icon {
  code = 60223;
}
class UiwTable extends Icon {
  code = 60224;
}
class UiwTagO extends Icon {
  code = 60225;
}
class UiwTag extends Icon {
  code = 60226;
}
class UiwTagsO extends Icon {
  code = 60227;
}
class UiwTags extends Icon {
  code = 60228;
}
class UiwTaobao extends Icon {
  code = 60229;
}
class UiwTimeO extends Icon {
  code = 60230;
}
class UiwTime extends Icon {
  code = 60231;
}
class UiwTwitter extends Icon {
  code = 60232;
}
class UiwUiw extends Icon {
  code = 60233;
}
class UiwUnlock extends Icon {
  code = 60234;
}
class UiwUpCircleO extends Icon {
  code = 60235;
}
class UiwUpCircle extends Icon {
  code = 60236;
}
class UiwUpSquareO extends Icon {
  code = 60237;
}
class UiwUpSquare extends Icon {
  code = 60238;
}
class UiwUp extends Icon {
  code = 60239;
}
class UiwUpload extends Icon {
  code = 60240;
}
class UiwUserAdd extends Icon {
  code = 60241;
}
class UiwUserDelete extends Icon {
  code = 60242;
}
class UiwUser extends Icon {
  code = 60243;
}
class UiwUsergroupAdd extends Icon {
  code = 60244;
}
class UiwUsergroupDelete extends Icon {
  code = 60245;
}
class UiwVerification extends Icon {
  code = 60246;
}
class UiwVerticleLeft extends Icon {
  code = 60247;
}
class UiwVerticleRight extends Icon {
  code = 60248;
}
class UiwVideoCamera extends Icon {
  code = 60249;
}
class UiwWarningO extends Icon {
  code = 60250;
}
class UiwWarning extends Icon {
  code = 60251;
}
class UiwWeibo extends Icon {
  code = 60252;
}
class UiwWeixin extends Icon {
  code = 60253;
}
class UiwWifi extends Icon {
  code = 60254;
}
class UiwWindows extends Icon {
  code = 60255;
}
class UiwWoman extends Icon {
  code = 60256;
}
class UiwZoomIn extends Icon {
  code = 60257;
}
class UiwZoomOut extends Icon {
  code = 60258;
}
class UndoOutline extends Icon {
  code = 60259;
}
class UnlockOutline extends Icon {
  code = 60260;
}
class UnorderedListOutline extends Icon {
  code = 60261;
}
class UpCircleOutline extends Icon {
  code = 60262;
}
class UploadOutline extends Icon {
  code = 60263;
}
class UpOutline extends Icon {
  code = 60264;
}
class UserAddOutline extends Icon {
  code = 60265;
}
class UserCircleOutline extends Icon {
  code = 60266;
}
class UserContactOutline extends Icon {
  code = 60267;
}
class UserOutline extends Icon {
  code = 60268;
}
class UserSetOutline extends Icon {
  code = 60269;
}
class VideoOutline extends Icon {
  code = 60270;
}
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
const classPrefix$2 = `adm-mask`;
const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
};
const defaultProps$2 = {
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
    const props = mergeProps(defaultProps$2, p);
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === "white" ? "255, 255, 255" : "0, 0, 0";
    const background = `rgba(${rgb}, ${opacity})`;
    const shouldRender = useShouldRender(props.visible, props.forceRender, props.destroyOnClose);
    return /* @__PURE__ */ avm.h("div", {
      className: classPrefix$2,
      style: __spreadProps(__spreadValues({}, props.style), {
        background,
        display: props.visible ? "flex" : "none"
      })
    }, props.onMaskClick && /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-aria-button`,
      role: "button",
      "aria-label": "Mask",
      onClick: props.onMaskClick
    }), /* @__PURE__ */ avm.h("div", {
      className: `${classPrefix$2}-content`,
      onClick: props.onMaskClick
    }, shouldRender && props.children));
  };
}
var noticeBar = "";
const classPrefix$1 = `adm-notice-bar`;
const defaultProps$1 = {
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
    props = mergeProps(defaultProps$1, props);
    if (!this.data.visible)
      return null;
    return /* @__PURE__ */ avm.h("div", {
      className: classNames(classPrefix$1, `${classPrefix$1}-${props.color}`)
    }, /* @__PURE__ */ avm.h("text", {
      className: classNames(`${classPrefix$1}-left`, `${classPrefix$1}-left-${props.color}`)
    }, "icon" in props ? props.icon : "\u9ED8\u8BA4icon"), /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix$1}-content`
    }, /* @__PURE__ */ avm.h("text", {
      className: classNames(`${classPrefix$1}-content-inner`, `${classPrefix$1}-content-inner-${props.color}`)
    }, props.content)), props.closeable && /* @__PURE__ */ avm.h("view", {
      className: `${classPrefix$1}-right`
    }, props.closeable && /* @__PURE__ */ avm.h("text", {
      onClick: () => {
        this.setVisible(false);
        props.onClose?.();
      }
    }, "X")));
  };
}
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
export { AaOutline, AddCircleOutline, AddOutline, AddSquareOutline, AddressBookFill, AlipayCircleFill, AlipaySquareFill, AntOutline, ApiCloudLogo, AppOutline, AppstoreOutline, ArrowDownCircleOutline, ArrowsAltOutline, AudioFill, AudioMutedOutline, AudioOutline, Badge, BankcardOutline, BellMuteOutline, BellOutline, BillOutline, Button, CalculatorOutline, CalendarOutline, CameraOutline, Card, ChatAddOutline, ChatCheckOutline, ChatWrongOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, CheckShieldFill, CheckShieldOutline, ClockCircleFill, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, CloseShieldOutline, CollectMoneyOutline, CompassOutline, ContentOutline, CouponOutline, DeleteOutline, DownCircleOutline, DownFill, DownOutline, DownlandOutline, EditFill, EditSFill, EditSOutline, EnvironmentOutline, ExclamationCircleFill, ExclamationCircleOutline, ExclamationOutline, ExclamationShieldFill, ExclamationShieldOutline, ExclamationTriangleOutline, EyeFill, EyeInvisibleFill, EyeInvisibleOutline, EyeOutline, FaceRecognitionOutline, FileOutline, FileWrongOutline, FillinOutline, FilterOutline, FingerdownOutline, FireFill, FlagOutline, FolderOutline, ForbidFill, FrownFill, FrownOutline, GiftOutline, GlobalOutline, HandPayCircleOutline, HeartFill, HeartOutline, HistogramOutline, Icon, Image, InformationCircleFill, InformationCircleOutline, KeyOutline, KoubeiFill, KoubeiOutline, LeftOutline, LikeOutline, LinkOutline, index as List, Loading, LocationFill, LocationOutline, LockFill, LockOutline, LoopOutline, MailFill, MailOpenOutline, MailOutline, Mask, MessageFill, MessageOutline, MinusCircleOutline, MinusOutline, MoreOutline, MovieOutline, NoticeBar, PageIndicator, PayCircleOutline, PhoneFill, PhonebookFill, PhonebookOutline, PictureOutline, PictureWrongOutline, PicturesOutline, PieOutline, PlayOutline, QuestionCircleFill, QuestionCircleOutline, ReceiptOutline, ReceivePaymentOutline, RedoOutline, RightOutline, ScanCodeOutline, ScanningFaceOutline, ScanningOutline, SearchOutline, SendOutline, SetOutline, ShopbagOutline, ShrinkOutline, SmileFill, SmileOutline, SoundMuteFill, SoundMuteOutline, SoundOutline, Space, StarFill, StarOutline, StopOutline, SystemQRcodeOutline, TagOutline, TeamFill, TeamOutline, TextDeletionOutline, TextOutline, TransportQRcodeOutline, TravelOutline, TruckOutline, UiwAdobe, UiwAlipay, UiwAliwangwang, UiwAndroid, UiwAndroidO, UiwApple, UiwAppstore, UiwAppstoreO, UiwAreaChart, UiwArrowDown, UiwArrowLeft, UiwArrowRight, UiwArrowUp, UiwArrowsAlt, UiwAsterisk, UiwBackward, UiwBaidu, UiwBarChart, UiwBarcode, UiwBell, UiwCameraO, UiwCaretDown, UiwCaretLeft, UiwCaretRight, UiwCaretUp, UiwCheck, UiwCheckSquare, UiwCheckSquareO, UiwChrome, UiwCircleCheck, UiwCircleCheckO, UiwCircleClose, UiwCircleCloseO, UiwCircleO, UiwClose, UiwCloseSquare, UiwCloseSquareO, UiwCloudDownload, UiwCloudDownloadO, UiwCloudUpload, UiwCloudUploadO, UiwCoffee, UiwComponent, UiwCopy, UiwCopyright, UiwCss3, UiwCut, UiwDArrowLeft, UiwDArrowRight, UiwDCaret, UiwDashboard, UiwDate, UiwDelete, UiwDingding, UiwDislikeO, UiwDocument, UiwDotChart, UiwDown, UiwDownCircle, UiwDownCircleO, UiwDownSquare, UiwDownSquareO, UiwDownload, UiwEdit, UiwEnter, UiwEnvironment, UiwEnvironmentO, UiwEye, UiwEyeO, UiwFacebook, UiwFileAdd, UiwFileExcel, UiwFileJpg, UiwFilePdf, UiwFileText, UiwFileUnknown, UiwFilter, UiwFirefox, UiwFolder, UiwFolderAdd, UiwFolderOpen, UiwForward, UiwFoursquare, UiwFrown, UiwFrownO, UiwGithub, UiwGithubO, UiwGlobal, UiwHeartOff, UiwHeartOn, UiwHome, UiwHtml5, UiwIe, UiwInbox, UiwInformation, UiwInformationO, UiwLaptop, UiwLeft, UiwLeftCircle, UiwLeftCircleO, UiwLeftSquare, UiwLeftSquareO, UiwLikeO, UiwLink, UiwLinkedin, UiwLinux, UiwLoading, UiwLock, UiwLogin, UiwLogout, UiwMail, UiwMailO, UiwMan, UiwMap, UiwMeh, UiwMehO, UiwMenu, UiwMenuFold, UiwMenuUnfold, UiwMessage, UiwMinus, UiwMinusCircle, UiwMinusCircleO, UiwMinusSquare, UiwMinusSquareO, UiwMobile, UiwMore, UiwNotification, UiwOpera, UiwPaperClip, UiwPause, UiwPauseCircle, UiwPauseCircleO, UiwPay, UiwPayCircleO, UiwPicasa, UiwPicture, UiwPieChart, UiwPinterest, UiwPlayCircle, UiwPlayCircleO, UiwPlus, UiwPlusCircle, UiwPlusCircleO, UiwPlusSquare, UiwPlusSquareO, UiwPoweroff, UiwPrinter, UiwQq, UiwQrcode, UiwQuestionCircle, UiwQuestionCircleO, UiwReddit, UiwReload, UiwRight, UiwRightCircle, UiwRightCircleO, UiwRightSquare, UiwRightSquareO, UiwRollback, UiwSafari, UiwSafety, UiwSave, UiwSearch, UiwSetting, UiwSettingO, UiwShare, UiwShoppingCart, UiwShrink, UiwSmile, UiwSmileO, UiwSquareO, UiwStarOff, UiwStarOn, UiwStop, UiwStopO, UiwSwap, UiwSwapLeft, UiwSwapRight, UiwTable, UiwTag, UiwTagO, UiwTags, UiwTagsO, UiwTaobao, UiwTime, UiwTimeO, UiwTwitter, UiwUiw, UiwUnlock, UiwUp, UiwUpCircle, UiwUpCircleO, UiwUpSquare, UiwUpSquareO, UiwUpload, UiwUser, UiwUserAdd, UiwUserDelete, UiwUsergroupAdd, UiwUsergroupDelete, UiwVerification, UiwVerticleLeft, UiwVerticleRight, UiwVideoCamera, UiwWarning, UiwWarningO, UiwWeibo, UiwWeixin, UiwWifi, UiwWindows, UiwWoman, UiwZoomIn, UiwZoomOut, UndoOutline, UnlockOutline, UnorderedListOutline, UpCircleOutline, UpOutline, UploadOutline, UserAddOutline, UserCircleOutline, UserContactOutline, UserOutline, UserSetOutline, VideoOutline };
