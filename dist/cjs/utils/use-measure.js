"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMeasure = useMeasure;

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _useCallbackRef3 = require("./use-callback-ref");

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMeasure() {
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      attachRef = _useCallbackRef2[1];

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      bounds = _useState2[0],
      setBounds = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    function onResize(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      var _entry$contentRect = entry.contentRect,
          width = _entry$contentRect.width,
          height = _entry$contentRect.height;
      setBounds({
        height: height,
        width: width
      });
    }

    var observer = new _resizeObserverPolyfill["default"](onResize);

    if (element) {
      observer.observe(element);
    }

    return function () {
      observer.disconnect();
    };
  }, [element]);
  return {
    bounds: bounds,
    ref: attachRef
  };
}
//# sourceMappingURL=use-measure.js.map