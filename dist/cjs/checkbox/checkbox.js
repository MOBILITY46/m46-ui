"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

var _framerMotion = require("framer-motion");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var tickVariants = {
  pressed: function pressed(isChecked) {
    return {
      pathLength: isChecked ? 0.85 : 0.2
    };
  },
  checked: {
    pathLength: 1
  },
  unchecked: {
    pathLength: 0
  }
};
var boxVariants = {
  hover: {
    scale: 1.05,
    strokeWidth: 60
  },
  pressed: {
    scale: 0.95,
    strokeWidth: 35
  },
  checked: {
    stroke: '#1E90FF'
  },
  unchecked: {
    stroke: '#ddd',
    strokeWidth: 50
  }
};

var Checkbox = function Checkbox(props) {
  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var pathLength = (0, _framerMotion.useMotionValue)(0);
  var opacity = (0, _framerMotion.useTransform)(pathLength, [0.05, 0.15], [0, 1]);
  return /*#__PURE__*/React.createElement(_react2.Box, {
    w: props.size || '24px'
  }, /*#__PURE__*/React.createElement(_framerMotion.motion.svg, {
    initial: false,
    animate: isChecked ? 'checked' : 'unchecked',
    whileHover: "hover",
    whileTap: "pressed",
    viewBox: "0 0 440 440",
    width: "100%",
    height: "100%",
    onClick: function onClick() {
      return setIsChecked(!isChecked);
    }
  }, /*#__PURE__*/React.createElement(_framerMotion.motion.path, {
    d: "M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z",
    fill: "transparent",
    strokeWidth: "50",
    stroke: "#FF008C",
    variants: boxVariants
  }), /*#__PURE__*/React.createElement(_framerMotion.motion.path, {
    d: "M 0 128.666 L 128.658 257.373 L 341.808 0",
    transform: "translate(54.917 88.332) rotate(-4 170.904 128.687)",
    fill: "transparent",
    strokeWidth: "65",
    stroke: "hsl(0, 0%, 100%)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    variants: tickVariants,
    style: {
      pathLength: pathLength,
      opacity: opacity
    },
    custom: isChecked
  }), /*#__PURE__*/React.createElement(_framerMotion.motion.path, {
    d: "M 0 128.666 L 128.658 257.373 L 341.808 0",
    transform: "translate(54.917 68.947) rotate(-4 170.904 128.687)",
    fill: "transparent",
    strokeWidth: "65",
    stroke: "#7700FF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    variants: tickVariants,
    style: {
      pathLength: pathLength,
      opacity: opacity
    },
    custom: isChecked
  })));
};

exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map