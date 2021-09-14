"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIProvider = exports.theme = exports.colors = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var colors = {
  black: '#000000',
  white: '#ffffff',
  primary: {
    '50': '#e8f4ff',
    '100': '#d2e9ff',
    '200': '#a5d3ff',
    '300': '#78bcff',
    '500': '#4ba6ff',
    '400': '#ie90ff',
    '600': '#1873cc',
    '700': '#125699',
    '800': '#0c3a66',
    '900': '#061d33'
  },
  secondary: {
    '50': '#f1fdf7',
    '100': '#e3faef',
    '200': '#c7f5df',
    '300': '#abf1ce',
    '400': '#8fecbe',
    '500': '#73e7ae',
    '600': '#5cb98b',
    '700': '#458b68',
    '800': '#2e5c46',
    '900': '#172e23'
  },
  tertiary: {
    '50': '#e5eff1',
    '100': '#ccdfe2',
    '200': '#99bfc5',
    '300': '#66a0a9',
    '400': '#33808c',
    '500': '#00606f',
    '600': '#004d59',
    '700': '#003a43',
    '800': '#00262c',
    '900': '#001316'
  },
  gray: {
    '50': '#f4f4f4',
    '100': '#e9e9e9',
    '200': '#d4d4d4',
    '300': '#bebebe',
    '400': '#e5e5e5',
    '500': '#939393',
    '600': '#767676',
    '700': '#585858',
    '800': '#ebebeb',
    '900': '#1d1d1d'
  },
  blackAlpha: {
    '50': '#f5f5f5',
    '100': '#f0f0f0',
    '200': '#ebebeb',
    '300': '#d6d6d6',
    '400': '#c2c2c2',
    '500': '#a3a3a3',
    '600': '#858585',
    '700': '#5c5c5c',
    '800': '#333333',
    '900': '#141414'
  }
};
exports.colors = colors;
var theme = (0, _react2.extendTheme)({
  colors: colors,
  fonts: {
    heading: 'DM Sans',
    body: 'DM Sans'
  }
});
exports.theme = theme;

var UIProvider = function UIProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_react2.ChakraProvider, {
    theme: theme
  }, children);
};

exports.UIProvider = UIProvider;
//# sourceMappingURL=index.js.map